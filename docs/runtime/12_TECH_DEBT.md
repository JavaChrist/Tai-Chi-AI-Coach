# 12 — Tech Debt

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Tech Debt |
| Fichier | `docs/runtime/12_TECH_DEBT.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 5 août 2026 |
| Phase actuelle | Post–Design Freeze — initialisation Runtime |
| Type | Runtime Register — dette technique **constatée** |

> Uniquement de la dette technique observée.  
> Ni idées, ni améliorations, ni évolutions futures.

## 2. État général

| Domaine | Dette identifiée |
| --- | --- |
| Architecture | Aucune dette identifiée |
| Code | Aucune dette identifiée |
| Performances | Aucune dette identifiée |
| Sécurité | Aucune dette identifiée |
| Offline | Aucune dette identifiée |
| Tests | Aucune dette identifiée |
| Documentation Runtime | Aucune dette technique applicative (écarts doc hors scope TD-xxx — voir `00` R-PS-002) |

**Synthèse :** aucune dette technique applicative. Pas de code → rien à constater au sens TD.

## 3. Dette détaillée

Identifiants : `TD-xxx` (non réutilisés).

| ID | Description | Module | Sévérité | Ticket | Statut | Date |
| --- | --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — | Aucune entrée |

## 4. Gouvernance

1. Une dette n’est créée que si elle est **réellement constatée**.  
2. Toute entrée `TD-xxx` doit référencer un ticket.  
3. Sévérité : Critique / Majeure / Mineure.  
4. Clôture uniquement après correction validée + MAJ registre.  
5. Synchroniser `00_PROJECT_STATUS.md` si le volume impacte l’état global.

## 5. Diagrammes

### 5.1 Répartition

```mermaid
pie title Dette technique par domaine
  "Aucune" : 1
```

### 5.2 Sévérité

```mermaid
flowchart LR
  C[Critique — 0] --- M[Majeure — 0]
  M --- m[Mineure — 0]
```

### 5.3 Évolution

```mermaid
flowchart LR
  Empty[0 TD] --> Future[Entrées après constat]
  style Future stroke-dasharray: 5 5
```

### 5.4 Cycle de vie

```mermaid
stateDiagram-v2
  [*] --> Identifiee: constat + ticket
  Identifiee --> EnCours
  EnCours --> Resolue
  Resolue --> [*]
```

### 5.5 État global

```mermaid
flowchart TB
  TD[Dette technique applicative = 0]
```

## 6. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création du registre ; initialisation ; aucune dette ; aucun bug associé. |

## 7. Références

- `docs/runtime/README.md`  
- `docs/runtime/00_PROJECT_STATUS.md`  
- `docs/25_DESIGN_FREEZE.md`  

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Prochain document | `13_BUGS.md` / puis `14_DECISIONS_RUNTIME.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
