import { useState, useEffect, useRef } from 'react';
import { Monitor, Layers, Database, Github, Linkedin, Mail, ExternalLink, ArrowRight, ArrowUp, MapPin, Check } from 'lucide-react';

// ==========================================
// SCROLL REVEAL
// ==========================================
const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
  sr: {
    nav_stack: "/veštine",
    nav_projects: "/projekti",
    nav_services: "/usluge",
    nav_contact: "/kontakt",
    nav_hire: "Hire Me",
    available: "Dostupan za rad",
    available_short: "Dostupan",
    location: "Srbija",
    hero_role: "Full Stack Web Developer",
    hero_desc: "Projektovanje i razvoj brzih, skalabilnih web rešenja za savremene kompanije — od prototipa do produkcije.",
    hero_cta_primary: "Pogledaj projekte",
    hero_cta_secondary: "Zakaži poziv",
    hero_stat_years_label: "god. iskustva",
    hero_stat_proj_label: "projekata",
    stack_label: "Tehnologije",
    stack_title: "Alati kojima gradim",
    stack_subtitle: "Proverene tehnologije za brze, skalabilne i pouzdane web aplikacije.",
    proj_label: "Projekti",
    proj_title: "Odabrani radovi",
    proj_btn_live: "Poseti sajt",
    proj_btn_code: "Kod",
    proj_palic_category: "Web Platforma · Luksuzni Turizam",
    proj_palic_desc: "Kompletna digitalna platforma za luksuzne apartmane pored jezera Palić. Fokus na modernom dizajnu, performansama i automatizaciji rezervacija.",
    proj_palic_r1: "Višejezičan UI bez eksternih i18n biblioteka",
    proj_palic_r2: "Automatizovane rezervacije — direktno na e-mail klijenta",
    proj_palic_r3: "Google Lighthouse skor 95+ na svim metrikama",
    proj_doorgat_category: "E-Commerce · Headless CMS",
    proj_doorgat_desc: "Headless e-commerce rešenje za prodaju industrijskih kapija i video interfona. WordPress + WooCommerce kao API sloj, Next.js frontend.",
    proj_doorgat_r1: "Next.js na Vercel-u, sub-sekundno učitavanje",
    proj_doorgat_r2: "WooCommerce kao headless API — čist separation of concerns",
    proj_doorgat_r3: "SEO rang porastao u roku od 3 meseca od lansiranja",
    proj_ves_category: "Landing Page · Lokalni Biznis",
    proj_ves_desc: "Moderna prezentaciona stranica za agenciju za registraciju vozila i tehnički pregled. Prioritet: brzina, jasnoća i konverzija poseta u pozive.",
    proj_ves_r1: "Učitavanje ispod 1s na mobilnim uređajima",
    proj_ves_r2: "CTA arhitektura povećala broj poziva za ~40%",
    proj_ves_r3: "Elementor + custom CSS, klijent sam ažurira sadržaj",
    srv_label: "Usluge",
    srv_title: "Kako mogu da pomognem",
    srv_sub: "Pružam end-to-end usluge web razvoja — od UX ideje do finalnog deploja.",
    srv_web_title: "Front-end Arhitektura",
    srv_web_desc: "Izrada ultrabrze Single Page aplikacije u React-u ili Next.js-u, optimizovane za performanse i konverziju.",
    srv_design_title: "UI/UX Dizajn Sistemi",
    srv_design_desc: "Dizajn elegantnih, konzistentnih interfejsa koji izgledaju savršeno na svim uređajima i rezolucijama.",
    srv_backend_title: "API & Backend Integracije",
    srv_backend_desc: "Spajanje vaše aplikacije sa bazama podataka, platežnim sistemima i eksternim API-jevima za potpunu automatizaciju.",
    contact_label: "Kontakt",
    contact_title: "Hajde da razgovaramo",
    contact_desc: "Otvoren sam za nove projekte i freelance prilike. Pišite direktno ili zakažite kratki uvodni poziv.",
    contact_email_label: "Ili pišite direktno",
    contact_form_name: "Vaše Ime",
    contact_form_email: "Email Adresa",
    contact_form_msg: "Poruka",
    contact_btn: "Pošalji poruku",
    footer_built: "Dizajnirano i kodirano od nule",
  },
  en: {
    nav_stack: "/stack",
    nav_projects: "/projects",
    nav_services: "/services",
    nav_contact: "/contact",
    nav_hire: "Hire Me",
    available: "Available for work",
    available_short: "Available",
    location: "Serbia",
    hero_role: "Full Stack Web Developer",
    hero_desc: "Designing and building fast, scalable web solutions for modern businesses — from prototype to production.",
    hero_cta_primary: "View Projects",
    hero_cta_secondary: "Book a Call",
    hero_stat_years_label: "yrs experience",
    hero_stat_proj_label: "projects",
    stack_label: "Stack",
    stack_title: "Tools I build with",
    stack_subtitle: "Battle-tested technologies for fast, scalable, and reliable web applications.",
    proj_label: "Projects",
    proj_title: "Selected Work",
    proj_btn_live: "Visit Site",
    proj_btn_code: "Code",
    proj_palic_category: "Web Platform · Luxury Travel",
    proj_palic_desc: "A complete digital platform for a luxury lakeside apartment complex at Palić. Focus on modern design, performance, and reservation automation.",
    proj_palic_r1: "Multilingual UI built without third-party i18n libraries",
    proj_palic_r2: "Automated reservation flow — direct to client inbox",
    proj_palic_r3: "Google Lighthouse score 95+ across all metrics",
    proj_doorgat_category: "E-Commerce · Headless CMS",
    proj_doorgat_desc: "Headless e-commerce solution for selling industrial gate motors and video intercoms. WordPress + WooCommerce as API layer, Next.js frontend.",
    proj_doorgat_r1: "Next.js on Vercel, sub-second load time",
    proj_doorgat_r2: "WooCommerce as headless API — clean separation of concerns",
    proj_doorgat_r3: "Search ranking improved within 3 months of launch",
    proj_ves_category: "Landing Page · Local Business",
    proj_ves_desc: "Modern landing page for a local vehicle registration and inspection agency. Priority: speed, clarity, and converting visits into calls.",
    proj_ves_r1: "Sub-1s load time on mobile devices",
    proj_ves_r2: "CTA architecture increased phone inquiries by ~40%",
    proj_ves_r3: "Elementor + custom CSS, client-editable content",
    srv_label: "Services",
    srv_title: "How I can help",
    srv_sub: "End-to-end web development services — from UX concept to final deployment.",
    srv_web_title: "Front-end Architecture",
    srv_web_desc: "Building ultra-fast SPAs with React or Next.js, optimized for conversion and Core Web Vitals performance.",
    srv_design_title: "UI/UX Design Systems",
    srv_design_desc: "Designing elegant, consistent interfaces that look flawless across all devices and resolutions.",
    srv_backend_title: "API & Backend Integration",
    srv_backend_desc: "Connecting your application to databases, payment gateways, and external APIs for full automation.",
    contact_label: "Contact",
    contact_title: "Let's talk",
    contact_desc: "Open to new projects and freelance opportunities. Write directly or schedule a quick introductory call.",
    contact_email_label: "Or reach out directly",
    contact_form_name: "Your Name",
    contact_form_email: "Email Address",
    contact_form_msg: "Message",
    contact_btn: "Send Message",
    footer_built: "Designed & coded from scratch",
  }
};

// ==========================================
// SHARED: SECTION LABEL
// ==========================================
const SectionLabel = ({ children }) => (
  <p className="font-mono text-xs text-indigo-400 uppercase tracking-[0.2em] mb-3">{children}</p>
);

// ==========================================
// SHARED: PROJECT VISUAL (browser mockup)
// ==========================================
const ProjectVisual = ({ image, siteUrl, title }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
    {/* Browser chrome */}
    <div className="h-9 bg-black/40 border-b border-white/[0.06] flex items-center px-4 gap-3 shrink-0">
      <div className="flex gap-1.5">
        {[0, 1, 2].map(i => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
        ))}
      </div>
      <div className="flex-1 max-w-[220px] mx-auto h-5 rounded bg-white/[0.05] flex items-center justify-center">
        <span className="text-[10px] text-slate-600 font-mono truncate px-2">{siteUrl}</span>
      </div>
    </div>
    {/* Visual */}
    <div className="aspect-[16/9] relative overflow-hidden group">
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-[3s] ease-out group-hover:-translate-y-[22%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/30 pointer-events-none" />
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-indigo-950/30 via-zinc-900 to-zinc-950 flex items-center justify-center">
          <span className="text-[72px] font-black text-white/[0.04] uppercase tracking-widest select-none leading-none">
            {title.split(' ').map(w => w[0]).join('').slice(0, 3)}
          </span>
        </div>
      )}
    </div>
  </div>
);

// ==========================================
// 1. NAVBAR
// ==========================================
const Navbar = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#09090b]/85 backdrop-blur-md border-white/[0.06]' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-bold text-white tracking-tight text-lg select-none">
          Ignjatije<span className="text-indigo-500">.</span>dev
        </a>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500 font-mono">
          <a href="#stack" className="hover:text-white transition-colors duration-200">{t.nav_stack}</a>
          <a href="#projekti" className="hover:text-white transition-colors duration-200">{t.nav_projects}</a>
          <a href="#usluge" className="hover:text-white transition-colors duration-200">{t.nav_services}</a>
          <a href="#kontakt" className="hover:text-white transition-colors duration-200">{t.nav_contact}</a>
        </div>

        {/* Right: lang + CTA */}
        <div className="flex items-center gap-3">
          <div className="flex bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5">
            <button
              onClick={() => setLang('sr')}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 ${lang === 'sr' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >SR</button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 ${lang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >EN</button>
          </div>
          <a
            href="#kontakt"
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors duration-200"
          >
            {t.nav_hire}
          </a>
        </div>
      </div>
    </nav>
  );
};

// ==========================================
// 2. HERO
// ==========================================
const Hero = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient indigo glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_auto] gap-16 items-center py-24">

        {/* Left: Main content */}
        <div className="max-w-2xl">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-3.5 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-slate-400 font-mono">{t.available}</span>
          </div>

          {/* Heading */}
          <h1 className="font-bold text-white tracking-tight leading-[1.0] mb-6">
            <span className="block text-6xl md:text-7xl lg:text-8xl">
              Ignjatije<span className="text-indigo-500">.</span>dev
            </span>
            <span className="block text-3xl md:text-4xl font-medium text-slate-400 mt-3">
              {t.hero_role}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
            {t.hero_desc}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projekti"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              {t.hero_cta_primary} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white text-sm font-medium rounded-lg transition-all duration-200"
            >
              {t.hero_cta_secondary}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Cp6uH33" target="_blank" rel="noreferrer" aria-label="GitHub"
              className="text-slate-600 hover:text-white transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/ignjatije-ižipac-829821116/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="text-slate-600 hover:text-white transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:ignjatije.i@gmail.com" aria-label="Email"
              className="text-slate-600 hover:text-white transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
            <div className="w-px h-4 bg-white/10 mx-1" />
            <span className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
              <MapPin className="w-3 h-3" /> {t.location}
            </span>
          </div>
        </div>

        {/* Right: Profile card */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-12 bg-indigo-600/20 rounded-3xl blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center gap-3">
              {/* Portrait — 20% wider and taller than info strip (256 * 1.2 = 307, 288 * 1.2 = 346) */}
              <div className="w-[307px] h-[346px] relative bg-gradient-to-br from-indigo-950/50 via-zinc-900 to-zinc-950">
                <div className="absolute inset-0 flex items-center justify-center select-none">
                  <span className="text-[130px] font-black text-white/[0.05] leading-none tracking-tighter">II</span>
                </div>
                <img src="/portrait.png" alt="Ignjatije" className="absolute inset-0 w-full h-full object-cover" />
                {/* Gradient fade into background on all edges */}
                <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, transparent 45%, #09090b 100%)'}} />
                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{background: 'linear-gradient(to top, #09090b 0%, transparent 100%)'}} />
                <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none" style={{background: 'linear-gradient(to bottom, #09090b 0%, transparent 100%)'}} />
              </div>

              {/* Info strip — same size as before (w-64 = 256px) */}
              <div className="w-64 bg-white/[0.03] rounded-2xl p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Ignjatije Ižipac</p>
                    <p className="text-xs text-slate-600 mt-0.5">Full Stack Developer</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-mono">{t.available_short}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 text-center">
                    <div className="text-xl font-bold text-white">4+</div>
                    <div className="text-[10px] text-slate-600 mt-0.5 uppercase tracking-wide font-mono">{t.hero_stat_years_label}</div>
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-xl font-bold text-white">30+</div>
                    <div className="text-[10px] text-slate-600 mt-0.5 uppercase tracking-wide font-mono">{t.hero_stat_proj_label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
    </section>
  );
};

// ==========================================
// 3. TECH STACK
// ==========================================
const TechStack = ({ lang }) => {
  const t = translations[lang];

  const technologies = [
    { name: 'React', logo: '/react-logo.svg' },
    { name: 'Tailwind CSS', logo: '/tailwind-logo.svg' },
    { name: 'JavaScript', logo: '/js-logo.svg' },
    { name: 'PHP', logo: '/php-logo.svg' },
    { name: 'WordPress', logo: '/wordpress-logo.svg' },
    { name: 'Vite', logo: '/vite.svg' },
    { name: 'Next.js', logo: '/nextjs.svg' },
    { name: 'Node.js', logo: '/nodejs.svg' },
    { name: 'MySQL', logo: '/mysql.svg' },
    { name: 'Git', logo: '/git.svg' },
  ];

  const textOnly = [];

  return (
    <section id="stack" className="py-24 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-14">
          <SectionLabel>{t.stack_label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{t.stack_title}</h2>
          <p className="text-slate-500 mt-3 max-w-lg">{t.stack_subtitle}</p>
        </Reveal>

        {/* Logo items */}
        <Reveal className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-2 md:gap-3">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all duration-300 cursor-default"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-[9px] sm:text-[10px] md:text-[11px] text-slate-600 group-hover:text-indigo-400 transition-colors duration-300 font-mono text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}

          {textOnly.map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all duration-300 cursor-default"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-lg font-bold text-white/[0.08] group-hover:text-indigo-500/40 transition-colors duration-300 font-mono">
                  {tech.name.slice(0, 2)}
                </span>
              </div>
              <span className="text-[11px] text-slate-600 group-hover:text-indigo-400 transition-colors duration-300 font-mono text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </Reveal>

        {/* ── AI & AUTOMATION GROUP ── */}
        <Reveal className="mt-8">
          {/* Divider + label */}
          <div className="flex items-center gap-4 mb-5">
            <div style={{ height: '1px', background: '#2a2520', flex: 1 }} />
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#4a4035', letterSpacing: '0.15em' }} className="uppercase shrink-0">
              AI &amp; AUTOMATION
            </span>
            <div style={{ height: '1px', background: '#2a2520', flex: 1 }} />
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '8px' }}>
            {[
              {
                name: 'Claude Code',
                icon: null,
                tooltip: lang === 'sr' ? 'AI coding agent' : 'AI coding agent',
              },
              {
                name: 'Anthropic API',
                icon: '/claude.svg',
                tooltip: lang === 'sr' ? 'LLM integracija u projekte' : 'LLM integration',
              },
              {
                name: 'n8n',
                icon: '/n8n.svg',
                tooltip: lang === 'sr' ? 'Workflow automatizacija' : 'Workflow automation',
              },
              {
                name: 'Vercel',
                icon: '/vercel.svg',
                tooltip: lang === 'sr' ? 'Deploy & hosting' : 'Deploy & hosting',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4 rounded-xl cursor-default"
                style={{
                  background: '#141414',
                  border: '0.5px solid #2a2520',
                  transition: 'border-color 200ms ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#b49664'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2520'}
              >
                {/* Icon */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      style={{ filter: 'brightness(0) invert(1)', opacity: 0.4 }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}
                    />
                  ) : (
                    <span style={{ fontFamily: 'monospace', fontSize: '18px', color: '#4a4035', lineHeight: 1, transition: 'color 200ms ease' }}
                      className="group-hover:[color:#b49664]">
                      &gt;_
                    </span>
                  )}
                </div>

                {/* Label */}
                <span
                  className="text-[9px] sm:text-[10px] md:text-[11px] font-mono text-center leading-tight"
                  style={{ color: '#4a4035', transition: 'color 200ms ease' }}
                >
                  {item.name}
                </span>

                {/* Tooltip */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1.5 whitespace-nowrap z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: '#1a1a1a',
                    border: '0.5px solid #2a2520',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#8a7f75',
                  }}
                >
                  {item.tooltip}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

// ==========================================
// 4. PROJECTS — Z-PATTERN
// ==========================================
const Projects = ({ lang }) => {
  const t = translations[lang];

  const projects = [
    {
      id: 1,
      category: t.proj_palic_category,
      title: 'Lake Palić Apartments',
      desc: t.proj_palic_desc,
      results: [t.proj_palic_r1, t.proj_palic_r2, t.proj_palic_r3],
      tech: ['React', 'Vite', 'Tailwind CSS', 'Netlify Forms'],
      link: 'https://lakepalicapartment.netlify.app',
      github: 'https://github.com/Cp6uH33/lake-palic-apartment',
      image: '/palic-screenshot.png',
      siteUrl: 'lakepalicapartment.netlify.app',
    },
    {
      id: 2,
      category: t.proj_doorgat_category,
      title: 'Door Gate Sistem',
      desc: t.proj_doorgat_desc,
      results: [t.proj_doorgat_r1, t.proj_doorgat_r2, t.proj_doorgat_r3],
      tech: ['Next.js', 'WordPress', 'WooCommerce', 'Vercel'],
      link: 'https://doorgatesistem.com/',
      github: null,
      image: '/doorgat-screenshot.png',
      siteUrl: 'doorgatesistem.com',
    },
    {
      id: 3,
      category: t.proj_ves_category,
      title: 'VES Auto Centar',
      desc: t.proj_ves_desc,
      results: [t.proj_ves_r1, t.proj_ves_r2, t.proj_ves_r3],
      tech: ['WordPress', 'Elementor', 'PHP', 'Custom CSS'],
      link: 'https://vesautocentar.rs/',
      github: null,
      image: '/ves-screenshot.png',
      siteUrl: 'vesautocentar.rs',
    },
  ];

  return (
    <section id="projekti" className="py-24 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-20">
          <SectionLabel>{t.proj_label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{t.proj_title}</h2>
        </Reveal>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <Reveal key={project.id} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Visual */}
                <div className={imageLeft ? 'lg:order-1' : 'lg:order-2'}>
                  <ProjectVisual image={project.image} siteUrl={project.siteUrl} title={project.title} />
                </div>

                {/* Info */}
                <div className={imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                  <p className="font-mono text-xs text-indigo-400 uppercase tracking-[0.15em] mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 text-sm md:text-base">
                    {project.desc}
                  </p>

                  {/* Results */}
                  <ul className="space-y-3 mb-8">
                    {project.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-indigo-400" />
                        </div>
                        <span className="text-sm text-slate-400">{r}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono text-slate-600 bg-white/[0.04] border border-white/[0.08] rounded-md px-2.5 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-950 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors duration-200"
                    >
                      {t.proj_btn_live} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" /> {t.proj_btn_code}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 5. SERVICES
// ==========================================
const Services = ({ lang }) => {
  const t = translations[lang];

  const services = [
    {
      icon: Monitor,
      title: t.srv_web_title,
      desc: t.srv_web_desc,
      tags: ['React', 'Next.js', 'Vite', 'Tailwind'],
    },
    {
      icon: Layers,
      title: t.srv_design_title,
      desc: t.srv_design_desc,
      tags: ['Figma', 'Component Libraries', 'Responsive Design'],
    },
    {
      icon: Database,
      title: t.srv_backend_title,
      desc: t.srv_backend_desc,
      tags: ['REST APIs', 'MySQL', 'Netlify', 'WooCommerce'],
    },
  ];

  return (
    <section id="usluge" className="py-24 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-14">
          <SectionLabel>{t.srv_label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{t.srv_title}</h2>
          <p className="text-slate-500 mt-3 max-w-lg">{t.srv_sub}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <Reveal
                key={i}
                delay={i * 80}
                className="group p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-indigo-500/25 hover:bg-indigo-500/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{srv.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{srv.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {srv.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-mono text-slate-600 bg-white/[0.04] border border-white/[0.06] rounded px-2 py-0.5 group-hover:border-indigo-500/15 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 6. CONTACT
// ==========================================
const Contact = ({ lang }) => {
  const t = translations[lang];
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      })
      .catch(() => setFormStatus('error'));
  };

  return (
    <section id="kontakt" className="py-24 px-6 border-t border-white/[0.05]">
      {/* Ambient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <Reveal>
            <SectionLabel>{t.contact_label}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5">{t.contact_title}</h2>
            <p className="text-slate-500 leading-relaxed mb-10 max-w-sm">{t.contact_desc}</p>

            <div>
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-3">{t.contact_email_label}</p>
              <a
                href="mailto:ignjatije.i@gmail.com"
                className="inline-flex items-center gap-2 text-white hover:text-indigo-400 transition-colors duration-200 font-medium"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                ignjatije.i@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 mt-10">
              <a href="https://github.com/Cp6uH33" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/ignjatije-ižipac-829821116/" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            {formStatus === 'success' && (
              <div className="mb-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono">
                {lang === 'sr' ? '✓ Poruka je uspešno poslata.' : '✓ Message sent successfully.'}
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono">
                {lang === 'sr' ? 'Greška pri slanju. Pokušajte ponovo.' : 'Failed to send. Please try again.'}
              </div>
            )}

            <form
              name="portfolio-kontakt"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="portfolio-kontakt" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">
                    {t.contact_form_name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.03] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">
                    {t.contact_form_email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.03] transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">
                  {t.contact_form_msg}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.03] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {t.contact_btn} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. FOOTER
// ==========================================
const Footer = ({ lang }) => {
  const t = translations[lang];
  return (
    <footer className="py-8 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-white/60 text-sm tracking-tight">
          IGNJATIJE<span className="text-indigo-500/60">.</span>dev
        </span>
        <p className="text-slate-700 text-xs font-mono">
          {t.footer_built} · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-1 text-xs font-mono text-slate-700">
          <span>React</span><span className="mx-1 text-white/10">·</span>
          <span>Tailwind</span><span className="mx-1 text-white/10">·</span>
          <span>Vite</span>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// 8. SCROLL TO TOP
// ==========================================
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.pageYOffset > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-white/[0.06] border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/[0.08] transition-all duration-200"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

// ==========================================
// ROOT APP
// ==========================================
export default function App() {
  const [lang, setLang] = useState('sr');

  return (
    <div className="bg-[#09090b] min-h-screen scroll-smooth relative overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TechStack lang={lang} />
      <Projects lang={lang} />
      <Services lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <ScrollToTop />
    </div>
  );
}
