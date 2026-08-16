import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import { ScrollToTop } from "./components/ScrollToTop";
import PortfolioPage from "./pages/PortfolioPage";

const ColorimetriaPage = lazy(() => import("./pages/ColorimetriaPage"));
const NuumaPage = lazy(() => import("./pages/NuumaPage"));
const ClusterPage = lazy(() => import("./pages/ClusterPage"));

function PageFallback() {
  return <div className="min-h-screen bg-[#FBF7F4]" aria-hidden />;
}

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projetos/glowing" element={<ColorimetriaPage />} />
          <Route path="/projetos/colorimetria" element={<Navigate to="/projetos/glowing" replace />} />
          <Route path="/projetos/nuuma" element={<NuumaPage />} />
          <Route path="/projetos/cluster" element={<ClusterPage />} />
        </Routes>
      </Suspense>
    </LanguageProvider>
  );
}
