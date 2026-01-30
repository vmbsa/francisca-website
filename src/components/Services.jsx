import sofa from '../assets/sofa.png'

export default function Services() {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: `url(${sofa})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay semi-transparente para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-[#50311D] text-4xl font-bold text-white text-center mb-12 relative z-10">
          Consultas de Psicologia
        </h2>

        {/* Grid de 3 quadrados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center relative z-10 mb-8">
          
          {/* Serviço 1 */}
          <div className="bg-[#D4CABC] bg-opacity-80 p-6 rounded-2xl shadow-xl max-w-xs w-full text-center border-4 border-[#FFFFFF]">
            <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
              Adultos
            </h3>
            <p className="text-[#5C4033]">
              Oferece um espaço seguro e de confiança para compreender emoções e desafios pessoais, promovendo bem-estar emocional, autoconhecimento e estratégias para lidar com dificuldades pessoais e relacionais.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="bg-[#D4CABC] bg-opacity-80 p-6 rounded-2xl shadow-xl max-w-xs w-full text-center border-4 border-[#FFFFFF]">
            <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
              Adolescentes
            </h3>
            <p className="text-[#5C4033]">
              Acompanhamento centrado na relação e na escuta, onde o adolescente encontra um espaço seguro para compreender as suas emoções e experiências, fortalecendo o bem-estar emocional e as relações nos contextos familiar, social e escolar.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="bg-[#D4CABC] bg-opacity-80 p-6 rounded-2xl shadow-xl max-w-xs w-full text-center border-4 border-[#FFFFFF]">
            <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
              Aconselhamento Psicológico Parental
            </h3>
            <p className="text-[#5C4033]">
              Oferece um espaço de reflexão e diálogo, apoiando pais e cuidadores na compreensão das necessidades emocionais dos seus filhos e no fortalecimento de uma parentalidade mais consciente e segura, em sintonia com o desenvolvimento da criança e do adolescente.
            </p>
          </div>

        </div>

        {/* Retângulo Online */}
        <div className="bg-[#50311D] p-1 rounded-2xl shadow-xl max-w-md mx-auto text-center relative z-10">
          <h3 className="text-xl font-bold text-[#FFFFFF]">
            Online
          </h3>
        </div>
      </div>
    </section>
  )
}
