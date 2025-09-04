"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Replace this with your Formspree form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX" // à remplacer par mon endpoint
const REDIRECT_URL = "/merci" // en prod : remplacer par https://ton-domaine.com/merci si besoin

function ContactForm() {
  const params = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const offreFromQuery = useMemo(() => {
    const value = params.get("offre") || ""
    if (["independant", "pro", "entreprise"].includes(value)) return value
    return ""
  }, [params])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    offre: offreFromQuery,
    message: "",
    website: "", // honeypot
  })

  useEffect(() => {
    setFormData(prev => ({ ...prev, offre: offreFromQuery }))
  }, [offreFromQuery])

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (formData.website) {
      setLoading(false)
      return
    }

    try {
      const body = new FormData()
      body.append("name", formData.name)
      body.append("email", formData.email)
      if (formData.phone) body.append("phone", formData.phone)
      if (formData.company) body.append("company", formData.company)
      if (formData.offre) body.append("offre", formData.offre)
      if (formData.message) body.append("message", formData.message)
      body.append("_subject", "Nouveau devis – DevIA")
      body.append("_redirect", REDIRECT_URL)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { Accept: "application/json" },
        body,
      })

      if (res.ok) {
        router.push(REDIRECT_URL)
        return
      }
      setError("Impossible d'envoyer votre message. Réessayez.")
    } catch (err) {
      setError("Une erreur est survenue. Réessayez.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Contactez-nous</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite" action={FORMSPREE_ENDPOINT} method="POST">
                <input type="hidden" name="_subject" value="Nouveau devis – DevIA" />
                <input type="hidden" name="_redirect" value={REDIRECT_URL} />
                <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                {/* Honeypot */}
                <div className="hidden" aria-hidden>
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" name="website" value={formData.website} onChange={(e) => handleChange("website", e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="vous@exemple.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Optionnel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input id="company" name="company" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Optionnel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="offre">Offre</Label>
                  <Input id="offre" name="offre" value={formData.offre} onChange={(e) => handleChange("offre", e.target.value)} placeholder="independant / pro / entreprise" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Expliquez votre besoin" />
                </div>

                <p className="text-xs text-gray-500">Nous utilisons vos informations uniquement pour répondre à votre demande. Aucune revente.</p>

                {error && (
                  <p className="text-sm text-red-600" role="status">{error}</p>
                )}

                <Button type="submit" disabled={loading} className="w-full md:w-auto">
                  {loading ? "Envoi..." : "Envoyer"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  )
}

// Pour passer sur une route locale:
// - Créez app/api/contact/route.ts (POST) qui valide et envoie via Resend/Nodemailer, retourne { ok: true }
// - Remplacez FORMSPREE_ENDPOINT par "/api/contact" et gardez la même logique de soumission.

