import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-darker-surface relative overflow-hidden">
      {/* Header */}
      <header className="bg-dark-surface border-b border-neon-orange/20 shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-black font-tech text-neon-orange glitch" data-text="RiggerConnect">
                RiggerConnect
              </h1>
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

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-black font-display text-white mb-8 leading-tight">
              Western Australia's
              <span className="block bg-gradient-primary bg-clip-text text-transparent glitch" data-text="RIGGING NETWORK">
                RIGGING NETWORK
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-display font-light leading-relaxed">
              Connect skilled <span className="text-neon-orange font-semibold">Riggers</span>, <span className="text-neon-blue font-semibold">Doggers</span>, and <span className="text-neon-green font-semibold">Crane Operators</span> with construction, mining, and resources projects across Western Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/register" className="bg-gradient-primary text-white px-10 py-5 text-xl font-bold font-display rounded-lg hover:neon-glow transition-all duration-300 transform hover:scale-105 cyber-border">
                Register as Worker
              </Link>
              <Link href="/business" className="bg-gradient-secondary text-white px-10 py-5 text-xl font-bold font-display rounded-lg hover:neon-glow-blue transition-all duration-300 transform hover:scale-105 cyber-border">
                Business Solutions
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="cyber-border bg-dark-surface p-8 text-center transform hover:scale-105 transition-all duration-300">
              <h3 className="text-5xl font-black font-tech text-neon-orange mb-4">500+</h3>
              <p className="text-gray-300 font-display font-semibold text-lg">Active Workers</p>
            </div>
            <div className="cyber-border bg-dark-surface p-8 text-center transform hover:scale-105 transition-all duration-300">
              <h3 className="text-5xl font-black font-tech text-neon-blue mb-4">150+</h3>
              <p className="text-gray-300 font-display font-semibold text-lg">Trusted Businesses</p>
            </div>
            <div className="cyber-border bg-dark-surface p-8 text-center transform hover:scale-105 transition-all duration-300">
              <h3 className="text-5xl font-black font-tech text-neon-green mb-4">2,000+</h3>
              <p className="text-gray-300 font-display font-semibold text-lg">Jobs Completed</p>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="cyber-border bg-dark-surface p-10 transform hover:scale-105 transition-all duration-300 group">
              <h3 className="text-2xl font-black font-display text-neon-orange mb-6 group-hover:text-white transition-colors">RIGGERS</h3>
              <p className="text-gray-300 mb-6 font-display leading-relaxed">
                Certified riggers for complex lifting operations, structural work, and equipment installation.
              </p>
              <ul className="text-gray-400 space-y-2 font-display">
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> Basic to Advanced Rigging</li>
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> Structural Steel</li>
                <li className="flex items-center"><span className="text-neon-orange mr-2">▸</span> Heavy Machinery</li>
              </ul>
            </div>
            <div className="cyber-border bg-dark-surface p-10 transform hover:scale-105 transition-all duration-300 group">
              <h3 className="text-2xl font-black font-display text-neon-blue mb-6 group-hover:text-white transition-colors">DOGGERS</h3>
              <p className="text-gray-300 mb-6 font-display leading-relaxed">
                Experienced doggers for safe lifting operations and crane coordination.
              </p>
              <ul className="text-gray-400 space-y-2 font-display">
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> Crane Coordination</li>
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> Load Assessment</li>
                <li className="flex items-center"><span className="text-neon-blue mr-2">▸</span> Safety Supervision</li>
              </ul>
            </div>
            <div className="cyber-border bg-dark-surface p-10 transform hover:scale-105 transition-all duration-300 group">
              <h3 className="text-2xl font-black font-display text-neon-green mb-6 group-hover:text-white transition-colors">CRANE OPS</h3>
              <p className="text-gray-300 mb-6 font-display leading-relaxed">
                Licensed crane operators for all types of mobile and tower cranes.
              </p>
              <ul className="text-gray-400 space-y-2 font-display">
                <li className="flex items-center"><span className="text-neon-green mr-2">▸</span> Mobile Cranes</li>
                <li className="flex items-center"><span className="text-neon-green mr-2">▸</span> Tower Cranes</li>
                <li className="flex items-center"><span className="text-neon-green mr-2">▸</span> All Terrain Cranes</li>
              </ul>
            </div>
          </div>

          {/* ChaseWhiteRabbit NGO Section */}
          <div className="bg-gradient-secondary cyber-border p-12 mb-20 relative overflow-hidden">
            <div className="text-center relative z-10">
              <h3 className="text-4xl font-black font-display text-white mb-6">SUPPORTING CHASEWHITERABBIT NGO</h3>
              <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto font-display leading-relaxed">
                Every job posted and placement made through RiggerConnect helps fund important community work. 
                Our platform is owned and operated by industry professionals, <span className="text-neon-green font-bold">reinvesting profits into meaningful causes</span>.
              </p>
              <Link href="/about" className="bg-white text-black px-8 py-4 text-lg font-bold font-display rounded-lg hover:neon-glow transition-all duration-300 transform hover:scale-105">
                Learn More About Our Mission
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-white/10 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-white/10 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
