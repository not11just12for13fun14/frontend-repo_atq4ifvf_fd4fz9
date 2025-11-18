import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import BackgroundFX from './components/BackgroundFX'

function App() {
  const [profile, setProfile] = useState(null)
  const [packages, setPackages] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [selected, setSelected] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const [pRes, pkRes, tRes] = await Promise.all([
          fetch(`${backend}/api/profile`),
          fetch(`${backend}/api/packages`),
          fetch(`${backend}/api/testimonials`)
        ])
        const p = await pRes.json()
        const pk = await pkRes.json()
        const t = await tRes.json()
        setProfile(p.profile)
        setPackages(pk.packages)
        setTestimonials(t.testimonials)
      } catch (e) {
        setProfile({
          headline: 'Apex Legends Pro Coach • Ex-Pro & Former Predator',
          bio: 'I’ve run 3,000+ 1:1 sessions helping players climb with fundamentals that stick: rotations, comms, fights, and winning habits.',
          sessions_coached: 3000,
          highest_rank: 'Apex Predator',
          years_experience: 6,
        })
        setPackages([
          { title: 'VOD Review + Action Plan', description: '45-min breakdown with ranked-ready plan.', duration_minutes: 45, price_usd: 39, features: ['Personalized goals', 'Macro + micro mistakes', 'Drills you can apply instantly'] },
          { title: 'Live 1:1 Coaching Session', description: '90-min live session with structured skill reps.', duration_minutes: 90, price_usd: 89, features: ['Warm-up & aim routine', 'Fight reviews', 'Rotations & end-game decisions'], popular: true },
          { title: 'Climb Pack (3 Sessions)', description: 'Three 90-min sessions focused on rapid rank growth.', duration_minutes: 270, price_usd: 239, features: ['Structured progression', 'VODs + notes', 'Priority scheduling'] },
        ])
        setTestimonials([
          { name: 'Kade', quote: 'Went from Gold to Diamond in 2 weeks. Rotations finally make sense.' },
          { name: 'Mila', quote: 'The fight reviews were insane. I win more 3v3s now.' },
          { name: 'Yuki', quote: 'Clarity on my role as IGL was a game changer for our trio.' },
        ])
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 scroll-smooth">
      <BackgroundFX />
      <Navbar />
      <Hero profile={profile} />

      <div className="relative">
        <div className="pointer-events-none select-none absolute inset-x-0 -top-8 h-16 bg-gradient-to-b from-transparent via-white/5 to-transparent blur-2xl" />
        <Packages packages={packages} onSelect={setSelected} />
      </div>

      <div className="relative">
        <div className="pointer-events-none select-none absolute inset-x-0 -top-8 h-16 bg-gradient-to-b from-transparent via-white/5 to-transparent blur-2xl" />
        <Testimonials testimonials={testimonials} />
      </div>

      <div className="relative">
        <div className="pointer-events-none select-none absolute inset-x-0 -top-8 h-16 bg-gradient-to-b from-transparent via-white/5 to-transparent blur-2xl" />
        <Booking selected={selected} />
      </div>

      <footer className="py-12 text-center text-slate-400 text-sm border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
        © {new Date().getFullYear()} AnorakFPS — Apex Legends Coaching
      </footer>
    </div>
  )
}

export default App
