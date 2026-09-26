import { motion } from 'framer-motion'
import { Award, Users, Building, Target, Heart, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stats } from '../data/projects'

export default function About() {
  return (
    <div className="bg-cream">
      <section className="pt-28 pb-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-ink-900 text-white rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.16em] uppercase">
              Est. 2006 — Lahore
            </div>
            <h1 className="font-display font-bold text-[48px] lg:text-[68px] leading-[0.85] tracking-[-0.04em] mt-6 text-ink-900">
              We build <span className="italic font-normal text-rust-600">legacies,</span><br /> not just buildings.
            </h1>
            <p className="mt-4 max-w-[680px] text-[18px] leading-relaxed text-ink-900/60">
              SAFRA Developers was founded on a simple belief: a home should appreciate in value and in meaning. For 18 years, we've kept our promises — and our buildings keep theirs.
            </p>
          </motion.div>

          <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="bg-white rounded-[24px] overflow-hidden border border-ink-900/5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=60" alt="SAFRA team" className="w-full h-[380px] object-cover" />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl">From a single plaza to a skyline.</h3>
                <p className="text-sm text-ink-900/60 leading-relaxed mt-2">
                  In 2006, Musa Idrees started SAFRA with one 5-marla plaza in Johar Town and a commitment to deliver on time. That plaza was handed over 22 days early. Word spread. Families returned. Today, 68% of our buyers are repeat clients or referrals.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-ink-900 rounded-[24px] p-8 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-rust-600/30 rounded-full blur-[40px]" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-rust-600 grid place-items-center"><Target size={18} /></div>
                  <h3 className="font-display font-bold text-2xl mt-4 leading-none">Our Mission</h3>
                  <p className="text-white/70 mt-3 leading-relaxed">To create homes that make their owners proud for decades — architecturally timeless, financially rewarding, and humanly warm.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map(s => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 border border-ink-900/5">
                    <div className="font-display font-bold text-3xl text-ink-900">{s.value}</div>
                    <div className="text-xs font-mono tracking-[0.12em] uppercase text-ink-900/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-ink-900/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-display font-bold text-[36px] tracking-tight text-ink-900">Values that hold — like our structures.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Award, title: "Craft over Cost", desc: "We use hand-laid brick, terracotta, and corten steel — materials that age into beauty, not decay." },
              { icon: Heart, title: "Families First", desc: "Every floor plan is tested with real families. Cross-ventilation, storage, light, and privacy — before square footage." },
              { icon: Users, title: "After-Sales for Life", desc: "Resale, rental, and maintenance handled by SAFRA Concierge. You own; we care." },
            ].map(item => (
              <div key={item.title} className="bg-cream rounded-[24px] p-7 border border-ink-900/5">
                <div className="w-12 h-12 rounded-xl bg-ink-900 text-white grid place-items-center"><item.icon size={20} /></div>
                <h3 className="font-bold text-ink-900 mt-4">{item.title}</h3>
                <p className="text-sm text-ink-900/60 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display font-bold text-[36px] tracking-tight text-ink-900">Leadership</h2>
            <p className="text-ink-900/60 max-w-[460px]">A team of architects, engineers, and client advisors who treat every project like their own home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Musa Idrees", role: "Founder & CEO", img: "https://i.pravatar.cc/300?img=15", bio: "Civil Engineer, UET Lahore. 18 years, 42 projects, zero defaults." },
              { name: "Ayesha Siddiqui", role: "Head of Architecture", img: "https://i.pravatar.cc/300?img=29", bio: "M.Arch — Politecnico di Milano. PAM Award winner 2023." },
              { name: "Bilal Hassan", role: "Head of Sales & Client Relations", img: "https://i.pravatar.cc/300?img=12", bio: "Ex-Emaar Dubai. Believes a sale starts after handover." },
            ].map(person => (
              <div key={person.name} className="bg-white rounded-[24px] overflow-hidden border border-ink-900/5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] group">
                <div className="h-[300px] overflow-hidden">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="font-bold text-ink-900">{person.name}</div>
                  <div className="text-xs font-mono tracking-[0.12em] uppercase text-rust-600">{person.role}</div>
                  <p className="text-sm text-ink-900/60 mt-2">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-[1280px] mx-auto bg-gradient-to-br from-ink-900 to-[#1E1E20] rounded-[32px] p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-[36px] leading-[0.9]">Join the SAFRA family.</h2>
              <p className="text-white/60 mt-3">Whether you're a first-time buyer or a portfolio investor — we curate the right legacy for you.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-6 bg-white text-ink-900 px-7 py-3 rounded-full font-semibold hover:bg-cream transition-colors">
                Work With Us <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3">
                <Building size={20} className="text-rust-400" />
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-white/60">Certifications</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• LDA Approved — All projects escrow protected</li>
                <li>• DHA Lahore — Authorized developer</li>
                <li>• SECP Registered • PEC Licensed • FBR Compliant</li>
                <li>• Best Luxury Developer — PAM Awards 2023, 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
