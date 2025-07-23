import Link from "next/link";

export default function Profile() {
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
            Worker Profile
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Manage your professional profile, certifications, and job preferences. 
            Stand out to employers across Western Australia.
          </p>
        </div>

        {/* Profile Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Setup */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profile Setup</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">👤</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Personal Information</p>
                  <p className="text-gray-600 dark:text-gray-300">Update your contact details and location</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📋</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Certifications</p>
                  <p className="text-gray-600 dark:text-gray-300">Upload and verify your licenses and qualifications</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">💼</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Work Experience</p>
                  <p className="text-gray-600 dark:text-gray-300">Showcase your rigging experience and projects</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/register" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Complete Profile Setup
              </Link>
            </div>
          </div>

          {/* Certification Management */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Certification Management</h2>
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🏗️ Rigging Certifications</h3>
                <p className="text-sm opacity-90">Basic, Intermediate, and Advanced Rigging Licenses</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🔗 Dogging Certifications</h3>
                <p className="text-sm opacity-90">Dogging and Slinging Licenses</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🏗️ Crane Operation</h3>
                <p className="text-sm opacity-90">Mobile, Tower, and Bridge Crane Licenses</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Upload Certifications
              </button>
            </div>
          </div>
        </div>

        {/* Profile Features */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Profile Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Job Matching</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get matched with jobs that fit your skills and location preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your job history, ratings, and professional growth.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Job Alerts</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive instant notifications for new opportunities matching your profile.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Notice */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Sync Across All Platforms</h3>
          <p className="mb-6">
            Your profile automatically syncs with RiggerHub-web dashboard and mobile apps. 
            Manage your career from anywhere, anytime.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Web Dashboard</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded">iOS App</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Android App</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ready to Build Your Profile?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
              Create Your Profile
            </Link>
            <Link href="/jobs" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Browse Available Jobs
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
