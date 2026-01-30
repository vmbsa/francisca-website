import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* Left: Contact Info com fundo castanho */}
        <div className="bg-[#50311D] text-white p-12 flex flex-col gap-6">
          <h3 className="text-2xl font-bold mb-6">Informações de Contacto</h3>
          
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> +351 916 638 161
          </p>

          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> francisca.oliveira.psic@gmail.com
          </p>

          <div className="flex items-center gap-6 mt-4">
            <a href="#" className="hover:opacity-80 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right: Email Form com fundo branco */}
        <div className="bg-white text-slate-900 p-12">
          <h3 className="text-2xl font-bold mb-6">Contacta-me</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="p-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#50311D] border border-[#000000]"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#50311D] border border-[#000000]"
            />
            <input
              type="telefone"
              placeholder="Telefone"
              className="p-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#50311D] border border-[#000000]"
            />
            <textarea
              placeholder="Mensagem"
              className="p-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#50311D] border border-[#000000]"
              rows={4}
            />
            <button
              type="submit"
              className="bg-[#50311D] text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              Enviar
            </button>
          </form>
        </div>

      </div>

      <div className="mt-12 text-center text-sm text-slate-700">
        © 2026 Francisca Oliveira. Todos os direitos reservados.
      </div>
    </footer>
  )
}
