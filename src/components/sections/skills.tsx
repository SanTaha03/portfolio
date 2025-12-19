import { Code2, Database, Layout, Terminal } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["Vue.js (2/3)", "Nuxt.js", "React / Next.js", "Tailwind CSS", "TypeScript", "Vite"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Laravel", "PHP 8+", "Node.js", "MySQL / PostgreSQL", "Redis", "API REST / GraphQL"]
  },
  {
    category: "DevOps & Tools",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Git / GitHub", "Docker", "CI/CD", "AWS / DigitalOcean", "Linux", "Nginx"]
  },
  {
    category: "Architecture",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Clean Architecture", "Design Patterns", "TDD / Testing", "Microservices", "SEO Optimization"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences <span className="text-primary">Techniques</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une stack moderne et performante pour répondre à tous les besoins de développement web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
