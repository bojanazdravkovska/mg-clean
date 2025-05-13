'use client';

import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '@/i18n'; // ✅ <-- This is critical for next-intl to find the config

interface Props {
  locale: string;
  children: React.ReactNode;
}

type Messages = {
  about: Record<string, unknown>;
  home: Record<string, unknown>;
  navigation: Record<string, unknown>;
  quotation: Record<string, unknown>;
};

export default function LocaleLayoutProvider({ locale, children }: Props) {
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    import(`../../messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => notFound());
  }, [locale]);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
