import { useState, useEffect } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import {
  Mail,
  FileText,
  ExternalLink,
  Code2,
  BrainCircuit,
  Database,
  BarChart3,
  Wrench,
  GraduationCap,
  Award,
  Briefcase,
  ChevronUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Menu,
  X
} from "lucide-react";

// Inline Custom SVG Icons for GitHub and LinkedIn
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

function App() {
  const [showButton, setShowButton] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Live Animated Background Canvas & Glow Orbs */}
      <AnimatedBackground />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                FA
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-emerald-400 transition-colors">
              Faizan Ali<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Faizu786786"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-300 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-300 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-slate-800">
              <a
                href="https://github.com/Faizu786786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-float">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Internships & AI / Full-Stack Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent glow-text">
                Faizan Ali Ansari
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed font-normal">
              Computer Science Engineering student specializing in{" "}
              <span className="text-cyan-300 font-medium">Data Science</span>,{" "}
              <span className="text-emerald-300 font-medium">Machine Learning</span>,{" "}
              <span className="text-blue-300 font-medium">Full Stack Development</span>, and AI-powered Business Intelligence solutions.
            </p>

            {/* Hero Quick Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-12">
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">7.22</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">CGPA (B.Tech CSE)</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">4+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Core AI Projects</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">5+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Certifications</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">2027</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Expected Grad</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/Faizan2.0.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-card hover:bg-slate-800/80 text-cyan-300 hover:text-cyan-200 border-cyan-500/30 hover:border-cyan-400 font-medium px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/Faizu786786"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-card hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get To Know Me</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4">Engineering Student</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I am a Computer Science Engineering student at <span className="text-cyan-300 font-medium">Graphic Era Hill University</span> with a strong foundation in software development, problem-solving, and modern web technologies.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-cyan-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> B.Tech CSE (2023 - 2027)
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4">AI & Data Driven Focus</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    My technical passion lies at the intersection of Full Stack Development, Artificial Intelligence, and Data Analytics. I have built systems ranging from an <span className="text-emerald-300 font-medium">Enterprise Financial Copilot</span> to real-time facial recognition systems.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Machine Learning & Full-Stack
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4">Career Goal</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I continuously strengthen my capabilities in React, backend architecture, cloud services, and AI frameworks following clean code standards. Seeking opportunities to contribute to impactful software engineering projects.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-purple-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Ready for High-Impact Roles
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Journey</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                Education
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:via-emerald-500/30 before:to-transparent">
              
              {/* Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-500 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 rounded-2xl border-slate-800 group-hover:border-cyan-500/50 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-md bg-cyan-950/80 text-cyan-400 text-xs font-semibold mb-2">
                    Aug 2023 – June 2027 (Expected)
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">B.Tech in Computer Science & Engineering</h3>
                  <p className="text-cyan-400 text-sm font-medium mt-1">Graphic Era Hill University, Bhimtal</p>
                  <p className="text-slate-300 text-sm mt-3 font-semibold text-emerald-400">CGPA: 7.22</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-2 border-emerald-500 text-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <Award className="w-6 h-6" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 rounded-2xl border-slate-800 group-hover:border-emerald-500/50 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-md bg-emerald-950/80 text-emerald-400 text-xs font-semibold mb-2">
                    2020 – 2022
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">Intermediate (Class 12th)</h3>
                  <p className="text-emerald-400 text-sm font-medium mt-1">Naini Valley School, Kathgodam</p>
                  <p className="text-slate-300 text-sm mt-3 font-semibold text-emerald-400">Score: 71.0%</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-2 border-purple-500 text-purple-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Award className="w-6 h-6" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 rounded-2xl border-slate-800 group-hover:border-purple-500/50 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-md bg-purple-950/80 text-purple-400 text-xs font-semibold mb-2">
                    2018 – 2020
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">High School (Class 10th)</h3>
                  <p className="text-purple-400 text-sm font-medium mt-1">Naini Valley School, Kathgodam</p>
                  <p className="text-slate-300 text-sm mt-3 font-semibold text-emerald-400">Score: 85.17%</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Code2 className="w-3.5 h-3.5" />
                <span>Capabilities</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                Technical Skills
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Programming */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">Programming</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Java", "C", "C++", "Python", "SQL"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Dev */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">Web Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Flask"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "MongoDB", "SQLite"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Analytics */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-amber-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">Data Analytics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "Advanced Excel", "Tableau", "Matplotlib", "Pandas", "Plotly"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ML & AI */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-rose-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">ML & AI</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "Scikit-learn", "OpenCV", "NLP", "Streamlit"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code", "PyCharm", "Jupyter", "Anaconda"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Featured Work</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Project 1 */}
              <div className="group glass-card rounded-2xl border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden relative aspect-video border-b border-slate-800/80">
                    <img
                      src="/projects/financial-copilot.png"
                      alt="Enterprise Financial Decision Intelligence Copilot"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
                      Enterprise Financial Decision Intelligence Copilot
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      Built a Palantir-inspired enterprise intelligence platform that combines
                      fraud detection, predictive analytics, KPI monitoring, and interactive
                      business dashboards to support financial decision-making using real-world
                      transaction data.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Python", "Pandas", "Streamlit", "Power BI", "Scikit-Learn", "Plotly"].map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium bg-cyan-950/80 text-cyan-300 rounded-md border border-cyan-800/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="https://github.com/Faizu786786/enterprise-financial-decision-intelligence-copilot.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-medium px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-cyan-950"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group glass-card rounded-2xl border-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden relative aspect-video border-b border-slate-800/80">
                    <img
                      src="/projects/face-recognition-voting.png"
                      alt="Face Recognition Voting System"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-3">
                      Face Recognition Voting System
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      Secure digital voting system using real-time facial verification 
                      with one-person–one-vote validation.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Python", "OpenCV", "SQLite"].map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium bg-emerald-950/80 text-emerald-300 rounded-md border border-emerald-800/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="https://github.com/Farhan0714/Voting-System-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-emerald-950"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group glass-card rounded-2xl border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden relative aspect-video border-b border-slate-800/80">
                    <img
                      src="/projects/voice-assistant.png"
                      alt="AI Voice Assistant"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
                      AI Voice Assistant
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      GUI-based voice assistant with speech recognition, 
                      API integrations, and multithreading support.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Python", "NLP", "Tkinter"].map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium bg-cyan-950/80 text-cyan-300 rounded-md border border-cyan-800/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="https://github.com/Faizu786786/AI-Based-Voice-Assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-cyan-950"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group glass-card rounded-2xl border-slate-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden relative aspect-video border-b border-slate-800/80">
                    <img
                      src="/projects/sorting-visualizer.png"
                      alt="Sorting Visualizer Web App"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors mb-3">
                      Sorting Visualizer Web App
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      Interactive web application to visualize sorting algorithms 
                      in real-time with backend integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Flask", "JavaScript", "HTML5", "CSS3"].map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium bg-purple-950/80 text-purple-300 rounded-md border border-purple-800/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="https://github.com/Faizu786786/SORTING-VISUALIZER-WEBSITE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-purple-950"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Industry Experience</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                Internship Experience
              </h2>
            </div>

            <div className="glass-card p-8 sm:p-10 rounded-2xl border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">Python Developer Intern</h3>
                  <p className="text-cyan-400 font-medium text-sm mt-1">
                    CodSoft IT Services & Consultancy
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold shrink-0">
                  Aug 2025 – Sep 2025
                </span>
              </div>

              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Developed modular Python applications including Password Generator, Contact Manager, and Calculator.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Applied modular programming principles, object-oriented design, and clean coding best practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Strengthened algorithm efficiency, error handling, and software development fundamentals.</span>
                </li>
              </ul>

              <a
                href="/internship-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-cyan-950"
              >
                <Award className="w-4 h-4" />
                <span>View Completion Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Credentials</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                Certifications & Achievements
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Cert 1 */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">Fundamentals of Artificial Intelligence</h3>
                  <p className="text-cyan-400 text-xs font-medium mb-4">NPTEL • 2025</p>
                </div>
                <a
                  href="/nptel-ai.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold py-2 rounded-xl transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cert 2 */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">AWS Cloud Practitioner Essentials</h3>
                  <p className="text-emerald-400 text-xs font-medium mb-4">Amazon Web Services • 2025</p>
                </div>
                <a
                  href="/aws-cloud.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-semibold py-2 rounded-xl transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cert 3 */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">Oracle Certified Foundations Associate</h3>
                  <p className="text-purple-400 text-xs font-medium mb-4">Oracle • 2025</p>
                </div>
                <a
                  href="/oracle-foundations.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-purple-400 text-xs font-semibold py-2 rounded-xl transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cert 4 */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">Building AI-Powered Search with MongoDB Vector Search</h3>
                  <p className="text-cyan-400 text-xs font-medium mb-4">MongoDB Skill • 2026</p>
                </div>
                <a
                  href="/mongodb-vector-search.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold py-2 rounded-xl transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cert 5 */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">Machine Learning using Python</h3>
                  <p className="text-emerald-400 text-xs font-medium">Simplilearn • 2025</p>
                </div>
              </div>

              {/* Cert 6 */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">Python for Beginners</h3>
                  <p className="text-purple-400 text-xs font-medium">Scaler Topics • 2024</p>
                </div>
              </div>

              {/* Cert 7 */}
              <div className="glass-card p-6 rounded-2xl border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-1">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">Software Engineer Internship Offer</h3>
                  <p className="text-amber-400 text-xs font-medium">Springer Capital • 2025</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-300 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              I am open to software engineering internships, AI/Full-Stack collaboration opportunities, and tech discussions. Feel free to connect!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
              <a
                href="https://mail.google.com/mail/?view=cm&to=faizanali260203@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-card hover:bg-slate-800/80 text-cyan-300 border-cyan-500/30 hover:border-cyan-400 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Faizu786786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-card hover:bg-slate-800/80 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-200 font-medium">Faizan Ali Ansari</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/Faizu786786" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="mailto:faizanali260203@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 shadow-lg shadow-cyan-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;