import { useLanguage } from "../../context/LanguageContext";
import "./Footer.css";

function Footer() {
  const { language } = useLanguage();

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = language === "fr"
    ? ["Accueil", "À propos", "Compétences", "Projets", "Contact"]
    : ["Home", "About", "Skills", "Projects", "Contact"];

  const ids = ["accueil", "apropos", "competences", "projets", "contact"];

  const copyright = language === "fr"
    ? "Tous droits réservés."
    : "All rights reserved.";

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#accueil" className="footer-logo" onClick={() => handleNavClick("accueil")}>
          KUISSODE<span className="dot">.</span>
        </a>

        <nav className="footer-links">
          {links.map((label, i) => (
            <a key={ids[i]} href={`#${ids[i]}`} onClick={() => handleNavClick(ids[i])}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/joseph-kuissode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KUISSODE. {copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
