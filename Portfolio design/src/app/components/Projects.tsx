import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";

export function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#FBF7F4] via-white to-[#E5DED2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#232323]">{t("projects.title")}</h2>
          <p className="text-lg text-[#685D54] max-w-2xl mx-auto">{t("projects.description")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white/90 rounded-3xl overflow-hidden border border-[#E5DED2] hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-[#685D54] mb-6 leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-[#E5DED2]/70 text-[#685D54]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.path}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#685D54] text-[#FBF7F4] hover:bg-[#232323] transition-colors"
                >
                  {t("projects.viewProject")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
