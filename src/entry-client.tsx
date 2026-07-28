/**
 * Client-side hydration entry point.
 * Used in production SSR builds — hydrateRoot attaches React to server-rendered HTML.
 * In dev mode, main.tsx still uses createRoot for a standard CSR experience.
 */
import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './i18n';
import { AppRoutes } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

const container = document.getElementById('root')!;

if (import.meta.env.DEV) {
  createRoot(container).render(app);
} else {
  hydrateRoot(container, app);
}
