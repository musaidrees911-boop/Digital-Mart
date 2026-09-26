import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone, Mail, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="relative max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5">
                <img src="/safra-icon-clean.png" alt="SAFRA Developers Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-display font-bold text-xl tracking-tight">SAFRA <span className="font-mono font-normal text-xs tracking-[0.2em] text-white/60">DEVELOPERS</span></div>
                <div className="text-[10px] tracking-[0.18em] font-mono text-white/40 -mt-1">CRAFTING TOMORROW'S LANDMARKS</div>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Pakistan's most trusted luxury developer. We don't just build structures — we craft legacies that appreciate for generations.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-rust-600 grid place-items-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-white/40 mb-6">NAVIGATE</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-white/40 mb-6">PROJECTS</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/projects/safra-skyline" className="hover:text-white transition-colors flex items-center gap-1.5">SAFRA Skyline <ArrowUpRight size={12} className="opacity-50" /></Link></li>
              <li><Link to="/projects/safra-residencia" className="hover:text-white transition-colors">SAFRA Residencia</Link></li>
              <li><Link to="/projects/safra-courts" className="hover:text-white transition-colors">SAFRA Courts</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">View All →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-white/40 mb-6">VISIT US</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-rust-500 shrink-0" /> SAFRA House, 154-MB, DHA Phase 6, Lahore, Pakistan</li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-rust-500 shrink-0" /> +92 42 3210 0000 — 24/7 Sales</li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-rust-500 shrink-0" /> hello@safradevelopers.pk</li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-6 bg-white text-ink-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-rust-50 transition-colors">
              Get Directions <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-white/40 font-mono">
          <p>© 2026 SAFRA Developers (Pvt) Ltd. All rights reserved. Approved by LDA & DHA Lahore.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="#" className="hover:text-white/70">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
