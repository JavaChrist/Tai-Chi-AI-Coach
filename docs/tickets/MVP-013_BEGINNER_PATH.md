# MVP-013_BEGINNER_PATH

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Fermé** (GO — 8 août 2026 — validation PO — commit `c3b4a98`)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-013_BEGINNER_PATH.md`
> Dépend de :
> - MVP-003_CURRICULUM_LIBRARY (Fermé — séances structurelles F-013)
> - MVP-009_SAFETY_WARNINGS (Fermé — F-016 / F-031)
> - MVP-010_PRESENTATION_AND_STYLES (Fermé — F-001)
> - MVP-011_MOVEMENTS_LIBRARY (Fermé — `e8eebff` — F-004 / F-005 / F-007)
> - MVP-012_PEDAGOGICAL_VIDEOS (Ouvert — infra F-006 ; **MEDIA BLOCKED** ; mapping SessionStep → Movement)
> - `docs/05_FEATURES.md` (F-003)
> - `docs/08_TAI_CHI_CURRICULUM.md` §5, §16, §27.7–27.8
> - `docs/12_UX_UI.md` / `12A` / `12B`
> - `docs/14_DATA_MODEL.md`
> - `docs/25_DESIGN_FREEZE.md`

---

# 1. Objectif

Cadrer puis livrer (développement **ultérieur**, hors de cette ouverture) :

- **F-003** — Parcours débutant structuré

But produit : répondre à « par où commencer ? » et « quoi faire ensuite ? » via une **séquence ordonnée** de séances existantes, avec charge progressive, sans compétition, sans verrouillage artificiel, et **sans dépendre** des vidéos F-006 (MVP-012 MEDIA BLOCKED).

**Phase actuelle : code livré (attente PO).** Route `/parcours/debutant` ; `BeginnerPath` local ; aucune progression utilisateur ; indépendant F-006 MEDIA BLOCKED.

---

# 2. Documents de référence

- `docs/02_PRODUCT_SCOPE.md` (F-003)
- `docs/03_PERSONAS.md` / `docs/04_USER_JOURNEYS.md` (P-003 dominant)
- `docs/05_FEATURES.md` §6.3
- `docs/07_CONTENT_STRATEGY.md`
- `docs/08_TAI_CHI_CURRICULUM.md`
- `docs/12_UX_UI.md`, `12A`, `12B`
- `docs/14_DATA_MODEL.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/20_TESTS.md` / stratégie tests
- `docs/22_ROADMAP.md`
- `docs/24_DEVELOPER_HANDOVER.md`
- Tickets MVP-011, MVP-012
- Runtime : `00`, `02`, `03`, `11`

---

# 3. Définition officielle F-003

| Champ | Valeur |
| --- | --- |
| Identifiant | F-003 |
| Nom | Parcours débutant |
| Version cible | MVP |
| Priorité | P0 (Must — progression réelle) |
| Objectif | Proposer une progression structurée pour démarrer |
| Objectif utilisateur | Savoir par où commencer et quoi faire ensuite |
| Description | Séquence ordonnée de leçons / mouvements / séances pour un débutant, ordre clair, charge progressive |
| Personas | P-001, P-002, **P-003** (dominant), P-005 ; P-004 n’en dépend pas pour réviser |
| Dépendances produit | F-001, F-004, F-016 (**toutes Livré**) |
| Règles métier (`05`) | Prochaine étape toujours identifiable ; répétition autorisée ; pas de compétition |
| Acceptation (`05`) | Entrer dans un parcours ordonné ; identifier l’étape suivante ; revenir sur une étape déjà vue |
| Limites | Nombre exact de mouvements non figé dans `05` ; corpus MVP Initiation = MV-001…003 (`08` §27) |
| Évolutions | Branches thématiques via F-035 (V2) — hors MVP-013 |

---

# 4. Audit — corpus disponible

## 4.1 Mouvements (validés PO — MVP-011)

| ID | Slug | Titre | Rôle pédagogique |
| --- | --- | --- | --- |
| MV-001 | `posture-de-depart` | Posture de départ | Fondation stable avant de bouger |
| MV-002 | `transfert-poids-lateral` | Transfert de poids latéral | Passage progressif du poids |
| MV-003 | `pas-avant-controle` | Pas avant contrôlé | Déplacement contrôlé du pied |

Ordre Initiation documenté (`08` §27.8) : **MV-001 → MV-002 → MV-003**.

Contenu F-005 + images F-007 : **livrés**.
`mediaKeyVideo` : **null** (MVP-012 MEDIA BLOCKED) — non bloquant pour F-003.

## 4.2 Séances locales (MVP-003 / enrichies MVP-012)

| ID | Titre | Phase | Difficulté | Durée | Placeholder | `movementIds` (code actuel) |
| --- | --- | --- | --- | --- | --- | --- |
| `st-decouverte-premiere-courte` | Première séance courte | decouverte | decouverte | 8 min | oui | corps → MV-001 |
| `st-initiation-rituel-base` | Rituel de séance débutant | initiation | debutant | 12 min | oui | corps → MV-001, MV-002 |
| `st-progression-liaison-legere` | Séance avec liaison légère | progression | progression | 15 min | oui | liaison → MV-002, MV-003 |

Les 3 séances restent `isStructuralPlaceholder: true` (structure pédagogique, pas leçon de style figée).

## 4.3 Mapping séances ↔ mouvements vs `08` §27.7

| Séance | `08` §27.7 | Code MVP-012 | Cohérence |
| --- | --- | --- | --- |
| Découverte | Optionnel MV-001 | MV-001 sur corps | **OK** |
| Initiation | MV-001 puis MV-002 (MV-003 selon charge) | MV-001, MV-002 | **OK** (MV-003 non forcé — conforme « selon charge ») |
| Progression | Liaison MV-002 / MV-003 déjà connus | MV-002, MV-003 sur liaison | **OK** |

**Verdict mapping :** suffisant pour F-003 MVP ; **ne pas modifier** le mapping dans cette ouverture. Renforcement éventuel (ex. afficher MV-003 aussi en Initiation) = décision PO ultérieure, non requise pour ouvrir le code.

## 4.4 Corpus suffisant pour F-003 ?

| Critère | État |
| --- | --- |
| Ordre pédagogique phase Découverte → Initiation → début Progression | **Oui** (3 séances) |
| Fondations mouvements MV-001…003 | **Oui** (validés PO) |
| Charge progressive (durée / complexité) | **Oui** (8 → 12 → 15 min ; MV-001 → +MV-002 → liaison MV-002/003) |
| Textes mouvements F-005 + F-007 | **Oui** |
| Vidéos F-006 | **Non** — non requis |
| Séances non-placeholder / style figé | **Non** — structurelles uniquement |
| Entité Lesson / Program dédiée | **Absente** — non requise pour le MVP minimal |

**Décision d’ouverture :** le corpus **suffit** pour un parcours débutant MVP **consultable et ordonné** fondé sur les 3 séances + 3 mouvements existants.

Ce n’est **pas** un cursus complet ni une forme Tai Chi. C’est le parcours minimal « par où commencer » aligné `08` MVP (Découverte + Initiation + début Progression).

Risque produit à documenter : les séances restent structurelles — le parcours orchestre l’existant, il n’invente pas de nouvelles leçons.

---

# 5. Modèle de données recommandé

## 5.1 État actuel

- `Curriculum` + `CurriculumPhase` + `SessionTemplate` + `SessionStep.movementIds?`
- `Movement` / catalogue
- **Aucune** entité `BeginnerPath` / `CurriculumPath` / `Program` en TypeScript
- `Program` dans `14` = surtout **F-008** (quotidien) — **ne pas détourner** pour F-003

## 5.2 Recommandation MVP-013

Introduire une **structure locale minimale** (pas de base de données) du type :

```text
BeginnerPath (ou CurriculumPath — nom exact à figer en implémentation)
  id                 // ex. "path-debutant-mvp"
  title              // "Parcours débutant"
  description        // courte, non médicale
  orderedSessionIds  // [
                     //   "st-decouverte-premiere-courte",
                     //   "st-initiation-rituel-base",
                     //   "st-progression-liaison-legere"
                     // ]
  publicationStatus  // "published"
  contentVersion
  locale             // "fr"
```

**Justification :** les docs exigent un parcours **nommé et ordonné** identifiable (F-003), distinct d’une simple liste de séances triée par préférences (comportement Accueil actuel).
`orderedSessionIds` évite les chaînes opaques dispersées et permet la validation d’intégrité (IDs séances existants).

**Non retenu MVP-013 (sans justification doc suffisante) :**

- `locked` / `unlockRules` / scores
- `completedStepIds` path persistés
- `Prerequisite` graph complet
- duplication des contenus Movement / Session
- `Program` F-008

**Alternative acceptable :** dériver l’ordre uniquement de `curriculumPhaseKey` + `sortOrder` des séances publiées **si** le produit accepte qu’il n’y ait qu’un seul parcours = « toutes les séances dans l’ordre des phases ». La structure `BeginnerPath` reste préférable pour un titre / description / surface produit stables.

## 5.3 Persistance aujourd’hui (audit code)

| Donnée | Disponible | Usage F-003 MVP-013 |
| --- | --- | --- |
| `PracticeRecord[]` (historique séances) | Oui (`progress.v1`) | Optionnel : indiquer « déjà pratiquée » **sans** inventer un historique de parcours |
| Position dans un path | **Non** | Report MVP-015 / F-010 / F-032 |
| Reprise persistante séance | **Non** (mémoire de page) | Report MVP-015 / F-032 |
| `preferredLevel` onboarding | Oui | Ne constitue **pas** une inscription au parcours |
| Stats carnet | Oui | Hors orchestration F-003 |

---

# 6. UX recommandée

## 6.1 Rôles

| Surface | Rôle |
| --- | --- |
| Parcours F-003 | Ordre pédagogique visible ; prochaine étape ; accès séances |
| Bibliothèque séances | Catalogue complet (hors flux linéaire) |
| Fiches mouvements | Révision F-005 / F-007 (+ F-006 si média) |
| PracticePlayer | Exécution séance (inchangé structurellement) |
| Accueil | CTA vers le parcours **ou** prochaine étape |

## 6.2 Route

| Choix | Décision |
| --- | --- |
| Route dédiée | **Oui** — recommandée : `/parcours` ou `/parcours/debutant` |
| Nouvel item bottom nav | **Non** — non documenté (`12` : 5 items figés) |
| Accès Accueil | **Oui** — CTA « Parcours débutant » / « Continuer » |
| Accès Séances / Bibliothèque | **Oui** — lien discret vers le parcours |
| Accès Découverte (`/decouverte`) | **Oui** — prochaine action après F-001 (déjà prévu journeys) |

## 6.3 Écran parcours (minimal)

1. Titre + courte description
2. Liste ordonnée des **3 étapes** (séances) :
   - numéro / libellé d’étape
   - titre de séance
   - phase / durée indicatives
   - mouvements associés (liens fiches) — optionnel mais cohérent avec mapping
   - CTA « Voir la séance » / « Pratiquer »
3. Indication de **prochaine étape** (par défaut : première non encore pratiquée selon historique local **ou** étape 1 si aucune pratique) — **sans** verrouillage
4. Toutes les étapes restent **accessibles** (répétition autorisée ; `07`/`08` : pas de saut des fondations **comme conseil**, pas comme hard-lock UI)

## 6.4 Verrouillage

**Pas de verrouillage artificiel** dans MVP-013.

- Fondations d’abord = **ordre recommandé / mis en avant**, pas cadenas.
- Aucun statut uniquement couleur/icône : libellés textuels (« Étape 1 », « Prochaine étape », « Déjà pratiquée » si dérivé de l’historique).

## 6.5 Hero

Aucune ligne Hero « Parcours » dans `12A`/`12B`.

**Recommandation :** `hero-morning` (ouverture calme / entrée — cohérent Accueil / onboarding)
**Alternative acceptable :** `hero-bamboo` (invitation / découverte).

Un seul Hero dominant ; réutiliser `PageEnvironment` / `HeroBackdrop` / `ContentLayout` / `.surface-card` ; **aucun nouvel asset**.

---

# 7. Progression — frontière MVP-013 vs MVP-015

## 7.1 Autorisé dans MVP-013

- Parcours structuré **consultable**
- Ordre pédagogique **visible**
- Accès aux séances et (optionnel) mouvements
- « Prochaine étape » déterministe simple (ordre + éventuellement historique séances existant)
- Répétition libre d’une étape
- Indépendance totale des vidéos

## 7.2 Explicitement reporté à MVP-015

MVP-015 = F-009 + F-010 + F-032 + F-013 (complet) :

- Progression parcours persistante riche (F-010 branché sur F-003)
- Reprise persistante séance / parcours (F-032)
- Historique avancé / séances « complètes »
- Tout faux historique ou barre de % inventée

**Ne pas anticiper** UserProgress path / `resume_path_step` dans MVP-013.

---

# 8. Indépendance MVP-012 / médias

| Élément | Rôle pour F-003 |
| --- | --- |
| F-005 + F-007 | **Suffisants** pour comprendre un mouvement |
| F-006 | Enrichissement **ultérieur** quand MP4 validés |
| MEDIA BLOCKED | **Ne bloque pas** MVP-013 |

Le parcours ne doit **jamais** exiger `mediaKeyVideo`.
Fallback vidéo existant sur fiches mouvements : inchangé.

MVP-012 reste **ouvert / MEDIA BLOCKED** en parallèle ; ce ticket **ne le ferme pas** et **ne le modifie pas**.

---

# 9. Accessibilité

- Structure sémantique : `h1` parcours ; liste ordonnée (`ol`) des étapes
- Ordre lisible sans couleur seule
- Focus clavier sur liens / CTA
- Libellés d’étapes explicites (« Étape 1 — Première séance courte »)
- Statuts textuels (« Prochaine étape », « Déjà pratiquée »)
- Pas de verrouillage représenté uniquement par icône/couleur
- Lien prudence F-016 accessible depuis le parcours ou les séances (déjà en place côté pratique)

---

# 10. Offline

MVP-017 non ouvert.

Comportement attendu avec données **locales actuelles** : parcours et séances embarqués (comme curriculum / mouvements) restent disponibles online-first actuel ; **aucun** cache offline supplémentaire dans MVP-013.

---

# 11. Périmètre / hors périmètre

## Dans MVP-013

- Ticket + Runtime (cette ouverture)
- Implémentation ultérieure : `BeginnerPath` (ou équivalent) + UI parcours
- Ordre des 3 séances
- CTA Accueil / liens navigation (sans nouvel item bottom nav)
- Liens séances (+ mouvements associés si léger)
- Tests associés
- Indépendance F-006

## Hors périmètre

- Production / intégration vidéos (MVP-012 média)
- Modification du mapping SessionStep → Movement
- F-008 programme quotidien (MVP-014)
- F-014 / F-015 respiration / relaxation (MVP-014)
- F-009 / F-010 / F-032 complets (MVP-015)
- F-035 parcours thématiques (V2)
- Auth / sync / IA / CV / Mei
- Nouveaux mouvements ou séances inventés
- Nouvel asset Hero
- Offline / SW cache (MVP-017)
- Fermeture de MVP-012

---

# 12. Critères d’acceptation (implémentation future)

- [ ] L’utilisateur peut ouvrir un parcours débutant ordonné (3 étapes)
- [ ] L’étape suivante est identifiable
- [ ] L’utilisateur peut ouvrir / répéter une étape déjà vue
- [ ] Accès aux fiches séances correspondantes
- [ ] Aucun verrouillage artificiel
- [ ] Aucune dépendance aux MP4
- [ ] F-005 / F-007 restent accessibles depuis les mouvements liés
- [ ] Bottom nav inchangée (5 items)
- [ ] Hero existant uniquement
- [ ] Build / tsc / ESLint / Vitest OK
- [ ] MVP-012 toujours suivi comme ouvert / MEDIA BLOCKED
- [ ] MVP-014 / MVP-015 non ouverts ici

---

# 13. Tests prévus (implémentation future)

## Domaine / data

- `orderedSessionIds` = Découverte → Initiation → Progression
- IDs séances existants ; aucune référence cassée
- Intégrité movements liés (via mapping existant)

## UI parcours

- Ordre des 3 étapes
- Libellés / prochaine étape
- Liens séances
- Liens mouvements (si affichés)
- Absence de cadenas / hard-lock
- Comportement sans vidéo (pas d’erreur)

## Navigation

- Route dédiée
- CTA Accueil
- Pas de nouvel item bottom nav

## Accessibilité

- Liste ordonnée sémantique
- Statuts textuels
- Clavier / focus

## Régression

- Bibliothèque séances / mouvements
- PracticePlayer + gate F-031
- Mapping MVP-012
- PWA App Update
- Onboarding / Accueil existants

## Manuel

- Desktop / Mobile × Light / Dark
- Parcours avec et sans historique de pratique local

---

# 14. Validations visuelles (implémentation future)

- Écran parcours Desktop Light / Dark
- Écran parcours Mobile Light / Dark
- Accueil avec CTA parcours
- Étape « prochaine » vs « déjà pratiquée » (si affiché)

---

# 15. Gates

## 15.1 CODE READINESS

| Condition | État |
| --- | --- |
| F-001 / F-004 / F-016 livrés | Oui |
| Corpus MV-001…003 + F-005 / F-007 | Oui |
| 3 séances phases Découverte / Initiation / Progression | Oui |
| Mapping SessionStep → Movement cohérent `08` §27.7 | Oui (MVP-012) |
| Modèle minimal documenté | Oui (`BeginnerPath` local) |
| UX sans nouvel item nav | Oui |
| Indépendance médias F-006 | Oui |
| Progression persistante path | Non requise (→ MVP-015) |

**Décision CODE : READY FOR CODE**

L’application peut être développée avec le corpus et les séances actuels, sans attendre les MP4 ni MVP-015.

## 15.2 CONTENT / DEPENDENCY

| Dimension | État |
| --- | --- |
| CONTENT | **Non bloqué** pour le parcours minimal (séances structurelles acceptées comme socle MVP, comme F-013) |
| MEDIA (F-006) | Bloqué pour les vidéos — **hors dépendance F-003** |
| MVP-015 | Non bloquant pour le parcours consultable |

## 15.3 Synthèse gate ticket

| Dimension | État |
| --- | --- |
| CODE READINESS | **READY FOR CODE** |
| Blocage média MVP-012 | Parallèle — n’empêche pas F-003 |
| Séances placeholder | Risque produit accepté / documenté — pas CONTENT BLOCKED |

---

# 16. Definition of Done

- [x] F-003 : parcours ordonné accessible
- [x] Prochaine étape identifiable
- [x] Répétition possible
- [x] Pas de verrouillage artificiel
- [x] Pas de dépendance vidéo
- [x] Tests + validations OK (116/116 ; Build / tsc / ESLint)
- [x] Runtime synchronisé
- [x] MVP-012 non fermé par erreur (reste MEDIA BLOCKED)
- [x] MVP-014 / MVP-015 non ouverts
- [x] Validation PO + clôture ticket

---

# 17. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (8 août 2026) |
| Audit docs / code | **Fait** |
| Corpus / mapping audités | **Fait** |
| Gate CODE READY | **Décidé** |
| Implémentation code | **Livrée** — validée PO |
| Validation PO visuelle | **Fait** — Desktop/Mobile × Light/Dark |
| Clôture | **Fermé** — commit `c3b4a98` |

---

*Fin du ticket MVP-013 (Fermé — MVP-012 reste MEDIA BLOCKED / REFERENCE MOTION BLOCKED).*
