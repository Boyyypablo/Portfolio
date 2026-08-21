import { useLanguage } from "../context/LanguageContext";
import { Cascade } from "./Cascade";

type SkillIcon = {
  src: string;
  alt: string;
  /** Fundo do círculo (estilo dos ícones de IA) */
  bg?: string;
  /** object-fit / padding do logo */
  className?: string;
};

function SkillIconCircle({ icon }: { icon: SkillIcon }) {
  return (
    <div
      className="size-[72px] overflow-hidden rounded-full border border-white/15 shadow-md md:size-[96px]"
      style={{ backgroundColor: icon.bg ?? "#FFFFFF" }}
      title={icon.alt}
    >
      <img
        src={icon.src}
        alt={icon.alt}
        width={96}
        height={96}
        className={`size-full ${icon.className ?? "object-contain p-[22%]"}`}
      />
    </div>
  );
}

const aiIcons: SkillIcon[] = [
  { src: "/figma/skills/git-worktree.png", alt: "Git Worktree", bg: "#F4F7FA", className: "object-contain p-2" },
  { src: "/figma/skills/mcp.png", alt: "MCP", bg: "#000000", className: "object-cover" },
  { src: "/figma/skills/llm.png", alt: "LLM", bg: "#FFFFFF", className: "object-cover" },
  { src: "/figma/skills/cursor.png", alt: "Cursor", bg: "#12110E", className: "object-cover" },
  { src: "/figma/skills/ollama.svg", alt: "Ollama", bg: "#FFFFFF", className: "object-contain p-[22%]" },
];

const dataIcons: SkillIcon[] = [
  { src: "/figma/skills/powerbi.svg", alt: "Power BI", bg: "transparent", className: "object-cover" },
  { src: "/figma/skills/databricks.svg", alt: "Databricks", bg: "#FFFFFF", className: "object-contain p-[18%]" },
  { src: "/figma/skills/python.svg", alt: "Python", bg: "#FFFFFF" },
  { src: "/figma/skills/postgresql.svg", alt: "SQL", bg: "#FFFFFF" },
  { src: "/figma/skills/database.svg", alt: "Modelagem de dados", bg: "transparent", className: "object-cover" },
];

const devIcons: SkillIcon[] = [
  { src: "/figma/skills/oracle.svg", alt: "Oracle APEX", bg: "#FFFFFF" },
  { src: "/figma/skills/nodedotjs.svg", alt: "Node.js", bg: "#FFFFFF" },
  { src: "/figma/skills/express.svg", alt: "Express", bg: "#FFFFFF" },
  { src: "/figma/skills/rest.png", alt: "APIs REST", bg: "#FFFFFF", className: "object-contain p-[10%]" },
  { src: "/figma/skills/react.svg", alt: "React", bg: "#20232A" },
  { src: "/figma/skills/typescript.svg", alt: "TypeScript", bg: "#FFFFFF" },
];

const designIcons: SkillIcon[] = [
  { src: "/figma/skills/figma.svg", alt: "Figma", bg: "#FFFFFF" },
  { src: "/figma/skills/uiux.png", alt: "UI/UX", bg: "#FFFFFF", className: "object-contain p-[12%]" },
  { src: "/figma/skills/landing.png", alt: "Landing pages", bg: "#FFFFFF", className: "object-contain p-[10%]" },
];

const toolsIcons: SkillIcon[] = [
  { src: "/figma/skills/github.svg", alt: "Git / GitHub", bg: "#FFFFFF" },
  { src: "/figma/skills/scrum.svg", alt: "Scrum", bg: "transparent", className: "object-cover" },
  { src: "/figma/skills/trello.svg", alt: "Kanban", bg: "#FFFFFF" },
  { src: "/figma/skills/word.png", alt: "Word", bg: "transparent", className: "object-cover" },
  { src: "/figma/skills/excel.png", alt: "Excel", bg: "#FFFFFF", className: "object-contain p-[12%]" },
  { src: "/figma/skills/teams.png", alt: "Teams", bg: "#FFFFFF", className: "object-contain p-[12%]" },
  { src: "/figma/skills/powerautomate.svg", alt: "Power Automate", bg: "#FFFFFF", className: "object-contain p-[14%]" },
];

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    { category: t("skills.ai"), icons: aiIcons },
    { category: t("skills.data"), icons: dataIcons },
    { category: t("skills.dev"), icons: devIcons },
    { category: t("skills.design"), icons: designIcons },
    { category: t("skills.tools"), icons: toolsIcons },
  ];

  return (
    <section className="bg-[#685D54] py-20">
      <div className="container mx-auto px-6">
        <Cascade className="mb-14 text-center">
          <h2 className="mb-4 text-4xl text-[#232323] md:text-5xl" style={{ color: "#232323" }}>
            {t("skills.title")}
          </h2>
          <p className="text-lg text-[#E5DED2]">{t("skills.description")}</p>
        </Cascade>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <Cascade
              key={category.category}
              className={`space-y-5 ${
                categoryIndex === skillCategories.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-full md:max-w-4xl"
                  : ""
              }`}
              delay={categoryIndex * 90}
            >
              <div className="inline-flex rounded-full bg-gradient-to-r from-[#E1DFDF] to-[#94908D] px-6 py-2 text-base text-black">
                {category.category}
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {category.icons.map((icon) => (
                  <SkillIconCircle key={icon.alt} icon={icon} />
                ))}
              </div>
            </Cascade>
          ))}
        </div>
      </div>
    </section>
  );
}
