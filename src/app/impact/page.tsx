"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Heart, Award, LineChart } from "lucide-react";
import Link from "next/link";

// Sample impact stories
const impactStories = [
  {
    title: "Healthcare For Remote Villages",
    location: "Rural Rajasthan",
    description: "Our medical camps reached 15 remote villages, providing care to over 3,000 people who had limited access to healthcare. This included eye checkups, diabetes screening, and general health assessments.",
    outcome: "68% of patients received treatments that prevented serious medical complications.",
    year: "2024",
  },
  {
    title: "Education Scholarships",
    location: "Mumbai Suburbs",
    description: "Provided full scholarships to 150 underprivileged students, covering tuition, books, and supplies for the entire academic year.",
    outcome: "92% of supported students showed improved academic performance within the first semester.",
    year: "2023",
  },
  {
    title: "Emergency Flood Response",
    location: "Kerala",
    description: "Delivered emergency supplies, food, and temporary shelter to 500+ families affected by devastating floods in the region.",
    outcome: "All families received immediate relief within 72 hours, and 80% were provided with reconstruction support.",
    year: "2023",
  },
  {
    title: "Clean Water Initiative",
    location: "Rural Maharashtra",
    description: "Installed 25 water purification systems in villages suffering from contaminated water sources, bringing clean drinking water to communities.",
    outcome: "Reduced waterborne illnesses by 65% in target communities within six months.",
    year: "2022",
  },
];

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-emerald-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Impact
          </h1>
          <p className="mt-5 mx-auto text-xl text-emerald-100 max-w-3xl">
            Discover the real-world difference your support makes in the lives of those who need it most.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Impact By The Numbers
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  25,000+
                </h3>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                  People Helped
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300 mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  $2.4M
                </h3>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                  Funds Raised
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  42
                </h3>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                  Communities Served
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300 mb-4">
                  <LineChart className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  92%
                </h3>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Stories of Change
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {impactStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 h-3" />
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {story.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200">
                        {story.year}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {story.location}
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {story.description}
                    </p>
                    <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          Impact:{' '}
                        </span>
                        {story.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Focus Areas
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  title: "Healthcare",
                  description: "Providing medical services, supplies, and support to communities with limited healthcare access.",
                  stats: [
                    { label: "Medical Camps", value: "35+" },
                    { label: "People Treated", value: "12,000+" },
                    { label: "Villages Served", value: "28" },
                  ],
                },
                {
                  title: "Education",
                  description: "Supporting educational initiatives through scholarships, school supplies, and learning resources.",
                  stats: [
                    { label: "Students Supported", value: "850+" },
                    { label: "Schools Partnered", value: "15" },
                    { label: "Academic Improvement", value: "92%" },
                  ],
                },
                {
                  title: "Emergency Relief",
                  description: "Responding rapidly to natural disasters and crises with essential supplies and support.",
                  stats: [
                    { label: "Emergency Responses", value: "8" },
                    { label: "Families Assisted", value: "1,200+" },
                    { label: "Relief Supplies", value: "50+ tons" },
                  ],
                },
                {
                  title: "Community Development",
                  description: "Building sustainable communities through infrastructure, skills training, and local empowerment.",
                  stats: [
                    { label: "Community Projects", value: "22" },
                    { label: "People Impacted", value: "8,500+" },
                    { label: "Community Leaders Trained", value: "75" },
                  ],
                },
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                    {area.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-emerald-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Be Part of Our Impact Story
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join us in creating positive change. Your support can help us reach more communities and transform more lives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-800"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
