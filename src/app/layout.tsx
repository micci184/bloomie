import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bloomie | Creative Agency',
  description: 'Bloomieは、革新的なクリエイティブソリューションを提供するエージェンシーです。',
  keywords: ['creative', 'agency', 'design', 'development'],
  authors: [{ name: 'Bloomie' }],
  openGraph: {
    title: 'Bloomie | Creative Agency',
    description: 'Bloomieは、革新的なクリエイティブソリューションを提供するエージェンシーです。',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base text-white`}
      >
        {children}
      </body>
    </html>
  );
}

