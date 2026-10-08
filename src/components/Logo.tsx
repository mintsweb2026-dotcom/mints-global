import { useState } from 'react';
import { cn } from '../lib/utils';

export function Logo({ className, variant = 'dark' }: { className?: string; variant?: 'light' | 'dark' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const mainColor = variant === 'light' ? '#F5F2EB' : '#284A1E';
    const subColor = variant === 'light' ? '#FFFFFF' : '#182012';
    return (
      <div className={cn("font-display font-medium tracking-wide flex items-center leading-none text-2xl select-none", className)}>
        <span style={{ color: mainColor }}>MI</span>
        <span 
          style={{ 
            backgroundImage: `linear-gradient(to right, ${subColor} 0%, ${subColor} 83%, ${mainColor} 83%, ${mainColor} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}
        >
          N
        </span>
        <span style={{ color: mainColor }}>TS</span>
      </div>
    );
  }

  return (
    <img 
      src="/images/logo-dark-green-600w.webp" 
      alt="Mints Global logo" 
      width="175" 
      height="36" 
      loading="eager" 
      decoding="async" 
      onError={() => setHasError(true)}
      className={cn(
        "h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300", 
        variant === 'light' && "brightness-0 invert",
        className
      )}
    />
  );
}
