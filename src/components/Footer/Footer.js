import { useLanguage } from "../../context/LanguageContext";
import { WHATSAPP_URL, LINKEDIN_URL } from "../../config";
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
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="footer-social-link footer-social-whatsapp"
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.47.657 4.878 1.904 6.99L2 30l7.194-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm0 25.6a11.56 11.56 0 0 1-5.89-1.61l-.422-.25-4.374 1.146 1.166-4.262-.276-.438A11.52 11.52 0 0 1 4.44 16.004c0-6.382 5.192-11.574 11.574-11.574 6.382 0 11.574 5.192 11.574 11.574-.01 6.382-5.2 11.574-11.584 11.598zm6.348-8.67c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.554-.174-.786.174-.232.348-.902 1.134-1.106 1.368-.204.232-.408.26-.756.088-.348-.174-1.47-.542-2.8-1.728-1.036-.922-1.734-2.062-1.938-2.41-.204-.348-.022-.536.154-.71.158-.156.348-.408.522-.612.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.786-1.894-1.076-2.594-.284-.68-.572-.588-.786-.6-.204-.01-.436-.012-.67-.012-.232 0-.61.088-.93.436-.32.348-1.222 1.194-1.222 2.914s1.252 3.38 1.426 3.612c.174.232 2.462 3.762 5.966 5.274.834.36 1.484.576 1.992.736.838.266 1.6.228 2.202.138.672-.1 2.062-.844 2.352-1.66.29-.814.29-1.514.204-1.66-.088-.146-.32-.232-.67-.408z"/>
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
