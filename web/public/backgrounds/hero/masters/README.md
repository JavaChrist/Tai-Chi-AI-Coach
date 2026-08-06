# Hero — Master Artwork

Source officielle unique des environnements Hero (MVP-008B).

## Règle

Chaque famille Hero possède :

- un **Master Artwork** unique ;
- plusieurs **exports**.

Les exports ne sont **jamais** générés par IA.

Ils sont **toujours** obtenus par **recadrage** du Master.

## Format officiel

Les Master Artwork utilisent **exclusivement** le format **WebP**.

Le PNG ne constitue **pas** un format officiel des Masters.

Aucun fichier `.png` ne doit demeurer dans ce dossier.

## Arborescence

```text
masters/
├── MASTER_HERO_MORNING.webp
├── MASTER_HERO_BAMBOO.webp
├── MASTER_HERO_MIST.webp
├── MASTER_HERO_DOJO.webp
└── MASTER_HERO_MOUNTAIN.webp
```

## Workflow officiel

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

Aucune étape ne peut être sautée.

Aucun export ne peut précéder la validation artistique du Master.

## Rôle des Masters

Les fichiers `MASTER_HERO_*.webp` :

- constituent la **seule source officielle** de chaque famille Hero ;
- ne sont **jamais** utilisés directement par l’application ;
- ne sont **jamais** référencés dans le rendu runtime (`assets.backgrounds`) ;
- servent uniquement à produire les exports sous `hero/light/` et `hero/dark/`.

## Contenu attendu d’un Master

Un Master est **uniquement** l’œuvre (paysage ou dojo), sans :

- planche de documentation ;
- overlays de zones (header / hero / CTA) ;
- textes, labels, dimensions, palette hex ;
- vignettes d’export embarquées.

Les guides de cadrage vivent hors du fichier Master (docs / planches séparées).

## Exports

Les exports (`hero-<theme>-<variant>-<viewport>.webp`) doivent conserver :

- la lumière ;
- la palette ;
- la composition ;
- les zones de sécurité.

Le cadrage peut évoluer selon le viewport.

L’identité ne change jamais.

Les versions dark sont des exports pensés pour la nuit calme (12A) — jamais un simple filtre noir appliqué au Master.

## Convention de nommage

```text
MASTER_HERO_<FAMILY>.webp
```

- majuscules pour le préfixe et la famille ;
- underscore entre les segments ;
- extension `.webp` uniquement ;
- une famille = un Master.

## Fichiers Masters

| Fichier | Famille | Statut |
| --- | --- | --- |
| `MASTER_HERO_MORNING.webp` | hero-morning | présent — source des exports Light Sprint 3 |
| `MASTER_HERO_BAMBOO.webp` | hero-bamboo | présent — source des exports Light Sprint 3 |
| `MASTER_HERO_MIST.webp` | hero-mist | présent — source des exports Light Sprint 3 |
| `MASTER_HERO_DOJO.webp` | hero-dojo | présent — source des exports Light Sprint 3 |
| `MASTER_HERO_MOUNTAIN.webp` | hero-mountain | présent — source des exports Light Sprint 3 |

## Interdits

- Utiliser un Master comme `src` d’image dans l’UI ;
- Générer une variante sans Master correspondant ;
- Générer un export par IA ;
- Créer un export autrement que par recadrage du Master ;
- Modifier un export sans resynchroniser depuis le Master ;
- Inclure Brand Mark ou Mei dans le Master ;
- Déposer un Master ailleurs que dans ce dossier ;
- Conserver un Master au format PNG ;
- Utiliser une planche de specs comme Master Artwork ;
- Intégrer un export avant validation du Master et des cadrages.
