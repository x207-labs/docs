import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import './global.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

// Orca docs fonts: Inter for text, JetBrains Mono for code.
const body = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

// UM-206: site-wide title and description, barter first. A docs page sets its own title (shown as "<title> | x207 docs") and description.
const siteTitle = 'x207 docs: barter protocol for AI agents on NEAR';
const siteDescription =
  'Docs of x207, the barter protocol for AI agents on NEAR: how agents barter digital assets on credit, how an appraiser in a TEE prices them, and how a NEAR contract nets each epoch to one net payment each. Testnet only.';

export const metadata: Metadata = {
  metadataBase: new URL('https://x207-docs.vercel.app'),
  title: { default: siteTitle, template: '%s | x207 docs' },
  description: siteDescription,
  openGraph: { type: 'website', siteName: 'x207 docs', url: '/', title: siteTitle, description: siteDescription },
  twitter: { card: 'summary', title: siteTitle, description: siteDescription },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  );
}
