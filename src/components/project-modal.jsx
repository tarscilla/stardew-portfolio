export function ProjectModal({ project, onClose }) {
    if (!project) return null;
  
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="journal-modal" onClick={(e) => e.stopPropagation()}>
          <div className="journal-header">
            <span className="journal-tag">Missão {project.number} • {project.category}</span>
            <button type="button" className="pixel-btn small" onClick={onClose}>
              Fechar X
            </button>
          </div>
  
          <h3 className="journal-title">{project.title}</h3>
          <p className="journal-text">{project.description}</p>
  
          <div className="journal-section">
            <span className="journal-label">Ferramentas equipadas:</span>
            <div className="badge-row">
              {project.stack.map((tech) => (
                <span key={tech} className="wood-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
  
          <div className="journal-actions">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="pixel-btn primary"
              >
                Ver Código no GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="pixel-btn secondary"
              >
                Abrir Projeto ao Vivo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }