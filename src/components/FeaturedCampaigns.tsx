"use client";

import Link from "next/link";
import Image from "next/image";

type Campaign = {
  id: string;
  title: string;
  description: string;
  category: string;
  amountRaised: number;
  goal: number;
  imagePath: string;
};

const campaigns: Campaign[] = [
  {
    id: "medical-aid-2023",
    title: "Medical Aid for Rural Communities",
    description: "Supporting healthcare access for underserved rural areas with essential medical supplies and volunteer doctors.",
    category: "Healthcare",
    amountRaised: 12500,
    goal: 25000,
    imagePath: "/images/campaign-1.jpg",
  },
  {
    id: "education-for-all",
    title: "Education For All Initiative",
    description: "Providing educational resources, scholarships, and school supplies for children in low-income communities.",
    category: "Education",
    amountRaised: 8750,
    goal: 15000,
    imagePath: "/images/campaign-2.jpg",
  },
  {
    id: "emergency-flood-relief",
    title: "Emergency Flood Relief",
    description: "Immediate assistance for families affected by recent flooding with food, shelter, and essential supplies.",
    category: "Emergency",
    amountRaised: 18200,
    goal: 20000,
    imagePath: "/images/campaign-3.jpg",
  },
];

const FeaturedCampaigns = () => {
  return (
    <section id="campaigns" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">
            Make An Impact
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">
            Featured Campaigns
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Your donation can change lives. Browse our current campaigns and find a cause that speaks to you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105"
            >
              <div className="flex-shrink-0 relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{campaign.category}</p>
                </div>
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-600">
                    {campaign.category}
                  </p>
                  <Link href={`/campaigns/${campaign.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      {campaign.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      {campaign.description}
                    </p>
                  </Link>
                </div>
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-emerald-600 h-2.5 rounded-full"
                      style={{
                        width: `${(campaign.amountRaised / campaign.goal) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="font-medium text-gray-900 dark:text-white">
                      ${campaign.amountRaised.toLocaleString()}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      of ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    href={`/campaigns/${campaign.id}`}
                    className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/campaigns"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200"
          >
            View All Campaigns
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
