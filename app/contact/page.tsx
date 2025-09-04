"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// API locale pour l'envoi du formulaire
const API_ENDPOINT = "/api/contact"
const REDIRECT_URL = "/merci"

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

    // Vérification du honeypot
    if (formData.website) {
      setLoading(false)
      return
    }

    // Validation côté client
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Veuillez remplir tous les champs obligatoires.")
      setLoading(false)
      return
    }

    try {
      const body = new FormData()
      body.append("name", formData.name.trim())
      body.append("email", formData.email.trim())
      body.append("phone", formData.phone.trim())
      if (formData.company.trim()) body.append("company", formData.company.trim())
      if (formData.offre.trim()) body.append("offre", formData.offre.trim())
      body.append("message", formData.message.trim())

      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        body,
      })

      const result = await res.json()

      if (res.ok && result.success) {
        router.push(REDIRECT_URL)
        return
      }
      
      setError(result.error || "Impossible d'envoyer votre message. Réessayez.")
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err)
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
              <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
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
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="06 12 34 56 78" />
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" rows={4} required value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Expliquez votre besoin" />
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

// Formulaire de contact avec validation côté client et serveur
// Champs obligatoires : nom, email, téléphone, message
// Champs optionnels : entreprise, offre

