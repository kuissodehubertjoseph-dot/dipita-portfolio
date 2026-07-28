import { useLanguage } from "../../context/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./APropos.css";

function APropos() {
  const { t } = useLanguage();
  const titleRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="apropos" className="apropos">
      <div className="reveal" ref={titleRef}>
        <h2 className="section-title">
          {t.apropos.title}
          <span className="title-underline"></span>
        </h2>
      </div>

      <div className="apropos-wrapper">
        <div className="apropos-left reveal-left" ref={leftRef}>
          <p className="apropos-description">{t.apropos.description}</p>
          <ul className="apropos-highlights">
            {t.apropos.highlights.map((item, index) => (
              <li key={index} className="highlight-item">
                <span className="highlight-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="highlight-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="apropos-right reveal-right" ref={rightRef}>
          <div className="apropos-image">
            <img
              src={process.env.PUBLIC_URL + "/apropos.jpg"}
              alt="À propos"
            />
          </div>
          <div className="apropos-badge">
            <span className="badge-number">{t.apropos.statsNumber}</span>
            <span className="badge-label">{t.apropos.statsLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default APropos;
