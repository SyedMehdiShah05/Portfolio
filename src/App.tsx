import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Code2,
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
  "C / C++",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Pandas",
  "NumPy",
  "Matplotlib / Seaborn",
  "TensorFlow / Keras",
  "Scikit-Learn",
  "OpenCV",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "MongoDB",
  "Git & GitHub",
  "Google Colab",
  "Jupyter Notebook",
  "Data Structures & Algorithms",
];

const experiences = [
  {
    period: "18 Jul 2026 – 18 Sep 2026",
    role: "AI/ML Intern",
    company: "DEVNOX Solution · Abbottabad, Pakistan",
    description:
      "Completed a two-month internship covering Python programming, OOP, data analysis, exploratory data analysis, visualization, model training, and feature engineering. Built a School Management System and a weapon detection model using a YOLO dataset.",
    icon: BrainCircuit,
  },
  {
    period: "01 Jan 2026 – 01 Mar 2026",
    role: "Python Development Intern",
    company: "NovaXcelerate · Hazara University, Pakistan",
    description:
      "Completed a two-month on-campus internship focused on Python fundamentals, OOP, AI/ML development, and the tools and environments used to build machine learning projects.",
    icon: BriefcaseBusiness,
  },
];

const learning = [
  {
    date: "20–21 May",
    title: "Google AI Studio",
    detail: "One-day training on Google AI Studio through Google Developer Groups Islamabad and Nexus Pakistan at Hazara University.",
  },
  {
    date: "20–21 May",
    title: "Flutter App Development",
    detail: "One-day Flutter app development training offered by Nexus Pakistan.",
  },
  {
    date: "Workshop",
    title: "Blockchain Development",
    detail: "Workshop covering blockchain development using Algorand’s Python SDK.",
  },
  {
    date: "20–21 May",
    title: "Sustainable Development Goals",
    detail: "Training on mastering the SDGs by Skillistan and Nexus Pakistan.",
  },
  {
    date: "Seminar",
    title: "Entrepreneurial Journey",
    detail: "Virtual seminar on entrepreneurship and the role of NIC Lahore, organized by Hult Prize at Hazara University.",
  },
];

const certifications = [
  "Python for Data Science, AI & Development · Coursera",
  "Introduction to Artificial Intelligence (AI) · Coursera",
  "Foundations of Data Science · Coursera",
  "Artificial Intelligence using Python · DigiSkills",
  "AI for Everyone · Coursera",
  "What Is Data Science? · Coursera",
  "Supervised Machine Learning: Regression and Classification · Coursera",
  "Introduction to Computer and Office Productivity Software · Coursera",
  "Foundation of User Experience (UX) Design · Coursera",
  "HTML, CSS, and JavaScript for Web Developers · Coursera",
  "Build a Free Website with WordPress · Coursera",
  "Mastering HTML5: From Beginner to Advanced · Udemy",
  "Communication and Soft Skills · DigiSkills",
];

const projects = [
  {
    title: "CodeLab AI",
    detail: "AI-powered programming learning platform with interactive educational features.",
  },
  {
    title: "Crop Prediction System",
    detail: "Machine learning model that recommends suitable crops from soil and weather conditions.",
  },
  {
    title: "Healthcare EDA",
    detail: "Exploratory data analysis and patient health classification system.",
  },
  {
    title: "Titanic Survival Prediction",
    detail: "Machine learning classification project predicting passenger survival.",
  },
  {
    title: "Personal Portfolio Website",
    detail: "Responsive portfolio website showcasing technical skills and projects.",
  },
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
          <a href="#projects" onClick={closeMenu}>Projects</a>
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
              <a className="button button-quiet" href="#experience">Explore my experience <ChevronRight size={17} /></a>
              <a className="button button-quiet" href="/Syed%20Mehdi%20Shah%20CV" target="_blank" rel="noreferrer">View CV <ExternalLink size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16} /> Skardu, Pakistan</span>
              <span><GraduationCap size={16} /> Hazara University</span>
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
              <h2>Computer Science student focused on intelligent systems.</h2>
              <p>
                I&apos;m pursuing a BS in Computer Science at Hazara University with a 3.36/4.00 GPA.
                My interests include Artificial Intelligence, Machine Learning, and Computer Vision,
                with a focus on turning data and programming into practical solutions.
              </p>
              <div className="education-detail">
                <strong>Current FYP</strong>
                <span>A Computer Vision-Based Multi-Threat Detection System with Forensic Logging and Automated Alerts</span>
              </div>
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

        <section className="section-wrap content-section projects-section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">03 / Selected projects</p>
            <h2>Turning coursework into useful prototypes.</h2>
            <p>Projects that reflect my growing experience with Python, data analysis, and machine learning.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap skills-grid">
            <div className="section-heading">
              <p className="section-kicker">04 / Toolkit</p>
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
              <p className="section-kicker">05 / Continuous learning</p>
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
            <div><p className="section-kicker">06 / Beyond code</p><h2>Communication matters.</h2></div>
            <div className="language-list">
              <span><Languages size={18} /> English <small>Working proficiency</small></span>
              <span><Languages size={18} /> Urdu <small>Proficient</small></span>
              <span><Languages size={18} /> Balti <small>Native</small></span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <p className="section-kicker">07 / Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
            <p>Looking for opportunities to apply my skills, gain industry experience, and contribute to innovative real-world projects.</p>
            <div className="contact-links">
              <a href="mailto:syedmehdisha05@gmail.com"><Mail size={18} /> syedmehdisha05@gmail.com <ExternalLink size={15} /></a>
              <a href="tel:+923488036361"><Phone size={18} /> +92 348 8036361 <ExternalLink size={15} /></a>
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
