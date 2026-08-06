# Hero Backgrounds

Rôle : premiers plans d’ambiance plein cadre pour les écrans d’entrée / exploration.

## Source officielle

Chaque famille Hero possède :

- **un Master Artwork unique** (`masters/MASTER_HERO_<FAMILY>.webp`) ;
- **plusieurs exports** (`light/`, `dark/` × desktop / tablet / mobile).

Les Masters sont la **seule source officielle** des environnements Hero.

Les exports ne sont jamais générés par IA.

Ils sont toujours obtenus par **recadrage** du Master.

## Arborescence

```text
hero/
├── masters/
│   ├── MASTER_HERO_MORNING.webp
│   ├── MASTER_HERO_BAMBOO.webp
│   ├── MASTER_HERO_MIST.webp
│   ├── MASTER_HERO_DOJO.webp
│   └── MASTER_HERO_MOUNTAIN.webp
├── light/
└── dark/
```

## Workflow officiel

```text
Master Artwork
        ↓
Validation artistique
        ↓
Exports Light (Desktop → Tablet → Mobile)
        ↓
Exports Dark (Desktop → Tablet → Mobile)
        ↓
Validation
        ↓
Intégration
```

Chaîne Dark obligatoire : `MASTER → Light → Dark`  
Voir `dark/README.md`. Les Dark ne sont jamais créés indépendamment.

Voir `masters/README.md` pour le contenu attendu d’un Master et les interdits.

Les Masters ne sont jamais chargés par l’application.

Seuls les exports sous `light/` et `dark/` sont destinés au catalogue `assets.backgrounds`.

## Formats et dimensions (exports)

- Format : WebP  
- Desktop : 1920 × 1080  
- Tablette : 1280 × 1024  
- Mobile : 1080 × 1920  
- Light + Dark pensés séparément (jamais un filtre noir automatique)

## Nommage des exports

```text
hero-<theme>-<variant>-<viewport>.webp
```

Exemple : `hero-morning-light-desktop.webp`

## Familles officielles

| Famille | Master | Émotion | Écrans cibles | Composition clé | Safe area |
| --- | --- | --- | --- | --- | --- |
| `hero-morning` | `MASTER_HERO_MORNING.webp` | Commencement | Accueil, retour post-onboarding | Montagnes lointaines, brume, lumière matin, bambous discrets, grand vide | Centre / tiers pour titre, message, CTA |
| `hero-bamboo` | `MASTER_HERO_BAMBOO.webp` | Souplesse | Bibliothèque | Bambous Soft Jade, profondeur, lumière filtrée | Contenu au centre ; bambous en bord |
| `hero-mist` | `MASTER_HERO_MIST.webp` | Respiration | Progression, bilan | Plans successifs, brume douce | Large zone de lecture |
| `hero-mountain` | `MASTER_HERO_MOUNTAIN.webp` | Stabilité | À propos, institutionnel | Montagnes éloignées, voilées | **jamais en pratique** |
| `hero-dojo` | `MASTER_HERO_DOJO.webp` | Préparation | Onboarding ponctuel | Intérieur clair, vide, ouvert | Zone centrale message / CTA |

## Interdits communs

- Mei dans le fichier ;
- Brand Mark brûlé dans l’image ;
- texte intégré ;
- villes, sport, temples chargés, tourisme ;
- variante créée hors Master ;
- export généré par IA ;
- Master référencé directement dans l’UI.

## Statut des exports

Tous les exports light/dark × viewport : **`missing`** jusqu’à production par recadrage depuis le Master validé correspondant.

Statut des Masters : voir `masters/README.md`.
