import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Calendar, MessageCircle, Clock, Info, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Réponse automatique 24/7",
    description: "Votre agent IA répond à tous les appels, même la nuit et les weekends.",
  },
  {
    icon: Calendar,
    title: "Prise de rendez-vous intelligente",
    description: "Synchronisation automatique avec votre agenda Google, Outlook ou Calendly.",
  },
  {
    icon: MessageCircle,
    title: "Confirmations automatiques",
    description: "SMS et emails de confirmation envoyés automatiquement.",
  },
  {
    icon: Clock,
    title: "Gestion des horaires",
    description: "Configurez vos horaires d'ouverture et vos créneaux disponibles.",
  },
  {
    icon: Info,
    title: "Informations client",
    description: "Renseignez vos clients sur vos services, tarifs et disponibilités.",
  },
  {
    icon: BarChart3,
    title: "Analyses détaillées",
    description: "Suivez vos appels, rendez-vous et performances en temps réel.",
  },
]

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète pour automatiser vos appels entrants et améliorer votre service client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
