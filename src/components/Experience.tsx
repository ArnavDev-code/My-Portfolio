const bullets = [
  "Performed end-to-end <strong>data cleaning and preprocessing</strong> on <strong>6 datasets</strong>, resolving inconsistencies; conducted EDA using descriptive statistics and distribution plots to surface <strong>5+ actionable patterns</strong> in data quality and structure.",
  "Built <strong>4+ interactive marketing dashboards</strong> in <strong>Google Looker Studio</strong> and <strong>Power BI</strong>, tracking <strong>10+ KPIs</strong> and reducing manual reporting time by <strong>40%</strong>.",
  "Wrote <strong>15+ optimised PostgreSQL</strong> queries to extract and transform data, delivering actionable insights across <strong>3 business functions</strong> including lead quality, channel performance, and conversion behaviour.",
  "Engineered and executed <strong>ETL pipelines</strong> processing <strong>6+ datasets</strong> to prepare clean, structured data for <strong>ML model training</strong>, reducing data preparation time by <strong>30%</strong>.",
  "Collaborated with <strong>2 cross-functional stakeholders</strong> to translate business requirements into dashboards, shifting focus from vanity metrics to <strong>5 actionable KPIs</strong>.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Work History</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

          {/* Experience card */}
          <div className="relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-cyan-500 border-4 border-[#0a0f1e] shadow-lg shadow-cyan-500/50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Card */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 group">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Business Analyst Intern
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-cyan-400 font-semibold text-lg">Laneway</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-sm">Remote / India</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium rounded-full">
                    March 2026 – Present
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <p
                      className="text-slate-400 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: bullet.replace(/<strong>/g, '<strong class="text-white font-semibold">') }}
                    />
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                {["Python", "PostgreSQL", "Power BI", "Google Looker Studio", "ETL", "EDA", "KPI Reporting"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-cyan-400/5 border border-cyan-400/15 text-cyan-400/80 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education below */}
          <div className="mt-10 relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-violet-500 border-4 border-[#0a0f1e] shadow-lg shadow-violet-500/50" />

            <div className="bg-white/3 border border-white/8 rounded-2xl p-6 md:p-8 hover:border-violet-500/30 transition-all duration-300 group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    B.Tech – Computer Science
                  </h3>
                  <p className="text-violet-400 font-semibold text-sm mt-0.5">
                    Specialization in Cyber Security & Digital Forensics
                  </p>
                  <p className="text-slate-400 text-sm mt-0.5">VIT Bhopal University</p>
                </div>
                <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium rounded-full">
                  2023 – 2027
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 relative pl-20">
            <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-slate-600 border-4 border-[#0a0f1e]" />
            <div className="bg-white/2 border border-white/5 rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Class XII – Senior Secondary</h3>
                  <p className="text-slate-400 text-sm mt-0.5">Shree Sanatan Dharm Education Center</p>
                </div>
                <span className="px-3 py-1.5 bg-slate-500/10 border border-slate-500/30 text-slate-400 text-sm font-medium rounded-full">
                  2022 – 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
