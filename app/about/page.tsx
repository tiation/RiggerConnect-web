import Link from "next/link";

export default function About() {
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
            About RiggerConnect WA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connecting Western Australia's construction, mining, and resources industry with skilled rigging professionals while supporting meaningful community work.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              RiggerConnect WA bridges the gap between skilled rigging professionals and industry demand across Western Australia. We focus on three critical roles that keep our construction, mining, and resources sectors moving safely and efficiently.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our platform ensures that qualified Riggers, Doggers, and Crane Operators can easily connect with businesses that need their expertise, while maintaining the highest safety and compliance standards.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Every placement made through our platform contributes directly to community initiatives through the ChaseWhiteRabbit NGO.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">ChaseWhiteRabbit NGO</h2>
            <p className="mb-4">
              ChaseWhiteRabbit is a Western Australian non-governmental organization dedicated to supporting community resilience, mental health awareness, and industry safety initiatives.
            </p>
            <p className="mb-4">
              Founded by industry professionals who understand the unique challenges facing workers in high-risk environments, the NGO focuses on:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Mental health support for construction and mining workers</li>
              <li>Safety training and awareness programs</li>
              <li>Community resilience building</li>
              <li>Support for families affected by workplace incidents</li>
            </ul>
            <p className="text-sm opacity-90">
              By using RiggerConnect WA, you're not just finding work or workers – you're contributing to initiatives that make our industry safer and our communities stronger.
            </p>
          </div>
        </div>

        {/* Industry Standards */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Industry-Leading Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">WA Safety Compliant</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All workers verified against WorkSafe WA requirements and industry certifications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Certified Professionals</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every rigger, dogger, and crane operator holds current certifications and licenses.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enterprise Grade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built for large-scale operations with robust security and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
              Register as Worker
            </Link>
            <Link href="/business" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Business Solutions
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
