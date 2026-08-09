# 10 — Deployment Status

## 1. Statut du registre

| Champ | Valeur |
| --- | --- |
| Nom du registre | Deployment Status |
| Fichier | `docs/runtime/10_DEPLOYMENT_STATUS.md` |
| Version du registre | 1.0 |
| Statut | **ACTIF** |
| Dernière mise à jour | 9 août 2026 — GATE 9 PASS (iPhone PO) ; recette HTTPS |
| Phase actuelle | MVP-018 — GATE 9 PASS ; release bloquée par GATE 10 seulement |
| Document de référence | `docs/21_DEPLOYMENT.md` |
| Type | Runtime Register — état réel du déploiement |

> Ce registre suit exclusivement l’état **réel** du déploiement.
> Il ne décrit jamais le déploiement prévu.

## 2. État général

| Domaine | État réel |
| --- | --- |
| Environnements | Recette Vercel active |
| Configurations | Root `.` (= `web/`) ; Next.js ; `npm run build` |
| Secrets | Aucun secret MVP requis |
| Sauvegardes | Non commencé |
| Restauration | Non commencé |
| Monitoring | Non commencé |
| Publication PWA | Recette HTTPS validée iPhone/Safari (GATE 9 PASS) — **pas** Go public produit |
| Rollback | Via Vercel deployments |
| Disponibilité | Recette OK (`tai-chi-ai-coach.vercel.app`) |

**Synthèse :** https://tai-chi-ai-coach.vercel.app — GATE 9 PASS (PO iPhone). Release publique toujours bloquée par GATE 10 (F-006).

## 3. Environnements

| Environnement | État réel |
| --- | --- |
| Local / développement | Actif (`web/`) |
| Staging / préprod / recette | **Actif** — https://tai-chi-ai-coach.vercel.app |
| Production produit (Go) | **Non** — GATE 10 BLOCKED |

## 4. Projet Vercel

| Champ | Valeur |
| --- | --- |
| Project ID | `prj_LebAtfHuTLvEzJswATsA5S0GXbk2` |
| Nom | `tai-chi-ai-coach` |
| Root Directory | `.` (lié au dossier applicatif `web/`) |
| Framework | Next.js |
| Build | `npm run build` |
| Node | 24.x |
| URL principale recette | https://tai-chi-ai-coach.vercel.app |

## 5. Incidents

| Type | Constat |
| --- | --- |
| Incidents Runtime | Aucun |
| Rollbacks | Aucun |
| Indisponibilités | Aucune |

## 6. Conformité

| Élément | Statut |
| --- | --- |
| Conformité vs `21` | Recette opérationnelle ; Go prod hors scope tant que GATE 9/10 non PASS |
| Divergences | Runtime antérieur « Non commencé » levé pour la recette |
| Décisions Runtime | RD-001 (publiabilité) — déploiement recette autorisé PO-R6 |

## 7. Historique

| Date | Événement |
| --- | --- |
| 5 août 2026 | Création registre — aucun déploiement. |
| 9 août 2026 | Projet Vercel créé / lié ; recette HTTPS ; URL `tai-chi-ai-coach.vercel.app`. |
| 9 août 2026 | GATE 9 **PASS** — validation PO iPhone réel / Safari / A2HS / offline sur l’URL recette. |

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | ACTIF |
| Fin officielle | Oui |

*Fin officielle du document.*
