# QUOREICH AI CORPORATE

Site web corporate pour QUOREICH AI - Leader en formation IA et transformation numérique.

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Three Fiber** pour les animations 3D
- **React Router** pour la navigation

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/quoreich-ai-corporate.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 🏗️ Build et Déploiement

```bash
# Build pour la production
npm run build

# Prévisualiser le build
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

## 🌐 Déploiement GitHub Pages

1. **Configurez votre domaine** dans le fichier `public/CNAME`
2. **Activez GitHub Pages** dans les paramètres du repository
3. **Configurez GitHub Actions** (déjà configuré dans `.github/workflows/deploy.yml`)
4. **Poussez sur la branche main** pour déclencher le déploiement automatique

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── home/           # Composants spécifiques à la page d'accueil
│   ├── shared/         # Composants partagés
│   └── services/       # Composants des services
├── pages/              # Pages de l'application
├── data/               # Données statiques
├── types/              # Types TypeScript
└── services/           # Services API

public/
├── models/             # Modèles 3D
└── images/             # Images statiques
```

## 🎨 Fonctionnalités

- ✅ Design responsive et moderne
- ✅ Animations fluides avec Framer Motion
- ✅ Curseur personnalisé
- ✅ Indicateur de scroll
- ✅ Carrousel de témoignages
- ✅ Animations 3D avec Three.js
- ✅ Formulaire de contact
- ✅ Gestion des formations
- ✅ Pages optimisées SEO

## 🔧 Configuration

### Domaine Personnalisé

1. Modifiez le fichier `public/CNAME` avec votre domaine
2. Configurez les DNS de votre domaine vers GitHub Pages
3. Activez HTTPS dans les paramètres GitHub Pages

### Variables d'Environnement

Créez un fichier `.env.local` pour les variables d'environnement :

```env
VITE_API_URL=https://api.votre-domaine.com
VITE_CONTACT_EMAIL=contact@votre-domaine.com
```

## 📄 Licence

© 2024 QUOREICH AI CORPORATE. Tous droits réservés.