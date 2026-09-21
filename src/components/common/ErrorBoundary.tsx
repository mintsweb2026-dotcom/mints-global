import React, { Component, ErrorInfo, ReactNode } from 'react';
import { captureException } from '../../lib/errorTracking';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    captureException(error, {
      componentStack: errorInfo.componentStack || undefined,
    });
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-olive-950 text-brand-white flex flex-col items-center justify-center p-6 select-none">
          <div className="max-w-lg w-full bg-olive-900/60 border border-olive-800/80 rounded-2xl p-8 backdrop-blur-xl shadow-2xl text-center">
            {/* Brand Accent Indicator */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold font-serif tracking-tight text-brand-white mb-2">
              Something unexpected happened
            </h1>
            <p className="text-brand-white-60 text-sm leading-relaxed mb-8">
              We encountered an unexpected error while loading this page. Our team has been notified and is working to resolve it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-olive-950 font-semibold text-sm transition-colors cursor-pointer shadow-md"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-olive-800/80 hover:bg-olive-700/80 text-brand-white font-medium text-sm transition-colors border border-olive-700/50 cursor-pointer"
              >
                Return to Home
              </button>
            </div>

            {/* Developer Error Context (Visible in development) */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left border-t border-olive-800/80 pt-4">
                <summary className="text-xs text-brand-white-40 hover:text-brand-white-60 cursor-pointer font-mono">
                  View error details (dev mode only)
                </summary>
                <div className="mt-3 p-3 bg-black/40 rounded-lg text-xs font-mono text-red-300 overflow-x-auto max-h-48">
                  <p className="font-bold">{this.state.error.toString()}</p>
                  {this.state.errorInfo?.componentStack && (
                    <pre className="mt-2 text-[10px] text-brand-white-60 whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
