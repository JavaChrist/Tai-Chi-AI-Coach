# 02 — Feature Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Feature Status |
| Fichier | `docs/runtime/02_FEATURE_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 9 août 2026 — MVP-016 Fermé ; F-028/F-029/F-033 Livré |
| Responsable documentaire | Projet Tai-Chi-AI-Coach |
| Type | Runtime Register — état réel des fonctionnalités |
| Référence conception | `docs/05_FEATURES.md` (catalogue figé — intention, non recopié comme livré) |

> Ce registre décrit uniquement l’état **réel** d’implémentation des `F-xxx`.
> Aucune fonctionnalité n’est marquée avancée sans validation réelle.

## 2. Synthèse

| Indicateur | Valeur réelle |
| --- | --- |
| Total des fonctionnalités | **41** (`F-001` … `F-041`) |
| Terminées (Validé / Livré) | **18** (`F-001`, `F-002`, `F-003`, `F-004`, `F-005`, `F-007`, `F-008`, `F-009`, `F-010`, `F-013`, `F-014`, `F-015`, `F-016`, `F-028`, `F-029`, `F-031`, `F-032`, `F-033`) |
| En cours (En développement / En test) | **1** (`F-006`) |
| Restantes (Non commencé) | **22** |

### Répartition par version cible (conception)

| Version cible | Nombre | Statut d’implémentation |
| --- | --- | --- |
| Pré-MVP | 2 | **2 livré** (`F-016`, `F-031`) |
| MVP | 17 | 16 livré (`F-001`, `F-002`, `F-003`, `F-004`, `F-005`, `F-007`, `F-008`, `F-009`, `F-010`, `F-013`, `F-014`, `F-015`, `F-028`, `F-029`, `F-032`, `F-033`) / 1 en cours (`F-006`) / 0 non commencés MVP restants hors backlog ticket |
| V1 | 10 | 0 livré / 10 non commencés |
| V2 | 7 | 0 livré / 7 non commencés |
| V3 | 2 | 0 livré / 2 non commencés |
| Backlog | 3 | 0 livré / 3 non commencés |

Versions cibles selon matrice `05` §9. Socle Frontend + Design System + fondation curriculum/séances (MVP-001…003).

## 3. Catalogue — état réel

Statuts autorisés : Non commencé · En développement · En test · Validé · Livré.

| ID | Nom | Version cible | Statut | Ticket | Dernière MAJ | Remarques |
| --- | --- | --- | --- | --- | --- | --- |
| F-001 | Présentation du Tai Chi | MVP | Livré | MVP-010 | 7 août 2026 | Page `/decouverte` ; Hero `mountain` ; non médical ; validé PO |
| F-002 | Découverte des styles | MVP | Livré | MVP-010 | 7 août 2026 | Section légère `/decouverte` ; Yang/Chen/Wu/Sun ; aucun choix obligatoire ; validé PO |
| F-003 | Parcours débutant | MVP | Livré | MVP-013 | 8 août 2026 | `/parcours/debutant` ; Hero morning ; Découverte → Initiation → Progression ; MV-001…003 ; accès Accueil/Découverte/Séances ; pas de progression artificielle ; validé PO |
| F-004 | Bibliothèque des mouvements | MVP | Livré | MVP-011 | 8 août 2026 | `/bibliotheque/mouvements` ; MV-001…003 ; Hero bamboo ; validé PO |
| F-005 | Explication détaillée d’un mouvement | MVP | Livré | MVP-011 | 8 août 2026 | Fiches `/bibliotheque/mouvements/[slug]` ; contenu `08` §27 ; validé PO |
| F-006 | Vidéo pédagogique | MVP | En test | MVP-012 | 8 août 2026 | Infra player + `mediaKeyVideo` ; fallback sans MP4 ; **0** fichier vidéo ; MEDIA REFERENCE MOTION BLOCKED ; attente média |
| F-007 | Images de référence | MVP | Livré | MVP-011 | 8 août 2026 | WebP F-007 768×1280 ; fallback sans média ; validé PO |
| F-008 | Programme quotidien | MVP | Livré | MVP-014 | 9 août 2026 | Accueil « Séance du jour » ; `resolveDailyProgram` déterministe local ; pool BeginnerPath ; ignorable ; validé PO |
| F-009 | Historique | MVP | Livré | MVP-015 | 9 août 2026 | `PracticeRecord` + FIFO 200 ; `/progression` ; Accueil « Refaire » ; pas de sync ; pas F-024 ; validé PO |
| F-010 | Progression | MVP | Livré | MVP-015 | 9 août 2026 | `ProgressSummary` calculé ; BeginnerPath enrichi ; stats sobres ; pas de gamification / streak / XP ; validé PO |
| F-011 | Favoris | V1 | Non commencé | — | — | — |
| F-012 | Recherche | V1 | Non commencé | — | — | — |
| F-013 | Séances guidées | MVP | Livré | MVP-015 / MVP-012 | 9 août 2026 | Lifecycle local complet (pratique + historique + reprise) ; médias PracticePlayer = MVP-012 MEDIA BLOCKED (hors Livré médias) ; validé PO |
| F-014 | Exercices de respiration | MVP | Livré | MVP-014 | 9 août 2026 | `/respiration` ; Respiration calme (`08` §28.1) ; Hero mist ; texte seul ; non médical ; validé PO |
| F-015 | Relaxation | MVP | Livré | MVP-014 | 9 août 2026 | Steps `retour` enrichis (3 séances) ; PracticePlayer inchangé ; non médical ; validé PO |
| F-016 | Conseils de sécurité | Pré-MVP | Livré | MVP-009 | 7 août 2026 | Page `/conseils-de-securite` + lien Profil ; Hero `mountain` ; contenu non médical ; validé PO |
| F-017 | Notifications | V1 | Non commencé | — | — | — |
| F-018 | Objectifs personnels | V1 | Non commencé | — | — | — |
| F-019 | Assistant IA | V1 | Non commencé | — | — | — |
| F-020 | Questions / Réponses | V1 | Non commencé | — | — | — |
| F-021 | Analyse caméra | V2 | Non commencé | — | — | — |
| F-022 | Corrections de posture | V2 | Non commencé | — | — | — |
| F-023 | Professeurs virtuels | V2 | Non commencé | — | — | — |
| F-024 | Statistiques | V1 | Non commencé | — | — | — |
| F-025 | Contenus Premium | V2 | Non commencé | — | — | — |
| F-026 | Téléchargement hors ligne | V2 | Non commencé | — | — | — |
| F-027 | Synchronisation multi-appareils | V1 | Non commencé | — | — | — |
| F-028 | Paramètres | MVP | Livré | MVP-016 / MVP-007 | 9 août 2026 | `/profil` Pref/Info/Action ; thème light/dark/system ; pratique ; reduceMotion ; pas `/parametres` ; pas d’auth / sync ; validé PO |
| F-029 | Accessibilité | MVP | Livré | MVP-016 / MVP-007 | 9 août 2026 | Skip link ; Switch touch ≥44px ; reduceMotion réel ; TD-001 fermée ; utilitaire `.z-dropdown` ; pas de préférence taille texte / contraste renforcé ; validé PO |
| F-030 | Export utilisateur | V1 | Non commencé | — | — | — |
| F-031 | Avertissements avant pratique | Pré-MVP | Livré | MVP-009 | 7 août 2026 | Gate pré-pratique `/pratique/...` ; Hero `morning` ; lien F-016 ; validé PO |
| F-032 | Reprise de séance | MVP | Livré | MVP-015 | 9 août 2026 | `PracticeResumeState` localStorage ; hydrate post F-031 ; Accueil « Reprendre » = vraie reprise ; pagehide / step / pause ; validé PO |
| F-033 | Première découverte guidée | MVP | Livré | MVP-016 / MVP-008 | 9 août 2026 | Onboarding 5 étapes ; CTA secondaire BeginnerPath ; complete→`/decouverte` ; skip→`/bibliotheque` ; relance Profil ; pas Mei/caméra ; validé PO |
| F-034 | Personnalisation avancée | V2 | Non commencé | — | — | — |
| F-035 | Programmes adaptés | V2 | Non commencé | — | — | — |
| F-036 | Moteur de coaching réutilisable | V3 | Non commencé | — | — | — |
| F-037 | Plusieurs disciplines douces | V3 | Non commencé | — | — | — |
| F-038 | Méditation guidée élargie | Backlog | Non commencé | — | — | — |
| F-039 | Compte utilisateur | V1 | Non commencé | — | — | — |
| F-040 | Partenariats écoles / professeurs | Backlog | Non commencé | — | — | — |
| F-041 | Mode hors ligne partiel minimal | Backlog | Non commencé | — | — | — |

## 4. MVP — focus

| Indicateur MVP | Valeur |
| --- | --- |
| Features MVP (+ Pré-MVP héritées) | 19 (`17` MVP + `2` Pré-MVP) |
| Livrées / validées | 18 (`F-001`, `F-002`, `F-003`, `F-004`, `F-005`, `F-007`, `F-008`, `F-009`, `F-010`, `F-013`, `F-014`, `F-015`, `F-016`, `F-028`, `F-029`, `F-031`, `F-032`, `F-033`) |
| En cours | 1 (`F-006`) |
| Non commencées | 0 |

## 5. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création initiale — 41 fonctionnalités catalogue ; toutes **Non commencé** ; aucun ticket. |
| 5 août 2026 | MVP-001 livré (App Shell) — **aucune** `F-xxx` passée à En développement / Validé / Livré (hors périmètre du ticket). |
| 5 août 2026 | MVP-002 livré (Design System & UI Foundation) — **aucune** `F-xxx` passée à En développement / Validé / Livré (hors périmètre du ticket). |
| 5 août 2026 | MVP-003 : `F-013` → **En développement** (fondation catalogue + fiche) ; démarrage guidé hors périmètre ; `F-004` inchangé. |
| 5 août 2026 | MVP-004 : fondation assets / manifeste — **aucune** `F-xxx` modifiée (hors périmètre métier ; Mei/V2 non activée ; Offline non livré). |
| 5 août 2026 | MVP-005 : `F-013` → **En test** ; `F-032` → **En développement** (pause/reprise locale) ; bilan non persistant. |
| 5 août 2026 | MVP-006 : `F-009` / `F-010` → **En développement** ; historique + stats localStorage ; `F-024` inchangé (V1). |
| 5 août 2026 | MVP-007 : `F-028` / `F-029` → **En développement** ; préférences locales + `/profil` ; pas de sync. |
| 5 août 2026 | MVP-008 : `F-033` → **En développement** ; onboarding local + reprise + skip ; pas Mei/caméra. |
| 6 août 2026 | MVP-008A : **aucune** `F-xxx` créée ni passée Validé/Livré — refonte présentation 12A uniquement (CH-009). |
| 6 août 2026 | MVP-008B Sprint 3 : **aucune** `F-xxx` créée ni modifiée — Hero Light présentation seule (CH-010) ; ticket reste ouvert (Dark). |
| 7 août 2026 | MVP-008B Sprint Dark : **aucune** `F-xxx` créée ni modifiée — Hero Dark présentation seule (CH-011). |
| 7 août 2026 | MVP-008B **fermé** ; roadmap tickets MVP-009→018 officialisée — **aucune** `F-xxx` modifiée (F-016 / F-031 restent Non commencé jusqu’à MVP-009). |
| 7 août 2026 | MVP-009 : `F-016` / `F-031` → **En test** ; conseils consultables + gate pré-pratique ; CH-012 ; clôture Git en attente PO. |
| 7 août 2026 | MVP-009 **fermé** (validation PO) ; `F-016` / `F-031` → **Livré** ; CH-012 clôturé. |
| 7 août 2026 | MVP-010 **ouvert** (cadrage) ; `F-001` / `F-002` restent **Non commencé** (pré-développement documentaire) ; aucune implémentation. |
| 7 août 2026 | MVP-010 code : `F-001` / `F-002` → **En test** ; `/decouverte` ; CH-013 ; clôture Git en attente PO. |
| 7 août 2026 | MVP-010 **fermé** (validation PO) ; `F-001` / `F-002` → **Livré** ; CH-013 clôturé. |
| 7 août 2026 | MVP-011 **ouvert** (cadrage) ; `F-004` / `F-005` / `F-007` restent **Non commencé** (pré-développement documentaire) ; inventaire : 0 mouvement / 0 image F-007 ; aucune implémentation. |
| 7 août 2026 | MVP-011 corpus **MV-001…003** validé PO → `docs/08` §27 ; F-005 doc OK ; F-007 **ASSET BLOCKED** (3 images absentes) ; aucun code. |
| 8 août 2026 | MVP-011 F-007 : 3 WebP réels 768×1280 livrés ; référence Mei tenue documentée ; gate **READY FOR CODE** ; aucun code. |
| 8 août 2026 | MVP-011 code : `F-004` / `F-005` / `F-007` → **En test** ; CH-015 ; attente validation PO ; MVP-012 non ouvert. |
| 8 août 2026 | MVP-011 **fermé** (validation PO) ; `F-004` / `F-005` / `F-007` → **Livré** ; CH-015 clôturé ; MVP-012 non ouvert. |
| 8 août 2026 | MVP-012 **ouvert** (cadrage) ; `F-006` reste **Non commencé** (pré-dev documentaire) ; enrichissement F-013 cadragé ; aucun code. |
| 8 août 2026 | MVP-012 code : `F-006` → **En test** ; enrichissement F-013 mapping livré (pas Livré global) ; **0** MP4 ; MEDIA BLOCKED ; ticket **non fermé**. |
| 8 août 2026 | Correctif UX F-031 (CH-016) — rappel pré-pratique court ; F-016 intact ; MVP-009 reste fermé. |
| 8 août 2026 | MVP-013 **ouvert** (cadrage F-003) ; `F-003` reste **Non commencé** (pré-dev documentaire) ; CODE READY ; MVP-012 reste MEDIA BLOCKED ; aucun code. |
| 8 août 2026 | MVP-013 code : `F-003` → **En test** ; `/parcours/debutant` ; ticket **non fermé** ; MVP-012 MEDIA BLOCKED ; MVP-014/015 non ouverts. |
| 8 août 2026 | MVP-013 **fermé** (validation PO) ; `F-003` → **Livré** ; CH-017 ; MVP-012 reste MEDIA BLOCKED ; MVP-014 non ouvert. |
| 8 août 2026 | MVP-014 **ouvert** (cadrage) ; `F-008` / `F-014` / `F-015` restent **Non commencé** (pré-dev documentaire) ; aucun code ; MVP-015 non ouvert. |
| 8 août 2026 | MVP-014 code partiel : `F-008` / `F-015` → **En test** ; `F-014` reste **Non commencé** / CONTENT BLOCKED ; ticket **non fermé** ; MVP-015 non ouvert. |
| 9 août 2026 | MVP-014 F-014 : corpus `08` §28.1 ; `F-014` → **En test** ; CONTENT BLOCKED levé ; ticket **non fermé** ; MVP-015 non ouvert. |
| 9 août 2026 | MVP-014 **fermé** (validation PO) ; `F-008` / `F-014` / `F-015` → **Livré** ; CH-018 ; MVP-012 MEDIA BLOCKED ; MVP-015 non ouvert. |
| 9 août 2026 | MVP-015 **ouvert** (cadrage) ; F-009/F-010/F-032 → ticket MVP-015 ; F-013 finalisation lifecycle ; aucun code ; MVP-012 MEDIA BLOCKED. |
| 9 août 2026 | MVP-015 **Livré (code)** ; PO-A…G validées ; `F-009`/`F-010`/`F-032`/`F-013` → **En test** ; attente PO ; MVP-012 MEDIA BLOCKED ; MVP-016 non ouvert. |
| 9 août 2026 | MVP-015 **fermé** (validation PO) ; `F-009` / `F-010` / `F-032` / `F-013` → **Livré** ; CH-019 ; MVP-012 MEDIA BLOCKED ; MVP-016 non ouvert. |
| 9 août 2026 | MVP-016 **ouvert** (cadrage) ; `F-028` / `F-029` / `F-033` restent **En développement** ; DESIGN DECISION REQUIRED ; aucun code ; MVP-012 MEDIA BLOCKED ; MVP-017 non ouvert. |
| 9 août 2026 | MVP-016 **Livré (code)** ; PO-A…F validées ; `F-028` / `F-029` / `F-033` → **En test** ; TD-001 fermée ; attente PO ; MVP-012 MEDIA BLOCKED ; MVP-017 non ouvert. |
| 9 août 2026 | MVP-016 **fermé** (validation PO) ; `F-028` / `F-029` / `F-033` → **Livré** ; CH-020 ; MVP-012 MEDIA BLOCKED ; MVP-017 non ouvert. |

## 6. Diagrammes

### 6.1 Avancement MVP

```mermaid
pie title MVP + Pré-MVP — état réel
  "Non commencé" : 0
  "En test" : 1
  "Livré / validé" : 18
```

### 6.2 Répartition des versions

```mermaid
pie title Catalogue F-xxx par version cible
  "Pré-MVP" : 2
  "MVP" : 17
  "V1" : 10
  "V2" : 7
  "V3" : 2
  "Backlog" : 3
```

### 6.3 Progression globale

```mermaid
flowchart LR
  A[41 Non commencé] --> B[En développement]
  B --> C[En test]
  C --> D[Validé]
  D --> E[Livré]
  style B stroke-dasharray: 5 5
  style C stroke-dasharray: 5 5
  style D stroke-dasharray: 5 5
  style E stroke-dasharray: 5 5
```

### 6.4 Dépendances principales (référence catalogue — non implémentées)

```mermaid
flowchart TB
  F033[F-033 Découverte] -.-> F003[F-003 Parcours]
  F003 -.-> F013[F-013 Séances]
  F013 -.-> F032[F-032 Reprise]
  F016[F-016 / F-031 Prudence] -.-> F013
  F013 -.-> F010[F-010 Progression]
```

### 6.5 Cycle de vie d’une fonctionnalité

```mermaid
stateDiagram-v2
  [*] --> NonCommence
  NonCommence --> EnDeveloppement: ticket ouvert
  EnDeveloppement --> EnTest: implémentation candidate
  EnTest --> Valide: validation OK
  Valide --> Livre: release
  Livre --> [*]
```

## 7. Gouvernance

Toute modification d’une fonctionnalité (démarrage, test, validation, livraison) **doit** mettre à jour ce registre dans le même ticket, puis répercuter la synthèse dans `00_PROJECT_STATUS.md`.

Ne jamais marquer **Validé** ou **Livré** sans preuve réelle.

## 8. Règles de mise à jour

- après chaque ticket touchant un `F-xxx` ;
- après chaque Release impactant le catalogue ;
- après tout abandon / report documenté d’une feature en cours.

## 9. Prochaine étape documentaire

`docs/runtime/03_DATA_STATUS.md` (batch) puis `docs/runtime/04_API_STATUS.md`.

## 10. Références

- `docs/runtime/README.md`
- `docs/05_FEATURES.md`
- `docs/25_DESIGN_FREEZE.md`

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Prochain registre | `03_DATA_STATUS.md` / puis `04_API_STATUS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
