import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 bg-gradient-to-r from-[#E5DED2] to-[#FBF7F4] border-t border-[#A39382]/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-[#685D54]">
            © {new Date().getFullYear()} Pablo dos Santos Basilio. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}