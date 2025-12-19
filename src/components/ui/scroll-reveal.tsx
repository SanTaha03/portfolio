"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Déclenche quand le haut de l'élément est à 85% du viewport
          toggleActions: "play none none reverse", // Rejoue en reverse si on remonte
        },
      }
    )
  }, { scope: ref })

  return (
    <div ref={ref} className={cn("opacity-0 will-change-transform", className)}>
      {children}
    </div>
  )
}
