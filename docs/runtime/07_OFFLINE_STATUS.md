# 07 — Offline Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Offline Status |
| Fichier | `docs/runtime/07_OFFLINE_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 7 août 2026 — SW socle App Update (CH-014) |
| Phase actuelle | Développement MVP — SW update minimal ; Offline First / cache métier non commencés |
| Document de référence | `docs/18_PWA_OFFLINE.md`, `docs/26_PWA_APP_UPDATE.md` |
| Type | Runtime Register — état réel Offline First / PWA |
| Décisions conception | D-132 … D-142 (intention — non implémentées) |

> Ce registre décrit l’état **réel** de l’implémentation Offline First.  
> Il ne décrit jamais la stratégie prévue.

## 2. État général

| Domaine | État réel |
| --- | --- |
| Service Worker | **Socle update** — registration `/sw.js`, détection waiting, modale contrôlée (`docs/26`) ; **pas** de cache métier |
| Cache | Non commencé |
| IndexedDB | Non commencé |
| Synchronisation | Non commencé |
| Conflits | Non commencé |
| Téléchargements | Non commencé |
| File d’attente Offline | Non commencé |
| IA Offline | Non commencé |
| CV Offline | Non commencé |
| Virtual Humans Offline | Non commencé |
| Manifeste Web App | Fondation (MVP-004) — fichier + métadonnées ; **pas** d’installabilité garantie (icônes absentes) |

**Synthèse :** Offline First **non** implémenté (pas de cache / IndexedDB / sync). Service Worker **socle App Update** uniquement (CH-014 / `docs/26`) — hors MVP-017. Stockage applicatif local partiel via **localStorage**. Manifeste PWA fondation (MVP-004).

## 3. Classification Offline / Hybrid / Online

| Classe | Features Runtime classées | Constat |
| --- | --- | --- |
| Offline | **F-033** (MVP-008) | Onboarding 100 % local ; aucune dépendance réseau |
| Hybrid | Aucune | — |
| Online | Aucune | — |

Classification D-142 pour F-033 uniquement parmi les features touchées par MVP-008. Offline First global **non** déclaré.

## 4. Synchronisation

| Élément | État réel |
| --- | --- |
| Synchronisation | Non commencé |
| Reprise | Non commencé |
| Conflits | Non commencé |
| Versions | Non commencé |
| Idempotence (sync) | Non commencé |

## 5. Données locales

| Domaine | État réel |
| --- | --- |
| Préférences | localStorage (MVP-007) — **pas** IndexedDB / SW / sync |
| Onboarding | localStorage (MVP-008) — **pas** IndexedDB / SW / sync |
| Progression | localStorage (MVP-006) — **pas** IndexedDB / SW / sync |
| Curriculum | Embarqué en code (MVP-003) — pas de cache PWA |
| Médias | Non commencé — arborescence `public/` documentée (MVP-004) ; fichiers absents |
| Cache | Non commencé |

## 6. Conformité

| Élément | Statut |
| --- | --- |
| Conformité vs `18` | Conforme : Offline First non anticipé ; SW limité au cycle update (D-178 / `26`) ; cache métier reporté MVP-017 |
| Divergences | **Aucune** |
| Décisions Runtime | **Aucune** |

## 7. Incidents

| Type | Constat |
| --- | --- |
| Conflits Offline | Aucun |
| Pertes de données | Aucune |
| Erreurs Offline | Aucune |

## 8. Diagrammes

### 8.1 Architecture Offline (état réel)

```mermaid
flowchart TB
  subgraph Socle[Socle update]
    SW[Service Worker minimal]
  end
  subgraph Absent[Non commencé]
    Cache[Cache]
    IDB[IndexedDB]
    Q[Queue Offline]
    Sync[Sync engine]
  end
  UI[PWA UI] --> SW
  SW -.-> Cache
  SW -.-> IDB
  IDB -.-> Q
  Q -.-> Sync
```

### 8.2 État d’implémentation

```mermaid
pie title Offline Runtime — état réel
  "Non commencé Offline" : 1
  "SW update socle" : 1
```

### 8.3 Synchronisation

```mermaid
flowchart LR
  Local[Stockage local] -.->|non implémenté| Queue[File]
  Queue -.->|non implémenté| Server[Serveur]
  Server -.->|non implémenté| Local
```

### 8.4 Cycle de reprise

```mermaid
stateDiagram-v2
  [*] --> NonCommence
  NonCommence --> EnDeveloppement: ticket Offline
  EnDeveloppement --> EnTest
  EnTest --> Implemente
  Implemente --> Valide
```

### 8.5 Classification Offline / Hybrid / Online

```mermaid
flowchart TB
  Offline[Offline — F-033]
  Hybrid[Hybrid — 0]
  Online[Online — 0]
```

## 9. Gouvernance

Toute évolution Offline devra :

1. référencer un ticket ;  
2. classer la feature Offline / Hybrid / Online (D-142) ;  
3. respecter D-132 à D-142 ;  
4. vérifier la conformité avec `docs/18_PWA_OFFLINE.md` ;  
5. mettre à jour ce registre ;  
6. synchroniser `00_PROJECT_STATUS.md`.

## 10. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création du registre ; initialisation depuis l’état réel ; aucune implémentation Offline. |
| 5 août 2026 | MVP-004 — manifeste PWA + emplacements icônes ; Offline/SW restent Non commencé. |
| 5 août 2026 | MVP-005 — pratique locale en mémoire ; **pas** d’Offline First / SW (état pratique perdu au refresh). |
| 5 août 2026 | MVP-006 — historique progression en localStorage ; Offline First / SW toujours Non commencé. |
| 5 août 2026 | MVP-008 — onboarding localStorage classé **Offline** (D-142) ; Offline First / SW toujours Non commencé. |
| 7 août 2026 | CH-014 — SW **socle App Update** (`/sw.js`, modale, SKIP_WAITING) ; cache / Offline First toujours Non commencé ; MVP-017 non ouvert. |

## 11. Références

- `docs/18_PWA_OFFLINE.md`  
- `docs/26_PWA_APP_UPDATE.md`
- `docs/runtime/README.md`
- `docs/runtime/01_ARCHITECTURE_STATUS.md`
- `docs/25_DESIGN_FREEZE.md`

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Prochain document | `docs/runtime/08_ANALYTICS_STATUS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
