import { useState } from 'react';
import { cn } from '../lib/utils';

export function Logo({ className }: { className?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={cn("font-display font-medium tracking-wide flex items-center leading-none text-2xl select-none", className)}>
        <span style={{ color: '#899738' }}>MI</span>
        <span 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #dfdbc7 0%, #dfdbc7 83%, #899738 83%, #899738 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}
        >
          N
        </span>
        <span style={{ color: '#899738' }}>TS</span>
      </div>
    );
  }

  return (
    <img 
      src="/logo-07.png" 
      alt="Mints Global - Best Digital Marketing Agency Dubai" 
      width="180" 
      height="50" 
      loading="eager" 
      decoding="async"
      onError={() => setHasError(true)}
      className={cn("h-8 sm:h-10 md:h-16 lg:h-20 w-auto object-contain transform scale-[1.5] sm:scale-[2] md:scale-[2.5] lg:scale-[3] origin-left", className)}
    />
  );
}
