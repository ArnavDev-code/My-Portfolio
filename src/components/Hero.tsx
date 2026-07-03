export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,10,29,0.96),rgba(11,15,25,0.82),rgba(17,24,39,0.94))]" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.2) 1px, transparent 1px)`,
          backgroundSize: "58px 58px",
        }}
      />
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
            Available for Opportunities
          </div>

          <h1 className="text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-white">Arnav </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Nigam</span>
          </h1>

          <div className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl">
            <span className="text-cyan-400">Business Analyst</span> & <span className="text-violet-400">Data Enthusiast</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Data-focused professional skilled in <span className="font-semibold text-white">Python</span>, <span className="font-semibold text-white">SQL</span>, and <span className="font-semibold text-white">BI Tools</span>. I turn complex datasets into clear business decisions through analytics, forecasting, and dashboarding.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3.5 font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-200 hover:scale-[1.03] hover:from-cyan-400 hover:to-blue-400"
            >
              View Projects
            </button>
            <a
              href="/Arnav-Nigam-Resume.pdf"
              download="Arnav-Nigam-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-7 py-3.5 font-semibold text-cyan-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 20h14" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "2M+", label: "Loans Analyzed" },
              { value: "10+", label: "KPIs Tracked" },
              { value: "40%", label: "Time Saved" },
              { value: "82%", label: "Model Accuracy" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4">
                <div className="text-2xl font-black text-cyan-400">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] rounded-[2rem] border border-cyan-400/30 bg-slate-900/70 p-3 shadow-[0_20px_60px_rgba(6,182,212,0.18)]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/20 blur-xl" />
            <img
              src="/arnav-photo.jpeg"
              alt="Arnav Nigam"
              className="relative h-full w-full rounded-[1.5rem] object-cover object-[center_20%]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-600 pt-2">
          <div className="h-2 w-1 rounded-full bg-cyan-400 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
