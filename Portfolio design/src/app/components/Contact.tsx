import { FormEvent, useState } from "react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Cascade } from "./Cascade";

const CONTACT_EMAIL = "ps.basilio@outlook.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "invalid" | "sending" | "sent">("idle");

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: `mailto:${CONTACT_EMAIL}`,
      display: CONTACT_EMAIL,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      href: "https://wa.link/kzfif6",
      display: "+55 (61) 99680-8636",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/psbasilio",
      display: "linkedin.com/in/psbasilio",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Boyyypablo",
      display: "github.com/Boyyypablo",
    },
  ];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      return;
    }

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");

    const subject = encodeURIComponent(`Portfólio — ${trimmedName}`);
    const body = encodeURIComponent(
      `Nome: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  const feedback =
    status === "error"
      ? t("contact.required")
      : status === "invalid"
        ? t("contact.invalidEmail")
        : status === "sending"
          ? t("contact.sending")
          : status === "sent"
            ? t("contact.sent")
            : null;

  return (
    <section id="contact" className="bg-gradient-to-br from-[#FBF7F4] via-[#E5DED2] to-[#FBF7F4] py-20">
      <div className="container mx-auto px-6">
        <Cascade className="mb-12 text-center">
          <h2 className="mb-4 text-4xl text-[#232323] md:text-5xl">{t("contact.title")}</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#685D54]">{t("contact.description")}</p>
        </Cascade>

        <Cascade className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#E5DED2] bg-[#685D54]">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:gap-10 md:p-10 lg:p-14">
            <div>
              <h3 className="mb-8 text-xl font-bold text-white">{t("contact.connect")}</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-[14px] p-3 transition-colors hover:bg-white/10"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white bg-gradient-to-r from-[#685D54] to-[#A39382] text-white">
                      {link.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white">{link.label}</p>
                      <p className="truncate text-base text-white">{link.display}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#E5DED2] bg-white/90 p-6 md:p-8">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-[#232323]">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    className="form-control bg-[#FBF7F4] border-[#E5DED2] text-[#232323]"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-[#232323]">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    className="form-control bg-[#FBF7F4] border-[#E5DED2] text-[#232323]"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-[#232323]">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    className="form-control bg-[#FBF7F4] border-[#E5DED2] text-[#232323]"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>
                {feedback ? (
                  <p
                    className={`mb-3 small ${status === "sent" ? "text-[#685D54]" : "text-danger"}`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedback}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-2 py-3"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? t("contact.sending") : t("contact.send")}
                </button>
              </form>
            </div>
          </div>
        </Cascade>
      </div>
    </section>
  );
}
