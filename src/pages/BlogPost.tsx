import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight, List } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug, getStaticPostBySlug, getPosts, BlogPost as BlogPostType } from '../data/posts';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { NewsletterForm } from '../components/NewsletterForm';
import { analytics, db } from '../lib/firebase';
import { logEvent } from 'firebase/analytics';
import { doc, updateDoc, increment } from 'firebase/firestore';

const flattenText = (children: React.ReactNode): string => {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(flattenText).join('');
  if (typeof children === 'object' && children !== null && 'props' in children) {
    return flattenText((children as any).props.children);
  }
  return '';
};

const generateId = (text: string) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const initialStaticPost = slug ? getStaticPostBySlug(slug) : undefined;
  const [post, setPost] = useState<BlogPostType | undefined>(initialStaticPost);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(!initialStaticPost);
  const [toc, setToc] = useState<{ id: string, text: string, level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';

  useEffect(() => {
    setIsLoading(true);
    if (!slug) return;
    
    // Simulate fetching the post and all posts for "related" logic
    Promise.all([getPostBySlug(slug), getPosts()]).then(([fetchedPost, allPosts]) => {
      setPost(fetchedPost);
      if (fetchedPost) {
        // Log analytics and update firestore views
        if (analytics) {
          logEvent(analytics, 'page_view', {
            page_title: fetchedPost.title,
            page_location: window.location.href,
            page_path: `/blog/${fetchedPost.slug}`
          });
          logEvent(analytics, 'view_item', {
            item_id: fetchedPost.id,
            item_name: fetchedPost.title,
            item_category: fetchedPost.category
          });
        }
        
        updateDoc(doc(db, 'posts', fetchedPost.id), {
          views: increment(1)
        }).catch((e) => {
          console.warn("Could not update post views in Firestore:", e);
        });

        setRelatedPosts(
          allPosts
            .filter((p) => p.slug !== fetchedPost.slug)
            .map((p) => {
              let score = 0;
              if (p.category === fetchedPost.category) score += 2;
              if (p.tags && fetchedPost.tags) {
                const sharedTags = p.tags.filter(t => fetchedPost.tags!.includes(t)).length;
                score += sharedTags;
              }
              return { post: p, score };
            })
            .filter((item) => item.score > 0)
            .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
            .map(item => item.post)
            .slice(0, 3)
        );

        // Generate TOC
        if (fetchedPost.content) {
          const headingRegex = /^(#{2,4})\s+(.+)$/gm;
          const headings: { id: string, text: string, level: number }[] = [];
          let match;
          while ((match = headingRegex.exec(fetchedPost.content)) !== null) {
            const level = match[1].length;
            const rawText = match[2].trim();
            const text = rawText.replace(/[*_~`]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
            const id = generateId(text);
            headings.push({ id, text, level });
          }
          setToc(headings);
        }
      }
      setIsLoading(false);
    });
  }, [slug]);

  // Scroll spy for TOC
  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 1.0 }
    );

    const elements = toc.map((heading) => document.getElementById(heading.id)).filter(Boolean);
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [toc]);

  if (isLoading) {
    return (
      <div className="w-full">
        <article className="w-full animate-pulse">
          {/* Skeleton Header */}
          <header className="w-full pt-24 pb-16 lg:pt-32 lg:pb-20 bg-olive-950/50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="h-6 w-24 bg-white/5 rounded mb-6"></div>
              <div className="h-16 w-3/4 bg-white/5 rounded mb-8"></div>
              <div className="flex gap-6 mb-12">
                <div className="h-4 w-24 bg-white/5 rounded"></div>
                <div className="h-4 w-24 bg-white/5 rounded"></div>
              </div>
            </div>
            <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-8">
              <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-3xl bg-white/5"></div>
            </div>
          </header>
          {/* Skeleton Content */}
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/5 rounded"></div>
              <div className="h-4 w-5/6 bg-white/5 rounded"></div>
              <div className="h-4 w-full bg-white/5 rounded"></div>
              <div className="h-4 w-3/4 bg-white/5 rounded"></div>
              <div className="h-4 w-full bg-white/5 rounded mt-8"></div>
              <div className="h-4 w-4/5 bg-white/5 rounded"></div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display font-black text-white mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-olive-500 hover:text-olive-400 flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
      </div>
    );
  }

  let isoDate = post.date;
  try {
    isoDate = new Date(post.date).toISOString();
  } catch (e) {
    // fallback if parsing fails
  }

  const parsedAuthor = post.author ? post.author.split('|')[0].trim() : "Mints Global";
  const canonicalUrl = `https://mintsglobal.ae/blog/${post.slug}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.seoTitle || post.title,
    "image": post.image || "",
    "author": {
      "@type": "Organization",
      "name": "MINTS Global"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MINTS Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mintsglobal.ae/logo.png"
      }
    },
    "datePublished": isoDate,
    "dateModified": isoDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title={post.seoTitle || `${post.title} | Mints Global Blog`}
        description={post.seoDescription || post.excerpt || "Read our latest blog post at Mints Global."}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        article={{
          publishedTime: isoDate,
          modifiedTime: isoDate,
          author: parsedAuthor,
          section: post.category
        }}
        ogImage={post.image}
        keywords={["digital article", "tech blog post", "industry insights", "Mints Global insights", "expert opinions"]}
      />
      <JsonLd data={schemaData} />
      <article className="w-full">
        {/* Post Header */}
        <header className="w-full pt-24 pb-16 lg:pt-32 lg:pb-20 bg-olive-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="px-3 py-1.5 rounded-lg bg-olive-900 border border-olive-800/50 text-olive-300">
                {post.category}
              </span>
              {post.tags && post.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-brand-white-50">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-white-40 font-medium mb-12">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-olive-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-olive-500" />
                <span>{post.readTime}</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <span className="text-olive-700">•</span>
                  <span className="text-brand-white-70">{post.author}</span>
                </div>
              )}
            </div>
          </div>
          {post.image && (
            <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-8">
              <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative border border-white/10 group">
                <div className="absolute inset-0 bg-olive-900 animate-pulse -z-10"></div>
                <img src={post.image} fetchPriority="high" alt={post.imageAlt || post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          )}
        </header>

        {/* Post Content with TOC */}
        <div className={`mx-auto px-6 lg:px-8 py-20 lg:py-24 ${toc.length > 0 ? 'max-w-7xl' : 'max-w-4xl'}`}>
          <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16`}>
            
            {/* Main Content */}
            <div className={`w-full ${toc.length > 0 ? 'lg:w-[65%] xl:w-[70%] lg:order-1' : ''}`}>
              
              {/* Mobile TOC */}
              {toc.length > 0 && (
                <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 lg:hidden">
                  <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                    <List size={20} className="text-olive-500" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-3">
                    {toc.map((heading, i) => (
                      <a 
                        key={`${heading.id}-${i}`} 
                        href={`#${heading.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(heading.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className={`block text-sm transition-colors text-brand-white-70 hover:text-olive-500 ${
                          heading.level === 3 ? 'ml-4' : heading.level === 4 ? 'ml-8' : ''
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="prose prose-invert max-w-none prose-lg
                prose-headings:font-display prose-headings:font-black prose-headings:text-white prose-headings:mt-16 prose-headings:mb-6
                prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-h2:text-olive-100
                prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-olive-200
                prose-h4:text-xl md:prose-h4:text-2xl prose-h4:text-olive-300
                prose-p:text-brand-white-70 prose-p:leading-relaxed prose-p:mb-8
                prose-a:text-olive-500 hover:prose-a:text-olive-400 prose-a:underline prose-a:underline-offset-4 prose-a:transition-colors
                prose-strong:text-white prose-strong:font-bold
                prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-8 prose-ul:space-y-3
                prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-8 prose-ol:space-y-3
                prose-li:text-brand-white-70 prose-li:marker:text-olive-500
                prose-blockquote:border-l-4 prose-blockquote:border-olive-500 prose-blockquote:bg-olive-900/30 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:my-10 prose-blockquote:text-white prose-blockquote:text-xl prose-blockquote:italic  prose-blockquote:rounded-r-2xl
                prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:shadow-2xl prose-pre:p-6 prose-pre:my-10 prose-pre:overflow-x-auto
                prose-code:text-olive-300 prose-code:bg-olive-900/50 prose-code:px-2 prose-code:py-1.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:my-12 prose-img:w-full prose-img:object-cover
                prose-hr:border-white/10 prose-hr:my-12
                prose-table:w-full prose-table:my-10 prose-table:border-collapse
                prose-th:border prose-th:border-white/10 prose-th:px-4 prose-th:py-3 prose-th:bg-olive-900/50 prose-th:text-left
                prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-3 text-brand-white-70">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({node, children, ...props}) => {
                      const id = generateId(flattenText(children));
                      return <h2 id={id} {...props} className="scroll-mt-24">{children}</h2>;
                    },
                    h3: ({node, children, ...props}) => {
                      const id = generateId(flattenText(children));
                      return <h3 id={id} {...props} className="scroll-mt-24">{children}</h3>;
                    },
                    h4: ({node, children, ...props}) => {
                      const id = generateId(flattenText(children));
                      return <h4 id={id} {...props} className="scroll-mt-24">{children}</h4>;
                    },
                    h5: ({node, children, ...props}) => {
                      const id = generateId(flattenText(children));
                      return <h5 id={id} {...props} className="scroll-mt-24">{children}</h5>;
                    },
                    h6: ({node, children, ...props}) => {
                      const id = generateId(flattenText(children));
                      return <h6 id={id} {...props} className="scroll-mt-24">{children}</h6>;
                    },
                    img: ({ node, ...props }) => (
                      <span className="block w-full relative">
                        <img 
                          {...props} 
                          loading="lazy" 
                          className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl my-12 object-cover"
                        />
                      </span>
                    )
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Desktop TOC */}
            {toc.length > 0 && (
              <div className="hidden lg:block lg:w-[35%] xl:w-[30%] lg:order-2">
                <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                  <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                    <List size={20} className="text-olive-500" />
                    Table of Contents
                  </h3>
                  <div className="border-l border-white/10 ml-3">
                    <nav className="space-y-1 relative">
                      {toc.map((heading, i) => (
                        <div key={`${heading.id}-${i}`} className="relative">
                          {activeId === heading.id && (
                            <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-olive-500 rounded-r z-10" />
                          )}
                          <a 
                            href={`#${heading.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(heading.id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className={`block py-1.5 transition-colors text-sm
                              ${activeId === heading.id ? 'text-olive-500 font-bold' : 'text-brand-white-70 hover:text-white'}
                              ${heading.level === 3 ? 'pl-8' : heading.level === 4 ? 'pl-12' : 'pl-4'}
                            `}
                          >
                            {heading.text}
                          </a>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-20">
          <NewsletterForm />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-white/5">
            <h2 className="font-display text-4xl font-black mb-12 uppercase text-center">Related <span className="text-olive-500">Posts</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="group cursor-pointer flex flex-col pt-8 border-t border-white/10">
                  {relatedPost.image && (
                    <div className="w-full h-32 sm:h-48 mb-6 overflow-hidden rounded-xl bg-olive-900 border border-white/10 relative">
                      <img src={relatedPost.image} loading="lazy" alt={relatedPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-brand-white-70 mb-4">
                    <span className="text-olive-500">{relatedPost.category}</span>
                    <span>&bull;</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-8 group-hover:text-olive-500 transition-colors flex-1">
                    {relatedPost.title}
                  </h3>
                  {relatedPost.tags && relatedPost.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      {relatedPost.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-brand-white-50">
                          {tag}
                        </span>
                      ))}
                      {relatedPost.tags.length > 3 && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-brand-white-50">
                          +{relatedPost.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm mt-auto pb-4">
                    <span className="text-brand-white-70">{relatedPost.date}</span>
                    <ArrowRight className="text-olive-500 group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
