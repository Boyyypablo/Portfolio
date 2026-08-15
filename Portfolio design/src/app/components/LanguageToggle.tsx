import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-white/90 border border-[#E5DED2] rounded-full px-4 py-2 shadow-md">
        <Globe className="w-4 h-4 text-[#685D54]" />
        <button
          type="button"
          onClick={() => setLanguage("pt")}
          className={`px-3 py-1 rounded-full transition-colors ${
            language === "pt"
              ? "bg-[#685D54] text-white"
              : "text-[#685D54] hover:bg-[#E5DED2]/50"
          }`}
        >
          PT
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded-full transition-colors ${
            language === "en"
              ? "bg-[#685D54] text-white"
              : "text-[#685D54] hover:bg-[#E5DED2]/50"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
