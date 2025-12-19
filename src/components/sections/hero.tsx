import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements - Japanese Pattern inspired */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/5 -z-10 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible pour missions freelance
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Développeur <br />
              <span className="text-primary">Fullstack</span> & <br />
              Architecte Web
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              J'aide les startups et entreprises à transformer leurs idées en applications web performantes avec <strong>Vue.js</strong> et <strong>Laravel</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
              >
                Me contacter
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background border border-border rounded-md hover:bg-muted/50 transition-all"
              >
                Voir mes projets
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Abstract representation of profile or code */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl rotate-3" />
              <div className="absolute inset-0 bg-card border border-border rounded-2xl -rotate-3 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary/10 mb-4">CODE</div>
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
      
      {/* Vertical Text - Japanese Style */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-8 text-xs font-mono text-muted-foreground/50 writing-vertical-rl select-none">
        <span>EST. 2020</span>
        <span>TOKYO • PARIS • REMOTE</span>
      </div>
    </section>
  )
}
