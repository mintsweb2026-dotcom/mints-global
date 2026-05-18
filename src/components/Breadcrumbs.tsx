import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { posts } from '../data/posts';

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

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  const paths = location.pathname.split('/').filter((p) => p !== '');

  // Format path segments for display
  const formatPath = (path: string, index: number, allPaths: string[]) => {
    // If we're inside a blog post, use the actual post title instead of slug
    if (index > 0 && allPaths[index - 1] === 'blog') {
      const post = posts.find((p) => p.slug === path);
      if (post) {
        return post.title;
      }
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mintsglobal.ae" },
      ...paths.map((path, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
        return {
          "@type": "ListItem",
          position: index + 2,
          name: formatPath(path, index, paths),
          item: `https://mintsglobal.ae${routeTo}`
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
          className="flex items-center space-x-3 text-base text-brand-white-70 overflow-x-auto whitespace-nowrap pb-1 no-scrollbar" 
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-3">
            <li>
              <Link to="/" className="flex items-center hover:text-olive-500 transition-colors">
                <Home size={18} className="mr-2" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            
            {paths.map((path, index) => {
              const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
              const isLast = index === paths.length - 1;
              const displayName = formatPath(path, index, paths);
              
              return (
                <li key={path} className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-white/20" />
                  {isLast ? (
                    <span className="text-olive-500 font-medium truncate max-w-xs md:max-w-md lg:max-w-lg text-lg" aria-current="page" title={displayName}>
                      {displayName}
                    </span>
                  ) : (
                    <Link to={routeTo} className="hover:text-olive-500 transition-colors font-medium">
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
