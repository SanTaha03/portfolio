"use client"

import { Laptop, RefreshCw, Server, Settings } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"

const services = [
  {
    title: "Développement Web",
    description: "Création d'applications web sur mesure, performantes et scalables avec Vue.js et Laravel.",
    icon: <Laptop className="w-8 h-8" />
  },
  {
    title: "Refonte Frontend",
    description: "Modernisation d'interfaces existantes, migration vers Vue 3 ou React, optimisation UX/UI.",
    icon: <RefreshCw className="w-8 h-8" />
  },
  {
    title: "Développement API",
    description: "Conception et développement d'APIs RESTful ou GraphQL robustes et sécurisées.",
    icon: <Server className="w-8 h-8" />
  },
  {
    title: "Maintenance & Audit",
    description: "Audit de code, optimisation des performances, correction de bugs et maintenance évolutive.",
    icon: <Settings className="w-8 h-8" />
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes <span className="text-primary">Services</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions adaptées à vos besoins, que vous soyez une startup en lancement ou une entreprise établie.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <TiltCard className="h-full">
                <div className="group h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-xl">
                  <div className="mb-6 inline-block p-4 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
