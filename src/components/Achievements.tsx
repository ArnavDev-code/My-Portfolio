const achievements = [
  {
    icon: "🏆",
    title: "Winner – VIT Bhopal Datafest 2024",
    color: "gold",
    details:
      "Secured <strong>1st place</strong> out of <strong>25+ teams</strong> in a <strong>6-hour data analytics hackathon</strong>, developing a predictive model that outperformed all others in accuracy and business insight.",
    badges: ["1st Place", "25+ Teams", "6-Hour Hackathon"],
  },
  {
    icon: "🎓",
    title: "Co-Lead – IoS Club, VIT Bhopal",
    color: "blue",
    details:
      "Led planning and execution of technical workshops, activities, and peer-learning initiatives for the student club, fostering a culture of continuous learning and technical growth.",
    badges: ["Leadership", "Technical Workshops", "Community Building"],
  },
];

const colorMap: Record<string, { border: string; bg: string; badge: string; badgeText: string }> = {
  gold: {
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/8",
    badge: "bg-yellow-400/15 border-yellow-400/30",
    badgeText: "text-yellow-300",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/8",
    badge: "bg-blue-400/15 border-blue-400/30",
    badgeText: "text-blue-300",
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative bg-[#080d1a]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Recognition & Activities</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Achievements &{" "}
            <span className="text-cyan-400">Extra-Curricular</span>
          </h2>
        </div>

        <div className="space-y-6">
          {achievements.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <div
                key={i}
                className={`relative p-6 md:p-8 rounded-2xl border ${c.border} ${c.bg} flex flex-col md:flex-row gap-6 hover:scale-[1.01] transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p
                    className="text-slate-400 leading-relaxed mb-4 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: item.details.replace(/<strong>/g, '<strong class="text-white font-semibold">'),
                    }}
                  />
                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${c.badge} ${c.badgeText}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
