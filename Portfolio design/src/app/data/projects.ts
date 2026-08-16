export interface Project {
  id: string;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  tags: string[];
  image?: string;
  imageAlt: string;
  cover?: "glowing-logo-light" | "cluster-logo";
  path: string;
}

export const projects: Project[] = [
  {
    id: "glowing",
    title: "Glowing",
    description: {
      pt: "Landing page Glowing para consultoria em colorimetria pessoal.",
      en: "Glowing landing page for personal color analysis consulting.",
    },
    tags: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    imageAlt: "Logo Glowing no modo claro",
    cover: "glowing-logo-light",
    path: "/projetos/glowing",
  },
  {
    id: "nuuma",
    title: "NUUMA",
    description: {
      pt: "Landing page de telessaúde para cannabis medicinal — jornada de acolhimento do médico ao medicamento.",
      en: "Telehealth landing page for medical cannabis — a guided journey from doctor to medication.",
    },
    tags: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&auto=format&q=70",
    imageAlt: "Preview do projeto NUUMA",
    path: "/projetos/nuuma",
  },
  {
    id: "cluster",
    title: "Cluster Mining",
    description: {
      pt: "Landing page da Cluster Mining para o Projeto Limoeiro — exploração mineral responsável de níquel, cobre e PGE em Pernambuco.",
      en: "Cluster Mining landing page for the Limoeiro Project — responsible nickel, copper and PGE mineral exploration in Pernambuco.",
    },
    tags: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    imageAlt: "Logo Cluster Mining",
    cover: "cluster-logo",
    path: "/projetos/cluster",
  },
];
