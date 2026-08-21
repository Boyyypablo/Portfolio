import { useEffect, useState } from "react";
import { Collapse } from "bootstrap";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

type NavId = "inicio" | "sobre" | "projects" | "experience" | "contact";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  const links: { id: NavId; label: string }[] = [
    { id: "inicio", label: t("nav.home") },
    { id: "sobre", label: t("nav.about") },
    { id: "projects", label: t("nav.portfolio") },
    { id: "experience", label: t("nav.experience") },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: NavId) {
    const collapseEl = document.getElementById("portfolioNav");
    if (collapseEl?.classList.contains("show")) {
      Collapse.getOrCreateInstance(collapseEl).hide();
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 md:pt-6 ${
        scrolled ? "pt-3 md:pt-4" : ""
      }`}
    >
      <nav
        className="relative w-full max-w-[1447px] rounded-[59px] border border-[#4a4a4a] bg-[#685D54] px-5 py-3 shadow-lg shadow-[#685D54]/25 md:px-10 md:py-4"
        aria-label="Principal"
      >
        <div className="d-flex align-items-center justify-content-between gap-3">
          <button
            type="button"
            className="navbar-toggler border-0 d-md-none p-2 text-white"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNav"
            aria-controls="portfolioNav"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
          </button>

          <ul className="d-none d-md-flex align-items-center gap-4 gap-lg-5 list-unstyled mb-0">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="btn btn-link text-decoration-none text-white fw-semibold p-0"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="ms-auto">
            <LanguageToggle variant="nav" />
          </div>
        </div>

        <div className="collapse d-md-none mt-3" id="portfolioNav">
          <ul className="list-unstyled mb-0 rounded-4 border border-[#E5DED2] bg-[#FBF7F4] p-3">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="btn btn-link text-decoration-none w-100 text-start fw-semibold text-[#685D54] rounded-3"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
