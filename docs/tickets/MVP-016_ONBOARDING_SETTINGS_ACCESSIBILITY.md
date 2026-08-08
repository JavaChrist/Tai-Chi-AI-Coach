# MVP-016_ONBOARDING_SETTINGS_ACCESSIBILITY

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Fermé** (GO — 9 août 2026 — validation PO — CH-020)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-016_ONBOARDING_SETTINGS_ACCESSIBILITY.md`
> Dépend de :
> - MVP-007_USER_PREFERENCES (Fermé — `/profil` + PreferenceStore)
> - MVP-008_LOCAL_ONBOARDING (Fermé — onboarding local 5 étapes + gate)
> - MVP-009_SAFETY_WARNINGS (Fermé — F-016 / F-031)
> - MVP-010_PRESENTATION_AND_STYLES (Fermé — `/decouverte`)
> - MVP-013_BEGINNER_PATH (Fermé — `/parcours/debutant`)
> - MVP-015_HISTORY_PROGRESS_RESUME (Fermé — `4c72602` — wipe pratique Profil)
> - MVP-012_PEDAGOGICAL_VIDEOS (Ouvert — MEDIA BLOCKED / REFERENCE MOTION BLOCKED — **non bloquant**)
> - `docs/05_FEATURES.md` (F-033, F-028, F-029)
> - `docs/12_UX_UI.md` §10 / §19 / §22 ; `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`
> - `docs/14_DATA_MODEL.md` (OnboardingState / préférences)
> - `docs/17_PRIVACY_RGPD.md` ; `docs/26_PWA_APP_UPDATE.md`
> - `docs/25_DESIGN_FREEZE.md`
> - `docs/runtime/12_TECH_DEBT.md` (TD-001)

---

# 1. Objectif

Cadrer officiellement (développement **ultérieur**, hors de cette ouverture) :

- **F-033** — Première découverte guidée (finalisation)
- **F-028** — Paramètres
- **F-029** — Accessibilité (socle MVP)

But produit : finaliser l’entrée dans l’app (onboarding court, skip, persistance), consolider le contrôle utilisateur sur `/profil` sans panneau technique, et élever le socle d’accessibilité (clavier, focus, motion, lisibilité) — **sans** auth, **sans** cloud, **sans** caméra, **sans** Mei, **sans** ouvrir MVP-017.

**Phase actuelle : Fermé** — F-033 / F-028 / F-029 **Livré** (validation PO). Correctif QA inclus (utilitaire CSS `.z-dropdown`). TD-001 fermée. MVP-012 reste MEDIA BLOCKED. MVP-017 non ouvert.

---

# 2. Documents de référence

- `docs/00_MASTER_PLAN.md` … `docs/05_FEATURES.md`
- `docs/03_PERSONAS.md` / `docs/04_USER_JOURNEYS.md`
- `docs/07_CONTENT_STRATEGY.md`
- `docs/12_UX_UI.md` / `12A` / `12B`
- `docs/13_TECH_ARCHITECTURE.md` / `docs/14_DATA_MODEL.md`
- `docs/16_AUTH_SECURITY.md` (hors MVP — ne pas implémenter)
- `docs/17_PRIVACY_RGPD.md`
- `docs/18_PWA_OFFLINE.md` / `docs/26_PWA_APP_UPDATE.md`
- `docs/19_ANALYTICS.md` (hors MVP runtime)
- `docs/20_TEST_STRATEGY.md` / `docs/22_ROADMAP.md` / `docs/24_DEVELOPER_HANDOVER.md`
- Tickets MVP-007, MVP-008, MVP-015 ; README §20
- Runtime : `00`, `02`, `03`, `06`, `09`, `11`, `12`

---

# 3. Définitions officielles

## 3.1 F-033 — Première découverte guidée

| Champ | Valeur (`02` / `05`) |
| --- | --- |
| Version cible | MVP |
| Priorité | P0 |
| Objectif | Accueillir sans surcharge |
| Description | Court parcours : présentation, prudence, premier pas. Pas d’onboarding marketing long |
| Dépendances | F-001, F-003, F-031 |
| Acceptation | Terminer rapidement ; arriver à une première action évidente |
| Limites | Pas un tutoriel exhaustif ; Mei/caméra = V2 |
| Décisions | D-027, D-030 |

## 3.2 F-028 — Paramètres

| Champ | Valeur |
| --- | --- |
| Version cible | MVP |
| Priorité | P0 |
| Objectif | Contrôler l’expérience |
| Description | Options essentielles ; langue si disponible ; consentements / notifications plus tard |
| Acceptation | Ouvrir les paramètres ; modifier ≥ 1 préférence essentielle |
| Limites | **Liste exacte des options ouverte** (`05`) — décision PO requise |

## 3.3 F-029 — Accessibilité

| Champ | Valeur |
| --- | --- |
| Version cible | MVP |
| Priorité | P0 |
| Objectif | Confort d’usage large (P-001, P-005) |
| Description | Socle : lisibilité, contrastes, tailles de texte, navigation claire (`12` §22) |
| Acceptation | Lire confortablement ; naviguer vers la prochaine action sans confusion majeure |
| Décisions | D-012 |
| Limites | Valeurs techniques dans `12` / `12A` ; approfondissements futurs |

---

# 4. Audit existant (code réel — 9 août 2026)

## 4.1 Onboarding (héritage MVP-008)

| Élément | État réel |
| --- | --- |
| Route | `/onboarding` — `web/src/app/onboarding/page.tsx` |
| Flow | `onboarding-flow.tsx` + steps UI |
| Gate | `OnboardingGate` dans `app-shell.tsx` — redirect si `not_started` / `in_progress` |
| Étapes | **5** : welcome → level → goal → duration → summary |
| Skip | « Plus tard » → `status: skipped` → **`/bibliotheque`** |
| Complete | → `status: completed` → **`/decouverte`** |
| Relance | Profil « Relancer » → modale → `restart()` → `/onboarding` |
| Persistance | LS `tai-chi-ai-coach.onboarding.v1` ; `version: 1` ; corruption → defaults |
| Mei / caméra | Exclus (`mvpPathExcludesMeiAndCamera`) |
| Assets `public/onboarding/*.webp` | Absents (README assets) — non bloquants texte |
| `learningGoal` | Stocké ; **non consommé** hors onboarding / Profil (affichage) |
| Effets utiles | `preferredLevel` + `preferredDurationMinutes` via PreferenceStore |

### Contenu des étapes

1. **welcome** — bienvenue + prudence textuelle (non médical / douleur) ; CTA Commencer + Plus tard
2. **level** — radio Découverte / Débutant / Progression → prefs niveau
3. **goal** — radio discover / regularity / gentle_practice / deepen_basics
4. **duration** — 5 / 10 / 15 / 20 / 30 min → prefs durée
5. **summary** — récap + « Entrer dans l’application »

### Relations

| Surface | Lien onboarding |
| --- | --- |
| `/decouverte` (F-001/F-002) | Destination **complete** (validée — ne pas changer sans exigence) |
| `/bibliotheque` | Destination **skip** (validée) |
| `/parcours/debutant` (F-003) | Aucun câblage direct ; accessible ensuite via nav |
| F-016 `/conseils-de-securite` | Prudence welcome textuelle ; lien F-016 ailleurs (Profil, F-031) |
| F-031 | Gate pré-pratique inchangé ; non contourné par onboarding |

## 4.2 Paramètres / Profil (héritage MVP-007 + MVP-015)

Route unique : **`/profil`** — **pas** de `/parametres`.

| Section | Classification | Contenu |
| --- | --- | --- |
| Accueil guidé | Info + **Action** | Statut onboarding ; Relancer |
| Apparence | **Préférence** | Thème light / dark / **system** ; langue `fr` seul |
| Pratique | **Préférence** | Durée, niveau, showTips |
| Accessibilité | **Préférence** | `reduceMotion` uniquement |
| Données de pratique | **Action** maintenance | Effacer historique + reprise (MVP-015) |
| À propos | **Information** | Liens découverte / sécurité ; version `0.1.0` ; Build ID ; stockage local |

### PreferenceStore

| Champ | Valeur |
| --- | --- |
| Clé | `tai-chi-ai-coach.preferences.v1` |
| Version | `version: 1` (strict) |
| Defaults | theme `system` ; locale `fr` ; durée 15 ; niveau `debutant` ; showTips true ; reduceMotion false |
| Validation | sets thème / durée / niveau / booleans ; locale = `fr` |
| Corruption | → defaults ; migration one-shot `tai-chi-theme` legacy |
| Cloud | **Aucun** |

## 4.3 Accessibilité (partiel)

| Domaine | Constat |
| --- | --- |
| Focus visible | Patterns `focus-visible:ring-*` sur composants ; pas de skip link |
| Landmark | `<main id="contenu-principal">` **sans** lien d’évitement |
| Dialogs | Radix / `AppDialog` — trap, Escape, restore (Documenté AppUpdate) |
| Motion | Pref `reduceMotion` + `prefers-reduced-motion` CSS |
| Touch | Buttons / nav ≥ ~44px ; **Switch** prefs ~28px hauteur (écart) |
| Contraste | Tokens 12A Light/Dark ; pas de toggle « contraste renforcé » |
| Taille texte | **Aucune** préférence utilisateur ; corps DS Source Sans 3 |
| Tests a11y dédiés | Absents |
| Statuts | Souvent textuels (progression, history) — à maintenir |

## 4.4 PWA update

- `AppUpdateGate` : détection OK ; **modale différée hors `/pratique`**
- `AppUpdateModal` via `AppDialog` (a11y Radix) ; Escape / X → reproposable
- Build ID affiché Profil (information)
- **Ne pas modifier le mécanisme** sans anomalie réelle

## 4.5 Privacy Profil (constat)

- « Local uniquement (cet appareil) — aucune synchronisation »
- Wipe pratique : historique + reprise ; prefs / onboarding conservés
- Pas de compte MVP ; pas d’analytics runtime ; pas de caméra MVP
- **Ne pas inventer** de nouvelles déclarations juridiques

## 4.6 TD-001

| Champ | Valeur |
| --- | --- |
| Description | Chrome flottant thème Mobile peut chevaucher contenu long (`/respiration` constat) |
| Localisation | `ThemeToggle` dans `AppHeader` sticky |
| Sévérité | Mineure |
| Statut | Ouverte |
| Candidat MVP-016 | **Oui** (shell / a11y / paramètres) — décision PO-D |

---

# 5. Gaps (produit)

## 5.1 F-033

| Gap | Sévérité | Notes |
| --- | --- | --- |
| CA « première action de pratique évidente » | À trancher | Complete → `/decouverte` (présentation) ; pratique via nav / Accueil ensuite — **garder redirects validés** |
| Lien explicite BeginnerPath post-summary | Optionnel | F-003 livré ; pas de câblage onboarding |
| Assets onboarding WebP | Mineure | Texte suffit ; hors scope si non requis |
| `learningGoal` non consommé | Acceptable MVP | Pas F-034 |
| A11y onboarding (clavier / labels) | À durcir | Tests + revue PO |
| Soft CTA « prochaine pratique » sur summary | Optionnel | Sans changer redirect complete |

## 5.2 F-028

| Gap | Sévérité | Notes |
| --- | --- | --- |
| Liste options MVP exacte | **PO** | `05` : liste ouverte |
| Distinction Pref / Info / Action | Clarifier UI | Éviter panneau technique |
| Langue | OK MVP | `fr` seul — pas de faux sélecteur multi-langues |
| Notifications / compte / export | Hors MVP | V1+ |
| Privacy copy | Affiner si besoin | Sans nouvelles claims |

## 5.3 F-029

| Gap | Sévérité | Notes |
| --- | --- | --- |
| Skip link → `#contenu-principal` | Probable MVP | Landmark prêt |
| Taille de texte adaptable | **PO** | `12` §22 l’exige conceptuellement ; pas de préférence runtime |
| Contraste renforcé (toggle) | Non prévu types | Contraste DS + Light/Dark suffisent sauf PO |
| Switch touch target | Mineure | Agrandir hit area |
| Annonces live PracticePlayer (changement d’étape) | Optionnel | |
| Suite tests a11y | Requise | Unit + revue manuelle |
| TD-001 chevauchement | Mineure | Fix shell si PO-D |

---

# 6. Périmètre proposé (implémentation future — après gate)

## In scope (sous réserve PO)

### F-033
- Finaliser / polir onboarding existant (pas de refonte parcours)
- **Conserver** complete → `/decouverte` ; skip → `/bibliotheque`
- Durcir a11y clavier + focus + labels
- Relance Profil inchangée (modale)
- Optionnel : CTA secondaire « Voir le parcours débutant » **sans** changer redirect complete (PO-A)

### F-028
- Rester sur **`/profil`** (pas de route `/parametres`)
- Paramètres MVP = préférences déjà présentes + copy claire Pref / Info / Action
- Build ID / version = information uniquement
- Reset pratique = action (existant)
- Aucun panneau debug / logs / flags techniques

### F-029
- Skip link
- Revue focus / headings / aria / dialogs (Profil, onboarding, PWA, safety, practice, progression, respiration)
- `reduceMotion` déjà branché — vérifier couverture
- Touch targets (Switch)
- Light / Dark / System inchangés (3 modes déjà supportés)
- TD-001 si PO-D = oui
- Préférence taille texte **uniquement si PO-B = oui** (effet réel CSS, pas décoratif)

## Hors périmètre

- Auth / compte / sync / cloud / Supabase
- Notifications (F-017), export (F-030), caméra, Mei, IA
- Nouvelle langue runtime
- MVP-012 médias / MP4
- MVP-017 Offline cache
- Refonte Design System
- Analytics
- Gamification
- Changer redirects onboarding validés sans exigence officielle
- IndexedDB / multi-appareils

---

# 7. Décisions PO nécessaires

| ID | Sujet | Décision PO | Implémentation |
| --- | --- | --- | --- |
| **PO-A** | BeginnerPath dans onboarding | **Validé** — CTA secondaire « Voir le parcours débutant » ; complete→`/decouverte` et skip→`/bibliotheque` inchangés | `OnboardingSummaryActions` + `complete()` puis `/parcours/debutant` |
| **PO-B** | Taille de texte | **Validé — NON** ; pas de préférence ; DS + zoom OS/navigateur | Aucun scaling custom |
| **PO-C** | Skip link | **Validé — OUI** | `SkipToContent` → `#contenu-principal` |
| **PO-D** | TD-001 | **Validé — OUI** ; corriger dans MVP-016 | Header/BottomNav `z-dropdown` ; contenu Hero sans z concurrent |
| **PO-E** | Surface paramètres | **Validé** — `/profil` seul | Descriptions Pref / Info / Action |
| **PO-F** | Contraste renforcé | **Validé — NON** | Light / Dark / System uniquement |

---

# 8. UX

- Onboarding : court, skip disponible, pas de dark pattern, prudence non médicale
- Profil : sections calmes ; préférences d’abord ; infos / actions clairement séparées
- Thème : Light / Dark / System (cycle ThemeToggle) — **déjà réel** ; ne pas inventer un 4ᵉ mode
- Aucun `alert` / `confirm` / `prompt` natif — modales projet uniquement
- Mobile First ; validation Desktop/Mobile × Light/Dark

---

# 9. Accessibilité (exigences d’implémentation)

- Navigation clavier complète (onboarding, Profil, dialogs)
- Focus visible ; restauration focus après dialog
- Skip link → `#contenu-principal`
- Hiérarchie headings cohérente
- Labels / `aria-*` / `role="status"|"alert"` pour erreurs et sauvegardes
- Statuts non uniquement par couleur
- `reduceMotion` + `prefers-reduced-motion`
- Touch targets confortables (cible 44×44 — `12A`)
- AppUpdateModal / ConfirmationDialog / safety gate / PracticePlayer / progression / respiration : revue ciblée
- Fallback vidéo F-006 : ne pas régresser (MVP-012 MEDIA BLOCKED)

---

# 10. Privacy

- Affirmer uniquement : données locales ; pas de sync ; wipe pratique existant ; pas de compte MVP
- Pas de caméra / analytics runtime dans le copy MVP
- Ne pas inventer de texte juridique nouveau hors `17`

---

# 11. PWA

- Vérifier a11y AppUpdateModal (trap, Escape, focus)
- Update différée `/pratique` inchangée
- Build ID compréhensible (label + valeur) — information
- Ne pas modifier AppUpdateGate sans bug manifeste

---

# 12. Routes

| Route | Décision proposée |
| --- | --- |
| `/profil` | **Surface F-028** (PO-E recommandé) |
| `/parametres` | **Ne pas créer** sauf PO contraire |
| `/onboarding` | Inchangé fonctionnellement |

---

# 13. Tests prévus (implémentation)

### Onboarding
- Première visite → gate `/onboarding`
- Completion → `/decouverte` + status completed
- Skip → `/bibliotheque` + status skipped
- Persistance / reprise mid-flow
- Relancer depuis Profil
- Navigation clavier étapes
- Corruption LS → defaults

### Préférences
- Lecture / écriture / defaults
- Corruption → defaults
- Persistance reload
- Theme light / dark / system
- reduceMotion → classe document
- Reset pratique n’efface pas prefs/onboarding

### Accessibilité
- Dialogs (focus trap, Escape, restore)
- Labels / headings
- Skip link (si PO-C)
- Clavier Profil + onboarding
- reduceMotion
- Touch targets (Switch)
- Pas d’info couleur seule (statuts)

### Régression
- F-031 safety ; PracticePlayer ; resume F-032 ; progression ; breathing ; PWA update ; Light/Dark ; Mobile ; TD-001 si corrigé

---

# 14. Runtime Registers à mettre à jour (à l’implémentation / clôture)

- `00_PROJECT_STATUS.md`
- `02_FEATURE_STATUS.md` (F-033 / F-028 / F-029)
- `03_DATA_STATUS.md` si prefs/onboarding évoluent
- `06_PRIVACY_STATUS.md` si copy wipe / storage évolue
- `09_TEST_STATUS.md`
- `11_BACKLOG.md`
- `12_TECH_DEBT.md` si TD-001 corrigée
- `17_CHANGE_HISTORY.md` (CH-xxx à la livraison)
- `docs/tickets/README.md`

---

# 15. Definition of Done (clôture PO)

Voir §18 pour l’état livraison code. Clôture Git après validation PO visuelle.

---

# 16. Gates de readiness

| Feature | Gate | Justification |
| --- | --- | --- |
| **F-033** | **Livré** | CTA BeginnerPath ; redirects validés ; validé PO |
| **F-028** | **Livré** | `/profil` Pref/Info/Action ; validé PO |
| **F-029** | **Livré** | Skip link ; Switch touch ; motion ; TD-001 ; validé PO |
| **TD-001** | **Fermée** | `.z-dropdown` CSS + shell ; validé Mobile `/respiration` |
| **MVP-012** | Inchangé | MEDIA BLOCKED |
| **MVP-017** | Non ouvert | — |

### Gate global MVP-016

**Fermé** (validation PO — CH-020)

**DEPENDENCY BLOCKED :** non — aucune dépendance média / auth.

---

# 17. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (9 août 2026) |
| Audit docs / code | **Fait** |
| Décisions PO | **Validées** (PO-A…F) |
| Gate readiness | **READY FOR CODE** |
| Implémentation code | **Livrée** — validée PO |
| Clôture | **Fermé** — CH-020 |

---

# 18. Definition of Done (livraison code)

- [x] PO-A…F enregistrées
- [x] CTA BeginnerPath secondaire (complete + `/parcours/debutant`)
- [x] complete → `/decouverte` ; skip → `/bibliotheque`
- [x] Skip link `#contenu-principal`
- [x] TD-001 corrigée (shell + utilitaire `.z-dropdown`)
- [x] Profil Pref / Info / Action
- [x] Switch touch target élargi
- [x] Pas de préférence taille texte / contraste renforcé
- [x] Tests + Build / tsc / ESLint
- [x] Runtime synchronisé (F-033 / F-028 / F-029 Livré)
- [x] MVP-012 non fermé ; MVP-017 non ouvert
- [x] Validation PO visuelle Desktop/Mobile × Light/Dark + clôture

---

*Fin du ticket MVP-016 (Fermé — MVP-012 reste MEDIA BLOCKED / REFERENCE MOTION BLOCKED ; MVP-017 non ouvert).*
