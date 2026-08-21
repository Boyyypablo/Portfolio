import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.portfolio": "Portfólio",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    "header.greeting": "👋 Olá, bem-vindo!",
    "header.name": "Pablo Basilio",
    "header.role": "Engenheiro de Software com experiência em análise de dados e desenvolvimento de sistemas",
    "header.description": "Como Analista de Dados e Desenvolvedor Full Stack, trabalho com dashboards em Power BI, tratamentos em SQL/Python e aplicações em Oracle APEX.",
    "header.cta": "Ver Projetos",
    "header.languages": "Português: nativo · Inglês: intermediário · Espanhol: básico",

    "cta.title": "Vamos tirar seu projeto do papel?",
    "cta.description": "Desenvolvo sites, painéis e automações que organizam seus dados e facilitam o contato com clientes. Da primeira conversa até o projeto no ar.",

    "skills.title": "Habilidades Técnicas",
    "skills.description": "Tecnologias e ferramentas que utilizo no dia a dia",
    "skills.ai": "IA",
    "skills.data": "Dados",
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
    "contact.required": "Preencha nome, e-mail e mensagem.",
    "contact.invalidEmail": "Informe um e-mail válido.",
    "contact.sent": "Pronto. Seu aplicativo de e-mail abriu com a mensagem.",
    "contact.sending": "Abrindo e-mail...",

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
    "exp.mjspdev.role": "Desenvolvedor Líder",
    "exp.mjspdev.period": "Agosto de 2023 – Agosto de 2025",
    "exp.mjspdev.year": "2025",

    "exp.nuuma": "Nuuma",
    "exp.nuuma.role": "Desenvolvedor Full Stack",
    "exp.nuuma.period": "Março de 2024 – Julho de 2026",
    "exp.nuuma.year": "2025",

    "exp.startup": "Startup Way / Demoday",
    "exp.startup.role": "Cofundador e Líder de Projeto",
    "exp.startup.period": "2024",
    "exp.startup.year": "2024",

    "exp.bravus": "Bravus",
    "exp.bravus.role": "Instrutor de Tecnologia",
    "exp.bravus.period": "Março de 2023 – Agosto de 2024",
    "exp.bravus.year": "2023",

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
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "header.greeting": "👋 Hello, welcome!",
    "header.name": "Pablo Basilio",
    "header.role": "Software Engineer with experience in data analysis and systems development",
    "header.description": "As a Data Analyst and Full Stack Developer, I work with Power BI dashboards, SQL/Python data processing, and Oracle APEX applications.",
    "header.cta": "View Projects",
    "header.languages": "Portuguese: native · English: intermediate · Spanish: basic",

    "cta.title": "Ready to bring your project to life?",
    "cta.description": "I build websites, dashboards, and automations that organize your data and make client contact easier — from the first conversation to launch.",

    "skills.title": "Technical Skills",
    "skills.description": "Technologies and tools I use daily",
    "skills.ai": "AI",
    "skills.data": "Data",
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
    "contact.required": "Please fill in name, email, and message.",
    "contact.invalidEmail": "Please enter a valid email.",
    "contact.sent": "Done. Your email app opened with the message.",
    "contact.sending": "Opening email...",

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
    "exp.mjspdev.role": "Lead Developer",
    "exp.mjspdev.period": "August 2023 – August 2025",
    "exp.mjspdev.year": "2025",

    "exp.nuuma": "Nuuma",
    "exp.nuuma.role": "Full Stack Developer",
    "exp.nuuma.period": "March 2024 – July 2026",
    "exp.nuuma.year": "2025",

    "exp.startup": "Startup Way / Demoday",
    "exp.startup.role": "Co-founder and Project Leader",
    "exp.startup.period": "2024",
    "exp.startup.year": "2024",

    "exp.bravus": "Bravus",
    "exp.bravus.role": "Technology Instructor",
    "exp.bravus.period": "March 2023 – August 2024",
    "exp.bravus.year": "2023",

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
