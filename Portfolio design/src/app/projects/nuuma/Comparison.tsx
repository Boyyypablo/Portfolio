import { X, Check, AlertCircle } from "lucide-react";

const problems = [
  "Desinformação sobre cannabis medicinal",
  "Estigma social (cannabis medicinal não é pensada para tratar patologias já conhecidas)",
  "Consultas sem médico especialista (R$ 30-90)",
  "Importação cara (R$ 400-700) e lenta (15+ dias)",
  "Desconhecem farmácias brasileiras e associações de pacientes",
];

const comparison = [
  {
    category: "Educação e acompanhamento",
    others: "Por conta própria",
    nuuma: "Completo e guiado até o fim",
  },
  {
    category: "Consulta médica",
    others: "Sem especialista",
    nuuma: "Médico especialista",
  },
  {
    category: "Opções de compra",
    others: "Só importação",
    nuuma: "Farmácias e associações",
  },
  {
    category: "Prazo para iniciar",
    others: "15 a 20 dias",
    nuuma: "Até 3 dias",
  },
  {
    category: "Investimento total",
    others: "R$ 30-90 + R$ 400-700",
    nuuma: "R$ 247 + medicamento",
  },
];

export function Comparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-bold text-red-900">Principais barreiras no acesso ao tratamento:</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {problems.map((problem) => (
              <li key={problem} className="flex items-start gap-2 text-red-800">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200">O que importa</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-700 border-b-2 border-gray-200">Outras opções</th>
                  <th className="px-6 py-4 text-center font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent border-b-2 border-purple-200">
                    Nuuma
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.category} className="border-b border-gray-100 hover:bg-purple-50/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.category}</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-purple-600 bg-purple-50/50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{row.nuuma}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl p-6 md:p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Por que escolher a Nuuma?</h3>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            Jornada completa com educação especializada, conexão com médico especialista em cannabis e apoio até encontrar a melhor opção em farmácias e associações no Brasil. Comece seu tratamento em até 3 dias, com medicamentos muito mais rápido e econômico que importar.
          </p>
        </div>
      </div>
    </section>
  );
}
