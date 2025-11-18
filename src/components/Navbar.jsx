import { Menu, Twitch, Youtube, Twitter } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="relative inline-block">
            <span className="absolute -inset-1 rounded bg-gradient-to-tr from-rose-500 via-amber-400 to-emerald-400 blur opacity-60" />
            <span className="relative inline-block w-8 h-8 rounded bg-slate-800 ring-1 ring-white/10" />
          </span>
          <span className="text-white font-semibold tracking-tight">AnorakFPS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#packages" className="hover:text-white transition">Packages</a>
          <a href="#testimonials" className="hover:text-white transition">Results</a>
          <a href="#booking" className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition">Book a Session</a>
        </nav>
        <div className="hidden md:flex items-center gap-3 text-slate-300">
          <a href="#" aria-label="Twitch" className="hover:text-white transition"><Twitch size={18} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition"><Youtube size={18} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter size={18} /></a>
        </div>
        <button className="md:hidden text-slate-200" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
