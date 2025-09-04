import { Navigation } from "@/components/Navigation"
import { Pricing } from "@/components/Pricing"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, HelpCircle, ArrowRight, Clock, TrendingUp, PhoneOff, Zap } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const comparisonFeatures = [
  {
    category: "Appels",
    features: [
      { name: "Appels mensuels", starter: "50", professional: "150", enterprise: "Illimité" },
      { name: "Réponse automatique", starter: true, professional: true, enterprise: true },
      { name: "Transfert d'appels", starter: false, professional: true, enterprise: true },
      { name: "Enregistrement des appels", starter: false, professional: true, enterprise: true },
      { name: "Dépassement quota", starter: "0,50€/appel", professional: "0,50€/appel", enterprise: "Inclus" },
    ],
  },
  {
    category: "IA et Personnalisation",
    features: [
      { name: "IA conversationnelle", starter: "Basique", professional: "Avancée", enterprise: "Personnalisée" },
      { name: "Langues supportées", starter: "1", professional: "1", enterprise: "Illimitées" },
      { name: "Personnalisation voix", starter: false, professional: false, enterprise: true },
      { name: "Scripts personnalisés", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: "Intégrations",
    features: [
      { name: "Google Calendar", starter: true, professional: true, enterprise: true },
      { name: "Outlook", starter: false, professional: true, enterprise: true },
      { name: "CRM intégrations", starter: false, professional: true, enterprise: true },
      { name: "API complète", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Support email", starter: true, professional: true, enterprise: true },
      { name: "Support prioritaire", starter: false, professional: true, enterprise: true },
      { name: "Support téléphonique", starter: false, professional: false, enterprise: true },
      { name: "Account manager dédié", starter: false, professional: false, enterprise: true },
    ],
  },
]

const faqs = [
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer:
      "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.",
  },
  {
    question: "Que se passe-t-il si je dépasse mon quota d'appels ?",
    answer:
      "Vous recevrez une notification avant d'atteindre votre limite. Vous pouvez alors upgrader votre plan ou des frais supplémentaires s'appliqueront.",
  },
  {
    question: "Y a-t-il une période d'engagement ?",
    answer: "Non, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment.",
  },
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer:
      "7 jours d'essai gratuit complet (10 appels), sans carte de crédit requise. Vous avez accès à toutes les fonctionnalités du plan choisi.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent text-white px-4 py-2 text-sm font-medium">Tarifs transparents</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choisissez le plan{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">parfait</span>
          </h1>
          <p className="text-lg text-gray-600">
            Tous nos plans incluent un essai gratuit de 7 jours (10 appels). Pas de frais cachés, pas d'engagement.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir DevIA ?</h2>
            <p className="text-xl text-gray-600">Des résultats concrets et mesurables pour votre entreprise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Gagnez jusqu'à 10 heures par mois</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">L'IA s'occupe de vos appels, vos rendez-vous, vos rappels.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">+30% de réservations en moyenne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Vos clients peuvent réserver à toute heure, même hors horaires.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneOff className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">0 appel manqué = 0 client perdu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Soyez disponible 24h/24 sans être devant le téléphone.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison with alternatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comparaison avec les alternatives</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Solution</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coût mensuel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Disponibilité</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Appels traités</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Temps de mise en place</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Secrétaire humaine</td>
                  <td className="px-6 py-4 text-sm text-gray-600">1200 €</td>
                  <td className="px-6 py-4 text-sm text-gray-600">35h/semaine</td>
                  <td className="px-6 py-4 text-sm text-gray-600">200 max</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Délai d'embauche long</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Standard téléphonique externe</td>
                  <td className="px-6 py-4 text-sm text-gray-600">250–400 €</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Limité, pas personnalisé</td>
                  <td className="px-6 py-4 text-sm text-gray-600">100–150</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Abonnement rigide</td>
                </tr>
                <tr className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <td className="px-6 py-4 text-sm font-bold text-primary">DevIA</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">79,99 € – 139,99 €</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">24h/24 – 7j/7</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">Jusqu'à 200+</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">Installation immédiate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comparaison détaillée des plans</h2>
            <p className="text-xl text-gray-600">Toutes les fonctionnalités en détail</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fonctionnalités</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Indépendants</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro PME/TPE</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Entreprises</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonFeatures.map((category, categoryIndex) => (
                  <>
                    <tr key={categoryIndex} className="bg-gray-50">
                      <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-gray-900">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={`${categoryIndex}-${featureIndex}`}>
                        <td className="px-6 py-4 text-sm text-gray-900">{feature.name}</td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{feature.starter}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{feature.professional}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur nos tarifs</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prêt à commencer ?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Rejoignez des centaines d'entreprises qui font déjà confiance à DevIA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Demander un devis
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Voir une démonstration
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
