import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "header.greeting": "👋 Olá, bem-vindo!",
    "header.name": "Pablo dos Santos Basilio",
    "header.role": "Engenheiro de Software",
    "header.description": "Engenheiro de Software com experiência em análise de dados e desenvolvimento de sistemas. Como Analista de Dados e Desenvolvedor Full Stack, trabalho com dashboards em Power BI, tratamentos em SQL/Python e aplicações em Oracle APEX. Como Desenvolvedor Full Stack, atuo na criação de produtos web de ponta a ponta (interface, regras de servidor e integrações com API).",
    "header.cta": "Ver Projetos",
    "header.languages": "Português: nativo · Inglês: intermediário · Espanhol: básico",

    "skills.title": "Habilidades Técnicas",
    "skills.description": "Tecnologias e ferramentas que utilizo no dia a dia",
    "skills.ai": "Inteligência Artificial",
    "skills.data": "Dados e BI",
    "skills.languages": "Linguagens",
    "skills.dev": "Desenvolvimento",
    "skills.db": "Bancos de Dados",
    "skills.design": "Design e Interface",
    "skills.tools": "Ferramentas e Métodos",

    "experience.title": "Experiência Profissional",
    "experience.description": "Minha trajetória profissional e conquistas",

    "projects.title": "Projetos em Destaque",
    "projects.description": "Alguns dos projetos que desenvolvi recentemente",
    "projects.viewProject": "Ver projeto",

    "contact.title": "Vamos Conversar?",
    "contact.description": "Estou sempre aberto a novos projetos e oportunidades. Entre em contato!",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.connect": "Conecte-se comigo",
    "contact.available": "Disponível para projetos freelance e oportunidades de trabalho",
    "contact.namePlaceholder": "Seu nome",
    "contact.emailPlaceholder": "seu@email.com",
    "contact.messagePlaceholder": "Sua mensagem...",

    "footer.rights": "Feito com 💜 e código.",
    "location": "Brasília, DF, Brasil",

    "exp.mjsp": "MJSP - Ministério da Justiça e Segurança Pública",
    "exp.mjsp.role": "Analista de Dados (Estágio)",
    "exp.mjsp.period": "Agosto de 2023 – Agosto de 2025",
    "exp.mjsp.desc1": "Processos de dados com apoio de IA: execução recorrente de processos de dados complexos, usando IA generativa para apoiar etapas como documentação, revisão e padronização, com o objetivo de encurtar prazos e reduzir retrabalho, sempre com validação técnica.",
    "exp.mjsp.desc2": "Aumento de exatidão e qualidade: uso de ferramentas de IA para auditoria de código e identificação de pontos sensíveis na arquitetura de dados, garantindo entregas com maior precisão técnica e menor retrabalho.",
    "exp.mjsp.desc3": "Data intelligence em larga escala: desenvolvimento avançado em Power BI para processar e limpar bases de dados de nível ministerial, provendo suporte decisório estratégico para múltiplos setores do Governo Federal.",
    "exp.mjsp.desc4": "Cultura de automação: implementação de fluxos de trabalho que garantem dados íntegros e auditáveis, servindo como referência de precisão para toda a estrutura do Ministério.",

    "exp.mjspdev": "MJSP - Ministério da Justiça e Segurança Pública",
    "exp.mjspdev.role": "Desenvolvedor Líder (Estágio)",
    "exp.mjspdev.period": "Agosto de 2023 – Agosto de 2025",
    "exp.mjspdev.desc1": "Desenvolvimento e liderança técnica em Oracle Application Express (APEX): formulários, relatórios interativos, modais, LOV em cascata, processos PL/SQL e CSS; integração com Oracle Database (procedures, integridade e dados transacionais).",
    "exp.mjspdev.desc2": "Camada de apresentação com HTML, CSS e JavaScript, APIs REST e SQL para dados e regras de negócio.",
    "exp.mjspdev.desc3": "Trabalho em ciclos curtos (modelagem → tela → regra no servidor → teste), com apoio de IA para roteiros, revisão de código e checklists, mantendo validação e deploy sob responsabilidade técnica.",

    "exp.nuuma": "Nuuma",
    "exp.nuuma.role": "Desenvolvedor Full Stack",
    "exp.nuuma.period": "Março de 2024 – Julho de 2026",
    "exp.nuuma.desc1": "Produto de ponta a ponta: desenvolvimento do sistema completo (web/app), incluindo fluxos de negócio, interface e regras de servidor.",
    "exp.nuuma.desc2": "Website e presença digital: criação e manutenção do site da plataforma, com interface responsiva e foco em usabilidade.",
    "exp.nuuma.desc3": "Atendimento assíncrono: sistema para pacientes realizarem atendimento de forma assíncrona, com jornada digital e registro das interações.",
    "exp.nuuma.desc4": "Pagamentos: integração de fluxos de pagamento e checkout com APIs financeiras (Stripe, Asaas, Mercado Pago).",
    "exp.nuuma.desc5": "Dados para contato: organização e otimização dos dados coletados na plataforma para apoiar contatos e acompanhamento comercial/operacional.",

    "exp.startup": "Startup Way / Demoday",
    "exp.startup.role": "Cofundador e Líder de Projeto",
    "exp.startup.period": "2024",
    "exp.startup.desc1": "Conquista do 1º lugar no Demoday e 2º lugar no Startup Way através da criação de um MVP escalável.",
    "exp.startup.desc2": "Coordenação de equipe multidisciplinar com metodologias ágeis (Scrum/Kanban) no ciclo de prototipagem e validação do produto.",

    "exp.bravus": "Bravus",
    "exp.bravus.role": "Instrutor de TI",
    "exp.bravus.period": "Março de 2023 – Agosto de 2024",
    "exp.bravus.desc1": "Capacitação de alunos em JavaScript e Segurança da Informação, elevando o nível técnico da instituição.",
    "exp.bravus.desc2": "Implementação de módulos de ensino sobre Sistemas Operacionais, focando em aplicações práticas e suporte técnico.",

    "education.title": "Formação Acadêmica",
    "education.degree": "Bacharelado em Engenharia de Software",
    "education.institution": "IDP - Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa",
    "education.period": "Agosto de 2021 – Setembro de 2025",
    "education.status": "Graduação completa",
    "education.ifb.degree": "Técnico em Informática",
    "education.ifb.institution": "IFB - Instituto Federal de Brasília",
    "education.ifb.period": "2019",

    "certs.title": "Certificações",
    "certs.apex": "Oracle APEX Cloud Developer Professional (1Z0-771)",
    "certs.apex.desc": "Desenvolvimento low-code de aplicações empresariais com Oracle APEX",
    "certs.apex.period": "2025",
    "certs.itil": "Foundations of ITIL 4 for Service Management",
    "certs.itil.desc": "Gestão de serviços de TI: conceitos, práticas e cadeia de valor ITIL 4",
    "certs.itil.period": "2026",
  } as const,
  en: {
    "header.greeting": "👋 Hello, welcome!",
    "header.name": "Pablo dos Santos Basilio",
    "header.role": "Software Engineer",
    "header.description": "Software Engineer with experience in data analysis and systems development. As a Data Analyst and Full Stack Developer, I work with Power BI dashboards, SQL/Python data processing, and Oracle APEX applications. As a Full Stack Developer, I build end-to-end web products (interface, server-side logic, and API integrations).",
    "header.cta": "View Projects",
    "header.languages": "Portuguese: native · English: intermediate · Spanish: basic",

    "skills.title": "Technical Skills",
    "skills.description": "Technologies and tools I use daily",
    "skills.ai": "Artificial Intelligence",
    "skills.data": "Data & BI",
    "skills.languages": "Languages",
    "skills.dev": "Development",
    "skills.db": "Databases",
    "skills.design": "Design & Interface",
    "skills.tools": "Tools & Methods",

    "experience.title": "Professional Experience",
    "experience.description": "My professional journey and achievements",

    "projects.title": "Featured Projects",
    "projects.description": "Some of the projects I've recently developed",
    "projects.viewProject": "View project",

    "contact.title": "Let's Talk?",
    "contact.description": "I'm always open to new projects and opportunities. Get in touch!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.connect": "Connect with me",
    "contact.available": "Available for freelance projects and job opportunities",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messagePlaceholder": "Your message...",

    "footer.rights": "Made with 💜 and code.",
    "location": "Brasília, DF, Brazil",

    "exp.mjsp": "MJSP - Ministry of Justice and Public Security",
    "exp.mjsp.role": "Data Analyst (Internship)",
    "exp.mjsp.period": "August 2023 – August 2025",
    "exp.mjsp.desc1": "Data processes with AI support: recurring execution of complex data processes, using generative AI to support documentation, review, and standardization, aiming to shorten deadlines and reduce rework, always with technical validation.",
    "exp.mjsp.desc2": "Increased accuracy and quality: use of AI tools for code auditing and identification of sensitive points in data architecture, ensuring deliveries with higher technical precision and less rework.",
    "exp.mjsp.desc3": "Large-scale data intelligence: advanced Power BI development to process and clean ministerial-level databases, providing strategic decision support for multiple sectors of the Federal Government.",
    "exp.mjsp.desc4": "Automation culture: implementation of workflows that ensure integral and auditable data, serving as a precision reference for the entire Ministry structure.",

    "exp.mjspdev": "MJSP - Ministry of Justice and Public Security",
    "exp.mjspdev.role": "Lead Developer (Internship)",
    "exp.mjspdev.period": "August 2023 – August 2025",
    "exp.mjspdev.desc1": "Development and technical leadership in Oracle Application Express (APEX): forms, interactive reports, modals, cascading LOVs, PL/SQL processes and CSS; integration with Oracle Database (procedures, integrity, and transactional data).",
    "exp.mjspdev.desc2": "Presentation layer with HTML, CSS, and JavaScript, REST APIs and SQL for data and business rules.",
    "exp.mjspdev.desc3": "Work in short cycles (modeling → screen → server rule → test), with AI support for scripts, code review, and checklists, keeping validation and deploy under technical responsibility.",

    "exp.nuuma": "Nuuma",
    "exp.nuuma.role": "Full Stack Developer",
    "exp.nuuma.period": "March 2024 – July 2026",
    "exp.nuuma.desc1": "End-to-end product: development of the complete system (web/app), including business flows, interface, and server-side rules.",
    "exp.nuuma.desc2": "Website and digital presence: creation and maintenance of the platform website, with a responsive interface focused on usability.",
    "exp.nuuma.desc3": "Asynchronous care: system for patients to receive care asynchronously, with a digital journey and interaction records.",
    "exp.nuuma.desc4": "Payments: integration of payment and checkout flows with financial APIs (Stripe, Asaas, Mercado Pago).",
    "exp.nuuma.desc5": "Contact data: organization and optimization of data collected on the platform to support contacts and commercial/operational follow-up.",

    "exp.startup": "Startup Way / Demoday",
    "exp.startup.role": "Co-founder and Project Leader",
    "exp.startup.period": "2024",
    "exp.startup.desc1": "Achieved 1st place at Demoday and 2nd place at Startup Way through the creation of a scalable MVP.",
    "exp.startup.desc2": "Coordinated a multidisciplinary team using agile methodologies (Scrum/Kanban) in the prototyping and product validation cycle.",

    "exp.bravus": "Bravus",
    "exp.bravus.role": "IT Instructor",
    "exp.bravus.period": "March 2023 – August 2024",
    "exp.bravus.desc1": "Trained students in JavaScript and Information Security, elevating the institution's technical level.",
    "exp.bravus.desc2": "Implemented teaching modules on Operating Systems, focusing on practical applications and technical support.",

    "education.title": "Academic Background",
    "education.degree": "Bachelor's Degree in Software Engineering",
    "education.institution": "IDP - Brazilian Institute of Teaching, Development and Research",
    "education.period": "August 2021 – September 2025",
    "education.status": "Degree completed",
    "education.ifb.degree": "Technical Degree in Information Technology",
    "education.ifb.institution": "IFB - Federal Institute of Brasília",
    "education.ifb.period": "2019",

    "certs.title": "Certifications",
    "certs.apex": "Oracle APEX Cloud Developer Professional (1Z0-771)",
    "certs.apex.desc": "Low-code development of enterprise applications with Oracle APEX",
    "certs.apex.period": "2025",
    "certs.itil": "Foundations of ITIL 4 for Service Management",
    "certs.itil.desc": "IT service management: ITIL 4 concepts, practices, and value chain",
    "certs.itil.period": "2026",
  } as const,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
