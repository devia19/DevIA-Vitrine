# 🚀 Configuration Rapide DevIA Backend

## ✅ Étape 1 : Configuration Clerk

1. Allez sur [Clerk.com](https://clerk.com) et créez un compte
2. Créez une nouvelle application
3. Dans **Settings > General**, copiez :
   - **Publishable Key** → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - **Secret Key** → `CLERK_SECRET_KEY`

## ✅ Étape 2 : Configuration Supabase

1. Allez sur [Supabase.com](https://supabase.com) et créez un compte
2. Créez un nouveau projet
3. Dans **Settings > API**, copiez :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

## ✅ Étape 3 : Base de données

1. Dans Supabase, allez dans **SQL Editor**
2. Copiez et exécutez le contenu du fichier `database-schema.sql`

## ✅ Étape 4 : Variables d'environnement

Créez un fichier `.env.local` à la racine avec :

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_votre_cle_publique
CLERK_SECRET_KEY=sk_test_votre_cle_secrete
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## ✅ Étape 5 : Test

1. Lancez le serveur : `npm run dev`
2. Allez sur `http://localhost:3000`
3. Testez l'inscription/connexion
4. Vérifiez le dashboard

## 🎯 Fonctionnalités implémentées

### ✅ Authentification
- Inscription/Connexion avec Clerk
- Protection automatique des routes
- Interface utilisateur intégrée

### ✅ Base de données
- Tables utilisateurs, appels, rendez-vous, SMS
- Row Level Security (RLS)
- Quotas et plans d'abonnement

### ✅ Dashboard dynamique
- Statistiques en temps réel
- Historique des appels
- Rendez-vous à venir
- Bannière d'upgrade pour utilisateurs gratuits

### ✅ API Routes
- `/api/users` : Gestion des profils
- `/api/dashboard/stats` : Statistiques

## 🔧 Structure créée

```
├── lib/
│   ├── auth/clerk.ts      # Configuration Clerk
│   ├── db/supabase.ts     # Configuration Supabase
│   └── types/database.ts  # Types TypeScript
├── app/
│   ├── api/               # Routes API
│   ├── dashboard/         # Dashboard dynamique
│   ├── login/            # Page connexion Clerk
│   └── signup/           # Page inscription Clerk
├── middleware.ts          # Protection des routes
└── components/Navigation.tsx # Navigation avec auth
```

## 🚀 Prochaines étapes

1. **Stripe** : Intégration des paiements
2. **Agent IA** : Assistant vocal intelligent
3. **Webhooks** : Gestion des événements
4. **Analytics** : Métriques avancées

## 📞 Support

- Documentation Clerk : https://clerk.com/docs
- Documentation Supabase : https://supabase.com/docs
- Issues : Créez une issue sur GitHub 