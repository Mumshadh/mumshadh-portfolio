
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          M<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot"></span>
            Available for Software Engineering Internship Opportunities
          </motion.div>

          <motion.p
            className="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            HELLO, I'M MUMSHADH DEENOORI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Turning ideas
            <br />
            into <span>useful software.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm a Software Engineering undergraduate at the Open University of Sri Lanka, interested in application development, databases, and networking.
            I enjoy turning ideas into practical applications and continuously improving my skills through hands-on projects.
            digital experiences.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/Mumshadh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/mumshadh-deenoori-a26651315/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={20} />
            </a>

            <span className="location">Based in Sri Lanka</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="visual-glow"></div>
          <div className="visual-card">
            <span className="code-symbol">{"<"}</span>
            <div className="visual-name">MUMSHADH</div>
            <div className="visual-role">SOFTWARE ENGINEERING UNDERGRADUATE</div>
            <div className="visual-line"></div>
            <div className="visual-code">
              <span>const</span> passion = "building";
              <br />
              <span>const</span> ideas = "creating";
              <br />
              <span>return</span> innovation;
            </div>
            <div className="visual-bottom">
              <span>DESIGN · DEVELOP · CREATE</span>
              <span className="visual-dot"></span>
            </div>
          </div>
          <div className="floating-label">01 / DEVELOPER</div>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <ArrowDown size={16} /> SCROLL TO EXPLORE
        </a>

        <div className="hero-index">PORTFOLIO — 2026</div>
      </section>

      {/* About Section */}
<section className="about-section" id="about">
  <div className="section-heading">
    <span className="section-label">GET TO KNOW ME</span>
    <h2>About <span>Me</span></h2>
  </div>

  <div className="about-content">
    <p>
      I'm Mumshadh Deenoori, a third-year Software Engineering
      undergraduate at the Open University of Sri Lanka.
    </p>

    <p>
      I'm interested in application development, databases, and
      networking. I enjoy exploring new technologies, designing
      user-friendly interfaces, and building practical software
      solutions through hands-on projects.
    </p>

    <p>
      I'm continuously developing my technical and problem-solving
      skills while preparing to begin my professional journey
      as a Software Engineering intern.
    </p>
  </div>
</section>

{/* Skills Section */}
<section className="skills-section" id="skills">
  <div className="section-heading">
    <span className="section-label">WHAT I WORK WITH</span>
    <h2>My <span>Skills</span></h2>
    <p>Technologies and tools I've explored through learning and projects.</p>
  </div>

  <div className="skills-grid">
    <div className="skill-card">
      <h3>Programming & Development</h3>
      <div className="skill-tags">
        <span>Java</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>React</span>
        <span>Android Development</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>Database Management</h3>
      <div className="skill-tags">
        <span>MySQL</span>
        <span>SQLite</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>Networking & Systems</h3>
      <div className="skill-tags">
        <span>Computer Networking</span>
        <span>Cisco Packet Tracer</span>
        <span>MQTT</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>Design & Tools</h3>
      <div className="skill-tags">
        <span>Figma</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Android Studio</span>
      </div>
    </div>
  </div>
</section>
{/* Projects Section */}
<section className="projects-section" id="projects">
  <div className="section-heading">
    <span className="section-label">MY WORK</span>
    <h2>Featured <span>Projects</span></h2>
    <p>A selection of projects I've developed and worked on.</p>
  </div>

  <div className="projects-grid">

    {/* CrewConnect */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-status">In Development</span>
      </div>

      <h3>CrewConnect</h3>
      <p>
        An Android application designed to connect aspiring filmmakers
        and creative professionals. It aims to help users find collaborators,
        create projects, share work, and discover equipment and locations.
      </p>

      <div className="project-tech">
        <span>Java</span>
        <span>Android</span>
        <span>SQLite</span>
        <span>UI/UX</span>
      </div>

      <a href="https://github.com/Mumshadh" target="_blank" rel="noreferrer">
        View on GitHub ↗
      </a>
    </div>

    {/* MiniMates */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-status completed">Completed</span>
      </div>

      <h3>MiniMates</h3>
      <p>
        A completed project that demonstrates my experience in
        application development, interface design, and translating
        ideas into a working software solution.
      </p>

      <div className="project-tech">
        <span>Application Development</span>
        <span>UI/UX</span>
      </div>

      <a href="https://github.com/Mumshadh/Mini-Mates" target="_blank" rel="noreferrer">
        View on GitHub ↗
      </a>
    </div>

  </div>
</section>
    </main>
  );
}

export default App;
