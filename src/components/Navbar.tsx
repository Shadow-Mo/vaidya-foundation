"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-emerald-600 dark:text-emerald-500">
                Vaidya Foundation
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/campaigns"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Campaigns
            </Link>
            <Link
              href="/how-it-works"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              How It Works
            </Link>
            <Link
              href="/volunteer"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Volunteer
            </Link>
            <Link
              href="/impact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Impact
            </Link>
            <Link
              href="/reports"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Reports
            </Link>
            <Link
              href="/#about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              About
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center">
            <Link
              href="/donate"
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/campaigns"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Campaigns
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link
              href="/volunteer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Volunteer
            </Link>
            <Link
              href="/impact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Impact
            </Link>
            <Link
              href="/reports"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Reports
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/donate"
              className="block w-full text-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
              onClick={toggleMenu}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
