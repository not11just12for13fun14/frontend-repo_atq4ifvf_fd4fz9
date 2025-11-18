import { motion } from 'framer-motion'

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Player results</h2>
            <p className="mt-2 text-slate-300">Real feedback from ranked grinders and comp players.</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials?.map((t, idx) => (
            <motion.figure
              key={idx}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="relative rounded-2xl p-6 bg-gradient-to-b from-slate-900/80 to-slate-950/60 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <blockquote className="text-slate-200 italic">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                — {t.name} {t.game_rank_before && t.game_rank_after ? `( ${t.game_rank_before} → ${t.game_rank_after} )` : ''}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
