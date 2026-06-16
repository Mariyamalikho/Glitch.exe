import { Component, type ErrorInfo, type ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('glitch.exe render fault', error, info);
  }

  render() {
    if (this.state.failed) {
      return (
        <main className="grid min-h-screen place-items-center bg-void p-6 text-slate-100">
          <section className="holo-panel max-w-lg p-6 text-center">
            <p className="font-display text-2xl text-magenta">render fault</p>
            <p className="mt-3 text-slate-300">The simulation hit a bad frame. Refreshing will restore your local save.</p>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}
