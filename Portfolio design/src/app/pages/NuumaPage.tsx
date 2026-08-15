import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { LandingHome } from "../projects/nuuma/LandingHome";
import "../../styles/nuuma.css";

export default function NuumaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Link
        to="/"
        state={{ scrollTo: "projects" }}
        className="fixed top-4 left-4 z-[60] inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/95 px-4 py-2 text-sm text-[#1a1208] shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar ao portfólio
      </Link>
      <LandingHome />
    </>
  );
}
