# Saveur du Terroir 🌾

Site e-commerce (vitrine) d'épicerie fine — projet académique ESTM.
**HTML / CSS / JavaScript pur**, sans framework, sans dépendance externe (hors police Google Fonts). Prêt à ouvrir dans VS Code.

## Structure du projet
```
saveur-du-terroir/
├── index.html          # page d'accueil (hero, histoire, produits phares, pourquoi nous, avis, FAQ, newsletter)
├── produits.html        # catalogue complet (19 produits, 5 catégories)
├── contact.html         # formulaire de contact + coordonnées + FAQ
├── style.css            # design tokens (palette imposée), layout, animations
├── script.js             # données produits, traductions FR/EN, panier, animations, FAQ, formulaires
├── assets/
│   └── hero-bg.png       # photo produit fournie, utilisée en visuel du hero et en fond de section
└── README.md
```

## Ouvrir le projet dans VS Code
1. Dézippe le dossier `saveur-du-terroir/`.
2. Ouvre-le dans VS Code (`Fichier > Ouvrir le dossier…`).
3. Installe l'extension **Live Server** (si ce n'est pas déjà fait), puis clic droit sur `index.html` → **Open with Live Server**.
   (Ou plus simple : double-clique sur `index.html`, il s'ouvre directement dans ton navigateur — aucun serveur n'est requis.)

## Pages du site
- **`index.html`** — Accueil : hero avec photo produit, section "Notre histoire" (avec chiffres clés), aperçu de 6 produits phares, section "Pourquoi nous choisir" (fond photo teinté), témoignages clients, FAQ, newsletter.
- **`produits.html`** — Catalogue complet : les 19 produits, filtrables par catégorie.
- **`contact.html`** — Formulaire de contact (nom, email, sujet, message), coordonnées, et la FAQ.

## Catalogue (19 produits / 5 catégories)
| Catégorie | Produits |
|---|---|
| Fruits & Légumes | Fruits Étincelants, Légumes du Terroir, Avocats, Mangues de Casamance, Citrons bio |
| Produits Laitiers | Lait et Crèmes, Fromages Artisanaux, Beurre fermier, Yaourts nature |
| Épicerie Fine | Condiments et Sauces, Pâtes et Céréales, Huile d'olive, Épices du marché |
| Boissons | Jus de Bissap, Café Touba, Eau minérale |
| Snacks & Confiseries | Chocolat noir, Miel de brousse, Biscuits artisanaux |

## Fonctionnalités
- Catalogue filtrable par catégorie, avec une sélection "produits phares" limitée sur l'accueil (`data-limit` sur la grille) et le catalogue complet sur `produits.html`.
- Panier latéral (drawer), **persisté en `localStorage`** : il reste rempli même si tu navigues d'une page à l'autre ou recharges le site.
- **Site disponible en français et en anglais**, langue également persistée en `localStorage`. Tous les textes sont centralisés dans `script.js` (objet `I18N`).
- Formulaire de contact et formulaire newsletter (simulation front-end uniquement, pas de serveur).
- FAQ en accordéon.
- Animations au scroll, cartes produits en cascade, header qui réagit au scroll, compteur panier animé — désactivées automatiquement si l'utilisateur préfère moins d'animations (`prefers-reduced-motion`).
- Design responsive (mobile, tablette, desktop).

## Palette de couleurs
Palette imposée, présentée sur Coolors : https://coolors.co/ffffff-4f5eff-373f8f-1e201f

| Couleur | Hex | Usage |
|---|---|---|
| Blanc | `#FFFFFF` | fond principal |
| Bleu | `#4F5EFF` | couleur primaire, boutons, accents |
| Bleu profond | `#373F8F` | survols, dégradés, titres |
| Quasi-noir | `#1E201F` | texte, footer |

## Modifier un élément en direct (le jour de la soutenance)
Tout est centralisé dans `script.js` :
- `PRODUCTS` : tableau des 19 produits (nom FR/EN, catégorie, prix, description, icône).
- `CATEGORIES` : les 5 catégories.
- `I18N` : tous les textes FR/EN de l'interface, des 3 pages.

Modifie une ligne, recharge la page — aucune autre partie du code n'a besoin d'être touchée.

## GitHub
Le code doit être disponible sur GitHub, avec **@Maximus203** ajouté comme collaborateur du repo (à faire de ton côté au moment du push).
