import { useState, useEffect } from 'react';
import { PROJECTS, SKILLS } from './data/portfolio-data';
import { CabinDiorama } from './components/cabin-diorama';
import { ProjectCover } from './components/project-cover';
import { SkyAmbience } from './components/sky-ambience';
import { ProjectModal } from './components/project-modal';
import './styles.css';

const THEMES = ['day', 'dusk', 'night'];
const THEME_NAMES = {
  day: 'Clima: Dia',
  dusk: 'Clima: Tarde',
  night: 'Clima: Noite'
};

const CONTACT_EMAIL = 'almeidatarscilla@gmail.com';

const FALLBACK_LIVE_PROJECTS = PROJECTS.filter((p) => p.liveUrl)
  .slice(-1)
  .map((p) => ({
    id: p.id,
    name: p.title,
    url: p.liveUrl
  }));

export default function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSkill, setActiveSkill] = useState(SKILLS[0]);
  const [liveProjects, setLiveProjects] = useState(FALLBACK_LIVE_PROJECTS);
  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const currentTheme = THEMES[themeIndex];

  useEffect(() => {
    fetch('https://api.github.com/users/tarscilla/repos?sort=updated&per_page=12')
      .then((response) => response.json())
      .then((repos) => {
        if (!Array.isArray(repos)) return;

        const deployed = repos
          .filter((repo) => repo.homepage && repo.homepage.trim() !== '' && !repo.fork)
          .slice(0, 1)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            url: repo.homepage.startsWith('http')
              ? repo.homepage
              : `https://${repo.homepage}`
          }));

        if (deployed.length > 0) {
          setLiveProjects(deployed);
        }
      })
      .catch(() => {});
  }, []);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % THEMES.length);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nova carta no Portfólio de ${formData.name}`
        })
      });

      if (response.ok) {
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      alert('Não foi possível enviar agora. Tente novamente em instantes.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-theme={currentTheme} className="app-shell">
      <SkyAmbience theme={currentTheme} />

      <header className="hud-nav">
        <span className="brand-title">TARSCILLA</span>
        <nav className="hud-links">
          <a href="#projects" className="desktop-only-link">Projetos</a>
          <a href="#about" className="desktop-only-link">Sobre & Skills</a>
          <a href="#contact" className="desktop-only-link">Contato</a>
          <button type="button" className="pixel-btn" onClick={cycleTheme}>
            {THEME_NAMES[currentTheme]}
          </button>
        </nav>
      </header>

      <nav className="mobile-hotbar" aria-label="Menu rápido">
        <button type="button" className="hotbar-slot" onClick={() => scrollToSection('top')}>
          <svg viewBox="0 0 16 16" width="20" height="20" shapeRendering="crispEdges">
            <polygon points="8,2 14,7 2,7" fill="#C85A3B" />
            <rect x="4" y="7" width="8" height="6" fill="#B87A45" />
            <rect x="7" y="9" width="2" height="4" fill="#5C3A21" />
          </svg>
          <span>Início</span>
        </button>

        <button type="button" className="hotbar-slot" onClick={() => scrollToSection('projects')}>
          <svg viewBox="0 0 16 16" width="20" height="20" shapeRendering="crispEdges">
            <rect x="7" y="7" width="2" height="6" fill="#4B8B42" />
            <rect x="4" y="5" width="3" height="2" fill="#5E8C61" />
            <rect x="9" y="4" width="3" height="2" fill="#5E8C61" />
            <rect x="3" y="13" width="10" height="2" fill="#8B5A2B" />
          </svg>
          <span>Projetos</span>
        </button>

        <button type="button" className="hotbar-slot" onClick={() => scrollToSection('about')}>
          <svg viewBox="0 0 16 16" width="20" height="20" shapeRendering="crispEdges">
            <rect x="4" y="3" width="8" height="3" fill="#8B5A2B" />
            <rect x="3" y="6" width="10" height="7" fill="#B87A45" />
            <rect x="7" y="7" width="2" height="2" fill="#F4C95D" />
          </svg>
          <span>Sobre</span>
        </button>

        <button type="button" className="hotbar-slot" onClick={() => scrollToSection('contact')}>
          <svg viewBox="0 0 16 16" width="20" height="20" shapeRendering="crispEdges">
            <rect x="2" y="4" width="12" height="8" fill="#FCF8EE" />
            <rect x="2" y="4" width="12" height="1" fill="#8B5A2B" />
            <rect x="2" y="11" width="12" height="1" fill="#8B5A2B" />
            <rect x="4" y="6" width="2" height="1" fill="#C85A3B" />
            <rect x="6" y="7" width="4" height="1" fill="#C85A3B" />
            <rect x="10" y="6" width="2" height="1" fill="#C85A3B" />
          </svg>
          <span>Contato</span>
        </button>
      </nav>

      <main className="container">
        <section className="hero-section">
          <span className="hero-subtitle">DEV FRONT-END</span>
          <h1 className="hero-title">Bem-vindo ao meu espaço criativo</h1>
          <p className="hero-desc">
            Desenvolvo interfaces web com React e JavaScript, transformando ideias em telas organizadas, responsivas e fáceis de navegar.
          </p>
          <CabinDiorama theme={currentTheme} onNavigate={scrollToSection} />
        </section>

        <section id="projects" className="section-block">
          <h2 className="section-heading">Mural de Missões</h2>
          <p className="section-lead">
            Selecione uma placa para abrir o diário completo do projeto.
          </p>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="wood-card"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="card-top">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <ProjectCover type={project.iconType} />
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-summary">{project.summary}</p>
                </div>

                <div className="badge-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="wood-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-block">
          <h2 className="section-heading">Ficha & Mochila</h2>
          <p className="section-lead">
            Minha trajetória e as ferramentas que carrego no inventário.
          </p>

          <div className="about-inventory-grid">
            <div className="character-sheet">
              <div className="character-header">
                <div className="avatar-frame">
                  <svg viewBox="0 0 16 16" width="44" height="44" shapeRendering="crispEdges">
                    <rect x="4" y="2" width="8" height="3" fill="#4A2E1B" />
                    <rect x="3" y="4" width="10" height="7" fill="#F2C6A0" />
                    <rect x="3" y="4" width="2" height="8" fill="#4A2E1B" />
                    <rect x="11" y="4" width="2" height="8" fill="#4A2E1B" />
                    <rect x="5" y="7" width="2" height="2" fill="#2F241B" />
                    <rect x="9" y="7" width="2" height="2" fill="#2F241B" />
                    <rect x="7" y="9" width="2" height="1" fill="#D97B66" />
                    <rect x="4" y="11" width="8" height="4" fill="#5E8C61" />
                  </svg>
                </div>
                <div>
                  <h3 className="card-title">Tarscilla Almeida</h3>
                  <span className="journal-tag">Sistemas de Informação • UNEX</span>
                </div>
              </div>
              <p className="card-summary">
                Estudante de Sistemas de Informação na UNEX e desenvolvedora front-end. Meu foco é criar interfaces web em React e JavaScript, integrando APIs para dar vida a ferramentas práticas.
              </p>
              <a
                href="https://github.com/tarscilla"
                target="_blank"
                rel="noreferrer"
                className="pixel-btn secondary"
              >
                GitHub @tarscilla
              </a>
            </div>

            <div className="inventory-panel">
              <h3 className="card-title">Inventário de Tecnologias</h3>
              <div className="inventory-grid">
                {SKILLS.map((skill) => (
                  <button
                    key={skill.id}
                    type="button"
                    className={`inventory-slot ${activeSkill.id === skill.id ? 'selected' : ''}`}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onClick={() => setActiveSkill(skill)}
                  >
                    <span>{skill.name}</span>
                  </button>
                ))}
              </div>

              <div className="tooltip-box">
                <strong>{activeSkill.name}</strong> ({activeSkill.level}): {activeSkill.usage}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block">
          <h2 className="section-heading">Correio da Fazenda</h2>
          <p className="section-lead">
            Deixe uma carta na caixa de correio ou confira meu último projeto no ar ao lado.
          </p>

          <div className="contact-grid">
            <div className="mailbox-card">
              <div className="mailbox-header">
                <h3 className="card-title">Nova Mensagem</h3>
                <svg viewBox="0 0 24 24" width="36" height="36" shapeRendering="crispEdges">
                  <rect x="10" y="13" width="4" height="9" fill="#63381E" />
                  <rect x="5" y="6" width="14" height="8" fill="#A86B3B" />
                  <rect
                    x="16"
                    y={messageSent ? '2' : '6'}
                    width="3"
                    height="6"
                    fill="#D94E4E"
                  />
                </svg>
              </div>

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  rows="4"
                  placeholder="Escreva sua mensagem..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className="pixel-btn primary" disabled={sending}>
                  {sending ? 'Enviando carta...' : 'Enviar Carta'}
                </button>
              </form>

              {messageSent && (
                <div className="sent-banner">
                  Carta enviada! Ela já está a caminho da minha caixa de entrada.
                </div>
              )}
            </div>

            <aside className="contact-side-card">
              <div>
                <div className="mailbox-header">
                  <h3 className="card-title">Quadro de Avisos</h3>
                  <svg viewBox="0 0 24 24" width="34" height="34" shapeRendering="crispEdges">
                    <rect x="3" y="5" width="18" height="13" fill="#B97A45" />
                    <rect x="5" y="7" width="14" height="9" fill="#FCF8EE" />
                    <rect x="7" y="9" width="10" height="2" fill="#8B5A2B" />
                    <rect x="7" y="13" width="7" height="2" fill="#5E8C61" />
                    <rect x="11" y="18" width="2" height="4" fill="#5E3A22" />
                  </svg>
                </div>

                <p className="card-summary">
                  Meu perfil no GitHub e o projeto mais recente publicado no ar:
                </p>

                <div className="channel-list">
                  <a
                    href="https://github.com/tarscilla"
                    target="_blank"
                    rel="noreferrer"
                    className="channel-item"
                  >
                    <span className="channel-label">GitHub</span>
                    <span className="channel-value">github.com/tarscilla</span>
                  </a>

                  {liveProjects.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="channel-item"
                    >
                      <span className="channel-label">Último Projeto no Ar • {item.name}</span>
                      <span className="channel-value">
                        {item.url.replace(/^https?:\/\//, '')}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="status-plaque">
                <span className="status-dot" />
                <span>Disponível para projetos web e colaborações</span>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        Feito por Tarscilla Silva Almeida • 2026
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}