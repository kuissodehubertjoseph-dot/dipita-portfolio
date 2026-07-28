import { useLanguage } from "../../context/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Accueil.css";

function Accueil() {
  const { t } = useLanguage();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="accueil">
      <div className="accueil-wrapper">
        <div className="accueil-left reveal-left" ref={leftRef}>
          <p className="accueil-role">{t.accueil.role}</p>
          <h1 className="accueil-lastname">{t.accueil.lastName}</h1>
          <h2 className="accueil-firstname">{t.accueil.firstName}</h2>
          <p className="accueil-description">
            {t.accueil.description}
          </p>
          <div className="accueil-buttons">
            <button
              className="btn btn-contact"
              onClick={() => handleScroll("contact")}
            >
              {t.accueil.contactBtn}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href={process.env.PUBLIC_URL + "/cv.html"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cv"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              {t.accueil.cvBtn}
            </a>
          </div>
        </div>

        <div className="accueil-right reveal-right" ref={rightRef}>
          <div className="accueil-photo">
            <img
              src={process.env.PUBLIC_URL + "/photo.jpg"}
              alt="Kuissode Hubert Joseph"
            />
          </div>
          <div className="accueil-bars">
            <div className="bar bar-orange"></div>
            <div className="bar bar-yellow"></div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/229146286379"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="#fff" width="28" height="28">
          <path d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.47.657 4.878 1.904 6.99L2 30l7.194-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm0 25.6a11.56 11.56 0 0 1-5.89-1.61l-.422-.25-4.374 1.146 1.166-4.262-.276-.438A11.52 11.52 0 0 1 4.44 16.004c0-6.382 5.192-11.574 11.574-11.574 6.382 0 11.574 5.192 11.574 11.574-.01 6.382-5.2 11.574-11.584 11.598zm6.348-8.67c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.554-.174-.786.174-.232.348-.902 1.134-1.106 1.368-.204.232-.408.26-.756.088-.348-.174-1.47-.542-2.8-1.728-1.036-.922-1.734-2.062-1.938-2.41-.204-.348-.022-.536.154-.71.158-.156.348-.408.522-.612.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.786-1.894-1.076-2.594-.284-.68-.572-.588-.786-.6-.204-.01-.436-.012-.67-.012-.232 0-.61.088-.93.436-.32.348-1.222 1.194-1.222 2.914s1.252 3.38 1.426 3.612c.174.232 2.462 3.762 5.966 5.274.834.36 1.484.576 1.992.736.838.266 1.6.228 2.202.138.672-.1 2.062-.844 2.352-1.66.29-.814.29-1.514.204-1.66-.088-.146-.32-.232-.67-.408z"/>
        </svg>
      </a>
    </section>
  );
}

export default Accueil;
