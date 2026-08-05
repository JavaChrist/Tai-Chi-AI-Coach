# MVP-006_LOCAL_PROGRESS

> Tai-Chi AI Coach  
> Version 1.0  
> Statut : **Fermé**  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-006_LOCAL_PROGRESS.md`  
> Nature : Archivage documentaire (ticket exécuté via chat avant formalisation fichier)  
> Dépend de :  
> - MVP-005_LOCAL_PRACTICE  
> - MVP-003_CURRICULUM_LIBRARY  
> - `docs/05_FEATURES.md`  
> - `docs/14_DATA_MODEL.md`

---

# 1. Objectif

Persister l’historique de pratique en localStorage derrière une couche d’abstraction remplaçable, exposer la page `/progression` (stats + historique), et enregistrer le bilan en fin de séance.

---

# 2. Documents de référence

- `docs/05_FEATURES.md`
- `docs/14_DATA_MODEL.md`
- `docs/20_TEST_STRATEGY.md`
- `docs/25_DESIGN_FREEZE.md`
- Runtime : `00`, `02`, `03`, `07`, `09`, `17`

---

# 3. Travail demandé (périmètre réellement livré)

- Types progression (`PracticeRecord`, historique, stats)
- `ProgressStore` + `LocalStorageProgressStore` (clé `tai-chi-ai-coach.progress.v1`)
- Service progression + tests Vitest
- Page `/progression`
- Enregistrement depuis le bilan de pratique
- Suggestion sobre de prochaine étape (sans gamification)

---

# 4. Hors périmètre

- Sync multi-appareils (F-027)
- Statistiques avancées V1 (F-024)
- Auth / Supabase
- Reprise après refresh (F-032 inchangé sur ce point)

---

# 5. Critères d’acceptation

- Historique lisible localement
- Stats locales affichées
- Enregistrement en fin de séance
- Build / TypeScript / ESLint / tests OK
- Runtime synchronisé (CH-006)

---

# 6. Critères d’acceptation — résultat

Satisfaits à la clôture.

---

# 7. Runtime Registers mis à jour

- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/03_DATA_STATUS.md`
- `docs/runtime/07_OFFLINE_STATUS.md`
- `docs/runtime/09_TEST_STATUS.md`
- `docs/runtime/17_CHANGE_HISTORY.md` — **CH-006**

---

# 8. Rapport de clôture (archive)

## Développement

ProgressStore local + page `/progression` + lien bilan → historique.

## Fonctionnalités

| F-xxx | Évolution | Justification |
| --- | --- | --- |
| **F-009** Historique | → **En développement** | Historique localStorage, pas de sync |
| **F-010** Progression | → **En développement** | Stats locales + prochaine étape sobre |
| **F-013** | Maintenu **En test** | Enregistrement historique en fin de séance |
| **F-024** | Inchangé (Non commencé) | Stats avancées V1 hors périmètre |

## Validation

Build / TypeScript / ESLint / **26** tests Vitest cumulés OK (campagne MVP-006).

## Runtime

- **CH-006** — Progression / historique local + `/progression`
- Registres : `00`, `02`, `03`, `07`, `09`, `17`

## Commit

| Champ | Valeur |
| --- | --- |
| SHA | `7369676` |
| Message | `feat(progress): add local practice history and stats (MVP-006)` |

---

# 9. Contraintes

Persistance locale uniquement ; store remplaçable ultérieurement par Supabase ; pas de gamification.
