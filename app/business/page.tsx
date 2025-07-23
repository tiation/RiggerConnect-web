import Link from "next/link";

export default function Business() {
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
            Business Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Connect your business with Western Australia's most skilled rigging professionals. 
            Enterprise-grade solutions for construction, mining, and resources projects.
          </p>
        </div>

        {/* Business Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Rapid Deployment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get certified riggers, doggers, and crane operators on-site within 24-48 hours across WA.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Compliance Assured</h3>
            <p className="text-gray-600 dark:text-gray-300">
              All workers pre-verified against WorkSafe WA requirements with up-to-date certifications.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cost Effective</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Transparent pricing with no hidden fees. Pay only for successful placements.
            </p>
          </div>
        </div>

        {/* Service Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Choose Your Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Standard */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Standard</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for smaller projects</p>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  $150
                  <span className="text-lg text-gray-500 font-normal">/placement</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Access to verified workers</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Basic support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Standard insurance coverage</span>
                </li>
              </ul>
              <Link href="/register-business" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors block text-center">
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-bold">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="opacity-90 mb-4">For large-scale operations</p>
                <div className="text-3xl font-bold">
                  $300
                  <span className="text-lg opacity-75 font-normal">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Priority access to premium workers</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Custom integration with RiggerHub</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Advanced analytics and reporting</span>
                </li>
              </ul>
              <Link href="/register-business" className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block text-center">
                Start Enterprise Trial
              </Link>
            </div>

            {/* Mining & Resources */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mining & Resources</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Specialized for heavy industry</p>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  Custom
                  <span className="text-lg text-gray-500 font-normal">/pricing</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Mine-site specific certifications</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">FIFO/DIDO workforce management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Remote site deployment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Specialized heavy lift operations</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors block text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Integration with RiggerHub */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
            <p className="text-lg mb-6">
              RiggerConnect-web integrates seamlessly with the full RiggerHub ecosystem, 
              providing you with comprehensive workforce management across all platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white bg-opacity-10 p-3 rounded">
                <strong>RiggerHub-web</strong><br />
                <span className="opacity-75">Full dashboard</span>
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded">
                <strong>Mobile Apps</strong><br />
                <span className="opacity-75">iOS & Android</span>
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded">
                <strong>RiggerBackend</strong><br />
                <span className="opacity-75">API Integration</span>
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded">
                <strong>RiggerShared</strong><br />
                <span className="opacity-75">Data synchronization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register-business" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
              Create Business Account
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Speak to Sales
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
              Supporting ChaseWhiteRabbit NGO • Enterprise-grade rigging solutions
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
