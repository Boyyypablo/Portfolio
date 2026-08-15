const conditions = [
  { name: "Ansiedade", src: "/imagens/nuuma/icons/ansiedade.png" },
  { name: "Insônia", src: "/imagens/nuuma/icons/insonia.png" },
  { name: "Dor crônica", src: "/imagens/nuuma/icons/dor-cronica.png" },
  { name: "Fibromialgia", src: "/imagens/nuuma/icons/fibromialgia.png" },
  { name: "Epilepsia", src: "/imagens/nuuma/icons/epilepsia.png" },
  { name: "Alzheimer", src: "/imagens/nuuma/icons/alzheimer.png" },
  { name: "TEA", src: "/imagens/nuuma/icons/tea.png" },
  { name: "TDAH", src: "/imagens/nuuma/icons/tdah.png" },
];

export function Conditions() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Condições que{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              ajudamos a tratar
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A cannabis medicinal pode ser uma aliada importante no tratamento de diversas condições
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {conditions.map(({ name, src }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <img src={src} alt={name} className="w-16 h-16 mx-auto mb-3 object-contain" />
              <p className="font-medium text-gray-800">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
