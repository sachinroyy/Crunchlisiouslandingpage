import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Crunchlisious | Make Food Delicious',
  description: 'Premium naturally dried fruits made with care and a passion for deliciousness.',
 
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
