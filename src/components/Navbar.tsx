interface NavbarProps {
  activeSection: string;
  scrollY: number;
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, scrollY }: NavbarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-white">Arnav</span>
          <span className="text-cyan-400">.</span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:arnavnigamknp@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
