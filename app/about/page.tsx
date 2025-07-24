import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-darker-surface relative overflow-hidden">
      {/* Header */}
      <header className="bg-dark-surface border-b border-neon-orange/20 shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-3xl font-black font-tech text-neon-orange glitch" data-text="RiggerConnect">
                  RiggerConnect
                </h1>
              </Link>
              <span className="ml-3 text-lg font-display font-bold text-neon-blue bg-darker-surface px-2 py-1 rounded border border-neon-blue/30">WA</span>
            </div>
            <nav className="flex space-x-6">
              <Link href="/jobs" className="text-gray-300 hover:text-neon-green transition-all duration-300 font-display font-semibold text-lg transform hover:scale-105">
                Find Jobs
              </Link>
              <Link href="/post-job" className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:neon-glow transition-all duration-300 font-display font-bold transform hover:scale-105">
                Post Job
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-8 leading-tight">
            About 
            <span className="block bg-gradient-secondary bg-clip-text text-transparent glitch" data-text="CHASEWHITERABBIT NGO">
              CHASEWHITERABBIT NGO
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-display font-light leading-relaxed">
            Empowering blue-collar workers through <span className="text-neon-green font-semibold">ethical technology</span>, 
            <span className="text-neon-orange font-semibold"> enterprise-grade solutions</span>, and 
            <span className="text-neon-blue font-semibold"> community initiatives</span>.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="cyber-border bg-dark-surface p-12 mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black font-display text-neon-orange mb-8 text-center">OUR MISSION</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-display text-center max-w-5xl mx-auto">
              ChaseWhiteRabbit NGO is dedicated to bridging the digital divide in traditional industries. 
              We believe that <span className="text-neon-green font-bold">technology should empower workers, not replace them</span>. 
              Through RiggerConnect, we're creating opportunities, fostering professional growth, and building stronger communities 
              in Western Australia's construction, mining, and resources sectors.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-neon-orange/10 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="cyber-border bg-dark-surface p-10 transform hover:scale-105 transition-all duration-300 group">
            <h3 className="text-2xl font-black font-display text-neon-orange mb-6 group-hover:text-white transition-colors">ETHICAL TECHNOLOGY</h3>
            <p className="text-gray-300 font-display leading-relaxed">
              Every feature we build prioritizes user privacy, data sovereignty, and worker empowerment. 
              No algorithmic bias, no dark patterns, just honest technology that serves people.
            </p>
          </div>
          <div className="cyber-border bg-dark-surface p-10 transform hover:scale-105 transition-all duration-300 group">
            <h3 className="text-2xl font-black font-display text-neon-blue mb-6 group-hover:text-white transition-colors">ENTERPRISE GRADE</h3>
            <p className="text-gray-300 font-display leading-relaxed">
              Built with DevOps best practices, enterprise security standards, and scalable architecture. 
              Professional-grade infrastructure that blue-collar workers deserve.
            </p>
          </div>
          <div className="cyber-border bg-dark-surface p-10 transform hover:scale-105 transition-all duration-300 group">
            <h3 className="text-2xl font-black font-display text-neon-green mb-6 group-hover:text-white transition-colors">COMMUNITY IMPACT</h3>
            <p className="text-gray-300 font-display leading-relaxed">
              Every job placement, every connection made through our platform directly funds community initiatives, 
              skills training, and worker advocacy programs.
            </p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-secondary cyber-border p-12 mb-20 relative overflow-hidden">
          <div className="text-center relative z-10">
            <h2 className="text-4xl font-black font-display text-white mb-12">COMMUNITY IMPACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-5xl font-black font-tech text-neon-green mb-4">$50K+</h3>
                <p className="text-xl text-gray-200 font-display">Reinvested in Community Programs</p>
              </div>
              <div>
                <h3 className="text-5xl font-black font-tech text-neon-orange mb-4">500+</h3>
                <p className="text-xl text-gray-200 font-display">Workers Supported</p>
              </div>
              <div>
                <h3 className="text-5xl font-black font-tech text-neon-blue mb-4">15+</h3>
                <p className="text-xl text-gray-200 font-display">Training Programs Funded</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-white/10 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
        </div>

        {/* Enterprise Compliance */}
        <div className="cyber-border bg-dark-surface p-12 mb-20">
          <h2 className="text-4xl font-black font-display text-neon-purple mb-8 text-center">ENTERPRISE COMPLIANCE & ETHICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-display text-neon-orange mb-6">Security & Privacy</h3>
              <ul className="space-y-3 text-gray-300 font-display">
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> ISO 27001 Security Standards</li>
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> GDPR & Privacy Compliance</li>
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> End-to-End Encryption</li>
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> Regular Security Audits</li>
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> Worker Data Sovereignty</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display text-neon-blue mb-6">DevOps Excellence</h3>
              <ul className="space-y-3 text-gray-300 font-display">
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> CI/CD Pipeline Automation</li>
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> Kubernetes Orchestration</li>
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> 99.9% Uptime SLA</li>
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> Multi-Region Redundancy</li>
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> Real-time Monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-black font-display text-white mb-8">JOIN OUR MISSION</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-display leading-relaxed">
            Whether you're a rigger looking for opportunities, a business seeking skilled workers, 
            or someone who believes in ethical technology for blue-collar workers, you have a place in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/register" className="bg-gradient-primary text-white px-10 py-5 text-xl font-bold font-display rounded-lg hover:neon-glow transition-all duration-300 transform hover:scale-105 cyber-border">
              Join as Worker
            </Link>
            <Link href="/business" className="bg-gradient-secondary text-white px-10 py-5 text-xl font-bold font-display rounded-lg hover:neon-glow-blue transition-all duration-300 transform hover:scale-105 cyber-border">
              Partner with Us
            </Link>
            <Link href="/contact" className="bg-gradient-accent text-black px-10 py-5 text-xl font-bold font-display rounded-lg hover:neon-glow transition-all duration-300 transform hover:scale-105 cyber-border">
              Get Involved
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-neon-orange/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-gray-400 font-display">© 2025 RiggerConnect WA | A <span className="text-neon-purple font-bold">ChaseWhiteRabbit NGO</span> Initiative</p>
            <p className="text-gray-500 text-sm font-display mt-1">Enterprise-grade • Ethical • DevOps Ready</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
