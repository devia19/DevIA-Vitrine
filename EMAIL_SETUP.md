# Configuration de l'envoi d'emails

## Problème résolu ✅

Le formulaire de contact a été corrigé avec les améliorations suivantes :

1. **API locale** : Remplacement de Formspree par une API Next.js locale
2. **Validation renforcée** : Téléphone maintenant obligatoire
3. **Champs obligatoires** : Nom, Email, Téléphone, Message
4. **Champs optionnels** : Entreprise, Offre
5. **Validation côté client et serveur**

## Configuration pour la production

### Option 1 : Resend (Recommandé pour Vercel)

1. **Installer Resend** :
   ```bash
   npm install resend
   ```

2. **Créer un compte Resend** :
   - Allez sur [resend.com](https://resend.com)
   - Créez un compte et vérifiez votre domaine

3. **Configurer les variables d'environnement** :
   ```bash
   # Dans votre fichier .env.local ou dans Vercel
   RESEND_API_KEY=re_xxxxxxxxx
   ```

4. **Décommenter le code dans `lib/email.ts`** :
   - Ouvrez `lib/email.ts`
   - Décommentez la section Resend
   - Remplacez `contact@votre-domaine.com` par votre domaine vérifié
   - Remplacez `votre-email@devia.com` par votre email

### Option 2 : SendGrid

1. **Installer SendGrid** :
   ```bash
   npm install @sendgrid/mail
   ```

2. **Créer un compte SendGrid** :
   - Allez sur [sendgrid.com](https://sendgrid.com)
   - Créez un compte et vérifiez votre domaine

3. **Configurer les variables d'environnement** :
   ```bash
   SENDGRID_API_KEY=SG.xxxxxxxxx
   ```

4. **Décommenter le code dans `lib/email.ts`** :
   - Ouvrez `lib/email.ts`
   - Décommentez la section SendGrid
   - Remplacez les emails par les vôtres

### Option 3 : Nodemailer (pour serveurs SMTP)

1. **Installer Nodemailer** :
   ```bash
   npm install nodemailer
   npm install @types/nodemailer
   ```

2. **Ajouter la configuration dans `lib/email.ts`** :
   ```typescript
   import nodemailer from 'nodemailer'
   
   const transporter = nodemailer.createTransporter({
     host: 'smtp.gmail.com', // ou votre serveur SMTP
     port: 587,
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS
     }
   })
   ```

## Variables d'environnement à ajouter

```bash
# Pour Resend
RESEND_API_KEY=re_xxxxxxxxx

# Pour SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxx

# Pour Nodemailer
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app
```

## Test du formulaire

1. **En développement** :
   - Le formulaire fonctionne en mode simulation
   - Les emails sont loggés dans la console

2. **En production** :
   - Configurez un service d'email (Resend recommandé)
   - Testez l'envoi d'un message
   - Vérifiez la réception de l'email

## Validation du formulaire

- ✅ **Nom** : Obligatoire
- ✅ **Email** : Obligatoire, format valide
- ✅ **Téléphone** : Obligatoire, format français
- ✅ **Message** : Obligatoire
- ⚪ **Entreprise** : Optionnel
- ⚪ **Offre** : Optionnel

## Sécurité

- ✅ **Honeypot** : Protection contre les bots
- ✅ **Validation côté serveur** : Double vérification
- ✅ **Sanitisation** : Nettoyage des données
- ✅ **Rate limiting** : À ajouter si nécessaire

## Déploiement sur Vercel

1. **Ajoutez vos variables d'environnement** dans les paramètres Vercel
2. **Redéployez** votre application
3. **Testez** le formulaire en production

Le formulaire devrait maintenant fonctionner correctement ! 🎉
