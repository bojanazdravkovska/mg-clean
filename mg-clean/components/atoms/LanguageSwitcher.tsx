'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] as 'en' | 'de';

  const switchLocale = (newLocale: 'en' | 'de') => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit">
      <button
        onClick={() => switchLocale('en')}
        className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3AA655] ${
          currentLocale === 'en'
            ? 'bg-[#B9E2A7] text-white shadow'
            : 'bg-transparent text-gray-700 hover:bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('de')}
        className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3AA655] ${
          currentLocale === 'de'
            ? 'bg-[#B9E2A7] text-white shadow'
            : 'bg-transparent text-gray-700 hover:bg-gray-200'
        }`}
      >
        DE
      </button>
    </div>
  );
}
