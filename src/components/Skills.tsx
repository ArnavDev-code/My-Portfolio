const skillCategories = [
  {
    category: "Languages",
    icon: "💻",
    color: "cyan",
    skills: ["Python (Pandas)", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "blue",
    skills: ["PostgreSQL", "MySQL", "SQL", "Window Functions", "CTEs", "Advanced Joins"],
  },
  {
    category: "Visualization",
    icon: "📊",
    color: "violet",
    skills: ["Power BI", "Google Looker Studio", "Data Studio (Looker Studio)", "Microsoft Excel", "Google Sheets", "Tableau"],
  },
  {
    category: "Techniques",
    icon: "🔬",
    color: "emerald",
    skills: ["EDA", "Cohort Analysis", "A/B Testing", "ETL", "Data Cleaning", "Data Wrangling", "Statistical Analysis", "KPI Reporting", "Trend Analysis"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "orange",
    skills: ["Jupyter Notebook", "Git", "GitHub", "Amazon S3", "pgAdmin", "VS Code"],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; badgeText: string }> = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    badge: "bg-cyan-400/10 border-cyan-400/20",
    badgeText: "text-cyan-300",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    badge: "bg-blue-400/10 border-blue-400/20",
    badgeText: "text-blue-300",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    badge: "bg-violet-400/10 border-violet-400/20",
    badgeText: "text-violet-300",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    badge: "bg-emerald-400/10 border-emerald-400/20",
    badgeText: "text-emerald-300",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    badge: "bg-orange-400/10 border-orange-400/20",
    badgeText: "text-orange-300",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">What I Work With</p>
          <h2 className="text-4xl font-black text-white md:text-5xl">Tech <span className="text-cyan-400">Skills</span></h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.category}
                className={`glass-panel glass-panel-hover relative overflow-hidden rounded-2xl border ${c.border} ${c.bg} p-6`}
              >
                <div className={`absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 ${c.bg}`} />

                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className={`text-lg font-bold ${c.text}`}>{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={`rounded-full border px-3 py-1 text-xs font-medium ${c.badge} ${c.badgeText}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="glass-panel rounded-[24px] p-6 sm:p-7">
            <h3 className="mb-6 text-lg font-bold text-white">Core Proficiencies</h3>
            <div className="space-y-4">
              {[
                { name: "Python & Data Analysis", pct: 88 },
                { name: "SQL & Databases", pct: 92 },
                { name: "Looker Studio / Dashboards", pct: 85 },
                { name: "ETL Pipeline Development", pct: 80 },
                { name: "EDA & Statistical Analysis", pct: 87 },
                { name: "Cohort & Funnel Analysis", pct: 83 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-slate-300">{item.name}</span>
                    <span className="font-semibold text-cyan-400">{item.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[24px] p-6 sm:p-7">
            <h3 className="mb-6 text-lg font-bold text-white">Soft Skills & Domain</h3>
            <div className="space-y-4">
              {[
                { name: "Business Communication", pct: 90 },
                { name: "Data Storytelling", pct: 85 },
                { name: "Experimentation Analysis", pct: 78 },
                { name: "Dashboard Development", pct: 88 },
                { name: "Cross-functional Collaboration", pct: 82 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-slate-300">{item.name}</span>
                    <span className="font-semibold text-violet-400">{item.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-1000" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
