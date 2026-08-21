import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { Cascade } from "./Cascade";
import { GlowingLogo } from "./GlowingLogo";
import clusterLogo from "../projects/cluster/logo.png";

export function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="bg-gradient-to-br from-[#FBF7F4] via-white to-[#E5DED2] py-20">
      <div className="container mx-auto px-6">
        <Cascade className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-[#232323] md:text-5xl">{t("projects.title")}</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#685D54]">{t("projects.description")}</p>
        </Cascade>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Cascade
              key={project.id}
              className="group overflow-hidden rounded-[30px] border border-[#E5DED2] bg-white/90 hover:shadow-lg"
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
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <GlowingLogo size="cover" bg="light" />
                    )}
                  </div>
                ) : project.cover === "cluster-logo" ? (
                  <div
                    className="flex h-full w-full items-center justify-center px-10"
                    style={{ backgroundColor: "#0c0e0d" }}
                    role="img"
                    aria-label={project.imageAlt}
                  >
                    <img
                      src={clusterLogo}
                      alt={project.imageAlt}
                      className="max-h-[72%] max-w-[82%] object-contain"
                    />
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
                <h3 className="mb-4 text-2xl text-[#232323] md:text-[30px]">{project.title}</h3>
                <p className="mb-6 leading-relaxed text-[#685D54]">{project.description[language]}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#E5DED2]/70 px-3 py-1 text-sm text-[#685D54]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.path}
                  className="inline-flex items-center gap-2 rounded-pill bg-[#685D54] px-5 py-2.5 transition-colors hover:bg-[#232323]"
                  style={{ borderRadius: "50rem", color: "#FBF7F4", textDecoration: "none" }}
                >
                  {t("projects.viewProject")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Cascade>
          ))}
        </div>
      </div>
    </section>
  );
}
