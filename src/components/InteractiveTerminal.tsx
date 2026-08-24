import React, { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Sparkles, Trash2 } from "lucide-react";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="text-cyan-400 font-semibold">
            ✦ Welcome to Faizan Ali Ansari's Developer Terminal [v2.5]
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300 font-mono font-bold">help</span> or click quick actions below to run CLI commands.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleRunCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-slate-300 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-cyan-300">
              <div><span className="text-emerald-400">skills</span> - List technical stack</div>
              <div><span className="text-emerald-400">projects</span> - View featured work</div>
              <div><span className="text-emerald-400">education</span> - View degree & CGPA</div>
              <div><span className="text-emerald-400">contact</span> - Get direct email & links</div>
              <div><span className="text-emerald-400">about</span> - Short bio overview</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal log</div>
            </div>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-300 font-semibold">⚡ Technical Skills Stack:</p>
            <div className="flex flex-wrap gap-1.5 font-mono">
              {["Python", "Java", "C++", "React", "JavaScript", "SQL", "Flask", "Streamlit", "TensorFlow", "Scikit-Learn", "OpenCV", "Power BI", "Tailwind CSS"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/50 text-cyan-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-300 font-semibold">🚀 Top Projects Showcase:</p>
            <ul className="space-y-1 text-slate-300 font-mono">
              <li>1. <span className="text-emerald-400 font-bold">Financial Copilot</span> - Enterprise decision intelligence engine</li>
              <li>2. <span className="text-emerald-400 font-bold">Face Voting System</span> - OpenCV real-time facial verification</li>
              <li>3. <span className="text-emerald-400 font-bold">AI Voice Assistant</span> - GUI multithreaded NLP assistant</li>
              <li>4. <span className="text-emerald-400 font-bold">Sorting Visualizer</span> - Real-time algorithm visualizer</li>
            </ul>
          </div>
        );
        break;

      case "education":
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p><span className="text-cyan-400 font-bold">Degree:</span> B.Tech in Computer Science & Engineering</p>
            <p><span className="text-cyan-400 font-bold">University:</span> Graphic Era Hill University (2023 - 2027)</p>
            <p><span className="text-emerald-400 font-bold">CGPA:</span> 7.37 / 10.0</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p><span className="text-cyan-400">Email:</span> faizanali260203@gmail.com</p>
            <p><span className="text-cyan-400">GitHub:</span> github.com/Faizu786786</p>
            <p><span className="text-cyan-400">LinkedIn:</span> linkedin.com/in/faizan-ali-ansari-b50701353</p>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Faizan Ali Ansari is a Computer Science Engineering student specializing in Data Science, Machine Learning, Full-Stack Development, and AI Business Intelligence solutions.
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        outputNode = (
          <p className="text-xs text-rose-400 font-mono">
            Command not recognized: '{cleanCmd}'. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleRunCommand("help")}>help</span> for a list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cleanCmd, output: outputNode }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleRunCommand(inputVal);
    }
  };

  return (
    <div className="w-full bento-card overflow-hidden border border-slate-800 shadow-2xl bg-[#0d1527]/90 backdrop-blur-xl">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            faizan@dev-terminal:~
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory([])}
            className="text-slate-400 hover:text-rose-400 transition-colors p-1"
            title="Clear terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-5 h-64 sm:h-72 overflow-y-auto font-mono text-slate-200 space-y-3 custom-scrollbar text-xs sm:text-sm">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-2 text-cyan-400">
                <span>faizan@portfolio:~$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
            )}
            <div className="pl-2 border-l-2 border-cyan-500/30 py-0.5">
              {item.output}
            </div>
          </div>
        ))}

        {/* Input prompt line */}
        <div className="flex items-center gap-2 text-cyan-400 pt-1">
          <span>faizan@portfolio:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or click buttons below..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600 focus:ring-0"
          />
          <button
            onClick={() => handleRunCommand(inputVal)}
            className="p-1 rounded text-cyan-400 hover:bg-cyan-500/20 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Quick Action Chips Footer */}
      <div className="px-4 py-3 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-500 font-mono flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Quick CLI:
        </span>
        {["help", "skills", "projects", "education", "contact"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRunCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 font-mono text-xs transition-all duration-200"
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
