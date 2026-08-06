# MVP-008B_VISUAL_ENVIRONMENT

> Tai-Chi AI Coach  
> Version : 1.0  
> Statut : **Proposable à la clôture** (Light + Dark livrés — validation visuelle explicite requise)  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-008B_VISUAL_ENVIRONMENT.md`  
> Dépend de :  
> - MVP-008A_UI_REFRESH (Fermé — CH-009)  
> - `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md` (VALIDÉ)  
> - `docs/12B_VISUAL_ASSET_GUIDE.md` (VALIDÉ)  
> - `docs/12B-A_OFFICIAL_BRAND_MARK.md` (VALIDÉ)

---

# 1. Objectif

Créer l’univers visuel officiel de Tai-Chi AI Coach.

Aucune logique métier modifiée.

Aucune fonctionnalité ajoutée.

Aucune donnée modifiée.

Aucun comportement utilisateur modifié.

Seul objectif : transformer l’environnement graphique afin que chaque écran transporte immédiatement l’utilisateur dans un univers cohérent avec la pratique du Tai Chi.

Après ce ticket :

l’utilisateur ne doit plus voir une application.

Il doit avoir l’impression d’entrer dans un lieu.

Ce lieu devient l’univers officiel de Tai-Chi AI Coach.

---

# 2. Documents de référence

Lire intégralement :

- `docs/01_VISION.md`
- `docs/12_UX_UI.md`
- `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`
- `docs/12B_VISUAL_ASSET_GUIDE.md`
- `docs/12B-A_OFFICIAL_BRAND_MARK.md`
- `docs/25_DESIGN_FREEZE.md`

Lire également :

- `docs/tickets/README.md`
- `docs/tickets/MVP-008A_UI_REFRESH.md` (précédent livrable UI)
- Runtime utiles : `00_PROJECT_STATUS`, `01_ARCHITECTURE_STATUS`, `09_TEST_STATUS`, `17_CHANGE_HISTORY`

Règle absolue :

| Domaine | Autorité |
| --- | --- |
| Interface / tokens / composants | `12A` |
| Univers graphique / assets / paysages | `12B` |
| Brand Mark / logos / icônes de marque | `12B-A` |

Lorsqu’un choix oppose une ancienne surface et ces documents, **12A / 12B / 12B-A prévalent**.

Aucune compatibilité graphique recherchée avec l’état pré–Experience Design.

---

# 3. Travail demandé

## 3.1 Partie 1 — L’univers visuel (brief officiel)

Cette partie définit l’univers à matérialiser.

Elle ne produit pas encore les fichiers binaires ni l’intégration code.

Elle constitue le brief obligatoire pour toute production et intégration ultérieures (parties suivantes du ticket).

### Mission

Créer l’univers visuel officiel.

Les arrière-plans ne sont jamais décoratifs.

Ils représentent un environnement.

Ils racontent une histoire.

Ils participent directement à l’expérience émotionnelle.

Ils ne doivent jamais détourner l’attention.

Ils créent uniquement une ambiance.

### Inspirations

Autorisées :

- montagnes chinoises ;
- forêts de bambous ;
- brume matinale ;
- jardins zen ;
- papier japonais ;
- pierre naturelle ;
- bois clair ;
- premiers rayons du soleil.

Interdites :

- villes ;
- bâtiments modernes ;
- salles de sport ;
- temples chargés ;
- paysages touristiques.

### Émotion recherchée

Chaque décor doit transmettre :

- le calme ;
- la respiration ;
- la profondeur ;
- la stabilité ;
- la sérénité.

Jamais :

- la puissance ;
- le spectaculaire ;
- l’excitation ;
- l’aventure ;
- la vitesse.

### Le matin

Tai-Chi AI Coach vit principalement au lever du jour.

Lumière officielle :

- douce ;
- chaude ;
- diffuse ;
- naturelle.

Jamais :

- midi ;
- coucher de soleil spectaculaire ;
- nuit dramatique.

### Les saisons

Le printemps constitue la saison de référence

(renouveau, apprentissage, équilibre).

Des variantes saisonnières pourront exister plus tard,

toujours dans le respect de l’identité du produit.

### Motifs du lieu

| Motif | Signification | Règles |
| --- | --- | --- |
| Montagnes | Stabilité | Lointaines, voilées, paisibles — jamais abruptes ni menaçantes |
| Bambous | Souplesse | Signature visuelle régulière — jamais envahissante ; ne masque pas le contenu |
| Brume | Respiration | Adoucit, crée la profondeur — jamais brouillard dense |
| Ciel | Diffusion de lumière | Discret, jamais sujet principal — tons Morning Mist / Rice Paper / Morning Sky |
| Eau | Fluidité | Parfaitement calme — aucune vague |
| Pierres | Ancrage | Discrètes — jamais décoratives |
| Arbres | Équilibre de composition | Secondaires — bambous, pins, érables discrets |

### Couleurs

Tous les paysages utilisent exclusivement la palette émotionnelle de `12A`.

Aucune couleur saturée.

Aucun ciel bleu intense.

Aucun vert artificiel.

### Textures

Évoquer : papier, pierre, bambou, tissu.

Jamais : métal, plastique, verre.

### Le vide

En moyenne, **30 à 50 %** de l’image reste volontairement vide.

Ce vide accueille le contenu.

### Mouvement

Les décors sont **immobiles**.

Ils ne sont jamais animés dans ce ticket.

Le calme passe avant le spectaculaire.

Les futures animations environnementales (hors périmètre) devront rester extrêmement discrètes.

### Audit préalable (obligatoire avant tout asset)

Avant toute intégration d’un nouvel asset graphique, vérifier :

- cohérence avec `12A` ;
- cohérence avec `12B` ;
- cohérence avec `12B-A` ;
- cohérence émotionnelle.

Tout asset non conforme est refusé.

### Principe fondamental

Tai-Chi AI Coach ne montre jamais un paysage.

Il invite l’utilisateur à entrer dans un lieu.

Chaque arrière-plan doit donner envie :

de respirer,

de ralentir,

et de commencer sa pratique.

S’il ne produit pas cette sensation,

il ne fait pas partie de l’univers officiel du produit.

---

## 3.2 Partie 2 — Production et bibliothèque des environnements

**Statut documentation : Fait** (6 août 2026)

### Objectif

Transformer l’univers Partie 1 en bibliothèque concrète : arborescence, briefs, noms, dimensions, rôles, safe areas, Light/Dark, responsive, validation — prêts pour intégration.

### Arborescence officielle (Hero)

```text
web/public/backgrounds/
├── README.md
├── hero/
│   ├── masters/            ← Masters Light
│   ├── masters-dark/       ← Masters Dark (WebP)
│   ├── light/              ← 15 exports Light final
│   └── dark/               ← 15 exports Dark final
├── splash/{light,dark}/README.md
├── sections/{light,dark}/README.md
├── patterns/README.md
└── textures/README.md
```

Chaque famille Hero possède **un Master Artwork unique** et **plusieurs exports**.

Les Masters sont la **seule source officielle** des environnements Hero.

### Pipeline Master Hero (workflow officiel)

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

Règles figées :

- Les exports ne sont **jamais** générés par IA.
- Les exports sont **toujours** obtenus par **recadrage** du Master.
- Aucune retouche artistique sur un export (lumière, couleurs, palette, éléments).
- Le cadrage est la seule différence entre viewports.
- Les Masters ne sont jamais utilisés directement par l’application.
- Aucune variante Hero ne peut être créée hors de ce flux.
- Documentation de référence : `backgrounds/README.md`, `hero/README.md`, `hero/masters/README.md`.

### Catalogue typé

- `web/src/config/background-assets.ts` — Hero ×5, Splash, sections ×4, textures ×3, patterns ×3  
- `web/src/config/assets.ts` → `assets.backgrounds`  
- `SCREEN_HERO_MAP` — mapping écrans → familles  
- Tous les fichiers graphiques : statut **`missing`** (aucune image inventée)

### Familles Hero (rôle exclusif)

| Famille | Émotion | Écrans |
| --- | --- | --- |
| `hero-morning` | Commencement | Accueil |
| `hero-bamboo` | Souplesse | Bibliothèque |
| `hero-mist` | Respiration | Progression / bilan |
| `hero-mountain` | Stabilité | À propos / institutionnel |
| `hero-dojo` | Préparation | Onboarding ponctuel |

Plus : `splash-main`, `section-*`, textures, patterns (voir README + ticket §27–§36 source).

### Règles figées dans la bibliothèque

- Formats WebP ; dimensions desktop / tablet / mobile ; nommage `<usage>-<theme>-<variant>-<viewport>`  
- Light/Dark pensés séparément ; Mei absente des paysages ; Brand Mark hors fichiers Hero  
- Pratique : aucun Hero ; intensités indicatives par écran  
- Validation artistique §47 / technique §48 du brief Partie 2

### Hors livrable Partie 2 (parties suivantes)

- ~~Production réelle des fichiers WebP / SVG~~ → Sprint 3 Light fait  
- ~~Intégration UI des backgrounds sur les écrans~~ → Sprint 3 Light fait  
- Hero Dark + Splash / sections / textures — restants

---

## 3.3 Sprint 3 — Hero Light (exports + intégration)

**Statut : Fait** (6 août 2026) — ticket MVP-008B **reste ouvert** (Dark manquant).

### Masters retenus

| Master | Famille |
| --- | --- |
| `MASTER_HERO_MORNING.webp` | morning |
| `MASTER_HERO_BAMBOO.webp` | bamboo |
| `MASTER_HERO_MIST.webp` | mist |
| `MASTER_HERO_DOJO.webp` | dojo |
| `MASTER_HERO_MOUNTAIN.webp` | mountain |

### 15 exports Light (`final`)

Desktop 1920×1080 · Tablet 1280×1024 · Mobile 1080×1920 — recadrage Master uniquement.

### Affectation

| Famille | Écran |
| --- | --- |
| Morning | Accueil `/` |
| Bamboo | Bibliothèque `/bibliotheque` |
| Mist | Progression `/progression` + bilan séance |
| Dojo | Onboarding `/onboarding` |
| Mountain | Profil `/profil` |
| — | Pratique `/pratique/*` : **aucun** Hero |

### Dark

Voir §3.4 Sprint Dark Exports.

### Runtime

CH-010 enregistré (Light). CH-011 enregistré (Dark).

---

## 3.4 Sprint Dark — Hero Dark (exports + catalogue)

**Statut : Fait** (7 août 2026) — MVP-008B **proposable à la clôture** (Light + Dark + responsive validés).

### Masters Dark

| Master | Famille | Format | Dimensions |
| --- | --- | --- | --- |
| `masters-dark/MASTER_HERO_MORNING_DARK.webp` | morning | WebP | 1672 × 941 |
| `masters-dark/MASTER_HERO_BAMBOO_DARK.webp` | bamboo | WebP | 1672 × 941 |
| `masters-dark/MASTER_HERO_MIST_DARK.webp` | mist | WebP | 1672 × 941 |
| `masters-dark/MASTER_HERO_DOJO_DARK.webp` | dojo | WebP | 1672 × 941 |
| `masters-dark/MASTER_HERO_MOUNTAIN_DARK.webp` | mountain | WebP | 1672 × 941 |

PNG sources convertis puis retirés de `dark/` (non utilisés par l’app).

### 15 exports Dark (`final`)

Desktop 1920×1080 · Tablet 1280×1024 · Mobile 1080×1920 — recadrage Master Dark uniquement (script `web/scripts/export-hero-dark.mjs`).

### Affectation (identique au Light)

| Famille | Écran |
| --- | --- |
| Morning Dark | Accueil `/` |
| Bamboo Dark | Bibliothèque `/bibliotheque` (+ séances / fiche) |
| Mist Dark | Progression `/progression` + bilan |
| Dojo Dark | Onboarding `/onboarding` |
| Mountain Dark | Profil `/profil` |
| — | Pratique : **aucun** Hero |

### Intégration

`HeroBackdrop` : thème Light → exports Light ; thème Dark → exports Dark.  
Fallback (`null`) uniquement si l’asset n’est pas `ready`.

### Runtime

CH-011 enregistré.

---

# 4. Hors périmètre

Ne jamais :

- modifier une logique métier ;
- modifier les services ;
- modifier les stores ;
- modifier Supabase ;
- modifier les Feature IDs ;
- ajouter une nouvelle fonctionnalité ;
- introduire Mei / caméra / IA Coach comme nouvelle capacité ;
- animer les décors ;
- inventer une palette hors `12A` ;
- modifier le Brand Mark hors `12B-A`.

Uniquement : l’environnement visuel (assets + présentation d’ambiance).

---

# 5. Critères d’acceptation

- [x] Brief Partie 1 présent et respecté comme référence d’univers.
- [x] Partie 2 : arborescence + catalogue + briefs + `assets.backgrounds`.
- [x] 15 Hero Light exportés / catalogue `final` / intégrés (Sprint 3).
- [x] Build, TypeScript, ESLint, tests verts (Sprint 3).
- [x] Runtime CH-010 ; ticket **non** fermé (Dark restant).
- [ ] Hero Dark produits et intégrés.
- [ ] Tout asset Dark audité contre `12A`, `12B`, `12B-A`.
- [ ] Validation émotionnelle globale (Light + Dark).
- [x] Aucune logique métier / fonctionnalité / comportement modifié (Sprint 3).

---

# 6. Runtime Registers à mettre à jour

Après livrable (intégration) :

- `docs/runtime/17_CHANGE_HISTORY.md` (nouvelle entrée CH-00x si disponible)
- `docs/runtime/00_PROJECT_STATUS.md` (si pertinent)
- `docs/runtime/01_ARCHITECTURE_STATUS.md` (couche présentation / assets)
- `docs/runtime/09_TEST_STATUS.md` (si tests touchés)

Ne pas inventer de Feature ID. Aucune F-xxx nouvelle.

---

# 7. Rapport attendu

En fin de ticket :

- liste des assets d’environnement créés / intégrés ;
- mapping écrans ↔ décors ;
- résultat des audits de conformité 12A / 12B / 12B-A ;
- résultat validation émotionnelle ;
- confirmation hors périmètre respecté.

---

# 8. Contraintes

- Structure ticket 9 sections (`docs/tickets/README.md`).
- Français UI ; Lucide uniquement pour l’UI ; aucun emoji ; aucun `alert` / `confirm`.
- Conventional Commits.
- `12A` / `12B` / `12B-A` font autorité sur toute décision graphique d’environnement.
- Ne pas démarrer l’intégration sans audit préalable des assets.

---

# 9. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé | **Fait** (6 août 2026) |
| Partie 1 — Univers visuel (brief) | **Fait** |
| Partie 2 — Bibliothèque / arborescence / catalogue | **Fait** (docs + structure ; images `missing`) |
| Pipeline Master Hero documenté | **Fait** (workflow officiel Master → exports → intégration) |
| Pipeline Hero Dark (infra) | **Fait** (Sprint 2 — aucun fichier image) |
| Production Hero Light (15 exports) | **Fait** (Sprint 3) |
| Intégration écrans Light | **Fait** (Sprint 3) |
| Production / intégration Hero Dark | À faire |
| Validation émotionnelle globale | Partielle (Light) |
| Runtime CH-010 | **Fait** |
| Clôture ticket | **Non** — Dark restant |

*Fin du ticket MVP-008B (Parties 1–2 documentées).*
