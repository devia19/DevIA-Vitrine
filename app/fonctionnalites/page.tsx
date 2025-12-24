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
    category: "Agents IA",
    icon: Bot,
    title: "Agents téléphoniques IA",
    description: "Répondez à tous vos appels 24/7, renseignez vos clients et prenez des rendez-vous automatiquement. Un cas d'usage phare de notre offre d'automatisation.",
    items: ["Réponse automatique 24/7", "Voix naturelle et personnalisable", "Compréhension contextuelle", "Réponses adaptées à votre métier"],
  },
  {
    category: "Emails",
    icon: Mail,
    title: "Automatisation des emails",
    description: "Confirmations, relances, rappels de rendez-vous, suivi client. Vos emails sont envoyés automatiquement au bon moment.",
    items: ["Emails de confirmation automatiques", "Relances personnalisées", "Rappels de rendez-vous", "Suivi client automatisé"],
  },
  {
    category: "Communication",
    icon: MessageCircle,
    title: "Notifications intelligentes",
    description: "SMS, email, WhatsApp... Des notifications automatiques pour votre équipe et vos clients selon vos règles métier.",
    items: ["SMS de rappel automatiques", "Notifications multi-canaux", "Alertes pour l'équipe", "Personnalisation selon le contexte"],
  },
  {
    category: "Intégration",
    icon: Calendar,
    title: "Synchronisation avec vos outils",
    description: "Intégration avec vos agendas (Google, Outlook, Calendly), CRM, outils métiers pour une synchronisation temps réel.",
    items: ["Agendas temps réel", "Synchronisation CRM", "Intégration outils métiers", "Évite les doublons"],
  },
  {
    category: "Secteurs",
    icon: Brain,
    title: "Automatisations sur-mesure par secteur",
    description: "Adaptées à votre secteur : hôtels, garages, cabinets, indépendants... Chaque automatisation est conçue pour votre activité.",
    items: ["Formation sur vos services", "Vocabulaire métier spécifique", "Processus adaptés", "Amélioration continue"],
  },
  {
    category: "Accompagnement",
    icon: Headphones,
    title: "Accompagnement & Support",
    description: "Équipe dédiée pour vous accompagner : audit, mise en place, ajustements et support au quotidien.",
    items: ["Support en français", "Formation incluse", "Ajustements continus", "Assistance technique"],
  },
  {
    category: "Performance",
    icon: BarChart3,
    title: "Suivi & Optimisation",
    description: "Analysez vos performances et l'impact de vos automatisations. Nous optimisons continuellement pour maximiser votre gain de temps.",
    items: ["Statistiques détaillées", "Indicateurs de gain de temps", "Rapports personnalisés", "Optimisation continue"],
  },
  {
    category: "Sécurité",
    icon: Shield,
    title: "Sécurité & Confidentialité",
    description: "Vos données et celles de vos clients sont protégées selon les standards européens. Installation dans vos outils existants.",
    items: ["Conformité RGPD", "Chiffrement des données", "Installation sécurisée", "Hébergement sécurisé"],
  },
  {
    category: "Installation",
    icon: Zap,
    title: "Mise en place rapide",
    description: "Installation dans vos outils existants avec notre équipe d'experts. Aucune disruption de votre activité.",
    items: ["Configuration dans vos outils", "Formation incluse", "Support à l'installation", "Aucune disruption"],
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
    title: "Diagnostic gratuit",
    description: "Nous analysons vos processus, vos outils et vos besoins pour identifier les automatisations qui vous feront gagner le plus de temps.",
  },
  {
    number: "02",
    title: "Proposition sur-mesure",
    description: "Nous vous présentons un devis détaillé avec les automatisations proposées, adaptées à votre secteur et votre périmètre.",
  },
  {
    number: "03",
    title: "Mise en place",
    description: "Nous installons les automatisations directement dans vos outils existants : agendas, CRM, emails, téléphone...",
  },
  {
    number: "04",
    title: "Ajustements & accompagnement",
    description: "Nous affinons les automatisations selon vos retours et vous accompagnons dans leur utilisation au quotidien.",
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
            <Badge className="mb-6 bg-primary text-white px-4 py-2 text-sm font-medium">Automatisations sur-mesure</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tout ce que vous perdez chaque jour peut être automatisé
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-4">
              <strong>Appels non répondus. Emails répétitifs. Relances manuelles. Double saisie.</strong>
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Nous automatisons tout ça. <strong>Gagnez 10h par semaine minimum</strong>, ne ratez plus jamais un client, 
              multipliez vos rendez-vous. Vos concurrents le font déjà. Pourquoi pas vous ?
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
              <Badge className="mb-6 bg-primary text-white px-4 py-2 text-sm font-medium">Comment ça se passe</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mise en place en 4 étapes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chaque jour d'attente, c'est de l'argent perdu</h2>
            <p className="text-xl text-gray-700 font-medium mb-4 max-w-3xl mx-auto">
              <strong>Vous perdez déjà des clients chaque jour. Ne perdez pas plus de temps.</strong>
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Des centaines d'entreprises automatisent déjà et gagnent 10h par semaine. 
              <strong> Le diagnostic est gratuit. Vous n'avez rien à perdre, tout à gagner.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="default" size="xl" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <Play className="w-5 h-5 mr-2" />
                  Demander un audit gratuit
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Voir des exemples concrets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
