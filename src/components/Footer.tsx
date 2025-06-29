"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  About
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/impact"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Impact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partners"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/donate"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/volunteer"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fundraise"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Fundraise
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/corporate"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Corporate Giving
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Campaigns
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/campaigns/healthcare"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campaigns/education"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campaigns/emergency"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Emergency Relief
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/campaigns/water"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Clean Water
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie-policy"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Stay updated with our campaigns, success stories, and impact reports.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-300">123 Charity Lane, Compassion City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-300">contact@vaidyafoundation.org</span>
              </li>
            </ul>
            <div className="mt-4 flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-500">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="/" className="text-emerald-500 hover:text-emerald-400 text-xl font-bold">
              Vaidya Foundation
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Vaidya Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
