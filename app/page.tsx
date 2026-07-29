"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";

type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  detail: string;
  technologies: string[];
  features: string[];
  image: string;
  imageAlt: string;
  repo?: string;
  accent: string;
  featured?: boolean;
  private?: boolean;
  previewNote?: string;
};

const projectPlaceholder = "";
const projectPlaceholderAlt = "";
const projectPlaceholderNote = "Preview";

const projects: Project[] = [
  {
    id: "bikemate",
    title: "BikeMate Service Platform",
    shortTitle: "BikeMate",
    category: "Full-stack",
    year: "2026",
    role: "Project Leader · Main Programmer",
    summary: "A connected mobile service platform that helps cyclists find mechanics and bike shops, book repairs, request emergency help, and follow service progress in real time.",
    detail: "I led the architecture, database design, API development, real-time workflows, cloud integration, and team coordination across customer, technician, shop, and administrator experiences.",
    technologies: [".NET MAUI","ASP.NET Core","Azure SQL","EF Core","SignalR","Google Maps","PayMongo","Cloudinary"],
    features: ["Live location-aware service matching","Emergency beacon and SOS notifications","Real-time messaging and job updates","Online payments and transaction verification","Customer, technician, shop, and admin workflows"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/bikemate-service-platform",
    accent: "#8fff5a", featured: true, previewNote: projectPlaceholderNote,
  },
  {
    id: "mary-mother",
    title: "Mary Mother of Mercy Legacy Platform",
    shortTitle: "Mary Mother of Mercy",
    category: "Full-stack",
    year: "2026",
    role: "Project Leader · Main Programmer",
    summary: "A public storytelling website, content management system, and donation platform for Mary Mother of Mercy Home for the Elderly and Abandoned Foundation.",
    detail: "The platform preserves the organization's history while giving administrators practical tools for stories, events, media, donations, messages, and website content.",
    technologies: ["Node.js","Express","EJS","MySQL","Cloudinary","PayMongo","SendGrid","Render"],
    features: ["Public legacy and storytelling website","Secure content management dashboard","Donation checkout and payment tracking","Events, galleries, videos, and participation requests","Responsive cloud-ready architecture"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/mary-mother-mercy-legacy-website",
    accent: "#67e8f9", featured: true, previewNote: projectPlaceholderNote,
  },
  {
    id: "smash-it",
    title: "Smash-It Sports Reservation System",
    shortTitle: "Smash-It",
    category: "Web",
    year: "2026",
    role: "Project Leader · Main Programmer",
    summary: "A sports facility reservation and queue-management system for badminton and pickleball courts, with scheduling, payments, and live court updates.",
    detail: "I designed the reservation workflow, queue logic, database structure, real-time synchronization, payment integration, responsive interface, and team development process.",
    technologies: ["ASP.NET Web Forms","C#","SQL Server","SignalR","PayMongo","Bootstrap"],
    features: ["Court scheduling and reservations","Live queue and availability updates","Payment confirmation workflows","Admin controls and user management","History and operational reporting"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/programmerlia/smashitFINAL",
    accent: "#f0abfc", featured: true, previewNote: projectPlaceholderNote,
  },
  {
    id: "calorie-tracker",
    title: "Calorie Tracker",
    shortTitle: "Calorie Tracker",
    category: "Mobile",
    year: "2026",
    role: "Full-stack Mobile Developer",
    summary: "A nutrition and fitness tracker that connects a .NET MAUI Android experience to an ASP.NET Core API and Oracle Database.",
    detail: "The system supports account flows, nutrition records, daily calorie summaries, macronutrients, profile goals, audit logs, and food-photo capture.",
    technologies: [".NET MAUI","ASP.NET Core","Oracle Database","REST APIs","C#","SMTP OTP"],
    features: ["Food and calorie-log CRUD","Daily calorie and macro summaries","Profile and fitness-goal management","Oracle triggers and audit records","Email OTP registration workflows"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/calorie-tracker",
    accent: "#fb7185", previewNote: projectPlaceholderNote,
  },
  {
    id: "gerodias",
    title: "Gerodias Clinic Management System",
    shortTitle: "Gerodias Clinic",
    category: "Desktop",
    year: "2024",
    role: "Project Leader · Main Programmer",
    summary: "A Windows desktop system for day-to-day clinic operations, including appointments, inventory, transactions, logs, and staff workflows.",
    detail: "Built as a senior-high-school capstone, the project translated clinic processes into a structured database and practical interfaces for healthcare staff.",
    technologies: ["VB.NET","Windows Forms","SQL Server",".NET Framework"],
    features: ["Patient and appointment management","Inventory and transaction workflows","Searchable operational records","Staff access and activity logs","Printable clinic reports"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/gerodias-clinic-management-system",
    accent: "#60a5fa", previewNote: projectPlaceholderNote,
  },
  {
    id: "lamarea",
    title: "La Marea Guest Management System",
    shortTitle: "La Marea GMS",
    category: "Desktop",
    year: "2023",
    role: "Project Leader · Main Programmer",
    summary: "A visitor and security-monitoring system for La Marea Executive Subdivision, designed to improve guest logging, registration, and reporting.",
    detail: "I designed the Microsoft Access data model, developed guest and employee workflows, added search and reporting tools, and led the documentation and final presentation.",
    technologies: ["VB.NET","Windows Forms","Microsoft Access","OLE DB"],
    features: ["Guest and employee registration","Reservation and visitor history","Security search and reporting","Inventory and administrative tools","Privacy-conscious portfolio packaging"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/lamarea-guest-management-system",
    accent: "#fbbf24", previewNote: projectPlaceholderNote,
  },
  {
    id: "avl-tree",
    title: "AVL Tree Visual Study",
    shortTitle: "AVL Tree",
    category: "Algorithms",
    year: "2025",
    role: "CS102-1L · CIS201",
    summary: "A Python implementation of an AVL tree that demonstrates self-balancing binary-search-tree operations and rotation logic.",
    detail: "The project documents insertion, height tracking, balance factors, and left/right rotations through source code, a system flowchart, and formal course documentation.",
    technologies: ["Python","Data Structures","AVL Trees","Algorithms"],
    features: ["Self-balancing insertion","Left and right rotations","Balance-factor calculations","Structured algorithm flowchart","Course documentation"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/avl-tree-cs102-1l-cis201",
    accent: "#a78bfa", previewNote: projectPlaceholderNote,
  },
  {
    id: "tower-of-hanoi",
    title: "Towers of Hanoi",
    shortTitle: "Towers of Hanoi",
    category: "Algorithms",
    year: "2025",
    role: "CS102-1L · CIS201",
    summary: "An interactive Python interpretation of the Towers of Hanoi puzzle built around stacks, linked lists, and rule-based move validation.",
    detail: "Players choose a puzzle size, move disks between three towers, receive immediate validation, and complete the classic puzzle through a terminal interface.",
    technologies: ["Python","Stacks","Linked Lists","Input Validation"],
    features: ["Three linked-list stack structures","Configurable three-to-ten-disk games","Invalid-move protection","Terminal-based interaction","Flowcharts and development documentation"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/tower-of-hanoi-cs102-1l-cis201",
    accent: "#2dd4bf", previewNote: projectPlaceholderNote,
  },
  {
    id: "malaya-automation",
    title: "Malaya Organization Automation",
    shortTitle: "Malaya Automation",
    category: "Automation",
    year: "2025",
    role: "Automation Developer",
    summary: "Python and JavaScript tools that reduce repetitive organization work across rosters, forms, attendance, reports, and administrative messages.",
    detail: "The private toolkit transforms structured member data into reusable documents and streamlines recurring administrative workflows for the Malaya organization.",
    technologies: ["Python","JavaScript","PDF Automation","Data Processing"],
    features: ["Roster-to-PDF generation","Attendance processing","Form and data organization","Report generation","Message and workflow automation"],
    image: projectPlaceholder, imageAlt: projectPlaceholderAlt,
    accent: "#7dd3fc", private: true, previewNote: projectPlaceholderNote,
  },
];

const certificates = [
  { title: "Introduction to Project Management", issuer: "IBM", date: "June 2026", url: "https://coursera.org/share/1fe2bdc49677169fa6961f76faee1d5e" },
  { title: "Ethics of Artificial Intelligence", issuer: "Politecnico di Milano", date: "April 2026", url: "https://coursera.org/share/b79f0935f8e0355d0679d58b9a691782" },
  { title: "Introduction to Databases", issuer: "Meta", date: "March 2026", url: "https://coursera.org/share/d8d5304af1bebacd9a9a7055e42fb09f" },
  { title: "Data Literacy — Why It Matters", issuer: "University of Milan", date: "June 2025", url: "https://coursera.org/share/13c01f2fdb7ea1c550e96133cbf2e127" },
  { title: "Grammar and Punctuation", issuer: "University of California, Irvine", date: "May 2025", url: "https://coursera.org/share/73747edf3c56297831d1fda10d921e6d" },
];

const categories = ["All","Full-stack","Web","Mobile","Desktop","Algorithms","Automation"];

function ArrowIcon() { return <span aria-hidden="true">↗</span>; }

function use3DTilt(ref: React.RefObject<HTMLElement | null>, intensity = 8) {
  const handleMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * intensity;
    const tiltY = (0.5 - x) * intensity;
    el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01,1.01,1.01)`;
  }, [ref, intensity]);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [ref, handleMove, handleLeave]);
}

function SplitText({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = children.split(' ');

  return (
    <h2 ref={ref} className={className} data-split>
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word"
          style={{ '--delay': `${delay + i * 0.06}s` } as React.CSSProperties}
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </h2>
  );
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const animRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(el);
      animRef.current = true;
      let current = 0;
      const step = Math.max(1, Math.floor(value / 30));
      const timer = setInterval(() => {
        current += step;
        if (current >= value) { current = value; clearInterval(timer); }
        el!.textContent = `${current}${suffix}`;
      }, 40);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix]);

  return <span ref={ref} className="stat-value">0{suffix}</span>;
}

const particleStyles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  style: {
    left: `${((i * 137.5) % 100)}%`,
    top: `${((i * 89.3 + 27) % 100)}%`,
    '--dur': `${10 + (i % 8) * 2}s`,
    '--delay': `${(i % 6) * 1.5}s`,
    '--dx': `${((i % 5) - 2) * 15}px`,
    '--dy': `${-((i % 3) + 1) * 40}px`,
  } as React.CSSProperties,
}));

function SkillRing({ pct, label }: { pct: number; label: string }) {
  const offset = 226 - (pct / 100) * 226;
  return (
    <div className="skill-ring-wrap" style={{ position: 'relative' }}>
      <svg className="skill-ring" viewBox="0 0 76 76">
        <circle className="skill-ring-track" cx="38" cy="38" r="36" />
        <circle
          className="skill-ring-fill"
          cx="38" cy="38" r="36"
          style={{ '--ring-offset': `${offset}` } as React.CSSProperties}
        />
      </svg>
      <div className="skill-ring-label">
        <span className="skill-ring-count">{pct}%</span>
      </div>
    </div>
  );
}

function ProjectGradient({ project }: { project: Project }) {
  const initials = project.shortTitle.split(' ').map(w => w[0]).join('').slice(0, 3);
  return (
    <div className="project-gradient" style={{ '--accent': project.accent } as React.CSSProperties}>
      <div className="project-gradient-bg" />
      <span className="project-gradient-icon">{initials}</span>
      <div className="project-gradient-techs">
        {project.technologies.slice(0, 6).map(t => <span key={t}>{t}</span>)}
      </div>
    </div>
  );
}

function Particles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particleStyles.map(p => <div key={p.id} className="particle" style={p.style} />)}
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const heroCardRef = useRef<HTMLDivElement>(null);
  const featuredRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  const topbarRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const modalOriginRef = useRef({ x: 0.5, y: 0.5 });

  use3DTilt(heroCardRef, 6);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter(project => {
      const categoryMatches = activeCategory === "All" || project.category === activeCategory;
      const searchMatches = !normalized ||
        [project.title, project.summary, project.category, ...project.technologies]
          .join(" ").toLowerCase().includes(normalized);
      return categoryMatches && searchMatches;
    });
  }, [activeCategory, query]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? y / scrollable : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${Math.min(progress, 1)}`);
      document.documentElement.style.setProperty('--scroll-y', `${y}`);
      document.documentElement.style.setProperty('--scroll-offset', `${y * -0.03}px`);
      document.documentElement.style.setProperty('--hero-shift', `${Math.min(y * 0.08, 70)}px`);

      const sections = ['featured-title','work','journey','credentials','contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < 400 && rect.bottom > 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedProject(null); };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    revealItems.forEach(item => observer.observe(item));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [activeCategory, query]);

  const updateSpotlight = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.setProperty('--pointer-x', `${e.clientX}px`);
    el.style.setProperty('--pointer-y', `${e.clientY}px`);
    el.style.setProperty('--pointer-x2', `${e.clientX * 0.6 + 200}px`);
    el.style.setProperty('--pointer-y2', `${e.clientY * 0.4 + 100}px`);
  };

  return (
    <main ref={mainRef} className="site-shell" onPointerMove={updateSpotlight}>
      <Particles />
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />
      <div className="floating-orb" aria-hidden="true" />
      <div className="floating-orb" aria-hidden="true" />

      <header ref={topbarRef} className={`topbar${scrolled ? ' topbar-scrolled' : ''}`}>
        <a className="monogram" href="#top" aria-label="Back to top">
          IA<span>.</span>
        </a>
        <nav className={menuOpen ? "nav-links nav-links-open" : "nav-links"}>
          {[
            { label: 'Work', href: '#featured-title' },
            { label: 'Projects', href: '#work' },
            { label: 'Journey', href: '#journey' },
            { label: 'Credentials', href: '#credentials' },
            { label: 'Contact', href: '#contact' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'nav-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <span className="availability">
            <i /> Open for 2027 internships
          </span>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <section className="hero section snap-section" id="top">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">ISAIAH ANDREI NODA · FULL-STACK BUILDER</p>
          <h1 aria-label="I turn complex workflows into clear products.">
            <span>I turn complex</span>
            <span>workflows into</span>
            <span className="hero-accent">clear products.</span>
          </h1>
          <p className="hero-lead">
            BSIT student, project leader, and hands-on developer building mobile,
            web, desktop, database, and real-time systems from architecture to deployment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#featured-title">
              Explore my work <span>↓</span>
            </a>
            <a className="button button-ghost" href="/documents/Isaiah_Andrei_Noda_Detailed_CV.pdf" target="_blank">
              Detailed CV <ArrowIcon />
            </a>
          </div>
          <div className="hero-meta">
            <span>San Pedro, Laguna</span>
            <span>Mapúa MCL · BSIT 2028</span>
          </div>
          <a className="scroll-cue" href="#featured-title">
            <span>Scroll to explore</span>
            <i aria-hidden="true">↓</i>
          </a>
        </div>

        <aside
          ref={heroCardRef}
          className="hero-card"
          data-reveal
          style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
        >
          <div className="portrait-frame">
            <img src="/profile.jpg" alt="Isaiah Andrei Noda" />
            <span className="portrait-index">01</span>
          </div>
          <div className="hero-card-copy">
            <p>Currently focused on</p>
            <strong>Full-stack mobile systems</strong>
            <span>.NET MAUI · ASP.NET Core · SQL · SignalR · Cloud deployment</span>
          </div>
          <div className="hero-stats">
            <div>
              <strong><AnimatedCounter value={9} /></strong>
              <span>projects</span>
            </div>
            <div>
              <strong><AnimatedCounter value={5} /></strong>
              <span>certificates</span>
            </div>
          </div>
        </aside>
      </section>

      <div className="ticker" aria-label="Technical specialties" data-reveal>
        <div>
          <span>FULL-STACK DEVELOPMENT</span><i>✦</i>
          <span>MOBILE ENGINEERING</span><i>✦</i>
          <span>REAL-TIME SYSTEMS</span><i>✦</i>
          <span>DATABASE DESIGN</span><i>✦</i>
          <span>PROJECT LEADERSHIP</span><i>✦</i>
          <span>CLOUD DEPLOYMENT</span><i>✦</i>
        </div>
      </div>

      <section className="section featured snap-section" aria-labelledby="featured-title">
        <div className="section-heading" data-reveal="left">
          <div>
            <p className="eyebrow">SELECTED CASE STUDIES</p>
            <h2 id="featured-title">Built to solve real problems.</h2>
          </div>
          <p>
            Three team-led systems spanning mobile service delivery, nonprofit
            storytelling, and live sports operations.
          </p>
        </div>

        <div className="featured-grid">
          {projects.filter(p => p.featured).map((project, index) => (
            <button
              key={project.id}
              ref={el => { featuredRefs.current[index] = el; }}
              className={`featured-card featured-card-${index + 1}`}
              style={{
                '--accent': project.accent,
                '--reveal-delay': `${index * 90}ms`,
              } as React.CSSProperties}
              onClick={(e) => {
                modalOriginRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
                setSelectedProject(project);
              }}
              type="button"
              data-reveal
            >
              <div className="featured-media">
                <ProjectGradient project={project} />
                <span className="image-note">{project.previewNote}</span>
              </div>
              <div className="featured-body">
                <span className="project-number">0{index + 1}</span>
                <div>
                  <p>{project.category} · {project.year}</p>
                  <h3>{project.shortTitle}</h3>
                  <span>{project.summary}</span>
                </div>
                <span className="round-arrow" aria-hidden="true">↗</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section project-explorer snap-section" id="work">
        <div className="section-heading explorer-heading" data-reveal="right">
          <div>
            <p className="eyebrow">PROJECT EXPLORER</p>
            <h2>Every build tells a story.</h2>
          </div>
          <p>
            Filter the portfolio, open a project, and explore the role,
            technology, features, and repository behind it.
          </p>
        </div>

        <div className="project-tools" data-reveal="scale">
          <div className="filter-row" aria-label="Filter projects">
            {categories.map(category => (
              <button
                key={category}
                className={activeCategory === category ? "filter-active" : ""}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="project-search">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search tech or project"
            />
          </label>
        </div>

        <div className="project-count" aria-live="polite">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {filteredProjects.length ? (
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                ref={el => { projectRefs.current[index] = el; }}
                className="project-card"
                style={{
                  '--accent': project.accent,
                  '--reveal-delay': `${(index % 3) * 80}ms`,
                } as React.CSSProperties}
                data-reveal
              >
                <button
                  className="project-card-button"
                  type="button"
                  onClick={(e) => {
                    modalOriginRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
                    setSelectedProject(project);
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <div className={`project-image project-image-${project.id}`}>
                    <ProjectGradient project={project} />
                    <span>{project.previewNote}</span>
                  </div>
                  <div className="project-card-content">
                    <div className="project-card-meta">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tech-preview">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech}>{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span>+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    <div className="project-card-footer">
                      <span>{project.role}</span>
                      <strong>Open case study ↗</strong>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>No matching projects yet.</h3>
            <p>Try another category or a broader search term.</p>
            <button type="button" onClick={() => { setQuery(""); setActiveCategory("All"); }}>
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="section skills-section snap-section">
        <div className="section-heading" data-reveal="scale">
          <div>
            <p className="eyebrow">TECHNICAL TOOLKIT</p>
            <h2>A stack built through projects.</h2>
          </div>
          <p>Tools are grouped by how I use them—not just listed as keywords.</p>
        </div>
        <div className="skills-grid">
          {[
            { title: "Application", mark: "APP", pct: 92, skills: ["C#",".NET MAUI","ASP.NET Core","Blazor","JavaScript","Node.js","Python","VB.NET"] },
            { title: "Data", mark: "DB", pct: 88, skills: ["SQL Server","Azure SQL","MySQL","Oracle","Microsoft Access","Entity Framework Core"] },
            { title: "Connected systems", mark: "API", pct: 85, skills: ["REST APIs","SignalR","JWT","Google Maps","PayMongo","Cloudinary","SendGrid"] },
            { title: "Delivery", mark: "OPS", pct: 90, skills: ["Git & GitHub","Cloud deployment","System analysis","Testing","Technical documentation","Project leadership"] },
          ].map((group, index) => (
            <article
              key={group.title}
              data-reveal="scale"
              style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties}
            >
              <SkillRing pct={group.pct} label={group.mark} />
              <span className="skill-mark" style={{ display: 'none' }}>{group.mark}</span>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section journey snap-section" id="journey">
        <div className="section-heading" data-reveal="left">
          <div>
            <p className="eyebrow">EDUCATION & LEADERSHIP</p>
            <h2>Learning in public. Leading in practice.</h2>
          </div>
        </div>
        <div className="journey-layout">
          <div className="timeline">
            <article data-reveal>
              <span className="timeline-date">2024 — 2028</span>
              <div>
                <p>Mapúa Malayan Colleges Laguna</p>
                <h3>Bachelor of Science in Information Technology</h3>
                <ul>
                  <li>Full Academic Scholarship recipient</li>
                  <li>C# Programming Competition participant</li>
                </ul>
              </div>
            </article>
            <article data-reveal style={{ '--reveal-delay': '90ms' } as React.CSSProperties}>
              <span className="timeline-date">2020 — 2022</span>
              <div>
                <p>Lyceum of Alabang</p>
                <h3>Senior High School · TVL–ICT</h3>
                <ul>
                  <li>Graduated With Highest Honors</li>
                  <li>Built early desktop database systems</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="leadership-panel" data-reveal style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
            <span className="panel-label">CURRENTLY</span>
            <h3>President, JISSA</h3>
            <p>Junior Information Systems Security Association · AY 2026–2027</p>
            <ul>
              <li>Leads the executive board and organization-wide initiatives.</li>
              <li>Oversees academic programs, technical events, and engagement.</li>
              <li>Coordinates faculty advisers, student leaders, and partnerships.</li>
            </ul>
            <div className="leadership-history">
              <span>Previously</span>
              <p>Research Chair · JISSA · AY 2025–2026</p>
              <p>Committee roles · CCIS and Supreme Student Councils</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section credentials snap-section" id="credentials">
        <div className="section-heading" data-reveal="right">
          <div>
            <p className="eyebrow">CONTINUOUS LEARNING</p>
            <h2>Credentials with context.</h2>
          </div>
          <p>Coursework that supports the project work: data, databases, responsible technology, communication, and delivery.</p>
        </div>
        <div className="certificate-list">
          {certificates.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ '--reveal-delay': `${index * 55}ms` } as React.CSSProperties}
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <time>{cert.date}</time>
              <strong>Verify <ArrowIcon /></strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section contact snap-section" id="contact" data-reveal="zoom">
        <div className="contact-aura" aria-hidden="true" />
        <div className="contact-wordmark" aria-hidden="true">CONNECT</div>
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>
          Have an internship,
          <br />
          project, or idea?
        </h2>
        <p>
          I&rsquo;m planning for an IT or software-development internship beginning
          August 2027 and I&rsquo;m always open to thoughtful technical collaboration.
        </p>
        <a className="contact-email" href="mailto:isaiahandreinoda@gmail.com">
          isaiahandreinoda@gmail.com <ArrowIcon />
        </a>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/isaiah-andrei-noda-6a3b66292/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          <a href="https://github.com/Soyaaaa081305" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          <a href="https://ph.jobstreet.com/profiles/isaiahandrei-noda-c648251dlv" target="_blank" rel="noreferrer">JobStreet <ArrowIcon /></a>
          <a href="/documents/Isaiah_Andrei_Noda_Detailed_CV.pdf" target="_blank">Résumé <ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <a className="monogram" href="#top">IA<span>.</span></a>
        <p>Designed and built for the web · © 2026 Isaiah Andrei Noda</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onMouseDown={e => { if (e.currentTarget === e.target) setSelectedProject(null); }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            style={{
              '--accent': selectedProject.accent,
            } as React.CSSProperties}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              autoFocus
            >
              Close ×
            </button>
            <div className={`modal-media project-image-${selectedProject.id}`}>
              <ProjectGradient project={selectedProject} />
              <span>{selectedProject.previewNote}</span>
            </div>
            <div className="modal-content">
              <div className="modal-kicker">
                <span>{selectedProject.category}</span>
                <span>{selectedProject.year}</span>
              </div>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p className="modal-role">{selectedProject.role}</p>
              <p className="modal-summary">{selectedProject.summary}</p>
              <p>{selectedProject.detail}</p>
              <div className="modal-columns">
                <div>
                  <h3>Notable features</h3>
                  <ul>
                    {selectedProject.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <h3>Technology</h3>
                  <div className="modal-tech">
                    {selectedProject.technologies.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
              {selectedProject.repo ? (
                <a className="button button-primary modal-link" href={selectedProject.repo} target="_blank" rel="noreferrer">
                  View repository <ArrowIcon />
                </a>
              ) : (
                <span className="private-note">Private repository · Details available on request</span>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
