"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Star, Crown, Mail } from "lucide-react"

const pricingPlans = [
  {
    name: "Indépendants",
    price: "Sur devis",
    description: "Parfait pour les travailleurs indépendants",
    icon: Zap,
    features: [
      "Jusqu'à 50 appels/mois",
      "Réponses automatiques basiques",
      "Prise de RDV simple",
      "Support email",
      "Intégration Google Calendar",
      "Dépassement : 0,50€/appel ou passage à l'offre supérieure",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "outline" as const,
    popular: false,
    planType: "starter",
  },
  {
    name: "Pro PME/TPE",
    price: "Sur devis",
    description: "Pour les PME et TPE",
    icon: Star,
    features: [
      "Jusqu'à 150 appels/mois",
      "IA conversationnelle avancée",
      "Prise de RDV complexe",
      "Confirmations SMS/Email",
      "Intégrations multiples",
      "Support prioritaire",
      "Analyses détaillées",
      "Dépassement : 0,50€/appel ou passage à l'offre supérieure",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "hero" as const,
    popular: true,
    planType: "pro",
  },
  {
    name: "Entreprises",
    price: "Sur mesure",
    description: "Solution personnalisée pour grandes entreprises",
    icon: Crown,
    features: [
      "Appels illimités",
      "IA personnalisée",
      "Personnalisation de la voix",
      "Multi-langues",
      "API complète",
      "Support dédié 24/7",
      "Formation personnalisée",
      "SLA garantis",
      "Intégrations sur mesure",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "default" as const,
    popular: false,
    planType: "enterprise",
  },
]

export const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarifs adaptés à votre entreprise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Tous nos plans incluent un essai gratuit de 7 jours (10
            appels).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white">
                  Le plus populaire
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link
                  href={`/contact?offre=${plan.planType === 'starter' ? 'independant' : plan.planType === 'pro' ? 'pro' : 'entreprise'}`}
                  className="w-full"
                >
                  <Button 
                    asChild
                    variant={plan.buttonVariant} 
                    className="w-full"
                  >
                    <span>
                      <Mail className="w-4 h-4 mr-2 inline" />
                      {plan.buttonText}
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Toutes les options incluent un essai gratuit de 7 jours (10 appels), sans engagement.
          </p>
          <p className="text-gray-600">
            Besoin d'un plan personnalisé ?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contactez-nous
            </Link>
          </p>
        </div>

        {/* Modal removed in vitrine mode; CTAs now link to /contact */}
      </div>
    </section>
  )
}
