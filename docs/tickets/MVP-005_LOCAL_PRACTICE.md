# MVP-005_LOCAL_PRACTICE

> Tai-Chi AI Coach  
> Version 1.0  
> Statut : **Fermé**  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-005_LOCAL_PRACTICE.md`  
> Nature : Archivage documentaire (ticket exécuté via chat avant formalisation fichier)  
> Dépend de :  
> - MVP-003_CURRICULUM_LIBRARY  
> - MVP-002_DESIGN_SYSTEM  
> - `docs/05_FEATURES.md`  
> - `docs/08_TAI_CHI_CURRICULUM.md`

---

# 1. Objectif

Livrer un parcours de pratique guidée **locale** : intro, étapes, pause/reprise en mémoire de page, bilan non persistant, confirmation de sortie via Dialog.

---

# 2. Documents de référence

- `docs/05_FEATURES.md`
- `docs/08_TAI_CHI_CURRICULUM.md`
- `docs/12_UX_UI.md`
- `docs/25_DESIGN_FREEZE.md`
- Runtime : `00`, `01`, `02`, `03`, `07`, `09`, `17`

---

# 3. Travail demandé (périmètre réellement livré)

- Domaine pratique (reducer, types, phases UX)
- Route `/pratique/[sessionId]`
- Player : intro, étapes, pause/reprise, bilan
- ConfirmationDialog pour quitter
- Tests Vitest du reducer
- Bilan **non** persisté à ce stade (persistance = MVP-006)

---

# 4. Hors périmètre

- Historique / stats persistés (MVP-006)
- Vidéo / médias
- Reprise après refresh / fermeture
- Auth / Supabase / Offline SW
- Caméra / IA / Mei

---

# 5. Critères d’acceptation

- Parcours local démarrable depuis la fiche
- Pause / reprise en session
- Dialog de sortie (pas de `confirm()`)
- Build / TypeScript / ESLint / tests OK
- Runtime synchronisé (CH-005)

---

# 6. Critères d’acceptation — résultat

Satisfaits à la clôture.

---

# 7. Runtime Registers mis à jour

- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/01_ARCHITECTURE_STATUS.md`
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/03_DATA_STATUS.md`
- `docs/runtime/07_OFFLINE_STATUS.md`
- `docs/runtime/09_TEST_STATUS.md`
- `docs/runtime/17_CHANGE_HISTORY.md` — **CH-005**

---

# 8. Rapport de clôture (archive)

## Développement

Player de pratique locale + reducer + route `/pratique/[sessionId]`.

## Fonctionnalités

| F-xxx | Évolution | Justification |
| --- | --- | --- |
| **F-013** Séances guidées | → **En test** | Parcours local complet sans médias |
| **F-032** Reprise de séance | → **En développement** | Pause/reprise en mémoire de page uniquement |

## Validation

Build / TypeScript / ESLint / tests practice reducer OK.

## Runtime

- **CH-005** — Parcours pratique local
- Registres : `00`, `01`, `02`, `03`, `07`, `09`, `17`

## Commit

| Champ | Valeur |
| --- | --- |
| SHA | `7652b2f` |
| Message | `feat(practice): add local guided session flow (MVP-005)` |

---

# 9. Contraintes

État en mémoire uniquement ; aucune persistance distante ; Dialog uniquement pour les confirmations.
