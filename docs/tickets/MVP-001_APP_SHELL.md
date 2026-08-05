# MVP-001_APP_SHELL

> Tai-Chi AI Coach  
> Version 1.0  
> Statut : **Fermé**  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-001_APP_SHELL.md`  
> Nature : Archivage documentaire (ticket exécuté via chat avant formalisation fichier)  
> Dépend de :  
> - `docs/25_DESIGN_FREEZE.md`  
> - `docs/runtime/README.md`

---

# 1. Objectif

Poser le socle applicatif Frontend (App Shell) : layout, navigation, routes vides, thème clair/sombre basique, composants d’entrée essentiels (dont PasswordInput), sans logique métier métier avancée.

---

# 2. Documents de référence

- `docs/12_UX_UI.md`
- `docs/13_TECH_ARCHITECTURE.md`
- `docs/25_DESIGN_FREEZE.md`
- Runtime : `00`, `01`, `02`, `17`

---

# 3. Travail demandé (périmètre réellement livré)

- Application Next.js dans `web/`
- App Shell (header, navigation desktop / bottom)
- Routes placeholders : `/`, `/bibliotheque`, `/sessions`, `/progression`, `/profil`, etc.
- Thème clair / sombre (localStorage legacy `tai-chi-theme`)
- PasswordInput avec bouton œil
- Interface française, Lucide Icons, Dialogs (pas d’`alert` / `confirm`)

---

# 4. Hors périmètre

- Curriculum métier
- Design System complet
- Pratique guidée
- Progression / historique
- Auth / Supabase / Offline SW
- Toute `F-xxx` métier

---

# 5. Critères d’acceptation

- Shell navigable
- Build / TypeScript / ESLint OK
- Runtime synchronisé (CH-001)

---

# 6. Critères d’acceptation — résultat

Satisfaits à la clôture.

---

# 7. Runtime Registers mis à jour

- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/01_ARCHITECTURE_STATUS.md`
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/17_CHANGE_HISTORY.md` — **CH-001**

---

# 8. Rapport de clôture (archive)

## Développement

Socle `web/` : layout, navigation, routes vides, thème, PasswordInput.

## Fonctionnalités

- **Aucune `F-xxx`** passée en En développement / Validé / Livré (hors périmètre métier du ticket).

## Validation

Build / TypeScript / ESLint OK (campagne MVP-001).

## Runtime

- **CH-001** — App Shell + routes vides
- Registres : `00`, `01`, `02`, `17`

## Commit

| Champ | Valeur |
| --- | --- |
| SHA | `3c0b28c` |
| Message | `feat(mvp): complete MVP-001 application shell foundation` |

---

# 9. Contraintes

Respect Design Freeze ; aucun inventaire de fonctionnalités métier ; pas de sync distante.
