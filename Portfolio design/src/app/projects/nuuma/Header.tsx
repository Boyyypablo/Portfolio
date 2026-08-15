import { Instagram, Mail, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 pl-44 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Nuuma
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="tel:6131990899" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
            <Phone className="w-4 h-4" />
            (61) 3199-0899
          </a>
          <a href="mailto:contatonuuma@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
            <Mail className="w-4 h-4" />
            contato
          </a>
          <a
            href="https://instagram.com/eunuuma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @eunuuma
          </a>
        </div>
      </div>
    </header>
  );
}
