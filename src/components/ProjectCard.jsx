import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { useRef, useState } from 'react'

export default function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotate({
      x: (y - centerY) / 18,
      y: (centerX - x) / 18,
    })
  }
  const handleLeave = () => {
    setRotate({ x: 0, y: 0 })
    setHover(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
      className="perspective-1000 group"
    >
      <Link
        to={`/projects/${project.id}`}
        className="block preserve-3d transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) ${hover ? 'translateZ(10px)' : ''}`,
        }}
      >
        <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-ink-900/[0.06] group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.14)] transition-all duration-500">
          <div className="relative h-[320px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
            
            {/* Top pills */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span className="bg-white/95 backdrop-blur text-ink-900 text-[11px] font-mono tracking-[0.12em] uppercase px-3 py-1.5 rounded-full font-semibold">
                {project.status}
              </span>
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 grid place-items-center text-white group-hover:bg-rust-600 group-hover:border-rust-600 transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="flex items-center gap-2 text-white/80 text-xs font-mono tracking-wide mb-2">
                <MapPin size={12} className="text-rust-300" /> {project.location} • {project.year}
              </div>
              <h3 className="font-display text-[28px] font-semibold text-white leading-none tracking-tight">{project.title}</h3>
              <p className="text-white/60 text-sm mt-1">{project.type}</p>
            </div>

            {/* Shine sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.2s] ease-out" />
            </div>
          </div>

          <div className="p-6 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono tracking-[0.14em] text-ink-900/40 uppercase">{project.area} • {project.units}</div>
              <div className="font-display font-semibold text-ink-900 text-[18px] mt-1">{project.price}</div>
            </div>
            <div className={`hidden sm:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-ink-900 text-white group-hover:bg-rust-600 transition-colors`}>
              Explore <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
