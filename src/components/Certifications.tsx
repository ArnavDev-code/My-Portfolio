const certs = [
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    color: "blue",
    icon: "🟦",
    emoji: "G",
  },
  {
    title: "AWS Technical Essentials",
    issuer: "Amazon Web Services",
    color: "orange",
    icon: "☁️",
    emoji: "AWS",
  },
  {
    title: "Tata – Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Group",
    color: "indigo",
    icon: "📊",
    emoji: "T",
  },
  {
    title: "Deloitte Australia – Data Analytics Job Simulation",
    issuer: "Deloitte",
    color: "green",
    icon: "📉",
    emoji: "D",
  },
  {
    title: "Accenture North America – Data Analytics & Visualization Job Simulation",
    issuer: "Accenture",
    color: "violet",
    icon: "🔷",
    emoji: "A",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; label: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: "bg-blue-500", label: "text-blue-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", icon: "bg-orange-500", label: "text-orange-400" },
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", icon: "bg-indigo-500", label: "text-indigo-400" },
  green: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: "bg-emerald-500", label: "text-emerald-400" },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", icon: "bg-violet-500", label: "text-violet-400" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <div
                key={i}
                className={`relative p-5 rounded-2xl border ${c.border} ${c.bg} hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg`}>
                    {cert.emoji}
                  </div>
                  {/* Info */}
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <p className={`text-xs font-medium mt-1.5 ${c.label}`}>{cert.issuer}</p>
                  </div>
                </div>

                {/* Certificate badge */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 text-emerald-400">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-xs text-emerald-400 font-medium">Verified Certificate</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
