import Link from "next/link";

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Senior Rigger - Mining Project",
      company: "WA Mining Solutions",
      location: "Pilbara, WA",
      type: "Contract",
      duration: "6 months",
      rate: "$45-55/hr",
      posted: "2 days ago",
      description: "Experienced rigger needed for major iron ore project. Advanced rigging certification required.",
      requirements: ["Advanced Rigging License", "5+ years experience", "FIFO experience preferred"]
    },
    {
      id: 2,
      title: "Crane Operator - Tower Crane",
      company: "Perth Construction Group",
      location: "Perth CBD, WA",
      type: "Full-time",
      duration: "12 months",
      rate: "$42-48/hr",
      posted: "1 week ago",
      description: "Tower crane operator for high-rise residential development in Perth CBD.",
      requirements: ["Tower Crane License", "High-rise experience", "Safety certification"]
    },
    {
      id: 3,
      title: "Dogger/Rigger Combo",
      company: "Industrial Services WA",
      location: "Kwinana, WA",
      type: "Casual",
      duration: "Ongoing",
      rate: "$38-42/hr",
      posted: "3 days ago",
      description: "Multi-skilled dogger/rigger for refinery maintenance work. Flexible hours available.",
      requirements: ["Dogging License", "Basic Rigging", "Refinery experience preferred"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                RiggerConnect
              </h1>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">WA</span>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/jobs" className="text-orange-600 dark:text-orange-400 font-semibold">
                Find Jobs
              </Link>
              <Link href="/post-job" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Post Job
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Available Jobs
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Find rigging, dogging, and crane operator positions across Western Australia
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white">
                <option>All Types</option>
                <option>Rigger</option>
                <option>Dogger</option>
                <option>Crane Operator</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white">
                <option>All Locations</option>
                <option>Perth</option>
                <option>Pilbara</option>
                <option>Goldfields</option>
                <option>Southwest WA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Employment Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Contract</option>
                <option>Casual</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                    {job.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {job.location} • {job.type} • {job.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {job.rate}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Posted {job.posted}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Requirements:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>• {req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  Apply Now
                </button>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Save Job
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Load More Jobs
          </button>
        </div>
      </main>
    </div>
  );
}
