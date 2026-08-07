# Characters / Mei

Mei est la **guide virtuelle envisagée** (`docs/11_VIRTUAL_HUMANS.md`).

## Règles strictes

- Mei appartient à la **V2** ;
- ces assets **ne sont pas obligatoires** dans le MVP ;
- **aucune page MVP** ne doit casser si les fichiers sont absents ;
- Mei reste une guide **facultative** ;
- aucun visuel ne doit la présenter comme médecin, maître ou experte certifiée ;
- **ne pas intégrer Mei** dans les parcours MVP via ces fichiers seuls.

## Convention de nommage

- préfixe `mei-` ;
- minuscules, séparateur `-` ;
- WebP pour les rendus ; SVG pour placeholder.

## Fichiers attendus

| Fichier | Dimensions | Format | Transparence | Rôle | État |
| --- | --- | --- | --- | --- | --- |
| `mei-avatar-neutral.webp` | 256×256 | WebP | oui recommandé | Avatar neutre | manquant |
| `mei-portrait-guide.webp` | 512×768 | WebP | oui recommandé | Portrait guide | manquant |
| `mei-full-body-guide.webp` | 768×1280 | WebP | oui recommandé | Plein pied | manquant |
| `mei-thumbnail.webp` | 128×128 | WebP | oui | Miniature | manquant |
| `mei-presentation.webp` | 1024×576 | WebP | optionnel | Présentation | manquant |
| `mei-placeholder.svg` | — | SVG | oui | Placeholder documentaire | manquant |

Tone : calme, rassurant, non infantilisant, non médical.

## Tenue Tai Chi — référence officielle

Dossier : `tai-chi/`

| Fichier | Dimensions | Format | Rôle | État |
| --- | --- | --- | --- | --- |
| `mei-tai-chi-reference-front.webp` | 768×1280 | WebP (VP8) | **Référence officielle Mei — tenue Tai Chi** | **livré** |
| `mei-tai-chi-reference-front.png` | source | PNG | Source de retraitement (non servie par l’app) | conservée |

Cette image fixe :

- tenue ivoire / crème ;
- veste Tai Chi (col mandarin, brandebourgs) ;
- pantalon ample ;
- chaussures ;
- apparence / coiffure de référence.

Elle sert aux futurs assets pédagogiques et au pipeline vidéo.

**Ce n’est pas** un asset F-007 de mouvement : les références pédagogiques MV-001…003 vivent sous `web/public/curriculum/movements/`.
