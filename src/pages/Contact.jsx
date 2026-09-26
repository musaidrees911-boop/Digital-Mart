import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="bg-cream">
      <section className="pt-28 pb-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-ink-900 text-white rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.16em] uppercase">
                Contact • Visits by appointment
              </div>
              <h1 className="font-display font-bold text-[48px] lg:text-[60px] leading-[0.85] tracking-[-0.04em] mt-6 text-ink-900">
                Visit our <br />
                <span className="italic font-normal text-rust-600">experience</span> center.
              </h1>
              <p className="mt-4 max-w-[560px] text-ink-900/60 leading-relaxed">
                45-minute private tour: full-scale model, 3D walkthrough, payment plan, and ROI sheet. DHA Phase 6 — 10am to 8pm, 7 days a week.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "SAFRA House", value: "154-MB, DHA Phase 6, Lahore" },
                  { icon: Phone, label: "Sales Hotline", value: "+92 42 3210 0000" },
                  { icon: Mail, label: "Email", value: "hello@safradevelopers.pk" },
                  { icon: Clock, label: "Hours", value: "Mon—Sun • 10am — 8pm" },
                ].map(item => (
                  <div key={item.label} className="bg-white rounded-2xl p-5 border border-ink-900/5 flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rust-600 text-white grid place-items-center shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-[0.12em] uppercase text-ink-900/40">{item.label}</div>
                      <div className="font-semibold text-ink-900 text-sm mt-1 leading-tight">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-ink-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center gap-4">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60" alt="office" className="w-full sm:w-32 h-20 object-cover rounded-xl shrink-0" />
                <div>
                  <div className="font-semibold">Prefer WhatsApp?</div>
                  <div className="text-sm text-white/60">Instant brochure, floor plan, and payment plan on WhatsApp.</div>
                </div>
                <a href="https://wa.me/92423210000" target="_blank" rel="noreferrer" className="ml-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-colors flex items-center gap-2">
                  WhatsApp Us <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-[24px] p-7 border border-ink-900/5 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sticky top-24"
            >
              <h2 className="font-display font-bold text-2xl text-ink-900">Book a private tour</h2>
              <p className="text-sm text-ink-900/60 mt-1">Free consultation • No obligation • Tea & 3D walkthrough included.</p>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl px-4 py-3 flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 size={18} /> Request sent — our advisor will call you within 30 minutes.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono tracking-[0.1em] uppercase text-ink-900/60">Full Name *</label>
                    <input required placeholder="Musa Idrees" className="mt-1 w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500 focus:ring-2 focus:ring-rust-500/20" />
                  </div>
                  <div>
                    <label className="text-xs font-mono tracking-[0.1em] uppercase text-ink-900/60">Phone / WhatsApp *</label>
                    <input required placeholder="03XX-XXXXXXX" className="mt-1 w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500 focus:ring-2 focus:ring-rust-500/20" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono tracking-[0.1em] uppercase text-ink-900/60">Interested In</label>
                  <select className="mt-1 w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500">
                    <option>SAFRA Skyline — DHA Phase 8</option>
                    <option>SAFRA Residencia — Bahria Town</option>
                    <option>SAFRA Courts — Gulberg III</option>
                    <option>SAFRA Haven — DHA Raya</option>
                    <option>SAFRA One — Johar Town</option>
                    <option>SAFRA Greens — Raiwind Road</option>
                    <option>Not sure — advise me</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono tracking-[0.1em] uppercase text-ink-900/60">Budget Range</label>
                  <select className="mt-1 w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none">
                    <option>PKR 1.5 — 3 Cr</option>
                    <option>PKR 3 — 5 Cr</option>
                    <option>PKR 5 — 8 Cr</option>
                    <option>PKR 8 Cr+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono tracking-[0.1em] uppercase text-ink-900/60">Message</label>
                  <textarea rows={3} placeholder="Tell us about your family size, timeline, or investment goal..." className="mt-1 w-full bg-cream border border-ink-900/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-rust-500 resize-none" />
                </div>
                <button type="submit" className="w-full bg-ink-900 hover:bg-black text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-2 transition-colors hover:shadow-3d">
                  Confirm My Tour <ArrowUpRight size={18} />
                </button>
                <p className="text-[11px] text-center text-ink-900/40">By submitting, you agree to be contacted by SAFRA sales. No spam, ever.</p>
              </form>
            </motion.div>
          </div>

          {/* Map placeholder */}
          <div className="mt-10 bg-white rounded-[24px] overflow-hidden border border-ink-900/5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <div className="h-[360px] bg-sand relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&auto=format&fit=crop&q=60" alt="Lahore map" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-ink-900/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-6 py-4 shadow-3d flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-rust-600 text-white grid place-items-center"><MapPin size={18} /></div>
                <div>
                  <div className="font-bold text-ink-900 leading-none">SAFRA House</div>
                  <div className="text-xs text-ink-900/60">154-MB, DHA Phase 6, Lahore</div>
                </div>
                <a href="https://maps.google.com/?q=DHA+Phase+6+Lahore" target="_blank" rel="noreferrer" className="ml-2 bg-ink-900 text-white px-4 py-2 rounded-full text-xs font-semibold">
                  Open Maps
                </a>
              </div>
            </div>
            <div className="p-6 flex flex-wrap gap-6 text-sm text-ink-900/60">
              <span>• 2 mins from DHA Raya Fairways</span>
              <span>• Valet parking available</span>
              <span>• Wheelchair accessible</span>
              <span>• Kids play area</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
