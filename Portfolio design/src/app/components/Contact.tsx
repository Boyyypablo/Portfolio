import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:ps.basilio@outlook.com",
      display: "ps.basilio@outlook.com",
      color: "from-[#A39382] to-[#685D54]",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      href: "https://wa.link/kzfif6",
      display: "+55 (61) 99680-8636",
      color: "from-[#685D54] to-[#A39382]",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pablo-dos-santos-basilio-273b4b212/",
      display: "linkedin.com/in/pablo-dos-santos-basilio",
      color: "from-[#232323] to-[#685D54]",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Boyyypablo",
      display: "github.com/Boyyypablo",
      color: "from-[#685D54] to-[#232323]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FBF7F4] via-[#E5DED2] to-[#FBF7F4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#232323]">{t("contact.title")}</h2>
          <p className="text-lg text-[#685D54] max-w-2xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 rounded-3xl p-8 border border-[#E5DED2]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#232323]">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF7F4] border border-[#E5DED2] text-[#232323] focus:outline-none focus:ring-2 focus:ring-[#A39382]/50"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-[#232323]">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF7F4] border border-[#E5DED2] text-[#232323] focus:outline-none focus:ring-2 focus:ring-[#A39382]/50"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-[#232323]">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF7F4] border border-[#E5DED2] text-[#232323] focus:outline-none focus:ring-2 focus:ring-[#A39382]/50 resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#685D54] text-white rounded-xl hover:bg-[#232323] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t("contact.send")}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white/90 rounded-3xl p-8 border border-[#E5DED2]">
                <h3 className="text-xl mb-6 text-[#232323]">{t("contact.connect")}</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#FBF7F4] transition-colors group"
                    >
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${link.color} text-white`}
                      >
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#A39382]">{link.label}</p>
                        <p className="text-[#232323] truncate">{link.display}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#E5DED2] to-[#A39382]/30 rounded-3xl p-8 border border-[#E5DED2]">
                <p className="text-[#685D54] text-center">{t("contact.available")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
