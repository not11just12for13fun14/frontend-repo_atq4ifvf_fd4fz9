export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Player results</h2>
        <p className="mt-2 text-slate-300">Real feedback from ranked grinders and comp players.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials?.map((t, idx) => (
            <figure key={idx} className="rounded-2xl p-6 bg-slate-900 ring-1 ring-white/10">
              <blockquote className="text-slate-200 italic">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.name} {t.game_rank_before && t.game_rank_after ? `( ${t.game_rank_before} → ${t.game_rank_after} )` : ''}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
