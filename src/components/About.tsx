"use client";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">
            Our Mission
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Vaidya Foundation
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Empowering lives through compassion, healthcare, and community support
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  To create a world where quality healthcare and essential resources are accessible 
                  to everyone, regardless of their economic status, geographic location, or social background.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Our Values
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  We believe in transparency, compassion, and sustainable impact. Every donation is 
                  thoughtfully allocated to maximize its effect, and we maintain open communication 
                  with donors about how their contributions are making a difference.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Our Approach
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  We work directly with communities to identify their most urgent needs and deliver targeted 
                  solutions. By partnering with local healthcare providers, schools, and relief organizations, 
                  we ensure that our resources reach those who need them most.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Our Impact
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Since our founding, we've helped thousands access vital healthcare services, supported 
                  education initiatives in underserved areas, and provided emergency relief during crises. 
                  Each donation contributes to our growing impact across communities in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
