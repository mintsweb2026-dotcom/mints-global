import { useState, useEffect } from 'react';
import { ArrowRight, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getPosts, BlogPost } from '../data/posts';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { SEO_DATA } from '../lib/seo-data';

const blogListingSchema = {
 "@context":"https://schema.org",
 "@type":"Blog",
 "name":"MINTS Global Blog",
 "url":"https://www.mintsglobal.ae/blog",
 "description":"Digital marketing, technology, cybersecurity and business growth insights from MINTS Global UAE.",
 "publisher":{
   "@type":"Organization",
   "name":"MINTS Global",
   "url":"https://www.mintsglobal.ae",
   "logo":{
     "@type":"ImageObject",
     "url":"https://www.mintsglobal.ae/logo.png"
   }
 },
 "inLanguage":"en"
};

export function Blog() {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.blog[lang] || SEO_DATA.blog.en;

  useEffect(() => {
    let isActive = true;
    setIsLoading(true);
    getPosts().then((data) => {
      if (isActive) {
        const tagsSet = new Set<string>();
        data.forEach(p => p.tags?.forEach(t => tagsSet.add(t)));
        setAvailableTags(Array.from(tagsSet).sort());

        const filtered = data.filter(p => {
          const matchesQuery = query === '' || p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase());
          const matchesTag = !selectedTag || (p.tags && p.tags.includes(selectedTag));
          return matchesQuery && matchesTag;
        });
        setFilteredPosts(filtered);
        setCurrentPage(1);
        setIsLoading(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, [query, selectedTag]);


  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="w-full">
      <SEO 
        title="Digital Marketing & Technology Insights Blog | MINTS Global UAE"
        rawTitle={true}
        description="Explore MINTS Global’s latest blogs on digital marketing, SEO, technology, cybersecurity, software solutions, and business growth strategies in UAE."
        canonical="/blog"
        ogTitle="Digital Marketing & Technology Insights Blog | MINTS Global UAE"
        ogDescription="Explore MINTS Global blogs covering SEO, digital marketing, cybersecurity, technology, and business growth strategies."
        ogImage="https://www.mintsglobal.ae/images/blog-og-image.jpg"
        twitterTitle="Digital Marketing & Technology Insights Blog | MINTS Global UAE"
        twitterDescription="Latest insights on SEO, technology, cybersecurity, and digital growth strategies from MINTS Global."
        twitterImage="https://www.mintsglobal.ae/images/blog-og-image.jpg"
      />
      <JsonLd data={blogListingSchema} />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight uppercase">
              INSIGHTS & <br/><span className="text-olive-500">NEWS.</span>
            </h1>
            <p className="text-brand-white-70 max-w-2xl text-lg">
              Latest thoughts, case studies, and engineering practices from the Mints Global team.
            </p>
          </div>
          <div className="relative w-full md:w-auto min-w-[300px]">
             <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-white-70" />
             <input 
               type="text" 
               placeholder="Search articles..." 
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               disabled={isLoading}
               className="w-full bg-olive-900 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-olive-500 transition-colors placeholder:text-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
             />
          </div>
        </div>

        {!isLoading && availableTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                selectedTag === null
                  ? 'bg-olive-500 text-black border-olive-500'
                  : 'bg-white/5 text-brand-white-70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              All
            </button>
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  tag === selectedTag
                    ? 'bg-olive-500 text-black border-olive-500'
                    : 'bg-white/5 text-brand-white-70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="flex flex-col pt-8 border-t border-white/10 animate-pulse">
                <div className="w-full h-48 sm:h-64 mb-6 rounded-xl bg-white/5"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-4 w-20 bg-white/5 rounded"></div>
                  <div className="h-4 w-4 bg-white/5 rounded-full"></div>
                  <div className="h-4 w-16 bg-white/5 rounded"></div>
                </div>
                <div className="h-8 w-3/4 bg-white/5 rounded mb-4"></div>
                <div className="h-8 w-1/2 bg-white/5 rounded mb-8"></div>
                <div className="flex items-center justify-between mt-auto pb-4">
                  <div className="h-4 w-24 bg-white/5 rounded"></div>
                  <div className="h-6 w-6 bg-white/5 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredPosts.length === 0 && (
              <div className="text-center py-20 text-brand-white-70">
                No articles found matching "{query}".
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {currentPosts.map((post) => (
                 <Link to={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer flex flex-col pt-8 border-t border-white/10">
                   {post.image && (
                     <div className="w-full h-48 sm:h-64 mb-6 overflow-hidden rounded-xl bg-olive-900 border border-white/10 relative">
                       <img src={post.image} loading="lazy" alt="MINTS Global digital marketing and technology blog insights" title="Digital Marketing & Technology Insights - MINTS Global" width="800" height="600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     </div>
                   )}
                   <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-brand-white-70 mb-4">
                     <span className="text-olive-500">{post.category}</span>
                     <span>&bull;</span>
                     <span>{post.readTime}</span>
                   </div>
                   <h3 className="text-2xl font-display font-bold mb-8 group-hover:text-olive-500 transition-colors flex-1">
                     {post.title}
                   </h3>
                   {post.tags && post.tags.length > 0 && (
                     <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                       {post.tags.slice(0, 3).map(tag => (
                         <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-brand-white-50">
                           {tag}
                         </span>
                       ))}
                       {post.tags.length > 3 && (
                         <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-brand-white-50">
                           +{post.tags.length - 3}
                         </span>
                       )}
                     </div>
                   )}
                   <div className="flex items-center justify-between text-sm mt-auto pb-4">
                     <span className="text-brand-white-70">{post.date}</span>
                     <ArrowRight className="text-olive-500 group-hover:translate-x-2 transition-transform" size={20} />
                   </div>
                 </Link>
               ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
                <div className="flex items-center gap-2 overflow-x-auto py-1 px-1 no-scrollbar">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        currentPage === page 
                          ? 'bg-olive-500 text-brand-black border border-olive-500' 
                          : 'border border-white/20 hover:bg-white/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
