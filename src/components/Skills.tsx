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
    <section id="skills" className="py-24 px-6 relative bg-[#080d1a]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Work With</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Tech <span className="text-cyan-400">Skills</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.category}
                className={`relative p-6 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm group hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${c.bg} blur-xl -z-10`} />

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className={`font-bold text-lg ${c.text}`}>{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${c.badge} ${c.badgeText}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Core Proficiencies</h3>
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
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300 font-medium">{item.name}</span>
                    <span className="text-cyan-400 font-semibold">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Soft Skills & Domain</h3>
            <div className="space-y-4">
              {[
                { name: "Business Communication", pct: 90 },
                { name: "Data Storytelling", pct: 85 },
                { name: "Experimentation Analysis", pct: 78 },
                { name: "Dashboard Development", pct: 88 },
                { name: "Cross-functional Collaboration", pct: 82 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300 font-medium">{item.name}</span>
                    <span className="text-violet-400 font-semibold">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${item.pct}%` }}
                    />
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
