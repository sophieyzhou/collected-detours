import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';

interface PageShellProps {
  /** Matches a [data-theme] block in styles/tokens.css. Omit for neutral pages like Home or 404. */
  theme?: string;
  children: ReactNode;
}

/**
 * Wraps every page. Setting data-theme here — rather than scattering it
 * across individual components — is what lets one CSS variable change in
 * tokens.css repaint an entire page's accent color.
 */
export function PageShell({ theme, children }: PageShellProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div data-theme={theme} className="min-h-screen bg-paper text-ink flex flex-col">
      <Nav />
      <main className="flex-1 w-full mx-auto max-w-[var(--content-width)] px-6 md:px-10 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
