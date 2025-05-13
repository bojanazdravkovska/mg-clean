'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'de') => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <select onChange={(e) => switchLocale(e.target.value as 'en' | 'de')}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
