import { cn } from '../lib/utils';

export function Logo({ className }: { className?: string }) {
  // Colors from the image: 
  // Olive: #899738
  // Beige: #dfdbc7
  return (
    <div className={cn("font-display font-medium tracking-wide flex items-center leading-none", className)}>
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
