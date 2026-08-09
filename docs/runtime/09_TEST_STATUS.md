# 09 — Test Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Test Status |
| Fichier | `docs/runtime/09_TEST_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 9 août 2026 — MVP-017 Fermé ; 181/181 ; Offline Livré |
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
| Offline / cache cœur MVP-017 | Validée PO (Chrome/Edge prod locale) ; iPhone/Safari manuel → MVP-018 |
| Mouvements F-004 / F-005 / F-007 | Partielle (reader + catalogue + fiche + accès bibliothèque — MVP-011) |
| Parcours débutant F-003 | Partielle (BeginnerPath reader + page `/parcours/debutant` + accès Accueil/Découverte/Séances — MVP-013) |
| Programme quotidien F-008 / Respiration F-014 / Relaxation F-015 | Partielle (`resolveDailyProgram` + `/respiration` + steps `retour` — MVP-014) |
| Historique / progression / reprise F-009·F-010·F-032 | Partielle (resume store, FIFO 200, ProgressSummary, Accueil, wipe Profil — MVP-015) |
| Onboarding / paramètres / a11y F-033·F-028·F-029 | Partielle (CTA BeginnerPath, skip link, Switch touch, header z-index TD-001 — MVP-016) |

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

### Campagne MVP-013 (Beginner Path)

| Champ | Valeur |
| --- | --- |
| Date | 8 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | F-003 `/parcours/debutant` ; BeginnerPath ; accès Accueil/Découverte/Séances ; régression |
| Résultat cumulé | **116 / 116 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-014 partielle (Daily Program + Retour)

| Champ | Valeur |
| --- | --- |
| Date | 8 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | F-008 `resolveDailyProgram` + Accueil ; F-015 steps `retour` ; F-014 non livré ; régression |
| Résultat cumulé | **132 / 132 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-014 F-014 (Respiration calme)

| Champ | Valeur |
| --- | --- |
| Date | 9 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | F-014 `/respiration` ; corpus `08` §28.1 ; Accueil ; régression F-008/F-015 |
| Résultat cumulé | **136 / 136 passed** |
| Build / TypeScript / ESLint | OK |

### Campagne MVP-015 (History / Progress / Resume)

| Champ | Valeur |
| --- | --- |
| Date | 9 août 2026 |
| Outil | Vitest + Next build + ESLint + `tsc` |
| Périmètre | F-009/F-010/F-032/F-013 ; resume store ; FIFO 200 ; ProgressSummary ; Accueil ; wipe Profil ; régression |
| Résultat cumulé | **161 / 161 passed** |
| Build / TypeScript / ESLint | OK |
| Validation PO | Desktop/Mobile × Light/Dark OK |

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
| 8 août 2026 | MVP-013 — 116/116 ; F-003 En test ; CH-017 ; MVP-012 MEDIA BLOCKED. |
| 8 août 2026 | MVP-013 **fermé** — campagne 116/116 confirmée (validation PO). |
| 8 août 2026 | MVP-014 partiel — 132/132 ; F-008/F-015 En test ; F-014 CONTENT BLOCKED. |
| 9 août 2026 | MVP-014 F-014 — 136/136 ; Respiration calme ; CONTENT BLOCKED levé. |
| 9 août 2026 | MVP-014 **fermé** — campagne 136/136 confirmée (validation PO). |
| 9 août 2026 | MVP-015 — 161/161 ; reprise persistante + progression path + FIFO + wipe ; attente PO. |
| 9 août 2026 | MVP-015 **fermé** — campagne 161/161 confirmée (validation PO) ; CH-019. |
| 9 août 2026 | MVP-016 — tests skip link / summary CTA / Switch touch / routes post-onboarding / header TD-001 ; attente PO. |
| 9 août 2026 | MVP-016 **fermé** — campagne 167/167 confirmée (validation PO) ; CH-020. |
| 9 août 2026 | MVP-017 Livré (code) — tests precache/SW/lifecycle/budget/fallback ; 181/181 ; attente PO manuelle offline. |
| 9 août 2026 | MVP-017 **fermé** — campagne offline PO OK (precache ≈ 4,16 Mo) ; iPhone/Safari reporté MVP-018 ; CH-021. |

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Fin officielle | Oui |

*Fin officielle du document.*
