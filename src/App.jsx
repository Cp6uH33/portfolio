import React, { useState, useEffect } from 'react';
import { Terminal, Code2, ChevronRight, Github, Linkedin, Mail, ExternalLink, ArrowRight, ArrowUp } from 'lucide-react';

// ==========================================
// 0. REČNIK (PREVODI)
// ==========================================
const translations = {
  sr: {
    nav_projects: "/projekti",
    nav_services: "/usluge",
    nav_contact: "/kontakt",
    nav_hire: "Hire Me",
    hero_badge: "Dostupan za rad",
    hero_title_1: "Pretvaram",
    hero_title_2: "ideje u",
    hero_title_highlight: "digitalnu",
    hero_title_3: "stvarnost.",
    hero_desc: "Specijalizovan za brze, moderne i pouzdane web aplikacije i sajtove. Fokusiran na performanse, čist kod i konverziju vaših klijenata.",
    hero_btn: "Zakaži konsultacije",
    dev_role: "'Full Stack Web Dev'",
    dev_location: "'Srbija'",
    proj_badge: "Moji Radovi",
    proj_title: "Istaknuti Projekti",
    proj_palic_desc: "Kompletna digitalna platforma za luksuzne apartmane. Fokus je bio na modernom dizajnu, brzini učitavanja i automatizaciji rezervacija.",
    proj_feat_1: "Višejezičnost (i18n) bez eksternih biblioteka",
    proj_feat_2: "Integracija sistema formi direktno na e-mail",
    proj_feat_3: "Optimizacija za Google (SEO) i 100% Mobile Responsive",
    proj_btn_live: "Poseti sajt",
    proj_btn_details: "Studija slučaja",
    srv_badge: "Šta radim",
    srv_title: "Moje Usluge i Veštine",
    srv_web_title: "Izrada Web Aplikacija",
    srv_web_desc: "Pravim ultrabrze, moderne Single Page Aplikacije u React-u (Vite) koje se učitavaju momentalno i donose rezultate.",
    srv_design_title: "UI/UX & Tailwind",
    srv_design_desc: "Dizajniram prelepe i responzivne interfejse koji izgledaju savršeno na telefonima, tabletima i velikim ekranima.",
    srv_backend_title: "Baze i Backend",
    srv_backend_desc: "Povezujem vaše sajtove sa bazama podataka, formama i sistemima za naplatu kako bi vaš biznis bio 100% automatizovan.",
    contact_badge: "Dostupnost",
    contact_title: "Spremni za saradnju?",
    contact_desc: "Trenutno sam otvoren za nove projekte i freelance prilike. Bez obzira da li imate konkretno pitanje ili samo želite da se pozdravite, slobodno mi pišite!",
    contact_btn: "Pošalji poruku",
    contact_form_name: "Vaše Ime",
    contact_form_email: "Email Adresa",
    contact_form_msg: "O čemu želite da pričamo?",
    footer_text: "Dizajnirano i kodirano od nule sa",
  },
  en: {
    nav_projects: "/projects",
    nav_services: "/services",
    nav_contact: "/contact",
    nav_hire: "Hire Me",
    hero_badge: "Available for work",
    hero_title_1: "Turning",
    hero_title_2: "ideas into",
    hero_title_highlight: "digital",
    hero_title_3: "reality.",
    hero_desc: "Specialized in fast, modern, and reliable web applications and websites. Focused on performance, clean code, and your client conversion.",
    hero_btn: "Book a Consultation",
    dev_role: "'Full Stack Web Dev'",
    dev_location: "'Serbia'",
    proj_badge: "My Work",
    proj_title: "Featured Projects",
    proj_palic_desc: "A complete digital platform for luxury apartments. The focus was on modern design, loading speed, and booking automation.",
    proj_feat_1: "Multi-language (i18n) without external libraries",
    proj_feat_2: "Direct-to-email form system integration",
    proj_feat_3: "Google optimized (SEO) & 100% Mobile Responsive",
    proj_btn_live: "Visit Live Site",
    proj_btn_details: "Case Study",
    srv_badge: "What I do",
    srv_title: "My Services & Skills",
    srv_web_title: "Web App Development",
    srv_web_desc: "I build ultra-fast, modern Single Page Applications using React (Vite) that load instantly and drive results.",
    srv_design_title: "UI/UX & Tailwind",
    srv_design_desc: "I design beautiful, highly responsive interfaces that look flawless on phones, tablets, and large screens.",
    srv_backend_title: "Databases & Backend",
    srv_backend_desc: "I connect your sites to databases, form handlers, and payment gateways to fully automate your business.",
    contact_badge: "Availability",
    contact_title: "Ready to work together?",
    contact_desc: "I'm currently open to new projects and freelance opportunities. Whether you have a specific question or just want to say hi, feel free to reach out!",
    contact_btn: "Send Message",
    contact_form_name: "Your Name",
    contact_form_email: "Email Address",
    contact_form_msg: "What do you want to talk about?",
    footer_text: "Designed & coded from scratch with",
  }
};

// ==========================================
// 1. NAVBAR KOMPONENTA (Sa jezicima)
// ==========================================
const Navbar = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-4xl border ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-cyber-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]' : 'bg-transparent border-transparent'}`}>

        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyber-cyan" />
          <span className="font-mono font-bold text-white tracking-wider">Ignjatije<span className="text-cyber-cyan">.dev</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#projekti" className="text-slate-400 hover:text-cyber-cyan transition-colors">{t.nav_projects}</a>
          <a href="#usluge" className="text-slate-400 hover:text-cyber-cyan transition-colors">{t.nav_services}</a>
          <a href="#kontakt" className="text-slate-400 hover:text-cyber-cyan transition-colors">{t.nav_contact}</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Birač Jezika */}
          <div className="flex bg-dark-card border border-dark-border rounded-full p-1">
            <button onClick={() => setLang('sr')} className={`px-2 py-0.5 text-xs font-mono rounded-full transition-all ${lang === 'sr' ? 'bg-cyber-cyan text-dark-bg font-bold' : 'text-slate-400 hover:text-white'}`}>SR</button>
            <button onClick={() => setLang('en')} className={`px-2 py-0.5 text-xs font-mono rounded-full transition-all ${lang === 'en' ? 'bg-cyber-cyan text-dark-bg font-bold' : 'text-slate-400 hover:text-white'}`}>EN</button>
          </div>

          <a href="#kontakt" className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs font-mono text-white bg-cyber-purple/20 border border-cyber-purple/50 rounded-full hover:bg-cyber-purple/40 hover:border-cyber-purple transition-all shadow-[0_0_10px_rgba(138,43,226,0.2)] cursor-pointer">
            <Code2 className="w-3 h-3" />
            <span>{t.nav_hire}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

// ==========================================
// 2. HERO SEKCIJA
// ==========================================
const Hero = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f33_1px,transparent_1px),linear-gradient(to_bottom,#1f1f33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyber-purple/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyber-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

        <div className="text-left flex flex-col items-start order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card border border-dark-border mb-6">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{t.hero_badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {t.hero_title_1} <br />
            {t.hero_title_2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-blue-500">{t.hero_title_highlight}</span> <br />
            {t.hero_title_3}
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            {t.hero_desc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#kontakt" className="group relative px-8 py-4 bg-transparent text-white font-mono font-bold overflow-hidden rounded-md border border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300">
              <div className="absolute inset-0 w-0 bg-cyber-cyan transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative group-hover:text-dark-bg flex items-center gap-2">
                {t.hero_btn} <ChevronRight className="w-4 h-4" />
              </span>
            </a>

            {/* Social Linkovi */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/Cp6uH33"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profil"
                className="p-3 rounded-md border border-dark-border bg-dark-card text-slate-400 hover:text-white hover:border-cyber-purple hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ignjatije-ižipac-829821116/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profil"
                className="p-3 rounded-md border border-dark-border bg-dark-card text-slate-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ignjatije.i@gmail.com"
                aria-label="Pošalji Email"
                className="p-3 rounded-md border border-dark-border bg-dark-card text-slate-400 hover:text-white hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
          <div className="relative w-full max-w-sm transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan to-cyber-purple opacity-20 blur-xl rounded-2xl"></div>
            <div className="relative bg-dark-card border border-dark-border rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6 border-b border-dark-border pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-slate-500">ignjatije.jsx</span>
              </div>
              <div className="font-mono text-sm leading-loose">
                <p><span className="text-cyber-purple">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-slate-300">name:</span> <span className="text-green-400">'Ignjatije'</span>,</p>
                <p className="pl-4"><span className="text-slate-300">role:</span> <span className="text-green-400">{t.dev_role}</span>,</p>
                <p className="pl-4"><span className="text-slate-300">location:</span> <span className="text-green-400">{t.dev_location}</span>,</p>
                <p className="pl-4"><span className="text-slate-300">skills:</span> [</p>
                <p className="pl-8 text-cyber-cyan">'React', 'Tailwind', 'JavaScript', 'Node.js', 'Wordpress'</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-slate-300">coffee_level:</span> <span className="text-orange-400">9999</span></p>
                <p>{'};'}</p>
                <p className="mt-4"><span className="text-cyber-purple">developer</span>.<span className="text-blue-400">buildAwesomeProject</span>();</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. PROJEKTI SEKCIJA
// ==========================================
const Projects = ({ lang }) => {
  const t = translations[lang];

  // NIZ SA OSTALIM PROJEKTIMA
  const otherProjects = [
    {
      id: 1,
      title: "Door Gate Sistem",
      desc_sr: "Headless e-commerce rešenje za prodaju motora za kapije i video interfona. WordPress + WooCommerce backend, Next.js frontend deployovan na Vercel-u. Rezultat: brži load, bolji SEO i moderan shopping experience u poređenju sa klasičnim WordPress temama.",
      desc_en: "Headless e-commerce solution for selling gate motors and video intercoms. WordPress + WooCommerce backend, Next.js frontend deployed on Vercel. Result: faster load times, better SEO, and a modern shopping experience compared to traditional WordPress themes.",
      tech: ["Wordpress", "E-Commerce", "Woo-Commerce"],
      link: "https://doorgatesistem.com/",
      github: "#"
    },
    {
      id: 2,
      title: "Škola Sporta za Decu",
      desc_sr: "Dinamičan WordPress sajt za sportsku školu. Služi za informisanje roditelja, pregled programa i prijavu novih polaznika.",
      desc_en: "Dynamic WordPress site for a children's sports school. Used for informing parents, viewing programs, and enrolling new members.",
      tech: ["WordPress", "PHP", "CSS", "Elementor"],
      link: "https://gnjale.mohacidoo.top/",
      github: "#"
    },
    {
      id: 3,
      title: "VES Auto Centar",
      desc_sr: "Moderna prezentaciona stranica za lokalnu agenciju za registraciju vozila i tehnički pregled. Čist dizajn i brze informacije za klijente.",
      desc_en: "Modern landing page for a local vehicle registration and technical inspection agency. Clean design and quick info for clients.",
      tech: ["HTML", "CSS", "JS", "Wordpress", "Elementor"],
      link: "https://vesautocentar.rs/",
      github: "#"
    }
  ];

  return (
    <section id="projekti" className="py-32 px-6 relative border-t border-dark-border bg-[#050508]">
      <div className="max-w-5xl mx-auto">

        {/* Naslov sekcije */}
        <div className="mb-16">
          <span className="text-cyber-purple font-mono text-sm uppercase tracking-widest">{t.proj_badge}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">{t.proj_title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full"></div>
        </div>

        {/* 1. ISTAKNUTI PROJEKAT: Lake Palić */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-32">
          {/* Slika projekta */}
          <div className="lg:col-span-7 relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[16/10] bg-[#0a0a0f] border border-dark-border rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01] flex flex-col">
              <div className="h-8 bg-[#1f1f33] w-full flex items-center px-4 shrink-0 border-b border-black">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto w-1/2 h-4 bg-[#0a0a0f] rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-slate-500 font-mono">lakepalicapartment.netlify.app</span>
                </div>
              </div>
              <div className="relative w-full h-full bg-slate-900 overflow-hidden">
                <img src="/palic-screenshot.png" alt="Lake Palić Web Projekat" className="w-full h-auto object-cover object-top transition-transform duration-[3000ms] ease-out group-hover:-translate-y-[20%]" />
                <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Opis projekta */}
          <div className="lg:col-span-5 lg:-ml-12 relative z-10 flex flex-col items-start">
            <div className="bg-dark-card/90 backdrop-blur-xl border border-dark-border p-8 rounded-xl shadow-2xl w-full">
              <div className="flex gap-2 mb-4 font-mono text-xs font-bold text-cyber-cyan">
                <span className="px-2 py-1 bg-cyber-cyan/10 rounded">React</span>
                <span className="px-2 py-1 bg-cyber-cyan/10 rounded">Vite</span>
                <span className="px-2 py-1 bg-cyber-cyan/10 rounded">Tailwind</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lake Palić Apartments</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{t.proj_palic_desc}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-300"><ArrowRight className="w-4 h-4 text-cyber-purple mr-2 mt-0.5 shrink-0" /><span>{t.proj_feat_1}</span></li>
                <li className="flex items-start text-sm text-slate-300"><ArrowRight className="w-4 h-4 text-cyber-purple mr-2 mt-0.5 shrink-0" /><span>{t.proj_feat_2}</span></li>
                <li className="flex items-start text-sm text-slate-300"><ArrowRight className="w-4 h-4 text-cyber-purple mr-2 mt-0.5 shrink-0" /><span>{t.proj_feat_3}</span></li>
              </ul>
              <div className="flex gap-4">
                <a href="https://lakepalicapartment.netlify.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white text-dark-bg font-bold rounded hover:bg-slate-200 transition-colors text-sm">
                  {t.proj_btn_live} <ExternalLink className="w-4 h-4" />
                </a>

                {/*  - GITHUB DUGME */}
                <a href="https://github.com/Cp6uH33/lake-palic-apartment" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 border border-dark-border text-slate-300 font-bold rounded hover:bg-dark-card transition-colors text-sm">
                  GitHub <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* 2. MREŽA OSTALIH PROJEKATA (Ostali Radovi) */}
        <div className="mb-12 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">{lang === 'sr' ? 'Ostali Radovi' : 'Other Noteworthy Projects'}</h3>
          <a href="#" className="font-mono text-sm text-cyber-cyan hover:text-white transition-colors flex items-center gap-2">
            {lang === 'sr' ? 'Pogledaj Github' : 'View Archive'} <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="group bg-dark-card border border-dark-border p-6 rounded-xl hover:border-cyber-cyan hover:-translate-y-2 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)]">
              {/* Header kartice: Folder i Link ikone */}
              <div className="flex justify-between items-center mb-6">
                <Code2 className="w-10 h-10 text-cyber-purple" />
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-cyber-cyan transition-colors"><Github className="w-5 h-5" /></a>
                  <a href={project.link} className="text-slate-400 hover:text-cyber-cyan transition-colors"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>

              {/* Title i Opis */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">{project.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {lang === 'sr' ? project.desc_sr : project.desc_en}
              </p>

              {/* Tehnologije u dnu */}
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-500 mt-auto pt-4 border-t border-dark-border">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 4. USLUGE / SKILLS SEKCIJA
// ==========================================
const Services = ({ lang }) => {
  const t = translations[lang];

  // NIZ SA TVOJIM TEHNOLOGIJAMA I LOGOTIPIMA
  const mySkills = [
    {
      name: "React",
      color: "text-[#61DAFB]",
      icon: (
        <img
          src="/react-logo.svg"
          alt="React Logo"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: "Tailwind",
      color: "text-[#38BDF8]",
      icon: (
        <img
          src="/tailwind-logo.svg"
          alt="Tailwind CSS Logo"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: "JavaScript",
      color: "text-[#F7DF1E]",
      icon: (
        <img
          src="/js-logo.svg"
          alt="JavaScript Logo"
          className="w-10 h-10 rounded-sm object-contain"
        />
      )
    },
    {
      name: "PHP",
      color: "text-[#777BB4]",
      icon: (
        <img
          src="/php-logo.svg"
          alt="PHP Logo"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: "WordPress",
      color: "text-[#21759B]",
      icon: (
        <img
          src="/wordpress-logo.svg"
          alt="WordPress Logo"
          className="w-10 h-10 object-contain"
        />
      )
    }
  ];

  return (
    <section id="usluge" className="py-32 px-6 relative bg-dark-bg">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-cyber-purple font-mono text-sm uppercase tracking-widest">{t.srv_badge}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">{t.srv_title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Usluga 1 */}
          <div className="bg-dark-card border border-dark-border p-8 rounded-xl hover:border-cyber-cyan transition-colors flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-cyber-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyber-cyan/20 transition-colors">
              <Code2 className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.srv_web_title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t.srv_web_desc}</p>
          </div>

          {/* Usluga 2 */}
          <div className="bg-dark-card border border-dark-border p-8 rounded-xl hover:border-cyber-purple transition-colors flex flex-col items-center text-center group mt-0 md:mt-8">
            <div className="w-16 h-16 bg-cyber-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyber-purple/20 transition-colors">
              <Terminal className="w-8 h-8 text-cyber-purple" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.srv_design_title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t.srv_design_desc}</p>
          </div>

          {/* Usluga 3 */}
          <div className="bg-dark-card border border-dark-border p-8 rounded-xl hover:border-blue-500 transition-colors flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Code2 className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.srv_backend_title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t.srv_backend_desc}</p>
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-20 pt-10 border-t border-dark-border">
          <h3 className="text-center text-slate-400 font-mono text-sm uppercase tracking-widest mb-10">Tehnologije koje koristim</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {mySkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-dark-card border border-dark-border rounded-xl hover:border-cyber-purple hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(138,43,226,0.15)] transition-all duration-300 group w-[140px] sm:w-[160px]"
              >
                <div className={`${skill.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <span className="text-slate-200 font-medium text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 5. KONTAKT SEKCIJA (Prepravljeno za Netlify)
// ==========================================
const Contact = ({ lang }) => {
  const t = translations[lang];
  // Stanje za praćenje statusa slanja (prazno, 'success', 'error')
  const [formStatus, setFormStatus] = useState('');

  // Funkcija koja presreće slanje forme
  const handleSubmit = (e) => {
    e.preventDefault(); // Sprečava 404 grešku (prelazak na drugu stranicu)
    
    const form = e.target;
    const formData = new FormData(form);

    // Šaljemo podatke na trenutnu putanju (gde ih Netlify preuzima)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormStatus('success'); // Prikazujemo poruku o uspehu
        form.reset(); // Praznimo formu
        
        // Sklanjamo poruku o uspehu posle 5 sekundi
        setTimeout(() => setFormStatus(''), 5000);
      })
      .catch((error) => {
        setFormStatus('error');
        console.error(error);
      });
  };

  return (
    <section id="kontakt" className="py-32 px-6 relative bg-[#050508]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <span className="text-cyber-cyan font-mono text-sm uppercase tracking-widest mb-4 inline-block">{t.contact_badge}</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.contact_title}</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          {t.contact_desc}
        </p>

        {/* PORUKE O STATUSU (Pojavljuju se iznad forme) */}
        {formStatus === 'success' && (
          <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400 font-mono">
            {lang === 'sr' ? 'Poruka je uspešno poslata!' : 'Message sent successfully!'}
          </div>
        )}
        {formStatus === 'error' && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-400 font-mono">
            {lang === 'sr' ? 'Došlo je do greške. Pokušajte ponovo.' : 'An error occurred. Please try again.'}
          </div>
        )}

        {/* Netlify Forma  */}
        <form 
          className="max-w-xl mx-auto bg-dark-card border border-dark-border p-8 rounded-2xl shadow-2xl text-left relative" 
          name="portfolio-kontakt" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit} // <--- OVDE POZIVAMO FUNKCIJU
        >
          {/* OVO JE KLJUČNO ZA REACT: Skriveno polje mora da se zove "form-name" i vrednost mora da bude ista kao atribut "name" na formi! */}
          <input type="hidden" name="form-name" value="portfolio-kontakt" />

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.contact_form_name}</label>
              {/* OBAVEZNO SVAKI INPUT MORA IMATI ATRIBUT name="" */}
              <input type="text" name="name" required className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors font-sans" />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.contact_form_email}</label>
              <input type="email" name="email" required className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors font-sans" />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.contact_form_msg}</label>
            <textarea name="message" required rows="5" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors font-sans resize-none"></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-cyber-purple/20 border border-cyber-purple text-white font-mono font-bold rounded-lg hover:bg-cyber-purple hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all flex justify-center items-center gap-2 group">
            {t.contact_btn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

      </div>
    </section>
  );
};


// ==========================================
// 6. FOOTER
// ==========================================
const Footer = ({ lang }) => {
  const t = translations[lang];
  return (
    <footer className="py-8 text-center border-t border-dark-border bg-dark-bg">
      <p className="text-slate-500 text-sm font-mono flex items-center justify-center gap-2">
        {t.footer_text} <span className="text-cyber-cyan">React</span> & <span className="text-cyber-purple">Tailwind</span>
      </p>
      <p className="text-slate-600 text-xs font-mono mt-2">
        &copy; {new Date().getFullYear()} IGNJATIJE.dev
      </p>
    </footer>
  );
};

// ==========================================
// 7. SCROLL TO TOP DUGME
// ==========================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Prati skrolovanje
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Funkcija za glatko skrolovanje na vrh
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-cyber-purple/20 border border-cyber-purple text-white rounded-full shadow-[0_0_15px_rgba(138,43,226,0.3)] hover:bg-cyber-purple hover:shadow-[0_0_25px_rgba(138,43,226,0.6)] transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

// ==========================================
// GLAVNA APLIKACIJA
// ==========================================
export default function App() {
  const [lang, setLang] = useState('sr'); // Upravljanje jezikom (SR / EN)

  return (
    <div className="bg-dark-bg min-h-screen selection:bg-cyber-cyan/30 selection:text-white scroll-smooth relative">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Services lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <ScrollToTop />
    </div>
  );
}
