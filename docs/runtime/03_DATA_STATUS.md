# 03 — Data Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Data Status |
| Fichier | `docs/runtime/03_DATA_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 8 août 2026 — MVP-011 Movements |
| Responsable documentaire | Projet Tai-Chi-AI-Coach |
| Type | Runtime Register — état réel du modèle de données |
| Référence conception | `docs/14_DATA_MODEL.md` (modèle cible / gelé — non recopié comme implémenté) |

> Ce registre décrit uniquement ce qui est **effectivement** modélisé / stocké / migré en runtime.

## 2. Synthèse

| Indicateur | Valeur réelle |
| --- | --- |
| Domaines suivis | 15 (périmètre demandé + Onboarding D2) |
| Implémentés | **0** |
| En validation / développement | **5** (Onboarding ; Curriculum ; Séances ; Progression ; Préférences — localStorage) |
| Non commencés | **10** |
| Schéma DB / migrations applicatives | Absents |
| Données métier | Curriculum embarqué + pratique mémoire + historique + préférences + **onboarding localStorage** ; pas de sync / Supabase |

## 3. Domaines — état réel

Statuts autorisés : Non commencé · En développement · En validation · Implémenté.

| Domaine | Alignement conception (`14`) | État réel | Ticket | Dernière MAJ | Remarques |
| --- | --- | --- | --- | --- | --- |
| Utilisateur | D1 Identité | Non commencé | — | — | Aucun compte runtime (page Profil = préférences + statut onboarding) |
| Onboarding | D2 | En développement | MVP-008 | 5 août 2026 | `OnboardingState` via `OnboardingStore` (localStorage `…onboarding.v1`) ; durée via préférences (pas de doublon) |
| Préférences | D10 | En développement | MVP-007 | 5 août 2026 | `UserPreferences` via `PreferenceStore` (localStorage) ; durée/niveau aussi écrits depuis l’onboarding |
| Curriculum | D3 | En développement | MVP-003 / MVP-011 | 8 août 2026 | Sessions + **Movement** (MV-001…003) ; `local-movements` + `movementReader` ; pas SQL |
| Séances | D4 Pratique | En développement | MVP-005 | 5 août 2026 | `LocalPracticeSession` en mémoire (reducer) ; **non** persistée ; pas de SQL |
| Progression | D5 | En développement | MVP-006 | 5 août 2026 | `PracticeRecord` / stats via `ProgressStore` (localStorage) ; interface remplaçable |
| Recommandations | D6 | Non commencé | — | — | — |
| IA | D7 IA Coach | Non commencé | — | — | — |
| Computer Vision | D8 | Non commencé | — | — | — |
| Virtual Humans | D9 | Non commencé | — | — | — |
| Notifications | D11 | Non commencé | — | — | — |
| Premium | D12 | Non commencé | — | — | — |
| Médias | D13 | En développement | MVP-011 | 8 août 2026 | `mediaKeyImage` WebP F-007 liés aux Movements ; pas de MediaAsset table / pas de vidéo F-006 |
| Consentements | D14 | Non commencé | — | — | — |
| Analytics | D15 | Non commencé | — | — | Produit = V1 en conception ; rien en runtime |

Domaines `14` non listés ci-dessus (Export D16, Sync D17) : **non commencés**.

## 4. Conformité avec `14_DATA_MODEL.md`

| Élément | Statut | Justification |
| --- | --- | --- |
| Modèle de données conception | Conforme (gelé) | Baseline Design Freeze |
| Implémentation réelle | Partielle | D2/D3/D5/D10 localStorage + D4 mémoire ; pas de persistance distante |
| Divergence | **Aucune** | Séparation template / exécution respectée ; préférences = agrégat local non sync |

## 5. Écarts

Aucun écart connu.

Note : les 3 séances locales sont des **placeholders structurels** (`isStructuralPlaceholder`) dérivés de `08` — pas un catalogue de mouvements inventé.

## 6. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création initiale — tous domaines **Non commencé** ; aucune donnée métier ; aucune divergence. |
| 5 août 2026 | MVP-003 — Curriculum → **En développement** (types + `local-curriculum` + reader) ; 0 SQL / 0 Supabase. |
| 5 août 2026 | MVP-005 — Séances (pratique) → **En développement** (état local non persistant). |
| 5 août 2026 | MVP-006 — Progression → **En développement** (localStorage, pas IndexedDB / Supabase). |
| 5 août 2026 | MVP-007 — Préférences → **En développement** (localStorage, `PreferenceStore` remplaçable). |
| 5 août 2026 | MVP-008 — Onboarding (D2) → **En développement** (`OnboardingStore` localStorage). |

## 7. Diagrammes

### 7.1 Domaines de données

```mermaid
flowchart TB
  subgraph EnDev[En développement]
    C[Curriculum]
    S[Séances pratique]
    PR[Progression]
    PF[Préférences]
    OB[Onboarding]
  end
  subgraph NonCommence[Non commencé]
    U[Utilisateur]
    R[Recommandations]
    IA[IA]
    CV[Computer Vision]
    VH[Virtual Humans]
    N[Notifications]
    PRE[Premium]
    M[Médias]
    CO[Consentements]
    A[Analytics]
  end
```

### 7.2 Progression

```mermaid
pie title Domaines data — état réel
  "Non commencé" : 10
  "En développement" : 5
  "Implémenté" : 0
```

### 7.3 Dépendances (structurelles — partiellement implémentées)

```mermaid
flowchart LR
  U[Utilisateur] -.-> Pref[Préférences]
  U -.-> Sess[Séances pratique]
  Curr[Curriculum] -->|local reader| Lib[Bibliothèque UI]
  Curr -.-> Sess
  Sess -.-> Prog[Progression]
  Pref -.-> Lib
  Pref -.-> Sess
  Prog -.-> Reco[Recommandations]
  U -.-> Cons[Consentements]
  Cons -.-> IA[IA]
  Cons -.-> CV[CV]
```

### 7.4 Couverture

```mermaid
flowchart TB
  Target[14 Data Model — cible]
  Real[Runtime — curriculum + prefs locales]
  Target --> Gap{Couverture}
  Real --> Gap
  Gap --> Partial[D3 / D5 / D10 partiels]
```

### 7.5 Cycle d’évolution

```mermaid
stateDiagram-v2
  [*] --> NonCommence
  NonCommence --> EnDeveloppement: ticket data
  EnDeveloppement --> EnValidation: schéma candidate
  EnValidation --> Implemente: validé
  Implemente --> [*]
```

## 8. Gouvernance

Toute évolution du modèle de données (entité, migration, stockage local, sync) **doit** mettre à jour ce registre, référencer le ticket, vérifier la conformité avec `docs/14_DATA_MODEL.md`, et répercuter la synthèse dans `00_PROJECT_STATUS.md` si l’état global change.

## 9. Règles de mise à jour

- après chaque ticket touchant le schéma ou le stockage ;  
- après chaque migration réelle ;  
- après toute divergence constatée avec `14`.

## 10. Prochaine étape

Selon ticket suivant — sans anticiper hors backlog.

## 11. Références

- `docs/runtime/README.md`  
- `docs/runtime/00_PROJECT_STATUS.md`  
- `docs/14_DATA_MODEL.md`  
- `docs/25_DESIGN_FREEZE.md`  

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Prochain document | `docs/runtime/04_API_STATUS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
