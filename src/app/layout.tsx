import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Bricolage_Grotesque, Geist, Geist_Mono, Fraunces } from 'next/font/google';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const body = Geist({ subsets: ['latin'], variable: '--font-body' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });
const voice = Fraunces({ subsets: ['latin'], style: 'italic', variable: '--font-voice' });

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${voice.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  );
}
