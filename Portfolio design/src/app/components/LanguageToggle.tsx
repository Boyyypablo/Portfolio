import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

type LanguageToggleProps = {
  variant?: "floating" | "nav";
};

export function LanguageToggle({ variant = "floating" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const shell =
    variant === "nav"
      ? "d-inline-flex align-items-center gap-2 rounded-pill border border-[#E5DED2] bg-white/90 px-3 py-1.5 shadow-md"
      : "fixed top-6 right-6 z-50 d-inline-flex align-items-center gap-2 rounded-pill border border-[#E5DED2] bg-white/90 px-4 py-2 shadow-md";

  return (
    <div className={shell}>
      <Globe className="h-4 w-4 text-[#685D54]" aria-hidden />
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`rounded-pill border-0 px-3 py-1 transition-colors ${
          language === "pt" ? "bg-[#685D54] text-white" : "bg-transparent text-[#685D54] hover:bg-[#E5DED2]/50"
        }`}
        style={{ borderRadius: "50rem" }}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-pill border-0 px-3 py-1 transition-colors ${
          language === "en" ? "bg-[#685D54] text-white" : "bg-transparent text-[#685D54] hover:bg-[#E5DED2]/50"
        }`}
        style={{ borderRadius: "50rem" }}
      >
        EN
      </button>
    </div>
  );
}
