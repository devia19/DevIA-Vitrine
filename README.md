# DevIA — Mode vitrine

Site vitrine statique (Next.js App Router) sans authentification ni base de données. Formulaire de contact via Formspree.

## Démarrer

```bash
npm install
npm run dev
```

## Pages
- `/` Accueil
- `/fonctionnalites`
- `/tarifs` (CTA "Demander un devis" → `/contact?offre=...`)
- `/demo`
- `/contact` (Formspree)
- `/merci`

## Formulaire de contact (Formspree)
- Endpoint défini dans `app/contact/page.tsx` au début du fichier:
  ```ts
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX"
  ```
- Remplacez `XXXXXXXX` par l'ID de votre formulaire Formspree.
- Après envoi, redirection vers `/merci`.

Option B (API locale):
- Créez `app/api/contact/route.ts` (POST) pour valider et envoyer l'email (Resend/Nodemailer).
- Remplacez `FORMSPREE_ENDPOINT` par `/api/contact` dans `app/contact/page.tsx`.

## Déploiement (Vercel)
- Déployez directement le repo sur Vercel.
- Aucune variable d'environnement nécessaire.

## Où modifier les CTA / offres
- Boutons tarifs: `components/Pricing.tsx` (liens vers `/contact?offre=independant|pro|entreprise`).
- CTA global: `components/Navigation.tsx` et `components/CTA.tsx`.

## Nettoyage effectué
- Suppression Clerk/Supabase/middleware et routes dashboard/admin/users.
- Navigation simplifiée sans auth.

