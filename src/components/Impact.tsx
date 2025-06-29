"use client";

const Impact = () => {
  const stats = [
    { id: 1, name: "People Helped", value: "10,000+" },
    { id: 2, name: "Funds Raised", value: "$1.2M+" },
    { id: 3, name: "Communities Served", value: "120+" },
    { id: 4, name: "Success Rate", value: "98%" },
  ];

  return (
    <section id="impact" className="py-12 bg-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-200 tracking-wide uppercase">
            Our Impact
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight">
            Making a Difference Together
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-emerald-100">
            Thanks to our donors and volunteers, we&apos;ve been able to create positive change worldwide.
          </p>
        </div>

        <div className="mt-10">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <dt className="text-base font-medium text-emerald-200">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-5xl font-extrabold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 bg-emerald-800 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              Our work is only possible because of you
            </h3>
            <p className="mt-4 text-lg text-emerald-100">
              Every donation directly contributes to our mission of providing aid and support to those who need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
