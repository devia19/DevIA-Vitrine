import { Navigation } from "@/components/Navigation"
import { Pricing } from "@/components/Pricing"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, ArrowRight, Clock, TrendingUp, PhoneOff, Zap } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "Comment fonctionne l'audit gratuit ?",
    answer:
      "Nous analysons vos processus, vos outils existants et vos besoins spécifiques. Nous vous présentons ensuite une proposition d'automatisation adaptée avec un devis détaillé. L'audit est gratuit et sans engagement.",
  },
  {
    question: "Combien coûte une automatisation ?",
    answer:
      "Le coût dépend de votre secteur, du périmètre à automatiser (appels, emails, notifications, intégrations...) et de la complexité. Après l'audit gratuit, nous vous proposons un devis sur-mesure transparent, sans surprise.",
  },
  {
    question: "Puis-je choisir seulement certaines automatisations ?",
    answer:
      "Bien sûr ! Vous pouvez commencer par une automatisation spécifique (par exemple l'agent téléphonique IA) et en ajouter d'autres progressivement. Chaque automatisation est conçue pour fonctionner seule ou en complément des autres.",
  },
  {
    question: "Comment se passe la mise en place dans mes outils ?",
    answer:
      "Nous installons les automatisations directement dans vos outils existants : nous nous connectons à vos agendas, CRM, boîtes email, etc. Vous gardez le contrôle, nous assurons la synchronisation et le fonctionnement optimal.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non, pas d'engagement. Nous proposons des automatisations que vous utilisez au quotidien. Si vous souhaitez arrêter, nous vous aidons à récupérer vos données et à fermer proprement les intégrations.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-white px-4 py-2 text-sm font-medium">Devis sur-mesure</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Des automatisations{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">adaptées à votre activité</span>
          </h1>
          <p className="text-lg text-gray-600">
            Chaque entreprise est unique. DevIA vous propose un audit gratuit pour comprendre vos besoins et concevoir 
            des automatisations sur-mesure. Pas de tarifs fixes, mais des solutions adaptées à votre secteur et votre périmètre.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pendant que vous lisez ceci, vous perdez des clients</h2>
            <p className="text-xl text-gray-700 font-medium mb-4">
              <strong>3 appels non répondus = 150€ de CA perdu. Par jour. Multipliez par 30 = 4 500€/mois.</strong>
            </p>
            <p className="text-lg text-gray-600">Automatisez maintenant. Vos concurrents ne vous attendent pas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">10h par semaine gagnées</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium mb-2"><strong>Fini les tâches répétitives qui vous tuent.</strong></p>
                <p className="text-gray-600">Appels, emails, relances, notifications : tout s'automatise. Votre équipe se concentre sur ce qui rapporte vraiment.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">+30% de rendez-vous en plus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium mb-2"><strong>Zéro appel manqué = zéro client perdu.</strong></p>
                <p className="text-gray-600">Votre système répond 24/7, prend des RDV, envoie des confirmations. Même quand vous dormez, vous gagnez de l'argent.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneOff className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">4 500€/mois sauvés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium mb-2"><strong>Arrêtez de perdre des clients par manque de réactivité.</strong></p>
                <p className="text-gray-600">Chaque appel non répondu = CA perdu. Avec l'automatisation, vous ne ratez plus rien. Votre CA explose.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment ça se passe ?</h2>
            <p className="text-xl text-gray-600">Un processus simple pour des automatisations sur-mesure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Diagnostic gratuit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nous analysons vos processus, vos outils et vos besoins pour identifier les automatisations qui vous feront gagner le plus de temps.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Proposition sur-mesure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nous vous présentons un devis détaillé avec les automatisations proposées, adaptées à votre secteur et votre périmètre.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Mise en place</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nous installons les automatisations directement dans vos outils existants : agendas, CRM, emails, téléphone...</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Ajustements & accompagnement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nous affinons les automatisations selon vos retours et vous accompagnons dans leur utilisation au quotidien.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que DevIA peut automatiser pour vous</h2>
            <p className="text-xl text-gray-600">Une offre complète d'automatisation adaptée à votre secteur</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Agents téléphoniques IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Réponse automatique 24/7, prise de rendez-vous, renseignements clients. Un cas d'usage phare de notre offre d'automatisation.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Automatisation des emails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Confirmations, relances, rappels de rendez-vous, suivi client. Vos emails sont envoyés automatiquement au bon moment.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Synchronisation des outils</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Agendas (Google, Outlook, Calendly), CRM, outils métiers. Tous vos outils synchronisés en temps réel.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Notifications automatiques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">SMS, email, WhatsApp... Des notifications intelligentes pour votre équipe et vos clients selon vos règles.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Automatisations sectorielles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Hôtels, garages, cabinets, indépendants... Des automatisations spécifiques à votre secteur d'activité.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Sur-mesure complet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Audit, conception, installation, accompagnement. Tout est pensé pour votre entreprise spécifiquement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur nos automatisations sur-mesure</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-semibold text-gray-900">
                    <HelpCircle className="w-5 h-5 text-primary mr-3" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chaque jour d'attente, c'est de l'argent qui part</h2>
          <p className="text-xl text-gray-700 font-medium mb-6">
            <strong>Vous perdez déjà des clients. Ne perdez pas plus de temps.</strong>
          </p>
          <p className="text-lg text-gray-600 mb-12">
            Des centaines d'entreprises automatisent déjà. Elles gagnent du temps et de l'argent pendant que vous réfléchissez. 
            <strong> Le diagnostic est gratuit. Vous n'avez rien à perdre, tout à gagner.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Arrêtez de perdre des clients – Diagnostic gratuit
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Voir des exemples concrets
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
