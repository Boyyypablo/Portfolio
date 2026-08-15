export interface Project {
  id: string;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  tags: string[];
  image: string;
  imageAlt: string;
  path: string;
}

export const projects: Project[] = [
  {
    id: "colorimetria",
    title: "Colorimetria",
    description: {
      pt: "Landing page para uma consultora de colorimetria pessoal.",
      en: "Landing page for a personal color analysis consultant.",
    },
    tags: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9?w=800&h=500&fit=crop&auto=format&q=70",
    imageAlt: "Preview do projeto Colorimetria",
    path: "/projetos/colorimetria",
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
];
