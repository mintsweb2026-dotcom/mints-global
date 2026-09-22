/**
 * Error Tracking & Centralized Telemetry
 * Provides unhandled error reporting, live Sentry integration,
 * and structured application telemetry.
 */
import * as Sentry from '@sentry/react';

interface ErrorContext {
  componentStack?: string;
  user?: { id?: string; email?: string };
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
}

let sentryInitialized = false;

/**
 * Initializes global client-side error listeners and Sentry SDK
 */
export function initErrorTracking() {
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN;

  if (sentryDsn && typeof window !== 'undefined' && !sentryInitialized) {
    try {
      Sentry.init({
        dsn: sentryDsn,
        tracesSampleRate: import.meta.env.PROD ? 0.2 : 1.0,
        environment: import.meta.env.MODE,
      });
      sentryInitialized = true;
      if (import.meta.env.DEV) {
        console.info('[ErrorTracking] Sentry initialized successfully with DSN:', sentryDsn.slice(0, 12) + '...');
      }
    } catch (err) {
      console.warn('[ErrorTracking] Failed to initialize Sentry:', err);
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      captureException(event.error || event.message, {
        extra: { 
          type: 'uncaught_error',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno 
        }
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      captureException(event.reason, {
        extra: { type: 'unhandledrejection' }
      });
    });

    (window as any).__getRecentErrors = getRecentErrors;
  }
}

/** In-memory ring buffer of recent errors */
const recentErrors: Array<{ timestamp: string; message: string; context?: ErrorContext }> = [];

export function getRecentErrors() {
  return [...recentErrors];
}

/**
 * Captures an exception and dispatches it to configured error services
 */
export function captureException(error: unknown, context?: ErrorContext) {
  const errMsg = error instanceof Error ? error.message : String(error);
  const entry = {
    timestamp: new Date().toISOString(),
    message: errMsg,
    context
  };

  recentErrors.push(entry);
  if (recentErrors.length > 20) recentErrors.shift();

  try {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('__mints_last_error__', JSON.stringify(entry));
    }
  } catch (_) {}

  // 1. Dispatch to Sentry if initialized
  if (sentryInitialized) {
    Sentry.captureException(error, { extra: context as Record<string, unknown> });
  }

  // 2. In development or staging, print rich context to console
  if (import.meta.env.DEV) {
    console.group('%c[ErrorTracking] Unhandled Exception Caught', 'color: #ef4444; font-weight: bold;');
    console.error(error);
    if (context) {
      console.dir(context);
    }
    console.groupEnd();
  }
}

/**
 * Captures an informational or warning message
 */
export function captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: ErrorContext) {
  if (sentryInitialized) {
    Sentry.captureMessage(message, { level, extra: context as Record<string, unknown> });
  }

  if (import.meta.env.DEV) {
    console.log(`%c[ErrorTracking] [${level.toUpperCase()}] ${message}`, 'color: #10b981;', context);
  }
}

