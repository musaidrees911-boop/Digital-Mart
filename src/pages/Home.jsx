import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Play, Award, Shield, Leaf, Building2, Users, TrendingUp, Sparkles, ChevronRight, Quote } from 'lucide-react'
import Hero3D from '../components/Hero3D'
import ProjectCard from '../components/ProjectCard'
import { projects, testimonials, stats } from '../data/projects'
import { useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sand/40" />
          <div className="absolute top-[-10%] right-[-15%] w-[70%] h-[70%] bg-rust-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-ink-900/[0.04] rounded-full blur-[100px]" />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(#0A0A0B 1px, transparent 1px), linear-gradient(90deg, #0A0A0B 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 w-full pt-28 pb-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          {/* Left copy */}
          <motion.div style={{ y, opacity, scale }} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-ink-900 text-white rounded-full pl-1 pr-4 py-1"
            >
              <span className="bg-rust-600 text-white text-[11px] font-mono tracking-[0.14em] px-3 py-1 rounded-full font-bold">NEW LAUNCH</span>
              <span className="text-sm font-medium">SAFRA Courts — Early bird pricing live</span>
              <ChevronRight size={14} className="opacity-60" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-[800] tracking-[-0.04em] leading-[0.85] mt-8 text-ink-900"
            >
              <span className="block text-[14px] font-mono font-normal tracking-[0.2em] text-rust-600 mb-4">SAFRA DEVELOPERS</span>
              <span className="block text-[52px] sm:text-[64px] lg:text-[84px]">Crafting</span>
              <span className="block text-[52px] sm:text-[64px] lg:text-[84px] font-light italic text-transparent bg-clip-text bg-gradient-to-r from-rust-600 to-rust-800">Tomorrow's</span>
              <span className="block text-[52px] sm:text-[64px] lg:text-[84px] flex items-baseline gap-4">
                Landmarks
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rust-600 text-white -translate-y-2">
                  <ArrowUpRight size={22} />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-ink-900/60"
            >
              Lahore's most awarded luxury developer. <span className="text-ink-900 font-medium">18 years, 42 landmarks, 3200+ families.</span> We build not just square feet — but heritage, returns, and pride.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link to="/projects" className="inline-flex items-center gap-3 bg-ink-900 hover:bg-black text-white px-7 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-3d">
                Explore Projects <ArrowUpRight size={18} />
              </Link>
              <a href="#film" className="inline-flex items-center gap-3 bg-white border border-ink-900/10 hover:border-ink-900/20 px-6 py-4 rounded-full font-semibold text-ink-900 transition-all hover:-translate-y-0.5">
                <span className="w-8 h-8 rounded-full bg-rust-600 grid place-items-center text-white"><Play size={14} fill="white" className="ml-0.5" /></span>
                Watch Film — 45s
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-8 border-t border-ink-900/10 pt-8 max-w-[560px]"
            >
              {[
                { k: "LDA", v: "Approved" },
                { k: "DHA", v: "Authorized" },
                { k: "4.9★", v: "Google Rating" },
              ].map(item => (
                <div key={item.k} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-ink-900/10 grid place-items-center">
                    <Shield size={16} className="text-rust-600" />
                  </div>
                  <div className="leading-none">
                    <div className="font-bold text-ink-900 text-sm">{item.k}</div>
                    <div className="text-xs font-mono tracking-wide text-ink-900/50">{item.v}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D + cards */}
          <div className="relative lg:h-[680px] h-[520px] perspective-2000">
            {/* Main 3D */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -6 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-white rounded-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.12)] border border-ink-900/[0.06] overflow-hidden preserve-3d"
            >
              <div className="absolute inset-0 z-0">
                <Hero3D />
              </div>

              {/* Floating metrics */}
              <div className="absolute top-6 left-6 right-6 flex justify-between z-10 pointer-events-none">
                <div className="glass rounded-2xl px-4 py-3 shadow-3d">
                  <div className="text-[10px] font-mono tracking-[0.16em] text-ink-900/50">LIVE INVENTORY</div>
                  <div className="font-display font-bold text-ink-900 leading-none mt-1 flex items-baseline gap-2">
                    <span className="text-2xl">87%</span> <span className="text-rust-600 text-xs font-mono">SOLD</span>
                  </div>
                  <div className="mt-2 w-[140px] h-1.5 bg-ink-900/10 rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-to-r from-rust-500 to-rust-700 rounded-full" />
                  </div>
                </div>
                <div className="glass-dark rounded-2xl px-4 py-3 text-white shadow-3d">
                  <div className="text-[10px] font-mono tracking-[0.16em] text-white/60">AVG. APPRECIATION</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <TrendingUp size={16} className="text-emerald-400" />
                    <span className="font-bold text-xl">28%</span>
                    <span className="text-xs text-white/60">/ 2yr</span>
                  </div>
                </div>
              </div>

              {/* Bottom project strip */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-ink-900 rounded-[20px] p-4 flex items-center gap-4 text-white shadow-3d">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&auto=format&fit=crop&q=60" alt="Skyline" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono tracking-[0.14em] text-white/50">FEATURED • DHA PHASE 8</div>
                    <div className="font-display font-semibold text-[17px] leading-none mt-1">SAFRA Skyline — 32 Floors</div>
                    <div className="text-sm text-white/60">From 4.2 Cr • 3 & 4 Bed</div>
                  </div>
                  <Link to="/projects/safra-skyline" className="w-10 h-10 rounded-full bg-white text-ink-900 grid place-items-center shrink-0 hover:bg-rust-600 hover:text-white transition-colors">
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Floating behind cards */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hidden lg:block absolute -right-6 top-24 w-[220px] bg-white rounded-2xl p-4 shadow-3d border border-ink-900/5 z-20"
            >
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=32" alt="avatar" className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold leading-none">Sarah Khan</div>
                  <div className="text-xs text-ink-900/50">Booked a 4-Bed • 2h ago</div>
                </div>
                <span className="ml-auto w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div className="mt-3 text-sm text-ink-900/70">“SAFRA Residencia courtyard sold me in 10 minutes.”</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="hidden lg:block absolute -left-8 bottom-32 bg-white rounded-2xl p-4 shadow-3d border border-ink-900/5 z-20 w-[200px]"
            >
              <div className="text-xs font-mono tracking-[0.14em] text-ink-900/40">AWARD 2024</div>
              <div className="font-display font-bold text-ink-900 mt-1 leading-tight">Best Luxury Developer — Punjab</div>
              <div className="flex gap-1 mt-2 text-rust-600">★★★★★</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-ink-900 text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-wrap gap-6 lg:gap-0 lg:grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 min-w-[140px] px-2 lg:px-8 py-4 lg:py-2">
              <div className="font-display font-bold text-[36px] leading-none">{s.value}</div>
              <div className="text-sm font-mono tracking-[0.12em] text-white/50 mt-1 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-rust-600 font-mono text-xs tracking-[0.18em] uppercase">
                <Sparkles size={14} /> Selected Work • 2024—2027
              </div>
              <h2 className="font-display font-bold tracking-tight text-[42px] lg:text-[52px] leading-none mt-3 text-ink-900">
                Landmarks that <span className="italic font-normal text-rust-600">outlive</span> trends.
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 bg-ink-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition-colors">
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY SAFRA - 3D tilt cards */}
      <section className="py-20 bg-white border-y border-ink-900/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-rust-600 font-mono text-xs tracking-[0.18em] uppercase">Why SAFRA</div>
              <h2 className="font-display font-bold text-[42px] leading-[0.9] tracking-tight mt-3 text-ink-900">
                Built on <span className="text-gradient-rust">rust</span> &<br /> reinforced concrete.
              </h2>
              <p className="mt-4 text-ink-900/60 leading-relaxed max-w-[520px]">
                Rust is the color of earth, of endurance. Every SAFRA façade uses terracotta, corten steel, and hand-laid brick — materials that age beautifully and signal permanence.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "Award-Winning Design", desc: "5x winner — PAM Awards, bespoke architecture with global standards." },
                  { icon: Shield, title: "On-Time, On-Promise", desc: "92% projects delivered early. Escrow-backed, LDA-approved." },
                  { icon: Leaf, title: "Sustainable Luxury", desc: "LEED Gold target, solar, rainwater harvesting, EV-ready." },
                  { icon: Building2, title: "After-Sales for Life", desc: "Dedicated concierge, resale & rental management." },
                ].map(item => (
                  <div key={item.title} className="bg-cream rounded-2xl p-5 border border-ink-900/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-ink-900 text-white grid place-items-center">
                      <item.icon size={16} />
                    </div>
                    <div className="font-semibold mt-3 text-ink-900">{item.title}</div>
                    <div className="text-sm text-ink-900/60 mt-1 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[32px] overflow-hidden bg-ink-900 aspect-[4/4.6] shadow-3d">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60" alt="Interior" className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs font-mono tracking-wide">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Site Visit — SAFRA Residencia
                  </div>
                  <h3 className="font-display text-[28px] font-semibold leading-tight mt-4">“We don't sell units.<br />We hand over homes.”</h3>
                  <div className="flex items-center gap-3 mt-4">
                    <img src="https://i.pravatar.cc/150?img=15" alt="ceo" className="w-10 h-10 rounded-full object-cover border-2 border-white/20" />
                    <div>
                      <div className="font-semibold text-sm">Musa Idrees</div>
                      <div className="text-xs text-white/60">Founder & CEO, SAFRA Developers</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decor card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-3d border border-ink-900/5 hidden lg:block rotate-[-1.5deg]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-rust-600 grid place-items-center text-white">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-ink-900 leading-none text-xl">3,200+</div>
                    <div className="text-xs font-mono tracking-wide text-ink-900/50 uppercase">Families Trusted Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-3 justify-center text-rust-600 font-mono text-xs tracking-[0.18em] uppercase">
            <Quote size={14} /> Voices of SAFRA
          </div>
          <h2 className="font-display font-bold text-center text-[36px] mt-3 tracking-tight text-ink-900">Owners, not buyers.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-[24px] p-6 border border-ink-900/5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex text-rust-500 text-sm">★★★★★</div>
                <p className="mt-3 text-ink-900 leading-relaxed">“{t.text}”</p>
                <div className="flex items-center gap-3 mt-6">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm text-ink-900">{t.name}</div>
                    <div className="text-xs text-ink-900/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6">
        <div className="max-w-[1280px] mx-auto bg-ink-900 rounded-[32px] overflow-hidden relative">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&auto=format&fit=crop&q=60" alt="bg" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
          </div>
          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-8 p-8 lg:p-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-3 py-1 text-white text-xs font-mono tracking-wide">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Bookings open for SAFRA Haven
              </div>
              <h2 className="font-display font-bold text-white text-[36px] lg:text-[44px] leading-[0.9] tracking-tight mt-4">
                Ready to own a <br /><span className="text-rust-400">SAFRA legacy?</span>
              </h2>
              <p className="text-white/60 mt-4 max-w-[520px]">Visit our DHA Phase 6 experience center. Private tour, 3D walkthrough, and investment consultation — 45 minutes that could secure your next decade.</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-ink-900 px-7 py-3.5 rounded-full font-semibold hover:bg-cream transition-colors">
                  Book Private Tour <ArrowUpRight size={16} />
                </Link>
                <a href="tel:+92423210000" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/15 transition-colors">
                  +92 42 3210 0000
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-3d">
              <div className="text-xs font-mono tracking-[0.14em] text-ink-900/40 uppercase">Quick Inquiry</div>
              <h3 className="font-display font-bold text-xl mt-1">Get floor plans & pricing</h3>
              <form onSubmit={e => e.preventDefault()} className="mt-4 space-y-3">
                <input placeholder="Full name" className="w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500 focus:ring-2 focus:ring-rust-500/20 transition-all" />
                <input placeholder="Phone / WhatsApp" className="w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500 focus:ring-2 focus:ring-rust-500/20 transition-all" />
                <select className="w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500">
                  <option>Interested in — SAFRA Skyline</option>
                  <option>SAFRA Residencia</option>
                  <option>SAFRA Courts</option>
                  <option>SAFRA Haven</option>
                </select>
                <button className="w-full bg-rust-600 hover:bg-rust-700 text-white rounded-xl py-3.5 font-semibold transition-colors flex items-center justify-center gap-2">
                  Send Brochure <ArrowUpRight size={16} />
                </button>
                <p className="text-[11px] text-center text-ink-900/40">No spam — brochure via WhatsApp in 5 minutes.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
