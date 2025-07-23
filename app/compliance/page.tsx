import Link from "next/link";

export default function Compliance() {
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
            Compliance & Safety Standards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Ensuring our platform and its users meet WorkSafe WA and industry-leading safety standards.
          </p>
        </div>

        {/* WA Safety Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">WorkSafe WA Compliance</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              RiggerConnect WA operates under strict adherence to WorkSafe Western Australia regulations. Every worker on our platform must maintain current certifications and comply with WA safety standards.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>High Risk Work Licenses (HRWL) verification</li>
              <li>Regular safety training updates</li>
              <li>Incident reporting and tracking</li>
              <li>Workplace health and safety documentation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Required Certifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">🏗️ Riggers</h3>
                <p className="text-sm opacity-90">Basic Rigging (RB), Intermediate Rigging (RI), Advanced Rigging (RA)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🔗 Doggers</h3>
                <p className="text-sm opacity-90">Dogging (DG), Slinging and Signalling</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🏗️ Crane Operators</h3>
                <p className="text-sm opacity-90">Mobile Crane (CM), Tower Crane (CT), Bridge & Gantry Crane (CB)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Standards */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Platform Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Verification Process</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All certifications verified against official WorkSafe WA databases before approval.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enterprise-grade security protecting sensitive certification and personal data.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automated alerts for expiring certifications and compliance updates.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Questions About Compliance?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/safety" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
              Safety Standards
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Contact Compliance Team
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
              Supporting ChaseWhiteRabbit NGO • WorkSafe WA Compliant • Enterprise-grade solutions
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
