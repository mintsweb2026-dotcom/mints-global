import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const calculateSeoScorePost = (post: any) => {
  let score = 0;
  
  const titleLength = (post.seoTitle || post.title || "").length;
  if (titleLength > 10 && titleLength <= 60) score += 25;
  else if (titleLength > 0 && titleLength <= 80) score += 15;

  const descLength = (post.seoDescription || post.excerpt || "").length;
  if (descLength > 50 && descLength <= 160) score += 25;
  else if (descLength > 0 && descLength <= 200) score += 15;

  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  if (wordCount > 300) score += 30;
  else if (wordCount > 100) score += 15;

  if (post.image) score += 10;
  if (post.tags && post.tags.length > 0) score += 10;

  return Math.min(100, Math.max(0, score));
};

const calculateSeoScoreWork = (work: any) => {
  let score = 0;
  
  const titleLength = (work.title || "").length;
  if (titleLength > 10 && titleLength <= 60) score += 25;
  else if (titleLength > 0 && titleLength <= 80) score += 15;

  const descLength = (work.description || "").length;
  if (descLength > 50 && descLength <= 160) score += 25;
  else if (descLength > 0 && descLength <= 200) score += 15;

  if (work.titleImage) score += 25;
  if (work.tags && work.tags.length > 0) score += 10;
  if (work.mediaUrls && work.mediaUrls.length > 0) score += 15;

  return Math.min(100, Math.max(0, score));
};

export function AdminSeoAuditTab() {
  const [data, setData] = useState<any[]>([]);
  const [missingAltItems, setMissingAltItems] = useState<{ id: string, type: 'post' | 'work', title: string, hasImage: boolean, hasAlt: boolean }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const postsSnapshot = await getDocs(collection(db, 'posts'));
        const worksSnapshot = await getDocs(collection(db, 'works'));

        const items: any[] = [];
        const missingAlt: { id: string, type: 'post' | 'work', title: string, hasImage: boolean, hasAlt: boolean }[] = [];
        
        postsSnapshot.forEach(doc => {
            const data = doc.data();
            if (data.image && (!data.imageAlt || !data.imageAlt.trim())) {
                missingAlt.push({
                   id: doc.id,
                   type: 'post',
                   title: data.title || doc.id,
                   hasImage: !!data.image,
                   hasAlt: false
                });
            }

            if (data.createdAt) {
                items.push({
                    type: 'post',
                    score: calculateSeoScorePost(data),
                    date: data.createdAt.toDate()
                });
            }
        });

        worksSnapshot.forEach(doc => {
            const data = doc.data();
            
            if (data.titleImage && (!data.titleImageAlt || !data.titleImageAlt.trim())) {
                missingAlt.push({
                   id: doc.id,
                   type: 'work',
                   title: data.title || doc.id,
                   hasImage: !!data.titleImage,
                   hasAlt: false
                });
            }

            if (data.createdAt) {
                items.push({
                    type: 'work',
                    score: calculateSeoScoreWork(data),
                    date: data.createdAt.toDate()
                });
            }
        });

        // Group by month
        const groupedData: Record<string, { postScores: number[], workScores: number[] }> = {};

        items.forEach(item => {
            const dateObj = new Date(item.date);
            const monthKey = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
            if (!groupedData[monthKey]) {
                groupedData[monthKey] = { postScores: [], workScores: [] };
            }
            if (item.type === 'post') {
                groupedData[monthKey].postScores.push(item.score);
            } else {
                groupedData[monthKey].workScores.push(item.score);
            }
        });

        const chartData = Object.keys(groupedData).sort().map(key => {
            const group = groupedData[key];
            const avgPostScore = group.postScores.length > 0 
                ? group.postScores.reduce((a, b) => a + b, 0) / group.postScores.length 
                : null;
            const avgWorkScore = group.workScores.length > 0 
                ? group.workScores.reduce((a, b) => a + b, 0) / group.workScores.length 
                : null;
            
            // Format nice month like "Jan 2026"
            const [year, month] = key.split('-');
            const date = new Date(parseInt(year), parseInt(month) - 1, 1);
            const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

            return {
                name: monthName,
                sortKey: key,
                avgPostScore: avgPostScore !== null ? Math.round(avgPostScore) : undefined,
                avgWorkScore: avgWorkScore !== null ? Math.round(avgWorkScore) : undefined,
            };
        });

        setData(chartData);
        setMissingAltItems(missingAlt);

      } catch (error) {
        console.error("Error fetching data for SEO audit:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-light text-white mb-6">SEO Audit - Average Score Over Time</h2>
      {loading ? (
        <p className="text-brand-white-70">Loading SEO data...</p>
      ) : data.length === 0 ? (
        <p className="text-brand-white-70">No data available for SEO chart.</p>
      ) : (
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="avgPostScore" 
                name="Avg Blog Post SEO" 
                stroke="#6366f1" 
                strokeWidth={3} 
                dot={{ r: 4 }} 
                connectNulls
              />
              <Line 
                type="monotone" 
                dataKey="avgWorkScore" 
                name="Avg Project SEO" 
                stroke="#10b981" 
                strokeWidth={3} 
                dot={{ r: 4 }}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Missing Alt Text Section */}
      <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <h2 className="text-2xl font-light text-white mb-2">Image Accessibility & SEO Report</h2>
        <p className="text-brand-white-70 text-sm mb-6">
          The following posts and projects contain featured images but are missing descriptive <code className="bg-black/40 px-1.5 py-0.5 rounded text-olive-400">alt</code> text. Alt text is crucial for accessibility (screen readers) and helps search engines understand image content.
        </p>
        
        {loading ? (
           <p className="text-brand-white-70">Scanning...</p>
        ) : missingAltItems.length === 0 ? (
           <div className="p-4 bg-olive-500/10 border border-olive-500/20 rounded-xl text-olive-400 font-medium">
             Great job! All posts and projects with featured images have descriptive alt text.
           </div>
        ) : (
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-white/10">
                   <th className="py-3 px-4 font-medium text-brand-white-70">Type</th>
                   <th className="py-3 px-4 font-medium text-brand-white-70">Title</th>
                   <th className="py-3 px-4 font-medium text-brand-white-70">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {missingAltItems.map((item, i) => (
                   <tr key={`${item.type}-${item.id}-${i}`} className="hover:bg-white/5 text-sm transition-colors">
                     <td className="py-3 px-4 text-white">
                        <span className={`inline-block px-2 py-1 rounded text-xs uppercase font-medium ${item.type === 'post' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
                          {item.type}
                        </span>
                     </td>
                     <td className="py-3 px-4 text-white truncate max-w-[300px]" title={item.title}>{item.title}</td>
                     <td className="py-3 px-4">
                        <span className="text-red-400 text-xs font-medium flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                          Missing Alt Text
                        </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        )}
      </div>
    </div>
  );
}
