import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Calendar, MessageCircle, Clock, Info, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Agents téléphoniques IA – Plus jamais d'appel manqué",
    description: "Combien de clients avez-vous perdus cette semaine à cause d'appels non répondus ? Répondez à TOUS vos appels 24/7, même la nuit. Zéro client perdu.",
  },
  {
    icon: Calendar,
    title: "Emails automatiques – Gagnez 5h par semaine",
    description: "Arrêtez de passer des heures sur les confirmations et relances. Automatisez tout : emails, SMS, notifications. Votre système travaille pour vous.",
  },
  {
    icon: MessageCircle,
    title: "Notifications automatiques – Ne ratez plus rien",
    description: "SMS, email, WhatsApp... Vos clients et votre équipe sont toujours informés au bon moment. Plus de rendez-vous oubliés, plus d'opportunités manquées.",
  },
  {
    icon: Clock,
    title: "Synchronisation automatique – Tout connecté, zéro double saisie",
    description: "Google Calendar, Outlook, Calendly, CRM... Tout se synchronise automatiquement. Plus besoin de recopier les informations partout. Gagnez 2h par semaine.",
  },
  {
    icon: Info,
    title: "Automatisations sur-mesure – Adapté à VOTRE métier",
    description: "Hôtels, garages, cabinets, salons, indépendants... Chaque secteur a ses besoins. Nous automatisons exactement ce qui vous fait perdre du temps.",
  },
  {
    icon: BarChart3,
    title: "Résultats mesurables – 10h minimum gagnées par semaine",
    description: "Voyez en temps réel combien d'heures vous gagnez, combien de rendez-vous en plus, combien de clients sauvés. Des chiffres concrets.",
  },
]

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que vous perdez chaque jour sans automatisation</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-4">
            <strong>Appels non répondus → Clients perdus</strong> | <strong>Tâches répétitives → Temps gaspillé</strong> | <strong>Relances manuelles → Opportunités ratées</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Automatisez tout ça. <strong>Gagnez 10h par semaine minimum</strong> et multipliez vos prises de rendez-vous. 
            Vos concurrents le font déjà. Pourquoi pas vous ?
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
