import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { Cascade } from "./Cascade";
import { GlowingLogo } from "./GlowingLogo";

export function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#FBF7F4] via-white to-[#E5DED2]">
      <div className="container mx-auto px-6">
        <Cascade className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#232323]">{t("projects.title")}</h2>
          <p className="text-lg text-[#685D54] max-w-2xl mx-auto">{t("projects.description")}</p>
        </Cascade>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Cascade
              key={project.id}
              className="group bg-white/90 rounded-3xl overflow-hidden border border-[#E5DED2] hover:shadow-lg"
              delay={index * 120}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.cover === "glowing-logo-light" ? (
                  <div
                    className="flex h-full w-full items-center justify-center px-8"
                    style={{ backgroundColor: "#faf7f0" }}
                    role="img"
                    aria-label={project.imageAlt}
                  >
                    <GlowingLogo size="cover" bg="light" />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl text-[#232323] mb-4">{project.title}</h3>
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
            </Cascade>
          ))}
        </div>
      </div>
    </section>
  );
}
