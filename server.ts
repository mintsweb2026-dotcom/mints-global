/**
 * Express SSR server — used in both dev (with Vite middleware) and production.
 * In dev: Vite transforms files on-the-fly and renders with StaticRouter.
 * In prod: serves pre-built client assets + server bundle.
 */
import fs from 'node:fs';
import path from 'node:path';
import express, { Request, Response } from 'express';
import compression from 'compression';
import { StaticRouter } from 'react-router';

const __dirname = process.cwd();
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';

async function createServer() {
  const app = express();

  // ── Gzip compression for all responses ──────────────────────────────────────
  app.use(compression());

  let vite: import('vite').ViteDevServer | null = null;

  if (!isProduction) {
    // ── Dev mode: Vite as middleware for HMR + on-the-fly transforms ──────────
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    });
    app.use(vite.middlewares);
  } else {
    // ── Prod mode: serve pre-built static assets ────────────────────────────
    app.use(base, express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  // ── Load HTML template ──────────────────────────────────────────────────────
  const templateHtml = isProduction
    ? fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
    : '';

  // ── SSR handler: catch-all for all non-asset routes ────────────────────────
  app.use(async (req: Request, res: Response) => {
    try {
      const url = req.originalUrl.replace(base, '');

      let template: string;
      let renderFn: (url: string) => { html: string; helmet: string };

      if (!isProduction && vite) {
        // Dev: read and transform fresh template every request
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const serverEntry = await vite.ssrLoadModule('/src/entry-server.tsx');
        renderFn = serverEntry.render;
      } else {
        // Prod: use cached template and built server bundle
        template = templateHtml;
        const serverEntry = await import('./dist/server/entry-server.js');
        renderFn = serverEntry.render;
      }

      const { html: appHtml, helmet } = renderFn(url);

      // Inject SSR content into placeholders
      const finalHtml = template
        .replace('<!--app-head-->', helmet)
        .replace('<!--app-html-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).send(finalHtml);
    } catch (e: unknown) {
      if (!isProduction && vite && e instanceof Error) {
        vite.ssrFixStacktrace(e);
      }
      const error = e instanceof Error ? e : new Error(String(e));
      console.error(error.stack);
      res.status(500).send(error.message);
    }
  });

  return app;
}

createServer().then(app => {
  app.listen(port, () => {
    console.log(`\n  🚀  SSR server running at http://localhost:${port}\n`);
  });
});
