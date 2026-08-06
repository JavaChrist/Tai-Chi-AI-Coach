# Backgrounds — Univers visuel officiel

Bibliothèque des environnements graphiques de Tai-Chi AI Coach  
Références : `docs/12A`, `docs/12B`, `docs/12B-A`, ticket `MVP-008B_VISUAL_ENVIRONMENT`

Catalogue typé : `web/src/config/assets.ts` → `assets.backgrounds`

## Philosophie

Les arrière-plans ne sont jamais purement décoratifs.

Ils représentent un **lieu** (matin, bambou, brume, montagne, dojo).

Ils accompagnent une étape du parcours.

Ils ne détournent jamais l’attention du contenu.

Mei n’est **pas** intégrée dans ces fichiers (V2 séparée).

Le Brand Mark n’est **pas** brûlé dans les Hero (composé au-dessus, ex. Splash).

## Arborescence

```text
backgrounds/
├── README.md          ← ce fichier
├── hero/
│   ├── masters/       Master Artwork — seule source officielle Hero
│   │   ├── MASTER_HERO_MORNING.webp
│   │   ├── MASTER_HERO_BAMBOO.webp
│   │   ├── MASTER_HERO_MIST.webp
│   │   ├── MASTER_HERO_DOJO.webp
│   │   └── MASTER_HERO_MOUNTAIN.webp
│   ├── light/         Exports light (recadrages)
│   └── dark/          Exports dark (recadrages)
├── splash/            Entrée dans l’univers
├── sections/          Respirations de section (plus discrets)
├── patterns/          Motifs partiels secondaires
└── textures/          Matières quasi imperceptibles
```

### Hero — Pipeline Master (officiel)

Chaque famille Hero = **un Master unique** + **plusieurs exports**.

Les Masters sont la seule source officielle des environnements Hero.

Les exports ne sont jamais générés par IA — uniquement par **recadrage** du Master.

```text
Master Artwork
        ↓
Validation artistique
        ↓
Exports Desktop
        ↓
Exports Tablet
        ↓
Exports Mobile
        ↓
Validation
        ↓
Intégration
```

Voir `hero/README.md` et `hero/masters/README.md`.

Les Masters ne sont jamais référencés par l’application.

Chaque sous-dossier contient un `README.md` (rôle, fichiers, formats, dimensions, contraintes, statuts).

## Formats

| Usage | Format | Interdit |
| --- | --- | --- |
| Backgrounds principaux | WebP | JPEG fortement compressé, SVG paysage complexe, CDN externe |
| Transparence indispensable | PNG | — |
| Patterns géométriques simples | SVG ou WebP / PNG | — |
| Textures | WebP / PNG | Grain lourd, métal, plastique |

## Dimensions de référence

| Viewport | Ratio | Taille |
| --- | --- | --- |
| Desktop | 16:9 | 1920 × 1080 |
| Tablette | — | 1280 × 1024 |
| Mobile | 9:16 | 1080 × 1920 |
| Sections | ~16:9 | 1600 × 900 |

## Nommage

```text
<usage>-<theme>-<variant>-<viewport>.<format>
```

Exemples : `hero-morning-light-desktop.webp`, `splash-main-light-mobile.webp`

Interdits dans le nom : `final`, `final-v2`, `new`, `test`, `copie`, `image1`, `background-ok`

## Statuts

| Statut | Signification |
| --- | --- |
| `missing` | Emplacement défini ; fichier absent — **ne pas rendre** |
| `placeholder` | Fichier de mise en page uniquement — non artistique final |
| `final` | Existe, audité 12A/12B/12B-A, utilisable en production |

Aucun asset n’est `final` tant que le fichier réel n’est pas validé.

## Intensité indicative (intégration)

| Écran | Intensité |
| --- | --- |
| Splash | Pleine expression contrôlée |
| Accueil | Légère à modérée |
| Bibliothèque | Légère |
| Progression | Très légère |
| Profil | Minimale |
| Onboarding | Légère |
| Pratique | **Aucun** Hero — surfaces / lumière seulement |

## Production

Si les images définitives ne sont pas fournies :

- conserver l’arborescence et les briefs ;
- fallback uni / texturé léger côté UI ;
- ne jamais inventer un paysage « définitif » dans le code ;
- l’application ne doit pas casser.

## Validation

Checklist artistique et technique : ticket MVP-008B Partie 2 (§47–§48).
