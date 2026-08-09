# 07 — Offline Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Offline Status |
| Fichier | `docs/runtime/07_OFFLINE_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 9 août 2026 — MVP-017 Fermé ; Offline/PWA Livré |
| Phase actuelle | Développement MVP — Offline cœur Livré ; sync non commencée |
| Document de référence | `docs/18_PWA_OFFLINE.md`, `docs/26_PWA_APP_UPDATE.md` |
| Type | Runtime Register — état réel Offline First / PWA |
| Décisions conception | D-132 … D-142 (intention — non implémentées) |

> Ce registre décrit l’état **réel** de l’implémentation Offline First.  
> Il ne décrit jamais la stratégie prévue.

## 2. État général

| Domaine | État réel |
| --- | --- |
| Service Worker | **Update + cache cœur** — `/sw.js` unique ; precache ; fetch strategies ; purge activate ; App Update préservé (`docs/26`) |
| Cache | **Livré** — `tcac-precache-${APP_BUILD_ID}` + `tcac-runtime-${APP_BUILD_ID}` ; PO validé ≈ **4,16 Mo** / 79 entrées (≤ 8 Mo) |
| IndexedDB | Non commencé (hors MVP-017) |
| Synchronisation | Non commencé (V1 / `F-027`) |
| Conflits | Non commencé |
| Téléchargements | Non commencé (`F-026` V2) |
| File d’attente Offline | Non commencé |
| IA Offline | Non commencé |
| CV Offline | Non commencé |
| Virtual Humans Offline | Non commencé |
| Manifeste Web App | Présent + icônes ; fallback `/hors-ligne` ; iOS eviction possible (non garanti) |

**Synthèse :** Cache cœur Offline **Livré** (MVP-017 fermé / CH-021). SW unique étendu. localStorage pratique/prefs/onboarding **hors** Cache Storage. Vidéos Network Only. iPhone/Safari manuel → MVP-018. MVP-012 MEDIA BLOCKED.

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
| Médias | Hero Mobile précachés (PO-A) ; Tablet/Desktop runtime ; 3 WebP mouvements précachés ; **0 MP4** en cache |
| Cache | Livré — precache + runtime versionnés Build ID |

## 6. Conformité

| Élément | Statut |
| --- | --- |
| Conformité vs `18` | Aligné cœur MVP (shell + cache essentiel + pratique locale) ; sync/IDB/packs hors scope ; D-178 préservé |
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
  "Cache cœur Livré" : 1
  "Sync / IDB non commencé" : 1
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
| 9 août 2026 | MVP-017 **ouvert** (cadrage Offline/PWA cache cœur) ; DESIGN DECISION REQUIRED ; aucun code ; icônes manifeste notées présentes ; MVP-012 MEDIA BLOCKED ; MVP-018 non ouvert. |
| 9 août 2026 | MVP-017 **Livré (code)** ; PO-A…D ; SW cache cœur + `/hors-ligne` ; budget ≈ 3,4 Mo ; Offline **En test** ; attente PO ; MVP-018 non ouvert. |
| 9 août 2026 | MVP-017 **fermé** (validation PO) ; Offline/PWA **Livré** ; precache ≈ 4,16 Mo / 79 entrées ; iPhone/Safari → MVP-018 ; CH-021. |

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
