// Configuration pour l'envoi d'emails
// Vous pouvez utiliser Resend, SendGrid, Nodemailer, ou tout autre service

export interface EmailData {
  name: string
  email: string
  phone: string
  company?: string
  offre?: string
  message: string
}

export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    // Exemple avec Resend (recommandé pour Vercel)
    // 1. Installez Resend : npm install resend
    // 2. Ajoutez votre clé API dans les variables d'environnement : RESEND_API_KEY
    // 3. Décommentez le code ci-dessous :

    /*
    import { Resend } from 'resend'
    
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const emailContent = `
Nouveau message de contact reçu sur DevIA

Informations du contact :
- Nom : ${data.name}
- Email : ${data.email}
- Téléphone : ${data.phone}
- Entreprise : ${data.company || 'Non renseignée'}
- Offre : ${data.offre || 'Non renseignée'}

Message :
${data.message}

---
Ce message a été envoyé depuis le formulaire de contact du site DevIA.
    `.trim()

    const result = await resend.emails.send({
      from: 'contact@votre-domaine.com', // Remplacez par votre domaine vérifié
      to: ['votre-email@devia.com'], // Remplacez par votre email
      subject: 'Nouveau contact DevIA',
      text: emailContent,
    })

    if (result.error) {
      console.error('Erreur Resend:', result.error)
      return { success: false, error: 'Erreur lors de l\'envoi de l\'email' }
    }

    return { success: true }
    */

    // Pour l'instant, on simule l'envoi réussi
    console.log('Email à envoyer (simulation) :', {
      to: 'votre-email@devia.com',
      subject: 'Nouveau contact DevIA',
      content: data
    })
    
    return { success: true }
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error)
    return { success: false, error: 'Erreur interne lors de l\'envoi' }
  }
}

// Alternative avec SendGrid
export async function sendContactEmailWithSendGrid(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Installez SendGrid : npm install @sendgrid/mail
    // 2. Ajoutez votre clé API : SENDGRID_API_KEY
    // 3. Décommentez le code ci-dessous :

    /*
    import sgMail from '@sendgrid/mail'
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    
    const msg = {
      to: 'votre-email@devia.com',
      from: 'contact@votre-domaine.com',
      subject: 'Nouveau contact DevIA',
      text: `
Nouveau message de contact reçu sur DevIA

Informations du contact :
- Nom : ${data.name}
- Email : ${data.email}
- Téléphone : ${data.phone}
- Entreprise : ${data.company || 'Non renseignée'}
- Offre : ${data.offre || 'Non renseignée'}

Message :
${data.message}

---
Ce message a été envoyé depuis le formulaire de contact du site DevIA.
      `.trim(),
    }
    
    await sgMail.send(msg)
    return { success: true }
    */

    return { success: true }
  } catch (error) {
    console.error('Erreur SendGrid :', error)
    return { success: false, error: 'Erreur lors de l\'envoi de l\'email' }
  }
}
