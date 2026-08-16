import { useLanguage } from "../context/LanguageContext";
import { Cascade } from "./Cascade";

export function Skills() {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      category: t("skills.ai"),
      skills:
        language === "pt"
          ? [
              "Agentic coding (planejar, tools, verificar)",
              "Git worktree e parallel agents",
              "Engenharia de prompts",
              "LLMs (GPT-4, GPT-4o, Claude, Gemini)",
              "MCP, skills e human-in-the-loop",
            ]
          : [
              "Agentic coding (plan, tools, verify)",
              "Git worktree and parallel agents",
              "Prompt engineering",
              "LLMs (GPT-4, GPT-4o, Claude, Gemini)",
              "MCP, skills, and human-in-the-loop",
            ],
      color: "from-[#A39382] to-[#685D54]",
    },
    {
      category: t("skills.data"),
      skills:
        language === "pt"
          ? [
              "Power BI (DAX e Power Query)",
              "Limpeza, modelagem e preparação de dados",
              "Databricks (lakehouse, notebooks e pipelines)",
            ]
          : [
              "Power BI (DAX and Power Query)",
              "Data cleaning, modeling, and preparation",
              "Databricks (lakehouse, notebooks, and pipelines)",
            ],
      color: "from-[#685D54] to-[#232323]",
    },
    {
      category: t("skills.languages"),
      skills: ["Python", "SQL", "JavaScript", "HTML/CSS", "Java", "C"],
      color: "from-[#232323] to-[#685D54]",
    },
    {
      category: t("skills.dev"),
      skills: ["Oracle APEX", "Node.js", "Express", "APIs REST"],
      color: "from-[#A39382] to-[#685D54]",
    },
    {
      category: t("skills.db"),
      skills:
        language === "pt"
          ? ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "Modelagem de schema e performance"]
          : ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "Schema modeling and performance"],
      color: "from-[#685D54] to-[#232323]",
    },
    {
      category: t("skills.design"),
      skills:
        language === "pt"
          ? ["Figma (prototipagem e UI)", "Landing pages", "UI/UX e design responsivo"]
          : ["Figma (prototyping and UI)", "Landing pages", "UI/UX and responsive design"],
      color: "from-[#232323] to-[#685D54]",
    },
    {
      category: t("skills.tools"),
      skills:
        language === "pt"
          ? ["Git e GitHub", "Microsoft Office", "SharePoint e Microsoft Teams", "Scrum e Kanban"]
          : ["Git and GitHub", "Microsoft Office", "SharePoint and Microsoft Teams", "Scrum and Kanban"],
      color: "from-[#A39382] to-[#685D54]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FBF7F4] via-white to-[#E5DED2]">
      <div className="container mx-auto px-6">
        <Cascade className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#232323]">{t("skills.title")}</h2>
          <p className="text-lg text-[#685D54]">{t("skills.description")}</p>
        </Cascade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Cascade
              key={categoryIndex}
              className="bg-white/90 rounded-3xl p-8 border border-[#E5DED2]"
              delay={categoryIndex * 90}
            >
              <div
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white mb-6`}
              >
                {category.category}
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A39382] to-[#685D54] flex-shrink-0" />
                    <span className="text-[#232323]">{skill}</span>
                  </div>
                ))}
              </div>
            </Cascade>
          ))}
        </div>
      </div>
    </section>
  );
}
