# Hero — Dark

Exports sombres des Hero Backgrounds (MVP-008B — Sprint 2).

**Aucun fichier image n’est présent dans ce dossier pour l’instant.**  
Infrastructure prête — production graphique ultérieure.

## Rôle

Les Hero Dark accompagnent le thème sombre de l’interface.

Ils représentent le **calme du soir** :

- lumière plus froide ;
- contraste plus doux ;
- couleurs plus profondes ;
- même univers, même composition, mêmes émotions que le Light.

Jamais :

- la nuit profonde ;
- une ambiance dramatique ;
- un simple assombrissement du Light ou du Master.

## Workflow obligatoire

```text
MASTER
   ↓
Version Light
   ↓
Version Dark
```

Les Hero Dark ne sont **jamais** créés indépendamment.

Ils représentent une **évolution artistique** du Hero Light correspondant (mêmes cadrages desktop / tablet / mobile).

Le Master reste la source unique de l’œuvre.

Le Light est la référence artistique figée.

Le Dark en dérive artistiquement — sans filtre automatique.

## Relation avec les Masters

| Master | Famille Dark |
| --- | --- |
| `../masters/MASTER_HERO_MORNING.webp` | `hero-morning-dark-*` |
| `../masters/MASTER_HERO_BAMBOO.webp` | `hero-bamboo-dark-*` |
| `../masters/MASTER_HERO_MIST.webp` | `hero-mist-dark-*` |
| `../masters/MASTER_HERO_DOJO.webp` | `hero-dojo-dark-*` |
| `../masters/MASTER_HERO_MOUNTAIN.webp` | `hero-mountain-dark-*` |

Les Masters ne sont jamais utilisés directement par l’UI.

## Relation avec les Hero Light

| Light (référence) | Dark (évolution) |
| --- | --- |
| `../light/hero-<family>-light-desktop.webp` | `hero-<family>-dark-desktop.webp` |
| `../light/hero-<family>-light-tablet.webp` | `hero-<family>-dark-tablet.webp` |
| `../light/hero-<family>-light-mobile.webp` | `hero-<family>-dark-mobile.webp` |

Même cadrage viewport à viewport.

Seule la direction artistique (soirée paisible) change.

## Nommage

```text
hero-<family>-dark-<viewport>.webp
```

Exemple : `hero-morning-dark-desktop.webp`

## Formats et dimensions

| Viewport | Dimensions |
| --- | --- |
| Desktop | 1920 × 1080 |
| Tablet | 1280 × 1024 |
| Mobile | 1080 × 1920 |

Format : WebP uniquement.

## Direction artistique

Palette indicative (12A nuit) :

Night Paper · Night Mist · Surface Night · Soft Jade · Bamboo Soft · Mist Ink

Lumière : soirée paisible, froide et douce — jamais filtre noir, jamais inversion.

## Fichiers attendus (tous `missing`)

| Fichier | Famille | Viewport | Statut |
| --- | --- | --- | --- |
| `hero-morning-dark-desktop.webp` | morning | desktop | missing |
| `hero-morning-dark-tablet.webp` | morning | tablet | missing |
| `hero-morning-dark-mobile.webp` | morning | mobile | missing |
| `hero-bamboo-dark-desktop.webp` | bamboo | desktop | missing |
| `hero-bamboo-dark-tablet.webp` | bamboo | tablet | missing |
| `hero-bamboo-dark-mobile.webp` | bamboo | mobile | missing |
| `hero-mist-dark-desktop.webp` | mist | desktop | missing |
| `hero-mist-dark-tablet.webp` | mist | tablet | missing |
| `hero-mist-dark-mobile.webp` | mist | mobile | missing |
| `hero-dojo-dark-desktop.webp` | dojo | desktop | missing |
| `hero-dojo-dark-tablet.webp` | dojo | tablet | missing |
| `hero-dojo-dark-mobile.webp` | dojo | mobile | missing |
| `hero-mountain-dark-desktop.webp` | mountain | desktop | missing |
| `hero-mountain-dark-tablet.webp` | mountain | tablet | missing |
| `hero-mountain-dark-mobile.webp` | mountain | mobile | missing |

Catalogue typé : `web/src/config/background-assets.ts` → `backgroundAssets.hero.*.dark`.

## Usages interdits

- Light + overlay noir comme « dark » ;
- Génération IA indépendante du Master / Light ;
- Contrastes durs / néons / dramaturgie ;
- Brand Mark ou Mei dans le fichier ;
- Intégration UI tant que le statut n’est pas `placeholder` ou `final`.
