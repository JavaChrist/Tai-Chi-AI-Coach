# MVP-012_PEDAGOGICAL_VIDEOS

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Livré (code)** / **MEDIA BLOCKED** / **REFERENCE MOTION BLOCKED** (ouvert — non fermé ; infra F-006 ; **0** MP4 ; MotionReferenceSpec **DRAFT** MV-001…003 ; aucune production vidéo)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-012_PEDAGOGICAL_VIDEOS.md`
> Dépend de :
> - MVP-011_MOVEMENTS_LIBRARY (Fermé — `e8eebff` — F-004 / F-005 / F-007)
> - MVP-003_CURRICULUM_LIBRARY (Fermé — séances F-013 structurelles)
> - MVP-004_ASSET_PIPELINE (Fermé — emplacement `public/video/`)
> - `docs/05_FEATURES.md` (F-006, F-013)
> - `docs/08_TAI_CHI_CURRICULUM.md` §27
> - `docs/14_DATA_MODEL.md` (MediaAsset / ContentMediaLink)
> - `docs/25_DESIGN_FREEZE.md`
> - `docs/26_PWA_APP_UPDATE.md` (socle update ; hors cache vidéo / MVP-017)

---

# 1. Objectif

Cadrer puis livrer (développement **ultérieur**, hors de cette ouverture) :

- **F-006** — Vidéo pédagogique (démonstration associée à un mouvement / séance)
- **Enrichissement F-013** — intégration séances ↔ mouvements (et médias) **sans** livrer F-013 « complet » (reprise / historique → MVP-015)

But produit : permettre à l’utilisateur de **voir** un geste pour l’imiter prudemment, en complément du texte F-005 et de l’image F-007, sans analyse caméra et sans dépendance runtime à Virtual Humans Studio.

**Phase actuelle : code livré (infra) + contrat MotionReferenceSpec DRAFT (§8).**
Player + `mediaKeyVideo` + mapping séances ; **aucune** vidéo générée ; aucun provider IA ; aucun appel Virtual Humans ; GATE 10 **BLOCKED**.

---

# 2. Documents de référence

- `docs/05_FEATURES.md` (F-006, F-004, F-005, F-007, F-013)
- `docs/07_CONTENT_STRATEGY.md`
- `docs/08_TAI_CHI_CURRICULUM.md` §27
- `docs/11_VIRTUAL_HUMANS.md`
- `docs/12_UX_UI.md` / `12A` / `12B`
- `docs/13_TECH_ARCHITECTURE.md`
- `docs/14_DATA_MODEL.md`
- `docs/15_API_ARCHITECTURE.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/20_TEST_STRATEGY.md`
- `docs/22_ROADMAP.md`
- `docs/24_DEVELOPER_HANDOVER.md`
- `docs/tickets/MVP-011_MOVEMENTS_LIBRARY.md`
- `web/public/video/README.md`
- `web/public/characters/mei/README.md`
- Runtime : `00`, `02`, `03`, `11`

---

# 3. Définition officielle F-006

| Champ | Valeur (`05` §6.6) |
| --- | --- |
| Identifiant | F-006 |
| Nom | Vidéo pédagogique |
| Priorité | P0 |
| Version | MVP |
| Description | Vidéo de démonstration associée à un mouvement ou une séance. **Sans analyse caméra** côté utilisateur. |
| Objectif utilisateur | Voir le mouvement pour l’imiter prudemment. |
| Dépendances | **F-005** (texte) |
| Règles métier | Revoir / pause (contrôle de rythme) ; pas de correction automatique. |
| Limites | Ne constitue **pas** une analyse de posture. |
| Acceptation | Visionner une démo associée ; pouvoir y revenir. |
| Relation Mei | Peut être enrichie par une démo Mei **sans dépendance** (`05` §16). |

## 3.1 Contenu obligatoire MVP (corpus actuel)

Pour chaque mouvement **published** du corpus MV-001…003, lorsque le média est livré :

1. **1** démonstration vidéo pédagogique complète (corps entier, rythme lent, caméra stable).
2. Association Movement ↔ média vidéo (locator logique).
3. Visionnage sur la **fiche mouvement** avec contrôles (play / pause / revenir).
4. **Fallback** si vidéo absente : fiche reste utilisable (F-005 + F-007).
5. Poster (image) — prioritairement dérivé de / aligné sur F-007.

## 3.2 Contenu optionnel MVP

- Angle caméra supplémentaire (profil / 3/4) **uniquement** si justifié pédagogiquement (voir §9).
- Intégration légère dans un `SessionStep` « corps » (enrichissement F-013).
- Sous-titres / transcript textuel (nice-to-have ; F-005 reste l’alternative textuelle).

## 3.3 Contenu V1 / V2 (hors MVP-012)

| Version | Contenu |
| --- | --- |
| V1 | Packs offline riches (F-026) ; sync ; pas de génération à la demande |
| V2 | Professeurs virtuels / Mei interactive (F-023) ; CV (F-021/F-022) |

## 3.4 Relation F-005 / F-007

| Feature | Rôle | Relation vidéo |
| --- | --- | --- |
| F-005 | Explication textuelle | **Toujours** accessible ; alternative textuelle principale |
| F-007 | Image de référence clé | **Toujours** disponible ; poster / pause visuelle ; ne remplace pas la dynamique |
| F-006 | Démonstration dynamique | Enrichit ; **ne remplace ni** le texte ni l’image |

## 3.5 Comportement sans vidéo

- Aucune erreur bloquante.
- UI calme : zone vidéo absente ou empty state discret.
- Texte + image restent complets.
- Séances F-013 restent praticables sans vidéo.

## 3.6 Contraintes UX

- Attention minimale pendant la pratique (`12A`).
- Contrôles peu nombreux ; pas de carrousel auto ; pas de binge vidéo (`07`).
- Hero / Design System figés ; pas de nouvelle direction graphique.
- Pas d’`alert` / `confirm` natifs.

## 3.7 Offline

- **MVP-017 non ouvert** — pas de cache vidéo dans MVP-012.
- Online : fetch / lecture depuis assets statiques (ou URL future).
- Futur Offline : médias essentiels Cache First après 1er fetch (`18`) — hors scope ici.
- Documenter le poids potentiel ; ne pas bloquer le player online.

## 3.8 Accessibilité

- Contrôles clavier / focus visibles.
- **Pas d’autoplay avec son** (autoplay muet éventuel non prioritaire ; défaut = contrôles utilisateur).
- `playsInline` (iOS).
- Respect `prefers-reduced-motion` : ne pas forcer lecture auto ; proposer lecture manuelle.
- Alternative textuelle = F-005 (obligatoire) ; transcript optionnel MVP.
- Poster avec `alt` pertinent (non médical).

## 3.9 Formats média attendus (cible MVP)

| Élément | Cible |
| --- | --- |
| Conteneur | **MP4** (H.264 + AAC) — Safari / iOS / PWA |
| Option progressive | WebM (VP9) en complément **si** double export sans complexité (non obligatoire MVP) |
| Emplacement | `web/public/video/` — naming `movement-<slug>-demo.mp4` (convention README) |
| Poster | WebP F-007 existant ou `movement-<slug>-poster.webp` |
| Orientation | Portrait ou paysage **lisant le plein pied** ; cohérence avec F-007 (portrait 3:5) **préférée** pour continuité UI |
| Durée cible | Courte — un geste (`07`) ; ordre de grandeur **15–45 s** selon le mouvement (à valider production) |
| Poids | Objectif raisonnable mobile (cible indicative **≤ ~5–8 Mo** / clip après encodage ; à figer à la production) |

**Aucun fichier à convertir pendant cette ouverture.**

---

# 4. Règle pédagogique critique (normative)

> **Aucune vidéo générée ou transformée par IA ne peut devenir une référence pédagogique uniquement parce qu’elle est visuellement réussie.**

Une vidéo F-006 **publiable** doit suivre :

```text
SOURCE DE MOUVEMENT FIABLE
  → RÉFÉRENCE APPROUVÉE
  → TRANSFERT / PRODUCTION AVEC MEI
  → CONTRÔLE DE FIDÉLITÉ
  → VALIDATION
  → PUBLICATION
```

**La fidélité du mouvement est prioritaire** sur :

- esthétique ;
- fluidité cinématographique ;
- créativité du modèle ;
- qualité marketing.

Un générateur vidéo **ne doit pas inventer librement** un geste de Tai Chi ensuite utilisé comme référence d’apprentissage.

---

# 5. Inventaire références dynamiques (état réel dépôt)

| Mouvement | Texte F-005 | Image F-007 | Séquence positions | Vidéo humaine ref. | Mocap | Pose / squelette | Ref. externe approuvée | Ref. dynamique |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MV-001 | Oui (`08` §27.2) | Oui (WebP) | Texte ordonné seulement | **Non** | **Non** | **Non** | **Non** dans le dépôt | **Absente** |
| MV-002 | Oui (`08` §27.3) | Oui | Texte ordonné seulement | **Non** | **Non** | **Non** | **Non** | **Absente** |
| MV-003 | Oui (`08` §27.4) | Oui | Texte ordonné seulement | **Non** | **Non** | **Non** | **Non** | **Absente** |

Référence personnage / tenue (hors F-006) :

- `web/public/characters/mei/tai-chi/mei-tai-chi-reference-front.webp` (+ PNG source)
- Documentée dans `web/public/characters/mei/README.md` — **pas** une référence dynamique de mouvement.

---

# 6. Virtual Humans Studio — pipeline de production (externe)

## 6.1 Principes

- Pipeline de **production** externe, **pas** dépendance runtime.
- Tai-Chi consomme des médias **préfabriqués validés**.
- Tai-Chi fonctionne si VHS est indisponible.
- **Aucune** génération vidéo à la demande dans le MVP.

## 6.2 Contrat minimal (conceptuel)

```text
Movement (MV-00x)
  → production brief (fidélité + angles)
  → reference motion (source fiable approuvée)
  → character Mei + tenue Tai Chi officielle
  → generation / transfer
  → QC fidélité (checklist §4)
  → approved media
  → export MP4 (+ poster)
  → dépôt Tai-Chi : public/video/ + MAJ data Movement
```

## 6.3 Mei (F-006)

- Même identité que la référence tenue.
- Tenue Tai Chi officielle (ivoire/crème).
- Cohérence corporelle ; **mouvement prioritaire** ; environnement non prioritaire (fond neutre / simple).

## 6.4 Futur contrat prompt — `TAI_CHI_MOTION_VIDEO_V1` (documentaire uniquement)

**Ne pas implémenter** dans Virtual Humans Studio ni dans Tai-Chi AI Coach pour MVP-012.

Un futur template spécialisé pourra s’appeler `TAI_CHI_MOTION_VIDEO_V1` et devra séparer :

| Bloc | Rôle |
| --- | --- |
| `MovementSpec` | Identité pédagogique (MV-00x, étapes, fidélité) |
| `MotionReference` | Source dynamique fiable / approuvée |
| `GenerationConstraints` | Limites de génération (pas d’invention gestuelle) |
| `CameraConstraints` | Angle, plein pied, stabilité |
| `CharacterConstraints` | Mei + tenue officielle |
| `QCRequirements` | Checklist fidélité avant export |

Règle normative : **motion fidelity > visual creativity**.
La validation humaine reste **obligatoire** avant publication pédagogique.
Aucune dépendance runtime Tai-Chi ↔ Virtual Humans Studio.

---

# 7. Stratégie vidéo MVP (corpus 3 mouvements)

**Option minimale retenue :** **1 vidéo pédagogique validée par mouvement** (3 clips).

Par défaut pour chaque clip :

- démonstration complète du geste ;
- rythme lent ;
- corps entier visible ;
- caméra stable ;
- mouvement lisible ;
- aucun montage distrayant ;
- aucun texte / flèche / annotation incrustés (aligné esprit F-007 / `12B`).

**Angles supplémentaires :**

| Mouvement | Angle MVP recommandé | Angle supplémentaire ? |
| --- | --- | --- |
| MV-001 | Face (posture neutre) | Non — face suffit |
| MV-002 | Face (brief PO §8.2) | Non — un seul angle ; plan fixe plein pied |
| MV-003 | Face presque frontale (brief PO §8.3) ; léger 3/4 seulement si pas illisible | Non — un seul angle ; pas de profil systématique |

Ne pas multiplier les angles sans justification pédagogique.

---

# 8. MotionReferenceSpec + fiches de besoin vidéo

Ce chapitre est la **source de vérité Tai-Chi du mouvement attendu** pour contrôler ultérieurement les vidéos Mei.

| Règle | Valeur |
| --- | --- |
| Dépendance provider / Virtual Humans Studio | **Aucune** |
| Ce contrat décrit | Le **mouvement pédagogique attendu** |
| Ce contrat ne décrit pas | Comment le média sera généré |
| Texte app F-005 (`08` §27 / `local-movements`) | **Inchangé** par ce chapitre |
| Production média pendant rédaction | **Interdite** |
| REFERENCE MOTION dynamique approuvée | **ABSENTE** |
| MEDIA PRODUCTION READINESS | **BLOCKED** |
| GATE 10 | **BLOCKED** |

Les briefs §8.1–§8.3 (9 août 2026) restent la base caméra/Mei/durée ; ils sont **évolués** ici en contrats `MotionReferenceSpec` **DRAFT**.

---

## 8.0 Contrat conceptuel `MotionReferenceSpec`

### 8.0.1 Modèle (champs minimum)

```text
MotionReferenceSpec
  movementId                 // "MV-001" | "MV-002" | "MV-003"
  version                    // semver documentaire, ex. "0.1.0-draft"
  referenceStatus            // DRAFT | CANDIDATE | APPROVED | REJECTED
  sourceType                 // curriculum_official | external_pedagogical_candidate | approved_dynamic_reference
  sourceReference            // citation textuelle / instituts — JAMAIS un fichier vidéo embarqué
  cameraView                 // face | face_near_frontal | optional_slight_34
  durationTarget             // plage secondes
  phases[]                   // phases observables ordonnées
  checkpoints[]              // BodyCheckpoint pertinents (sous-ensemble)
  bodyRelations[]            // relations qualitatives (pas d’angles numériques inventés)
  forbiddenPatterns[]
  qcRequirements[]           // familles PASS/FAIL
  humanValidationRequired    // toujours true avant publication pédagogique
```

Chaque `phase` décrit au minimum :

| Champ phase | Contenu |
| --- | --- |
| id / order | Identifiant stable + ordre |
| objective | Objectif pédagogique de la phase |
| bodyPosition | Position corporelle globale |
| weight | `WEIGHT_DISTRIBUTION` attendue |
| feet | Pieds / contact sol |
| knees | Genoux |
| pelvis | Bassin |
| torso | Buste |
| shoulders | Épaules |
| armsHands | Bras / mains **selon ce mouvement** (jamais improvisé) |
| transitionToNext | Transition vers la phase suivante |
| forbiddenInPhase | Erreurs interdites dans la phase |
| checkpoints | Sous-ensemble de BodyCheckpoint pertinents |

### 8.0.2 Taxonomie `BodyCheckpoint`

Utiliser **uniquement** les checkpoints pédagogiquement pertinents (pas d’obligation de tous les listes à chaque phase).

| Zone | Checkpoint IDs |
| --- | --- |
| Tête / ceinture scapulaire | `HEAD` · `SHOULDERS` |
| Membres supérieurs | `LEFT_ELBOW` · `RIGHT_ELBOW` · `LEFT_WRIST` · `RIGHT_WRIST` · `LEFT_HAND` · `RIGHT_HAND` |
| Tronc | `TORSO` · `PELVIS` |
| Membres inférieurs | `LEFT_HIP` · `RIGHT_HIP` · `LEFT_KNEE` · `RIGHT_KNEE` · `LEFT_ANKLE` · `RIGHT_ANKLE` · `LEFT_FOOT` · `RIGHT_FOOT` |
| Charge | `WEIGHT_DISTRIBUTION` |

### 8.0.3 Relations corporelles (qualitatives)

Le contrat peut exprimer, **sans inventer d’angles numériques** :

| Relation | Usage typique |
| --- | --- |
| knee ↔ foot orientation | Genou orienté dans le sens du pied d’appui |
| knee ↔ foot vertical alignment / projection | Genou ne « tombe » pas nettement à l’intérieur / extérieur du pied |
| pelvis ↔ weight transfer | Bassin accompagne le transfert sans bascule spectaculaire |
| torso ↔ vertical stability | Buste reste approximativement vertical |
| heel ↔ stepping phase | Contact talon avant le transfert avant (MV-003) |
| hands ↔ required reference position | Position **imposée par la spec** du mouvement |
| shoulders ↔ relaxation | Épaules basses, non haussées |
| supporting leg ↔ moving foot | Jambe porteuse identifiable avant déplacement du pied libre |

### 8.0.4 Règle normative — mains / bras

**Correction des briefs antérieurs :** la formule « bras naturellement détendus » **n’est pas universelle**.

| Règle | Valeur |
| --- | --- |
| Source de vérité mains/bras | `MotionReferenceSpec.phases[].armsHands` du mouvement concerné |
| Improvisation générateur | **Interdite** |
| Posture fondamentale (MV-001) | Distincte de la **configuration pédagogique** d’isolement bas du corps |
| Mains derrière le dos | **Non** attribuées à MV-001 par défaut ; candidate pour MV-002 / MV-003 si l’exercice isole le bas du corps |

### 8.0.5 Référence pédagogique externe (candidate)

| Champ | Valeur |
| --- | --- |
| Statut | **CANDIDATE** — analyse pédagogique uniquement |
| Source | Démonstration étudiée — **Dr Paul Lam / Tai Chi for Health Institute** |
| Rôle | Analyser posture, base, poids, pieds, genou/pied, bassin, buste, épaules, bras, mains, timing, phases |
| Fichier vidéo dans le dépôt | **Aucun** — ne pas embarquer |
| Asset Tai-Chi | **Non** — ne pas déclarer comme média produit |
| Copie audiovisuelle | **Interdite** |
| sourceType associé | `external_pedagogical_candidate` |
| Levée REFERENCE MOTION BLOCKED | **Non** — nécessite validation explicite d’une référence **dynamique** approuvée |

Domaines d’analyse (checklist) : posture · transfert du poids · placement des pieds · relation genou/pied · bassin · buste · épaules · bras · mains · timing · phases du mouvement.

### 8.0.6 Familles QC (PASS / FAIL)

Appliquées par mouvement ; validation finale toujours humaine.

| Famille | PASS si… | FAIL si… |
| --- | --- | --- |
| `motion_fidelity` | Phases et transitions respectées | Forme inventée / phases sautées |
| `lower_body_fidelity` | Pieds, genoux, hanches conformes | Pas, squat, fente, kick |
| `upper_body_fidelity` | Bras/mains = position **requise** | Chorégraphie / improvisation bras |
| `weight_transfer_fidelity` | Transfert lisible, progressif | Bascule brutale / instabilité volontaire |
| `knee_foot_alignment` | Relation genou↔pied qualitative OK | Genou nettement désaligné / effondré |
| `hand_position_fidelity` | Mains = spec mouvement | Mains « au choix » du modèle |
| `camera_compliance` | Fixe, plein pied, corps entier | Zoom, travelling, coupe, cadrage perdu |
| `identity_outfit_compliance` | Mei + tenue ivoire officielle | Variation identité / tenue |
| `pedagogical_readability` | Gestes lisibles pour apprenant | Illisible / trop rapide / ambigu |

`humanValidationRequired = true` pour toute publication pédagogique.

### 8.0.7 Compatibilité future Computer Vision (hors MVP)

| Champ | Valeur |
| --- | --- |
| Compatibilité conceptuelle | La même `MotionReferenceSpec` pourra servir de base aux checkpoints d’un futur Computer Vision Coach |
| Développement CV / landmarks runtime / caméra / comparaison utilisateur | **Hors MVP — interdit ici** |
| Impact actuel | Documentaire uniquement |

### 8.0.8 Readiness globale (inchangée)

| Item | Statut |
| --- | --- |
| MotionReferenceSpec MV-001…003 | **DRAFT** |
| REFERENCE MOTION (dynamique approuvée) | **ABSENTE** → **REFERENCE MOTION BLOCKED** |
| MP4 validés | **0** → **MEDIA BLOCKED** |
| GATE 10 | **BLOCKED** |

---

## 8.1 MV-001 — Posture de départ

**Brief production PO** (caméra / Mei / durée) conservé.
**MotionReferenceSpec** : **DRAFT** `0.1.0-draft`.
Aligné `08` §27.2 pour le sens pédagogique ; **ne remplace pas** le texte F-005.

### Distinction fondamentale vs configuration pédagogique

| Concept | Appartenance MV-001 |
| --- | --- |
| Posture fondamentale stable / détendue / confortable | **Oui** — cœur de MV-001 |
| Installation progressive (pieds → genoux → épaules → maintien) | **Oui** |
| Mains placées derrière le dos (isolement bas du corps) | **Non** — appartient à la **configuration pédagogique** des exercices de transfert / pas (voir MV-002 / MV-003), pas à la posture de départ |

### En-tête MotionReferenceSpec

| Champ | Valeur |
| --- | --- |
| `movementId` | `MV-001` |
| `version` | `0.1.0-draft` |
| `referenceStatus` | **DRAFT** |
| `sourceType` | `curriculum_official` + analyse `external_pedagogical_candidate` |
| `sourceReference` | `08` §27.2 ; Dr Paul Lam / TCHI (candidate — non embarquée) |
| `cameraView` | `face` — plein pied, fixe, sans zoom / travelling / coupe |
| `durationTarget` | 20–30 s |
| Fichier cible (futur) | `/video/movements/movement-posture-de-depart-demo.mp4` |
| `humanValidationRequired` | **true** |
| Readiness production | **BLOCKED** |

### Position mains / bras (requise)

| Règle | Valeur |
| --- | --- |
| Position | Mains **ouvertes**, détendues, le long du corps ou légèrement devant les cuisses — posture fondamentale |
| Derrière le dos | **Interdit** pour MV-001 |
| Improvisation / mudra / garde martiale | **Interdit** |

### Phases

| # | id | Objectif | Poids | Pieds | Genoux | Bassin | Buste | Épaules | Bras/mains | Transition | Interdit phase |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `mv001-p1-feet` | Stabiliser les appuis | Réparti ~50/50 | Entièrement au sol, écart confortable | Souples | Neutre | Vertical sans rigidité | Relâchées | Position requise MV-001 (ouvertes, le long du corps) | → genoux | Pas, transfert fort, mains derrière dos |
| 2 | `mv001-p2-knees` | Relâchement léger genoux | Stable réparti | Inchangés | Micro-flexion, pas de squat | Neutre | Stable | Relâchées | Inchangée | → épaules | Position basse, genoux verrouillés |
| 3 | `mv001-p3-shoulders-arms` | Relâcher ceinture scapulaire | Stable | Inchangés | Souples | Neutre | Stable | Descendre / relâcher | Confirmer mains ouvertes détendues | → stabilisation | Mouvement de bras ajouté |
| 4 | `mv001-p4-settle` | Stabiliser la posture | Stable | Inchangés | Souples | Neutre | Vertical | Relâchées | Inchangée | → maintien | Rotation, improvisation forme |
| 5 | `mv001-p5-hold` | Maintien calme quelques secondes | Stable | Inchangés | Souples | Neutre | Stable | Relâchées | Inchangée | Fin | Respiration spectaculaire, transfert |

### Checkpoints pertinents

`HEAD` · `SHOULDERS` · `LEFT_HAND` · `RIGHT_HAND` · `TORSO` · `PELVIS` · `LEFT_KNEE` · `RIGHT_KNEE` · `LEFT_FOOT` · `RIGHT_FOOT` · `WEIGHT_DISTRIBUTION`

### Relations

- `torso ↔ vertical stability`
- `shoulders ↔ relaxation`
- `hands ↔ required reference position` (ouvertes le long du corps — **pas** derrière le dos)
- genou/pied : genoux souples au-dessus d’appuis stables (pas d’exigence de transfert)

### Forbidden patterns (global MV-001)

Posture martiale · mouvements de bras ajoutés · transfert de poids important · pas · rotation · squat / position basse · chorégraphie · mains derrière le dos · improvisation Tai Chi · mouvement / coupe caméra.

### QC MV-001

| Famille | Attendu |
| --- | --- |
| `motion_fidelity` | PASS |
| `lower_body_fidelity` | PASS |
| `upper_body_fidelity` | PASS |
| `hand_position_fidelity` | PASS (ouvertes le long du corps) |
| `weight_transfer_fidelity` | PASS (répartition stable, sans transfert latéral démonstratif) |
| `camera_compliance` | PASS |
| `identity_outfit_compliance` | PASS |
| `pedagogical_readability` | PASS |

---

## 8.2 MV-002 — Transfert de poids latéral

**Brief production PO** (caméra / Mei / durée) conservé.
**MotionReferenceSpec** : **DRAFT** `0.1.0-draft`.
Aligné `08` §27.3 ; **ne remplace pas** le texte F-005.

### En-tête MotionReferenceSpec

| Champ | Valeur |
| --- | --- |
| `movementId` | `MV-002` |
| `version` | `0.1.0-draft` |
| `referenceStatus` | **DRAFT** |
| `sourceType` | `curriculum_official` + `external_pedagogical_candidate` |
| `sourceReference` | `08` §27.3 ; Dr Paul Lam / TCHI (candidate — non embarquée) |
| `cameraView` | `face` — plein pied, fixe |
| `durationTarget` | 25–40 s |
| Fichier cible (futur) | `/video/movements/movement-transfert-poids-lateral-demo.mp4` |
| `humanValidationRequired` | **true** |
| Readiness production | **BLOCKED** |

### Position mains / bras (requise — configuration pédagogique)

Issue de l’analyse de la référence pédagogique candidate (isolement du travail du bas du corps) :

| Règle | Valeur |
| --- | --- |
| Position | Mains **placées derrière le dos** (configuration pédagogique d’observation du bas du corps) |
| Maintien | Position **constante** pendant toutes les phases de transfert |
| Improvisation / balancement / mudra / garde | **Interdit** |
| « Bras naturellement détendus » au sens vague | **Non applicable** — remplacé par cette position requise |

### Relation genou / pied

| Relation | Attendu qualitatif |
| --- | --- |
| knee ↔ foot orientation | Genou de la jambe qui reçoit le poids reste orienté dans le sens du pied d’appui |
| knee ↔ foot vertical alignment | Pas d’effondrement net du genou vers l’intérieur ; pas de projection agressive hors du pied |
| supporting leg ↔ feet | Les **deux pieds restent entièrement au sol** pendant tout le clip |
| pelvis ↔ weight transfer | Bassin accompagne le transfert sans bascule spectaculaire ni inclinaison latérale importante du buste |

Aucun angle numérique inventé.

### Phases

| # | id | Objectif | Poids | Pieds | Genoux | Bassin | Buste | Épaules | Bras/mains | Transition | Interdit phase |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `mv002-p1-init` | Position initiale stable | ~50/50 | Écart confortable, contact total | Souples | Neutre | Vertical | Relâchées | **Derrière le dos** | → transfert A | Pied levé, pas |
| 2 | `mv002-p2-to-A` | Transfert lent vers jambe A | Progressive → A | Deux pieds au sol | Souples ; genou A aligné pied A | Suit le transfert | Vertical stable | Relâchées | Inchangées derrière dos | Stop avant instabilité | Bascule brusque, inclinaison forte |
| 3 | `mv002-p3-limit-A` | Limite confortable côté A | Majoritaire A, sans instabilité | Deux pieds au sol | Souples | Contrôlé | Vertical | Relâchées | Inchangées | → retour centre | Aller jusqu’au déséquilibre |
| 4 | `mv002-p4-center` | Retour progressif centre | → ~50/50 | Deux pieds au sol | Souples | Neutre | Vertical | Relâchées | Inchangées | → transfert B | Retour brutal |
| 5 | `mv002-p5-to-B` | Transfert lent vers jambe B | Progressive → B | Deux pieds au sol | Souples ; genou B aligné pied B | Suit le transfert | Vertical | Relâchées | Inchangées | Stop avant instabilité | Pas latéral, croisement |
| 6 | `mv002-p6-limit-B` | Limite confortable côté B | Majoritaire B | Deux pieds au sol | Souples | Contrôlé | Vertical | Relâchées | Inchangées | → centre final | Squat, rotation posture |
| 7 | `mv002-p7-center-hold` | Retour centre + maintien bref | ~50/50 | Deux pieds au sol | Souples | Neutre | Vertical | Relâchées | Inchangées | Fin | Chorégraphie bras, forme inventée |

### Checkpoints pertinents

`SHOULDERS` · `LEFT_HAND` · `RIGHT_HAND` · `TORSO` · `PELVIS` · `LEFT_HIP` · `RIGHT_HIP` · `LEFT_KNEE` · `RIGHT_KNEE` · `LEFT_FOOT` · `RIGHT_FOOT` · `WEIGHT_DISTRIBUTION`

### Forbidden patterns (global MV-002)

Pas latéral · pied levé · posture basse · balancement spectaculaire · bassin brusque · geste martial · bras inventés / quittant le dos · forme improvisée · mouvement caméra.

### QC MV-002

| Famille | Attendu |
| --- | --- |
| `motion_fidelity` | PASS |
| `lower_body_fidelity` | PASS |
| `upper_body_fidelity` | PASS |
| `hand_position_fidelity` | PASS (mains derrière le dos) |
| `weight_transfer_fidelity` | PASS |
| `knee_foot_alignment` | PASS |
| `camera_compliance` | PASS |
| `identity_outfit_compliance` | PASS |
| `pedagogical_readability` | PASS |

---

## 8.3 MV-003 — Pas avant contrôlé

**Brief production PO** (caméra / Mei / durée / QC checklist) conservé.
**MotionReferenceSpec** : **DRAFT** `0.1.0-draft`.
Aligné `08` §27.4 ; **ne remplace pas** le texte F-005.
**Ne pas** transformer en marche normale.

### En-tête MotionReferenceSpec

| Champ | Valeur |
| --- | --- |
| `movementId` | `MV-003` |
| `version` | `0.1.0-draft` |
| `referenceStatus` | **DRAFT** |
| `sourceType` | `curriculum_official` + `external_pedagogical_candidate` |
| `sourceReference` | `08` §27.4 ; Dr Paul Lam / TCHI (candidate — non embarquée) |
| `cameraView` | `face_near_frontal` ; léger 3/4 seulement si pas illisible |
| `durationTarget` | 30–45 s |
| Fichier cible (futur) | `/video/movements/movement-pas-avant-controle-demo.mp4` |
| `humanValidationRequired` | **true** |
| REFERENCE MOTION | **ABSENTE** |
| Readiness production | **BLOCKED** — génération interdite sur ce seul brief |

### Position mains / bras (requise — configuration pédagogique)

| Règle | Valeur |
| --- | --- |
| Position | Mains **placées derrière le dos** (même logique d’isolement bas du corps que MV-002, issue de la référence candidate) |
| Maintien | Constante pendant préparation, pas et retour |
| Improvisation / balancement des bras | **Interdit** |

### Relation genou / pied

| Relation | Attendu qualitatif |
| --- | --- |
| supporting leg ↔ moving foot | Transfert sur jambe porteuse **avant** libération / déplacement du pied opposé |
| heel ↔ stepping phase | Contact **talon** avant en premier ; transfert avant **après** la pose |
| knee ↔ foot orientation | Genou de la jambe porteuse orienté avec le pied d’appui ; genou avant suit le pied avancé sans torsion forcée |
| knee ↔ foot vertical alignment | Pas d’effondrement genou ; pas de grande fente |
| torso ↔ vertical stability | Buste approximativement vertical pendant le pas |
| pelvis ↔ weight transfer | Transfert avant progressif, contrôlé |

Aucun angle numérique inventé.

### Phases

| # | id | Objectif | Poids | Pieds | Genoux | Bassin | Buste | Épaules | Bras/mains | Transition | Interdit phase |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `mv003-p1-prep` | Préparation / stabilisation | ~50/50 | Stable, espace devant | Souples | Neutre | Vertical | Relâchées | **Derrière le dos** | → transfert porteuse | Marche, grand pas |
| 2 | `mv003-p2-load` | Transfert sur jambe porteuse | → jambe porteuse | Porteuse chargée ; autre allégé | Souples | Contrôlé | Vertical | Relâchées | Inchangées | → libération pied | Avancer avant transfert |
| 3 | `mv003-p3-release` | Pied opposé libéré | Porteuse dominante | Pied libre suffisamment léger | Souples | Stable | Vertical | Relâchées | Inchangées | → lever | Kick, projection |
| 4 | `mv003-p4-lift` | Lever contrôlé | Porteuse | Pied libre décolle sans précipitation | Souples | Stable | Vertical | Relâchées | Inchangées | → petit pas | Pas rapide |
| 5 | `mv003-p5-step` | Petit déplacement avant | Porteuse | Petite distance seulement | Souples | Stable | Vertical | Relâchées | Inchangées | → talon | Grande fente, marche |
| 6 | `mv003-p6-heel` | Contact talon | Encore surtout porteuse | **Talon** avant posé doucement | Souples ; alignement genou/pied | Contrôlé | Vertical | Relâchées | Inchangées | → pause intermédiaire | Pose pleine plante d’abord |
| 7 | `mv003-p7-mid` | Stabilisation intermédiaire | Transition prudente | Talon/contact avant établi | Souples | Contrôlé | Vertical | Relâchées | Inchangées | → transfert avant | Transfert brutal |
| 8 | `mv003-p8-forward` | Transfert progressif avant | Partie du poids → avant | Appui avant augmente progressivement | Souples | Suit le transfert | Vertical | Relâchées | Inchangées | → maintien | Perte d’équilibre volontaire |
| 9 | `mv003-p9-hold` | Maintien stable bref | Stable intermédiaire | Deux appuis contrôlés | Souples | Neutre/contrôlé | Vertical | Relâchées | Inchangées | → retour | Accélération équilibre |
| 10 | `mv003-p10-return` | Retour position initiale | → répartition initiale | Retour calme | Souples | Contrôlé | Vertical | Relâchées | Inchangées | Fin | Forme Tai Chi ajoutée, rotation forte |

### Checkpoints pertinents

`SHOULDERS` · `LEFT_HAND` · `RIGHT_HAND` · `TORSO` · `PELVIS` · `LEFT_HIP` · `RIGHT_HIP` · `LEFT_KNEE` · `RIGHT_KNEE` · `LEFT_ANKLE` · `RIGHT_ANKLE` · `LEFT_FOOT` · `RIGHT_FOOT` · `WEIGHT_DISTRIBUTION`

### Forbidden patterns (global MV-003)

Grande fente · marche normale · grand pas · pas rapide · pied projeté · transfert brutal · perte d’équilibre volontaire · kick · posture martiale · chorégraphie bras · forme Tai Chi supplémentaire · improvisation · rotation importante · mouvement / coupe / changement cadrage caméra.

### Priorité de production

Fidélité du mouvement **>** esthétique · fluidité cinématographique · créativité · dynamisme · expressivité.
Le modèle ne doit **jamais** compléter avec une forme Tai Chi « connue ».

### QC MV-003

| Famille | Attendu |
| --- | --- |
| `motion_fidelity` | PASS |
| `lower_body_fidelity` | PASS |
| `upper_body_fidelity` | PASS |
| `hand_position_fidelity` | PASS (mains derrière le dos) |
| `weight_transfer_fidelity` | PASS |
| `knee_foot_alignment` | PASS |
| `camera_compliance` | PASS |
| `identity_outfit_compliance` | PASS |
| `pedagogical_readability` | PASS |

Checklist opérationnelle (conservée) : identité Mei · tenue · corps entier 100 % · deux pieds visibles selon phases · caméra fixe · transfert avant déplacement · jambe porteuse identifiable · pied allégé avant déplacement · petite amplitude · talon d’abord · transfert avant après pose · buste stable · pas de fente/marche/kick/martial/chorégraphie · lent · retour cohérent.

### Statut MV-003

| Champ | Valeur |
| --- | --- |
| Brief production | **Prêt** |
| MotionReferenceSpec | **DRAFT** |
| REFERENCE MOTION | **Absente** |
| MP4 | **0** |
| Readiness | **BLOCKED** |

---

# 9. Enrichissement F-013

## 9.1 Signification

Pas une feature séparée. Périmètre ticket = **brancher** mouvements / vidéos dans le flux séances existant, sans livrer F-013 complet (historique, reprise persistante → MVP-015).

## 9.2 État code (après implémentation MVP-012)

- `SessionStep.movementIds?: string[]` — livré.
- Mapping curriculum : Découverte corps → MV-001 ; Initiation corps → MV-001, MV-002 ; Progression liaison → MV-002, MV-003.
- Intégrité : `curriculumReader.validateMovementLinks` + helpers `session-movement-links`.
- UX : liens « Mouvement(s) associé(s) » fiche séance + étape pratique → fiche MV.
- `PracticePlayer` : **pas** de player vidéo inline (texte + liens légers seulement).

## 9.3 Mapping minimal justifié (`08` §27.7)

| Séance | Mapping MVP-012 proposé |
| --- | --- |
| `st-decouverte-premiere-courte` | Optionnel : corps → **MV-001** (rituel prioritaire) |
| `st-initiation-rituel-base` | Corps → **MV-001** puis **MV-002** (MV-003 selon charge) |
| `st-progression-liaison-legere` | Liaison entre **MV-002** / **MV-003** déjà connus — pas de nouveau geste |

## 9.4 Extension modèle minimale

Sur `SessionStep` (données locales) :

```text
movementIds?: string[]  // ex. ["MV-001"] — optionnel
```

UI pratique minimale MVP-012 :

- Sur une étape `corps` liée : lien « Voir le mouvement » → fiche `/bibliotheque/mouvements/[slug]` **et/ou** lecteur vidéo inline si média présent.
- Ne pas transformer PracticePlayer en studio vidéo.
- Ne pas inventer de nouveaux steps hors curriculum.

## 9.5 Frontière MVP-013+

| Dans MVP-012 | Hors MVP-012 |
| --- | --- |
| Liens step → Movement IDs du corpus | Parcours débutant F-003 |
| Lecture vidéo sur fiche + accès depuis séance | Séances complètement réécrites |
| Enrichissement data locale | Sync / génération IA de séances |

---

# 10. Architecture média

## 10.1 Existant

| Couche | État |
| --- | --- |
| `Movement.mediaKeyImage` | Livré (string locator) |
| `Movement.mediaKeyVideo` | Livré (`null` pour MV-001…003) |
| Types TS `MediaAsset` / `ContentMediaLink` | **Absents** (conceptuels `14` seulement) |
| Fichiers `public/video/movements/` | README + convention — **0** MP4 |
| Player | `PedagogicalVideo` — prêt ; fallback sans média |

## 10.2 Extensions réellement nécessaires (MVP)

Sans migration lourde ni Object Storage obligatoire :

```text
Movement
  mediaKeyImage: string | null     // existant F-007
  mediaKeyVideo: string | null     // NOUVEAU — locator MP4 F-006
  // optionnel:
  mediaVideoPoster?: string | null // défaut = mediaKeyImage
```

Alignement futur `14` : conserver la possibilité d’introduire `MediaAsset` + `ContentMediaLink` sans bloquer le MVP (locator string = forme minimale de logical_locator).

**Ne pas** introduire Supabase Storage pour le MVP si les fichiers tiennent sous `public/video/`.

---

# 11. Stockage & lecture MVP

| Décision | Choix |
| --- | --- |
| Stockage | Fichiers statiques `web/public/video/` |
| Accès | Chemins publics `/video/movements/movement-<slug>-demo.mp4` |
| Player | `<video>` natif (+ wrapper accessibilité) ; pas de dépendance lourde requise |
| Attributs | `controls` ; `playsInline` ; `preload="metadata"` ; poster = F-007 |
| Autoplay | **Non** avec son ; pas d’autoplay obligatoire |
| Safari / iOS PWA | MP4 H.264 ; validation manuelle obligatoire |
| Preload agressif | Non (poids) |

---

# 12. UX fiche mouvement

Ordre de lecture retenu :

1. Titre / métadonnées
2. Image F-007 (repère visuel)
3. **Bloc vidéo F-006** — player si `mediaKeyVideo` ; sinon « Démonstration vidéo à venir »
4. Contenu pédagogique F-005 (résumé → Placement → Déroulement → … → Prudence)

Fallback : si pas de vidéo → **pas** de player vide ; message calme (pas une erreur technique).

**Reduced motion :** pas d’autoplay — l’utilisateur contrôle toujours la lecture ; aucun comportement spécial complexe requis.

**Offline :** aucun cache vidéo (MVP-017) ; F-005 + F-007 restent l’expérience principale.

**Safari / iOS (validation manuelle à documenter côté PO) :** MP4 H.264, `playsInline`, `controls`, poster F-007, pas d’autoplay.

---

# 13. Tests prévus (implémentation future)

## Domaine / data

- `mediaKeyVideo` présent / null
- locator MP4 (pas PNG sources)
- liste published inchangée (3 mouvements)

## UI fiche

- player si média
- fallback si absent
- poster
- contrôles
- F-005 + F-007 toujours visibles
- erreur média (onError) → fallback calme

## Enrichissement F-013

- `movementIds` sur steps (si retenu)
- lien vers fiche
- séance sans mapping reste OK

## Régression

- F-004 / F-005 / F-007
- PracticePlayer texte
- PWA App Update (SW) intact
- aucun cache vidéo

## Manuel

- Safari iOS / PWA : lecture, `playsInline`, orientation
- Desktop / Mobile × Light / Dark

---

# 14. Gates

## 14.1 CODE READINESS

| Condition | État |
| --- | --- |
| Corpus F-005 / F-007 livrés | Oui |
| Modèle d’extension documenté | Oui (`mediaKeyVideo`) |
| UX fallback sans vidéo | Oui |
| Architecture stockage MVP | Oui (`public/video`) |
| Mapping F-013 minimal documenté | Oui |

**Décision CODE : READY FOR CODE**

L’application peut être développée avec player + fallback **avant** livraison des MP4 définitifs.

## 14.2 MEDIA PRODUCTION READINESS

| Condition | État |
| --- | --- |
| Source de mouvement fiable (vidéo humaine / mocap / pose) | **Non** — 0/3 |
| Pipeline VHS documenté | Oui (externe) |
| QC fidélité normatif | Oui (§4) |
| Clips MP4 produits | **Non** |

**Décision MEDIA : REFERENCE MOTION BLOCKED**

Production / publication pédagogique des vidéos **bloquée** jusqu’à obtention d’une source de mouvement fiable et approuvée pour chaque MV-00x.

## 14.3 Synthèse gate ticket

| Dimension | État |
| --- | --- |
| CODE READINESS | **READY FOR CODE** |
| MEDIA PRODUCTION READINESS | **REFERENCE MOTION BLOCKED** |

Les deux coexistent : développement UI/data autorisé avec médias absents ; **publication** F-006 « Livré » exige médias validés.

---

# 15. Périmètre / hors périmètre

## Dans MVP-012

- Player vidéo + fallback
- `mediaKeyVideo` (+ poster)
- Intégration fiche mouvement
- Enrichissement data SessionStep → Movement (minimal)
- Accès depuis pratique (lien / lecture légère)
- Docs / tests associés

## Hors périmètre

- Génération IA / appels VHS runtime
- CV / caméra (F-021/F-022)
- Mei interactive (F-023)
- Cache offline / MVP-017
- Packs F-026
- Parcours F-003 (MVP-013)
- F-013 complet (MVP-015)
- Object Storage / Supabase médias (sauf décision ultérieure)
- Multi-angles systématiques
- Invention de nouveaux mouvements

---

# 16. Definition of Done

- [x] Infra F-006 : player + `mediaKeyVideo` + fallback
- [x] Pause / reprise lecture (controls natifs ; pas d’autoplay)
- [x] Fallback sans vidéo (pas d’erreur bloquante)
- [x] F-005 + F-007 toujours présents
- [x] Enrichissement F-013 minimal (`movementIds` + liens)
- [x] Statut « player prêt / médias absents » documenté (**0** MP4)
- [ ] MP4 H.264 validés pour MV-001…003 (MEDIA BLOCKED)
- [ ] QC fidélité passé avant publication média
- [x] Build / tsc / ESLint / Vitest (à confirmer en CI locale)
- [ ] Validation Safari iOS manuelle (checklist PO)
- [x] Runtime synchronisé ; MVP-013 non ouvert
- [x] Aucune dépendance runtime VHS
- [ ] Validation PO + clôture ticket

---

# 17. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (8 août 2026) |
| Audit contenu / code | **Fait** |
| Pipeline production documenté | **Fait** |
| Brief production MV-001…003 | **Fait** (PO — 9 août 2026) |
| MotionReferenceSpec modèle §8.0 | **Fait** — contrat conceptuel |
| MotionReferenceSpec MV-001 | **DRAFT** `0.1.0-draft` — §8.1 |
| MotionReferenceSpec MV-002 | **DRAFT** `0.1.0-draft` — §8.2 |
| MotionReferenceSpec MV-003 | **DRAFT** `0.1.0-draft` — §8.3 |
| Réf. pédagogique externe TCHI / Dr Paul Lam | **CANDIDATE** — non embarquée ; n’approuve pas REFERENCE MOTION |
| Sources de mouvement dynamiques approuvées | **Absentes** — REFERENCE MOTION BLOCKED |
| MP4 | **0** — MEDIA BLOCKED |
| GATE 10 | **BLOCKED** |
| Implémentation code | **Livré (code)** — commit `0e19f1b` ; attente média |
| Production vidéos | **Interdite** tant que référence dynamique absente / 0 MP4 |
| Clôture | **Non** — ticket reste ouvert |

---

*Fin du ticket MVP-012 (Livré code / MEDIA REFERENCE MOTION BLOCKED / attente média — non fermé).*
