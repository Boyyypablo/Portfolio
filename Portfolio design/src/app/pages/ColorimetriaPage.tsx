import { useEffect } from "react";
import { LandingHome } from "../projects/colorimetria/LandingHome";
import "../../styles/colorimetria.css";

export default function ColorimetriaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <LandingHome />;
}
