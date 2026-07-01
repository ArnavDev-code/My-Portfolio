export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#060a15] border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-black mb-1">
              <span className="text-white">Arnav</span>
              <span className="text-cyan-400">.</span>
            </div>
            <p className="text-slate-500 text-sm">Data & Business Analytics</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://linkedin.com/in/arnavnigam", label: "LinkedIn" },
              { href: "https://github.com/ArnavDev-code", label: "GitHub" },
              { href: "mailto:arnavnigamknp@gmail.com", label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Arnav Nigam.
          </p>
        </div>
      </div>
    </footer>
  );
}
