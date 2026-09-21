/**
 * Error Tracking & Centralized Telemetry
 * Provides unhandled error reporting, Sentry integration readiness,
 * and structured application telemetry.
 */

interface ErrorContext {
  componentStack?: string;
  user?: { id?: string; email?: string };
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
}

declare global {
  interface Window {
    Sentry?: {
      captureException: (error: unknown, captureContext?: unknown) => string;
      captureMessage: (message: string, captureContext?: unknown) => string;
    };
  }
}

/**
 * Initializes global client-side error listeners
 */
export function initErrorTracking() {
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN;

  if (sentryDsn && typeof window !== 'undefined') {
    // Sentry DSN is present - log initialization status in dev
    if (import.meta.env.DEV) {
      console.info('[ErrorTracking] Sentry DSN configured:', sentryDsn.slice(0, 12) + '...');
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', (event) => {
      captureException(event.reason, {
        extra: { type: 'unhandledrejection' }
      });
    });
  }
}

/**
 * Captures an exception and dispatches it to configured error services
 */
export function captureException(error: unknown, context?: ErrorContext) {
  // 1. If Sentry SDK is loaded on window, forward directly
  if (typeof window !== 'undefined' && window.Sentry?.captureException) {
    window.Sentry.captureException(error, { extra: context });
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
  if (typeof window !== 'undefined' && window.Sentry?.captureMessage) {
    window.Sentry.captureMessage(message, { level, extra: context });
  }

  if (import.meta.env.DEV) {
    console.log(`%c[ErrorTracking] [${level.toUpperCase()}] ${message}`, 'color: #10b981;', context);
  }
}
