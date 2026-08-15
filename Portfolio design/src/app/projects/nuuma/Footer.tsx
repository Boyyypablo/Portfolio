import { Instagram, Mail, Phone, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <span className="text-3xl font-bold">Nuuma</span>
            </div>
            <p className="text-gray-400 text-sm">Sua jornada de acolhimento no tratamento com cannabis medicinal</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:6131990899" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (61) 3199-0899
              </a>
              <a
                href="mailto:contatonuuma@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                contatonuuma@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/eunuuma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @eunuuma no Instagram
              </a>
              <a
                href="https://tiktok.com/@eunuuma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Music2 className="w-4 h-4" />
                @eunuuma no TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Nuuma. Todos os direitos reservados.</p>
          <p className="mt-2">Cannabis medicinal com acolhimento e humanização</p>
        </div>
      </div>
    </footer>
  );
}
