import Link from "next/link";

export default function Contact() {
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Get in touch with our team for support, partnerships, or any questions about RiggerConnect WA.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Business Inquiries */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Business Inquiries</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">business@riggerconnect.com.au</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+61 8 9XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🏢</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Office</p>
                  <p className="text-gray-600 dark:text-gray-300">Perth, Western Australia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Worker Support */}
          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Worker Support</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">🆘</span>
                <div>
                  <p className="font-semibold">Support Helpline</p>
                  <p className="opacity-90">support@riggerconnect.com.au</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">⚡</span>
                <div>
                  <p className="font-semibold">Emergency Support</p>
                  <p className="opacity-90">Available 24/7 for urgent matters</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">💬</span>
                <div>
                  <p className="font-semibold">ChaseWhiteRabbit NGO</p>
                  <p className="opacity-90">Mental health and community support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a topic</option>
                <option value="business">Business Partnership</option>
                <option value="worker">Worker Support</option>
                <option value="compliance">Compliance Questions</option>
                <option value="technical">Technical Support</option>
                <option value="ngo">ChaseWhiteRabbit NGO</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Enterprise Integration Note */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Enterprise Integrations</h3>
          <p className="mb-6">
            Connecting seamlessly with RiggerHub-web, mobile apps, and backend systems. 
            Part of the comprehensive RiggerConnect ecosystem.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded">RiggerHub-web</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Mobile Apps</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded">RiggerBackend</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded">RiggerShared</span>
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
