import Link from "next/link";

export default function Pricing() {
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works best for your business needs. All plans include access to our quality network of certified riggers, doggers, and crane operators.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Worker Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-transparent">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Workers</h2>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">FREE</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Always free for workers</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Create professional profile
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Browse and apply to jobs
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Direct messaging with employers
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Skills verification
              </li>
            </ul>
            <Link href="/register" className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
              Register Now
            </Link>
          </div>

          {/* Business Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-orange-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business</h2>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">$99</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">per job posting</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Post unlimited job listings
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Access to verified workers
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Direct communication tools
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Basic support
              </li>
            </ul>
            <Link href="/business" className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-transparent">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise</h2>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Custom</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Tailored solutions</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                All Business features
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Priority support
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Custom integrations
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-3">✓</span>
                Dedicated account manager
              </li>
            </ul>
            <Link href="/contact" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
              Contact Sales
            </Link>
          </div>
        </div>

        {/* ChaseWhiteRabbit NGO Note */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Supporting Our Community</h3>
          <p className="text-lg mb-4">
            Every job posting through RiggerConnect WA contributes to ChaseWhiteRabbit NGO's community initiatives, 
            supporting mental health, safety training, and industry welfare programs.
          </p>
          <Link href="/about" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Learn More About Our Mission
          </Link>
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

export default Pricing;

