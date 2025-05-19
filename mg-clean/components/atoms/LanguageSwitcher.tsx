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
    <select 
      value={currentLocale}
      onChange={(e) => switchLocale(e.target.value as 'en' | 'de')}
      className="
        px-3 py-1.5
        bg-white
        border border-gray-300
        rounded-md
        text-sm
        font-medium
        text-gray-700
        cursor-pointer
        hover:bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-colors duration-200
        appearance-none
        bg-no-repeat bg-right
        pr-8
        bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]
      "
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
