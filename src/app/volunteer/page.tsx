"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Users, Calendar, MapPin, ArrowRight, Briefcase } from "lucide-react";

// Define volunteer opportunity types
interface VolunteerOpportunity {
  id: number;
  title: string;
  location: string;
  commitment: string;
  category: string;
  description: string;
}

const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 1,
    title: "Medical Camp Assistant",
    location: "Multiple Locations",
    commitment: "Weekend, 4-8 hours",
    category: "Healthcare",
    description: "Assist doctors and nurses during medical camps by managing patient flow, helping with registrations, and providing general support.",
  },
  {
    id: 2,
    title: "Education Mentor",
    location: "Various Schools",
    commitment: "Weekly, 2-4 hours",
    category: "Education",
    description: "Provide mentoring and tutoring to students in underserved communities, helping with homework, exam preparation, and skill development.",
  },
  {
    id: 3,
    title: "Emergency Response Team",
    location: "As needed",
    commitment: "On-call",
    category: "Emergency",
    description: "Join our rapid response team to help distribute supplies, set up shelters, and provide assistance during natural disasters and emergencies.",
  },
  {
    id: 4,
    title: "Administrative Support",
    location: "Foundation Office",
    commitment: "Flexible, 4-16 hours/week",
    category: "Office Work",
    description: "Help with office tasks like data entry, donor communication, campaign planning, and general administrative support.",
  },
];

export default function VolunteerPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, interests, message });
    alert("Thank you for your interest in volunteering! We'll contact you soon.");
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setInterests([]);
    setMessage("");
  };

  // Handle interest selection
  const handleInterestChange = (category: string) => {
    if (interests.includes(category)) {
      setInterests(interests.filter(i => i !== category));
    } else {
      setInterests([...interests, category]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-emerald-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Volunteer With Us
          </h1>
          <p className="mt-5 mx-auto text-xl text-emerald-100 max-w-3xl">
            Share your time and skills to create meaningful change in communities that need it most.
          </p>
        </div>

        {/* Volunteer opportunities */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Current Volunteer Opportunities
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {volunteerOpportunities.map((opportunity) => (
                <div 
                  key={opportunity.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {opportunity.title}
                    </h3>
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-emerald-500" />
                        {opportunity.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2 text-emerald-500" />
                        {opportunity.commitment}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Briefcase className="h-4 w-4 mr-2 text-emerald-500" />
                        {opportunity.category}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {opportunity.description}
                    </p>
                    <button className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium flex items-center">
                      Apply for this role <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Volunteer form */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Join Our Volunteer Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Fill out the form below to express your interest in volunteering with us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Healthcare", "Education", "Emergency", "Office Work"].map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`category-${category}`}
                          type="checkbox"
                          checked={interests.includes(category)}
                          onChange={() => handleInterestChange(category)}
                          className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`category-${category}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message (Skills, Availability, etc.)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
