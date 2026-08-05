# MVP-004_ASSET_PIPELINE

> Tai-Chi AI Coach  
> Version 1.0  
> Statut : **Fermé**  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-004_ASSET_PIPELINE.md`  
> Nature : Archivage documentaire (ticket exécuté via chat avant formalisation fichier)  
> Dépend de :  
> - MVP-001_APP_SHELL  
> - MVP-002_DESIGN_SYSTEM  
> - `docs/18_PWA_OFFLINE.md`  
> - `docs/25_DESIGN_FREEZE.md`

---

# 1. Objectif

Poser la fondation assets / branding / manifeste PWA (sans Service Worker), avec catalogue typé et composant AppBrand (fallback texte).

---

# 2. Documents de référence

- `docs/12_UX_UI.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/21_DEPLOYMENT.md`
- `docs/25_DESIGN_FREEZE.md`
- Runtime : `00`, `01`, `02`, `07`, `09`, `17`

---

# 3. Travail demandé (périmètre réellement livré)

- Arborescence `web/public/` documentée (brand, icons, placeholders)
- Catalogue typé `web/src/config/assets.ts` + tests
- Manifeste PWA (`manifest.webmanifest`)
- Composant AppBrand avec fallback texte
- Métadonnées layout (icons, themeColor, manifest)

---

# 4. Hors périmètre

- Service Worker / cache offline
- Mei / Virtual Humans
- Médias pédagogiques complets
- Auth / Supabase

---

# 5. Critères d’acceptation

- Manifeste et catalogue assets cohérents
- AppBrand utilisable
- Build / TypeScript / ESLint / tests assets OK
- Runtime synchronisé (CH-004)

---

# 6. Critères d’acceptation — résultat

Satisfaits à la clôture.

---

# 7. Runtime Registers mis à jour

- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/01_ARCHITECTURE_STATUS.md`
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/07_OFFLINE_STATUS.md`
- `docs/runtime/09_TEST_STATUS.md`
- `docs/runtime/17_CHANGE_HISTORY.md` — **CH-004**

---

# 8. Rapport de clôture (archive)

## Développement

Fondation assets + manifeste + AppBrand.

## Fonctionnalités

- **Aucune `F-xxx` métier** modifiée (hors périmètre ; Offline/SW non livré ; Mei non activée).

## Validation

Build / TypeScript / ESLint / tests assets OK.

## Runtime

- **CH-004** — Fondation assets / manifeste PWA / AppBrand
- Registres : `00`, `01`, `02`, `07`, `09`, `17`

## Commit

| Champ | Valeur |
| --- | --- |
| SHA | `6a9784a` |
| Message | `feat(assets): add brand asset foundation and PWA manifest (MVP-004)` |

Note archive : un commit ultérieur `a424fcd` (`chore(assets): add final application icons and favicon`) a complété des icônes finales hors ticket MVP-004 formalisé ici.

---

# 9. Contraintes

Pas de Service Worker ; pas d’activation Mei ; respect Design Freeze.
