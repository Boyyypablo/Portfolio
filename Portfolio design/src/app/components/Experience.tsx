import { Award, Briefcase, Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Cascade } from "./Cascade";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("exp.nuuma"),
      role: t("exp.nuuma.role"),
      period: t("exp.nuuma.year"),
    },
    {
      company: t("exp.bravus"),
      role: t("exp.bravus.role"),
      period: t("exp.bravus.year"),
    },
    {
      company: t("exp.startup"),
      role: t("exp.startup.role"),
      period: t("exp.startup.year"),
    },
    {
      company: t("exp.mjspdev"),
      role: t("exp.mjspdev.role"),
      period: t("exp.mjspdev.year"),
    },
  ];

  const certifications = [
    {
      title: t("certs.apex"),
      desc: t("certs.apex.desc"),
      period: t("certs.apex.period"),
    },
    {
      title: t("certs.itil"),
      desc: t("certs.itil.desc"),
      period: t("certs.itil.period"),
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#E5DED2] via-[#FBF7F4] to-[#E5DED2] py-20"
    >
      <div className="container mx-auto px-6">
        <Cascade className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-[#232323] md:text-5xl">{t("experience.title")}</h2>
          <p className="text-lg text-[#685D54]">{t("experience.description")}</p>
        </Cascade>

        <div className="mx-auto max-w-4xl space-y-5">
          {experiences.map((exp, index) => (
            <Cascade
              key={`${exp.company}-${exp.role}`}
              className="rounded-3xl border border-[#E5DED2] bg-white/90 px-6 py-5 md:px-8"
              delay={index * 70}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54] p-2">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#232323] md:text-xl">{exp.company}</h3>
                    <p className="text-[#685D54]">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#A39382] md:shrink-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
            </Cascade>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Cascade>
            <h3 className="mb-8 text-center text-3xl text-[#232323]">{t("certs.title")}</h3>
          </Cascade>
          <div className="space-y-5">
            {certifications.map((cert, index) => (
              <Cascade
                key={cert.title}
                className="rounded-3xl border border-[#E5DED2] bg-white/90 px-6 py-5 md:px-8"
                delay={index * 70}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54] p-2">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#232323] md:text-xl">{cert.title}</h4>
                      <p className="text-[#685D54]">{cert.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#A39382] md:shrink-0">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{cert.period}</span>
                  </div>
                </div>
              </Cascade>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Cascade>
            <h3 className="mb-8 text-center text-3xl text-[#232323]">{t("education.title")}</h3>
          </Cascade>

          <div className="space-y-5">
            <Cascade className="rounded-3xl border border-[#E5DED2] bg-white/90 px-6 py-5 md:px-8" delay={80}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54] p-2">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#232323] md:text-xl">{t("education.degree")}</h4>
                    <p className="text-[#685D54]">{t("education.institution")}</p>
                    <p className="mt-1 text-sm text-[#A39382]">{t("education.status")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#A39382] md:shrink-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{t("education.period")}</span>
                </div>
              </div>
            </Cascade>

            <Cascade className="rounded-3xl border border-[#E5DED2] bg-white/90 px-6 py-5 md:px-8" delay={160}>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54] p-2">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#232323] md:text-xl">{t("education.ifb.degree")}</h4>
                    <p className="text-[#685D54]">{t("education.ifb.institution")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#A39382] md:shrink-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{t("education.ifb.period")}</span>
                </div>
              </div>
            </Cascade>
          </div>
        </div>
      </div>
    </section>
  );
}
