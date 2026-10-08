import { useState, useEffect } from 'react';
import { ArrowRight, Search, ArrowLeft, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { getPosts, STATIC_POSTS, BlogPost } from '../data/posts';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { SEO_DATA } from '../lib/seo-data';

const blogListingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'MINTS Global Blog',
  url: 'https://www.mintsglobal.ae/blog',
  description: 'Digital marketing, technology, cybersecurity and business growth insights from MINTS Global UAE.',
  publisher: {
    '@type': 'Organization',
    name: 'MINTS Global',
    url: 'https://www.mintsglobal.ae',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.mintsglobal.ae/logo-07.webp',
    },
  },
  blogPost: STATIC_POSTS.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://www.mintsglobal.ae/blog/${post.slug}`,
    image: post.image,
    author: {
      '@type': 'Organization',
      name: 'MINTS Global Editorial Team',
    },
  })),
  inLanguage: 'en',
};

// ── Shimmer skeleton card ─────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="flex flex-col pt-8 border-t border-[#E4E4E4]">
      <div className="w-full h-48 sm:h-64 mb-6 rounded-2xl skeleton" />
      <div className="flex items-center gap-4 mb-4">
        <div className="h-4 w-20 skeleton rounded" />
        <div className="h-4 w-4 skeleton rounded-full" />
        <div className="h-4 w-16 skeleton rounded" />
      </div>
      <div className="h-7 w-3/4 skeleton rounded mb-3" />
      <div className="h-7 w-1/2 skeleton rounded mb-8" />
      <div className="flex items-center justify-between mt-auto pb-4">
        <div className="h-4 w-24 skeleton rounded" />
        <div className="h-6 w-6 skeleton rounded-full" />
      </div>
    </div>
  );
}

// ── Featured hero card (first post) ──────────────────────────────────────────
function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative block rounded-3xl overflow-hidden border border-[#E4E4E4] hover:border-olive-500/50 shadow-xl transition-all duration-500 mb-16 bg-[#182012] text-white"
    >
      {post.image && (
        <div className="w-full aspect-[21/9] min-h-[360px] overflow-hidden relative">
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            width="1400"
            height="600"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#182012]/95 via-[#182012]/65 to-black/20" />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-olive-500 px-3.5 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/85 font-medium">
            <Clock size={13} className="text-white" />
            {post.readTime}
          </span>
        </div>
        <h2 className="font-display font-black text-2xl md:text-4xl lg:text-5xl text-white group-hover:text-olive-400 transition-colors leading-tight mb-4 max-w-4xl drop-shadow-sm">
          {post.title}
        </h2>
        <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:translate-x-1 transition-all">
          Read Article <ArrowRight size={16} className="text-olive-400 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

// ── Regular blog card ──────────────────────────────────────────────────────────
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col p-6 rounded-3xl bg-white border border-[#E4E4E4] hover:border-olive-500/40 hover:shadow-lg transition-all duration-300 h-full">
        {post.image && (
          <div className="w-full h-48 sm:h-56 mb-6 overflow-hidden rounded-2xl bg-olive-900 border border-[#E4E4E4] relative">
            <img
              src={post.image}
              loading="lazy"
              alt={post.title}
              width="800"
              height="600"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider mb-4">
          <span className="text-olive-500 bg-olive-500/10 border border-olive-500/25 px-3 py-1 rounded-full">{post.category}</span>
          <span className="flex items-center gap-1.5 text-[#5A644D] font-medium">
            <Clock size={12} />{post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-display font-black text-[#182012] mb-4 group-hover:text-olive-500 transition-colors flex-1 leading-snug">
          {post.title}
        </h3>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
            <Tag size={12} className="text-[#182012]/50 mt-1" />
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#F0F0F0] text-[#5A644D] border border-[#E4E4E4]">
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md bg-[#F0F0F0] text-[#5A644D] border border-[#E4E4E4]">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
        <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-[#E4E4E4]">
          <span className="text-[#5A644D] font-medium">{post.date}</span>
          <ArrowRight className="text-olive-500 group-hover:translate-x-2 transition-transform" size={18} />
        </div>
      </Link>
    </motion.div>
  );
}

const initialTags = Array.from(new Set(STATIC_POSTS.flatMap(p => p.tags || []))).sort();

// ── Main Blog page ─────────────────────────────────────────────────────────────
export function Blog() {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [availableTags, setAvailableTags] = useState<string[]>(initialTags);
  const [allPosts, setAllPosts] = useState<BlogPost[]>(STATIC_POSTS);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(STATIC_POSTS);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.blog[lang] || SEO_DATA.blog.en;

  useEffect(() => {
    let isActive = true;
    getPosts().then((data) => {
      if (isActive && data && data.length > 0) {
        const tagsSet = new Set<string>();
        data.forEach(p => p.tags?.forEach(t => tagsSet.add(t)));
        setAvailableTags(Array.from(tagsSet).sort());
        setAllPosts(data);
        setIsLoading(false);
      }
    });
    return () => { isActive = false; };
  }, []);

  // Filter on query/tag change
  useEffect(() => {
    const filtered = allPosts.filter(p => {
      const matchesQuery = query === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !selectedTag || (p.tags && p.tags.includes(selectedTag));
      return matchesQuery && matchesTag;
    });
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [query, selectedTag, allPosts]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // First post used as hero only when no filter is active
  const heroPost = !query && !selectedTag && currentPage === 1 ? currentPosts[0] : null;
  const gridPosts = heroPost ? currentPosts.slice(1) : currentPosts;

  return (
    <div className="w-full">
      <SEO
        title="Digital Marketing & Technology Insights Blog | MINTS Global UAE"
        rawTitle={true}
        description="Explore MINTS Global's latest blogs on digital marketing, SEO, technology, cybersecurity, software solutions, and business growth strategies in UAE."
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-4 leading-tight uppercase">
              INSIGHTS &amp; <br /><span className="text-olive-500">NEWS.</span>
            </h1>
            <p className="text-brand-white-70 max-w-2xl text-lg">
              Latest thoughts, case studies, and engineering practices from the Mints Global team.
            </p>
          </div>
          {/* Search */}
          <div className="relative w-full md:w-auto min-w-[300px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#182012]/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
              aria-label="Search blog articles"
              className="w-full bg-white border border-[#E4E4E4] rounded-full py-3 pl-11 pr-6 text-sm text-[#182012] focus:outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 transition-all placeholder:text-[#859177] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            />
          </div>
        </div>

        {/* Tags filter */}
        {!isLoading && availableTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedTag === null
                  ? 'bg-olive-500 text-white border-olive-500 shadow-sm'
                  : 'bg-white text-[#5A644D] border-[#E4E4E4] hover:bg-[#F0F0F0] hover:text-[#182012]'
              }`}
            >
              All
            </button>
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  tag === selectedTag
                    ? 'bg-olive-500 text-white border-olive-500 shadow-sm'
                    : 'bg-white text-[#5A644D] border-[#E4E4E4] hover:bg-[#F0F0F0] hover:text-[#182012]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Post count */}
        {!isLoading && filteredPosts.length > 0 && (
          <p className="text-[#5A644D] text-xs font-bold uppercase tracking-widest mb-8">
            Showing {startIndex + 1}–{Math.min(startIndex + postsPerPage, filteredPosts.length)} of {filteredPosts.length} articles
          </p>
        )}

        {isLoading ? (
          <>
            {/* Shimmer hero placeholder */}
            <div className="w-full aspect-[21/9] skeleton rounded-3xl mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(idx => <SkeletonCard key={idx} />)}
            </div>
          </>
        ) : (
          <>
            {filteredPosts.length === 0 && (
              <div className="text-center py-20 text-brand-white-70">
                No articles found matching "{query}".
              </div>
            )}

            {/* Featured hero card */}
            {heroPost && <FeaturedPost post={heroPost} />}

            {/* Grid cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post, idx) => (
                <BlogCard key={post.id} post={post} index={idx} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full border border-[#E4E4E4] bg-white text-[#182012] hover:bg-olive-500 hover:text-white hover:border-olive-500 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#182012] disabled:cursor-not-allowed transition-colors shadow-sm"
                  aria-label="Previous page"
                >
                  <ArrowLeft size={18} />
                </button>
                <div className="flex items-center gap-2 overflow-x-auto py-1 px-1 no-scrollbar">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                      className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold transition-colors shadow-sm ${
                        currentPage === page
                          ? 'bg-olive-500 text-white border border-olive-500'
                          : 'border border-[#E4E4E4] bg-white text-[#182012] hover:bg-olive-500 hover:text-white hover:border-olive-500'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full border border-[#E4E4E4] bg-white text-[#182012] hover:bg-olive-500 hover:text-white hover:border-olive-500 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#182012] disabled:cursor-not-allowed transition-colors shadow-sm"
                  aria-label="Next page"
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
