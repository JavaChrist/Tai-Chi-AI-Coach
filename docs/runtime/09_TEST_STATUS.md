# 09 — Test Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Test Status |
| Fichier | `docs/runtime/09_TEST_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 8 août 2026 — MVP-011 fermé / CH-015 |
| Phase actuelle | Développement MVP — tests unitaires Vitest |
| Document de référence | `docs/20_TEST_STRATEGY.md` |
| Type | Runtime Register — tests réellement réalisés |

## 2. État général

| Domaine | État réel |
| --- | --- |
| Tests unitaires | **En cours** — Vitest |
| Intégration / E2E / UX | Non commencé (validation Hero Light/Dark manuelle) |

## 3. Couverture

| Périmètre | Couverture réelle |
| --- | --- |
| Curriculum reader | Partielle |
| Assets / manifeste / Hero Light+Dark catalogue | Partielle (15 Light + 15 Dark `final` + fichiers disque) |
| Practice reducer | Partielle |
| Progress service / stats | Partielle (MVP-006) |
| Preference store / thème / tri | Partielle (MVP-007) |
| Onboarding service / steps / prefs | Partielle (MVP-008) |
| UI / Design System 12A | Revue manuelle + build (MVP-008A) — pas de suite E2E |
| Environnements Hero | Catalogue + présence fichiers Light/Dark (MVP-008B) |
| Safety F-016 / F-031 | Partielle (contenu + gate + page — MVP-009) |
| Discovery F-001 / F-002 | Partielle (contenu + page `/decouverte` — MVP-010) |
| PWA App Update socle | Partielle (SW source, register, prompt, route `/sw.js` — CH-014) |
| Mouvements F-004 / F-005 / F-007 | Partielle (reader + catalogue + fiche + accès bibliothèque — MVP-011) |

## 4. Exécutions

### Campagne MVP-008

| Champ | Valeur |
| --- | --- |
| Date | 5 août 2026 |
| Outil | Vitest |
| Périmètre | onboarding service / steps / prefs |
| Résultat cumulé | **45 / 45 passed** |
| Build / tsc / eslint | OK |

### Campagne MVP-008A (régression)

| Champ | Valeur |
| --- | --- |
| Date | 6 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | suites existantes (aucune logique métier modifiée) |
| Résultat cumulé | **45 / 45 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-008B Sprint 3 (Hero Light)

| Champ | Valeur |
| --- | --- |
| Date | 6 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | catalogue Hero Light/Dark + régression suites |
| Résultat cumulé | **48 / 48 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-008B Sprint Dark

| Champ | Valeur |
| --- | --- |
| Date | 7 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | 15 Light + 15 Dark `final`, fichiers disque, mapping, fallback |
| Résultat cumulé | **55 / 55 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-009 (Safety Warnings)

| Champ | Valeur |
| --- | --- |
| Date | 7 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | F-016 contenu/page ; F-031 gate pré-pratique ; régression suites |
| Résultat cumulé | **63 / 63 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-010 (Discovery)

| Champ | Valeur |
| --- | --- |
| Date | 7 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | F-001 / F-002 `/decouverte` ; accès Accueil ; régression |
| Résultat cumulé | **68 / 68 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne CH-014 (PWA App Update socle)

| Champ | Valeur |
| --- | --- |
| Date | 7 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | SW source, register Secure Context, update-prompt, route `/sw.js` ; régression |
| Résultat cumulé | **81 / 81 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-011 (Movements Library)

| Champ | Valeur |
| --- | --- |
| Date | 8 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | F-004 / F-005 / F-007 ; reader ; catalogue ; fiche ; régression `/bibliotheque` |
| Résultat cumulé | **95 / 95 passed** |
| Build / TypeScript / ESLint | OK |

## 5. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | MVP-003…007 — suites unitaires cumulées. |
| 5 août 2026 | MVP-008 — 45 tests cumulés (onboarding service). |
| 6 août 2026 | MVP-008A — régression 45/45 + build OK (refonte UI). |
| 6 août 2026 | MVP-008B Sprint 3 — tests catalogue Hero Light `final` + Dark `missing` ; CH-010. |
| 7 août 2026 | MVP-008B Sprint Dark — 15 Light + 15 Dark `final` + fichiers ; CH-011. |
| 7 août 2026 | MVP-009 — tests F-016 / F-031 + régression ; CH-012. |
| 7 août 2026 | MVP-009 **fermé** — campagne 63/63 confirmée (validation PO). |
| 7 août 2026 | MVP-010 — 68/68 ; `/decouverte` ; CH-013. |
| 7 août 2026 | MVP-010 **fermé** — campagne 68/68 confirmée (validation PO). |
| 7 août 2026 | CH-014 — PWA App Update socle ; 81/81 ; build OK ; MVP-017 non ouvert. |
| 8 août 2026 | MVP-011 — 95/95 ; F-004/F-005/F-007 En test ; CH-015 ; MVP-012 non ouvert. |
| 8 août 2026 | MVP-011 **fermé** — campagne 95/95 confirmée (validation PO). |

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Fin officielle | Oui |

*Fin officielle du document.*
