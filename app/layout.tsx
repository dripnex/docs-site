import './globals.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource-variable/jetbrains-mono';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { DOCS_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(DOCS_URL),
  title: {
    default: 'Dripnex Docs',
    template: '%s | Dripnex Docs',
  },
  description:
    'Technical documentation for Dripnex — Markdown-first, offline-forever desktop notes.',
  applicationName: 'Dripnex Docs',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    url: DOCS_URL,
    siteName: 'Dripnex Docs',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Dripnex' }],
  },
  twitter: {
    card: 'summary',
    images: ['/icon.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-background text-text-primary antialiased">
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            {...baseOptions()}
            sidebar={{
              banner: (
                <div className="rounded-lg border border-[var(--color-border-accent)] bg-[var(--color-accent-glow)] px-3 py-2">
                  <p className="text-xs font-medium text-fd-foreground">
                    Dripnex is in active development.{' '}
                    <a
                      href="https://github.com/dripnex/readide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] underline underline-offset-2 hover:text-[var(--color-accent-hover)]"
                    >
                      Star on GitHub
                    </a>
                  </p>
                </div>
              ),
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
