export default function Flashcards() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid: 2 rows x 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#D4CABC] p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center text-center h-full">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Mestre em Psicologia Clínica no ISPA - Instituto Universitário de Ciências Psicológicas, Sociais e da Vida
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D4CABC] p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center text-center h-full">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Curso Avançado em Parentalidade e Educação Consciente (CRIAP)
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D4CABC] p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center text-center h-full">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Especialização Avançada em Terapia Familiar e de Casal
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-[#D4CABC] p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center text-center h-full">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Experiência em Psicologia Clínica com Crianças, Adolescentes e Adultos
            </h3>
          </div>

          {/* Card 5 */}
          <div className="bg-[#D4CABC] p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center text-center h-full">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Experiência Clínica em Aconselhamentos Psicológicos Parentais
            </h3>
          </div>

          {/* Card 6 */}
          <div className="bg-[#D4CABC] p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center text-center h-full">
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Membro Efetivo da Ordem dos Psicólogos Portugueses 29795
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}
