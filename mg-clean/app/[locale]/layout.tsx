import type { Metadata } from 'next';

import '../../styles/globals.css';
import { locales } from '@/i18n';
import LocaleLayoutProvider from '@/components/providers/LocaleLayoutProvider';
import { notFound } from 'next/navigation';



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
    <LocaleLayoutProvider locale={locale} messages={messages}>
      {props.children}
    </LocaleLayoutProvider>
  );
}
