export default function Packages({ packages, onSelect }) {
  return (
    <section id="packages" className="py-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Choose your session</h2>
        <p className="mt-2 text-slate-300">Clear, focused options — no fluff.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {packages?.map((p, idx) => (
            <article key={idx} className={`relative rounded-2xl p-6 bg-slate-900 ring-1 ring-white/10 ${p.popular ? 'shadow-[0_0_0_2px_rgba(250,204,21,0.3)]' : ''}`}>
              {p.popular && (
                <span className="absolute -top-3 left-6 text-xs px-2 py-1 rounded bg-amber-400 text-black font-semibold">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
              <p className="mt-4 text-3xl font-extrabold text-white">${p.price_usd}<span className="text-sm font-normal text-slate-300"> / {p.duration_minutes}m</span></p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {p.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />{f}</li>
                ))}
              </ul>
              <button onClick={() => onSelect?.(p)} className="mt-6 w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition">Book {p.title}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
