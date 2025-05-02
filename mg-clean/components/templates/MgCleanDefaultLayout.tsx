import type React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/organisms/NavigationMenu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/organisms/Sheet"
import { Menu } from "lucide-react"

interface MgCleanDefaultLayoutProps {
  children: React.ReactNode
}

const navigationItems = [
  { name: "Services", href: "/services" },
  { name: "Prices", href: "/prices" },
  { name: "About us", href: "/about" },
  { name: "References", href: "/references" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Jobs", href: "/jobs" },
  { name: "Contact", href: "/contact" },
]

const MgCleanDefaultLayout: React.FC<MgCleanDefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white relative border-b border-gray-200">
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
                      <Link href={item.href} className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Mobile menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="text-gray-700 hover:text-gray-900 focus:outline-none"
                      aria-label="Open menu"
                    >
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="flex flex-col gap-4 mt-8">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium text-gray-700 hover:text-[#3AA655]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/assets/images/mg-clean-logo.png" alt="MG Clean Logo" width={150} height={60} className="mb-4" />
              <p className="text-gray-500 text-sm">
                Professional cleaning services for homes and offices. Providing quality service since 2010.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-500 hover:text-[#3AA655]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
              <address className="not-italic text-gray-500 space-y-2">
                <p>123 Cleaning Street</p>
                <p>City, Country 12345</p>
                <p className="mt-4">Email: info@mgclean.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} MG Clean. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MgCleanDefaultLayout
