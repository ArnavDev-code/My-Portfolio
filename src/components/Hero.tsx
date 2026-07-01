export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/60 via-[#0a0f1e]/40 to-[#0a0f1e]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none">
          <span className="text-white">Arnav </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Nigam
          </span>
        </h1>

        {/* Title */}
        <div className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
          <span className="text-cyan-400">Business Analyst</span> &{" "}
          <span className="text-violet-400">Data Enthusiast</span>
        </div>

        {/* Summary */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Data-focused professional skilled in{" "}
          <span className="text-white font-medium">Python</span>,{" "}
          <span className="text-white font-medium">SQL</span>, and{" "}
          <span className="text-white font-medium">BI Tools</span>. Turning raw
          data into actionable business insights through ETL pipelines,
          dashboards & analytics.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 backdrop-blur-sm"
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "2M+", label: "Loans Analyzed" },
            { value: "10+", label: "KPIs Tracked" },
            { value: "40%", label: "Time Saved" },
            { value: "82%", label: "Model Accuracy" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-black text-cyan-400">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scroll-dot" />
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[
          {
            href: "https://linkedin.com/in/arnavnigam",
            label: "LinkedIn",
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
          },
          {
            href: "https://github.com/ArnavDev-code",
            label: "GitHub",
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            ),
          },
          {
            href: "mailto:arnavnigamknp@gmail.com",
            label: "Email",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            ),
          },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-200"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
