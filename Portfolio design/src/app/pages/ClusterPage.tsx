import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { LandingHome } from "../projects/cluster/LandingHome";
import "../../styles/cluster.css";

export default function ClusterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Link
        to="/"
        state={{ scrollTo: "projects" }}
        className="fixed top-4 right-4 z-[110] inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0c0e0d]/90 px-4 py-2 text-sm text-[#e8e4de] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#141917]"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar ao portfólio
      </Link>
      <LandingHome />
    </>
  );
}
