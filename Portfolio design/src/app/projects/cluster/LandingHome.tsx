import { useEffect, useRef, useState, type RefObject } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import clusterLogo from "./logo.png";
import clusterIcon from "./icon.png";

function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, -top / (height - vh)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}

const CHAPTERS = [
  { label: "Início", href: "#hero" },
  { label: "O Projeto", href: "#projeto" },
  { label: "Metais", href: "#metais" },
  { label: "Território", href: "#territorio" },
  { label: "ESG", href: "#esg" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#contato" },
];

const WA = "https://wa.me/5561991540008";

function Logo({ height }: { height: number }) {
  return (
    <img
      src={clusterIcon}
      alt="Cluster Mining"
      height={height}
      style={{ height, width: "auto", objectFit: "contain", display: "block" }}
    />
  );
}

function Nav() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setDark(window.scrollY > 80);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        background: dark ? "rgba(12,14,13,0.92)" : "transparent",
        backdropFilter: dark ? "blur(14px)" : "none",
        borderBottom: dark ? "1px solid rgba(232,228,222,0.06)" : "none",
      }}
    >
      <div className="cluster-shell flex items-center justify-between gap-4 py-3">
        <a href="#hero" className="flex shrink-0 items-center">
          <Logo height={44} />
        </a>
        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-6 xl:gap-7 lg:flex">
          {CHAPTERS.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                style={{ letterSpacing: "0.09em" }}
                className="text-[11px] uppercase text-[#7a8078] transition-colors hover:text-[#e8e4de]"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3a8b7c] px-5 py-2.5 text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-[#4aab9c]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-[11px] uppercase tracking-widest text-[#c8c4be] transition-colors hover:border-white/30 hover:text-[#e8e4de]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Portfólio
          </Link>
        </div>
        <button type="button" className="p-2 text-[#e8e4de] lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
            <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="cluster-shell border-t border-[rgba(232,228,222,0.07)] bg-[#0c0e0d] py-4 lg:hidden">
          {CHAPTERS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[rgba(232,228,222,0.05)] py-3 text-sm uppercase tracking-widest text-[#c8c4be]"
            >
              {c.label}
            </a>
          ))}
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center gap-2 py-3 text-sm uppercase tracking-widest text-[#3a8b7c]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao portfólio
          </Link>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const outer = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(outer);
  const imgScale = 1 + p * 0.18;
  const titleY = p * -120;
  const titleO = 1 - p * 2.2;

  return (
    <div ref={outer} id="hero" style={{ height: "260vh" }}>
      <div className="cluster-sticky-panel" style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${imgScale})`,
            transformOrigin: "center",
            transition: "transform 0.05s linear",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1695169152266-d9ac86fab9c5?w=1800&h=1200&fit=crop&auto=format"
            alt="Operação de mineração e exploração mineral"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.62) saturate(0.85) contrast(1.05)" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0c0e0d 18%, rgba(12,14,13,0.28) 55%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,14,13,0.55) 35%, transparent 78%)" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div className="cluster-shell" style={{ paddingBottom: "100px" }}>
          <div style={{ maxWidth: "720px", transform: `translateY(${titleY}px)`, opacity: Math.max(0, titleO) }}>
            <div className="hero-tag" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#3a8b7c" }} />
              <span style={{ fontSize: "11px", color: "#3a8b7c", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Mineradora · Projeto Limoeiro — PE
              </span>
            </div>
            <div className="hero-title" style={{ marginBottom: "18px" }}>
              <img
                src={clusterLogo}
                alt="Cluster Mining — Extraindo riquezas antigas, respeitando o presente, construindo um futuro."
                style={{ width: "min(520px, 90vw)", height: "auto", display: "block" }}
              />
            </div>
            <p className="hero-sub" style={{ fontSize: "clamp(15px, 2.2vw, 18px)", color: "#e8e4de", lineHeight: 1.55, maxWidth: "540px", marginBottom: "22px" }}>
              Somos a <strong style={{ color: "#fff", fontWeight: 500 }}>Cluster Mining</strong>, mineradora focada em exploração responsável de{" "}
              <strong style={{ color: "#fff", fontWeight: 500 }}>níquel, cobre e metais do grupo da platina</strong> em Pernambuco.
            </p>
            <div className="hero-cta" style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              {["Níquel", "Cobre", "PGE"].map((m) => (
                <span
                  key={m}
                  style={{
                    padding: "6px 16px",
                    border: "1px solid rgba(58,139,124,0.55)",
                    color: "#7dcec0",
                    fontSize: "11px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    background: "rgba(12,14,13,0.35)",
                  }}
                >
                  {m}
                </span>
              ))}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginLeft: "4px",
                  padding: "10px 20px",
                  background: "#3a8b7c",
                  color: "#fff",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Fale conosco
              </a>
            </div>
          </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            opacity: Math.max(0, 1 - p * 5),
          }}
        >
          <span style={{ fontSize: "10px", color: "#a8aea6", letterSpacing: "0.2em", textTransform: "uppercase" }}>Role para descobrir</span>
          <div className="cluster-scroll-hint" style={{ width: "1px", height: "40px", background: "rgba(58,139,124,0.6)" }} />
        </div>
      </div>
    </div>
  );
}

function Manifesto() {
  const outer = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(outer);
  const words = ["Mineração", "responsável", "não", "é", "contradição", "de", "termos.", "É", "o", "nosso", "ponto", "de", "partida."];

  return (
    <div ref={outer} id="projeto" style={{ height: "300vh", background: "#0c0e0d" }}>
      <div
        className="cluster-sticky-panel"
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.28 + p * 0.2 }}>
          <img
            src="https://images.unsplash.com/photo-1560872236-f1232b00263f?w=1600&h=900&fit=crop&auto=format"
            alt="Paisagem mineral"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55) saturate(0.7)" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,14,13,0.55)" }} />

        <div className="cluster-shell" style={{ position: "relative", maxWidth: "min(900px, var(--cluster-showcase))", paddingTop: 0, paddingBottom: 0, textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "20px",
              opacity: p > 0.05 ? 1 : 0,
              transition: "opacity 0.6s",
            }}
          >
            <div style={{ width: "24px", height: "1px", background: "#3a8b7c" }} />
            <span style={{ fontSize: "11px", color: "#3a8b7c", letterSpacing: "0.2em", textTransform: "uppercase" }}>Quem somos</span>
            <div style={{ width: "24px", height: "1px", background: "#3a8b7c" }} />
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "#c8c4be",
              letterSpacing: "0.04em",
              marginBottom: "28px",
              opacity: p > 0.08 ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          >
            A Cluster Mining é uma mineradora brasileira. Nosso trabalho é explorar e desenvolver recursos minerais com responsabilidade.
          </p>

          <p style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,4.5vw,3.2rem)", lineHeight: 1.2, color: "#e8e4de" }}>
            {words.map((w, i) => {
              const threshold = i / words.length;
              const wordP = Math.min(1, Math.max(0, ((p - threshold) / (1 / words.length)) * 1.5));
              return (
                <span
                  key={`${w}-${i}`}
                  style={{
                    display: "inline-block",
                    marginRight: "0.3em",
                    opacity: wordP,
                    transform: `translateY(${(1 - wordP) * 12}px)`,
                    color: i >= 7 ? "#3a8b7c" : "#e8e4de",
                  }}
                >
                  {w}
                </span>
              );
            })}
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "56px",
              opacity: Math.max(0, (p - 0.6) * 3),
              transform: `translateY(${Math.max(0, (1 - (p - 0.6) * 3)) * 20}px)`,
            }}
          >
            {[
              { label: "Missão", text: "Gerar riqueza e oportunidades de forma responsável e sustentável." },
              { label: "Visão", text: "Ser referência de desempenho no setor mineral brasileiro." },
              { label: "Valores", text: "Inovação · Vontade · Cuidado" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  border: "1px solid rgba(232,228,222,0.1)",
                  padding: "20px 24px",
                  maxWidth: "220px",
                  textAlign: "left",
                  background: "rgba(12,14,13,0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ fontSize: "10px", color: "#3a8b7c", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>
                  {item.label}
                </div>
                <p style={{ fontSize: "12px", color: "#c8c4be", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const METALS = [
  {
    symbol: "Ni",
    name: "Níquel",
    num: "28",
    color: "#3a8b7c",
    tagline: "O motor da transição energética",
    desc: "Do aço inoxidável às baterias de íons de lítio, o Níquel é o metal que alimenta a mobilidade elétrica e a infraestrutura sustentável do século XXI.",
    apps: ["Aço inoxidável", "Baterias de veículos elétricos", "Ligas de alta performance", "Geração de energia"],
    img: "https://images.unsplash.com/photo-1764022276404-85682f38ae35?w=1600&h=900&fit=crop&auto=format",
    imgFilter: "brightness(0.72) saturate(0.95) contrast(1.05)",
  },
  {
    symbol: "Cu",
    name: "Cobre",
    num: "29",
    color: "#c87941",
    tagline: "O condutor que move o mundo moderno",
    desc: "Presente em toda infraestrutura elétrica do planeta, o Cobre é indispensável para energias renováveis, eletrônica de consumo e construção civil.",
    apps: ["Condutores elétricos", "Painéis solares", "Eletrônicos", "Latão e bronze"],
    img: "https://images.unsplash.com/photo-1598125443624-9cca7bb8c633?w=1600&h=900&fit=crop&auto=format",
    imgFilter: "brightness(0.7) saturate(1.05) contrast(1.05)",
  },
  {
    symbol: "PGE",
    name: "Grupo da Platina",
    num: "44–46",
    color: "#9090a8",
    tagline: "Metais raros que definem a alta tecnologia",
    desc: "Rutênio, Ródio, Paládio, Ósmio, Irídio e Platina — os seis elementos mais escassos e estratégicos do planeta, essenciais para catálise, eletrônica e joalheria.",
    apps: ["Catalisadores industriais", "Células de combustível", "Eletrônica de precisão", "Joias e luxo"],
    img: "https://images.unsplash.com/photo-1683464276767-bfac74dbd6b8?w=1600&h=900&fit=crop&auto=format",
    imgFilter: "brightness(0.68) saturate(0.55) contrast(1.05)",
  },
];

function Metals() {
  const [panel, setPanel] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = METALS[panel];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setPanel((i) => (i + 1) % METALS.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused]);

  function go(delta: number) {
    setPanel((i) => (i + delta + METALS.length) % METALS.length);
  }

  return (
    <section
      id="metais"
      className="cluster-metals-carousel"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#0c0e0d" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {METALS.map((m, i) => (
        <div
          key={m.symbol}
          aria-hidden={i !== panel}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === panel ? 1 : 0,
            transition: "opacity 0.7s ease",
            pointerEvents: i === panel ? "auto" : "none",
          }}
        >
          <img
            src={m.img}
            alt={`Exploração de ${m.name}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: m.imgFilter }}
          />
        </div>
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,14,13,0.88) 42%, rgba(12,14,13,0.25) 100%)" }} />

      <div className="cluster-shell" style={{ position: "relative", zIndex: 2, minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "540px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: current.color }} />
            <span style={{ fontSize: "11px", color: current.color, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Metais que exploramos
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
            {METALS.map((m, i) => (
              <button
                key={m.symbol}
                type="button"
                aria-label={`Ver ${m.name}`}
                aria-current={i === panel}
                onClick={() => setPanel(i)}
                style={{
                  height: "3px",
                  flex: 1,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: i === panel ? m.color : "rgba(232,228,222,0.2)",
                  transition: "background 0.4s",
                }}
              />
            ))}
          </div>

          <div
            style={{
              fontSize: "11px",
              color: current.color,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontFamily: "monospace", border: `1px solid ${current.color}`, padding: "2px 8px", opacity: 0.85 }}>{current.num}</span>
            Commodities
          </div>

          <div
            key={current.symbol}
            className="cluster-metal-slide"
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: "clamp(3.5rem,9vw,6.5rem)",
              lineHeight: 0.95,
              color: current.color,
              marginBottom: "12px",
            }}
          >
            {current.symbol}
          </div>
          <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.4rem,3vw,2rem)", color: "#e8e4de", marginBottom: "6px" }}>
            {current.name}
          </div>
          <div style={{ fontSize: "13px", color: "#a8aea6", fontStyle: "italic", marginBottom: "24px" }}>{current.tagline}</div>
          <div style={{ width: "40px", height: "1px", background: current.color, marginBottom: "24px" }} />
          <p style={{ fontSize: "14px", color: "#d8d4ce", lineHeight: 1.75, marginBottom: "28px" }}>{current.desc}</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "36px" }}>
            {current.apps.map((a) => (
              <li key={a} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#a8aea6" }}>
                <span style={{ color: current.color }}>—</span>
                {a}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Metal anterior"
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid rgba(232,228,222,0.25)",
                background: "rgba(12,14,13,0.5)",
                color: "#e8e4de",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo metal"
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid rgba(232,228,222,0.25)",
                background: "rgba(12,14,13,0.5)",
                color: "#e8e4de",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ›
            </button>
            <span style={{ fontSize: "11px", color: "#7a8078", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {panel + 1} / {METALS.length}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: "max(var(--cluster-gutter), calc((100% - var(--cluster-showcase)) / 2 + var(--cluster-gutter)))",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'DM Serif Display',serif",
          fontSize: "clamp(8rem,18vw,14rem)",
          color: current.color,
          opacity: 0.08,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {current.symbol}
      </div>
    </section>
  );
}

function Territory() {
  return (
    <section id="territorio" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#0c0e0d" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1599954024677-f2d7554b1f26?w=1800&h=1200&fit=crop&auto=format"
          alt="Paisagem da região de Limoeiro, Pernambuco"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65) saturate(0.8) contrast(1.05)" }}
        />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,14,13,0.78) 38%, rgba(12,14,13,0.35) 100%)" }} />

      <div
        className="cluster-shell cluster-territory-grid"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          paddingTop: "120px",
          paddingBottom: "80px",
          gap: "60px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "24px", height: "1px", background: "#c9a0bc" }} />
            <span style={{ fontSize: "11px", color: "#c9a0bc", letterSpacing: "0.2em", textTransform: "uppercase" }}>Onde a mineradora atua</span>
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", lineHeight: 1.05, color: "#e8e4de", marginBottom: "20px" }}>
            Limoeiro,
            <br />
            <em style={{ color: "#c9a0bc" }}>Pernambuco</em>
          </h2>
          <p style={{ fontSize: "15px", color: "#e8e4de", lineHeight: 1.7, marginBottom: "14px" }}>
            A Cluster Mining desenvolve o <strong style={{ fontWeight: 500 }}>Projeto Limoeiro</strong>: exploração mineral responsável na Província Borborema,
            no Nordeste do Brasil.
          </p>
          <p style={{ fontSize: "14px", color: "#c8c4be", lineHeight: 1.8, marginBottom: "14px" }}>
            Nossa área de operação abrange municípios como Limoeiro, Machados, Orobó e Bom Jardim — um dos domínios geológicos mais promissores da região.
          </p>
          <p style={{ fontSize: "13px", color: "#a8aea6", lineHeight: 1.8, marginBottom: "32px" }}>
            O depósito está associado a zonas de cisalhamento da orogênese brasiliana, contexto favorável à concentração de sulfetos de Ni–Cu e minerais do
            grupo da platina.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginBottom: "28px" }}>
            {["Limoeiro", "Machados", "Orobó", "Bom Jardim"].map((m) => (
              <div
                key={m}
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderBottom: "1px solid rgba(232,228,222,0.12)" }}
              >
                <span style={{ color: "#c9a0bc", fontSize: "10px" }}>◆</span>
                <span style={{ fontSize: "13px", color: "#e8e4de" }}>{m}</span>
              </div>
            ))}
          </div>
          <a
            href="#contato"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 22px",
              border: "1px solid rgba(58,139,124,0.7)",
              color: "#7dcec0",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Quero falar com a mineradora
          </a>
        </div>

        <div>
          <div style={{ border: "1px solid rgba(201,160,188,0.4)", padding: "40px", background: "rgba(12,14,13,0.72)", backdropFilter: "blur(12px)" }}>
            <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#a8aea6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px" }}>
              Contexto Geológico
            </div>
            {[
              { label: "Domínio", value: "Província Borborema" },
              { label: "Estrutura", value: "Zona de Cisalhamento" },
              { label: "Orogênese", value: "Brasiliana (~600 Ma)" },
              { label: "Tipo de projeto", value: "Greenfield" },
              { label: "Alvo primário", value: "Sulfetos de Ni–Cu–PGE" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(232,228,222,0.1)",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontSize: "10px", color: "#a8aea6", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
                <span style={{ fontSize: "13px", color: "#e8e4de", textAlign: "right" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ESG_PILLARS = [
  {
    tag: "E",
    full: "Meio Ambiente",
    color: "#3a8b7c",
    items: ["Gestão ambiental integrada", "Uso de recursos renováveis", "Redução da pegada ambiental", "Monitoramento de fauna e flora"],
  },
  {
    tag: "S",
    full: "Social",
    color: "#7b5470",
    items: ["Geração de emprego local", "Educação e capacitação", "Qualidade de vida nas comunidades", "Engajamento ativo com moradores"],
  },
  {
    tag: "G",
    full: "Governança",
    color: "#9090a8",
    items: ["Formação de líderes", "Ética e transparência", "Participação da comunidade", "Relatórios e prestação de contas"],
  },
];

function Esg() {
  const outer = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(outer);

  return (
    <div ref={outer} id="esg" style={{ height: "350vh", background: "#0e1210" }}>
      <div
        className="cluster-sticky-panel cluster-shell"
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 0, paddingBottom: 0 }}
      >
        <div style={{ marginBottom: "60px", opacity: Math.min(1, p * 6), transform: `translateY(${Math.max(0, (1 - p * 6)) * 24}px)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: "24px", height: "1px", background: "#3a8b7c" }} />
            <span style={{ fontSize: "11px", color: "#3a8b7c", letterSpacing: "0.2em", textTransform: "uppercase" }}>Compromisso ESG</span>
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", color: "#e8e4de", lineHeight: 1.1 }}>
            Mineração responsável não é
            <br />
            contradição de termos.
          </h2>
        </div>

        <div className="cluster-esg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(232,228,222,0.07)" }}>
          {ESG_PILLARS.map((pillar, i) => {
            const threshold = 0.15 + i * 0.22;
            const pillarP = Math.min(1, Math.max(0, (p - threshold) / 0.18));
            return (
              <div key={pillar.tag} style={{ background: "#0e1210", padding: "40px", opacity: pillarP, transform: `translateY(${(1 - pillarP) * 30}px)` }}>
                <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "3.5rem", color: pillar.color, lineHeight: 1, marginBottom: "12px" }}>
                  {pillar.tag}
                </div>
                <div style={{ fontSize: "15px", color: "#e8e4de", marginBottom: "20px", fontWeight: 300 }}>{pillar.full}</div>
                <div style={{ width: "28px", height: "1px", background: pillar.color, marginBottom: "20px" }} />
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {pillar.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "10px", fontSize: "12px", color: "#7a8078", lineHeight: 1.5 }}>
                      <span style={{ color: pillar.color, flexShrink: 0, marginTop: "2px" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { n: "01", title: "Decisão", desc: "Seleção criteriosa de projetos com base em dados geológicos regionais e potencial metalogenético.", tools: [] as string[] },
  { n: "02", title: "Geração de Alvos", desc: "Integração de dados para identificar as zonas de maior interesse.", tools: ["Mapeamento geológico", "Geofísica", "Geoquímica"] },
  { n: "03", title: "Definição", desc: "Refinamento dos alvos com técnicas avançadas e análise computacional.", tools: ["Machine learning", "Modelagem 3D"] },
  { n: "04", title: "Teste", desc: "Validação dos alvos com campanha de sondagem e análises laboratoriais.", tools: ["Sondagem", "Análises químicas"] },
  { n: "05", title: "Recursos & Reservas", desc: "Estimativa e classificação dos recursos minerais conforme padrões internacionais.", tools: ["Estimativa de recursos", "Relatório técnico"] },
];

function Method() {
  const outer = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(outer);
  const lineW = `${Math.min(100, p * 130)}%`;

  return (
    <div ref={outer} id="metodo" style={{ height: "350vh", background: "#0c0e0d" }}>
      <div
        className="cluster-sticky-panel cluster-shell"
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 0, paddingBottom: 0 }}
      >
        <div style={{ marginBottom: "56px", opacity: Math.min(1, p * 5), transform: `translateY(${Math.max(0, (1 - p * 5)) * 20}px)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: "24px", height: "1px", background: "#7b5470" }} />
            <span style={{ fontSize: "11px", color: "#7b5470", letterSpacing: "0.2em", textTransform: "uppercase" }}>Como Trabalhamos</span>
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#e8e4de", lineHeight: 1.1 }}>
            Método científico em cinco etapas
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "20px", left: "20px", right: 0, height: "1px", background: "rgba(58,139,124,0.12)" }} />
          <div style={{ position: "absolute", top: "20px", left: "20px", width: lineW, height: "1px", background: "#3a8b7c", transition: "width 0.08s linear", opacity: 0.7 }} />

          <div className="cluster-method-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "24px" }}>
            {STEPS.map((s, i) => {
              const stepThreshold = i / STEPS.length;
              const stepP = Math.min(1, Math.max(0, (p - stepThreshold) / 0.15));
              const isActive = p > stepThreshold + 0.02;
              return (
                <div key={s.n} style={{ opacity: stepP, transform: `translateY(${(1 - stepP) * 20}px)` }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: `1px solid ${isActive ? "#3a8b7c" : "rgba(58,139,124,0.25)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      background: isActive ? "rgba(58,139,124,0.08)" : "#0c0e0d",
                      transition: "border-color 0.4s, background 0.4s",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: "10px", color: isActive ? "#3a8b7c" : "#3a4540" }}>{s.n}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'DM Serif Display',serif",
                      fontSize: "16px",
                      color: isActive ? "#e8e4de" : "#4a5550",
                      marginBottom: "8px",
                      transition: "color 0.4s",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "11px", color: "#7a8078", lineHeight: 1.65, marginBottom: "12px" }}>{s.desc}</p>
                  {s.tools.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {s.tools.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "9px",
                            color: "#3a8b7c",
                            border: "1px solid rgba(58,139,124,0.3)",
                            padding: "2px 7px",
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "rgba(232,228,222,0.05)" }}>
          <div style={{ height: "100%", width: lineW, background: "#3a8b7c", transition: "width 0.08s linear" }} />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contato" style={{ minHeight: "100vh", background: "#0c0e0d", display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "120px" }}>
      <div
        className="cluster-shell cluster-contact-grid"
        style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "24px", height: "1px", background: "#3a8b7c" }} />
            <span style={{ fontSize: "11px", color: "#3a8b7c", letterSpacing: "0.2em", textTransform: "uppercase" }}>Fale com a Cluster Mining</span>
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4.5vw,3.5rem)", color: "#e8e4de", lineHeight: 1.1, marginBottom: "24px" }}>
            Entre em contato com a mineradora
          </h2>
          <p style={{ fontSize: "14px", color: "#c8c4be", lineHeight: 1.8, maxWidth: "440px", marginBottom: "16px" }}>
            Seja investidor, parceiro, pesquisador ou membro da comunidade — a Cluster Mining está aberta ao diálogo sobre o Projeto Limoeiro e nossas
            operações de exploração mineral.
          </p>
          <p style={{ fontSize: "13px", color: "#a8aea6", lineHeight: 1.8, maxWidth: "440px", marginBottom: "40px" }}>
            Prefere agilidade? Chame no WhatsApp ou envie um e-mail. Respondemos com atenção.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              {
                label: "WhatsApp",
                value: "+55 61 99154-0008",
                href: WA,
                icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
              },
              { label: "E-mail", value: "clustermining@gmail.com", href: "mailto:clustermining@gmail.com", icon: "M2 4h20v16H2z M2 4l10 9 10-9" },
              { label: "Instagram", value: "@clustermining", href: "https://instagram.com/clustermining", icon: "M4 4h16v16H4z M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0 M17 7h.01" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "18px 20px",
                  border: "1px solid rgba(232,228,222,0.07)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3a8b7c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,228,222,0.07)";
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid #3a8b7c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#3a8b7c",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={c.label === "WhatsApp" ? "currentColor" : "none"} stroke={c.label !== "WhatsApp" ? "currentColor" : "none"} strokeWidth="1.5">
                    <path d={c.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#7a8078", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>{c.label}</div>
                  <div style={{ fontSize: "13px", color: "#c8c4be" }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ border: "1px solid rgba(232,228,222,0.08)", padding: "48px" }}>
          <div style={{ fontSize: "11px", color: "#3a8b7c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
            Sobre a empresa
          </div>
          <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "22px", color: "#e8e4de", marginBottom: "6px" }}>Cluster Mining</div>
          <div style={{ fontSize: "13px", color: "#c8c4be", marginBottom: "8px" }}>Mineradora · Projeto Limoeiro</div>
          <div style={{ fontSize: "11px", color: "#7a8078", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "28px" }}>
            Província Borborema · Pernambuco
          </div>
          {[
            ["Alvos", "Ni · Cu · PGE"],
            ["Tipo", "Greenfield"],
            ["Contexto", "Zona de cisalhamento brasiliana"],
            ["Municípios", "Limoeiro, Machados, Orobó, Bom Jardim"],
            ["Fundação", "2024"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", gap: "16px", padding: "12px 0", borderBottom: "1px solid rgba(232,228,222,0.06)", alignItems: "flex-start" }}>
              <span style={{ fontSize: "10px", color: "#7a8078", textTransform: "uppercase", letterSpacing: "0.08em", width: "100px", flexShrink: 0, paddingTop: "2px" }}>
                {k}
              </span>
              <span style={{ fontSize: "13px", color: "#c8c4be" }}>{v}</span>
            </div>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "32px",
              padding: "14px 28px",
              background: "#3a8b7c",
              color: "white",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4aab9c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#3a8b7c";
            }}
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(232,228,222,0.07)", paddingTop: "32px", paddingBottom: "32px", background: "#0c0e0d" }}>
      <div className="cluster-shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <a href="#hero">
          <Logo height={48} />
        </a>
        <div style={{ fontSize: "10px", color: "#3a4540", letterSpacing: "0.1em", textAlign: "center" }}>
          Limoeiro · Pernambuco · Brasil · © 2024 Cluster Mining
        </div>
        <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {CHAPTERS.slice(1).map((c) => (
            <a
              key={c.href}
              href={c.href}
              style={{ fontSize: "10px", color: "#7a8078", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c8c4be";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#7a8078";
              }}
            >
              {c.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function LandingHome() {
  return (
    <div className="cluster-root">
      <Nav />
      <Hero />
      <Manifesto />
      <Metals />
      <Territory />
      <Esg />
      <Method />
      <Contact />
      <Footer />
    </div>
  );
}
