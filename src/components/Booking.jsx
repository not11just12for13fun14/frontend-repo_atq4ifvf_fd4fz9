import { useState } from 'react'

export default function Booking({ selected }) {
  const [form, setForm] = useState({ name: '', email: '', discord: '', platform: '', timezone: '', goals: '', preferred_times: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const payload = { ...form, package_title: selected?.title }
      const res = await fetch(`${backend}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('success')
      setForm({ name: '', email: '', discord: '', platform: '', timezone: '', goals: '', preferred_times: '' })
    } catch (e) {
      setStatus(`error:${e.message}`)
    }
  }

  return (
    <section id="booking" className="py-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Book a session</h2>
        <p className="mt-2 text-slate-300">Tell me your goals and I’ll reply with times.</p>

        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input className="w-full rounded-lg bg-slate-900 text-white ring-1 ring-white/10 px-4 py-2.5 placeholder-slate-400" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            <input className="w-full rounded-lg bg-slate-900 text-white ring-1 ring-white/10 px-4 py-2.5 placeholder-slate-400" placeholder="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input className="w-full rounded-lg bg-slate-900 text-white ring-1 ring-white/10 px-4 py-2.5 placeholder-slate-400" placeholder="Discord (optional)" value={form.discord} onChange={e => setForm({ ...form, discord: e.target.value })} />
            <div className="grid grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-slate-900 text-white ring-1 ring-white/10 px-4 py-2.5 placeholder-slate-400" placeholder="Platform (PC/PS/Xbox)" value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })} />
              <input className="w-full rounded-lg bg-slate-900 text-white ring-1 ring-white/10 px-4 py-2.5 placeholder-slate-400" placeholder="Timezone" value={form.timezone} onChange={e => setForm({ ...form, timezone: e.target.value })} />
            </div>
          </div>
          <div className="space-y-4">
            <textarea className="w-full min-h-[140px] rounded-lg bg-slate-900 text-white ring-1 ring-white/10 px-4 py-2.5 placeholder-slate-400" placeholder="What do you want to improve? (comms, fights, rotations, aim, etc.)" value={form.goals} onChange={e => setForm({ ...form, goals: e.target.value })} />
            <input className="w-full rounded-lg bg-slate-900 text-white ring-1 ring-white/10 px-4 py-2.5 placeholder-slate-400" placeholder="Preferred times" value={form.preferred_times} onChange={e => setForm({ ...form, preferred_times: e.target.value })} />
            <button className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : selected?.title ? `Request: ${selected.title}` : 'Send Request'}
            </button>
            {status?.startsWith('error') && (
              <p className="text-red-400 text-sm">{status.replace('error:', '')}</p>
            )}
            {status === 'success' && (
              <p className="text-emerald-400 text-sm">Request received! I’ll get back to you soon.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
