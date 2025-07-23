import Link from "next/link";

export default function Safety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                RiggerConnect
              </Link>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">WA</span>
            </div>
            <nav className="flex space-x-4">
              <Link href="/jobs" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 transition-colors">
                Find Jobs
              </Link>
              <Link href="/post-job" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Post Job
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Safety Standards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Empowering our workers and partners with leading safety practices and protocols.
          </p>
        </div>

        {/* Safety Details */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Commitment to Safety</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            At RiggerConnect WA, safety is our top priority. We ensure that all rigging activities are conducted under rigorous safety guidelines, and we empower our workers through continuous safety training and education.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>On-site safety audits and risk assessments</li>
            <li>Comprehensive incident management system</li>
            <li>Training programs for emergency response and preparedness</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Stay Safe with RiggerConnect WA</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compliance" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
              Compliance Details
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Contact Our Safety Team
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold text-orange-400 mb-4 inline-block">
              RiggerConnect WA
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Supporting ChaseWhiteRabbit NGO • Enterprise-grade safety solutions
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/safety" className="hover:text-orange-400">Safety</Link>
              <Link href="/compliance" className="hover:text-orange-400">Compliance</Link>
              <Link href="/contact" className="hover:text-orange-400">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
