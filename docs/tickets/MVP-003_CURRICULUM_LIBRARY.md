# MVP-003_CURRICULUM_LIBRARY

> Tai-Chi AI Coach  
> Version 1.0  
> Statut : **Fermé**  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-003_CURRICULUM_LIBRARY.md`  
> Nature : Archivage documentaire (ticket exécuté via chat avant formalisation fichier)  
> Dépend de :  
> - MVP-001_APP_SHELL  
> - MVP-002_DESIGN_SYSTEM  
> - `docs/08_TAI_CHI_CURRICULUM.md`  
> - `docs/14_DATA_MODEL.md`

---

# 1. Objectif

Mettre en place un curriculum local typé et une bibliothèque / fiches de séances pédagogiques, sans démarrer encore le parcours de pratique guidée complet.

---

# 2. Documents de référence

- `docs/05_FEATURES.md`
- `docs/08_TAI_CHI_CURRICULUM.md`
- `docs/14_DATA_MODEL.md`
- `docs/25_DESIGN_FREEZE.md`
- Runtime : `00`, `01`, `02`, `03`, `09`, `17`

---

# 3. Travail demandé (périmètre réellement livré)

- Types curriculum (`SessionTemplate`, `SessionStep`, phases, difficulté, locale `fr`)
- Données locales `local-curriculum.ts` (placeholders structurels)
- Reader curriculum + tests Vitest
- Pages `/bibliotheque` et `/bibliotheque/[sessionId]`
- Composants sessions (liste, carte, fiche, métadonnées)

---

# 4. Hors périmètre

- Démarrage / player de pratique guidée (MVP-005)
- Catalogue mouvements (F-004)
- Médias vidéo / images pédagogiques
- Supabase / SQL

---

# 5. Critères d’acceptation

- Bibliothèque et fiches lisibles localement
- Tests reader OK
- Build / TypeScript / ESLint OK
- Runtime synchronisé (CH-003)

---

# 6. Critères d’acceptation — résultat

Satisfaits à la clôture.

---

# 7. Runtime Registers mis à jour

- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/01_ARCHITECTURE_STATUS.md`
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/03_DATA_STATUS.md`
- `docs/runtime/09_TEST_STATUS.md`
- `docs/runtime/17_CHANGE_HISTORY.md` — **CH-003**

---

# 8. Rapport de clôture (archive)

## Développement

Domaine curriculum + pages bibliothèque / fiches.

## Fonctionnalités

| F-xxx | Évolution | Justification |
| --- | --- | --- |
| **F-013** Séances guidées | → **En développement** | Fondation catalogue + fiche ; démarrage guidé hors périmètre |
| **F-004** | Inchangé (Non commencé) | Catalogue mouvements non livré |

## Validation

Build / TypeScript / ESLint / tests Vitest reader OK.

## Runtime

- **CH-003** — Curriculum local + bibliothèque / fiches
- Registres : `00`, `01`, `02`, `03`, `09`, `17`

## Commit

| Champ | Valeur |
| --- | --- |
| SHA | `696a76f` |
| Message | `feat(mvp): add design system and local curriculum library` |
| Note | Commit commun avec MVP-002 (livraison groupée CH-002 / CH-003). |

---

# 9. Contraintes

Pas d’invention de gestuelle officielle de style ; placeholders structurels uniquement ; pas de persistance distante.
