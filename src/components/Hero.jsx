import { motion } from 'framer-motion'

export default function Hero({ profile }) {
  return (
    <section className="relative overflow-hidden">
      {/* Animated neon beams */}
      <div className="absolute inset-0">
        <motion.div
          aria-hidden
          className="absolute -left-32 top-10 h-1 w-[60%] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-40 blur-sm"
          animate={{ x: [0, 30, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-32 bottom-16 h-1 w-[55%] bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 opacity-40 blur-sm"
          animate={{ x: [0, -25, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <p className="text-amber-300/90 font-medium tracking-wide">Apex Legends Coaching</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              {profile?.headline || 'Ex-Pro & Former Predator'}
            </h1>
            <p className="mt-6 text-slate-200/90 text-lg leading-relaxed">
              {profile?.bio}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-200/80">
              <span className="px-3 py-1 rounded-full bg-white/10">{profile?.sessions_coached?.toLocaleString()}+ sessions</span>
              <span className="px-3 py-1 rounded-full bg-white/10">{profile?.highest_rank}</span>
              <span className="px-3 py-1 rounded-full bg-white/10">{profile?.years_experience}+ yrs exp</span>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href="#packages" className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition shadow-lg shadow-emerald-500/25">View Packages</a>
              <a href="#booking" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">Book Now</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <img src={profile?.hero_image_url || '/apex-hero.jpg'} alt="AnorakFPS" className="w-full h-full object-cover opacity-90" />
            </div>
            <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-emerald-400/20 via-transparent to-transparent blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
