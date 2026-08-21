import { useEffect } from "react";
import { LandingHome } from "../projects/cluster/LandingHome";
import "../../styles/cluster.css";

export default function ClusterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <LandingHome />;
}
