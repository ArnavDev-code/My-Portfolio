const projects = [
  {
    title: "SME Lending Risk & Portfolio Performance Analytics",
    date: "January 2026",
    color: "cyan",
    icon: "📈",
    tags: ["Python", "Power BI", "SQL", "Risk Analytics", "Cohort Analysis"],
    highlights: [
      { stat: "2M+", label: "Loans Analyzed" },
      { stat: "7", label: "Loan Grades" },
      { stat: "13", label: "Purposes Segmented" },
    ],
    bullets: [
      "Analyzed a portfolio of over <strong>2 million loans</strong>, calculating default rate by filtering to final loan outcomes.",
      "Performed <strong>statistical risk segmentation</strong> across <strong>7 loan grades</strong> and <strong>13 purposes</strong>, identifying high-leverage segments.",
      "Conducted <strong>cohort analysis</strong> on monthly issuance data (2007–2018) and built a <strong>Power BI dashboard</strong> for KPI visualization.",
    ],
  },
  {
    title: "Customer Churn Analysis",
    date: "October 2025",
    color: "violet",
    icon: "🔮",
    tags: ["Python", "Scikit-learn", "K-Means", "Machine Learning", "EDA"],
    highlights: [
      { stat: "82%", label: "Model Accuracy" },
      { stat: "85%", label: "Precision" },
      { stat: "20%", label: "Churn Reduction" },
    ],
    bullets: [
      "Identified top <strong>5 churn predictors</strong> from <strong>45+ attributes</strong> and built a model with <strong>82% accuracy</strong> and <strong>85% precision</strong>.",
      "Applied <strong>K-Means clustering</strong> to segment customers into <strong>4 behavioral groups</strong> for targeted retention analysis.",
      "Projected a <strong>20% potential reduction</strong> in monthly churn through model-driven retention strategies.",
    ],
  },
];

const colorMap: Record<string, { gradient: string; border: string; tag: string; tagText: string; stat: string }> = {
  cyan: {
    gradient: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    tag: "bg-cyan-400/10 border-cyan-400/20",
    tagText: "text-cyan-300",
    stat: "text-cyan-400",
  },
  violet: {
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    tag: "bg-violet-400/10 border-violet-400/20",
    tagText: "text-violet-300",
    stat: "text-violet-400",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-[#080d1a]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const c = colorMap[project.color];
            return (
              <div
                key={project.title}
                className={`relative p-6 md:p-8 rounded-2xl border ${c.border} bg-gradient-to-br ${c.gradient} backdrop-blur-sm group hover:scale-[1.01] transition-all duration-300 overflow-hidden`}
              >
                {/* BG decoration */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/2 blur-2xl group-hover:bg-white/3 transition-all duration-500" />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5 relative">
                  <div>
                    <div className="text-3xl mb-2">{project.icon}</div>
                    <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                    <span className="text-slate-500 text-sm mt-1 block">{project.date}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-5 p-4 bg-black/20 rounded-xl border border-white/5">
                  {project.highlights.map((h) => (
                    <div key={h.label} className="flex-1 text-center">
                      <div className={`text-xl font-black ${c.stat}`}>{h.stat}</div>
                      <div className="text-xs text-slate-500 mt-0.5 font-medium">{h.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5">
                      <div className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${project.color === "cyan" ? "bg-cyan-400" : "bg-violet-400"}`} />
                      <p
                        className="text-slate-400 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: bullet.replace(/<strong>/g, '<strong class="text-white font-semibold">'),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-1 rounded-md text-xs font-medium border ${c.tag} ${c.tagText}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ArnavDev-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/5 text-slate-300 hover:text-white rounded-xl font-medium transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
