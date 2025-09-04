"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Play,
  Pause,
  Volume2,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  User,
} from "lucide-react"
import Link from "next/link"

const demoScenarios = [
  {
    title: "Salon de coiffure - Prise de RDV",
    description: "Prise de rendez-vous intelligente avec base de données intégrée",
    duration: "3:15",
    transcript: [
      {
        speaker: "CallBot",
        message:
          "Bonjour, vous êtes bien au salon de coiffure Marie. Je suis votre assistante virtuelle DevIA. Comment puis-je vous aider ?",
        time: "0:00",
      },
      {
        speaker: "Client",
        message: "Bonjour, je souhaiterais prendre un rendez-vous pour une coupe et une coloration.",
        time: "0:05",
      },
      {
        speaker: "CallBot",
        message:
          "Parfait ! D'après ma base de données, une coupe femme + coloration prend environ 2h30 et coûte 85€. Je consulte les disponibilités... Préférez-vous plutôt le matin ou l'après-midi ?",
        time: "0:10",
      },
      {
        speaker: "Client",
        message: "Plutôt l'après-midi si possible.",
        time: "0:18",
      },
      {
        speaker: "CallBot",
        message:
          "Très bien ! J'ai un créneau parfait jeudi 14 décembre à 14h30, ce qui nous amènerait à 17h maximum. Marie sera disponible pour vous. Cela vous convient-il ?",
        time: "0:22",
      },
      {
        speaker: "Client",
        message: "Oui, c'est parfait ! Et le prix c'était combien déjà ?",
        time: "0:30",
      },
      {
        speaker: "CallBot",
        message:
          "85€ pour la coupe + coloration. Je bloque le créneau sur l'agenda. Puis-je avoir votre nom et numéro de téléphone ?",
        time: "0:35",
      },
      {
        speaker: "Client",
        message: "Sophie Martin, 06 12 34 56 78.",
        time: "0:42",
      },
      {
        speaker: "CallBot",
        message:
          "Parfait Sophie ! Votre rendez-vous est confirmé et intégré dans notre planning : jeudi 14 décembre à 14h30 pour coupe + coloration, durée 2h30, tarif 85€. Vous recevrez un SMS de confirmation avec tous les détails. À bientôt !",
        time: "0:47",
      },
    ],
  },
  {
    title: "Camping - Réservation hors saison",
    description: "Réservation complète avec besoins spécifiques gérée par l'IA",
    duration: "4:15",
    transcript: [
      {
        speaker: "CallBot",
        message:
          "Bonjour, camping Les Pins à votre service. Je suis l'assistant virtuel DevIA. Comment puis-je vous aider ?",
        time: "0:00",
      },
      {
        speaker: "Client",
        message:
          "Bonjour, nous sommes une famille de 4 personnes et aimerions réserver pour juillet prochain. Mais nous avons des besoins spécifiques...",
        time: "0:05",
      },
      {
        speaker: "CallBot",
        message:
          "Parfait ! Je consulte nos disponibilités pour juillet 2024. Pouvez-vous me préciser vos besoins spécifiques ? Je vais voir quelles solutions nous pouvons vous proposer.",
        time: "0:13",
      },
      {
        speaker: "Client",
        message:
          "Nous avons un enfant en fauteuil roulant, il nous faudrait un mobil-home adapté, proche des sanitaires et de la piscine. Et mon époux est allergique aux pollens de certains arbres...",
        time: "0:20",
      },
      {
        speaker: "CallBot",
        message:
          "Je comprends vos contraintes. D'après notre base de données, j'ai 3 mobil-homes PMR disponibles en juillet. Le n°12 est parfait : rampe d'accès, douche adaptée, à 20m des sanitaires et 50m de la piscine. Pour les allergies, cette zone est éloignée des bouleaux et cyprès. Quelles dates souhaitez-vous ?",
        time: "0:32",
      },
      {
        speaker: "Client",
        message: "Du 15 au 29 juillet, ça ferait 2 semaines. C'est possible ?",
        time: "0:45",
      },
      {
        speaker: "CallBot",
        message:
          "Excellente nouvelle ! Le mobil-home 12 est libre du 15 au 29 juillet. C'est un 6 personnes avec 2 chambres, terrasse couverte. Tarif 2 semaines : 980€ incluant électricité, eau, et accès piscine. La taxe de séjour (1,50€/nuit/adulte) sera à régler sur place.",
        time: "0:50",
      },
      {
        speaker: "Client",
        message: "Parfait ! Et pour les activités, qu'est-ce qui est accessible pour notre fils ?",
        time: "1:05",
      },
      {
        speaker: "CallBot",
        message:
          "Nous avons un parcours accessible autour de l'étang, la piscine avec élévateur, et le club enfants adapte ses activités. Le restaurant a également un accès PMR. Je peux déjà bloquer votre réservation si vous confirmez ?",
        time: "1:10",
      },
      {
        speaker: "Client",
        message: "Oui, je confirme ! Comment procède-t-on ?",
        time: "1:22",
      },
      {
        speaker: "CallBot",
        message:
          "Parfait ! Je prends vos coordonnées pour la réservation. J'aurai besoin d'un acompte de 30% soit 294€ par virement ou CB. Le solde sera à régler à l'arrivée. Puis-je avoir votre nom complet et email ?",
        time: "1:25",
      },
      {
        speaker: "Client",
        message: "Famille Durand, Pierre et Marie. Mon email : pierre.durand@email.com",
        time: "1:38",
      },
      {
        speaker: "CallBot",
        message:
          "Noté ! Réservation confirmée : famille Durand, mobil-home 12 PMR du 15 au 29/07, 4 personnes, 980€. Vous recevrez un email avec contrat et modalités de paiement dans 5 minutes. Un SMS de confirmation suivra. Excellent séjour en perspective !",
        time: "1:42",
      },
    ],
  },
  {
    title: "Boulangerie - Redirection pour allergies",
    description: "Commande spéciale nécessitant transfert vers un expert humain",
    duration: "2:20",
    transcript: [
      {
        speaker: "CallBot",
        message: "Bonjour, boulangerie Dupain à votre service. Je suis l'assistant DevIA. Comment puis-je vous aider ?",
        time: "0:00",
      },
      {
        speaker: "Client",
        message: "Bonjour, je voudrais commander un gâteau d'anniversaire pour samedi, mais c'est un peu compliqué...",
        time: "0:05",
      },
      {
        speaker: "CallBot",
        message:
          "Pas de problème ! Je peux prendre votre commande. Pour combien de personnes et quel type de gâteau souhaitez-vous ?",
        time: "0:12",
      },
      {
        speaker: "Client",
        message:
          "Pour 12 personnes. Mais mon fils est allergique aux œufs, aux noix ET au gluten. Ma belle-mère ne supporte pas le lactose et mon mari est diabétique...",
        time: "0:18",
      },
      {
        speaker: "CallBot",
        message:
          "Je comprends, votre demande nécessite une expertise spécialisée en pâtisserie adaptée. Ces contraintes multiples demandent une attention particulière que seul notre chef pâtissier peut vous garantir. Je vais vous mettre en contact avec lui.",
        time: "0:28",
      },
      {
        speaker: "Client",
        message: "Oh parfait ! Il est là maintenant ?",
        time: "0:38",
      },
      {
        speaker: "CallBot",
        message:
          "Il termine une fournée, mais je peux vous proposer deux options : soit il vous rappelle dans 30 minutes, soit je prends vos coordonnées et il vous contacte en fin d'après-midi pour discuter en détail de toutes les options possibles.",
        time: "0:42",
      },
      {
        speaker: "Client",
        message: "Je préfère qu'il me rappelle dans 30 minutes.",
        time: "0:52",
      },
      {
        speaker: "CallBot",
        message:
          "Parfait ! Puis-je avoir votre nom et numéro ? Notre chef pâtissier vous rappellera dans 30 minutes pour créer ensemble le gâteau parfait pour toute votre famille.",
        time: "0:55",
      },
      {
        speaker: "Client",
        message: "Madame Leroy, 06 45 67 89 12.",
        time: "1:05",
      },
      {
        speaker: "CallBot",
        message:
          "Noté Madame Leroy ! Commande gâteau 12 personnes, allergies multiples (œufs, noix, gluten, lactose) + diabète. Notre chef vous rappelle dans 30 minutes au 06 45 67 89 12. À très bientôt !",
        time: "1:08",
      },
    ],
  },
]

export default function Demo() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary text-white px-4 py-2 text-sm font-medium">Démo interactive</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Découvrez DevIA{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">en action</span>
          </h1>
          <p className="text-lg text-gray-600">
            Écoutez des conversations réelles et découvrez comment notre IA gère différents types d'appels.
          </p>
        </div>
      </section>

      {/* Demo Player */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Scenario Selection */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Choisissez un scénario</h3>
              <div className="space-y-4">
                {demoScenarios.map((scenario, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      currentScenario === index
                        ? "border-primary shadow-lg bg-gradient-to-r from-primary/5 to-accent/5"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => setCurrentScenario(index)}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold">{scenario.title}</CardTitle>
                      <CardDescription className="text-sm">{scenario.description}</CardDescription>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {scenario.duration}
                        </div>
                        {currentScenario === index && <Badge className="bg-accent text-white text-xs">En cours</Badge>}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Player */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{demoScenarios[currentScenario].title}</CardTitle>
                  <CardDescription>{demoScenarios[currentScenario].description}</CardDescription>
                  <div className="flex items-center gap-4 mt-4">
                    <Button onClick={handlePlayPause} variant="hero" size="lg">
                      {isPlaying ? (
                        <>
                          <Pause className="w-5 h-5 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          Écouter
                        </>
                      )}
                    </Button>
                    <Volume2 className="w-5 h-5 text-gray-500" />
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-1/3"></div>
                  </div>

                  {/* Transcript */}
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {demoScenarios[currentScenario].transcript.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          {item.speaker === "CallBot" ? (
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                              <Phone className="w-4 h-4 text-white" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">
                              {item.speaker === "CallBot" ? "DevIA" : "Client"}
                            </span>
                            <span className="text-xs text-gray-500">{item.time}</span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Conversation naturelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">L'IA comprend et répond naturellement comme un humain</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Gestion d'agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Prise de rendez-vous automatique avec votre planning</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Confirmations auto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">SMS et emails de confirmation envoyés automatiquement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prêt à essayer DevIA ?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Commencez votre essai gratuit de 7 jours (10 appels) et découvrez comment notre IA peut transformer votre
            service client.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Essai gratuit 7 jours
              </Button>
            </Link>
            <Link href="/tarifs">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Voir les tarifs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
