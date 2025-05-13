import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import '../../styles/globals.css';
import { locales } from '@/i18n';
import LocaleLayoutProvider from '@/components/providers/LocaleLayoutProvider';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // ✅ Extract `locale` *after* async boundary
  const locale = await Promise.resolve(props.params.locale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        <LocaleLayoutProvider locale={locale}>
          {props.children}
        </LocaleLayoutProvider>
      </body>
    </html>
  );
}
