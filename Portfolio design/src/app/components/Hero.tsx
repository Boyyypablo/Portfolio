import { ArrowDown, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const profileImage = "/foto-prof.png";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FBF7F4] via-[#E5DED2] to-[#FBF7F4]">
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#A39382]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#685D54]/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="mb-6">
              <img
                src={profileImage}
                alt="Pablo dos Santos Basilio"
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-white shadow-lg shadow-[#685D54]/20"
              />
            </div>

            <h1
              className="text-5xl md:text-7xl text-[#232323]"
              style={{ fontFamily: "'Copperplate', 'Copperplate Gothic Light', 'Copperplate Gothic Bold', serif" }}
            >
              {t("header.name")}
            </h1>
          </div>

          <div className="flex flex-col items-center gap-1 mb-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#A39382]" />
              <span className="text-[#A39382]">{t("location")}</span>
            </div>
            <span className="text-sm text-[#A39382]">{t("header.languages")}</span>
          </div>

          <p className="text-xl md:text-2xl text-[#685D54] mb-8 max-w-2xl mx-auto">
            {t("header.role")}
          </p>

          <p className="text-base md:text-lg text-[#685D54] max-w-3xl mx-auto mb-12">
            {t("header.description")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              className="px-8 py-3 bg-[#685D54] text-[#FBF7F4] rounded-full hover:bg-[#232323] transition-colors shadow-lg shadow-[#685D54]/20"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("header.cta")}
            </button>
            <a
              href="https://www.linkedin.com/in/pablo-dos-santos-basilio-273b4b212/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#685D54] text-[#685D54] rounded-full hover:bg-[#685D54] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-[#A39382]" />
      </div>
    </section>
  );
}
