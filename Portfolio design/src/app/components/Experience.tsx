import { Award, Briefcase, Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Cascade } from "./Cascade";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("exp.nuuma"),
      role: t("exp.nuuma.role"),
      period: t("exp.nuuma.period"),
      descriptions: [
        t("exp.nuuma.desc1"),
        t("exp.nuuma.desc2"),
        t("exp.nuuma.desc3"),
        t("exp.nuuma.desc4"),
        t("exp.nuuma.desc5"),
      ],
    },
    {
      company: t("exp.mjsp"),
      role: t("exp.mjsp.role"),
      period: t("exp.mjsp.period"),
      descriptions: [
        t("exp.mjsp.desc1"),
        t("exp.mjsp.desc2"),
        t("exp.mjsp.desc3"),
        t("exp.mjsp.desc4"),
      ],
    },
    {
      company: t("exp.mjspdev"),
      role: t("exp.mjspdev.role"),
      period: t("exp.mjspdev.period"),
      descriptions: [
        t("exp.mjspdev.desc1"),
        t("exp.mjspdev.desc2"),
        t("exp.mjspdev.desc3"),
      ],
    },
    {
      company: t("exp.startup"),
      role: t("exp.startup.role"),
      period: t("exp.startup.period"),
      descriptions: [
        t("exp.startup.desc1"),
        t("exp.startup.desc2"),
      ],
    },
    {
      company: t("exp.bravus"),
      role: t("exp.bravus.role"),
      period: t("exp.bravus.period"),
      descriptions: [
        t("exp.bravus.desc1"),
        t("exp.bravus.desc2"),
      ],
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
    <section id="experience" className="py-20 bg-gradient-to-br from-[#E5DED2] via-[#FBF7F4] to-[#E5DED2]">
      <div className="container mx-auto px-6">
        <Cascade className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#232323]">{t("experience.title")}</h2>
          <p className="text-lg text-[#685D54]">{t("experience.description")}</p>
        </Cascade>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Cascade
              key={`${exp.company}-${exp.role}`}
              className="bg-white/90 rounded-3xl p-8 border border-[#E5DED2] hover:shadow-lg"
              delay={index * 90}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-1 p-2 rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54]">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-[#232323]">{exp.company}</h3>
                      <p className="text-[#685D54] italic">{exp.role}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#A39382] mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.descriptions.map((desc, descIndex) => (
                  <li key={descIndex} className="flex gap-3 text-[#685D54]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A39382] flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </Cascade>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <Cascade>
            <h3 className="text-3xl mb-8 text-[#232323] text-center">{t("education.title")}</h3>
          </Cascade>

          <div className="space-y-6">
            <Cascade className="bg-white/90 rounded-3xl p-8 border border-[#E5DED2]" delay={80}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54]">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl text-[#232323] mb-2">{t("education.degree")}</h4>
                    <p className="text-[#685D54]">{t("education.institution")}</p>
                    <p className="text-sm text-[#A39382] mt-1">{t("education.status")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#A39382] mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{t("education.period")}</span>
                </div>
              </div>
            </Cascade>

            <Cascade className="bg-white/90 rounded-3xl p-8 border border-[#E5DED2]" delay={160}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54]">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl text-[#232323] mb-2">{t("education.ifb.degree")}</h4>
                    <p className="text-[#685D54]">{t("education.ifb.institution")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#A39382] mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{t("education.ifb.period")}</span>
                </div>
              </div>
            </Cascade>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <Cascade>
            <h3 className="text-3xl mb-8 text-[#232323] text-center">{t("certs.title")}</h3>
          </Cascade>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Cascade key={cert.title} className="bg-white/90 rounded-3xl p-8 border border-[#E5DED2]" delay={index * 90}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-full bg-gradient-to-br from-[#A39382] to-[#685D54]">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl text-[#232323] mb-2">{cert.title}</h4>
                      <p className="text-[#685D54]">{cert.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#A39382] mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.period}</span>
                  </div>
                </div>
              </Cascade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
