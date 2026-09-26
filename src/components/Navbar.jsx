import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? 'py-3' : 'py-6'}`}
      >
        <div className={`mx-auto max-w-[1280px] px-6 flex items-center justify-between ${scrolled ? 'glass rounded-full px-6 py-3 shadow-3d' : 'bg-transparent'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-white border border-ink-900/5 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
              <img src="/safra-icon-clean.png" alt="SAFRA Developers Logo" className="w-full h-full object-contain" />
            </div>
            <div className="leading-none">
              <div className="font-display font-bold text-[20px] tracking-[-0.02em] text-ink-900 flex items-baseline gap-1">
                SAFRA <span className="font-normal text-rust-600 text-[13px] tracking-[0.2em] font-mono">DEVELOPERS</span>
              </div>
              <div className="text-[10px] tracking-[0.18em] font-mono text-ink-900/50 -mt-1">EST. 2006 — LAHORE</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-ink-900 rounded-full p-1.5">
            {nav.map(item => {
              const active = pathname === item.to
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active ? 'bg-white text-ink-900 shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+92423210000" className="text-sm font-mono text-ink-900/60 hidden xl:block">+92 42 3210 0000</a>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-rust-600 hover:bg-rust-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5">
              Book a Tour <ArrowUpRight size={16} />
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-ink-900 text-white grid place-items-center">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream lg:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 py-20">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                >
                  <Link
                    to={item.to}
                    className={`block py-4 text-[42px] font-display font-semibold tracking-tight leading-none border-b border-ink-900/10 ${pathname === item.to ? 'text-rust-600' : 'text-ink-900'}`}
                  >
                    <span className="text-[12px] font-mono tracking-[0.2em] text-ink-900/40 mr-4 align-middle">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col gap-3"
              >
                <Link to="/contact" className="w-full bg-ink-900 text-white rounded-full py-4 text-center font-semibold flex items-center justify-center gap-2">
                  Start Your Project <ArrowUpRight size={18} />
                </Link>
                <p className="text-center text-sm text-ink-900/50 font-mono">DHA Phase 6, Lahore • bookings@safradevelopers.pk</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
