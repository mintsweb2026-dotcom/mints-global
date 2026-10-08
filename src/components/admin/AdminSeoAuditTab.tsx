import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { calcPostSeoScore, calcWorkSeoScore } from '../../lib/seoScore';
import { getPosts } from '../../data/posts';
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


export function AdminSeoAuditTab() {
  const [data, setData] = useState<any[]>([]);
  const [missingAltItems, setMissingAltItems] = useState<{ id: string, type: 'post' | 'work', title: string, hasImage: boolean, hasAlt: boolean }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [posts, worksSnapshot] = await Promise.all([
          getPosts(),
          getDocs(collection(db, 'works')),
        ]);

        const items: any[] = [];
        const missingAlt: { id: string, type: 'post' | 'work', title: string, hasImage: boolean, hasAlt: boolean }[] = [];
        
        posts.forEach(post => {
            if (post.image && (!post.imageAlt || !post.imageAlt.trim())) {
                missingAlt.push({
                   id: post.id,
                   type: 'post',
                   title: post.title || post.id,
                   hasImage: !!post.image,
                   hasAlt: false
                });
            }

            const postDate = post.createdAt?.toDate ? post.createdAt.toDate() : (post.date ? new Date(post.date) : null);
            if (postDate) {
                items.push({
                    type: 'post',
                    score: calcPostSeoScore(post),
                    date: postDate
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
                    score: calcWorkSeoScore(data),
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
    <div className="bg-white border border-[#E4E4E4] rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-light text-[#182012] mb-6">SEO Audit - Average Score Over Time</h2>
      {loading ? (
        <p className="text-[#5A644D]">Loading SEO data...</p>
      ) : data.length === 0 ? (
        <p className="text-[#5A644D]">No data available for SEO chart.</p>
      ) : (
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(13,26,15,0.1)" />
              <XAxis dataKey="name" stroke="rgba(13,26,15,0.6)" />
              <YAxis stroke="rgba(13,26,15,0.6)" domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(13,26,15,0.15)', color: '#182012', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                itemStyle={{ color: '#182012' }}
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
                stroke="#687838" 
                strokeWidth={3} 
                dot={{ r: 4 }} 
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Missing Alt Text Section */}
      <div className="mt-12 bg-white border border-[#E4E4E4] rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-light text-[#182012] mb-2">Image Accessibility & SEO Report</h2>
        <p className="text-[#5A644D] text-sm mb-6">
          The following posts and projects contain featured images but are missing descriptive <code className="bg-[#F0F0F0] px-1.5 py-0.5 rounded text-olive-600 font-bold">alt</code> text. Alt text is crucial for accessibility (screen readers) and helps search engines understand image content.
        </p>
        
        {loading ? (
           <p className="text-[#5A644D]">Scanning...</p>
        ) : missingAltItems.length === 0 ? (
           <div className="p-4 bg-olive-500/10 border border-olive-500/20 rounded-xl text-olive-600 font-semibold">
             Great job! All posts and projects with featured images have descriptive alt text.
           </div>
        ) : (
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-[#E4E4E4]">
                   <th className="py-3 px-4 font-semibold text-[#5A644D]">Type</th>
                   <th className="py-3 px-4 font-semibold text-[#5A644D]">Title</th>
                   <th className="py-3 px-4 font-semibold text-[#5A644D]">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-[#182012]/10">
                 {missingAltItems.map((item, i) => (
                   <tr key={`${item.type}-${item.id}-${i}`} className="hover:bg-white text-sm transition-colors">
                     <td className="py-3 px-4 text-[#182012]">
                        <span className={`inline-block px-2 py-1 rounded text-xs uppercase font-bold ${item.type === 'post' ? 'bg-blue-500/10 text-blue-700 border border-blue-500/20' : 'bg-purple-500/10 text-purple-700 border border-purple-500/20'}`}>
                          {item.type}
                        </span>
                     </td>
                     <td className="py-3 px-4 text-[#182012] font-medium truncate max-w-[300px]" title={item.title}>{item.title}</td>
                     <td className="py-3 px-4">
                        <span className="text-red-600 text-xs font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
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
