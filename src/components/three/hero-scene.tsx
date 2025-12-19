"use client"

import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function AnimatedSphere() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#bc002d")

  useEffect(() => {
    // Ajustement de la couleur selon le thème (Rouge Akane ou variante)
    setColor(theme === "dark" ? "#d90036" : "#bc002d")
  }, [theme])

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.5} // Intensité de la déformation
          speed={2} // Vitesse de l'animation
          roughness={0.2}
          metalness={0.8} // Aspect métallique premium
        />
      </Sphere>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
