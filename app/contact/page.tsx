"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Web3Forms endpoint avec votre clé publique
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"
const WEB3FORMS_ACCESS_KEY = "ecd43919-26f9-4bdd-a428-f4dd8644f60d"

function ContactForm() {
  const params = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

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

    // Validation côté client
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Veuillez remplir tous les champs obligatoires.")
      setLoading(false)
      return
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim() || undefined,
          offre: formData.offre.trim() || undefined,
          message: formData.message.trim(),
          subject: "Nouveau contact DevIA",
          from_name: "DevIA Contact Form",
          replyto: formData.email.trim(),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSuccess(true)
        setTimeout(() => {
          router.push("/merci")
        }, 2000)
      } else {
        setError("Impossible d'envoyer votre message. Réessayez.")
      }
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err)
      setError("Une erreur est survenue. Réessayez.")
    } finally {
      setLoading(false)
    }
  }

  // Redirection après succès
  useEffect(() => {
    if (success) {
      router.push("/merci")
    }
  }, [success, router])

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Arrêtez de perdre des clients et du temps</CardTitle>
              <p className="text-gray-700 mt-2 font-medium">
                <strong>Combien d'appels ratez-vous par jour ? Combien d'heures passez-vous sur des tâches répétitives ?</strong>
              </p>
              <p className="text-gray-600 mt-2">
                Décrivez ce qui vous fait perdre du temps et de l'argent. Nous vous proposons des automatisations concrètes 
                pour gagner <strong>10h par semaine minimum</strong> et ne plus jamais rater un client.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">

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
                  <Label htmlFor="message">Décrivez votre besoin d'automatisation *</Label>
                  <Textarea id="message" name="message" rows={4} required value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Parlez-nous de votre activité, des tâches répétitives qui prennent du temps, des appels non répondus, des relances manuelles... Nous vous proposerons des automatisations adaptées." />
                </div>

                <p className="text-xs text-gray-500">Nous utilisons vos informations uniquement pour répondre à votre demande. Aucune revente.</p>

                {error && (
                  <p className="text-sm text-red-600" role="status">{error}</p>
                )}

                {success && (
                  <p className="text-sm text-green-600" role="status">Message envoyé avec succès ! Redirection en cours...</p>
                )}

                <Button type="submit" disabled={loading} className="w-full md:w-auto">
                  {loading ? "Envoi..." : "Envoyer ma demande d'automatisation"}
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

// Formulaire de contact avec Web3Forms
// Champs obligatoires : nom, email, téléphone, message
// Champs optionnels : entreprise, offre
// Clé publique Web3Forms configurée

