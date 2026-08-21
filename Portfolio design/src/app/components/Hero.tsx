import { useLanguage } from "../context/LanguageContext";
import { Cascade } from "./Cascade";

const profileImage = "/figma/hero-photo.png";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-x-clip bg-gradient-to-br from-[#FBF7F4] via-[#E5DED2] to-[#FBF7F4] pt-28 pb-16 md:pt-32"
    >
      <div className="pointer-events-none absolute top-20 left-10 h-32 w-32 rounded-full bg-[#A39382]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-40 w-40 rounded-full bg-[#685D54]/15 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-12 xl:gap-16">
          <div className="text-left">
            <Cascade delay={0}>
              <h1
                className="mb-6 text-[clamp(3.9rem,9.6vw,8.1rem)] leading-[0.95] tracking-tight text-[#232323]"
                style={{
                  fontFamily: "'Copperplate', 'Copperplate Gothic Light', 'Copperplate Gothic Bold', serif",
                  fontSize: "clamp(3.9rem, 9.6vw, 8.1rem)",
                  lineHeight: 0.95,
                  fontWeight: 400,
                }}
              >
                {t("header.name")}
              </h1>
            </Cascade>

            <Cascade delay={90}>
              <p className="mb-5 max-w-xl text-xl font-semibold text-[#685D54] md:text-[25px] md:leading-8">
                {t("header.role")}
              </p>
            </Cascade>

            <Cascade delay={180}>
              <div className="mb-10 flex max-w-xl items-stretch gap-4">
                <span
                  aria-hidden
                  className="mt-1 w-[3px] shrink-0 self-stretch bg-[#685D54]"
                  style={{ borderRadius: "50rem", minHeight: "3.25rem" }}
                />
                <p className="text-base leading-7 text-[#685D54] md:text-lg">
                  {t("header.description")}
                </p>
              </div>
            </Cascade>

            <Cascade className="flex flex-wrap gap-4" delay={270}>
              <button
                type="button"
                className="rounded-pill border-0 bg-[#685D54] px-8 py-3 text-[#FBF7F4] shadow-lg shadow-[#685D54]/20 transition-colors hover:bg-[#232323]"
                style={{ borderRadius: "50rem" }}
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("header.cta")}
              </button>
              <a
                href="https://www.linkedin.com/in/psbasilio"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-outline inline-flex items-center justify-center rounded-pill border-2 border-[#685D54] px-8 py-3 transition-colors"
                style={{ borderRadius: "50rem", color: "#685D54", textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </Cascade>
          </div>

          <Cascade className="relative mx-auto w-full max-w-[480px] md:max-w-none md:justify-self-end" delay={180}>
            <div className="relative mx-auto w-full max-w-[479px] p-5 sm:p-7">
              <div className="relative aspect-[479/526] w-full">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[#A39382]"
                  style={{
                    borderRadius: 27,
                    transform: "rotate(6.45deg)",
                    zIndex: 0,
                  }}
                />
                <div
                  className="absolute inset-0 overflow-hidden shadow-2xl shadow-[#685D54]/30"
                  style={{ borderRadius: 27, zIndex: 1 }}
                >
                  <img
                    src={profileImage}
                    alt="Pablo Basilio"
                    width={479}
                    height={526}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </Cascade>
        </div>
      </div>
    </section>
  );
}
