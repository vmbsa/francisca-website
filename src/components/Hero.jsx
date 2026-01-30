import heroImage from '../assets/foto_perfil.jpg'

export default function Hero() {
  return (
    <section className="bg-[#F5EFE6] ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            <h1 className="text-4xl font-extrabold text-[#5C4033] mb-6">
              Bem-vindo/a
            </h1>

            <p className="text-lg text-[#7A5C48] mb-8 text-justify">
              <p>
                Enquanto psicóloga clínica, acredito que cada pessoa tem uma história única e merece um espaço seguro sem julgamentos, onde possa expressar-se livremente e ser verdadeiramente ouvido/a. Coloco-me ao seu lado com disponibilidade e cuidado, respeitando a sua individualidade em cada etapa do processo.
              </p>
              <p>
                O meu trabalho tem como objetivo a construção de uma relação terapêutica próxima e de confiança, baseada na escuta ativa, empatia e acolhimento. Cada acompanhamento é pensado de forma personalizada, tendo em conta as suas necessidades, objetivos e ritmo.
              </p>
              <br /><br />
              <p className="font-bold text-center">
                Sinto-me realizada em poder conectar-me verdadeiramente com a individualidade de cada pessoa.
              </p>
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Sessão de psicologia"
              className="max-w-md w-full rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
