# 01 — Architecture Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Architecture Status |
| Fichier | `docs/runtime/01_ARCHITECTURE_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 5 août 2026 — MVP-001 App Shell |
| Responsable documentaire | Projet Tai-Chi-AI-Coach |
| Type | Runtime Register — état réel de l’architecture |
| Référence conception | `docs/13_TECH_ARCHITECTURE.md` (architecture cible / gelée — non recopié ici) |

> Ce registre décrit uniquement ce qui est **effectivement implémenté**.  
> Il ne décrit jamais l’architecture cible.

## 2. État général des couches

Référentiel de lecture des noms de couches : conception `13` (pour comparaison).  
État ci-dessous = **réalité d’implémentation**.

| Couche | État réel | Constat |
| --- | --- | --- |
| Frontend | **En cours** | Socle Next.js App Router + App Shell dans `web/` (MVP-001) ; pas encore PWA |
| Backend | **Non commencé** | Aucun service backend |
| API | **Non commencé** | Aucun endpoint exposé |
| Base de données | **Non commencé** | Aucun schéma / instance applicative |
| IA Coach | **Non commencé** | Aucune couche d’abstraction ni fournisseur branché |
| Computer Vision | **Non commencé** | Aucun pipeline CV |
| Virtual Humans | **Non commencé** | Aucun guide / runtime VH |
| Offline | **Non commencé** | Aucun Service Worker / stockage local applicatif |
| Analytics | **Non commencé** | Aucun pipeline / sink analytics |
| Sécurité | **Non commencé** | Aucun contrôle auth / sécu applicatif déployé |

## 3. Modules

Modules issus de l’architecture validée (`13`) — état d’**implémentation uniquement**.

| Module | État | Responsable | Ticket d’origine | Dernière mise à jour |
| --- | --- | --- | --- | --- |
| Interface utilisateur (PWA) | En cours | Projet | MVP-001 | 5 août 2026 — shell UI, pas PWA |
| Couche application / orchestration client | En cours | Projet | MVP-001 | 5 août 2026 — layout / navigation |
| Modules métiers (curriculum, progression, etc.) | Non commencé | — | — | — |
| Couche d’abstraction IA | Non commencé | — | — | — |
| Backend API (stateless) | Non commencé | — | — | — |
| Persistance (PostgreSQL) | Non commencé | — | — | — |
| Stockage objet | Non commencé | — | — | — |
| Synchronisation | Non commencé | — | — | — |
| Offline / cache PWA | Non commencé | — | — | — |
| Computer Vision | Non commencé | — | — | — |
| Virtual Humans / Mei | Non commencé | — | — | — |
| Analytics (technique / produit) | Non commencé | — | — | — |
| Auth / sécurité applicative | Non commencé | — | — | — |
| Monitoring / journalisation applicative | Non commencé | — | — | — |

## 4. Conformité avec le Design Freeze

| Élément | Statut | Justification |
| --- | --- | --- |
| Architecture cible documentée (`13`) | Conforme (conception) | Baseline figée par `25` ; non remise en cause |
| Architecture réellement déployée | Partielle | Frontend shell uniquement ; reste conforme au périmètre MVP-001 |
| Divergence d’implémentation | **Aucune** | Stack Next.js/React/TS/Tailwind alignée `13` ; pas de backend inventé |

## 5. Écarts

Aucun écart connu.

Note factuelle : l’application vit dans le sous-dossier `web/` (repo documentaire à la racine).

## 6. Dette d’architecture

| Synthèse | Valeur |
| --- | --- |
| Dette d’architecture applicative constatée | **Aucune** |

Détail éventuel futur : `12_TECH_DEBT.md` (non créé à ce stade).

## 7. Décisions Runtime (impact architecture)

Aucune.

## 8. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création initiale — Design Freeze terminé ; architecture validée en conception ; aucun module développé ; aucun écart ; aucun ticket. |
| 5 août 2026 | MVP-001 : socle Frontend (`web/`) — Next.js, React, TS, Tailwind, shadcn/ui, Lucide ; App Shell + routes vides ; Frontend = En cours. |

## 9. Diagrammes

### 9.1 Couches de l’architecture (état réel)

```mermaid
flowchart TB
  subgraph NonCommence[Toutes couches — Non commencé]
    FE[Frontend]
    BE[Backend]
    API[API]
    DB[Base de données]
    AI[IA Coach]
    CV[Computer Vision]
    VH[Virtual Humans]
    OFF[Offline]
    AN[Analytics]
    SEC[Sécurité]
  end
```

### 9.2 État des modules

```mermaid
pie title Modules architecture — état réel
  "Non commencés" : 14
  "En cours / implémentés" : 0
```

### 9.3 Dépendances (référence structurelle — non implémentées)

```mermaid
flowchart TB
  UI[PWA UI]
  APP[Couche application]
  METIER[Modules métiers]
  AIABS[Abstraction IA]
  API[Backend API]
  DATA[(Persistance)]
  UI -.->|non implémenté| APP
  APP -.->|non implémenté| METIER
  METIER -.->|non implémenté| AIABS
  METIER -.->|non implémenté| API
  API -.->|non implémenté| DATA
```

### 9.4 Progression

```mermaid
flowchart LR
  A[Conception 13 gelée] --> B[Registre 01 ACTIF]
  B --> C[Implémentation modules]
  C --> D[Mise à jour états]
  style C fill:transparent,stroke-dasharray: 5 5
```

### 9.5 Conformité

```mermaid
flowchart LR
  Target[13 Architecture cible]
  Real[État réel = rien]
  Target -->|comparaison| Check{Écart?}
  Real --> Check
  Check -->|Non| OK[Aucune divergence]
```

## 10. Gouvernance

Toute évolution de l’architecture devra :

1. identifier les modules / couches impactés ;  
2. référencer le ticket ;  
3. vérifier la conformité avec `docs/13_TECH_ARCHITECTURE.md` ;  
4. documenter tout écart réel ;  
5. mettre à jour ce registre ;  
6. répercuter la synthèse dans `00_PROJECT_STATUS.md` si l’état global change.

## 11. Règles de mise à jour

Mettre à jour ce registre :

- après chaque ticket modifiant l’architecture ;  
- après chaque nouveau module réellement livré ;  
- après chaque refactoring important validé ;  
- après toute divergence constatée avec `13`.

Ne jamais marquer un module **Implémenté** ou **Validé** sans validation réelle.

## 12. Initialisation — constat

| Fait | Valeur |
| --- | --- |
| Design Freeze | Terminé |
| Architecture (conception) | Validée / gelée (`13`, `25`) |
| Modules développés | Aucun |
| Écarts | Aucun |
| Tickets | Aucun |
| Dette d’architecture | Aucune identifiée |

## 13. Prochaine étape

Créer :

`docs/runtime/02_FEATURE_STATUS.md`

## 14. Références

- `docs/runtime/README.md`  
- `docs/runtime/00_PROJECT_STATUS.md`  
- `docs/13_TECH_ARCHITECTURE.md`  
- `docs/25_DESIGN_FREEZE.md`  

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Prochain document | `docs/runtime/02_FEATURE_STATUS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
