import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Play, Star, Phone, MessageCircle, Calendar } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <Badge className="mb-8 bg-gradient-to-r from-primary to-accent text-white px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Automatisations & agents IA sur-mesure
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Arrêtez de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              perdre des clients
            </span>{" "}
            et{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              gaspiller votre temps
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Automatisez votre entreprise avec l'IA</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            <strong>Vous perdez chaque jour</strong> des appels non répondus, des rendez-vous manqués, des heures sur des tâches répétitives. 
            <strong> Pendant ce temps, vos concurrents automatisent et prennent de l'avance.</strong>
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            DevIA installe des <strong>agents téléphoniques IA</strong>, automatise vos <strong>emails et notifications</strong>, 
            synchronise tous vos outils. <strong>Gagnez 10h par semaine minimum</strong> et ne ratez plus jamais un client.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Arrêtez de perdre des clients – Audit gratuit
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="xl" className="w-full sm:w-auto bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                Voir des exemples concrets
              </Button>
            </Link>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">0 appel manqué = 0 client perdu</h3>
                <p className="text-sm text-gray-600">Répondez à tous vos appels 24/7, même la nuit</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">10h par semaine gagnées</h3>
                <p className="text-sm text-gray-600">Emails, relances, RDV : tout s'automatise</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">+30% de rendez-vous en plus</h3>
                <p className="text-sm text-gray-600">Votre système travaille quand vous dormez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
