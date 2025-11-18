import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(244,63,94,0.35), transparent 70%)' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[70vh] w-[70vh] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%)' }}
        animate={{ x: [0, -20, 25, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid with mask for a subtle tech vibe */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse at 70% 10%, black 20%, transparent 60%), radial-gradient(ellipse at 20% 80%, black 20%, transparent 60%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 70% 10%, black 20%, transparent 60%), radial-gradient(ellipse at 20% 80%, black 20%, transparent 60%)',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950" />
    </div>
  )
}
