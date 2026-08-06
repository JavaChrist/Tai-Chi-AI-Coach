# Hero Backgrounds

Rôle : premiers plans d’ambiance plein cadre pour les écrans d’entrée / exploration.

## Source officielle

Chaque famille Hero possède :

- **un Master Light** (`masters/MASTER_HERO_<FAMILY>.webp`) ;
- **un Master Dark** (`masters-dark/MASTER_HERO_<FAMILY>_DARK.webp`) ;
- **plusieurs exports** (`light/`, `dark/` × desktop / tablet / mobile).

Les Masters sont la **seule source officielle** des environnements Hero.

Les exports ne sont jamais générés par IA.

Ils sont toujours obtenus par **recadrage** du Master correspondant (Light ou Dark).

## Arborescence

```text
hero/
├── masters/           ← Masters Light
├── masters-dark/      ← Masters Dark
├── light/             ← 15 exports Light (final)
└── dark/              ← 15 exports Dark (final)
```

## Workflow officiel

```text
Master Artwork (Light ou Dark)
        ↓
Validation artistique
        ↓
Exports Desktop → Tablet → Mobile
        ↓
Validation
        ↓
Intégration catalogue
```

Les Masters ne sont jamais chargés par l’application.

Seuls les exports sous `light/` et `dark/` sont destinés au catalogue `assets.backgrounds`.

## Formats et dimensions (exports)

- Format : WebP  
- Desktop : 1920 × 1080  
- Tablette : 1280 × 1024  
- Mobile : 1080 × 1920  
- Light + Dark produits séparément (jamais un filtre noir automatique)

## Nommage des exports

```text
hero-<family>-<theme>-<viewport>.webp
```

Exemple : `hero-morning-light-desktop.webp` · `hero-morning-dark-desktop.webp`

## Familles et écrans

| Famille | Light / Dark | Écrans |
| --- | --- | --- |
| morning | oui | Accueil |
| bamboo | oui | Bibliothèque, Séances, fiche séance |
| mist | oui | Progression, bilan |
| dojo | oui | Onboarding |
| mountain | oui | Profil |
| — | — | Pratique : **aucun** Hero |

## Statut

- 15 exports Light : **final**  
- 15 exports Dark : **final**  
- Splash / sections / textures / patterns : encore `missing` (hors Sprint Dark)
