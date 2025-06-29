"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

// Define the campaign type
interface Campaign {
  id: string;
  title: string;
  description: string;
  category: string;
  amountRaised: number;
  goal: number;
  imagePath: string;
}

// Sample campaign data
const allCampaigns: Campaign[] = [
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
  {
    id: "clean-water-project",
    title: "Clean Water Initiative",
    description: "Installing water purification systems in communities without access to clean drinking water to prevent disease.",
    category: "Water & Sanitation",
    amountRaised: 6300,
    goal: 30000,
    imagePath: "/images/campaign-4.jpg",
  },
  {
    id: "womens-empowerment",
    title: "Women's Empowerment Program",
    description: "Supporting women with vocational training, small business loans, and mentorship to achieve financial independence.",
    category: "Community",
    amountRaised: 15800,
    goal: 50000,
    imagePath: "/images/campaign-5.jpg",
  },
  {
    id: "childrens-mental-health",
    title: "Children's Mental Health Support",
    description: "Providing counseling and support services for children dealing with trauma, anxiety, and other mental health challenges.",
    category: "Healthcare",
    amountRaised: 9200,
    goal: 18000,
    imagePath: "/images/campaign-6.jpg",
  },
  {
    id: "elder-care-initiative",
    title: "Elder Care & Support",
    description: "Providing healthcare, companionship, and basic necessities for elderly individuals without family support.",
    category: "Healthcare",
    amountRaised: 4500,
    goal: 12000,
    imagePath: "/images/campaign-7.jpg",
  },
  {
    id: "environmental-restoration",
    title: "Environmental Restoration Project",
    description: "Planting trees and restoring habitats in areas affected by deforestation and environmental degradation.",
    category: "Environment",
    amountRaised: 7800,
    goal: 35000,
    imagePath: "/images/campaign-8.jpg",
  },
];

export default function Campaigns() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Extract unique categories for the filter
  const categories = ["All", ...Array.from(new Set(allCampaigns.map(campaign => campaign.category)))];
  
  // Filter campaigns based on search term and selected category
  const filteredCampaigns = allCampaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-emerald-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Campaigns
          </h1>
          <p className="mt-5 mx-auto text-xl text-emerald-100 max-w-3xl">
            Browse our current campaigns and find a cause that speaks to you. Every donation helps us create positive change.
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Search and filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative max-w-xs w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="max-w-xs w-full">
              <select
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Campaign grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCampaigns.map((campaign) => (
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

          {/* Show a message if no campaigns match the filter */}
          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No campaigns found matching your search. Please try a different search term or category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
