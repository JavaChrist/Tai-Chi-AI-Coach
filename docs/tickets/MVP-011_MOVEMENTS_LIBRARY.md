# MVP-011_MOVEMENTS_LIBRARY

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Fermé** (GO — 8 août 2026 — validation PO — commit `e8eebff`)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-011_MOVEMENTS_LIBRARY.md`
> Dépend de :
> - MVP-010_PRESENTATION_AND_STYLES (Fermé — `f40d34c`)
> - MVP-003_CURRICULUM_LIBRARY (Fermé — catalogue **séances** existant)
> - MVP-004_ASSET_PIPELINE (Fermé — emplacements médias ; fichiers mouvements absents)
> - `docs/05_FEATURES.md` (F-004, F-005, F-007)
> - `docs/08_TAI_CHI_CURRICULUM.md` §27 (corpus officiel MV-001…003)
> - `docs/14_DATA_MODEL.md` (structures Movement / Instruction / MediaAsset)
> - `docs/25_DESIGN_FREEZE.md`
> - `docs/26_PWA_APP_UPDATE.md` (socle update ; hors périmètre offline MVP-017)

---

# 1. Objectif

Cadrer puis livrer (développement **ultérieur**, hors de cette ouverture) :

- **F-005** — Explication détaillée d’un mouvement
- **F-004** — Bibliothèque des mouvements
- **F-007** — Images de référence

But produit : permettre à l’utilisateur de **parcourir**, **ouvrir** et **réviser** des mouvements hors flux de séance, avec explication claire non médicale et, lorsque disponibles, images de référence.

**Phase actuelle : documentaire.** Corpus officiel MV-001…003 = source de vérité `docs/08_TAI_CHI_CURRICULUM.md` §27 (pas ce ticket). Aucun code applicatif ; aucun asset créé dans cette mission.

---

# 2. Documents de référence

Lire obligatoirement :

- `docs/05_FEATURES.md` (F-004, F-005, F-007)
- `docs/07_CONTENT_STRATEGY.md`
- `docs/08_TAI_CHI_CURRICULUM.md`
- `docs/12_UX_UI.md` (§ Bibliothèque)
- `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`
- `docs/12B_VISUAL_ASSET_GUIDE.md`
- `docs/14_DATA_MODEL.md` (Movement, Instruction, MediaAsset)
- `docs/15_API_ARCHITECTURE.md`
- `docs/18_PWA_OFFLINE.md` (cache médias — intention ; pas MVP-017 ici)
- `docs/20_TEST_STRATEGY.md`
- `docs/22_ROADMAP.md` (MVP-011)
- `docs/24_DEVELOPER_HANDOVER.md`
- `docs/25_DESIGN_FREEZE.md`
- `docs/tickets/README.md` (§10, §20)

Runtime : `00`, `02`, `11` (ouverture) ; `09`, `17` (clôture code).

---

# 3. Définitions officielles (source de vérité)

## 3.1 F-005 — Explication détaillée d’un mouvement

| Champ | Valeur (`05`) |
| --- | --- |
| Identifiant | F-005 |
| Nom | Explication détaillée d’un mouvement |
| Priorité | P0 |
| Version | MVP |
| Description | Texte pédagogique, points d’attention, erreurs fréquentes non médicales, consignes de rythme. Contenu validé par des personnes compétentes. |
| Objectif utilisateur | Comprendre un mouvement sans jargon inutile. |
| Dépendances | Aucune |
| Règles métier | Pas de diagnostic ; contenu maîtrisé ; l’IA ne doit pas inventer la technique. |
| Limites | N’assure pas une posture parfaite. |

### Critères d’acceptation officiels (`05`)

- L’utilisateur peut lire une explication claire d’un mouvement.
- L’explication ne présente pas de conseil médical.

## 3.2 F-004 — Bibliothèque des mouvements

| Champ | Valeur (`05`) |
| --- | --- |
| Identifiant | F-004 |
| Nom | Bibliothèque des mouvements |
| Priorité | P0 |
| Version | MVP |
| Description | Catalogue des mouvements disponibles, consultables individuellement. |
| Objectif utilisateur | Retrouver et réviser un mouvement hors flux linéaire. |
| Dépendances | F-005 |
| Règles métier | Chaque mouvement expose au minimum une explication ; accessible sans terminer tout le parcours. |
| Limites | Nombre de mouvements **ouvert** (`08`). |
| Évolutions | Favoris F-011 et recherche F-012 en **V1** (hors MVP-011). |

### Critères d’acceptation officiels (`05`)

- L’utilisateur peut parcourir la liste des mouvements disponibles.
- L’utilisateur peut ouvrir la fiche d’un mouvement.

## 3.3 F-007 — Images de référence

| Champ | Valeur (`05`) |
| --- | --- |
| Identifiant | F-007 |
| Nom | Images de référence |
| Priorité | P1 (Should / MoSCoW `22`) |
| Version | MVP |
| Description | Images ou illustrations de positions clés. |
| Objectif utilisateur | Disposer de repères statiques. |
| Dépendances | F-005 |
| Règles métier | Servent l’explication, pas le diagnostic. |
| Limites | Ne remplacent pas une démonstration dynamique (F-006 / MVP-012). |

### Critères d’acceptation officiels (`05`)

- L’utilisateur peut consulter des images de référence liées au mouvement.

---

# 4. Expérience utilisateur prévue

1. Accès depuis la navigation **Bibliothèque** (et CTAs existants vers `/bibliotheque`).
2. Distinction claire **séances** (F-013, déjà livré) vs **mouvements** (F-004) — aujourd’hui `/bibliotheque` = séances uniquement.
3. Liste des mouvements publiés → fiche détail (explication F-005 + images F-007 si présentes).
4. États : vide (aucun mouvement publié), erreur de lecture, **absence d’image** (dégradation calme, pas de crash).
5. Hero famille **`bamboo`** (déjà mappée à `bibliotheque` / `sessions`).
6. Light / Dark + responsive via patterns EDS existants.
7. Aucune interruption de `/pratique/*` ; pas de vidéo (MVP-012).

---

# 5. Périmètre / hors périmètre

## 5.1 Inclus (développement ultérieur du ticket)

1. Modèle local `Movement` + `Instruction` (+ lien médias) aligné `14`.
2. Source / reader locaux (même esprit que curriculum séances).
3. Routes liste + fiche mouvements.
4. UI : liste, cartes, fiche détail, empty/error, image ou fallback.
5. Navigation / libellés pour distinguer séances et mouvements.
6. Tests d’acceptation F-004 / F-005 / F-007 + régression.
7. Runtime à la clôture code.

## 5.2 Hors périmètre

| Sujet | Ticket / version |
| --- | --- |
| Vidéo pédagogique | MVP-012 (F-006) |
| Parcours débutant structuré | MVP-013 (F-003) |
| Favoris / recherche avancée | V1 (F-011, F-012) |
| Offline / cache cœur | MVP-017 |
| Auth, sync, IA, CV, Mei | V1 / V2 |
| Génération ou invention d’assets / gestuelle | Interdit |
| Refonte Design System | Interdit (Freeze) |

---

# 6. Inventaire contenu (état réel du dépôt — 7 août 2026)

> **Aucun mouvement Tai Chi n’est inventorié comme entité `Movement` dans le code.**
> Ne rien inventer. Sources consultées : `web/src/data/curriculum/`, `web/src/domain/`, `docs/08`.

## 6.1 Catalogue mouvements F-004

| Élément | Présent ? | Fichier / remarque |
| --- | --- | --- |
| Type `Movement` | **Non** | Absents de `web/src/domain/` — structures seulement dans `docs/14_DATA_MODEL.md` |
| Liste de mouvements nommés | **Non** | `docs/08` : style et nombre de mouvements **ouverts** |
| Noms FR / originaux | **Non** | — |
| Catégories / tags mouvements | **Non** | — |
| Descriptions / consignes / vigilance / respiration par geste | **Non** | — |
| Relations Movement ↔ séances | **Non** | `SessionStep.summary` dit explicitement pas de mouvement inventé |

## 6.2 Contenu séances existant (pas F-004 — contexte réutilisable)

Fichier : `web/src/data/curriculum/local-curriculum.ts`

| ID séance | Titre FR | Niveau | Durée | Placeholder |
| --- | --- | --- | --- | --- |
| `st-decouverte-premiere-courte` | Première séance courte | decouverte | 8 min | oui |
| `st-initiation-rituel-base` | Rituel de séance débutant | debutant | 12 min | oui |
| `st-progression-liaison-legere` | Séance avec liaison légère | progression | 15 min | oui |

Steps / objectifs : IDs `step-*`, `obj-*` — **structure de séance**, pas fiches mouvement.

## 6.3 Styles (F-002, pas mouvements)

Page `/decouverte` — Yang / Chen / Wu / Sun (orientation légère) — **ne constituent pas** un catalogue F-004.

## 6.4 Synthèse contenu

**0 mouvement prêt pour MVP-011.**
Livraison F-004 / F-005 nécessite un **corpus éditorial validé** (personnes compétentes, `05` / `07` / `08`) **avant** ou **en parallèle** du développement UI — hors invention agent.

---

# 7. Inventaire assets (état réel)

## 7.1 Emplacement prévu

| Chemin | Contenu réel |
| --- | --- |
| `web/public/curriculum/movements/` | `.gitkeep` uniquement |
| `web/public/curriculum/sessions/` | `.gitkeep` uniquement |
| `movement-placeholder.webp` (documenté dans `web/public/curriculum/README.md`) | **Absent** |

## 7.2 Images F-007

| Asset mouvement | Statut |
| --- | --- |
| Toute image / illustration de pose ou geste | **0 fichier** |

## 7.3 Assets présents mais hors F-007

Brand/icônes, heroes atmosphère (`bamboo`, etc.), guides Hero dans `docs/design/` — **pas** des références pédagogiques de mouvements.

## 7.4 Matrice readiness (mouvement → texte → image)

| Mouvement | Texte F-005 | Image F-007 | Exploitable | Données suffisantes MVP-011 |
| --- | --- | --- | --- | --- |
| *(aucun ID dans le dépôt)* | — | — | — | **Non** |

**Bloquant contenu / médias :** catalogue et images absents. L’UI peut être préparée avec empty states ; **F-007 ne peut pas être accepté « Livré » sans au moins une image de référence réelle liée à un mouvement publié**, sauf décision PO de livrer F-007 en dégradé documenté (fallback) — à arbitrer avant clôture.

---

# 8. Architecture d’implémentation (prévision — ne pas coder maintenant)

## 8.1 Réutilisable tel quel

- `PageEnvironment` + Hero `bamboo` (`SCREEN_HERO_MAP.bibliotheque`)
- `ContentLayout`, `PageHeader`, `Button`, `EmptyState`, `ErrorState`
- Pattern liste → carte → fiche (`SessionLibrary` / `SessionList` / `SessionCard` / `SessionDetails`)
- Pipeline `Source` → `Reader` → pages + `generateStaticParams`
- `DifficultyLevel`, `PublicationStatus`, `LocaleCode`, labels curriculum
- Dossier `public/curriculum/movements/` + convention naming README
- Tokens / `.surface-card` / EDS 12A — **aucun nouveau Design System**

## 8.2 À créer (lors du développement)

- `domain/movements/` : types `Movement`, `Instruction`, summaries
- `data/movements/` : source locale **uniquement** avec contenus validés (pas d’invention)
- `services/movements/` : reader / filtres minimaux
- Composants `components/movements/*` (miroir sessions)
- Routes dédiées (proposition §9)
- i18n si le ticket étend le dictionnaire (aujourd’hui strings bibliothèque souvent en dur)

## 8.3 Tension nommage `/bibliotheque`

| Constat | Conséquence |
| --- | --- |
| UX `12` : Bibliothèque = mouvements (F-004) | |
| Code actuel : `/bibliotheque` = **séances** (F-013) | Conserver les séances ; ajouter une entrée **Mouvements** sans casser F-013 |

---

# 9. Routes retenues (décision PO — 7 août 2026)

| Route | Rôle |
| --- | --- |
| `/bibliotheque` | Catalogue **séances** existant (F-013) — inchangé structurellement |
| `/bibliotheque/mouvements` | Catalogue mouvements (F-004) |
| `/bibliotheque/mouvements/[movementId]` | Fiche mouvement (F-005 + F-007) |

**Pas d’onglets complexes** sur `/bibliotheque`. Accès mouvements via lien/CTA clair depuis la page séances (et nav si pertinent).

**Filtres / recherche :** F-012 = V1. MVP-011 : filtres légers optionnels seulement si le volume le justifie ; pas de moteur de recherche.

**Ne pas coder ces routes tant que le gate contenu (§19) n’est pas levé.**

---

# 10. Dépendances MVP-012 / MVP-013 (ne pas implémenter)

| Ticket | Lien |
| --- | --- |
| MVP-012 (F-006) | Vidéo sur fiche mouvement / séance — slots médias possibles, **pas** de player vidéo ici |
| MVP-013 (F-003) | Parcours débutant pourra référencer Movement IDs — ne pas construire le parcours |

---

# 11. Accessibilité / responsive / thèmes

- Patterns dialogs / focus EDS existants
- Images : `alt` descriptif non médical ; fallback si asset manquant
- Light / Dark via tokens + Hero bamboo light/dark déjà exportés
- Desktop / tablet / mobile : `ContentLayout` + cartes existantes
- Pas d’`alert` / `confirm` natifs

---

# 12. Critères d’acceptation (ticket)

- [ ] F-004 : liste des mouvements **publiés** parcourable ; ouverture fiche
- [ ] F-005 : explication claire, non médicale, par mouvement publié
- [ ] F-007 : images de référence consultables **lorsqu’un MediaAsset est lié** ; absence d’asset → UI dégradée calme (pas d’erreur bloquante)
- [ ] Séances F-013 toujours accessibles
- [ ] Aucune vidéo F-006 ; aucun F-003 / F-011 / F-012
- [ ] Design Freeze / EDS respectés (Hero bamboo, surface-card, etc.)
- [ ] Build / tsc / ESLint / Vitest OK
- [ ] Runtime synchronisé à la clôture
- [ ] **Aucun** mouvement ni image inventés par l’agent

---

# 13. Tests prévus

- Unitaires : reader mouvements, publication filter, fallback image
- Composants : liste / fiche / empty / absence média (renderToStaticMarkup ou équivalent projet)
- Régression : `/bibliotheque` séances, pratique, découverte, SW update
- Visuel PO : Desktop/Mobile × Light/Dark — liste + fiche (+ cas sans image)

---

# 14. Validations visuelles

| Écran | Desktop | Mobile | Light | Dark |
| --- | --- | --- | --- | --- |
| Liste mouvements | ☐ | ☐ | ☐ | ☐ |
| Fiche mouvement (avec image) | ☐ | ☐ | ☐ | ☐ |
| Fiche / liste sans image | ☐ | ☐ | ☐ | ☐ |
| Accès depuis nav Bibliothèque | ☐ | ☐ | ☐ | ☐ |

---

# 15. Runtime (clôture code)

| Registre | Motif |
| --- | --- |
| `00_PROJECT_STATUS.md` | Ticket / jalons |
| `02_FEATURE_STATUS.md` | F-004, F-005, F-007 |
| `09_TEST_STATUS.md` | Campagne |
| `11_BACKLOG.md` | Retrait ouvert |
| `17_CHANGE_HISTORY.md` | CH-xxx |

Ouverture (cette étape) : `00`, `02`, `11`, `docs/tickets/README.md` — **pas** de CH code.

---

# 16. Definition of Done

1. Ticket ouvert + inventaires documentés (fait à l’ouverture).
2. Corpus mouvements + images validés disponibles **ou** arbitrage PO explicite sur périmètre dégradé.
3. Implémentation F-004 / F-005 / F-007 selon critères §12.
4. Tests + validations visuelles PO.
5. Runtime + commit Conventional Commits — **uniquement après GO PO**.

---

# 17. Contraintes

- Design Freeze — aucune modification de conception `00`–`25`.
- Standards UI tickets (`README` §10).
- Pas de commit / push sans validation explicite du Product Owner.
- Ne pas ouvrir MVP-012 / MVP-017 dans ce ticket.

---

# 18. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (7 août 2026) |
| Corpus F-005 / catalogue F-004 (contenu) | **Validé PO** — source `docs/08` §27 (MV-001…003) |
| Images F-007 | **Livrées** — 3 WebP réels 768×1280 (`08` §27.5) |
| Implémentation code | **Livrée** — validée PO |
| Validation PO visuelle | **Fait** — Desktop/Mobile × Light/Dark |
| Clôture | **Fermé** — commit `e8eebff` |

---

# 19. Corpus officiel — référence (ne pas dupliquer)

**Source de vérité :** [`docs/08_TAI_CHI_CURRICULUM.md`](../08_TAI_CHI_CURRICULUM.md) **§27**.

Anciens slots temporaires `mv-founder-*` : **obsolètes** — ne pas utiliser.

| ID métier | Slug | Titre | F-005 doc | F-007 fichier |
| --- | --- | --- | --- | --- |
| MV-001 | `posture-de-depart` | Posture de départ | Complet (`08` §27.2) | `movement-posture-de-depart-key.webp` **livré** |
| MV-002 | `transfert-poids-lateral` | Transfert de poids latéral | Complet (`08` §27.3) | `movement-transfert-poids-lateral-key.webp` **livré** |
| MV-003 | `pas-avant-controle` | Pas avant contrôlé | Complet (`08` §27.4) | `movement-pas-avant-controle-key.webp` **livré** |

Routes retenues : §9. Modèle Movement : `08` §27.6.

## 19.1 Matrice F-005 (couverture documentaire)

| Champ | MV-001 | MV-002 | MV-003 |
| --- | --- | --- | --- |
| Titre / objectif (résumé) | OK | OK | OK |
| Placement | OK | OK | OK |
| Déroulement ordonné | OK | OK | OK |
| Respiration | OK | OK | OK |
| Rythme | OK | OK | OK |
| Points d’attention | OK | OK | OK |
| Erreurs fréquentes | OK | OK | OK |
| Prudence | OK | OK | OK |
| styleKey null | OK | OK | OK |

**F-005 documentaire : satisfait** pour les trois mouvements.

## 19.2 Matrice F-007

| ID | Direction validée | Spec technique (`08` §27.5) | Fichier | État |
| --- | --- | --- | --- | --- |
| MV-001 | Mei, plein pied, neutre, face | WebP 768×1280 (3:5) | `…/movement-posture-de-depart-key.webp` | **livré** (WebP réel) |
| MV-002 | Mei, plein pied, transfert latéral | idem | `…/movement-transfert-poids-lateral-key.webp` | **livré** (WebP réel) |
| MV-003 | Mei, plein pied, face presque frontale, pas avant | idem | `…/movement-pas-avant-controle-key.webp` | **livré** (WebP réel) |

Sources PNG (`*.png`) conservées à côté des livrables — non servies par l’app.
Placeholder générique `movement-placeholder.webp` : **non requis**.

Référence tenue Mei (hors F-007) : `web/public/characters/mei/tai-chi/mei-tai-chi-reference-front.webp`.

## 19.3 Gate de démarrage code (réévalué)

| Condition | État |
| --- | --- |
| Corpus minimal validé | **Oui** (`08` §27) |
| Textes F-005 disponibles | **Oui** |
| Modèle Movement documentaire finalisé | **Oui** (`08` §27.6) |
| Stratégie F-007 validée (direction) | **Oui** |
| Assets F-007 produits (3 WebP 768×1280, sans texte/flèche/annotation) | **Oui** |
| Référence Mei tenue documentée | **Oui** (`characters/mei/README.md`) |

**Décision finale : FERMÉ — VALIDÉ PO**

- F-004 / F-005 / F-007 → **Livré**.
- MVP-012 non développé dans ce ticket (prochain planifié).

---

*Fin du ticket MVP-011 (Fermé).*
