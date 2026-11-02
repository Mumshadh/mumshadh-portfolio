
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
            Open to Software Engineering Internships
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
            Building ideas
            <br />
            into <span>digital reality.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm a Software Engineering undergraduate passionate about
            developing meaningful applications and creating thoughtful
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
            <div className="visual-role">SOFTWARE ENGINEER</div>
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
    </main>
  );
}

export default App;
