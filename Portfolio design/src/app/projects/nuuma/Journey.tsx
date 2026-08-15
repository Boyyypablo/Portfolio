import { BookOpen, Stethoscope, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Antes",
    subtitle: "Educação e acolhimento",
    description:
      "Tiramos todas as suas dúvidas sobre cannabis medicinal, explicamos o que é CBD, THC, sistema endocanabinoide e como funciona no nosso corpo.",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: Stethoscope,
    title: "Durante",
    subtitle: "Conexão com especialista",
    description: "Conectamos você com um médico especialista em cannabis medicinal, se for o caso de prescrição médica.",
    gradient: "from-purple-500 to-orange-500",
  },
  {
    icon: ShoppingBag,
    title: "Depois",
    subtitle: "Apoio na compra",
    description:
      "Te apoiamos na compra do seu medicamento em farmácias e associações brasileiras. Comece seu tratamento em até 3 dias, de forma mais rápida e econômica.",
    gradient: "from-orange-500 to-orange-600",
  },
];

export function Journey() {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona a{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Jornada Nuuma
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um acompanhamento completo e humanizado em cada etapa do seu tratamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-purple-600 font-medium mb-4">{step.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
