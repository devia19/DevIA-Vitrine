import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Bot,
  Calendar,
  MessageCircle,
  Clock,
  Brain,
  Headphones,
  BarChart3,
  Shield,
  Zap,
  Play,
  DollarSign,
  Mail,
  Stethoscope,
  Users,
  MessageSquare,
} from "lucide-react"

const features = [
  {
    category: "IA",
    icon: Bot,
    title: "Agent IA Vocal Intelligent",
    description: "Assistant vocal avancé capable de comprendre et répondre naturellement à vos clients.",
    items: ["Voix naturelle et personnalisable", "Compréhension contextuelle", "Réponses adaptées à votre métier"],
  },
  {
    category: "Gestion",
    icon: Calendar,
    title: "Prise de Rendez-vous Automatique",
    description: "Synchronisation directe avec votre agenda pour une gestion optimale des créneaux",
    items: ["Agenda temps réel", "Évite les doublons", "Confirmations automatiques"],
  },
  {
    category: "Communication",
    icon: MessageCircle,
    title: "Messages & Notifications",
    description: "Système complet de communication avec vos clients via SMS et email",
    items: ["SMS de rappel", "Emails de confirmation", "Notifications en temps réel"],
  },
  {
    category: "Disponibilité",
    icon: Clock,
    title: "Disponibilité 24h/24",
    description: "Votre assistant ne dort jamais et reste disponible même en dehors de vos horaires",
    items: ["Service continu", "Aucun appel manqué", "Réactivité immédiate"],
  },
  {
    category: "IA",
    icon: Brain,
    title: "Apprentissage Personnalisé",
    description: "L'IA s'adapte à votre vocabulaire, vos services et votre façon de travailler",
    items: ["Formation sur vos services", "Vocabulaire métier", "Amélioration continue"],
  },
  {
    category: "Support",
    icon: Headphones,
    title: "Support Client Dédié",
    description: "Équipe francophone disponible pour vous accompagner dans votre utilisation",
    items: ["Support en français", "Formation incluse", "Assistance technique"],
  },
  {
    category: "Analytique",
    icon: BarChart3,
    title: "Tableau de Bord Analytique",
    description: "Analysez vos performances et optimisez votre activité grâce aux données",
    items: ["Statistiques détaillées", "Rapports personnalisés", "Indicateurs de performance"],
  },
  {
    category: "Sécurité",
    icon: Shield,
    title: "Sécurité & Confidentialité",
    description: "Vos données et celles de vos clients sont protégées selon les standards européens",
    items: ["Conformité RGPD", "Chiffrement des données", "Hébergement sécurisé"],
  },
  {
    category: "Installation",
    icon: Zap,
    title: "Installation Rapide",
    description: "Mise en service en moins de 24h avec notre équipe d'experts",
    items: ["Configuration express", "Formation incluse", "Support à l'installation"],
  },
]

const integrations = [
  {
    name: "Google Agenda",
    description: "Synchronisation parfaite avec Google Calendar",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Outlook",
    description: "Compatible avec tous les calendriers Outlook",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Doctolib",
    description: "Intégration native pour les professionnels de santé",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Calendly",
    description: "Connexion avec votre outil de prise de RDV",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "CRM",
    description: "Compatible avec les principaux CRM du marché",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "SMS Pro",
    description: "Envoi de SMS via les meilleurs opérateurs",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

const steps = [
  {
    number: "01",
    title: "Configuration",
    description: "Notre équipe configure votre assistant selon vos besoins spécifiques en moins de 24h.",
  },
  {
    number: "02",
    title: "Formation",
    description: "L'IA apprend votre vocabulaire métier, vos services et votre façon de communiquer.",
  },
  {
    number: "03",
    title: "Activation",
    description: "Votre assistant IA est opérationnel et prêt à gérer vos appels et rendez-vous.",
  },
]

export default function Fonctionnalites() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary text-white px-4 py-2 text-sm font-medium">Fonctionnalités Avancées</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tout ce dont vous avez besoin
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez toutes les fonctionnalités qui font de DevIA l'assistant IA vocal le plus complet pour votre
              activité professionnelle.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-gray-100 text-black px-3 py-1 text-xs font-medium">
                      <feature.icon className="w-3 h-3 mr-1 text-primary" />
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Integrations Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-primary text-white px-4 py-2 text-sm font-medium">Intégrations</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compatible avec vos outils</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                DevIA s'intègre parfaitement avec les outils que vous utilisez déjà au quotidien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    {integration.name === "Google Agenda" ? (
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    ) : integration.name === "Outlook" ? (
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    ) : integration.name === "Doctolib" ? (
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-green-500 flex items-center justify-center">
                        <Stethoscope className="w-6 h-6 text-white" />
                      </div>
                    ) : integration.name === "Calendly" ? (
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-orange-500 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                    ) : integration.name === "CRM" ? (
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-purple-500 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-indigo-500 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                    <p className="text-sm text-gray-600">{integration.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How it works Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-primary text-white px-4 py-2 text-sm font-medium">Comment ça marche</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mise en service en 3 étapes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prêt à transformer votre activité ?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Rejoignez les centaines de professionnels qui ont déjà adopté DevIA pour automatiser leur gestion client.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button variant="default" size="xl" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <Play className="w-5 h-5 mr-2" />
                  Voir la démonstration
                </Button>
              </Link>
              <Link href="/tarifs">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Découvrir nos tarifs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
