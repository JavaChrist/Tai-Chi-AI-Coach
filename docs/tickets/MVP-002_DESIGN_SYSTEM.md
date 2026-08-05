# MVP-002_DESIGN_SYSTEM

> Tai-Chi AI Coach  
> Version 1.0  
> Statut : **Fermé**  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-002_DESIGN_SYSTEM.md`  
> Nature : Archivage documentaire (ticket exécuté via chat avant formalisation fichier)  
> Dépend de :  
> - MVP-001_APP_SHELL  
> - `docs/12_UX_UI.md`  
> - `docs/25_DESIGN_FREEZE.md`

---

# 1. Objectif

Livrer la fondation Design System / UI réutilisable (composants, états, dialogs, toasts, layouts) sans logique métier curriculum ou pratique.

---

# 2. Documents de référence

- `docs/12_UX_UI.md`
- `docs/13_TECH_ARCHITECTURE.md`
- `docs/25_DESIGN_FREEZE.md`
- Runtime : `00`, `01`, `02`, `17`

---

# 3. Travail demandé (périmètre réellement livré)

- Composants UI : Button, LoadingButton, IconButton, Card, inputs, Label, Badge, Progress, Spinner, Skeleton, Separator
- Cartes : FeatureCard, InformationCard, EmptyStateCard
- États : Empty / Loading / Error / Success
- Dialogs : Confirmation, Error, Success, Information, AppDialog
- Toasts (Sonner)
- Layouts : Container, ContentLayout, PageHeader, Section
- Point d’entrée `web/src/components/design-system/index.ts`

---

# 4. Hors périmètre

- Catalogue curriculum
- Pratique guidée
- Auth / Supabase
- Mei / caméra / IA

---

# 5. Critères d’acceptation

- Design System utilisable depuis l’app
- Standards UI (français, Lucide, Dialogs, PasswordInput)
- Build / TypeScript / ESLint OK
- Runtime synchronisé (CH-002)

---

# 6. Critères d’acceptation — résultat

Satisfaits à la clôture.

---

# 7. Runtime Registers mis à jour

- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/01_ARCHITECTURE_STATUS.md`
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/17_CHANGE_HISTORY.md` — **CH-002**

---

# 8. Rapport de clôture (archive)

## Développement

Fondation UI réutilisable sous `web/src/components/`.

## Fonctionnalités

- **Aucune `F-xxx`** passée en En développement / Validé / Livré (socle UI uniquement).

## Validation

Build / TypeScript / ESLint OK.

## Runtime

- **CH-002** — Design System & UI Foundation
- Registres : `00`, `01`, `02`, `17`

## Commit

| Champ | Valeur |
| --- | --- |
| SHA | `696a76f` |
| Message | `feat(mvp): add design system and local curriculum library` |
| Note | Commit commun avec MVP-003 (livraison groupée CH-002 / CH-003). |

---

# 9. Contraintes

Pas de logique métier dans le Design System ; respect Design Freeze.
