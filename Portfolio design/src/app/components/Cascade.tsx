import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from "react";

type CascadeProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function Cascade({ className = "", delay = 0, style, children, ...props }: CascadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const reveal = () => setShown(true);

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`cascade${shown ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, "--cascade-delay": `${delay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
