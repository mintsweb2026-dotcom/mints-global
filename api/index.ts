/**
 * Vercel serverless function — handles SSR on Vercel edge/serverless.
 * Uses the pre-built server bundle to render HTML per request.
 */
import fs from 'node:fs';
import path from 'node:path';
import { StaticRouter } from 'react-router';
type VercelRequest = any;
type VercelResponse = any;

const __dirname = process.cwd();

// Cache the template at cold start
const templatePath = path.resolve(__dirname, 'dist/client/index.html');
let cachedTemplate: string;

function getTemplate(): string {
  if (!cachedTemplate) {
    cachedTemplate = fs.readFileSync(templatePath, 'utf-8');
  }
  return cachedTemplate;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const url = req.url ?? '/';
    const template = getTemplate();

    // Dynamically import the SSR render function using absolute path
    const serverEntryPath = path.join(process.cwd(), 'dist', 'server', 'entry-server.js');
    const { render } = await import(`file://${serverEntryPath}`);
    const { html: appHtml, helmet } = render(url);

    const finalHtml = template
      .replace('<!--app-head-->', helmet)
      .replace('<!--app-html-->', appHtml);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=600');
    res.status(200).send(finalHtml);
  } catch (e: unknown) {
    const error = e instanceof Error ? e : new Error(String(e));
    console.error('[SSR Error]', error.stack);
    res.status(500).send(error.message);
  }
}
