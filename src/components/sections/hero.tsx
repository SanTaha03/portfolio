"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

// Import dynamique pour éviter les erreurs SSR avec Three.js
const HeroScene = dynamic(() => import("@/components/three/hero-scene"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-muted/5" /> 
})

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(".hero-badge", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    )
    .fromTo(".hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
      "-=0.6"
    )
    .fromTo(".hero-desc",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
    .fromTo(".hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
      "-=0.8"
    )
    .fromTo(".hero-visual",
      { scale: 0.8, opacity: 0, rotation: -5 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2 },
      "-=1"
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <HeroScene />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible pour missions freelance
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="hero-title block">Développeur</span>
              <span className="hero-title block text-primary">Fullstack</span>
              <span className="hero-title block">& Architecte Web</span>
            </h1>
            
            <p className="hero-desc text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0">
              J'aide les startups et entreprises à transformer leurs idées en applications web performantes avec <strong>Vue.js</strong> et <strong>Laravel</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#contact" 
                className="hero-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 opacity-0"
              >
                Me contacter
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="#projects" 
                className="hero-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background border border-border rounded-md hover:bg-muted/50 transition-all opacity-0"
              >
                Voir mes projets
              </Link>
            </div>
          </div>
          
          <div className="hero-visual flex-1 relative flex justify-center lg:justify-end opacity-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl rotate-3 blur-2xl" />
              <div className="absolute inset-0 bg-card/50 backdrop-blur-sm border border-border rounded-2xl -rotate-3 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary/20 mb-4">CODE</div>
                  <div className="space-y-2 font-mono text-sm text-muted-foreground">
                    <p>&lt;Developer</p>
                    <p className="pl-4">name="TADIL Taha"</p>
                    <p className="pl-4">exp="5 years"</p>
                    <p className="pl-4">stack={["Vue", "Laravel"]}</p>
                    <p>/&gt;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
