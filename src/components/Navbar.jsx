import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-20 h-28 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img
            src={logo}
            alt="Logo"
            className="h-24 w-auto"
            />
            <div className="px-10 flex flex-col items-left">
                <span className="text-slate-900 text-[#7A5C48] text-3xl font-light">
                    Francisca Oliveira
                </span>
                <span className="font-bold text-[#7A5C48] text-slate-900 text-lg">
                    Psicóloga Clínica
                </span>
            </div>
            
        </div>

      </div>
    </nav>
  )
}
