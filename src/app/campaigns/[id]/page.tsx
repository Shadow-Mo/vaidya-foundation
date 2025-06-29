"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Share2, ArrowLeft, DollarSign, Users, Calendar } from "lucide-react";

// Define the campaign type
interface Campaign {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  amountRaised: number;
  goal: number;
  imagePath: string;
  organizer?: string;
  location?: string;
  startDate?: string;
  donors?: number;
  updates?: {
    date: string;
    title: string;
    content: string;
  }[];
}

// Sample campaign data
const allCampaigns: Campaign[] = [
  {
    id: "medical-aid-2023",
    title: "Medical Aid for Rural Communities",
    description: "Supporting healthcare access for underserved rural areas with essential medical supplies and volunteer doctors.",
    longDescription: "In rural areas across the country, many communities lack basic healthcare facilities. The 'Medical Aid for Rural Communities' campaign aims to bridge this gap by providing essential medical supplies, equipment, and volunteer healthcare professionals to remote areas. Our team of doctors and nurses conducts regular health check-up camps, distributes medicines, and provides basic healthcare education to villagers.\n\nThe funds raised through this campaign will be used to purchase medical supplies, cover transportation costs for healthcare workers, and establish small healthcare centers in villages with no medical facilities. We also plan to conduct training programs for local residents to become community health workers who can provide basic first aid and identify health issues that require professional attention.",
    category: "Healthcare",
    amountRaised: 12500,
    goal: 25000,
    imagePath: "/images/campaign-1.jpg",
    organizer: "Dr. Aarav Sharma",
    location: "Various Rural Districts",
    startDate: "January 15, 2025",
    donors: 187,
    updates: [
      {
        date: "June 10, 2025",
        title: "Health Camp in Rajpur Village",
        content: "We conducted a successful health camp in Rajpur village, providing check-ups for over 150 residents. Many cases of hypertension and diabetes were identified and referred for treatment."
      },
      {
        date: "May 2, 2025",
        title: "Medical Supplies Delivered",
        content: "Thanks to your generous donations, we delivered essential medical supplies to three villages, including antibiotics, first aid kits, and diagnostic equipment."
      }
    ]
  },
  {
    id: "education-for-all",
    title: "Education For All Initiative",
    description: "Providing educational resources, scholarships, and school supplies for children in low-income communities.",
    longDescription: "Education is the key to breaking the cycle of poverty, yet many children from low-income families lack access to quality education and necessary learning materials. Our 'Education For All Initiative' aims to address this issue by providing scholarships, school supplies, and educational resources to children from disadvantaged backgrounds.\n\nThe funds raised will be used to provide scholarships that cover tuition fees, uniforms, and textbooks. We also plan to establish community libraries in underserved areas and conduct after-school programs to provide additional academic support. Our goal is to ensure that financial constraints do not prevent any child from receiving education and achieving their full potential.",
    category: "Education",
    amountRaised: 8750,
    goal: 15000,
    imagePath: "/images/campaign-2.jpg",
    organizer: "Priya Patel",
    location: "Multiple Locations",
    startDate: "March 5, 2025",
    donors: 143,
    updates: [
      {
        date: "June 1, 2025",
        title: "Scholarship Recipients Selected",
        content: "We're thrilled to announce that 25 talented students have been selected for full scholarships covering tuition, books, and supplies for the upcoming academic year."
      }
    ]
  },
  {
    id: "emergency-flood-relief",
    title: "Emergency Flood Relief",
    description: "Immediate assistance for families affected by recent flooding with food, shelter, and essential supplies.",
    longDescription: "Recent heavy rainfall has caused devastating floods in several regions, displacing thousands of families and destroying homes and livelihoods. The 'Emergency Flood Relief' campaign aims to provide immediate assistance to affected families in the form of food, clean water, temporary shelter, and essential supplies.\n\nThe funds raised will be used to purchase and distribute food packages, clean drinking water, blankets, hygiene kits, and other essential items to flood-affected families. We are also working to set up temporary shelters for those who have lost their homes. Additionally, we plan to provide financial assistance to help families rebuild their homes and livelihoods once the floodwaters recede.",
    category: "Emergency",
    amountRaised: 18200,
    goal: 20000,
    imagePath: "/images/campaign-3.jpg",
    organizer: "Vikram Mehta",
    location: "Flood-affected Districts",
    startDate: "May 20, 2025",
    donors: 312,
    updates: [
      {
        date: "June 15, 2025",
        title: "Relief Distribution Update",
        content: "We have distributed emergency relief kits to 500 families, providing food, clean water, and essential supplies. Our volunteers are working around the clock to reach more affected communities."
      },
      {
        date: "June 5, 2025",
        title: "Temporary Shelters Established",
        content: "Three temporary shelter sites have been set up, providing safe accommodation for over 200 displaced families. Medical teams are on-site providing healthcare services."
      },
      {
        date: "May 25, 2025",
        title: "Emergency Response Activated",
        content: "Our emergency response teams have been deployed to the affected areas to assess the situation and begin distributing immediate aid to those most in need."
      }
    ]
  },
];

export default function CampaignDetailPage() {
  const params = useParams();
  const [donationAmount, setDonationAmount] = useState(100);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const id = params?.id as string;

  // Find the campaign with the matching ID
  const campaign = allCampaigns.find(camp => camp.id === id);

  // If campaign is not found, show an error message
  if (!campaign) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-red-600">Campaign Not Found</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              The campaign you are looking for does not exist or has been removed.
            </p>
            <Link href="/campaigns" className="mt-6 inline-flex items-center text-emerald-600 hover:text-emerald-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to campaigns
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Function to handle donation amount selection
  const handleSelectAmount = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  // Function to handle custom donation amount
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      if (value) {
        setDonationAmount(parseInt(value, 10));
      } else {
        setDonationAmount(0);
      }
    }
  };

  // Function to handle donation submission
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the actual donation logic
    // For now, just show an alert
    alert(`Thank you for your donation of $${donationAmount}${isAnonymous ? " (Anonymous)" : ""}!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Campaign header */}
        <div className="bg-emerald-700 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/campaigns" className="inline-flex items-center text-emerald-200 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to campaigns
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white sm:tracking-tight lg:text-5xl">
              {campaign.title}
            </h1>
            <p className="mt-3 text-lg text-emerald-100">
              {campaign.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaign details column */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <div className="relative h-64 w-full overflow-hidden rounded-md mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center">
                    <p className="text-white text-2xl font-bold">{campaign.category}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Campaign</h2>
                  <div className="prose max-w-none text-gray-600 dark:text-gray-300">
                    {campaign.longDescription?.split("\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {campaign.updates && campaign.updates.length > 0 && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Campaign Updates</h2>
                    <div className="space-y-6">
                      {campaign.updates.map((update, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{update.title}</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{update.date}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{update.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-end space-x-3">
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </button>
                </div>
              </div>
            </div>

            {/* Donation column */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-20">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      ${campaign.amountRaised.toLocaleString()}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      of ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-1">
                    <div
                      className="bg-emerald-600 h-2.5 rounded-full"
                      style={{
                        width: `${(campaign.amountRaised / campaign.goal) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {Math.round((campaign.amountRaised / campaign.goal) * 100)}% of goal reached
                  </p>
                </div>

                <div className="mb-6 space-y-3">
                  {campaign.donors && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Users className="h-5 w-5 mr-2 text-emerald-600" />
                      <span>{campaign.donors} donors</span>
                    </div>
                  )}
                  {campaign.organizer && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Heart className="h-5 w-5 mr-2 text-emerald-600" />
                      <span>Organized by {campaign.organizer}</span>
                    </div>
                  )}
                  {campaign.location && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                      <span>{campaign.location}</span>
                    </div>
                  )}
                  {campaign.startDate && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                      <span>Started {campaign.startDate}</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleDonate}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select donation amount
                    </label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[50, 100, 200].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-2 px-4 rounded-md text-center ${
                            donationAmount === amount && !customAmount
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                          onClick={() => handleSelectAmount(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={handleCustomAmount}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        id="anonymous"
                        name="anonymous"
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={() => setIsAnonymous(!isAnonymous)}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Donate anonymously
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Donate ${donationAmount}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
