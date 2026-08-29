import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { getPostBySlug } from '../data/posts';

// Using raw script tag for structured data to avoid react-helmet issues with multiple instances
const JsonLd = ({ data }: { data: object }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export function Breadcrumbs() {
  const location = useLocation();
  const { t } = useTranslation();
  const [postTitle, setPostTitle] = useState<string | null>(null);

  const paths = location.pathname.split('/').filter((p) => p !== '');

  useEffect(() => {
    const fetchTitle = async () => {
      const blogIdx = paths.indexOf('blog');
      if (blogIdx !== -1 && blogIdx + 1 < paths.length) {
        const slug = paths[blogIdx + 1];
        const post = await getPostBySlug(slug);
        if (post) {
          setPostTitle(post.title);
        }
      }
    };
    fetchTitle();
  }, [location.pathname]);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  // Format path segments for display
  const formatPath = (path: string, index: number, allPaths: string[]) => {
    // If we're inside a blog post, use the actual post title instead of slug
    if (index > 0 && allPaths[index - 1] === 'blog' && postTitle) {
      return postTitle;
    }

    // Check if there's a translation for this specific path
    const translationKey = `nav.${path.replace(/-/g, '')}`;
    const translated = t(translationKey);
    
    // If not translated (equals key), format it nicely
    if (translated === translationKey) {
      return path
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    return translated;
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mintsglobal.ae/" },
      ...paths.map((path, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
        return {
          "@type": "ListItem",
          position: index + 2,
          name: formatPath(path, index, paths),
          item: `https://www.mintsglobal.ae${routeTo}/`
        };
      })
    ]
  };

  return (
    <div className="w-full bg-olive-950/50 border-y border-white/5 py-4">
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3 text-base text-brand-white-70 pb-1 breadcrumb-nav w-full min-w-0" 
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2 sm:space-x-3 w-full min-w-0">
            <li className="flex-shrink-0">
              <Link to="/" className="flex items-center hover:text-white transition-colors">
                <Home size={18} className="mr-1 sm:mr-2" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            
            {paths.map((path, index) => {
              const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
              const isLast = index === paths.length - 1;
              const displayName = formatPath(path, index, paths);
              
              return (
                <li key={path} className={`flex items-center space-x-2 sm:space-x-3 ${isLast ? 'min-w-0 flex-1' : 'flex-shrink-0'}`}>
                  <ChevronRight size={18} className="text-white/20 flex-shrink-0" />
                  {isLast ? (
                    <span className="text-olive-500 font-bold hover:text-olive-400 transition-colors truncate block text-lg" aria-current="page" title={displayName}>
                      {displayName}
                    </span>
                  ) : (
                    <Link to={routeTo} className="hover:text-white transition-colors font-medium">
                      {displayName}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </motion.nav>
      </div>
    </div>
  );
}
