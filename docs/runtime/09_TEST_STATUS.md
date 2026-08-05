# 09 — Test Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Test Status |
| Fichier | `docs/runtime/09_TEST_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 5 août 2026 — MVP-004 |
| Phase actuelle | Développement MVP — tests unitaires Vitest |
| Document de référence | `docs/20_TEST_STRATEGY.md` |
| Type | Runtime Register — tests réellement réalisés |

> Ce registre suit exclusivement les tests **réellement** réalisés.  
> La stratégie reste dans `20` — non confondre stratégie et exécution.

## 2. État général

| Domaine | État réel |
| --- | --- |
| Tests unitaires | **En cours** — Vitest ; 15 tests (curriculum + assets/AppBrand/manifeste) |
| Intégration | Non commencé |
| Fonctionnels | Non commencé |
| E2E | Non commencé |
| UX | Non commencé (contrôles manuels documentés §5) |
| Sécurité | Non commencé |
| RGPD | Non commencé |
| Offline | Non commencé |
| Analytics | Non commencé |
| Performances | Non commencé |

**Synthèse :** suites unitaires MVP-003 et MVP-004. Pas de campagne produit complète.

## 3. Couverture

| Périmètre | Couverture réelle |
| --- | --- |
| Globale | Non mesurée (pas de seuil produit) |
| Architecture | Non mesurée |
| Features | Partielle — lecture SessionTemplate (F-013 fondation) |
| Data | Partielle — curriculum local |
| Assets / PWA fondation | Partielle — catalogue, AppBrand, manifeste JSON |
| API | 0 % |
| Sécurité | 0 % |
| RGPD | 0 % |
| Offline | 0 % |
| Analytics | 0 % |
| Déploiement | 0 % |

## 4. Exécutions

| Indicateur | Valeur réelle |
| --- | --- |
| Campagnes exécutées | **2** (locales, MVP-003 puis MVP-004) |
| Campagnes prévues (runtime planifié) | Aucune campagne Runtime formelle hors ticket |

### 4.1 Campagne MVP-003

| Champ | Valeur |
| --- | --- |
| Date | 5 août 2026 |
| Outil | Vitest (`npm test` dans `web/`) |
| Périmètre | `curriculum-reader` |
| Résultat | **6 / 6 passed** |

### 4.2 Campagne MVP-004

| Champ | Valeur |
| --- | --- |
| Date | 5 août 2026 |
| Outil | Vitest (`npm test` dans `web/`) |
| Périmètre | catalogue assets, manifeste JSON, AppBrand (fallback + logoSrc + lien) |
| Résultat | **15 / 15 passed** (cumul suites) |
| Build / tsc / eslint | OK |

## 5. Validations manuelles / hors suite

| Contrôle | Résultat | Preuve |
| --- | --- | --- |
| Lien carte → fiche | OK | MVP-003 |
| Fiche valide SSG | OK | MVP-003 |
| Header sans logo cassé | OK | `AppBrand` fallback textuel ; build OK |
| Manifeste JSON valide | OK | test + parse fichier |
| Chemins manquants non rendus | OK | test AppBrand + statut `missing` |

Pas de tests E2E navigateur exécutés.

## 6. Incidents

| Type | Constat |
| --- | --- |
| Anomalies de test | Aucune |
| Bugs découverts par tests | Aucun |
| Régressions | Aucune |

## 7. Conformité

| Élément | Statut |
| --- | --- |
| Conformité vs `20` | Tranches unitaires alignées tickets ; pyramide incomplète |
| Divergences | **Aucune** |
| Décisions Runtime | **Aucune** |

## 8. Diagrammes

### 8.1 Pyramide de tests (état réel)

```mermaid
flowchart TB
  E2E[E2E — 0]
  F[Fonctionnels — 0]
  I[Intégration — 0]
  U[Unitaires — 15]
  E2E --- F
  F --- I
  I --- U
```

### 8.2 Couverture

```mermaid
pie title Couverture tests — état réel
  "Non mesuré / non couvert" : 1
  "Suites unitaires MVP-003/004" : 1
```

### 8.3 Progression

```mermaid
stateDiagram-v2
  [*] --> NonCommence
  NonCommence --> EnCours: MVP-003 Vitest
  EnCours --> Rapport
  Rapport --> MajRegistre
```

### 8.4 Workflow

```mermaid
flowchart LR
  T[Ticket] --> Test[Exécution]
  Test --> Res[Résultats]
  Res --> R09[MAJ 09]
  R09 --> R00[Sync 00]
```

### 8.5 Conformité

```mermaid
flowchart LR
  C20[20 stratégie] --> Q{Écart exécution?}
  Real[Vitest MVP-003/004] --> Q
  Q -->|Non| OK[Aucune divergence]
```

## 9. Gouvernance

Toute campagne de test devra :

1. référencer les tickets concernés ;  
2. enregistrer résultats factuels (pass/fail, date) ;  
3. mettre à jour ce registre ;  
4. synchroniser `00_PROJECT_STATUS.md` ;  
5. ouvrir/mettre à jour `13_BUGS.md` si anomalies.

## 10. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création du registre ; initialisation ; aucune exécution de test. |
| 5 août 2026 | MVP-003 — Vitest ajouté ; 6 tests reader OK. |
| 5 août 2026 | MVP-004 — tests assets / AppBrand / manifeste ; **15 / 15** OK. |

## 11. Références

- `docs/20_TEST_STRATEGY.md`  
- `docs/runtime/README.md`  
- `docs/25_DESIGN_FREEZE.md`  

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Prochain document | `docs/runtime/10_DEPLOYMENT_STATUS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
