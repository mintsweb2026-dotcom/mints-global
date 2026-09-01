import CountUpRaw from 'react-countup';
import type { ComponentProps } from 'react';

// Handles ESM / CJS interop for SSR where default export might be nested as { default: Component }
const CountUpComponent = (CountUpRaw as any)?.default || CountUpRaw;

export function SafeCountUp(props: ComponentProps<typeof CountUpRaw>) {
  return <CountUpComponent {...props} />;
}
export default SafeCountUp;
