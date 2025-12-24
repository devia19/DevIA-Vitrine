"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Star, Crown, Mail } from "lucide-react"

const pricingPlans = [
  {
    name: "Automatisations pour indépendants",
    price: "Sur devis",
    description: "Solutions d'automatisation adaptées aux indépendants",
    icon: Zap,
    features: [
      "Agent téléphonique IA (selon volume)",
      "Automatisation des emails et relances",
      "Synchronisation agenda",
      "Notifications SMS/Email",
      "Intégration avec vos outils existants",
      "Accompagnement à la mise en place",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "outline" as const,
    popular: false,
    planType: "starter",
  },
  {
    name: "Automatisations pour TPE / PME",
    price: "Sur devis",
    description: "Automatisations complètes pour PME et TPE",
    icon: Star,
    features: [
      "Agents téléphoniques IA personnalisés",
      "Automatisation complète emails et notifications",
      "Synchronisation multi-outils (CRM, agenda, outils métiers)",
      "Automatisations sur-mesure selon votre secteur",
      "Support et accompagnement dédiés",
      "Ajustements et optimisations",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "hero" as const,
    popular: true,
    planType: "pro",
  },
  {
    name: "Projet sur-mesure",
    price: "Sur mesure",
    description: "Solution personnalisée pour grandes entreprises",
    icon: Crown,
    features: [
      "Audit complet de vos processus",
      "Conception d'automatisations sur-mesure",
      "Agents IA multi-langues et personnalisés",
      "Intégrations complexes avec vos systèmes",
      "API complète et connecteurs dédiés",
      "Support et maintenance 24/7",
      "Formation et accompagnement",
      "Évolutivité et ajustements continus",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Combien perdez-vous chaque mois sans automatisation ?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-4">
            <strong>Calcul rapide : 3 appels non répondus/jour × 50€ de CA = 4 500€ perdus par mois</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous analysons vos pertes et vous proposons des automatisations adaptées. 
            <strong> Le diagnostic est gratuit. Vous avez tout à gagner, rien à perdre.</strong>
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
            Chaque projet commence par un <strong>audit gratuit</strong> de vos besoins pour proposer la meilleure solution d'automatisation.
          </p>
          <p className="text-gray-600">
            Vous souhaitez discuter de votre projet d'automatisation ?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Planifiez un diagnostic gratuit
            </Link>
          </p>
        </div>

        {/* Modal removed in vitrine mode; CTAs now link to /contact */}
      </div>
    </section>
  )
}
