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
            Nouveau : IA téléphonique pour PME
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Votre assistant{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IA téléphonique
            </span>{" "}
            24/7
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Automatisez vos appels entrants, prenez des rendez-vous et renseignez vos clients automatiquement avec notre
            agent IA intelligent.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/signup">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Commencer gratuitement
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="xl" className="w-full sm:w-auto bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                Voir la démo
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
                <h3 className="font-semibold text-gray-900">Appels automatiques</h3>
                <p className="text-sm text-gray-600">Répondez à tous vos appels même hors horaires</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Prise de RDV</h3>
                <p className="text-sm text-gray-600">Synchronisation automatique avec votre agenda</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Confirmations SMS</h3>
                <p className="text-sm text-gray-600">Notifications automatiques par SMS et email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
