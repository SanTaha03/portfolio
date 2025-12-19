"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const card = ref.current
    const content = contentRef.current
    if (!card || !content) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = ((y - centerY) / centerY) * -5 // Max 5deg rotation
      const rotateY = ((x - centerX) / centerX) * 5

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, { scope: ref })

  return (
    <div ref={ref} className={cn("relative transform-gpu preserve-3d", className)}>
      <div ref={contentRef} className="h-full w-full">
        {children}
      </div>
    </div>
  )
}
