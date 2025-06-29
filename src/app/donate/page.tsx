"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { DollarSign, CreditCard, Heart, HelpCircle } from "lucide-react";

// Define donation amounts
const donationOptions = [10, 25, 50, 100, 200, 500];

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAnonymous: false,
  });

  // Handle custom amount input
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

  // Handle donor info changes
  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with a payment processor like Stripe or PayPal
    // For now, just log the donation details and show an alert
    console.log({
      amount: donationAmount,
      type: donationType,
      method: paymentMethod,
      donor: donorInfo,
    });
    
    alert(`Thank you for your ${donationType} donation of $${donationAmount}!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Donation Header */}
        <div className="bg-emerald-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Make a Donation
          </h1>
          <p className="mt-5 mx-auto text-xl text-emerald-100 max-w-3xl">
            Your generosity can transform lives. Choose your donation option below.
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Donation Details
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Donation Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Donation Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-md text-center ${
                          donationType === "one-time"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setDonationType("one-time")}
                      >
                        One-Time Donation
                      </button>
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-md text-center ${
                          donationType === "monthly"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setDonationType("monthly")}
                      >
                        Monthly Donation
                      </button>
                    </div>
                  </div>

                  {/* Donation Amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Donation Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {donationOptions.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-3 px-4 rounded-md text-center ${
                            donationAmount === amount && !customAmount
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                          onClick={() => {
                            setDonationAmount(amount);
                            setCustomAmount("");
                          }}
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
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={handleCustomAmount}
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-md text-center flex items-center justify-center ${
                          paymentMethod === "card"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <CreditCard className="h-5 w-5 mr-2" /> Card
                      </button>
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-md text-center flex items-center justify-center ${
                          paymentMethod === "paypal"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <span className="font-bold mr-1">P</span> PayPal
                      </button>
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-md text-center flex items-center justify-center ${
                          paymentMethod === "bank"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setPaymentMethod("bank")}
                      >
                        <span className="font-bold">Bank</span>
                      </button>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Your Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={donorInfo.firstName}
                          onChange={handleDonorInfoChange}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          required={!donorInfo.isAnonymous}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={donorInfo.lastName}
                          onChange={handleDonorInfoChange}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          required={!donorInfo.isAnonymous}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={donorInfo.email}
                        onChange={handleDonorInfoChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        id="isAnonymous"
                        name="isAnonymous"
                        type="checkbox"
                        checked={donorInfo.isAnonymous}
                        onChange={handleDonorInfoChange}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isAnonymous" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Make my donation anonymous
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    {donationType === "one-time" ? `Donate $${donationAmount} Now` : `Donate $${donationAmount} Monthly`}
                  </button>
                </form>
              </div>
            </div>

            {/* Donation Information */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-emerald-600 mr-2" /> Why Donate?
                </h2>

                <div className="prose max-w-none text-gray-600 dark:text-gray-300 mb-8">
                  <p className="mb-4">
                    Your donation to Vaidya Foundation helps create meaningful change in the lives of those who need it most. We focus on healthcare, education, emergency relief, and community empowerment.
                  </p>
                  <p className="mb-4">
                    We maintain transparency in all our operations, ensuring that your donation reaches those who need it most. 85% of all donations go directly to program implementation, with minimal administrative costs.
                  </p>
                  <p>
                    As a registered nonprofit organization, all donations to Vaidya Foundation are tax-deductible to the full extent allowed by law.
                  </p>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                    <HelpCircle className="h-5 w-5 text-emerald-600 mr-2" /> Frequently Asked Questions
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        question: "Is my donation tax-deductible?",
                        answer: "Yes, Vaidya Foundation is a registered 501(c)(3) nonprofit organization, making your donations fully tax-deductible as allowed by law."
                      },
                      {
                        question: "Can I specify where my donation goes?",
                        answer: "Yes, you can designate your donation for a specific campaign or program. If you'd like to do this, please add a note during the donation process."
                      },
                      {
                        question: "How will I receive my tax receipt?",
                        answer: "We'll automatically email a tax receipt to the email address you provide with your donation."
                      }
                    ].map((faq, index) => (
                      <div key={index}>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                          {faq.question}
                        </h4>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
