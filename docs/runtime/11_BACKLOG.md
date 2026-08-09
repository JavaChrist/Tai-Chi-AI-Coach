# 11 — Backlog Runtime

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Backlog Runtime |
| Fichier | `docs/runtime/11_BACKLOG.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 9 août 2026 — MVP-018 GATE 9 PASS ; GATE 10 ONLY ; MVP-012 MEDIA BLOCKED |
| Phase actuelle | Développement MVP — MVP-012 MEDIA BLOCKED ; MVP-018 GATE 10 |
| Document de référence (intentions) | `docs/22_ROADMAP.md`, `docs/tickets/README.md` §20 |
| Type | Runtime Register — travaux **réellement ouverts** |

> Ce registre ne remplace pas la Roadmap.
> La Roadmap définit les intentions `F-xxx`.
> `docs/tickets/README.md` §20 définit la **séquence de tickets**.
> Ici : uniquement les tickets **réellement ouverts** (fichier existant, non fermé).

## 2. État général

| Catégorie | Nombre réel |
| --- | --- |
| Tickets ouverts | **2** (**MVP-012**, **MVP-018**) |
| Améliorations ouvertes | **0** |
| Reports ouverts | **0** |
| Idées retenues (ticketées) | **0** |
| Priorités Runtime actives | P0 — MVP-012 (GATE 10 / 3 MP4) ; P0 — MVP-018 (GATE 10 restant) |

**Synthèse :** MVP-012 **ouvert** (MEDIA BLOCKED). MVP-018 GATES 1→9 **PASS** ; release **BLOCKED BY GATE 10 ONLY**.

## 3. Tickets ouverts

| ID ticket | Titre | Priorité | Statut | Date ouverture | Remarque |
| --- | --- | --- | --- | --- | --- |
| MVP-012 | Vidéos pédagogiques + intégration séances/mouvements (F-006 + enrichissement F-013) | P0 | Livré (code) / MEDIA BLOCKED / REFERENCE MOTION BLOCKED / attente média | 8 août 2026 | 3 MP4 min (PO-R3) ; statut **inchangé** |
| MVP-018 | Recette finale / gates / publiabilité | P0 | Ouvert — GATES 1→9 **PASS** ; GATE 10 BLOCKED | 9 août 2026 | Release BLOCKED BY GATE 10 ONLY |

## 4. Séquence planifiée (non ouverte — pas d’entrée backlog)

Voir `docs/tickets/README.md` §20 : séquence MVP-009→018. Tickets post-recette éventuels : uniquement via nouveaux fichiers si Go/No-Go l’exige.

Ne pas dupliquer ici les tickets sans fichier.

## 5. Améliorations / reports

| Type | ID | Description | Ticket | Statut |
| --- | --- | --- | --- | --- |
| — | — | — | — | Aucun élément |

## 6. Règle d’entrée

Un élément n’apparaît en §3 que s’il est **réellement ouvert** (fichier ticket existant, statut non Fermé).

Les intentions `22_ROADMAP.md` **ne doivent pas** être copiées en masse.

## 7. Diagrammes

### 7.1 État du backlog

```mermaid
pie title Backlog Runtime — état réel
  "Ouvert" : 2
  "Fermé / hors liste" : 0
```

### 7.2 Cycle d’un ticket

```mermaid
stateDiagram-v2
  [*] --> Ouvert
  Ouvert --> EnCours
  EnCours --> Termine: MAJ registres
  Termine --> [*]
  note right of Ouvert: MVP-012 MEDIA BLOCKED + MVP-018 recette
```

## 8. Gouvernance

1. Ouvrir un ticket (fichier) avant inscription §3.
2. Retirer à la clôture.
3. Synchroniser `00_PROJECT_STATUS.md` (§ Développement).
4. Respecter la frontière V1/V2 (pas d’auth/sync/IA/CV/Mei dans MVP-009…018).

## 9. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création du registre ; initialisation ; aucun ticket Runtime. |
| 8 août 2026 | MVP-012 **ouvert** (MEDIA BLOCKED) ; code livré ; non fermé. |
| 8 août 2026 | MVP-013 **ouvert** puis **fermé** (F-003 Livré). |
| 8 août 2026 | MVP-014 **ouvert** (cadrage F-008 + F-014 + F-015). |
| 8–9 août 2026 | MVP-014 code (F-008/F-015 puis F-014) ; CONTENT BLOCKED levé. |
| 9 août 2026 | MVP-014 **fermé** (validation PO) ; F-008/F-014/F-015 Livré ; CH-018 ; TD-001 notée. |
| 9 août 2026 | MVP-015 **ouvert** (cadrage F-009 + F-010 + F-032 + finalisation F-013) ; DESIGN DECISION REQUIRED ; aucun code ; MVP-012 MEDIA BLOCKED ; MVP-016 non ouvert. |
| 9 août 2026 | MVP-015 **Livré (code)** ; PO-A…G validées ; F-009/F-010/F-032/F-013 En test ; attente PO ; MVP-016 non ouvert. |
| 9 août 2026 | MVP-015 **fermé** (validation PO) ; F-009/F-010/F-032/F-013 Livré ; CH-019 ; retiré du backlog ouvert ; MVP-016 non ouvert. |
| 9 août 2026 | MVP-016 **ouvert** (cadrage F-033 + F-028 + F-029) ; DESIGN DECISION REQUIRED ; aucun code ; MVP-017 non ouvert. |
| 9 août 2026 | MVP-016 **Livré (code)** ; PO-A…F ; F-033/F-028/F-029 En test ; TD-001 fermée ; attente PO ; MVP-017 non ouvert. |
| 9 août 2026 | MVP-016 **fermé** (validation PO) ; F-033/F-028/F-029 Livré ; CH-020 ; retiré du backlog ouvert ; MVP-017 non ouvert. |
| 9 août 2026 | MVP-017 **ouvert** (cadrage Offline/PWA cache cœur) ; DESIGN DECISION REQUIRED ; aucun code ; MVP-018 non ouvert. |
| 9 août 2026 | MVP-017 **Livré (code)** ; PO-A…D ; Offline En test ; attente PO ; MVP-018 non ouvert. |
| 9 août 2026 | MVP-017 **fermé** (validation PO) ; Offline Livré ; CH-021 ; retiré du backlog ouvert ; MVP-018 non ouvert. |
| 9 août 2026 | MVP-018 **ouvert** (AUDIT + PLAN DE RECETTE) ; aucun code ; MVP-012 MEDIA BLOCKED **conservé** ; gate DESIGN/PRODUCT DECISION REQUIRED (F-006). |
| 9 août 2026 | MVP-018 — PO-R1→R7 / RD-001 ; **READY FOR FINAL QA** ; RELEASE PUBLICATION BLOCKED ; GATES 1→8 READY ; GATE 9/10 BLOCKED. |
| 9 août 2026 | MVP-018 campagne GATES 1→8 ; **BLOCKED BY P0/P1** ; BUG-001…003 enregistrés ; aucun fix. |
| 9 août 2026 | MVP-018 fix round ; BUG-001/002/003 résolus ; **READY FOR GATE 9/10**. |
| 9 août 2026 | MVP-018 GATE 9 **PASS** (PO iPhone/Safari/A2HS/offline) ; release **BLOCKED BY GATE 10 ONLY**. |

## 10. Références

- `docs/22_ROADMAP.md` §7.5
- `docs/tickets/README.md` §19–§20
- `docs/tickets/MVP-012_PEDAGOGICAL_VIDEOS.md`
- `docs/tickets/MVP-014_DAILY_PROGRAM.md`
- `docs/tickets/MVP-015_HISTORY_PROGRESS_RESUME.md`
- `docs/tickets/MVP-016_ONBOARDING_SETTINGS_ACCESSIBILITY.md`
- `docs/tickets/MVP-017_OFFLINE_PWA_CACHE.md`
- `docs/tickets/MVP-018_RELEASE_READINESS.md`
- `docs/runtime/README.md`
- `docs/25_DESIGN_FREEZE.md`

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Fin officielle | Oui |

*Fin officielle du document.*
