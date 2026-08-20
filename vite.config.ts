import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), viteCompression({ algorithm: 'brotliCompress' }), viteCompression({ algorithm: 'gzip' })],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    // ── SSR server bundle ─────────────────────────────────────────────────────
    // `vite build --ssr` sets isSsrBuild=true → outputs entry-server to dist/server/
    ...(isSsrBuild
      ? {
          ssr: {
            noExternal: ['react-helmet-async'],
          },
          build: {
            ssr: true,
            outDir: 'dist/server',
            rollupOptions: {
              input: 'src/entry-server.tsx',
              output: { format: 'esm' },
            },
          },
        }
      // ── Client bundle ────────────────────────────────────────────────────────
      : {
          build: {
            outDir: 'dist/client',
            cssCodeSplit: true,
            sourcemap: false,
            chunkSizeWarningLimit: 600,
            rollupOptions: {
              output: {
                manualChunks(id) {
                  // Animation library — large
                  if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) {
                    return 'vendor-motion';
                  }
                  // Firebase SDK — very large
                  if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) {
                    return 'vendor-firebase';
                  }
                  // i18n / translations
                  if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next') || id.includes('node_modules/i18next-browser-languagedetector')) {
                    return 'vendor-i18n';
                  }
                  // React Router + Remix (routing)
                  if (id.includes('node_modules/react-router') || id.includes('node_modules/@remix-run')) {
                    return 'vendor-router';
                  }
                  // Charts (recharts + dependencies) — only on admin panel
                  if (id.includes('node_modules/recharts') || id.includes('node_modules/d3-') || id.includes('node_modules/victory-')) {
                    return 'vendor-charts';
                  }
                  // Markdown rendering — only on blog posts
                  if (id.includes('node_modules/react-markdown') || id.includes('node_modules/remark') || id.includes('node_modules/unified') || id.includes('node_modules/mdast') || id.includes('node_modules/micromark') || id.includes('node_modules/hast') || id.includes('node_modules/vfile')) {
                    return 'vendor-markdown';
                  }
                  // Form validation — only on /contact
                  if (id.includes('node_modules/zod') || id.includes('node_modules/react-hook-form') || id.includes('node_modules/@hookform')) {
                    return 'vendor-forms';
                  }
                  // EmailJS — only on /contact
                  if (id.includes('node_modules/@emailjs')) {
                    return 'vendor-emailjs';
                  }
                  // Lucide icons
                  if (id.includes('node_modules/lucide-react')) {
                    return 'vendor-icons';
                  }
                  // React Icons (additional icon set)
                  if (id.includes('node_modules/react-icons')) {
                    return 'vendor-react-icons';
                  }
                  // Scroll / animation helpers
                  if (id.includes('node_modules/lenis') || id.includes('node_modules/react-countup') || id.includes('node_modules/countup')) {
                    return 'vendor-scroll';
                  }
                  // React helmet (SEO)
                  if (id.includes('node_modules/react-helmet-async')) {
                    return 'vendor-seo';
                  }
                  // Image compression — admin only
                  if (id.includes('node_modules/browser-image-compression')) {
                    return 'vendor-media';
                  }
                  // Utility libraries (clsx, tailwind-merge, etc.)
                  if (id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge') || id.includes('node_modules/class-variance')) {
                    return 'vendor-utils';
                  }
                  // All remaining node_modules
                  if (id.includes('node_modules')) {
                    return 'vendor-misc';
                  }
                },
              },
            },
          },
        }),
  };
});
