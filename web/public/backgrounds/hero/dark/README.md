# Hero — Dark

Exports sombres des Hero Backgrounds (MVP-008B — Sprint Dark Exports).

**Source obligatoire :** `../masters-dark/MASTER_HERO_<FAMILY>_DARK.webp`  
Aucune variante ne doit être créée indépendamment du Master Dark.

## Rôle

Les Hero Dark accompagnent le thème sombre de l’interface.

Ils représentent le **calme du soir** :

- lumière plus froide ;
- contraste plus doux ;
- couleurs plus profondes ;
- même univers, mêmes cadrages viewport, mêmes émotions que le Light.

Jamais :

- la nuit profonde dramatique ;
- un simple assombrissement du Light ;
- génération IA indépendante.

## Pipeline

```text
Master Dark (masters-dark/)
        ↓
Exports dark (desktop → tablet → mobile)
        ↓
Catalogue final
```

## Relation Masters Dark → exports

| Master | Famille Dark |
| --- | --- |
| `../masters-dark/MASTER_HERO_MORNING_DARK.webp` | `hero-morning-dark-*` |
| `../masters-dark/MASTER_HERO_BAMBOO_DARK.webp` | `hero-bamboo-dark-*` |
| `../masters-dark/MASTER_HERO_MIST_DARK.webp` | `hero-mist-dark-*` |
| `../masters-dark/MASTER_HERO_DOJO_DARK.webp` | `hero-dojo-dark-*` |
| `../masters-dark/MASTER_HERO_MOUNTAIN_DARK.webp` | `hero-mountain-dark-*` |

## Fichiers (exports `final`)

| Fichier | Famille | Viewport | Statut |
| --- | --- | --- | --- |
| `hero-morning-dark-desktop.webp` | morning | desktop | **final** |
| `hero-morning-dark-tablet.webp` | morning | tablet | **final** |
| `hero-morning-dark-mobile.webp` | morning | mobile | **final** |
| `hero-bamboo-dark-desktop.webp` | bamboo | desktop | **final** |
| `hero-bamboo-dark-tablet.webp` | bamboo | tablet | **final** |
| `hero-bamboo-dark-mobile.webp` | bamboo | mobile | **final** |
| `hero-mist-dark-desktop.webp` | mist | desktop | **final** |
| `hero-mist-dark-tablet.webp` | mist | tablet | **final** |
| `hero-mist-dark-mobile.webp` | mist | mobile | **final** |
| `hero-dojo-dark-desktop.webp` | dojo | desktop | **final** |
| `hero-dojo-dark-tablet.webp` | dojo | tablet | **final** |
| `hero-dojo-dark-mobile.webp` | dojo | mobile | **final** |
| `hero-mountain-dark-desktop.webp` | mountain | desktop | **final** |
| `hero-mountain-dark-tablet.webp` | mountain | tablet | **final** |
| `hero-mountain-dark-mobile.webp` | mountain | mobile | **final** |

Format : WebP. Dimensions : Desktop 1920×1080 · Tablet 1280×1024 · Mobile 1080×1920.

Catalogue : `web/src/config/background-assets.ts` → `backgroundAssets.hero.*.dark`.

## Usages interdits

- Light + overlay noir comme « dark » ;
- Brand Mark ou Mei dans le fichier ;
- Déposer des Masters (`MASTER_HERO_*`) dans ce dossier ;
- PNG source dans ce dossier (réservés à `masters-dark/` en WebP).
