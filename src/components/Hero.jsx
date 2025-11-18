export default function Hero({ profile }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(244,63,94,0.2),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(250,204,21,0.15),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.15),transparent_40%)]" />
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
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <img src={profile?.hero_image_url || '/apex-hero.jpg'} alt="AnorakFPS" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
