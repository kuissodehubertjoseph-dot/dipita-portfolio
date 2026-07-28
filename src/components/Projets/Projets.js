import { useLanguage } from "../../context/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Projets.css";

const projects = [
  {
    category: "BACKEND PHP",
    title: "Dashboard de gestion scolaire",
    description: "Système complet de gestion scolaire avec suivi des élèves, notes et présences",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/school-management.png",
    link: "https://dipita.xo.je",
    linkLabel: "Voir le site",
  },
  {
    category: "SITE VITRINE",
    title: "Peace Fitness",
    description: "Site web complet pour une salle de sport — pages Home, Contact, Équipe, Galerie, Programmes et Tarifs. Réalisé en HTML, CSS et JavaScript vanilla.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/peace-fitness.png",
    link: "https://gleaming-youtiao-a198e1.netlify.app/",
    linkLabel: "Voir le site",
  },
  {
    category: "SITE VITRINE",
    title: "Restaurant Panéka",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    image: "/resto.png",
    link: "https://zippy-meerkat-4d8ddc.netlify.app/",
    linkLabel: "Voir le site",
  },
  {
    category: "SITE VITRINE",
    title: "Guest House Don Geraldo",
    tech: ["Laravel", "Tailwind", "Framer Motion"],
    image: "/gest-house-geraldo.png",
    link: "https://residence-production-cc5a.up.railway.app/",
    linkLabel: "Voir le site",
  },
];

function Projets() {
  const { t } = useLanguage();
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projets" className="projets">
      <div className="projets-container">
        <div className="reveal" ref={titleRef}>
          <h2 className="section-title">
            {t.projets.title}
            <span className="title-underline"></span>
          </h2>
        </div>
        <div className="projets-grid stagger-children" ref={gridRef}>
          {projects.map((project) => (
            <div key={project.title} className="projet-card">
              <div className="projet-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projet-info">
                <div className="projet-header">
                  <div>
                    <span className="projet-category">{project.category}</span>
                    <h3 className="projet-title">{project.title}</h3>
                  </div>
                  {project.link === "#" && (
                    <a href={project.link} className="projet-link-icon" aria-label="Voir le projet">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
                {project.description && (
                  <p className="projet-description">{project.description}</p>
                )}
                <div className="projet-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="projet-voir-code">
                    {project.linkLabel || "Voir le code"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
