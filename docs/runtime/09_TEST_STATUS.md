# 09 — Test Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Test Status |
| Fichier | `docs/runtime/09_TEST_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 5 août 2026 — MVP-005 |
| Phase actuelle | Développement MVP — tests unitaires Vitest |
| Document de référence | `docs/20_TEST_STRATEGY.md` |
| Type | Runtime Register — tests réellement réalisés |

> Ce registre suit exclusivement les tests **réellement** réalisés.

## 2. État général

| Domaine | État réel |
| --- | --- |
| Tests unitaires | **En cours** — Vitest ; **21** tests |
| Intégration | Non commencé |
| Fonctionnels | Non commencé |
| E2E | Non commencé |
| UX | Non commencé |
| Sécurité | Non commencé |
| RGPD | Non commencé |
| Offline | Non commencé |
| Analytics | Non commencé |
| Performances | Non commencé |

## 3. Couverture

| Périmètre | Couverture réelle |
| --- | --- |
| Globale | Non mesurée |
| Curriculum reader | Partielle (MVP-003) |
| Assets / manifeste | Partielle (MVP-004) |
| Practice reducer | Partielle (MVP-005) |
| API / Offline / Sécurité | 0 % |

## 4. Exécutions

| Indicateur | Valeur réelle |
| --- | --- |
| Campagnes exécutées | **3** (MVP-003, MVP-004, MVP-005) |

### 4.3 Campagne MVP-005

| Champ | Valeur |
| --- | --- |
| Date | 5 août 2026 |
| Outil | Vitest |
| Périmètre | `practice-reducer` (démarrage, étapes, pause/reprise, abandon, temps actif) |
| Résultat cumulé | **21 / 21 passed** |
| Build / tsc / eslint | OK |

## 5. Validations manuelles / hors suite

| Contrôle | Résultat |
| --- | --- |
| Routes `/pratique/[sessionId]` SSG | OK (3 séances) |
| Bouton Démarrer sur fiche | OK (lien vers `/pratique/...`) |
| Dialog quitter (pas de `confirm`) | OK (ConfirmationDialog) |

## 6. Incidents

Aucune anomalie.

## 7. Conformité

| Élément | Statut |
| --- | --- |
| Divergences | **Aucune** |

## 8. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création ; 0 test. |
| 5 août 2026 | MVP-003 — 6 tests reader. |
| 5 août 2026 | MVP-004 — 15 tests cumulés. |
| 5 août 2026 | MVP-005 — 21 tests cumulés (practice reducer). |

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Fin officielle | Oui |

*Fin officielle du document.*
