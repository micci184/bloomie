import type { Metadata } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bloomie | Creative Agency',
  description:
    'Bloomieは、革新的なクリエイティブソリューションを提供するエージェンシーです。',
  keywords: ['creative', 'agency', 'design', 'development'],
  authors: [{ name: 'Bloomie' }],
  openGraph: {
    title: 'Bloomie | Creative Agency',
    description:
      'Bloomieは、革新的なクリエイティブソリューションを提供するエージェンシーです。',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
