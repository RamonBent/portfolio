import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import roboticaImg from '../../assets/image/Tutor.png';


const Projects = () => {
  const personalProjects = [
    {
      title: 'API REST - Academia',
      description: 'Sistema de gerenciamento para academias com Spring Boot',
      expandedDescription: 'API RESTful desenvolvida com Spring Boot para gerenciar academias. Possui funcionalidades para cadastro e gerenciamento de alunos, instrutores, treinos, exercícios e avaliações físicas. Implementa arquitetura em camadas com DTOs, mapeamento de entidades e controle total das operações CRUD. Ideal para integrar com um frontend em React.',
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Swagger'],
      link: '#', // você pode substituir pelo link do repositório no GitHub
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Controlador de Frota',
      description: 'Sistema para gerenciamento de transportadora com Spring Boot e PostgreSQL',
      expandedDescription: 'Projeto desenvolvido com o objetivo de gerenciar uma transportadora, oferecendo controle sobre veículos, cargas, motoristas e viagens. A aplicação segue a arquitetura MVC, utiliza o banco de dados PostgreSQL e está documentada com Swagger. Desenvolvida em Spring Boot, a API REST contempla regras de negócio específicas para o setor de transportes. Futuramente, o projeto contará com um frontend dedicado e sistema de autenticação.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Swagger', 'Arquitetura MVC'],
      link: '#', // substitua com o link real do repositório
      imageUrl: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },  
    {
      title: 'API de Autenticação',
      description: 'Sistema de autenticação JWT com Spring Boot',
      expandedDescription: 'API robusta de autenticação com JWT, incluindo registro, login, recuperação de senha e verificação de email. Implementação de roles e permissions, rate limiting e documentação com Swagger.',
      technologies: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const academicProjects = [
    {
      title: 'Robótica Educacional',
      description: 'Projeto de extensão para reativar a cultura da robótica no IFPB Campus Esperança.',
      expandedDescription: 'Durante seis meses, no ano de 2023, atuei como bolsista em um projeto de extensão cujo objetivo principal era resgatar e fortalecer a cultura da robótica no IFPB Campus Esperança. O projeto envolveu alunos dos cursos técnicos em Informática e Energias Renováveis e proporcionou uma rica experiência prática com kits Arduino, além de promover a integração entre teoria e prática no ensino de robótica. Ao longo do projeto, tive a oportunidade de participar de eventos, competições e mostras científicas. Um dos momentos mais marcantes foi a apresentação de um relato de experiência sobre o projeto em um congresso internacional de educação, representando o campus e compartilhando os resultados alcançados com a comunidade acadêmica.',
      technologies: ['Arduino', 'C++', 'Robótica', 'Educação', 'Eventos'],
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a7c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    
    {
      title: 'Tutor de Robótica',
      description: 'Atuação como tutor de robótica para alunos do ensino fundamental em escola pública.',
      expandedDescription: 'Durante o ano de 2024, atuei como tutor em oficinas de robótica dentro do sistema integral de uma escola pública da cidade de Pocinhos, com turmas do 6º ao 9º ano. As atividades faziam parte da grade complementar e aconteciam ao longo de todo o período letivo. Foram cerca de 8 horas semanais dedicadas às oficinas, além de tempo extra para planejamento das atividades. O projeto foi desafiador e muito enriquecedor, exigindo não apenas conhecimento técnico, mas também habilidades interpessoais, como empatia, paciência e trabalho em equipe — especialmente por envolver interação direta com outros profissionais da educação e com os alunos. Utilizamos o Arduino e a linguagem de blocos com Pictoblox para desenvolver projetos criativos e lúdicos, tornando o aprendizado de robótica acessível e divertido para os estudantes.',
      technologies: ['Arduino', 'Pictoblox', 'Educação'],
      link: '#',
      imageUrl: roboticaImg
    },
    
    {
      title: 'Monitoramento Hidrômetros',
      description: 'Pesquisa com foco em leitura remota de hidrômetros usando LoRa e visão computacional.',
      expandedDescription: 'Projeto de pesquisa que desenvolveu um protótipo para leitura automática de hidrômetros usando: 1) Visão computacional para reconhecer os dígitos e 2) Transmissão via LoRaWAN para envio dos dados. O sistema alcançou 98% de precisão nas leituras.',
      technologies: ['Python', 'OpenCV', 'LoRa', 'IoT'],
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="projects">
      <section className="projects-section">
        <h2>Meus <span className="highlight">Projetos</span></h2>

        <div className="projects-category">
          <h3>Projetos Pessoais</h3>
          <div className="projects-grid">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={`personal-${index}`}
                title={project.title}
                description={project.description}
                expandedDescription={project.expandedDescription}
                technologies={project.technologies}
                link={project.link}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="projects-category">
          <h3>Projetos Acadêmicos</h3>
          <div className="projects-grid">
            {academicProjects.map((project, index) => (
              <ProjectCard
                key={`academic-${index}`}
                title={project.title}
                description={project.description}
                expandedDescription={project.expandedDescription}
                technologies={project.technologies}
                link={project.link}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects