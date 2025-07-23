import Link from "next/link";

export default function Register() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Register as a Worker
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join Western Australia's premier rigging network. Create your profile to access quality jobs 
            in construction, mining, and resources across WA.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Why Register with RiggerConnect?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-orange-600 dark:text-orange-400 text-2xl mb-2">⚡</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Quick job matching based on your skills and location</p>
            </div>
            <div>
              <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">🎯</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Direct contact with reputable WA employers</p>
            </div>
            <div>
              <div className="text-green-600 dark:text-green-400 text-2xl mb-2">💼</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Industry-competitive rates and career growth</p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <form className="space-y-6">
            {/* Personal Information */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="04xx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="">Select your location</option>
                    <option value="perth">Perth Metro</option>
                    <option value="pilbara">Pilbara</option>
                    <option value="goldfields">Goldfields</option>
                    <option value="southwest">Southwest WA</option>
                    <option value="midwest">Midwest</option>
                    <option value="kimberley">Kimberley</option>
                    <option value="great-southern">Great Southern</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Primary Skills * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'Basic Rigging',
                      'Advanced Rigging',
                      'Dogging',
                      'Mobile Crane Operation',
                      'Tower Crane Operation',
                      'Overhead Crane Operation',
                      'Structural Steel Erection',
                      'Heavy Machinery Installation',
                      'Scaffolding'
                    ].map((skill) => (
                      <label key={skill} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Years of Experience *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="11-15">11-15 years</option>
                      <option value="16+">16+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Work Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option value="">Any work type</option>
                      <option value="full-time">Full-time</option>
                      <option value="contract">Contract</option>
                      <option value="casual">Casual</option>
                      <option value="fifo">FIFO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Industry Experience (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      'Mining',
                      'Construction',
                      'Oil & Gas',
                      'Infrastructure',
                      'Manufacturing',
                      'Marine/Offshore',
                      'Utilities',
                      'Renewable Energy'
                    ].map((industry) => (
                      <label key={industry} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Licenses */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Certifications & Licenses
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Certifications * (List all valid certifications)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Basic Rigging License (BR001234), Dogging License (DG005678), White Card, Working at Heights..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Construction Induction Card (White Card) *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option value="">Select status</option>
                      <option value="current">Current & Valid</option>
                      <option value="expired">Expired (willing to renew)</option>
                      <option value="none">Don't have (willing to obtain)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Driver's License *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option value="">Select license type</option>
                      <option value="car">Car License (C Class)</option>
                      <option value="light-rigid">Light Rigid (LR)</option>
                      <option value="medium-rigid">Medium Rigid (MR)</option>
                      <option value="heavy-rigid">Heavy Rigid (HR)</option>
                      <option value="heavy-combination">Heavy Combination (HC)</option>
                      <option value="multi-combination">Multi Combination (MC)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability & Preferences */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Availability & Preferences
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Availability *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option value="">Select availability</option>
                      <option value="immediate">Available Immediately</option>
                      <option value="1-week">Available in 1 week</option>
                      <option value="2-weeks">Available in 2 weeks</option>
                      <option value="1-month">Available in 1 month</option>
                      <option value="currently-employed">Currently employed (for future opportunities)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Expected Hourly Rate
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="e.g., $40-50/hr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Travel & Accommodation Preferences
                  </label>
                  <div className="space-y-2">
                    {[
                      'Willing to travel within WA',
                      'Open to FIFO work',
                      'Have own accommodation',
                      'Require accommodation assistance',
                      'Own reliable transport',
                      'Available for short-term contracts',
                      'Available for long-term positions'
                    ].map((pref) => (
                      <label key={pref} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="pb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Additional Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Brief Professional Summary
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your experience, specialties, and what makes you a great addition to any team..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      I confirm all information provided is accurate and up to date
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      I agree to RiggerConnect's Terms of Service and Privacy Policy
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      I consent to being contacted by potential employers about job opportunities
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-orange-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
              >
                Create Worker Profile
              </button>
            </div>
          </form>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 text-center">
            What happens next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">1️⃣</div>
              <p className="text-blue-700 dark:text-blue-200">
                We'll review your profile and verify your certifications
              </p>
            </div>
            <div>
              <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">2️⃣</div>
              <p className="text-blue-700 dark:text-blue-200">
                You'll receive job alerts matching your skills and preferences
              </p>
            </div>
            <div>
              <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">3️⃣</div>
              <p className="text-blue-700 dark:text-blue-200">
                Connect directly with employers and start working!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
