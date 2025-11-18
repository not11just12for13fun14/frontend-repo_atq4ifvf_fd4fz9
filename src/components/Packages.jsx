import { motion } from 'framer-motion'

export default function Packages({ packages, onSelect }) {
  return (
    <section id="packages" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Choose your session</h2>
            <p className="mt-2 text-slate-300">Clear, focused options — no fluff.</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {packages?.map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`relative rounded-2xl p-6 bg-gradient-to-b from-slate-900/80 to-slate-950/60 ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20 transition`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 text-xs px-2 py-1 rounded bg-amber-400 text-black font-semibold shadow">Most Popular</span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <span className="text-emerald-400 text-sm font-medium">{p.duration_minutes}m</span>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
              <p className="mt-5 text-3xl font-extrabold text-white">
                ${p.price_usd}
                <span className="text-sm font-normal text-slate-400"> / session</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {p.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />{f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelect?.(p)}
                className="mt-6 w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition shadow-lg shadow-emerald-500/20"
              >
                Book {p.title}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
