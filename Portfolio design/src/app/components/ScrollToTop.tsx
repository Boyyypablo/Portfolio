import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const scrollTo = (state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) return;

    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
}
