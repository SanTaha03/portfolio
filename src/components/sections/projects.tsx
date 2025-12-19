import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Une interface d'administration complète pour gérer les produits, commandes et clients. Intégration de graphiques en temps réel.",
    tags: ["Vue.js", "Laravel", "Tailwind", "Chart.js"],
    image: "bg-gradient-to-br from-gray-800 to-gray-900", // Placeholder class
    link: "#",
    github: "#"
  },
  {
    title: "SaaS Booking Platform",
    description: "Plateforme de réservation en ligne pour professionnels de santé. Gestion de calendrier, paiements Stripe et notifications.",
    tags: ["Nuxt.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "bg-gradient-to-br from-blue-900 to-slate-900", // Placeholder class
    link: "#",
    github: "#"
  },
  {
    title: "Real Estate API",
    description: "API RESTful performante pour une application immobilière. Recherche avancée, géolocalisation et gestion de médias.",
    tags: ["Laravel", "MySQL", "Redis", "Docker"],
    image: "bg-gradient-to-br from-emerald-900 to-teal-900", // Placeholder class
    link: "#",
    github: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets <span className="text-primary">Récents</span></h2>
            <p className="text-muted-foreground max-w-xl">
              Une sélection de projets démontrant mon expertise technique et ma capacité à livrer des produits finis.
            </p>
          </div>
          <Link 
            href="https://github.com" 
            target="_blank"
            className="hidden md:inline-flex items-center font-medium hover:text-primary transition-colors"
          >
            Voir tout sur GitHub <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${project.image} relative group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <Link 
                    href={project.link}
                    className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors mx-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={project.github}
                    className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors mx-2"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="https://github.com" 
            target="_blank"
            className="inline-flex items-center font-medium hover:text-primary transition-colors"
          >
            Voir tout sur GitHub <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
