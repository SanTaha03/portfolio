import { Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Parlons de votre projet</h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Vous avez une idée ? Un projet à lancer ? Ou simplement besoin d'un renfort technique ?
                  N'hésitez pas à me contacter pour en discuter.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Email</div>
                      <div className="font-medium">contact@tahatadil.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Localisation</div>
                      <div className="font-medium">Disponible en Remote</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-sm text-white/60">
                Réponse sous 24h garantie.
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-card">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Décrivez brièvement votre projet..."
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                >
                  Envoyer le message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
