# MVP-010_PRESENTATION_AND_STYLES

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Fermé** (GO — 7 août 2026 — validation PO — commit `f40d34c`)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-010_PRESENTATION_AND_STYLES.md`
> Dépend de :
> - MVP-009_SAFETY_WARNINGS (Fermé — `9495f58`)
> - MVP-008B_VISUAL_ENVIRONMENT (Fermé — `50bf954`)
> - `docs/02_PRODUCT_SCOPE.md`
> - `docs/05_FEATURES.md`
> - `docs/08_TAI_CHI_CURRICULUM.md`
> - `docs/25_DESIGN_FREEZE.md`

---

# 1. Objectif

Livrer le socle éditorial d’entrée MVP :

- **F-001** — Présentation du Tai Chi
- **F-002** — Découverte des styles

But produit : permettre à l’utilisateur de comprendre rapidement ce qu’est le Tai Chi **dans ce produit**, et d’apprendre que plusieurs styles existent, **sans** choix expert obligatoire ni surcharge.

Aucune autre fonctionnalité.

Pas d’authentification, sync, IA, caméra, Computer Vision, Virtual Humans / Mei, bibliothèque de mouvements, parcours débutant structuré (F-003), ni médias vidéo.

---

# 2. Documents de référence

Lire obligatoirement :

- `docs/00_MASTER_PLAN.md`
- `docs/01_VISION.md`
- `docs/02_PRODUCT_SCOPE.md` (F-001, F-002, dépendances §15)
- `docs/05_FEATURES.md` (F-001, F-002)
- `docs/03_PERSONAS.md`
- `docs/04_USER_JOURNEYS.md` (§ première ouverture, matrices)
- `docs/07_CONTENT_STRATEGY.md` (niveau Découverte)
- `docs/08_TAI_CHI_CURRICULUM.md` (phase Découverte ; **style non figé**)
- `docs/12_UX_UI.md`
- `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`
- `docs/12B_VISUAL_ASSET_GUIDE.md`
- `docs/17_PRIVACY_RGPD.md` (formulation non médicale)
- `docs/20_TEST_STRATEGY.md`
- `docs/22_ROADMAP.md` (§ MVP-010)
- `docs/25_DESIGN_FREEZE.md`
- `docs/tickets/README.md` (§10 Standards UI, §20)

Runtime à consulter / mettre à jour à l’ouverture et à la clôture :

- `00_PROJECT_STATUS.md`
- `02_FEATURE_STATUS.md`
- `09_TEST_STATUS.md` (à la clôture / campagne)
- `11_BACKLOG.md`
- `17_CHANGE_HISTORY.md` (à la clôture code — CH-xxx)

---

# 3. Définitions officielles (source de vérité)

## 3.1 F-001 — Présentation du Tai Chi

| Champ | Valeur (`02` / `05`) |
| --- | --- |
| Identifiant | F-001 |
| Nom | Présentation du Tai Chi |
| Priorité | P0 |
| Version | MVP |
| Description | Contenus courts d’introduction : nature de la pratique, esprit général, attentes réalistes, limites du produit. |
| Objectif utilisateur | Comprendre rapidement ce qu’est le Tai Chi dans ce produit. |
| Dépendances | Aucune |
| Règles métier | Ne promet aucun résultat médical ; reste courte et non infantilissante ; oriente vers la prudence et le parcours débutant. |
| Limites | Ne remplace pas un cours complet d’histoire du Tai Chi. |
| Cas particuliers | P-004 peut ignorer cette étape s’il cherche directement la bibliothèque. |

### Critères d’acceptation officiels (`05`)

- L’utilisateur peut lire une présentation claire du Tai Chi.
- L’utilisateur comprend que le produit n’est pas médical.
- L’utilisateur peut accéder ensuite à une prochaine étape évidente.

## 3.2 F-002 — Découverte des styles

| Champ | Valeur (`02` / `05`) |
| --- | --- |
| Identifiant | F-002 |
| Nom | Découverte des styles |
| Priorité | P1 (Should / MoSCoW `22`) |
| Version | MVP |
| Description | Présentation pédagogique légère des styles principaux, sans noyer l’utilisateur. |
| Objectif utilisateur | Savoir que plusieurs styles existent, sans devoir choisir en expert. |
| Dépendances | F-001 |
| Règles métier | N’impose pas le style définitif du curriculum ; reste optionnelle par rapport à la première séance. |
| Limites | Le style retenu pour le parcours reste **ouvert** (`08`). |
| Cas particuliers | P-002 peut la contourner au profit de la séance du jour. |

### Critères d’acceptation officiels (`05`)

- L’utilisateur peut consulter une présentation simple des styles.
- L’utilisateur n’est pas bloqué s’il ne choisit pas de style.

---

# 4. Périmètre

## 4.1 Inclus

1. **Contenu F-001** — texte UI FR, court, calme, non médical, dérivé **uniquement** des documents officiels (vision, scope, curriculum Découverte, prudence déjà livrée).
2. **Contenu F-002** — orientation légère : existence de plusieurs styles ; **sans** imposer de style de parcours ; **sans** inventer histoire / technique / terminologie non documentée.
3. **Surface(s) UI consultable(s)** — page(s) ou section(s) sous App Shell, Hero Environment existant.
4. **Navigation d’accès** — liens depuis parcours existants (Accueil, éventuellement onboarding / Profil « À propos ») ; **pas** d’obligation d’ajouter un 6ᵉ item à la bottom nav (5 items figés aujourd’hui).
5. **Prochaine étape évidente** après F-001 — ex. bibliothèque / séance / prudence déjà livrée (`F-016`) — sans implémenter F-003.
6. **Tests** d’acceptation F-001 / F-002 + régression build / tsc / eslint / Vitest.
7. **Runtime** synchronisé à la clôture.

## 4.2 Hors périmètre

- F-003 parcours débutant (MVP-013)
- F-004 / F-005 / F-007 bibliothèque mouvements (MVP-011)
- F-006 vidéos (MVP-012)
- F-008 / F-014 / F-015 (MVP-014)
- Enrichissement F-013 / reprise persistante (MVP-015)
- Auth, sync, compte, IA, CV, Mei (V1/V2)
- Offline / Service Worker (MVP-017)
- Choix ou figeage d’un style de curriculum
- Histoire complète du Tai Chi ; encyclopédie des styles
- Nouveaux assets Hero / Brand Mark
- Modification du Design System / tokens / Hero masters
- Toute `F-xxx` hors F-001 et F-002

---

# 5. Contenu Tai Chi — règles & lacunes

## 5.1 Interdit d’inventer

Ne pas inventer : histoire, styles détaillés, principes techniques, terminologie, pédagogie gestuelle non présentes dans les documents officiels.

## 5.2 Matériau officiel réutilisable (existant)

| Source | Matériau pertinent pour F-001 / F-002 |
| --- | --- |
| `01_VISION.md` | Compagnon d’apprentissage ; accessible, progressif, rassurant ; **non médical** ; ne remplace pas un professeur humain ; calme ; débutants. |
| `02` / `05` | Nature de la pratique, esprit général, attentes réalistes, limites produit ; styles « légers », choix non bloquant. |
| `07` | Niveau Découverte : comprendre le cadre, oser commencer (`F-001`, `F-033`, prudence). |
| `08` | Phase Découverte : cadre, prudence, séance courte ; architecture **indépendante du style** ; exemples cités Yang / Chen / Wu / Sun / Qi Gong (réutilisabilité) — **aucun style définitif**. |
| `04` | Première ouverture : F-033 → F-001 → prudence → prochaine action séance / parcours. |
| Runtime + app | Accueil (« espace calme… ») ; onboarding non médical ; F-016 / F-031 livrés ; curriculum `styleKey: null`. |

## 5.3 Contenu nécessaire mais **absent** (à traiter avant / pendant implémentation)

| Lacune | Impact | Action attendue |
| --- | --- | --- |
| Corpus éditorial dédié « Présentation du Tai Chi » (paragraphes validés) | F-001 | Rédiger uniquement par **reprise / condensation** des docs officiels ; validation éditoriale / personnes compétentes (`01` / gates contenus) si le PO l’exige avant tests utilisateurs. |
| Fiches pédagogiques détaillées par style (Yang, Chen, Wu, Sun, etc.) | F-002 | **Absentes**. MVP-010 ne doit présenter que ce qui est documenté : existence de plusieurs styles ; non-obligation de choisir ; style du parcours **non figé**. Ne pas inventer descriptions techniques. |
| Style retenu pour le curriculum | F-002 / futurs F-003+ | Rester ouvert (`08`) ; aucun sélecteur bloquant. |

Si le PO exige des textes de styles plus riches : **bloquer l’enrichissement** jusqu’à validation documentaire — ne pas inventer dans le code.

---

# 6. Expérience utilisateur prévue

Parcours type (`04`) :

1. Accueil ou fin d’onboarding (`F-033` existant).
2. Accès à la **présentation** (F-001) — courte, rassurante, non médicale.
3. Accès optionnel à la **découverte des styles** (F-002) — légère, non bloquante.
4. Prochaine action évidente : séance / bibliothèque / conseils de sécurité (déjà livrés) — **sans** F-003.

Personas : P-001 / P-003 / P-005 prioritaires pour F-001 ; P-004 peut ignorer ; P-002 peut contourner F-002.

Ton : calme, français UI, non infantilisant, non compétitif (`12` / `12A`).

---

# 7. Architecture UI prévue (implémentation future — non réalisée ici)

## 7.1 Routes (proposition d’implémentation)

À trancher à l’implémentation **sans inventer de feature** ; options conformes UX :

| Option | Description |
| --- | --- |
| **A (recommandée)** | Une route `/decouverte` : section F-001 + section F-002 (ou sous-ancre `#styles`). |
| B | `/presentation` (F-001) + `/styles` (F-002) liées entre elles. |

Ne pas ajouter d’item bottom nav obligatoire (nav actuelle : Accueil, Séances, Progression, Bibliothèque, Profil).

## 7.2 Navigation

- Lien depuis **Accueil** (action secondaire calme).
- Lien optionnel depuis **Profil / À propos** (cohérent avec F-016).
- Lien optionnel depuis **onboarding** (post-confirmation) si cela reste court et non bloquant.
- CTA « prochaine étape » → `/bibliotheque` ou `/pratique/...` ou `/conseils-de-securite` selon parcours.

## 7.3 Composants existants réutilisables

- `PageEnvironment` + `HeroBackdrop`
- `ContentLayout` / `Container` / `PageHeader`
- `.surface-card`
- `Button`, `Link` (Next)
- Patterns Accueil / Profil / conseils de sécurité
- `text-on-hero-scope` (lisibilité sur Hero)
- Aucun nouvel asset ; Lucide uniquement ; Dialog si confirmation (pas d’`alert` natif)

## 7.4 Hero Environment

| Surface | Famille Hero | Justification mapping existant |
| --- | --- | --- |
| Présentation / découverte (F-001 ± F-002) | **`mountain`** | `SCREEN_HERO_MAP.about` — stabilité / cadre institutionnel ; cohérent avec `/conseils-de-securite` et Profil. |
| Accueil (inchangé) | `morning` | Continuité découverte → pratique déjà en place. |

Light / Dark : via `HeroBackdrop` + préférences thème existantes — **aucun** nouvel export.

## 7.5 Responsive & accessibilité

- Desktop / Tablet / Mobile : layout lecture `max-w-reading`, `.surface-card`, espacements 12A.
- Contraste texte sur Hero (`text-on-hero-scope`).
- Respect `prefers-reduced-motion` / préférence « animations réduites ».
- Contenu textuel structuré (`h1`/`h2`, listes sobres).
- Standards tickets README §10.

---

# 8. Plan d’implémentation (futur — hors cette ouverture)

1. Extraire / condenser le texte F-001 depuis les docs officiels (liste de points stables).
2. Rédiger F-002 **minimal** (existence de styles ; exemples **uniquement** s’ils restent factuels et déjà cités dans `08` comme familles d’architecture ; pas de détail technique inventé ; pas de choix obligatoire).
3. Créer la/les page(s) App Router + contenu domaine local (ex. `web/src/domain/discovery/` ou `content/`).
4. Brancher les liens Accueil (± Profil / onboarding).
5. Hero `mountain` + Light/Dark.
6. Tests acceptation + régression.
7. Validation visuelle Desktop/Mobile × Light/Dark.
8. MAJ Runtime + clôture ticket.

---

# 9. Dépendances avec MVP-011+ (ne pas implémenter)

| Ticket | Lien |
| --- | --- |
| MVP-011 (F-004/005/007) | La présentation oriente vers la révision ultérieure ; pas de catalogue mouvements ici. |
| MVP-012 (F-006) | Pas de vidéo dans MVP-010. |
| MVP-013 (F-003) | F-001 oriente vers le parcours ; F-003 non livré ici. Style curriculum reste ouvert. |
| MVP-016 | Onboarding peut pointer vers F-001 ; pas de refonte onboarding ici. |

---

# 10. Tests prévus

- Contenu F-001 : présence des notions **non médical** / limites produit ; pas de promesse de diagnostic/traitement.
- Contenu F-002 : consultable ; **aucun** flux bloquant exigeant un choix de style.
- Navigation : accès depuis l’entrée prévue + CTA prochaine étape.
- Régression : Build / TypeScript / ESLint / Vitest (baseline actuelle 63+).
- Visuel manuel : Desktop & Mobile × Light & Dark ; lisibilité sur Hero `mountain`.

---

# 11. Validations visuelles (à la livraison code)

| Surface | Desktop | Mobile | Light | Dark |
| --- | --- | --- | --- | --- |
| Présentation F-001 | ☐ | ☐ | ☐ | ☐ |
| Styles F-002 | ☐ | ☐ | ☐ | ☐ |

---

# 12. Critères d’acceptation (ticket)

- [x] F-001 consultable ; présentation claire ; produit non médical explicite ; prochaine étape évidente
- [x] F-002 consultable ; non bloquant sans choix de style
- [x] Aucun contenu Tai Chi inventé hors documents officiels
- [x] Hero `mountain` (ou mapping documenté équivalent) ; Light/Dark OK
- [x] Design System inchangé ; aucun nouvel asset Hero
- [x] Build / TypeScript / ESLint / tests OK
- [x] Runtime synchronisé (`02` : F-001 / F-002)
- [x] Aucune feature V1/V2 ni MVP-011+ introduite

---

# 13. Runtime Registers

| Moment | Registres |
| --- | --- |
| **Ouverture (cette mission)** | `00`, `02` (ticket), `11`, `tickets/README` |
| **Clôture code** | `00`, `02` (statuts F-001/F-002), `09`, `11`, `17` (CH-xxx) |

---

# 14. Définition de Done

1. Critères §12 cochés.
2. Validations visuelles §11 effectuées.
3. Tests §10 verts.
4. Runtime clôturé.
5. Commit Conventional Commits + validation PO.
6. Aucune dérive hors périmètre.

Message de commit proposé (indicatif, à la livraison code) :

```text
feat(discovery): add Tai Chi presentation and styles overview (MVP-010)
```

---

# 15. Contraintes

- Design Freeze applicable.
- Standards UI tickets (`README` §10).
- Conventional Commits.
- Pas de commit / push sans validation explicite du Product Owner.
- Cette ouverture de ticket = **cadrage uniquement** : **aucune** implémentation fonctionnelle dans la mission d’ouverture.

---

# 16. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (7 août 2026) — cadrage F-001 + F-002 |
| Implémentation F-001 / F-002 | **Fait** (7 août 2026) — `/decouverte` |
| Validation PO | **Fait** (7 août 2026) |
| Clôture | **Fermé** — commit `f40d34c` |

*Fin du ticket MVP-010 (Fermé).*
