import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Play } from "lucide-react"

export const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prêt à automatiser vos appels ?</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Rejoignez des centaines d'entreprises qui utilisent déjà DevIA pour améliorer leur service client.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Demander un devis
            </Button>
          </Link>
          <Link href="/demo">
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Voir la démo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
