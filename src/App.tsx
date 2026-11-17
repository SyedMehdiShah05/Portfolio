import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const skills = [
  "Python",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "NLP Fundamentals",
  "Pandas",
  "NumPy",
  "Jupyter Notebook",
  "Data Visualization",
  "HTML",
  "CSS",
  "JavaScript",
];

const experiences = [
  {
    period: "Dec 2025 – Mar 2026",
    role: "Data Science Intern",
    company: "Arch Technology · Remote",
    description:
      "Completed a remote internship focused on Data Science, Machine Learning, AI, and NLP fundamentals. Practiced data preprocessing, data cleaning, exploratory data analysis, and model workflows using Python, Jupyter Notebook, Pandas, and NumPy.",
    icon: BrainCircuit,
  },
  {
    period: "May 2025 – Jul 2025",
    role: "Data Science Intern",
    company: "NovaXcelerate · On-campus",
    description:
      "Completed a three-month on-campus internship focused on data analysis, model training, and data visualization. Collaborated with peers on technical learning activities, problem-solving tasks, and decision making.",
    icon: BriefcaseBusiness,
  },
];

const learning = [
  {
    date: "May 2026",
    title: "Google AI Studio & Antigravity Tools",
    detail: "Workshop conducted by NUXUS Pakistan in collaboration with Hazara University.",
  },
  {
    date: "Apr 2026",
    title: "Entrepreneurship Journey",
    detail: "Seminar on entrepreneurship and the role of NIC Lahore, organized by HULT Prize HU.",
  },
  {
    date: "Jun 2024",
    title: "Blockchain Development",
    detail: "Workshop covering blockchain development with the Algorand Python SDK.",
  },
];

const certifications = [
  "What is Data Science & Artificial Intelligence · Coursera",
  "Python for AI, Data Science & Development · IBM",
  "HTML, CSS, and JavaScript for Web Developers · Coursera",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">SM</span>
          <span>Syed Mehdi Shah</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#learning" onClick={closeMenu}>Learning</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Computer Science undergraduate</p>
            <h1>Building useful things with <em>data &amp; intelligence.</em></h1>
            <p className="hero-text">
              I&apos;m Syed Mehdi Shah, a motivated Computer Science student focused on Data Science,
              Artificial Intelligence, and Machine Learning. I turn curiosity into practical skills,
              thoughtful analysis, and better solutions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="/cv.pdf" download>Download CV <Download size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16} /> Hazara University</span>
              <span><Sparkles size={16} /> Open to opportunities</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src="/profile.png" alt="Syed Mehdi Shah" />
              <div className="portrait-label">
                <span className="status-dot" />
                <span>Learning, building, growing</span>
              </div>
            </div>
            <div className="floating-card floating-card-top">
              <Code2 size={19} />
              <span>Python<br /><strong>Data workflows</strong></span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="number">01</span>
              <span>Curious<br /><strong>by default</strong></span>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-grid">
            <p className="section-kicker">01 / Profile</p>
            <div>
              <h2>Early-career technologist with a practical mindset.</h2>
              <p>
                Currently pursuing a BS in Computer Sciences with a focus on Data Science,
                Artificial Intelligence, and Machine Learning. I&apos;m developing analytical and
                problem-solving skills through academic projects, internships, and hands-on learning.
              </p>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="about">
          <div className="section-heading">
            <p className="section-kicker">02 / Experience</p>
            <h2>Learning by doing.</h2>
            <p>Every experience has helped me connect fundamentals with real-world problem solving.</p>
          </div>
          <div className="experience-list" id="experience">
            {experiences.map((item) => {
              const Icon = item.icon;
              return (
                <article className="experience-card" key={item.company}>
                  <div className="experience-icon"><Icon size={21} /></div>
                  <div className="experience-body">
                    <p className="muted-label">{item.period}</p>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                    <p className="description">{item.description}</p>
                  </div>
                  <ChevronRight className="experience-arrow" size={20} />
                </article>
              );
            })}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap skills-grid">
            <div className="section-heading">
              <p className="section-kicker">03 / Toolkit</p>
              <h2>Tools I use to explore ideas.</h2>
              <p>
                A growing toolkit built around Python, analytical thinking, and the fundamentals
                that make intelligent systems useful.
              </p>
            </div>
            <div className="skill-cloud">
              {skills.map((skill, index) => <span className={index < 4 ? "skill-pill skill-pill-accent" : "skill-pill"} key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="learning">
          <div className="learning-grid">
            <div className="section-heading">
              <p className="section-kicker">04 / Continuous learning</p>
              <h2>Always making room for the next lesson.</h2>
              <p>Workshops, seminars, and certifications that keep my perspective broad and my foundation strong.</p>
            </div>
            <div className="learning-column">
              {learning.map((item) => (
                <article className="learning-item" key={item.title}>
                  <div className="learning-date"><CalendarDays size={15} /> {item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="certification-panel">
            <div className="certification-heading"><GraduationCap size={22} /><span>Certifications</span></div>
            <div className="certification-list">
              {certifications.map((cert) => <span key={cert}>{cert}</span>)}
            </div>
          </div>
        </section>

        <section className="language-band">
          <div className="section-wrap language-grid">
            <div><p className="section-kicker">05 / Beyond code</p><h2>Communication matters.</h2></div>
            <div className="language-list">
              <span><Languages size={18} /> English <small>Basic</small></span>
              <span><Languages size={18} /> Urdu <small>Native</small></span>
              <span><Languages size={18} /> Balti <small>Native</small></span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <p className="section-kicker">06 / Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
            <p>Looking for opportunities to apply my skills, gain industry experience, and contribute to innovative real-world projects.</p>
            <div className="contact-links">
              <a href="mailto:mehdiiims05@gmail.com"><Mail size={18} /> mehdiiims05@gmail.com <ExternalLink size={15} /></a>
              <a href="tel:03488036361"><Phone size={18} /> 03488036361 <ExternalLink size={15} /></a>
              <a href="https://www.linkedin.com/in/syedmehdi" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ExternalLink size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} Syed Mehdi Shah</span>
        <span className="footer-note">Made with curiosity &amp; code</span>
        <a href="https://github.com/SyedMehdiShah05" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
      </footer>
    </div>
  );
}

export default App;
