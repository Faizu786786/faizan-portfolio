import { useState, useEffect } from "react";
function App() {
  const [showButton, setShowButton] = useState(false);

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

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-500">Faizan Ali Ansari.</h1>

          <ul className="flex gap-8 text-gray-300">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#education" className="hover:text-blue-500">Education</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
            <li><a href="#certifications" className="hover:text-blue-500">Certifications</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-4 pt-24">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-500">Faizan</span>
        </h1>

       <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
  Passionate Full Stack Developer focused on building scalable web applications,
  intelligent systems, and clean user-centric digital experiences.
</p>

        <div className="flex gap-4">
        <a 
  href="#projects"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
>
  View Projects
</a>

          <a 
  href="/Faizan_Ali_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition"
>
  Download Resume
</a>
        </div>

      </section>

         {/* About Section */}
<section id="about" className="min-h-screen flex items-center px-6 bg-gray-950 py-20">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-blue-500">About Me</h2>

    <p className="text-gray-300 text-lg leading-relaxed mb-6">
      I am a Computer Science Engineering student at Graphic Era Hill University 
      with a strong foundation in software development, problem-solving, and 
      modern web technologies. I am passionate about building scalable web 
      applications, intelligent systems, and user-centric digital solutions.
    </p>

    <p className="text-gray-300 leading-relaxed mb-6">
      My technical interests span across Full Stack Development, Artificial 
      Intelligence, and Data-Driven Systems. I have developed projects such as 
      a Face Recognition Voting System, an AI-based Voice Assistant, and an 
      interactive Sorting Visualizer Web Application — focusing on clean 
      architecture, real-time processing, and responsive UI design.
    </p>

    <p className="text-gray-300 leading-relaxed">
      I continuously work on strengthening my skills in React, backend 
      development, databases, and AI frameworks while following best practices 
      in writing clean, maintainable, and efficient code. I am currently seeking 
      opportunities where I can contribute to impactful projects, collaborate 
      with experienced teams, and grow as a professional software engineer.
    </p>
  </div>
</section>


      {/* Education Section */}
<section id="education" className="min-h-screen bg-black py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
      Education
    </h2>

    <div className="space-y-10">

      {/* College */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
        <h3 className="text-xl font-semibold">
          B.Tech in Computer Science & Engineering
        </h3>
        <p className="text-blue-400 mt-1">
          Graphic Era Hill University, Bhimtal
        </p>
        <p className="text-gray-400 mt-2">
          Aug 2023 – June 2027 (Expected) • CGPA: 7.06
        </p>
      </div>

      {/* 12th */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
        <h3 className="text-xl font-semibold">
          Intermediate (Class 12th)
        </h3>
        <p className="text-blue-400 mt-1">
          Naini Valley School, Kathgodam
        </p>
        <p className="text-gray-400 mt-2">
          2020 – 2022 • 71.0%
        </p>
      </div>

      {/* 10th */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
        <h3 className="text-xl font-semibold">
          High School (Class 10th)
        </h3>
        <p className="text-blue-400 mt-1">
          Naini Valley School, Kathgodam
        </p>
        <p className="text-gray-400 mt-2">
          2018 – 2020 • 85.17%
        </p>
      </div>

    </div>
  </div>
</section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Programming */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-white">Programming</h3>
              <p className="text-gray-400">Java, C, C++, Python, SQL</p>
            </div>

            {/* Web Development */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-white">Web Development</h3>
              <p className="text-gray-400">HTML, CSS, JavaScript, React</p>
            </div>

            {/* Databases */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-white">Databases</h3>
              <p className="text-gray-400">MySQL, MongoDB</p>
            </div>

            {/* Data Analytics */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-white">Data Analytics</h3>
              <p className="text-gray-400">Power BI, Advanced Excel, Tableau, Matplotlib</p>
            </div>

            {/* ML & AI */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-white">ML & AI</h3>
              <p className="text-gray-400">TensorFlow, Scikit-learn, OpenCV</p>
            </div>

            {/* Tools */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-white">Tools & Platforms</h3>
              <p className="text-gray-400">Git, GitHub, VS Code, PyCharm, Jupyter, Anaconda</p>
            </div>

          </div>
        </div>
      </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Project 1 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3">Face Recognition Voting System</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Secure digital voting system using real-time facial verification 
                  with one-person–one-vote validation.
                </p>
                <p className="text-blue-400 text-sm mb-4">
                  Python • OpenCV • SQLite
                </p>
              </div>
              <a 
                href="https://github.com/Farhan0714/Voting-System-Project" 
                target="_blank"
                className="mt-4 inline-block text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3">AI Voice Assistant</h3>
                <p className="text-gray-400 text-sm mb-4">
                  GUI-based voice assistant with speech recognition, 
                  API integrations, and multithreading support.
                </p>
                <p className="text-blue-400 text-sm mb-4">
                  Python • NLP • Tkinter
                </p>
              </div>
              <a 
                href="https://github.com/Faizu786786/AI-Based-Voice-Assistant" 
                target="_blank"
                className="mt-4 inline-block text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3">Sorting Visualizer Web App</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Interactive web application to visualize sorting algorithms 
                  in real-time with backend integration.
                </p>
                <p className="text-blue-400 text-sm mb-4">
                  Flask • JavaScript • HTML • CSS
                </p>
              </div>
              <a 
                href="https://github.com/Faizu786786/SORTING-VISUALIZER-WEBSITE" 
                target="_blank"
                className="mt-4 inline-block text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                View on GitHub
              </a>
            </div>

          </div>
        </div>
      </section>

            {/* Internship Section */}
            <section id="experience" className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
            Internship Experience
          </h2>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300">
            
            <h3 className="text-2xl font-semibold mb-2">
            Python Developer Intern – CodSoft
            </h3>

            <p className="text-blue-400 mb-4">
              CodSoft IT Services & Consultancy • Aug 2025 – Sep 2025
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                Developed Python applications including Password Generator,
                Contact Manager, and Calculator.
              </li>
              <li>
                Applied modular programming principles and clean coding practices.
              </li>
              <li>
                Strengthened problem-solving and software development fundamentals.
              </li>
            </ul>
            <a 
  href="/internship-certificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-5 py-2 rounded-lg transition"
>
  View Completion Certificate
</a>

          </div>
        </div>
      </section>

            {/* Certifications Section */}
            <section id="certifications" className="min-h-screen bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
            Certifications & Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300 flex flex-col justify-between">

<div>
  <h3 className="text-lg font-semibold mb-2">
    Fundamentals of Artificial Intelligence
  </h3>
  <p className="text-blue-400 text-sm mb-4">
    NPTEL • 2025
  </p>
</div>

<a 
  href="/nptel-ai.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-4 py-2 rounded-lg transition text-sm"
>
 View Certificate
</a>

</div>

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300 flex flex-col justify-between">

<div>
  <h3 className="text-lg font-semibold mb-2">
    AWS Cloud Practitioner Essentials
  </h3>
  <p className="text-blue-400 text-sm mb-4">
    Amazon Web Services • 2025
  </p>
</div>

<a 
  href="/aws-cloud.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-4 py-2 rounded-lg transition text-sm font-medium"
>
   View Certificate
</a>

</div>

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300 flex flex-col justify-between">

  <div>
    <h3 className="text-lg font-semibold mb-2">
      Oracle Certified Foundations Associate
    </h3>
    <p className="text-blue-400 text-sm mb-4">
      Oracle • 2025
    </p>
  </div>

  <a 
    href="/oracle-foundations.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-4 py-2 rounded-lg transition text-sm font-medium"
  >
    View Certificate
  </a>

</div>

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition hover:scale-[1.02] transform duration-300 flex flex-col justify-between">

  <div>
    <h3 className="text-lg font-semibold mb-2">
      Building AI-Powered Search with MongoDB Vector Search
    </h3>
    <p className="text-blue-400 text-sm mb-4">
      MongoDB Skill • 2026
    </p>
  </div>

  <a 
    href="/mongodb-vector-search.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-4 py-2 rounded-lg transition text-sm font-medium"
  >
    View Certificate
  </a>

</div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold mb-2">
                Machine Learning using Python
              </h3>
              <p className="text-blue-400 text-sm mb-2">
                Simplilearn • 2025
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold mb-2">
                Python for Beginners
              </h3>
              <p className="text-blue-400 text-sm mb-2">
                Scaler Topics • 2024
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold mb-2">
                Software Engineer Internship Offer
              </h3>
              <p className="text-blue-400 text-sm mb-2">
                Springer Capital • 2025
              </p>
            </div>

          </div>
        </div>
      </section>

            {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl font-bold mb-8 text-blue-500">
            Get In Touch
          </h2>

          <p className="text-gray-400 mb-10">
            I’m open to internships, collaboration opportunities, and exciting tech projects.
            Feel free to connect with me.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

          <a 
  href="https://mail.google.com/mail/?view=cm&to=faizanali260203@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
>
  Email Me
</a>

            <a 
              href="https://www.linkedin.com/in/faizan-ali-ansari-b50701353"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition"
            >
              LinkedIn
            </a>

            <a 
              href="https://github.com/Faizu786786"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg transition"
            >
              GitHub
            </a>

          </div>

                {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Faizan Ali. All Rights Reserved.
        </div>
      </footer>

        </div>
      </section>

      {showButton && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
  >
    ↑ Top
  </button>
)}


    </div>

    
  );
}

export default App;