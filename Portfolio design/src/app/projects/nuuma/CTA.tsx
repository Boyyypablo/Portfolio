import { MessageCircle } from "lucide-react";
import { NUUMA_WHATSAPP } from "./helpers";

export function CTA() {
  return (
    <section id="comecar" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-600 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar sua jornada?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Dê o primeiro passo rumo ao seu bem-estar. Nossa equipe está pronta para te acolher e guiar em todo o processo. Comece seu tratamento em até 3 dias.
          </p>

          <a
            href={NUUMA_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com a Nuuma no WhatsApp
          </a>

          <p className="mt-6 text-sm opacity-90">R$ 247 (jornada completa) + medicamento</p>
        </div>
      </div>
    </section>
  );
}
