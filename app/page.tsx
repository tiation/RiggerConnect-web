import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                RiggerConnect
              </h1>
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Western Australia's
            <span className="block text-orange-600 dark:text-orange-400">
              Rigging Network
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect skilled Riggers, Doggers, and Crane Operators with construction, mining, and resources projects across Western Australia. Quick, efficient, and professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
              Register as Worker
            </Link>
            <Link href="/business" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Business Solutions
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">500+</h3>
            <p className="text-gray-600 dark:text-gray-300">Active Workers</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</h3>
            <p className="text-gray-600 dark:text-gray-300">Trusted Businesses</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2,000+</h3>
            <p className="text-gray-600 dark:text-gray-300">Jobs Completed</p>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Riggers</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Certified riggers for complex lifting operations, structural work, and equipment installation.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Basic to Advanced Rigging</li>
              <li>• Structural Steel</li>
              <li>• Heavy Machinery</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Doggers</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Experienced doggers for safe lifting operations and crane coordination.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Crane Coordination</li>
              <li>• Load Assessment</li>
              <li>• Safety Supervision</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Crane Operators</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Licensed crane operators for all types of mobile and tower cranes.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Mobile Cranes</li>
              <li>• Tower Cranes</li>
              <li>• All Terrain Cranes</li>
            </ul>
          </div>
        </div>

        {/* ChaseWhiteRabbit NGO Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Supporting ChaseWhiteRabbit NGO</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Every job posted and placement made through RiggerConnect helps fund important community work. 
              Our platform is owned and operated by industry professionals, reinvesting profits into meaningful causes.
            </p>
            <Link href="/about" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About Our Mission
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-400">RiggerConnect WA</h3>
              <p className="text-gray-300 text-sm">
                Connecting Western Australia's construction, mining, and resources industry with skilled rigging professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Workers</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/register" className="hover:text-orange-400">Register</Link></li>
                <li><Link href="/jobs" className="hover:text-orange-400">Browse Jobs</Link></li>
                <li><Link href="/profile" className="hover:text-orange-400">Manage Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/business" className="hover:text-orange-400">Business Account</Link></li>
                <li><Link href="/post-job" className="hover:text-orange-400">Post Job</Link></li>
                <li><Link href="/pricing" className="hover:text-orange-400">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/safety" className="hover:text-orange-400">Safety Standards</Link></li>
                <li><Link href="/compliance" className="hover:text-orange-400">Compliance</Link></li>
                <li><Link href="/contact" className="hover:text-orange-400">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 RiggerConnect WA. Supporting ChaseWhiteRabbit NGO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
