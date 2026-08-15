import { MessageCircle } from "lucide-react";
import { NUUMA_WHATSAPP } from "./helpers";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-orange-500 opacity-10" />

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sua jornada de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              acolhimento
            </span>{" "}
            no tratamento com cannabis medicinal
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Te acompanhamos antes, durante e depois. Da educação à prescrição médica, até a compra do seu medicamento em farmácias e associações brasileiras. Comece seu tratamento em até 3 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href={NUUMA_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar minha jornada
            </a>

            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300"
            >
              Saiba mais
            </a>
          </div>

          <p className="text-sm text-gray-600">
            Investimento de <span className="font-bold text-purple-600">R$ 247</span> pela jornada completa + medicamento
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Pessoa meditando em paz"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
}
