# Tickets

> Tai-Chi AI Coach
> Version 1.0
> Statut : **VALIDÉ**
> Phase : Développement
> Dépend de :
> - `docs/25_DESIGN_FREEZE.md`
> - `docs/runtime/README.md`

---

# 1. Objectif

Ce dossier contient tous les **tickets de développement** de Tai-Chi AI Coach.

Chaque ticket représente une unité de travail autonome permettant de faire évoluer le produit de manière incrémentale.

Les tickets sont la continuité directe de la documentation de conception.

Ils traduisent les spécifications validées en travaux de développement concrets.

---

# 2. Position dans le projet

Le cycle officiel du projet est désormais :

```text
Conception
        │
        ▼
Design Freeze
        │
        ▼
Runtime Registers
        │
        ▼
Tickets
        │
        ▼
Développement
        │
        ▼
Tests
        │
        ▼
Mise à jour Runtime
        │
        ▼
Commit
        │
        ▼
Release
```

---

# 3. Rôle des tickets

Un ticket décrit uniquement :

- le travail à réaliser ;
- son périmètre ;
- les critères d'acceptation ;
- les contraintes ;
- les Runtime Registers à mettre à jour.

Un ticket ne remplace jamais :

- la documentation de conception ;
- les Runtime Registers.

---

# 4. Source de vérité

La documentation de conception (`docs/00` à `docs/25`) reste la référence fonctionnelle et technique.

Les Runtime Registers décrivent l'état réel du projet.

Les tickets décrivent uniquement le travail à effectuer.

---

# 5. Structure d'un ticket

Chaque ticket doit respecter la structure suivante :

1. En-tête
2. Objectif
3. Documents de référence
4. Travail demandé
5. Hors périmètre
6. Critères d'acceptation
7. Runtime Registers à mettre à jour
8. Rapport attendu
9. Contraintes

Aucune autre structure ne doit être utilisée.

---

# 6. Convention de nommage

Les tickets utilisent la convention suivante :

```text
MVP-001_APP_SHELL.md
MVP-002_DESIGN_SYSTEM.md
MVP-003_CURRICULUM_LIBRARY.md
MVP-004_ASSET_PIPELINE.md
MVP-005_LOCAL_PRACTICE.md
...
```

Les identifiants sont uniques.

Ils ne doivent jamais être réutilisés.

---

# 7. Cycle de vie

Chaque ticket suit obligatoirement le cycle :

```text
À développer
        │
        ▼
En développement
        │
        ▼
En validation
        │
        ▼
Validé
        │
        ▼
Commit
        │
        ▼
Push
        │
        ▼
Fermé
```

---

# 8. Dépendances

Un ticket peut dépendre :

- d'un autre ticket ;
- d'un document de conception ;
- d'un Runtime Register.

Ces dépendances doivent être indiquées dans l'en-tête.

---

# 9. Règles de développement

Chaque ticket doit respecter :

- le Design Freeze ;
- les décisions validées ;
- l'architecture définie ;
- les standards UX ;
- les standards UI ;
- les standards de développement.

Aucun ticket ne peut remettre en cause la conception sans analyse d'impact validée.

---

# 10. Standards UI

Pour tous les tickets :

- aucun emoji ;
- uniquement Lucide Icons ;
- aucun `alert()` ;
- aucun `confirm()` ;
- uniquement Dialog / Modal ;
- PasswordInput avec bouton œil lorsqu'un mot de passe est présent ;
- interface en français ;
- responsive ;
- accessibilité complète.

Ces règles sont obligatoires.

---

# 11. Runtime Registers

Chaque ticket doit mettre à jour uniquement les Runtime Registers réellement impactés.

Aucun Runtime Register ne doit être modifié sans justification.

---

# 12. Tests

Un ticket n'est jamais considéré comme terminé tant que :

- le Build est valide ;
- TypeScript est valide ;
- ESLint est valide ;
- les tests prévus ont été exécutés.

Les tests réellement effectués doivent être documentés.

---

# 13. Commit

Chaque ticket doit proposer un message de commit au format Conventional Commits.

Le commit n'est réalisé qu'après validation du ticket.

---

# 14. Push

Le Push intervient uniquement après :

- validation du ticket ;
- mise à jour des Runtime Registers ;
- vérification des tests.

---

# 15. Rapport attendu

Chaque ticket doit fournir un rapport contenant :

## Développement

- fichiers créés ;
- fichiers modifiés.

## Fonctionnalités

- F-xxx concernées ;
- évolution ;
- justification.

## Validation

- Build ;
- TypeScript ;
- ESLint ;
- Tests.

## Runtime

- Runtime Registers modifiés ;
- Change History (CH-xxx) ;
- éventuelles Limitations (KL-xxx) ;
- éventuels Bugs (BUG-xxx).

## Commit

Message de commit proposé.

---

# 16. Gouvernance

Un ticket ne peut être fermé que si :

- les critères d'acceptation sont satisfaits ;
- les Runtime Registers sont synchronisés ;
- les tests sont validés ;
- le rapport est complet.

---

# 17. Contraintes

Les tickets ne doivent jamais :

- modifier la conception ;
- inventer des fonctionnalités ;
- développer hors périmètre ;
- ignorer les Runtime Registers ;
- ignorer les décisions validées.

---

# 18. Conclusion

Ce dossier constitue la référence officielle de la phase de développement.

Tous les développements de Tai-Chi AI Coach devront obligatoirement être réalisés à partir d'un ticket documenté conformément à ce guide.

---

# 19. Index des tickets (état réel)

| Ticket | Fichier | Statut | Change History | Commit |
| --- | --- | --- | --- | --- |
| MVP-001 | `MVP-001_APP_SHELL.md` | **Fermé** | CH-001 | `3c0b28c` |
| MVP-002 | `MVP-002_DESIGN_SYSTEM.md` | **Fermé** | CH-002 | `696a76f` |
| MVP-003 | `MVP-003_CURRICULUM_LIBRARY.md` | **Fermé** | CH-003 | `696a76f` |
| MVP-004 | `MVP-004_ASSET_PIPELINE.md` | **Fermé** | CH-004 | `6a9784a` |
| MVP-005 | `MVP-005_LOCAL_PRACTICE.md` | **Fermé** | CH-005 | `7652b2f` |
| MVP-006 | `MVP-006_LOCAL_PROGRESS.md` | **Fermé** | CH-006 | `7369676` |
| MVP-007 | `MVP-007_USER_PREFERENCES.md` | **Fermé** | CH-007 | `16cafbe` |
| MVP-008 | `MVP-008_LOCAL_ONBOARDING.md` | **Fermé** | CH-008 | — |
| MVP-008A | `MVP-008A_UI_REFRESH.md` | **Fermé** | CH-009 | `b6bad27` |
| MVP-008B | `MVP-008B_VISUAL_ENVIRONMENT.md` | **Fermé** | CH-010 / CH-011 | `50bf954` |
| MVP-009 | `MVP-009_SAFETY_WARNINGS.md` | **Fermé** | CH-012 | `9495f58` |
| MVP-010 | `MVP-010_PRESENTATION_AND_STYLES.md` | **Fermé** | CH-013 | `f40d34c` |
| MVP-011 | `MVP-011_MOVEMENTS_LIBRARY.md` | **Fermé** | CH-015 | `e8eebff` |
| MVP-012 | `MVP-012_PEDAGOGICAL_VIDEOS.md` | **Livré (code) / MEDIA BLOCKED / REFERENCE MOTION BLOCKED / attente média** | — | `0e19f1b` |
| MVP-013 | `MVP-013_BEGINNER_PATH.md` | **Fermé** | CH-017 | `c3b4a98` |
| MVP-014 | `MVP-014_DAILY_PROGRAM.md` | **Fermé** | CH-018 | — |

**Tickets actifs :** **MVP-012** (ouvert / MEDIA BLOCKED / REFERENCE MOTION BLOCKED ; attente média ; non fermé).

Note : MVP-002 et MVP-003 ont été livrés dans le même commit (`696a76f`).

---

# 20. Roadmap tickets post-MVP-008B (officielle)

Source de vérité de la **séquence de développement** après clôture de MVP-008B
(`50bf954e3bc7b3ecc4b90278c7f7a4184b080016`).

Les IDs `F-xxx` restent définis par `docs/02_PRODUCT_SCOPE.md` / `docs/05_FEATURES.md` / `docs/22_ROADMAP.md`.
Ce tableau fixe uniquement l’**ordre des tickets** MVP restants.

| Ticket | Périmètre | Titre | Statut fichier |
| --- | --- | --- | --- |
| MVP-009 | F-016 + F-031 | Prudence / sécurité avant pratique | **Fermé** (`MVP-009_SAFETY_WARNINGS.md`) |
| MVP-010 | F-001 + F-002 | Présentation du Tai Chi + styles | **Fermé** (`MVP-010_PRESENTATION_AND_STYLES.md`) |
| MVP-011 | F-005 + F-004 + F-007 | Bibliothèque mouvements + explications + images | **Fermé** (`e8eebff`) |
| MVP-012 | F-006 + enrichissement F-013 | Vidéos pédagogiques + intégration séances/mouvements | **Ouvert** — Livré (code) / MEDIA BLOCKED / REFERENCE MOTION BLOCKED / attente média (`0e19f1b`) |
| MVP-013 | F-003 | Parcours débutant structuré | **Fermé** (`c3b4a98`) |
| MVP-014 | F-008 + F-014 + F-015 | Programme quotidien + respiration + relaxation | **Fermé** (CH-018) |
| MVP-015 | F-009 + F-010 + F-032 + F-013 | Historique, progression, reprise persistante, séances complètes | Planifié (non ouvert) |
| MVP-016 | F-033 + F-028 + F-029 | Onboarding final + paramètres + accessibilité | Planifié |
| MVP-017 | Offline / PWA | Service Worker + cache cœur | Planifié |
| MVP-018 | Recette / gates | Validation contenus, tests finaux, publiabilité | Planifié |

### Frontière de version (cette roadmap)

**Hors MVP — ne pas introduire dans MVP-009…018 :**

- authentification, synchronisation cloud, compte (`F-039`, `F-027` → **V1**) ;
- AI Coach / Q-R (`F-019`, `F-020` → **V1**) ;
- Computer Vision, caméra, corrections posture (`F-021`, `F-022` → **V2**) ;
- Virtual Humans / Mei (`F-023` → **V2**).

Les fichiers détaillés MVP-010 → MVP-018 sont créés **uniquement à l’ouverture** de chaque ticket.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.1 |
| Statut | VALIDÉ |
| Emplacement | `docs/tickets/README.md` |
| Dernière mise à jour | 9 août 2026 — MVP-014 fermé ; MVP-012 MEDIA BLOCKED |
| Fin officielle | Oui |

*Fin officielle du document.*
