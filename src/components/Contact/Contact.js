import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:kuissodehubertjoseph@gmail.com?subject=Contact de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const titleRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="reveal" ref={titleRef}>
          <h2 className="section-title">
            {t.contact.title}
            <span className="title-underline"></span>
          </h2>
        </div>

        <div className="contact-wrapper">
          {/* Left — Info card */}
          <div className="contact-info-card reveal-left" ref={leftRef}>
            <div className="contact-info-item">
              <div className="contact-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">{t.contact.emailLabel}</span>
                <span className="contact-info-value">{t.contact.emailValue}</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">{t.contact.phoneLabel}</span>
                <span className="contact-info-value">{t.contact.phoneValue}</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">{t.contact.locationLabel}</span>
                <span className="contact-info-value">{t.contact.locationValue}</span>
              </div>
            </div>

            <div className="contact-social-buttons">
            <a
              href="https://www.linkedin.com/in/joseph-kuissode"
              className="linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="#fff" width="22" height="22">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://wa.me/229146286379"
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 32 32" fill="#fff" width="22" height="22">
                <path d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.47.657 4.878 1.904 6.99L2 30l7.194-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm6.348 19.332c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.554-.174-.786.174-.232.348-.902 1.134-1.106 1.368-.204.232-.408.26-.756.088-.348-.174-1.47-.542-2.8-1.728-1.036-.922-1.734-2.062-1.938-2.41-.204-.348-.022-.536.154-.71.158-.156.348-.408.522-.612.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.786-1.894-1.076-2.594-.284-.68-.572-.588-.786-.6-.204-.01-.436-.012-.67-.012-.232 0-.61.088-.93.436-.32.348-1.222 1.194-1.222 2.914s1.252 3.38 1.426 3.612c.174.232 2.462 3.762 5.966 5.274.834.36 1.484.576 1.992.736.838.266 1.6.228 2.202.138.672-.1 2.062-.844 2.352-1.66.29-.814.29-1.514.204-1.66-.088-.146-.32-.232-.67-.408z"/>
              </svg>
              {t.contact.whatsappBtn}
            </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-card reveal-right" ref={rightRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.contact.nomLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t.contact.nomPlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.contact.emailFormLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.contact.emailFormPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.contact.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-send">
                {t.contact.send}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
