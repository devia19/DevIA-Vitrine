import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Propriétaire, Salon de Coiffure",
    content:
      "Depuis que j'ai installé DevIA, je ne rate plus aucun rendez-vous. Mes clients peuvent prendre RDV même quand je suis occupée !",
    rating: 5,
  },
  {
    name: "Pierre Martin",
    role: "Gérant, Garage Automobile",
    content:
      "Excellent service ! L'IA comprend parfaitement les demandes et oriente mes clients vers les bons créneaux. Un vrai gain de temps.",
    rating: 5,
  },
  {
    name: "Sophie Leroux",
    role: "Directrice, Cabinet Médical",
    content:
      "La configuration a été super simple et maintenant nos patients peuvent prendre RDV 24h/24. Nos secrétaires sont ravies !",
    rating: 5,
  },
]

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez comment DevIA fait gagner du temps et de l'argent à leur entreprise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-current text-green-500 size-5 border-transparent w-6 border-2" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
