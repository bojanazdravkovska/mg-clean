import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import '../../styles/globals.css';
import { locales } from '@/i18n';
import LocaleLayoutProvider from '@/components/providers/LocaleLayoutProvider';
import { notFound } from 'next/navigation';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MgClean',
  description: 'Best upcoming company',
  icons: {
    icon: '/assets/images/mg-clean-logo.png',
    shortcut: '/assets/images/mg-clean-logo.png',
    apple: '/assets/images/mg-clean-logo.png',
  },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // <- Optional for type accuracy
}) {
  const { locale } = await props.params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        <LocaleLayoutProvider locale={locale} messages={messages}>
          {props.children}
        </LocaleLayoutProvider>
      </body>
    </html>
  );
}
