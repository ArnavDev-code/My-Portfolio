export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* BG accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">About <span className="text-cyan-400">Me</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar / Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" />
              {/* Inner circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black bg-gradient-to-br from-cyan-400 to-violet-400 bg-clip-text text-transparent">AN</div>
                  <div className="text-slate-400 text-sm mt-1">Data Analyst</div>
                </div>
              </div>
              {/* 
  Make sure the parent container holding these badges has:
  className="relative aspect-square w-64 max-w-full rounded-full" 
  (Adjust w-64 to your actual desired size)
*/}

              {/* --- INNER ORBIT (Radius: 50%) --- */}
              {/* Top (-90°) */}
              <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-xs font-semibold backdrop-blur-sm">
                NumPy
              </div>

              {/* Top Right (-30°) */}
              <div className="absolute top-[25%] left-[93%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-xs font-semibold backdrop-blur-sm">
                Power BI
              </div>

              {/* Right (0°) */}
              <div className="absolute top-[50%] left-[100%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 text-xs font-semibold backdrop-blur-sm">
                SQL
              </div>

              {/* Bottom Right (60°) */}
              <div className="absolute top-[93%] left-[75%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-400 text-xs font-semibold backdrop-blur-sm">
                Matplotlib
              </div>

              {/* Bottom Left (120°) */}
              <div className="absolute top-[93%] left-[25%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-violet-500/20 border border-violet-500/40 rounded-full text-violet-400 text-xs font-semibold backdrop-blur-sm">
                Pandas
              </div>

              {/* Left (180°) */}
              <div className="absolute top-[50%] left-[0%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-pink-500/20 border border-pink-500/40 rounded-full text-pink-400 text-xs font-semibold backdrop-blur-sm">
                Seaborn
              </div>

              {/* --- OUTER ORBIT (Radius: 80%) --- */}
              {/* Outer Top Left (-135°) */}
              <div className="absolute top-[7%] left-[7%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-teal-500/20 border border-teal-500/40 rounded-full text-teal-400 text-xs font-semibold backdrop-blur-sm">
                Google Sheets
              </div>

              {/* Outer Top Right (-45°) */}
              <div className="absolute top-[1%] left-[85%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 text-xs font-semibold backdrop-blur-sm">
                GA4
              </div>

              {/* Outer Right/Bottom (15°) */}
              <div className="absolute top-[70%] left-[110%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-sky-500/20 border border-sky-500/40 rounded-full text-sky-400 text-xs font-semibold backdrop-blur-sm">
                BigQuery
              </div>

              {/* Outer Bottom Right (75°) */}
              <div className="absolute top-[110%] left-[60%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-xs font-semibold backdrop-blur-sm">
                Excel
              </div>

              {/* Outer Bottom Left (135°) */}
              <div className="absolute top-[80%] left-[-6%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/40 rounded-full text-indigo-400 text-xs font-semibold backdrop-blur-sm">
                Data Studio
              </div>

              {/* Outer Far Left (195°) */}
              <div className="absolute top-[29%] left-[-1%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-xs font-semibold backdrop-blur-sm">
                AWS
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">data-focused Business Analyst</span> with hands-on experience building ETL pipelines, BI dashboards, and ML-ready datasets. I love transforming messy data into clear, actionable insights.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently pursuing <span className="text-white font-medium">B.Tech in Computer Science</span> (Specialization in Cyber Security & Digital Forensics) at VIT Bhopal University (2023–2027), I'm actively working as a Business Analyst Intern at Laneway, where I deliver data-driven solutions using Python, PostgreSQL, and Google Looker Studio.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Location", value: "India (Remote)" },
                { label: "University", value: "VIT Bhopal" },
                { label: "Degree", value: "B.Tech CS" },
                { label: "Graduation", value: "2027" },
                { label: "Phone", value: "+91 9214148478" },
                { label: "Email", value: "arnavnigamknp@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="bg-white/3 border border-white/8 rounded-xl p-3">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</div>
                  <div className="text-white text-sm font-medium mt-0.5 truncate">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/in/arnavnigam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/20 border border-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-blue-300 rounded-lg text-sm font-medium transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/ArnavDev-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-600/20 border border-slate-500/30 hover:border-slate-400 text-slate-400 hover:text-slate-200 rounded-lg text-sm font-medium transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
