import { useState, useEffect } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { InteractiveTerminal } from "./components/InteractiveTerminal";
import { ProjectModal, type ProjectData } from "./components/ProjectModal";
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
  X,
  Maximize2
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

// Featured projects static data array
const projectsData: ProjectData[] = [
  {
    id: "proj-01",
    title: "Enterprise Financial Decision Intelligence Copilot",
    category: "AI & Data Science",
    description: "Palantir-inspired enterprise intelligence platform combining fraud detection, predictive analytics, and KPI dashboards.",
    longDescription: "Architected a Palantir-inspired enterprise intelligence platform that ingests real-world transaction data to execute automated fraud detection, financial KPI monitoring, and predictive modeling for high-level decision makers.",
    image: "/projects/financial-copilot.png",
    techStack: ["Python", "Pandas", "Streamlit", "Power BI", "Scikit-Learn", "Plotly"],
    features: [
      "Real-time fraud anomaly scoring using Random Forest & XGBoost algorithms",
      "Interactive Streamlit & Power BI executive analytics dashboards",
      "Automated financial forecasting with anomaly trend triggers",
      "Modular data pipeline supporting high-throughput transaction datasets"
    ],
    githubUrl: "https://github.com/Faizu786786/enterprise-financial-decision-intelligence-copilot.git"
  },
  {
    id: "proj-02",
    title: "Face Recognition Voting System",
    category: "Computer Vision",
    description: "Secure digital voting system with real-time OpenCV facial biometrics and strict duplicate vote prevention.",
    longDescription: "Designed and implemented a biometric voting architecture using real-time computer vision. Employs face detection and feature vector extraction to ensure accurate identity verification and single-voter integrity.",
    image: "/projects/face-recognition-voting.png",
    techStack: ["Python", "OpenCV", "SQLite", "Scikit-Learn", "Tkinter"],
    features: [
      "Real-time webcam facial detection and biometric feature extraction",
      "Database schema enforcing strictly one-person, one-vote validation",
      "Automated voter profile registration & admin monitoring panel",
      "Lightweight SQLite storage with encrypted voter record hash checks"
    ],
    githubUrl: "https://github.com/Farhan0714/Voting-System-Project"
  },
  {
    id: "proj-03",
    title: "AI Voice Assistant",
    category: "AI & NLP",
    description: "GUI-based intelligent voice assistant featuring multithreaded speech recognition and API task automation.",
    longDescription: "Developed a desktop voice assistant capable of parsing natural language spoken commands, fetching live weather & news updates, executing file system commands, and running system tasks asynchronously.",
    image: "/projects/voice-assistant.png",
    techStack: ["Python", "SpeechRecognition", "PyTtsox3", "NLP", "Tkinter"],
    features: [
      "Asynchronous multithreading to ensure smooth non-blocking UI interactions",
      "API integrations for real-time web searches, news, and weather queries",
      "Custom speech synthesis with customizable pitch and speech rate",
      "Modular command handler architecture for easy action extensions"
    ],
    githubUrl: "https://github.com/Faizu786786/AI-Based-Voice-Assistant"
  },
  {
    id: "proj-04",
    title: "Sorting Visualizer Web App",
    category: "Web Development",
    description: "Interactive web application visualizing classic sorting algorithms in real-time with customizable speed controls.",
    longDescription: "Created an interactive web application designed to help students and developers visualize how classic sorting algorithms (Bubble, Merge, Quick, Insertion) process data step-by-step.",
    image: "/projects/sorting-visualizer.png",
    techStack: ["Flask", "JavaScript", "HTML5", "CSS3", "Python"],
    features: [
      "Step-by-step visual animation with customizable array sizes and speeds",
      "Comparative metrics showing operations count and time complexity",
      "Flask backend integration with clean REST API routes",
      "Responsive glassmorphism UI with color-coded comparison steps"
    ],
    githubUrl: "https://github.com/Faizu786786/SORTING-VISUALIZER-WEBSITE"
  }
];

export function App() {
  const [showButton, setShowButton] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

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
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "web", label: "Web & Frameworks" },
    { id: "ai", label: "ML & AI" },
    { id: "data", label: "Databases & Analytics" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  const skillsList = [
    { name: "Python", category: "languages", level: "Advanced", icon: Code2, color: "text-cyan-400" },
    { name: "Java", category: "languages", level: "Proficient", icon: Code2, color: "text-cyan-400" },
    { name: "C / C++", category: "languages", level: "Proficient", icon: Code2, color: "text-cyan-400" },
    { name: "SQL", category: "languages", level: "Advanced", icon: Database, color: "text-cyan-400" },

    { name: "React", category: "web", level: "Proficient", icon: Globe, color: "text-emerald-400" },
    { name: "JavaScript (ES6+)", category: "web", level: "Advanced", icon: Globe, color: "text-emerald-400" },
    { name: "HTML5 & CSS3", category: "web", level: "Advanced", icon: Globe, color: "text-emerald-400" },
    { name: "Tailwind CSS", category: "web", level: "Advanced", icon: Globe, color: "text-emerald-400" },
    { name: "Flask", category: "web", level: "Proficient", icon: Globe, color: "text-emerald-400" },

    { name: "TensorFlow", category: "ai", level: "Exploring", icon: BrainCircuit, color: "text-purple-400" },
    { name: "Scikit-Learn", category: "ai", level: "Advanced", icon: BrainCircuit, color: "text-purple-400" },
    { name: "OpenCV", category: "ai", level: "Proficient", icon: BrainCircuit, color: "text-purple-400" },
    { name: "NLP", category: "ai", level: "Proficient", icon: BrainCircuit, color: "text-purple-400" },
    { name: "Streamlit", category: "ai", level: "Advanced", icon: BrainCircuit, color: "text-purple-400" },

    { name: "Power BI", category: "data", level: "Advanced", icon: BarChart3, color: "text-amber-400" },
    { name: "Pandas & NumPy", category: "data", level: "Advanced", icon: BarChart3, color: "text-amber-400" },
    { name: "Tableau", category: "data", level: "Proficient", icon: BarChart3, color: "text-amber-400" },
    { name: "MySQL & MongoDB", category: "data", level: "Advanced", icon: Database, color: "text-amber-400" },
    { name: "Plotly & Matplotlib", category: "data", level: "Advanced", icon: BarChart3, color: "text-amber-400" },

    { name: "Git & GitHub", category: "tools", level: "Advanced", icon: Wrench, color: "text-rose-400" },
    { name: "VS Code & PyCharm", category: "tools", level: "Advanced", icon: Wrench, color: "text-rose-400" },
    { name: "Jupyter & Anaconda", category: "tools", level: "Advanced", icon: Wrench, color: "text-rose-400" },
    { name: "Vector Search", category: "tools", level: "Proficient", icon: Wrench, color: "text-rose-400" },
  ];

  const filteredSkills = activeSkillCategory === "all"
    ? skillsList
    : skillsList.filter((s) => s.category === activeSkillCategory);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Live Animated Canvas & Radial Glow Background */}
      <AnimatedBackground />

      {/* Floating Glass Island Navbar */}
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-6xl bento-card px-6 py-3 bg-[#0d1527]/85 backdrop-blur-2xl border border-slate-800/90 shadow-2xl flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-emerald-400 to-purple-500 p-[2px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0b1326] rounded-[10px] flex items-center justify-center font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
                FA
              </div>
            </div>
            <span className="text-base font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-emerald-400 transition-colors font-display">
              Faizan Ali<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors py-1 relative group font-sans"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Social Links & Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/Faizu786786"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-300 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-300 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="/Faizan2.0.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 lg:hidden bento-card p-6 bg-[#0d1527]/95 backdrop-blur-2xl border border-slate-800 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium text-sm transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-3 pt-4 border-t border-slate-800/80">
            <a
              href="https://github.com/Faizu786786"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="/Faizan2.0.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="relative z-10 pt-28 pb-20">
        
        {/* HERO SECTION (Bento Box Grid + Interactive CLI) */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Column (Intro & Stats) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Availability Badge & Profile Header */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-float">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for Internships & AI / Full-Stack Roles</span>
                </div>
              </div>

              {/* Headline & Avatar Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Cyber-Bento Avatar Container */}
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-400/50 bg-[#0d1527] shadow-xl">
                    <img
                      src="/faizan-profile.jpg"
                      alt="Faizan Ali Ansari"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-1.5 left-1.5 right-1.5 px-1.5 py-0.5 rounded bg-slate-950/85 backdrop-blur-md text-[10px] font-mono text-cyan-300 text-center font-semibold border border-cyan-500/30 truncate">
                      Faizan Ali
                    </span>
                  </div>
                </div>

                {/* Main Headline */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none font-display">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent glow-text">
                      Faizan Ali Ansari
                    </span>
                  </h1>
                  <p className="text-slate-300 text-base sm:text-lg font-medium font-sans">
                    Computer Science Engineer & Data Science Student
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Passionate developer specializing in <span className="text-cyan-300 font-semibold font-mono">Data Science</span>,{" "}
                <span className="text-emerald-300 font-semibold font-mono">Machine Learning</span>, and{" "}
                <span className="text-purple-300 font-semibold font-mono">Full-Stack Development</span>. Architecting enterprise financial intelligence copilots, biometric vision systems, and automated AI solutions.
              </p>

              {/* Hero Stats Bento Grid Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bento-card p-3.5 text-center border-slate-800">
                  <div className="text-2xl font-bold font-mono text-cyan-400">7.37</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">CGPA (B.Tech CSE)</div>
                </div>
                <div className="bento-card p-3.5 text-center border-slate-800">
                  <div className="text-2xl font-bold font-mono text-emerald-400">4+</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Core AI Projects</div>
                </div>
                <div className="bento-card p-3.5 text-center border-slate-800">
                  <div className="text-2xl font-bold font-mono text-purple-400">5+</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Certifications</div>
                </div>
                <div className="bento-card p-3.5 text-center border-slate-800">
                  <div className="text-2xl font-bold font-mono text-amber-400">2027</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Graduation</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 text-sm"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/Faizan2.0.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bento-card hover:bg-slate-800/80 text-cyan-300 border-cyan-500/30 font-medium px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </div>

            </div>

            {/* Hero Right Column (Interactive Developer Terminal) */}
            <div className="lg:col-span-5">
              <InteractiveTerminal />
            </div>

          </div>
        </section>

        {/* ABOUT ME SECTION (Bento Modular Grid) */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modular Bio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent font-display">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Bento Portrait Feature Tile */}
            <div className="md:col-span-4 bento-card p-6 flex flex-col items-center text-center justify-between group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-full relative">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl mb-4">
                  <img
                    src="/faizan-profile.jpg"
                    alt="Faizan Ali Ansari Professional Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-cyan-300 font-mono text-[10px] border border-cyan-500/40">
                      B.Tech CSE '27
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-emerald-400 font-mono text-[10px] border border-emerald-500/40">
                      CGPA 7.37
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 font-display">Faizan Ali Ansari</h3>
                <p className="text-cyan-400 text-xs font-mono mt-1">Software Engineer & Data Scientist</p>
              </div>

              <div className="w-full pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Graphic Era Hill University
              </div>
            </div>

            {/* Right Column: 3 Sub-Tiles */}
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              
              {/* Bento Tile 1 */}
              <div className="bento-card p-6 flex flex-col justify-between group sm:col-span-2">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 font-display">Engineering Foundation</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Pursuing B.Tech in Computer Science & Engineering at <span className="text-cyan-300 font-semibold font-mono">Graphic Era Hill University</span>. Focused on algorithmic problem solving, software design patterns, and enterprise full-stack development.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> B.Tech CSE (2023 – 2027)
                </div>
              </div>

              {/* Bento Tile 2 */}
              <div className="bento-card p-6 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2 font-display">AI & ML Focus</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Building intelligent platforms like an <span className="text-emerald-300 font-semibold font-mono">Enterprise Financial Copilot</span> and computer vision biometrics.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Data Science & Vision
                </div>
              </div>

              {/* Bento Tile 3 */}
              <div className="bento-card p-6 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2 font-display">Industry Ready</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Python Developer intern at <span className="text-purple-300 font-semibold font-mono">CodSoft</span> with AWS, Oracle, NPTEL, and MongoDB credentials.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-purple-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Cloud & Code Certified
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION (Categorized Bento Grid Filter) */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent font-display">
              Skills Matrix
            </h2>
          </div>

          {/* Filter Pills Header */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSkillCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeSkillCategory === cat.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "bento-card text-slate-400 hover:text-slate-100 border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skill Bento Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={idx}
                  className="bento-card p-4 flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className={`w-4 h-4 ${skill.color}`} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                      {skill.level}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors font-display">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent font-display">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((proj) => (
              <div
                key={proj.id}
                className="bento-card overflow-hidden flex flex-col justify-between group border-slate-800 hover:border-cyan-500/50 transition-all duration-500"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video overflow-hidden border-b border-slate-800/80">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-70"></div>
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-cyan-400 text-[10px] font-mono font-semibold border border-slate-800">
                      {proj.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors font-display mb-2.5">
                      {proj.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {proj.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-800/40">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Architecture Details</span>
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-mono font-medium transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent font-display">
              Work Internship
            </h2>
          </div>

          <div className="bento-card p-8 border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-display">Python Developer Intern</h3>
                <p className="text-cyan-400 font-mono text-xs sm:text-sm mt-1">
                  CodSoft IT Services & Consultancy
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-mono shrink-0">
                Aug 2025 – Sep 2025
              </span>
            </div>

            <ul className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Engineered modular Python software tools including Password Generator, Contact Manager CLI, and Calculator.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Applied object-oriented programming (OOP) principles, exception handling, and code optimization standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Enhanced efficiency and data structure handling across multiple core Python scripts.</span>
              </li>
            </ul>

            <a
              href="/internship-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-medium text-xs font-mono transition-all duration-300"
            >
              <Award className="w-4 h-4" />
              <span>View Internship Certificate</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* EDUCATION SECTION (Cyber Timeline) */}
        <section id="education" className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent font-display">
              Education
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:via-emerald-500/30 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1326] border-2 border-cyan-400 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bento-card p-6 border-slate-800 group-hover:border-cyan-500/50 transition-all duration-300">
                <span className="inline-block px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-400 text-[11px] font-mono font-semibold mb-2 border border-cyan-800/40">
                  Aug 2023 – June 2027 (Expected)
                </span>
                <h3 className="text-lg font-bold text-slate-100 font-display">B.Tech in Computer Science & Engineering</h3>
                <p className="text-cyan-400 text-xs font-mono mt-1">Graphic Era Hill University, Bhimtal</p>
                <p className="text-emerald-400 text-xs font-mono font-semibold mt-3">CGPA: 7.37</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1326] border-2 border-emerald-400 text-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <Award className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bento-card p-6 border-slate-800 group-hover:border-emerald-500/50 transition-all duration-300">
                <span className="inline-block px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 text-[11px] font-mono font-semibold mb-2 border border-emerald-800/40">
                  2020 – 2022
                </span>
                <h3 className="text-lg font-bold text-slate-100 font-display">Intermediate (Class 12th)</h3>
                <p className="text-emerald-400 text-xs font-mono mt-1">Naini Valley School, Kathgodam</p>
                <p className="text-emerald-400 text-xs font-mono font-semibold mt-3">Percentage: 71.0%</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1326] border-2 border-purple-400 text-purple-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Award className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bento-card p-6 border-slate-800 group-hover:border-purple-500/50 transition-all duration-300">
                <span className="inline-block px-2.5 py-1 rounded bg-purple-950/80 text-purple-400 text-[11px] font-mono font-semibold mb-2 border border-purple-800/40">
                  2018 – 2020
                </span>
                <h3 className="text-lg font-bold text-slate-100 font-display">High School (Class 10th)</h3>
                <p className="text-purple-400 text-xs font-mono mt-1">Naini Valley School, Kathgodam</p>
                <p className="text-emerald-400 text-xs font-mono font-semibold mt-3">Percentage: 85.17%</p>
              </div>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS & ACHIEVEMENTS SECTION (Bento Cards) */}
        <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent font-display">
              Certifications & Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Cert 1 */}
            <div className="bento-card p-6 flex flex-col justify-between border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              <div>
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-1 font-display">Fundamentals of Artificial Intelligence</h3>
                <p className="text-cyan-400 text-[11px] font-mono mb-4">NPTEL • 2025</p>
              </div>
              <a
                href="/nptel-ai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-cyan-400 text-xs font-mono py-2 rounded-xl transition-colors"
              >
                <span>View Certificate PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Cert 2 */}
            <div className="bento-card p-6 flex flex-col justify-between border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-1 font-display">AWS Cloud Practitioner Essentials</h3>
                <p className="text-emerald-400 text-[11px] font-mono mb-4">Amazon Web Services • 2025</p>
              </div>
              <a
                href="/aws-cloud.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-emerald-400 text-xs font-mono py-2 rounded-xl transition-colors"
              >
                <span>View Certificate PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Cert 3 */}
            <div className="bento-card p-6 flex flex-col justify-between border-slate-800 hover:border-purple-500/40 transition-all duration-300">
              <div>
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-1 font-display">Oracle Certified Foundations Associate</h3>
                <p className="text-purple-400 text-[11px] font-mono mb-4">Oracle • 2025</p>
              </div>
              <a
                href="/oracle-foundations.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-purple-400 text-xs font-mono py-2 rounded-xl transition-colors"
              >
                <span>View Certificate PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Cert 4 */}
            <div className="bento-card p-6 flex flex-col justify-between border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              <div>
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-1 font-display">Building AI-Powered Search with MongoDB Vector Search</h3>
                <p className="text-cyan-400 text-[11px] font-mono mb-4">MongoDB Skill • 2026</p>
              </div>
              <a
                href="/mongodb-vector-search.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-cyan-400 text-xs font-mono py-2 rounded-xl transition-colors"
              >
                <span>View Certificate PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Cert 5 */}
            <div className="bento-card p-6 flex flex-col justify-between border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-1 font-display">Machine Learning using Python</h3>
                <p className="text-emerald-400 text-[11px] font-mono mb-4">Simplilearn • 2025</p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 text-center font-mono text-xs border border-slate-800">
                Verified Credential
              </div>
            </div>

            {/* Cert 6 */}
            <div className="bento-card p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/40 transition-all duration-300">
              <div>
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-1 font-display">Software Engineer Internship Offer</h3>
                <p className="text-amber-400 text-[11px] font-mono mb-4">Springer Capital • 2025</p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-amber-300 text-center font-mono text-xs border border-slate-800">
                Selected Candidate
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="bento-card p-8 sm:p-12 border-cyan-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-300 bg-clip-text text-transparent font-display mb-4">
              Ready to Collaborate?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans">
              Currently seeking software engineering internships, AI/ML full-stack roles, and technical project collaborations. Reach out directly!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
              <a
                href="https://mail.google.com/mail/?view=cm&to=faizanali260203@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bento-card hover:bg-slate-800/80 text-cyan-300 border-cyan-500/30 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Faizu786786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bento-card hover:bg-slate-800/80 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-[#0b1326]/90 backdrop-blur-md py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-200 font-bold">Faizan Ali Ansari</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/Faizu786786" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="mailto:faizanali260203@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Project Expand Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 shadow-lg shadow-cyan-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;