"use client";
import CountUpRaw from 'react-countup';
import type { ComponentProps } from 'react';
import { useState, useEffect } from 'react';

// Handles ESM / CJS interop for SSR where default export might be nested as { default: Component }
const CountUpComponent = (CountUpRaw as any)?.default || CountUpRaw;

export function SafeCountUp(props: ComponentProps<typeof CountUpRaw>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render the final, citable number during SSR & before client hydration so search engines and AI scrapers see real figures
    return (
      <span className={props.className}>
        {props.prefix ?? ''}{props.end}{props.suffix ?? ''}
      </span>
    );
  }

  return <CountUpComponent {...props} />;
}
export default SafeCountUp;
