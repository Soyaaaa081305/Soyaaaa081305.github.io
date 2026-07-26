"use client";

import { useEffect, useMemo, useState } from "react";

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

const projectPlaceholder = "/projects/project-placeholder.jpeg";
const projectPlaceholderAlt =
  "Temporary project preview placeholder featuring a thoughtful monkey";
const projectPlaceholderNote =
  "Temporary preview — project screenshot coming soon";

const projects: Project[] = [
  {
    id: "bikemate",
    title: "BikeMate Service Platform",
    shortTitle: "BikeMate",
    category: "Full-stack",
    year: "2026",
    role: "Project Leader · Main Programmer",
    summary:
      "A connected mobile service platform that helps cyclists find mechanics and bike shops, book repairs, request emergency help, and follow service progress in real time.",
    detail:
      "I led the architecture, database design, API development, real-time workflows, cloud integration, and team coordination across customer, technician, shop, and administrator experiences.",
    technologies: [
      ".NET MAUI",
      "ASP.NET Core",
      "Azure SQL",
      "EF Core",
      "SignalR",
      "Google Maps",
      "PayMongo",
      "Cloudinary",
    ],
    features: [
      "Live location-aware service matching",
      "Emergency beacon and SOS notifications",
      "Real-time messaging and job updates",
      "Online payments and transaction verification",
      "Customer, technician, shop, and admin workflows",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/bikemate-service-platform",
    accent: "#8fff5a",
    featured: true,
    previewNote: projectPlaceholderNote,
  },
  {
    id: "mary-mother",
    title: "Mary Mother of Mercy Legacy Platform",
    shortTitle: "Mary Mother of Mercy",
    category: "Full-stack",
    year: "2026",
    role: "Project Leader · Main Programmer",
    summary:
      "A public storytelling website, content management system, and donation platform for Mary Mother of Mercy Home for the Elderly and Abandoned Foundation.",
    detail:
      "The platform preserves the organization’s history while giving administrators practical tools for stories, events, media, donations, messages, and website content.",
    technologies: [
      "Node.js",
      "Express",
      "EJS",
      "MySQL",
      "Cloudinary",
      "PayMongo",
      "SendGrid",
      "Render",
    ],
    features: [
      "Public legacy and storytelling website",
      "Secure content management dashboard",
      "Donation checkout and payment tracking",
      "Events, galleries, videos, and participation requests",
      "Responsive cloud-ready architecture",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/mary-mother-mercy-legacy-website",
    accent: "#67e8f9",
    featured: true,
    previewNote: projectPlaceholderNote,
  },
  {
    id: "smash-it",
    title: "Smash-It Sports Reservation System",
    shortTitle: "Smash-It",
    category: "Web",
    year: "2026",
    role: "Project Leader · Main Programmer",
    summary:
      "A sports facility reservation and queue-management system for badminton and pickleball courts, with scheduling, payments, and live court updates.",
    detail:
      "I designed the reservation workflow, queue logic, database structure, real-time synchronization, payment integration, responsive interface, and team development process.",
    technologies: [
      "ASP.NET Web Forms",
      "C#",
      "SQL Server",
      "SignalR",
      "PayMongo",
      "Bootstrap",
    ],
    features: [
      "Court scheduling and reservations",
      "Live queue and availability updates",
      "Payment confirmation workflows",
      "Admin controls and user management",
      "History and operational reporting",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/programmerlia/smashitFINAL",
    accent: "#f0abfc",
    featured: true,
    previewNote: projectPlaceholderNote,
  },
  {
    id: "calorie-tracker",
    title: "Calorie Tracker",
    shortTitle: "Calorie Tracker",
    category: "Mobile",
    year: "2026",
    role: "Full-stack Mobile Developer",
    summary:
      "A nutrition and fitness tracker that connects a .NET MAUI Android experience to an ASP.NET Core API and Oracle Database.",
    detail:
      "The system supports account flows, nutrition records, daily calorie summaries, macronutrients, profile goals, audit logs, and food-photo capture.",
    technologies: [
      ".NET MAUI",
      "ASP.NET Core",
      "Oracle Database",
      "REST APIs",
      "C#",
      "SMTP OTP",
    ],
    features: [
      "Food and calorie-log CRUD",
      "Daily calorie and macro summaries",
      "Profile and fitness-goal management",
      "Oracle triggers and audit records",
      "Email OTP registration workflows",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/calorie-tracker",
    accent: "#fb7185",
    previewNote: projectPlaceholderNote,
  },
  {
    id: "gerodias",
    title: "Gerodias Clinic Management System",
    shortTitle: "Gerodias Clinic",
    category: "Desktop",
    year: "2024",
    role: "Project Leader · Main Programmer",
    summary:
      "A Windows desktop system for day-to-day clinic operations, including appointments, inventory, transactions, logs, and staff workflows.",
    detail:
      "Built as a senior-high-school capstone, the project translated clinic processes into a structured database and practical interfaces for healthcare staff.",
    technologies: ["VB.NET", "Windows Forms", "SQL Server", ".NET Framework"],
    features: [
      "Patient and appointment management",
      "Inventory and transaction workflows",
      "Searchable operational records",
      "Staff access and activity logs",
      "Printable clinic reports",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/gerodias-clinic-management-system",
    accent: "#60a5fa",
    previewNote: projectPlaceholderNote,
  },
  {
    id: "lamarea",
    title: "La Marea Guest Management System",
    shortTitle: "La Marea GMS",
    category: "Desktop",
    year: "2023",
    role: "Project Leader · Main Programmer",
    summary:
      "A visitor and security-monitoring system for La Marea Executive Subdivision, designed to improve guest logging, registration, and reporting.",
    detail:
      "I designed the Microsoft Access data model, developed guest and employee workflows, added search and reporting tools, and led the documentation and final presentation.",
    technologies: ["VB.NET", "Windows Forms", "Microsoft Access", "OLE DB"],
    features: [
      "Guest and employee registration",
      "Reservation and visitor history",
      "Security search and reporting",
      "Inventory and administrative tools",
      "Privacy-conscious portfolio packaging",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/lamarea-guest-management-system",
    accent: "#fbbf24",
    previewNote: projectPlaceholderNote,
  },
  {
    id: "avl-tree",
    title: "AVL Tree Visual Study",
    shortTitle: "AVL Tree",
    category: "Algorithms",
    year: "2025",
    role: "CS102-1L · CIS201",
    summary:
      "A Python implementation of an AVL tree that demonstrates self-balancing binary-search-tree operations and rotation logic.",
    detail:
      "The project documents insertion, height tracking, balance factors, and left/right rotations through source code, a system flowchart, and formal course documentation.",
    technologies: ["Python", "Data Structures", "AVL Trees", "Algorithms"],
    features: [
      "Self-balancing insertion",
      "Left and right rotations",
      "Balance-factor calculations",
      "Structured algorithm flowchart",
      "Course documentation",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/avl-tree-cs102-1l-cis201",
    accent: "#a78bfa",
    previewNote: projectPlaceholderNote,
  },
  {
    id: "tower-of-hanoi",
    title: "Towers of Hanoi",
    shortTitle: "Towers of Hanoi",
    category: "Algorithms",
    year: "2025",
    role: "CS102-1L · CIS201",
    summary:
      "An interactive Python interpretation of the Towers of Hanoi puzzle built around stacks, linked lists, and rule-based move validation.",
    detail:
      "Players choose a puzzle size, move disks between three towers, receive immediate validation, and complete the classic puzzle through a terminal interface.",
    technologies: ["Python", "Stacks", "Linked Lists", "Input Validation"],
    features: [
      "Three linked-list stack structures",
      "Configurable three-to-ten-disk games",
      "Invalid-move protection",
      "Terminal-based interaction",
      "Flowcharts and development documentation",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    repo: "https://github.com/Soyaaaa081305/tower-of-hanoi-cs102-1l-cis201",
    accent: "#2dd4bf",
    previewNote: projectPlaceholderNote,
  },
  {
    id: "malaya-automation",
    title: "Malaya Organization Automation",
    shortTitle: "Malaya Automation",
    category: "Automation",
    year: "2025",
    role: "Automation Developer",
    summary:
      "Python and JavaScript tools that reduce repetitive organization work across rosters, forms, attendance, reports, and administrative messages.",
    detail:
      "The private toolkit transforms structured member data into reusable documents and streamlines recurring administrative workflows for the Malaya organization.",
    technologies: ["Python", "JavaScript", "PDF Automation", "Data Processing"],
    features: [
      "Roster-to-PDF generation",
      "Attendance processing",
      "Form and data organization",
      "Report generation",
      "Message and workflow automation",
    ],
    image: projectPlaceholder,
    imageAlt: projectPlaceholderAlt,
    accent: "#7dd3fc",
    private: true,
    previewNote: projectPlaceholderNote,
  },
];

const certificates = [
  {
    title: "Introduction to Project Management",
    issuer: "IBM",
    date: "June 2026",
    url: "https://coursera.org/share/1fe2bdc49677169fa6961f76faee1d5e",
  },
  {
    title: "Ethics of Artificial Intelligence",
    issuer: "Politecnico di Milano",
    date: "April 2026",
    url: "https://coursera.org/share/b79f0935f8e0355d0679d58b9a691782",
  },
  {
    title: "Introduction to Databases",
    issuer: "Meta",
    date: "March 2026",
    url: "https://coursera.org/share/d8d5304af1bebacd9a9a7055e42fb09f",
  },
  {
    title: "Data Literacy — Why It Matters",
    issuer: "University of Milan",
    date: "June 2025",
    url: "https://coursera.org/share/13c01f2fdb7ea1c550e96133cbf2e127",
  },
  {
    title: "Grammar and Punctuation",
    issuer: "University of California, Irvine",
    date: "May 2025",
    url: "https://coursera.org/share/73747edf3c56297831d1fda10d921e6d",
  },
];

const categories = [
  "All",
  "Full-stack",
  "Web",
  "Mobile",
  "Desktop",
  "Algorithms",
  "Automation",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const categoryMatches =
        activeCategory === "All" || project.category === activeCategory;
      const searchMatches =
        !normalized ||
        [
          project.title,
          project.summary,
          project.category,
          ...project.technologies,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return categoryMatches && searchMatches;
    });
  }, [activeCategory, query]);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const updateSpotlight = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY}px`);
  };

  return (
    <main className="site-shell" onPointerMove={updateSpotlight}>
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Back to top">
          IA<span>.</span>
        </a>
        <nav className={menuOpen ? "nav-links nav-links-open" : "nav-links"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            Journey
          </a>
          <a href="#credentials" onClick={() => setMenuOpen(false)}>
            Credentials
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
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
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">ISAIAH ANDREI NODA · FULL-STACK BUILDER</p>
          <h1>
            I turn complex
            <br />
            workflows into
            <br />
            <em>clear products.</em>
          </h1>
          <p className="hero-lead">
            BSIT student, project leader, and hands-on developer building mobile,
            web, desktop, database, and real-time systems from architecture to
            deployment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span>↓</span>
            </a>
            <a
              className="button button-ghost"
              href="/documents/Isaiah_Andrei_Noda_Detailed_CV.pdf"
              target="_blank"
            >
              Detailed CV <ArrowIcon />
            </a>
          </div>
          <div className="hero-meta">
            <span>San Pedro, Laguna</span>
            <span>Mapúa MCL · BSIT 2028</span>
          </div>
        </div>

        <aside className="hero-card">
          <div className="portrait-frame">
            <img src="/profile.jpg" alt="Isaiah Andrei Noda" />
            <span className="portrait-index">01</span>
          </div>
          <div className="hero-card-copy">
            <p>Currently focused on</p>
            <strong>Full-stack mobile systems</strong>
            <span>
              .NET MAUI · ASP.NET Core · SQL · SignalR · Cloud deployment
            </span>
          </div>
          <div className="hero-stats">
            <div>
              <strong>9</strong>
              <span>projects</span>
            </div>
            <div>
              <strong>5</strong>
              <span>certificates</span>
            </div>
          </div>
        </aside>
      </section>

      <div className="ticker" aria-label="Technical specialties">
        <div>
          <span>FULL-STACK DEVELOPMENT</span>
          <i>✦</i>
          <span>MOBILE ENGINEERING</span>
          <i>✦</i>
          <span>REAL-TIME SYSTEMS</span>
          <i>✦</i>
          <span>DATABASE DESIGN</span>
          <i>✦</i>
          <span>PROJECT LEADERSHIP</span>
          <i>✦</i>
          <span>CLOUD DEPLOYMENT</span>
          <i>✦</i>
        </div>
      </div>

      <section className="section featured" aria-labelledby="featured-title">
        <div className="section-heading">
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
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <button
                className={`featured-card featured-card-${index + 1}`}
                style={{ "--accent": project.accent } as React.CSSProperties}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                type="button"
              >
                <div className="featured-media">
                  <img src={project.image} alt={project.imageAlt} />
                  <span className="image-note">{project.previewNote}</span>
                </div>
                <div className="featured-body">
                  <span className="project-number">0{index + 1}</span>
                  <div>
                    <p>
                      {project.category} · {project.year}
                    </p>
                    <h3>{project.shortTitle}</h3>
                    <span>{project.summary}</span>
                  </div>
                  <span className="round-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </button>
            ))}
        </div>
      </section>

      <section className="section project-explorer" id="work">
        <div className="section-heading explorer-heading">
          <div>
            <p className="eyebrow">PROJECT EXPLORER</p>
            <h2>Every build tells a story.</h2>
          </div>
          <p>
            Filter the portfolio, open a project, and explore the role,
            technology, features, and repository behind it.
          </p>
        </div>

        <div className="project-tools">
          <div className="filter-row" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "filter-active" : ""}
                key={category}
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
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tech or project"
            />
          </label>
        </div>

        <div className="project-count" aria-live="polite">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {filteredProjects.length ? (
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article
                className="project-card"
                style={{ "--accent": project.accent } as React.CSSProperties}
                key={project.id}
              >
                <button
                  className="project-card-button"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  <div className={`project-image project-image-${project.id}`}>
                    <img src={project.image} alt={project.imageAlt} />
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
                      {project.technologies.slice(0, 3).map((tech) => (
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
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section className="section skills-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TECHNICAL TOOLKIT</p>
            <h2>A stack built through projects.</h2>
          </div>
          <p>
            Tools are grouped by how I use them—not just listed as keywords.
          </p>
        </div>
        <div className="skills-grid">
          {[
            {
              title: "Application",
              mark: "APP",
              skills: [
                "C#",
                ".NET MAUI",
                "ASP.NET Core",
                "Blazor",
                "JavaScript",
                "Node.js",
                "Python",
                "VB.NET",
              ],
            },
            {
              title: "Data",
              mark: "DB",
              skills: [
                "SQL Server",
                "Azure SQL",
                "MySQL",
                "Oracle",
                "Microsoft Access",
                "Entity Framework Core",
              ],
            },
            {
              title: "Connected systems",
              mark: "API",
              skills: [
                "REST APIs",
                "SignalR",
                "JWT",
                "Google Maps",
                "PayMongo",
                "Cloudinary",
                "SendGrid",
              ],
            },
            {
              title: "Delivery",
              mark: "OPS",
              skills: [
                "Git & GitHub",
                "Cloud deployment",
                "System analysis",
                "Testing",
                "Technical documentation",
                "Project leadership",
              ],
            },
          ].map((group) => (
            <article key={group.title}>
              <span className="skill-mark">{group.mark}</span>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section journey" id="journey">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EDUCATION & LEADERSHIP</p>
            <h2>Learning in public. Leading in practice.</h2>
          </div>
        </div>
        <div className="journey-layout">
          <div className="timeline">
            <article>
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
            <article>
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
          <div className="leadership-panel">
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

      <section className="section credentials" id="credentials">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CONTINUOUS LEARNING</p>
            <h2>Credentials with context.</h2>
          </div>
          <p>
            Coursework that supports the project work: data, databases,
            responsible technology, communication, and delivery.
          </p>
        </div>
        <div className="certificate-list">
          {certificates.map((certificate, index) => (
            <a
              key={certificate.title}
              href={certificate.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>
              <time>{certificate.date}</time>
              <strong>
                Verify <ArrowIcon />
              </strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-orbit" aria-hidden="true">
          <span>LET’S BUILD SOMETHING USEFUL · </span>
        </div>
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>
          Have an internship,
          <br />
          project, or idea?
        </h2>
        <p>
          I’m planning for an IT or software-development internship beginning
          August 2027 and I’m always open to thoughtful technical collaboration.
        </p>
        <a className="contact-email" href="mailto:isaiahandreinoda@gmail.com">
          isaiahandreinoda@gmail.com <ArrowIcon />
        </a>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/isaiah-andrei-noda-6a3b66292/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowIcon />
          </a>
          <a
            href="https://github.com/Soyaaaa081305"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>
          <a
            href="https://ph.jobstreet.com/profiles/isaiahandrei-noda-c648251dlv"
            target="_blank"
            rel="noreferrer"
          >
            JobStreet <ArrowIcon />
          </a>
          <a
            href="/documents/Isaiah_Andrei_Noda_Detailed_CV.pdf"
            target="_blank"
          >
            Résumé <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <a className="monogram" href="#top">
          IA<span>.</span>
        </a>
        <p>Designed and built for the web · © 2026 Isaiah Andrei Noda</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedProject(null);
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            style={
              { "--accent": selectedProject.accent } as React.CSSProperties
            }
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
              <img src={selectedProject.image} alt={selectedProject.imageAlt} />
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
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Technology</h3>
                  <div className="modal-tech">
                    {selectedProject.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
              {selectedProject.repo ? (
                <a
                  className="button button-primary modal-link"
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <ArrowIcon />
                </a>
              ) : (
                <span className="private-note">
                  Private repository · Details available on request
                </span>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
