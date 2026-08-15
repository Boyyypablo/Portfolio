import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    condition: "Ansiedade",
    text: "A Nuuma me ajudou a entender tudo sobre cannabis medicinal. Hoje estou tratando minha ansiedade de forma muito mais tranquila.",
    avatar: "MS",
  },
  {
    name: "João Santos",
    condition: "Dor crônica",
    text: "Depois de anos tomando vários medicamentos, a cannabis me trouxe alívio. A equipe da Nuuma me guiou em cada passo.",
    avatar: "JS",
  },
  {
    name: "Ana Paula",
    condition: "Insônia",
    text: "Não sabia que existiam opções tão acessíveis no Brasil. A Nuuma me mostrou alternativas que cabem no meu bolso.",
    avatar: "AP",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">pacientes</span> dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com a jornada Nuuma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-6 relative">
              <Quote className="w-10 h-10 text-purple-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          * Depoimentos de pacientes reais. Resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}
