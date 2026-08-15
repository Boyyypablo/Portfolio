import { useState } from "react";

type Props = {
  num: string;
  title: string;
  sub: string;
  desc: string;
  img: string;
  alt: string;
};

export function LandingServiceCard({
  num,
  title,
  sub,
  desc,
  img,
  alt,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="lp-service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="lp-service-card__media">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
      </div>
      <div className="lp-service-card__body">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <p className="lp-eyebrow !mb-0">{sub}</p>
          <span className="font-display text-3xl font-light text-[var(--lp-blush)] opacity-50">
            {num}
          </span>
        </div>
        <h3 className="font-display mb-3 text-[1.35rem] font-normal">{title}</h3>
        <p className="text-[0.88rem] font-light leading-relaxed text-[#6A5A4A]">
          {desc}
        </p>
        <p
          className="mt-6 inline-flex items-center gap-1.5 text-[0.78rem] uppercase tracking-[0.1em] text-[var(--lp-terracotta)] transition-opacity"
          style={{ opacity: hovered ? 1 : 0.6 }}
        >
          Saiba mais{" "}
          <span
            className="transition-transform"
            style={{ transform: hovered ? "translateX(4px)" : "none" }}
          >
            →
          </span>
        </p>
      </div>
    </article>
  );
}
