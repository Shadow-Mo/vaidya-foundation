"use client";

import Image from "next/image";

// Define the interface for a contributor
interface Contributor {
  id: number;
  name: string;
  // role: string;
  // bio: string;
  imagePath: string;
}

// Sample contributors data (cofounders)
const contributors: Contributor[] = [
  {
    id: 1,
    name: "Prof. Prashant Vaidya",
    // role: "Co-Founder & Medical Director",
    // bio: "With over 20 years of experience in healthcare, Dr. Sharma leads our medical initiatives and partnerships with hospitals.",
    imagePath: "/images/cofounders/aarav-sharma.jpg",
  },
  {
    id: 2,
    name: "Padma Vaidya",
    // bio: "A seasoned NGO leader with expertise in strategic planning, Priya oversees all operations and community outreach programs.",
    imagePath: "/images/cofounders/priya-patel.jpg",
  },
  {
    id: 3,
    name: "Ayush Vaidya",
    // role: "Co-Founder & Finance Director",
    // bio: "Having worked in financial services for 15 years, Vikram manages our financial strategy and ensures transparency with donors.",
    imagePath: "/images/cofounders/vikram-mehta.jpg",
  },
  {
    id: 4,
    name: "Rutuj Vaidya",
    // role: "Co-Founder & Program Director",
    // bio: "With a background in social work, Anjali develops our programs to maximize impact and address community needs effectively.",
    imagePath: "/images/cofounders/anjali-desai.jpg",
  },
];

const Contributors = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">
            Our Team
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">
            Meet Our Cofounders
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Dedicated professionals committed to making a difference through the Vaidya Foundation
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">{contributor.name.split(" ")[0][0]}{contributor.name.split(" ")[1][0]}</p>
                </div>
              </div>
               <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {contributor.name}
              </h3>{/*
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                {contributor.role}
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 px-4">
                {contributor.bio}
              </p> */}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 italic">
            "Together, we are committed to creating lasting change and providing support to those who need it most."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contributors;
