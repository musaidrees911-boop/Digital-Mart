import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function BuildingModel() {
  const group = useRef()
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.15
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })
  return (
    <group ref={group}>
      {/* Base podium */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[3.2, 0.2, 1.6]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Main tower */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[1.6, 2.8, 0.9]} />
        <meshStandardMaterial color="#FFFBF5" roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Glass facade lines - vertical */}
      {[-0.5, -0.25, 0, 0.25, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0.1, 0.46]}>
          <boxGeometry args={[0.03, 2.7, 0.02]} />
          <meshStandardMaterial color="#C65D2E" emissive="#C65D2E" emissiveIntensity={0.2} />
        </mesh>
      ))}
      {/* Horizontal floors */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, -1 + i * 0.32, 0.46]}>
          <boxGeometry args={[1.55, 0.015, 0.015]} />
          <meshStandardMaterial color="#1A1A1A" opacity={0.8} transparent />
        </mesh>
      ))}
      {/* Rust copper top cap */}
      <mesh position={[0, 1.65, 0]}>
        <boxGeometry args={[1.65, 0.15, 0.95]} />
        <meshStandardMaterial color="#C65D2E" roughness={0.4} metalness={0.7} />
      </mesh>
      {/* Side tower smaller */}
      <mesh position={[1.35, -0.3, 0.15]}>
        <boxGeometry args={[0.7, 1.9, 0.7]} />
        <meshStandardMaterial color="#E8DDD0" roughness={0.4} />
      </mesh>
      <mesh position={[1.35, 0.75, 0.15]}>
        <boxGeometry args={[0.72, 0.12, 0.72]} />
        <meshStandardMaterial color="#B45309" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Floating rings */}
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial color="#C65D2E" transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0.5]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#924010" transparent opacity={0.08} />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [4, 2.2, 4.5], fov: 38 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#C65D2E" />
        <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.4} penumbra={1} color="#FFFBF5" />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
          <BuildingModel />
        </Float>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.25} scale={6} blur={2.5} far={4} />
        <Environment preset="city" />
        <fog attach="fog" args={['#FFFBF5', 8, 18]} />
      </Canvas>
    </div>
  )
}
