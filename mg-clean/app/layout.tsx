import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import '../styles/globals.css';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MgClean',
  description: 'Best upcoming company',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/assets/images/mg-clean-logo.png',
    shortcut: '/assets/images/mg-clean-logo.png',
    apple: '/assets/images/mg-clean-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}