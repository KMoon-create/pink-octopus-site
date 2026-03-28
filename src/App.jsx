import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Brain, Anchor, ArrowRight, Heart, Users, Globe } from 'lucide-react';

// Color Palette defined in the prompt:
// Deep Ocean Blue: #0F2A3D
// Teal: #1C6E73
// Coral Pink: #F06A8B
// Seafoam: #9ED9CC
// Warm Sand: #F4E9DA

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F2A3D] shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <OctopusIcon className="w-8 h-8 text-[#F06A8B]" />
            <span className="text-[#F4E9DA] font-bold text-xl tracking-wide">Pink Octopus Inc.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Games', 'Studio', 'Community', 'Journal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#F4E9DA] hover:text-[#9ED9CC] transition-colors text-sm font-medium">
                {item}
              </a>
            ))}
            <button className="bg-[#F06A8B] hover:bg-[#d85c7a] text-white px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#F4E9DA]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F2A3D] absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            {['Games', 'Studio', 'Community', 'Journal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-[#F4E9DA] hover:text-[#9ED9CC] block text-lg font-medium">
                {item}
              </a>
            ))}
            <button className="bg-[#F06A8B] text-white px-5 py-3 rounded-md text-center font-bold w-full mt-4">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0F2A3D] to-[#1C6E73]">
    {/* Subtle Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
      <OctopusIcon className="w-[800px] h-[800px] absolute -right-40 -bottom-40 text-white transform rotate-12" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F4E9DA] leading-tight mb-6">
          Mobile Games That <span className="text-[#F06A8B]">Think Differently.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#9ED9CC] mb-8 leading-relaxed">
          An independent game studio building ecological mobile games while championing women in tech, neurodivergent thinkers, and inclusive leadership.
        </p>
        <p className="text-xl text-[#F4E9DA] font-semibold mb-10 border-l-4 border-[#F06A8B] pl-4">
          We believe better games come from different minds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#F06A8B] hover:bg-[#d85c7a] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg">
            Explore Our Games <ArrowRight size={20} />
          </button>
          <button className="bg-transparent border-2 border-[#9ED9CC] text-[#9ED9CC] hover:bg-[#9ED9CC] hover:text-[#0F2A3D] px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
            Our Mission
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-[#1C6E73]" />,
      title: "Eco-Focused Games",
      desc: "Designing games that teach the world to heal. Mobile experiences focused on environmental restoration, natural systems, and the balance of the living world."
    },
    {
      icon: <Brain className="w-10 h-10 text-[#F06A8B]" />,
      title: "Inclusive Development",
      desc: "Actively supporting women in tech and neurodivergent creators. We thrive on different communication styles and working methods."
    },
    {
      icon: <Anchor className="w-10 h-10 text-[#0F2A3D]" />,
      title: "Independent Studio",
      desc: "Creative freedom without corporate pressure. We will never become publicly traded or break our basic business ethics."
    }
  ];

  return (
    <section className="py-20 bg-[#F4E9DA]" id="studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A3D] mb-4">What We Build</h2>
          <div className="w-24 h-1 bg-[#F06A8B] mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="bg-[#F4E9DA] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F2A3D] mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedGame = () => (
  <section className="py-24 bg-white" id="games">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          {/* Abstract Placeholder for Game Graphic */}
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#9ED9CC] flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C6E73] to-[#9ED9CC] opacity-90"></div>
            <div className="relative z-10 text-center p-8">
               <Globe className="w-32 h-32 text-white mx-auto mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />
               <div className="text-white font-bold text-2xl tracking-widest opacity-50">GAME PROTOTYPE</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-[#F06A8B] font-bold tracking-wider uppercase text-sm mb-2 block">Featured Project</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F2A3D] mb-6">Tap Into Nature</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            A mobile ecosystem game where players restore damaged landscapes, rebuild biodiversity, and learn how natural systems recover over time.
          </p>
          <blockquote className="text-2xl font-medium text-[#1C6E73] italic mb-8 border-l-4 border-[#9ED9CC] pl-6">
            "Players don't conquer environments. They heal them."
          </blockquote>
          <button className="bg-[#1C6E73] hover:bg-[#145256] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 inline-flex items-center gap-2">
            Learn More <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="py-24 bg-[#0F2A3D] text-[#F4E9DA]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Heart className="w-16 h-16 text-[#F06A8B] mx-auto mb-8" />
      <h2 className="text-4xl font-bold mb-8 text-white">Why We Think Differently</h2>
      <div className="space-y-6 text-lg md:text-xl text-[#9ED9CC] leading-relaxed">
        <p>
          The modern tech industry often rewards conformity. Meetings that should have been emails. Ideas filtered through layers of bureaucracy. Creative people pushed into molds that were never designed for them.
        </p>
        <p>
          Pink Octopus was founded on a different belief: <strong className="text-white">Great ideas emerge when people are allowed to think differently.</strong>
        </p>
        <p>
          We build an environment where women stand tall without having to "act like a man." Where autistic and neurodivergent minds are given the space and quiet they need to produce brilliant results without the exhaustion of masking.
        </p>
        <div className="pt-8 mt-8 border-t border-[#1C6E73]">
          <p className="text-2xl text-[#F06A8B] font-bold">
            Diversity is not a checkbox. It is a competitive advantage.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SymbolSection = () => (
  <section className="py-24 bg-[#1C6E73] text-white overflow-hidden" id="community">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Why the Octopus?</h2>
          <div className="w-20 h-1 bg-[#9ED9CC] rounded-full mb-8"></div>
          <div className="space-y-6 text-lg leading-relaxed text-[#F4E9DA]">
            <p>
              Octopuses are among the most intelligent creatures on Earth. They adapt quickly and think in ways that are radically different from most animals.
            </p>
            <p>
              An octopus has about 500 million neurons, but most of them are not in the brain. They are in the arms. Each arm can independently explore and solve problems. It's distributed intelligence—eight semi-independent minds cooperating.
            </p>
            <p className="font-semibold text-white">
              Nature has been experimenting with diversity for hundreds of millions of years. The tech industry is only just catching up.
            </p>
            <p>
              Pink Octopus represents that same philosophy. Adapt. Think differently. Evolve intelligence.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-[#0F2A3D] p-12 rounded-full shadow-2xl relative group">
             <div className="absolute inset-0 border-4 border-[#F06A8B] rounded-full scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
             <OctopusIcon className="w-48 h-48 text-[#9ED9CC]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WaitlistCTA = () => (
  <section className="py-24 bg-[#F06A8B] relative overflow-hidden" id="contact">
    {/* Background abstract shapes for depth */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d85c7a] rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f48eb4] rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <span className="text-[#0F2A3D] font-extrabold tracking-widest uppercase text-sm mb-4 block">We Are Here.</span>
      <h2 className="text-5xl md:text-7xl font-black text-[#F4E9DA] mb-6 leading-tight">
        Building Something <br className="hidden md:block" /> Worth The Wait.
      </h2>
      <p className="text-xl md:text-2xl mb-10 font-medium text-[#0F2A3D] leading-relaxed max-w-3xl mx-auto">
        Great ecosystems take time to cultivate. Release dates are currently pending while we perfect our debut experience. Don't just watch this space—join our inner circle.
      </p>
      
      <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="px-8 py-5 rounded-full border-none bg-[#F4E9DA] text-[#0F2A3D] focus:outline-none focus:ring-4 focus:ring-[#1C6E73]/50 w-full sm:w-auto flex-1 shadow-inner text-lg placeholder-[#0F2A3D]/50 font-medium"
          required
        />
        <button type="submit" className="bg-[#0F2A3D] hover:bg-[#1C6E73] text-[#F4E9DA] px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
          Keep Me Updated
        </button>
      </form>
      <p className="mt-6 text-sm text-[#0F2A3D] font-bold opacity-75">
        No corporate spam. Just meaningful updates on our progress.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0F2A3D] py-12 border-t border-[#1C6E73] text-[#9ED9CC]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-3">
        <OctopusIcon className="w-8 h-8 text-[#F06A8B]" />
        <span className="text-[#F4E9DA] font-bold text-xl">Pink Octopus Inc.</span>
      </div>
      <div className="flex gap-8 text-sm font-medium">
        <a href="#games" className="hover:text-white transition-colors">Games</a>
        <a href="#studio" className="hover:text-white transition-colors">Studio</a>
        <a href="#community" className="hover:text-white transition-colors">Community</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="text-sm">
        © {new Date().getFullYear()} Pink Octopus Inc. Independent by Design.
      </div>
    </div>
  </footer>
);

// Custom Minimalist Octopus Icon SVG
const OctopusIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <path d="M50 15 C30 15, 20 30, 20 45 C20 55, 25 60, 30 65 C40 60, 60 60, 70 65 C75 60, 80 55, 80 45 C80 30, 70 15, 50 15 Z" />
    {/* Eyes */}
    <circle cx="38" cy="45" r="4" fill="#0F2A3D" />
    <circle cx="62" cy="45" r="4" fill="#0F2A3D" />
    {/* Tentacles (8) */}
    <path d="M28 64 C15 80, 5 75, 10 90" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M34 65 C25 85, 20 80, 25 95" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M40 66 C35 88, 30 85, 38 98" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M46 66 C45 90, 42 90, 48 100" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M54 66 C55 90, 58 90, 52 100" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M60 66 C65 88, 70 85, 62 98" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M66 65 C75 85, 80 80, 75 95" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M72 64 C85 80, 95 75, 90 90" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#F06A8B] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturedGame />
        <Philosophy />
        <SymbolSection />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
}