# API-user-Random

# Affichage de Données Utilisateurs Aléatoires

Ce projet affiche les données d'utilisateurs obtenues via l'API RandomUser dans un tableau, accompagnées des informations météorologiques de leur localisation.

## Fonctionnalités

- Récupération de données utilisateurs aléatoires via l'API RandomUser
- Affichage des informations dans un tableau stylisé incluant :
  - Photo de profil
  - Nom et prénom
  - Ville
  - Pays (avec drapeau)
  - Genre (avec icône)
  - Météo actuelle à la localisation de l'utilisateur

## Technologies Utilisées

- HTML
- CSS
- JavaScript (API Fetch)
- API RandomUser
- API OpenWeatherMap

## Structure du Projet

```
├── README.md
├── index.html
└── asset/
    ├── js/
    │   └── script.js
    └── style/
        └── style.css
```

## API Utilisées

Le projet utilise les APIs suivantes :
- API RandomUser (pas de clé requise)
- API OpenWeatherMap (clé API requise)

## Détails des Fonctionnalités

- Lignes du tableau alternées pour une meilleure lisibilité
- Effets au survol des lignes
- Photos de profil circulaires
- Drapeaux des pays depuis flagcdn.com
- Icônes météo depuis OpenWeatherMap
- Design responsive du tableau

## Style CSS

Le tableau comprend :
- Largeur responsive
- Bordures et padding
- Couleurs alternées des lignes
- Effets au survol
- En-têtes stylisés
- Images circulaires

## Auteur

Devaux Pierre-Louis
