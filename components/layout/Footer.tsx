import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neon-orange/20 relative overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black font-tech text-neon-orange mb-6">RiggerConnect WA</h3>
            <p className="text-gray-300 text-lg font-display leading-relaxed mb-6">
              Western Australia's premier enterprise platform connecting skilled Riggers, Doggers, and Crane Operators with quality employment opportunities across construction, mining, and resources sectors.
            </p>
            <div className="cyber-border bg-dark-surface/50 p-6 mb-6">
              <h4 className="text-xl font-bold font-display text-neon-purple mb-3">🐰 Supporting ChaseWhiteRabbit NGO</h4>
              <p className="text-gray-400 font-display leading-relaxed">
                Every transaction supports community initiatives, worker empowerment, and ethical technology development. 
                <Link href="/about" className="text-neon-green hover:text-white transition-colors ml-1">Learn more →</Link>
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <span className="text-gray-500">Enterprise Grade</span>
              <span className="text-neon-green">•</span>
              <span className="text-gray-500">Ethical Technology</span>
              <span className="text-neon-blue">•</span>
              <span className="text-gray-500">DevOps Ready</span>
            </div>
          </div>

          {/* Workers Links */}
          <div>
            <h4 className="font-bold font-display text-neon-blue text-xl mb-6">FOR WORKERS</h4>
            <ul className="space-y-3 font-display">
              <li><Link href="/register" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> Register Profile</Link></li>
              <li><Link href="/jobs" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> Browse Jobs</Link></li>
              <li><Link href="/profile" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> Manage Profile</Link></li>
              <li><Link href="/certifications" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> Certifications</Link></li>
            </ul>
          </div>

          {/* Enterprise Links */}
          <div>
            <h4 className="font-bold font-display text-neon-green text-xl mb-6">ENTERPRISE</h4>
            <ul className="space-y-3 font-display">
              <li><Link href="/business" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> Business Solutions</Link></li>
              <li><Link href="/post-job" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> Post Opportunities</Link></li>
              <li><Link href="/safety" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> Safety Standards</Link></li>
              <li><Link href="/compliance" className="text-gray-300 hover:text-neon-orange transition-all duration-300 flex items-center group"><span className="group-hover:mr-2">▸</span> WA Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Additional Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-neon-orange/20">
          <div>
            <h4 className="font-bold font-display text-neon-purple text-lg mb-4">INDUSTRY STANDARDS</h4>
            <ul className="space-y-2 font-display text-sm">
              <li><Link href="/training" className="text-gray-400 hover:text-neon-purple transition-colors">Training Resources</Link></li>
              <li><Link href="/licensing" className="text-gray-400 hover:text-neon-purple transition-colors">Licensing Support</Link></li>
              <li><Link href="/standards" className="text-gray-400 hover:text-neon-purple transition-colors">Quality Standards</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-display text-neon-blue text-lg mb-4">SUPPORT</h4>
            <ul className="space-y-2 font-display text-sm">
              <li><Link href="/help" className="text-gray-400 hover:text-neon-blue transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact Support</Link></li>
              <li><Link href="/feedback" className="text-gray-400 hover:text-neon-blue transition-colors">Platform Feedback</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-display text-neon-green text-lg mb-4">LEGAL & ETHICS</h4>
            <ul className="space-y-2 font-display text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-neon-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-neon-green transition-colors">Terms of Service</Link></li>
              <li><Link href="/ethics" className="text-gray-400 hover:text-neon-green transition-colors">Ethical Standards</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-orange/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 font-display">
                © {currentYear} RiggerConnect WA | A <span className="text-neon-purple font-bold">ChaseWhiteRabbit NGO</span> Initiative
              </p>
              <p className="text-gray-500 text-sm font-display mt-1">
                Developed by <Link href="https://tiation.net" className="text-neon-orange hover:text-white transition-colors">Tiation</Link> | 
                Hosted on <span className="text-neon-blue">SXC.codes</span> enterprise infrastructure
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500 font-display">Powered by</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400 font-display">Next.js</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400 font-display">Supabase</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400 font-display">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cyber Effects */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-neon-orange/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-radial from-neon-blue/10 to-transparent"></div>
    </footer>
  );
}
