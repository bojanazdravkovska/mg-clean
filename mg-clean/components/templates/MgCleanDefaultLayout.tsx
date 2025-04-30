import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/organisms/NavigationMenu"

interface MgCleanDefaultLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { name: 'Services', href: '/services' },
  { name: 'Prices', href: '/prices' },
  { name: 'About us', href: '/about' },
  { name: 'References', href: '/references' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Contact', href: '/contact' },
];

const MgCleanDefaultLayout: React.FC<MgCleanDefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            {/* Logo */}
            <div className="absolute left-5 top-0">
              <Link href="/">
                <Image
                  src="/assets/images/mg-clean-logo.png"
                  alt="MG Clean Logo"
                  width={180}
                  height={70}
                  className="h-25 w-auto"
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex space-x-4">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.href} className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  aria-label="Open menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default MgCleanDefaultLayout;