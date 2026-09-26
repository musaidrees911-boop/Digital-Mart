import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, MapPin, Calendar, Layers, ArrowUpRight, Check, Phone, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-3xl font-bold">Project not found</h1>
        <Link to="/projects" className="inline-flex mt-6 bg-ink-900 text-white px-6 py-3 rounded-full">Back to Projects</Link>
      </div>
    )
  }

  return (
    <div className="bg-cream">
      {/* Hero */}
      <div className="relative h-[72vh] min-h-[520px] overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />

        <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-end pb-10 pt-28">
          <Link to="/projects" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm w-fit hover:bg-white/25 transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-white text-ink-900 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide font-semibold">{project.status}</span>
              <span className="bg-rust-600 text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wide">{project.year} • {project.type}</span>
            </div>
            <h1 className="font-display font-bold text-white text-[48px] lg:text-[64px] leading-none tracking-tight mt-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-white/80 text-sm">
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-rust-400" /> {project.location}</span>
              <span className="inline-flex items-center gap-1.5"><Layers size={14} className="text-rust-400" /> {project.area}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar size={14} className="text-rust-400" /> {project.units}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12 grid lg:grid-cols-[1.7fr_0.9fr] gap-10">
        <div>
          <div className="bg-white rounded-[24px] p-8 border border-ink-900/5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <div className="flex items-baseline justify-between flex-wrap gap-4">
              <h2 className="font-display font-bold text-[28px] text-ink-900">About this landmark</h2>
              <div className="text-rust-600 font-display font-bold text-2xl">{project.price}</div>
            </div>
            <p className="mt-4 text-ink-900/70 leading-relaxed text-[17px]">{project.description}</p>
            <p className="mt-3 text-ink-900/60 leading-relaxed">
              Designed by award-winning architects with a rust-terracotta façade that deepens with age. Every residence features cross-ventilation, imported fittings, and smart-home readiness. SAFRA handles everything from LDA approvals to after-sales concierge.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {project.features.map(f => (
                <div key={f} className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3 border border-ink-900/5">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0"><Check size={14} /></span>
                  <span className="text-sm font-medium text-ink-900">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-ink-900">Gallery</h3>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {project.gallery.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] bg-sand">
                    <img src={img} alt={`${project.title} ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-ink-900 rounded-[24px] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rust-600/20 rounded-full blur-[60px]" />
            <h3 className="font-display font-bold text-2xl relative">Location Advantage</h3>
            <p className="text-white/60 mt-2 relative max-w-[560px]">3-minute drive to DHA Raya Golf Club, 8 minutes to Allama Iqbal Airport, steps from top schools and hospitals. Your address becomes your asset.</p>
            <div className="mt-6 h-[220px] rounded-2xl overflow-hidden bg-white/10 border border-white/10 relative">
              <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Lahore&zoom=12&size=800x300&maptype=roadmap&key=demo` } alt="map" className="w-full h-full object-cover opacity-60" onError={e => e.target.style.display='none'} />
              <div className="absolute inset-0 grid place-items-center">
                <div className="bg-white text-ink-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                  <MapPin size={16} className="text-rust-600" /> View on Google Maps <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-[24px] p-6 border border-ink-900/5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] sticky top-24">
            <h3 className="font-display font-bold text-xl">Request Brochure</h3>
            <p className="text-sm text-ink-900/60 mt-1">Floor plans, payment plan, and ROI sheet via WhatsApp in 5 minutes.</p>
            <form onSubmit={e => e.preventDefault()} className="mt-5 space-y-3">
              <input placeholder="Full name" className="w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500 focus:ring-2 focus:ring-rust-500/20" />
              <input placeholder="Phone / WhatsApp" className="w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500 focus:ring-2 focus:ring-rust-500/20" />
              <input placeholder="Email (optional)" className="w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500" />
              <button className="w-full bg-rust-600 hover:bg-rust-700 text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 transition-colors">
                <Download size={16} /> Get Brochure
              </button>
              <a href="tel:+92423210000" className="w-full bg-ink-900 hover:bg-black text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 transition-colors">
                <Phone size={16} /> Call Sales: +92 42 3210 0000
              </a>
              <p className="text-[11px] text-center text-ink-900/40">LDA & DHA approved • Escrow protected</p>
            </form>

            <div className="mt-6 pt-6 border-t border-ink-900/10">
              <div className="text-xs font-mono tracking-[0.14em] text-ink-900/40 uppercase">Payment Plan</div>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-ink-900/60">Booking</span><span className="font-semibold">20%</span></div>
                <div className="flex justify-between"><span className="text-ink-900/60">36 Monthly Installments</span><span className="font-semibold">60%</span></div>
                <div className="flex justify-between"><span className="text-ink-900/60">On Possession</span><span className="font-semibold">20%</span></div>
              </div>
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-xs text-amber-800">
                Early bird: 4% discount on full cash payment. Limited to first 20 units.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rust-600 to-rust-800 rounded-[24px] p-6 text-white">
            <div className="text-sm font-mono tracking-wide text-white/80">NEED ADVICE?</div>
            <h4 className="font-display font-bold text-xl mt-1">Talk to a SAFRA investment advisor</h4>
            <p className="text-white/80 text-sm mt-2">Free 30-minute consultation — virtual or at our DHA Phase 6 experience center.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-4 bg-white text-rust-700 px-5 py-2.5 rounded-full font-semibold hover:bg-cream transition-colors">
              Book Consultation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
