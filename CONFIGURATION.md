# 🚀 Configuration Rapide DevIA

## ✅ Étape 1 : Variables d'environnement

Créez un fichier `.env.local` à la racine avec les clés fournies :

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2F1c2FsLWJsdWVnaWxsLTI5LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://plauojmotuchiplkbvxj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_bvxuWN-ozeVplb0OSC15CA_Rpe0y-1I
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## ✅ Étape 2 : Configuration Supabase

1. Allez sur [Supabase](https://supabase.com) et connectez-vous
2. Ouvrez votre projet : `https://plauojmotuchiplkbvxj.supabase.co`
3. Dans **SQL Editor**, exécutez le script `supabase-schema.sql`
4. Dans **Settings > API**, copiez la **service_role secret** dans votre `.env.local`

## ✅ Étape 3 : Configuration Clerk

1. Allez sur [Clerk](https://clerk.com) et connectez-vous
2. Ouvrez votre application : `causal-bluegill-29`
3. Dans **Settings > General**, copiez la **Secret Key** dans votre `.env.local`

## ✅ Étape 4 : Test de l'application

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 🎯 Pages disponibles

- **`/`** : Page d'accueil
- **`/login`** : Connexion (Clerk)
- **`/signup`** : Inscription (Clerk)
- **`/dashboard`** : Tableau de bord utilisateur
- **`/profile`** : Profil utilisateur
- **`/admin`** : Tableau de bord admin (si is_admin = true)

## 🔐 Rôles et permissions

### Utilisateur normal
- Accès au dashboard personnel
- Gestion du profil
- Visualisation des quotas

### Administrateur
- Accès au tableau de bord admin
- Gestion de tous les utilisateurs
- Statistiques globales
- CRUD sur les données

## 🗄️ Structure de la base de données

### Tables créées
- `users` : Profils utilisateurs avec quotas et plans
- `call_logs` : Historique des appels
- `appointments` : Rendez-vous programmés
- `sms_logs` : Historique des SMS
- `user_activities` : Activités utilisateur
- `subscriptions` : Gestion des abonnements

### Sécurité
- Row Level Security (RLS) activé
- Chaque utilisateur ne voit que ses données
- Admins peuvent voir toutes les données

## 🚀 Fonctionnalités implémentées

### ✅ Authentification
- Inscription/connexion avec Clerk
- Protection automatique des routes
- Redirection intelligente

### ✅ Base de données
- Synchronisation Clerk ↔ Supabase
- Gestion des profils utilisateurs
- Quotas et plans d'abonnement

### ✅ Dashboard utilisateur
- Statistiques personnelles
- Historique des activités
- Gestion des quotas

### ✅ Dashboard admin
- Vue globale de la plateforme
- Statistiques utilisateurs
- Gestion des comptes

### ✅ API Routes
- `/api/users` : Gestion des profils
- `/api/dashboard/stats` : Statistiques dashboard
- `/api/admin/stats` : Statistiques admin
- `/api/admin/users` : Gestion utilisateurs admin

## 🔧 Prochaines étapes

1. **Tester l'authentification** : Créez un compte et connectez-vous
2. **Vérifier le dashboard** : Consultez vos statistiques
3. **Tester l'admin** : Définissez un utilisateur comme admin dans Supabase
4. **Intégrer Stripe** : Pour les paiements (optionnel)
5. **Développer l'agent IA** : Pour les appels téléphoniques

## 🐛 Dépannage

### Erreur "Unauthorized"
- Vérifiez les clés Clerk dans `.env.local`
- Assurez-vous que Clerk est bien configuré

### Erreur "Database error"
- Vérifiez les clés Supabase
- Exécutez le script SQL dans Supabase

### Erreur "Admin access required"
- Définissez `is_admin = true` pour votre utilisateur dans Supabase

## 📞 Support

- Documentation Clerk : https://clerk.com/docs
- Documentation Supabase : https://supabase.com/docs
- Issues : Créez une issue sur GitHub 