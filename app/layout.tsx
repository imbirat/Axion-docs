import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  icons: '/logo.png',
  title: 'Axion — Powerful Discord Bot',
  description:
    'All-in-one Discord bot with moderation, economy, leveling, music, tickets, and more. 100% free forever.',
  openGraph: {
    title: 'Axion — Powerful Discord Bot',
    description:
      'All-in-one Discord bot with moderation, economy, leveling, music, tickets, and more. 100% free forever.',
    url: 'https://axionbot.qzz.io',
    siteName: 'Axion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axion — Powerful Discord Bot',
    description:
      'All-in-one Discord bot with moderation, economy, leveling, music, tickets, and more. 100% free forever.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
