import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À propos de <span className="text-primary">moi</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bonjour, je suis <strong>TADIL Taha</strong>. Avec 5 ans d'expérience dans le développement web, 
                je me suis spécialisé dans la création d'architectures robustes et d'interfaces utilisateurs soignées.
              </p>
              <p>
                Mon approche combine rigueur technique et sensibilité design. Je ne me contente pas d'écrire du code ; 
                je conçois des solutions qui répondent aux besoins réels de mes clients et de leurs utilisateurs.
              </p>
              <p>
                Aujourd'hui freelance, j'accompagne les startups et les entreprises dans leurs défis techniques, 
                de la conception à la mise en production.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "5 ans d'expérience",
                "Expert Vue.js & Laravel",
                "Code propre & maintenable",
                "Sensibilité UI/UX"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-8">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Projets livrés</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-8">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support réactif</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
