import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import roboticaImg from '../../assets/image/Tutor.png';


const Projects = () => {
  const personalProjects = [
    {
      title: 'Market-Flow',
      description: 'E-commerce com Arquitetura de Microsserviços, RabbitMQ e Spring Boot',
      expandedDescription: 'Market-Flow é um sistema de e-commerce construído com uma **Arquitetura de Microsserviços** para garantir escalabilidade e desacoplamento. O projeto utiliza **Java Spring Boot** para a lógica de negócio, **RabbitMQ** como message broker para comunicação assíncrona entre os serviços e **MySQL** para o armazenamento de dados (padrão Database Per Service). \n\nOs 5 microsserviços centrais são: **Order**, **Stock**, **Payment**, **Status** e **Send**, cada um responsável por uma funcionalidade específica do fluxo de compra. A comunicação assíncrona via RabbitMQ é essencial para processar pedidos, pagamentos e atualizações de estoque de forma robusta e eficiente.',
      technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'Microsserviços', 'MySQL', 'Menssageria', 'Junit', 'Arquitetura MVC'],
      link: 'https://github.com/abraao-borges/market-flow',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f940f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'AcademiaApp',
      description: 'Sistema Mobile Full-Stack para academias (Aluno e Admin), com arquitetura Offline-First.',
      expandedDescription: 'Sistema completo de gerenciamento de academias construído com arquitetura **Offline-First**. O projeto consiste em dois aplicativos mobile desenvolvidos em **React Native/TypeScript** (para Aluno e Administrador) e uma API REST em **Java Spring Boot**. \n\nFuncionalidades principais: Gerenciamento completo de alunos/instrutores (CRUD), criação de treinos personalizados e registro de avaliações físicas. A abordagem Offline-First permite que os usuários acessem seus dados (treinos, exercícios, etc.) mesmo sem conexão ativa à internet, garantindo alta usabilidade. O backend utiliza **PostgreSQL**.',
      technologies: ['React Native', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Offline-First', 'MVC', 'REST API'],
      link: 'https://github.com/RamonBent/academia-api',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' // Mantendo a imagem de academia
    },
    {
      title: 'Controlador de Frota',
      description: 'Sistema para gerenciamento de transportadora com Spring Boot e PostgreSQL',
      expandedDescription: 'Projeto desenvolvido com o objetivo de gerenciar uma transportadora, oferecendo controle sobre veículos, cargas, motoristas e viagens. A aplicação segue a arquitetura MVC, utiliza o banco de dados PostgreSQL e está documentada com Swagger. Desenvolvida em Spring Boot, a API REST contempla regras de negócio específicas para o setor de transportes. Futuramente, o projeto contará com um frontend dedicado e sistema de autenticação.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Swagger', 'Arquitetura MVC'],
      link: 'https://github.com/RamonBent/controladorDeFrota',
      imageUrl: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },  
    {
      title: 'API de Autenticação',
      description: 'Sistema de autenticação JWT com Spring Boot',
      expandedDescription: 'API robusta de autenticação com JWT, incluindo registro, login, recuperação de senha e verificação de email. Implementação de roles e permissions, rate limiting e documentação com Swagger.',
      technologies: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'CaixaSuper - Sistema de Gestão',
      description: 'Solução completa para gestão de mercados (PDV, Estoque, Relatórios) em Java/Spring Boot.',
      expandedDescription: 'O CaixaSuper é uma solução de software para otimizar a gestão de vendas e estoque em mercados de pequeno e médio porte. O sistema foi desenvolvido utilizando **Java Spring Boot** no backend para gerenciar a lógica de negócio (vendas, estoque, relatórios) e **PostgreSQL** como banco de dados. A interface gráfica (GUI) foi construída com **JavaFX**.\n\nFuncionalidades chave incluem: controle de estoque com alertas automáticos, registro automatizado de vendas com cálculo de troco, geração de relatórios gerenciais e módulo de fechamento de caixa. O projeto foca em oferecer uma ferramenta eficiente e intuitiva para o controle administrativo.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JavaFX', 'PDV', 'Estoque', 'MVC', 'JWT'],
      link: 'https://github.com/abraao-borges/caixa-super',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },

    {
    title: 'Chat Noir',
    description: 'Jogo de estratégia contra uma IA desafiadora baseada em algoritmos de busca.',
    expandedDescription: 'O Chat Noir é um jogo de estratégia onde o objetivo é cercar um gato em um tabuleiro antes que ele escape. O grande destaque do projeto é a **Inteligência Artificial** do gato, desenvolvida em **Kotlin**. \n\nA IA utiliza o algoritmo **Minimax com Poda Alpha-Beta**, permitindo que o computador antecipe as jogadas do usuário e escolha a rota de fuga mais eficiente. Além disso, implementei uma **Função de Avaliação** personalizada que calcula a heurística baseada na distância do gato até as bordas, garantindo um nível de dificuldade elevado e performance otimizada para dispositivos móveis.',
    technologies: ['IA','Kotlin', 'Android SDK', 'Minimax Algorithm', 'MVVM'],
    link: 'https://github.com/abraao-borges/chat-noir-android',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/luvi-2628f.firebasestorage.app/o/comprovantes%2FWhatsApp%20Image%202025-12-17%20at%2020.14.56.jpeg?alt=media&token=5f110dd8-b960-4d65-a3bb-a5e90ab36bd7'
},
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
      technologies: ['Arduino', 'Pictoblox', 'Educação', 'C++', 'Robótica'],
      link: '#',
      imageUrl: roboticaImg
    },
    
    {
      title: 'Monitoramento Hidrômetros',
      description: 'Pesquisa com foco em leitura remota de hidrômetros usando LoRa e visão computacional.',
      expandedDescription: 'Projeto de pesquisa que desenvolveu um protótipo para leitura automática de hidrômetros usando: 1) Visão computacional para reconhecer os dígitos e 2) Transmissão via LoRaWAN para envio dos dados. O sistema alcançou 98% de precisão nas leituras.',
      technologies: ['Python', 'OpenCV', 'LoRa', 'IoT'],
      link: 'https://github.com/RamonBent/projetoHidrometro',
      imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },

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