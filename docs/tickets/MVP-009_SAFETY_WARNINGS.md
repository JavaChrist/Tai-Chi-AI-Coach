# MVP-009_SAFETY_WARNINGS

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **À développer**
> Phase : MVP (socle Pré-MVP hérité)
> Emplacement : `docs/tickets/MVP-009_SAFETY_WARNINGS.md`
> Dépend de :
> - MVP-008B_VISUAL_ENVIRONMENT (Fermé — `50bf954`)
> - `docs/02_PRODUCT_SCOPE.md`
> - `docs/05_FEATURES.md`
> - `docs/25_DESIGN_FREEZE.md`

---

# 1. Objectif

Livrer le socle de **prudence / sécurité** requis avant tout test utilisateur du MVP :

- **F-016** — Conseils de sécurité
- **F-031** — Avertissements avant pratique

Aucune autre fonctionnalité.

Pas d’authentification, sync, IA, caméra, Computer Vision ni Virtual Humans / Mei.

---

# 2. Documents de référence

Lire obligatoirement :

- `docs/02_PRODUCT_SCOPE.md` (§ Pré-MVP, gates §17)
- `docs/05_FEATURES.md` (F-016, F-031)
- `docs/03_PERSONAS.md`
- `docs/04_USER_JOURNEYS.md`
- `docs/08_TAI_CHI_CURRICULUM.md`
- `docs/12_UX_UI.md`
- `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`
- `docs/17_PRIVACY_RGPD.md` (formulation non médicale)
- `docs/20_TEST_STRATEGY.md`
- `docs/22_ROADMAP.md`
- `docs/25_DESIGN_FREEZE.md`
- `docs/tickets/README.md`

Runtime à consulter / mettre à jour à la clôture :

- `00_PROJECT_STATUS.md`
- `02_FEATURE_STATUS.md`
- `09_TEST_STATUS.md`
- `11_BACKLOG.md`
- `17_CHANGE_HISTORY.md`

---

# 3. Travail demandé

## 3.1 F-016 — Conseils de sécurité

Contenu stable, consultable, non médical :

- arrêt si douleur ;
- adaptation de l’effort ;
- orientation vers un professionnel compétent ;
- absence de promesse médicale / de diagnostic / de traitement.

Accessible depuis l’UI (emplacement conforme UX / 12A — à trancher à l’implémentation sans inventer de feature).

## 3.2 F-031 — Avertissements avant pratique

Message de prudence **visible avant** le démarrage d’une séance guidée :

- arrêt si douleur ;
- pas de promesse médicale ;
- adaptation du niveau.

Dépend de F-016 (socle durable). Non anxiogène, explicite.

Intégration attendue sur le parcours de démarrage de pratique existant (`/pratique/...`) sans modifier la logique métier hors prudence.

## 3.3 Formulation

- Français UI ;
- ton calme (`12` / `12A`) ;
- aucun jargon médical ;
- aucun `alert` / `confirm` natif — Dialog / modale uniquement.

## 3.4 Tests

- Critères d’acceptation F-016 et F-031 (`05`) ;
- régression build / TypeScript / ESLint / tests existants ;
- parcours : voir avertissement avant pratique.

---

# 4. Hors périmètre

- Auth, sync cloud, compte (V1)
- IA Coach, Q/R (V1)
- Computer Vision, caméra, Mei / VH (V2)
- Médias vidéo, bibliothèque mouvements, parcours débutant (MVP-010+)
- Offline / Service Worker (MVP-017)
- Toute `F-xxx` hors F-016 et F-031

---

# 5. Critères d’acceptation

- [ ] F-016 consultable ; indique l’arrêt en cas de douleur ; exclut diagnostic et traitement
- [ ] F-031 visible avant de pratiquer ; mentionne l’arrêt si douleur ; exclut la promesse médicale
- [ ] Gate Pré-MVP documentaire respecté (`02` §17) pour ces deux IDs
- [ ] Build / TypeScript / ESLint / tests OK
- [ ] Runtime synchronisé (`02` Feature Status : F-016 / F-031)
- [ ] Aucune feature V1/V2 introduite

---

# 6. Runtime Registers à mettre à jour (à la clôture)

| Registre | Motif |
| --- | --- |
| `00_PROJECT_STATUS.md` | Ticket / prochaines étapes |
| `02_FEATURE_STATUS.md` | F-016, F-031 |
| `09_TEST_STATUS.md` | Campagne ticket |
| `11_BACKLOG.md` | Retrait ticket ouvert |
| `17_CHANGE_HISTORY.md` | Nouveau CH-xxx |

---

# 7. Rapport attendu

Conformément à `docs/tickets/README.md` §15.

Message de commit proposé (indicatif) :

```text
feat(safety): add practice safety advice and pre-session warnings (MVP-009)
```

---

# 8. Contraintes

- Design Freeze applicable — aucune modification de conception.
- Standards UI tickets (`README` §10).
- Conventional Commits.
- Pas de commit / push sans validation explicite du Product Owner.

---

# 9. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé | **Fait** (7 août 2026) — formalisation roadmap |
| Implémentation F-016 / F-031 | **Non commencé** |
| Clôture | **Non** |

*Fin du ticket MVP-009 (spécification — développement ultérieur).*
