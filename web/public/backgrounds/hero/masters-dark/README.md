# Hero — Master Artwork Dark

Source officielle des **exports Dark** (MVP-008B — Sprint Dark Exports).

## Format

WebP uniquement. Aucun PNG dans ce dossier.

## Fichiers

| Master | Famille | Dimensions |
| --- | --- | --- |
| `MASTER_HERO_MORNING_DARK.webp` | morning | 1672 × 941 |
| `MASTER_HERO_BAMBOO_DARK.webp` | bamboo | 1672 × 941 |
| `MASTER_HERO_MIST_DARK.webp` | mist | 1672 × 941 |
| `MASTER_HERO_DOJO_DARK.webp` | dojo | 1672 × 941 |
| `MASTER_HERO_MOUNTAIN_DARK.webp` | mountain | 1672 × 941 |

## Règles

- Jamais chargés par l’UI.
- Source exclusive des exports sous `../dark/`.
- Recadrage / resize / WebP uniquement — pas de génération IA ni retouche.

## Pipeline

```text
Master Dark WebP
        ↓
Exports dark (desktop / tablet / mobile)
        ↓
Catalogue `backgroundAssets.hero.*.dark` → status final
```

Script de production : `web/scripts/export-hero-dark.mjs`
