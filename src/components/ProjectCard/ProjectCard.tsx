import './ProjectCard.css'
import TechBadge from '../TechBadge/TechBadge'
import { useState } from 'react'

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;  // Tornando opcional
  expandedDescription?: string;
  imageUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  link,
  expandedDescription = "",
  imageUrl = ""
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleVisitProject = (e: React.MouseEvent) => {
    if (!link || link === '#') {
      e.preventDefault()
      setIsExpanded(true)
    }
    // Se o link for válido, o comportamento padrão do anchor tag ocorrerá
  }

  return (
    <>
      <div className={`project-card ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(true)}>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-technologies">
            {technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
        <div className="project-actions">
          <button className="project-details-btn" onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(true)
          }}>
            Ver Detalhes
          </button>
          {link && (
            <a href={link} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="project-link" 
               onClick={handleVisitProject}>
              {link === '#' ? 'Em Breve' : 'Ver Projeto'}
            </a>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="project-expanded-overlay" onClick={() => setIsExpanded(false)}>
          <div className="project-expanded-content" onClick={e => e.stopPropagation()}>
            <button className="close-expanded" onClick={() => setIsExpanded(false)}>×</button>
            <h3>{title}</h3>
            
            {imageUrl && (
              <div className="project-expanded-image">
                <img src={imageUrl} alt={title} />
              </div>
            )}
            
            <div className="project-expanded-description">
              <p>{expandedDescription || description}</p>
            </div>
            
            <div className="project-technologies">
              {technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
            
            <div className="project-expanded-actions">
              <button className="project-close-btn" onClick={() => setIsExpanded(false)}>
                Fechar
              </button>
              {link && link !== '#' && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Abrir Projeto
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard