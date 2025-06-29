"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, HeartHandshake, Users, ClipboardCheck, PiggyBank, Lightbulb } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-emerald-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            How It Works
          </h1>
          <p className="mt-5 mx-auto text-xl text-emerald-100 max-w-3xl">
            Learn how Vaidya Foundation transforms your contributions into meaningful impact and change lives.
          </p>
        </div>

        {/* Process steps */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Donation Process
            </h2>

            <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Lightbulb className="h-12 w-12 text-emerald-600" />,
                  title: "Choose a Cause",
                  description: "Browse our campaigns and select a cause that resonates with your values and interests.",
                },
                {
                  icon: <PiggyBank className="h-12 w-12 text-emerald-600" />,
                  title: "Make a Donation",
                  description: "Contribute any amount you're comfortable with. Every donation, big or small, makes a difference.",
                },
                {
                  icon: <ClipboardCheck className="h-12 w-12 text-emerald-600" />,
                  title: "Track Progress",
                  description: "Receive updates on how your donation is being used and the impact it's making.",
                },
                {
                  icon: <Users className="h-12 w-12 text-emerald-600" />,
                  title: "Join the Community",
                  description: "Connect with like-minded donors and supporters who share your passion for helping others.",
                },
                {
                  icon: <HeartHandshake className="h-12 w-12 text-emerald-600" />,
                  title: "See the Impact",
                  description: "Witness the real-world difference your contribution makes in people's lives.",
                },
                {
                  icon: <Check className="h-12 w-12 text-emerald-600" />,
                  title: "Share Success Stories",
                  description: "Help spread awareness by sharing campaign successes with your network.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How we use your donations */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              How We Use Your Donations
            </h2>

            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
              {[
                {
                  percentage: "85%",
                  title: "Direct Program Support",
                  description: "The majority of your donation goes directly to funding our programs and initiatives on the ground.",
                },
                {
                  percentage: "10%",
                  title: "Administration & Operations",
                  description: "A small portion covers essential administrative costs to ensure our organization runs effectively.",
                },
                {
                  percentage: "5%",
                  title: "Awareness & Outreach",
                  description: "We allocate a minimal amount to raising awareness about our causes and reaching more donors.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 ${
                    index < 2 ? "border-b border-gray-200 dark:border-gray-600" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-emerald-600 dark:text-emerald-300">
                        {item.percentage}
                      </span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transparency commitment */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Commitment to Transparency
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              At Vaidya Foundation, we believe in complete transparency. We regularly publish financial reports and impact assessments, allowing our donors to see exactly how their contributions are making a difference.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/reports"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
              >
                View Financial Reports
              </Link>
              <Link
                href="/impact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-emerald-400 dark:hover:bg-gray-700"
              >
                See Impact Assessments
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
