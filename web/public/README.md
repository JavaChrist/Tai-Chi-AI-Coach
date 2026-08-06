# Assets publics — Tai-Chi AI Coach

Organisation stable des fichiers servis depuis `web/public/`.

Les chemins sont centralisés dans `web/src/config/assets.ts`.  
Les vrais fichiers graphiques sont déposés progressivement par le Product Owner.

## Conventions de nommage

- minuscules uniquement ;
- séparateur `-` (jamais d’espace ni d’underscore) ;
- aucun accent ;
- préfixe produit ou domaine lorsque utile (`tai-chi-ai-coach-…`, `mei-…`, `session-…`) ;
- extension explicite (`.svg`, `.png`, `.webp`, `.jpg`, `.mp3`, `.mp4`).

## Formats recommandés

| Usage | Format préféré | Alternatives |
| --- | --- | --- |
| Logos / icônes vectorielles | SVG | PNG |
| Icônes PWA / favicon raster | PNG | — |
| Illustrations / photos | WebP | PNG / JPG |
| Audio | MP3 | OGG |
| Vidéo pédagogique | MP4 | WebM |

## Statuts

| Statut | Signification |
| --- | --- |
| `missing` | Emplacement défini ; fichier absent |
| `placeholder` | Fichier temporaire clairement non final |
| `final` | Fichier validé par le Product Owner |

**Aucun asset n’est marqué `final` tant que le vrai fichier n’a pas été fourni.**

## Checklist Product Owner

| Fichier attendu | Chemin | Format | Dimensions | Transparence | Usage | État |
| --- | --- | --- | --- | --- | --- | --- |
| `tai-chi-ai-coach-favicon.ico` | `/brand/icons/` | ICO | 32×32 (multi OK) | n/a | Favicon navigateur | manquant |
| `tai-chi-ai-coach-icon-192.png` | `/brand/icons/` | PNG | 192×192 | non (fond opaque OK) | Icône PWA | manquant |
| `tai-chi-ai-coach-icon-512.png` | `/brand/icons/` | PNG | 512×512 | non | Icône PWA | manquant |
| `tai-chi-ai-coach-icon-maskable-192.png` | `/brand/icons/` | PNG | 192×192 | non ; zone sûre ~80 % | Maskable PWA | manquant |
| `tai-chi-ai-coach-icon-maskable-512.png` | `/brand/icons/` | PNG | 512×512 | non ; zone sûre ~80 % | Maskable PWA | manquant |
| `tai-chi-ai-coach-apple-touch-icon.png` | `/brand/icons/` | PNG | 180×180 | non | Apple Touch Icon | manquant |
| `tai-chi-ai-coach-logo.svg` | `/brand/logos/` | SVG | — | oui | Logo principal | manquant |
| `tai-chi-ai-coach-logo-compact.svg` | `/brand/logos/` | SVG | — | oui | Logo compact (header) | manquant |
| `tai-chi-ai-coach-logo-light.svg` | `/brand/logos/` | SVG | — | oui | Logo fond sombre | manquant |
| `tai-chi-ai-coach-logo-dark.svg` | `/brand/logos/` | SVG | — | oui | Logo fond clair | manquant |
| `mei-avatar-neutral.webp` | `/characters/mei/` | WebP | 256×256 | oui recommandé | Avatar Mei (V2) | manquant |
| `mei-portrait-guide.webp` | `/characters/mei/` | WebP | 512×768 | oui recommandé | Portrait | manquant |
| `mei-full-body-guide.webp` | `/characters/mei/` | WebP | 768×1280 | oui recommandé | Plein pied | manquant |
| `mei-thumbnail.webp` | `/characters/mei/` | WebP | 128×128 | oui | Miniature | manquant |
| `mei-presentation.webp` | `/characters/mei/` | WebP | 1024×576 | optionnel | Présentation | manquant |
| `mei-placeholder.svg` | `/characters/mei/` | SVG | — | oui | Placeholder Mei | manquant |
| `brand-mark-temp.svg` | `/placeholders/` | SVG | — | oui | Marque temporaire de test | placeholder |

### Backgrounds (MVP-008B — univers visuel)

Tous les fichiers d’environnement sont définis dans `backgrounds/` et catalogués dans `assets.backgrounds`.  
Statut actuel : **missing** (arborescence + briefs prêts ; images à produire).

| Famille | Chemin | Format | Dimensions | Usage | État |
| --- | --- | --- | --- | --- | --- |
| Hero Masters (source, jamais UI) | `/backgrounds/hero/masters/` | WebP | Master | Source → exports | morning présent ; autres missing |
| Hero exports (5 × light/dark × 3 viewports) | `/backgrounds/hero/light|dark/` | WebP | 1920×1080 / 1280×1024 / 1080×1920 | Accueil, bibliothèque… | missing (depuis Masters) |
| Splash main | `/backgrounds/splash/` | WebP | idem | Entrée univers | missing |
| Sections (4 familles × light/dark) | `/backgrounds/sections/` | WebP | 1600×900 | Respirations | missing |
| Textures (3) | `/backgrounds/textures/` | WebP | tile léger | Matière | missing |
| Patterns (3) | `/backgrounds/patterns/` | SVG/WebP | motif partiel | Secondaire | missing |

Détails : `backgrounds/README.md` et README enfants. Ticket : `docs/tickets/MVP-008B_VISUAL_ENVIRONMENT.md`.

Détails brand / Mei : voir les `README.md` enfants.

## Règles produit

- Aucune page MVP ne doit casser si un asset est absent.
- Mei = V2, guide facultative — jamais médecin, maître ou experte certifiée.
- Pas de Service Worker dans ce ticket (fondation manifeste uniquement).
