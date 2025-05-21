'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/atoms/LanguageSwitcher';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/organisms/NavigationMenu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/organisms/Sheet';
import { Menu } from 'lucide-react';

interface MgCleanDefaultLayoutProps {
  children: React.ReactNode;
}

function getLocaleFromPath(pathname: string): 'en' | 'de' {
  const firstSegment = pathname.split('/')[1];
  return firstSegment === 'de' ? 'de' : 'en';
}

const MgCleanDefaultLayout: React.FC<MgCleanDefaultLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = useTranslations('navigation');

  const navigationItems = [
    { name: t('services'), href: '/services' },
    { name: t('prices'), href: '/prices' },
    { name: t('about'), href: '/about' },
    { name: t('references'), href: '/references' },
    { name: t('sustainability'), href: '/sustainability' },
    { name: t('jobs'), href: '/jobs' },
    { name: t('contact'), href: '/contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white relative border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20 relative">
            {/* Logo */}
            <div className="absolute left-5 top-0">
              <Link href={`/${locale}`}>
                <Image
                  src="/assets/images/mg-clean-logo.png"
                  alt="MG Clean Logo"
                  width={180}
                  height={70}
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex space-x-4">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link href={`/${locale}${item.href}`} className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Mobile menu */}
              <div className="md:hidden absolute right-5 top-6">
                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="text-gray-700 hover:text-gray-900 focus:outline-none"
                      aria-label={t('menu.open')}
                    >
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] bg-white">
                    <div className="flex flex-col h-full">
                      {/* Language switcher at the top */}
                      <div className="mb-6 pt-4">
                        <LocaleSwitcher />
                      </div>
                      
                      {/* Navigation items */}
                      <div className="flex flex-col gap-4">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        {navigationItems.map((item) => (
                          <Link
                            key={item.name}
                            href={`/${locale}${item.href}`}
                            className="text-lg font-medium text-gray-700 hover:text-[#3AA655] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Locale switcher for desktop */}
            <div className="absolute right-5 top-6 hidden md:block">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/assets/images/mg-clean-logo.png"
                alt="MG Clean Logo"
                width={150}
                height={60}
                className="mb-4"
              />
              <p className="text-gray-500 text-sm">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={`/${locale}${item.href}`} className="text-gray-500 hover:text-[#3AA655]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">{t('footer.contactUs')}</h3>
              <address className="not-italic text-gray-500 space-y-2">
                <p>{t('footer.address.street')}</p>
                <p>{t('footer.address.city')}</p>
                <p className="mt-4">{t('footer.contact.email')}</p>
                <p>{t('footer.contact.phone')}</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              {t('footer.copyright', { year: new Date().getFullYear() })} |{' '}
              <Link 
                href="https://www.nativeai.cloud/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#3AA655] transition-colors"
              >
                Powered By Native Cloud
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MgCleanDefaultLayout;
