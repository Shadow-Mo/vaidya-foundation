"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download, PieChart, TrendingUp, DollarSign } from "lucide-react";

// Sample financial reports
const financialReports = [
  {
    title: "Annual Financial Report 2024",
    description: "Comprehensive overview of all financial activities, donations received, and funds allocated to various programs.",
    date: "April 15, 2024",
    fileSize: "2.4 MB",
    downloadUrl: "#",
  },
  {
    title: "Q1 2024 Financial Statement",
    description: "Quarterly financial statement showing income, expenses, and program allocations for January-March 2024.",
    date: "April 10, 2024",
    fileSize: "1.8 MB",
    downloadUrl: "#",
  },
  {
    title: "Annual Financial Report 2023",
    description: "Comprehensive overview of all financial activities, donations received, and funds allocated to various programs.",
    date: "April 20, 2023",
    fileSize: "2.2 MB",
    downloadUrl: "#",
  },
  {
    title: "Impact Assessment Report 2023",
    description: "Detailed analysis of the impact created by our programs across all focus areas, with metrics and beneficiary stories.",
    date: "March 1, 2023",
    fileSize: "3.5 MB",
    downloadUrl: "#",
  },
  {
    title: "Audit Report 2023",
    description: "Independent audit report verifying the accuracy and compliance of our financial statements.",
    date: "May 15, 2023",
    fileSize: "1.5 MB",
    downloadUrl: "#",
  },
  {
    title: "Annual Financial Report 2022",
    description: "Comprehensive overview of all financial activities, donations received, and funds allocated to various programs.",
    date: "April 18, 2022",
    fileSize: "2.1 MB",
    downloadUrl: "#",
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-emerald-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Financial Reports
          </h1>
          <p className="mt-5 mx-auto text-xl text-emerald-100 max-w-3xl">
            Transparency is at the core of our values. Access our financial reports and see how your donations are making a difference.
          </p>
        </div>

        {/* Financial Highlights */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Financial Highlights
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mb-4 mx-auto">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-2">
                  $2.4 Million
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Total donations raised in 2023
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mb-4 mx-auto">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-2">
                  85%
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Of funds directly support programs
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mb-4 mx-auto">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-2">
                  28% Growth
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Year-over-year increase in impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Download Reports
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {financialReports.map((report, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FileText className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {report.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {report.description}
                        </p>
                        <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <span>{report.date}</span>
                          <span className="mx-2">•</span>
                          <span>{report.fileSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 px-6 py-3">
                    <a
                      href={report.downloadUrl}
                      className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" /> Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Commitment to Transparency
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                At Vaidya Foundation, we believe that transparency builds trust. We are committed to being open and accountable about how we use the funds entrusted to us.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                All our financial statements are independently audited and we adhere to the highest standards of nonprofit accounting practices. If you have any questions about our financial reports, please <a href="/contact" className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
