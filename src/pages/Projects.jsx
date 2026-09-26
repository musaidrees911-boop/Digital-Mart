import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const filters = ["All", "Ready to Move", "Under Construction", "Launching Soon", "Selling Fast"]

export default function Projects() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? projects : projects.filter(p => p.status === active)

  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-ink-900 text-white rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.16em] uppercase">
            Portfolio • 42 Delivered • 6 Live
          </div>
          <h1 className="font-display font-bold text-[48px] lg:text-[64px] leading-[0.85] tracking-[-0.04em] mt-6 text-ink-900">
            Every project <br />
            <span className="italic font-normal text-rust-600">a landmark</span> in its own right.
          </h1>
          <p className="mt-4 max-w-[640px] text-ink-900/60 leading-relaxed">
            From high-rises in DHA to farmhouse estates on Raiwind Road — each SAFRA development is designed to appreciate, not just accommodate.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${active === f ? 'bg-ink-900 text-white border-ink-900 shadow-lg' : 'bg-white text-ink-900/70 border-ink-900/10 hover:border-ink-900/20 hover:text-ink-900'}`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto text-sm font-mono text-ink-900/40 hidden sm:block">
            Showing {filtered.length} projects
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink-900/50">
            No projects in this category yet — check back soon.
          </div>
        )}

        <div className="mt-16 bg-ink-900 rounded-[24px] p-8 lg:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-[28px] leading-none">Can't decide?</h3>
            <p className="text-white/60 mt-2 max-w-[560px]">Tell us your budget, family size, and timeline — we'll curate 3 options with ROI sheets and a private 3D walkthrough.</p>
          </div>
          <a href="/contact" className="shrink-0 bg-white text-ink-900 px-7 py-3.5 rounded-full font-semibold hover:bg-cream transition-colors">
            Get Personal Curation →
          </a>
        </div>
      </div>
    </div>
  )
}
