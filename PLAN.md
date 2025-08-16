# Plan de développement : Intégration de Sanity.io

Ce document décrit les étapes restantes pour intégrer Sanity comme CMS dans le projet "petitplus" et le rendre dynamique.

### Phase 1: Configuration de Sanity (En cours)

1.  **[Terminé par vous] Connexion au CLI Sanity**: Authentification manuelle pour permettre au CLI d'accéder à votre compte.
2.  **Initialisation du projet Sanity**: Création du dossier `studio/` qui contiendra l'interface de gestion de contenu.
3.  **Définition des Schémas de contenu**:
    *   Créer un schéma `product.ts` pour les produits (titre, prix, images, description, etc.).
    *   Créer un schéma `category.ts` pour les catégories de produits.
    *   Enregistrer ces nouveaux schémas pour qu'ils apparaissent dans le Studio.
4.  **Déploiement du Studio**: Une fois les schémas créés, le Studio pourra être lancé pour que vous puissiez commencer à ajouter vos premiers produits.

### Phase 2: Connexion de l'application Next.js à Sanity

1.  **Création d'un client API Sanity**:
    *   Ajouter un fichier de configuration dans `lib/` pour permettre à l'application Next.js de communiquer avec Sanity.
2.  **Rendre la page d'accueil dynamique**:
    *   Modifier le composant `HelpRequestGrid` pour qu'il affiche les produits récupérés depuis Sanity, au lieu des données statiques actuelles.
    *   Utiliser GROQ (le langage de requête de Sanity) pour récupérer uniquement les informations nécessaires.
3.  **Créer les pages de produits dynamiques**:
    *   Modifier la page `app/produit/[id]/page.tsx` pour qu'elle charge et affiche les détails d'un produit spécifique en fonction de l'URL.
4.  **Gérer les images et vidéos**:
    *   Connecter les composants d'affichage d'images pour qu'ils utilisent les URLs des médias que vous aurez téléversés dans Sanity.

### Phase 3: Nettoyage et Déploiement

1.  **Suppression du code statique**:
    *   Retirer les composants et données statiques qui ont été remplacés par le contenu dynamique de Sanity.
    *   Supprimer les images de test du dossier `public/`.
2.  **Tests et ajustements**:
    *   Vérifier que l'ensemble du site fonctionne correctement avec les données de Sanity.
    *   Ajuster le style si nécessaire.
3.  **Déploiement final**:
    *   Déployer le Sanity Studio (sur `sanity.studio`).
    *   Déployer l'application Next.js mise à jour sur Vercel.
