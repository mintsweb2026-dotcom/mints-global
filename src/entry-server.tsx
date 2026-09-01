/**
 * Server-side rendering entry point.
 * Renders the React app to HTML string + head tags for SSR.
 * Called by the Express server (server.ts) and Vercel serverless function (api/index.ts).
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import './i18n';
import { AppRoutes } from './App';
import { AuthProvider } from './lib/AuthContext';

export function render(url: string): { html: string; helmet: string } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const helmetStr = helmet
    ? [
        helmet.title?.toString() ?? '',
        helmet.meta?.toString() ?? '',
        helmet.link?.toString() ?? '',
        helmet.script?.toString() ?? '',
      ].join('')
    : '';

  return { html, helmet: helmetStr };
}
