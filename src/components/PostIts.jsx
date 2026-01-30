export default function PostIts() {
  return (
    <section className="bg-[#50311D] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid: 1 row, 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          
          {/* Post-it 1 */}
          <div className="bg-[#F3EFD1] p-6 rounded-2xl shadow-xl transform rotate-1 max-w-xs w-full flex items-center justify-center">
            <p className="text-[#5C4033] text-center">
              Pensar em conjunto é um ato profundamente transformador.
            </p>
          </div>

          {/* Post-it 2 */}
          <div className="bg-[#F3EFD1] p-6 rounded-2xl shadow-xl transform -rotate-2 max-w-xs w-full flex items-center justify-center">
            <h3 className="text-lg font-bold text-[#5C4033] mb-2 text-center">
              A mudança ocorre quando há espaço para a autenticidade, a presença e escuta.
            </h3>
          </div>

          {/* Post-it 3 */}
          <div className="bg-[#F3EFD1] p-6 rounded-2xl shadow-xl transform rotate-2 max-w-xs w-full flex items-center justify-center">
            <p className="text-[#5C4033] text-center">
              A relação terapêutica oferece um espaço seguro onde é possível existir sem julgamento.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
