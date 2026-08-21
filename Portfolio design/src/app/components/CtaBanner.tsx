import { useLanguage } from "../context/LanguageContext";
import { Cascade } from "./Cascade";

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="relative z-10 -mt-6 px-6 pb-8 md:-mt-10 md:pb-4">
      <Cascade className="relative mx-auto max-w-6xl overflow-hidden rounded-[38px] border border-[#E5DED2]">
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[38px]">
          <div
            className="absolute inset-0 rounded-[38px]"
            style={{
              backgroundImage: "linear-gradient(180deg, #685D54 0%, #E8CEB9 152%)",
            }}
          />
          <img
            src="/figma/cta-bg.png"
            alt=""
            className="absolute inset-0 size-full rounded-[38px] object-cover"
            style={{ opacity: 0.45, mixBlendMode: "soft-light" }}
          />
          <img
            src="/figma/cta-bg.png"
            alt=""
            className="absolute inset-0 size-full rounded-[38px] object-cover"
            style={{ opacity: 0.36 }}
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center md:px-16 md:py-20">
          <h2
            className="text-3xl font-semibold md:text-[46px] md:leading-tight"
            style={{ color: "#F9F9F9" }}
          >
            {t("cta.title")}
          </h2>
          <p className="max-w-2xl text-base leading-6 md:text-lg" style={{ color: "#FFFFFF" }}>
            {t("cta.description")}
          </p>
          <a
            href="https://www.linkedin.com/in/psbasilio"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-outline inline-flex h-[52px] min-w-[128px] items-center justify-center rounded-pill border-2 border-white px-8 transition-colors"
            style={{ borderRadius: "50rem", color: "#fff", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
      </Cascade>
    </section>
  );
}
