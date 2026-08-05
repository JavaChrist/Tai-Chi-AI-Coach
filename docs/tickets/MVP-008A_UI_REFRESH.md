# MVP-008A_UI_REFRESH

> Tai-Chi AI Coach  
> Version : 1.0  
> Statut : **Fermé** (GO — 6 août 2026)  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-008A_UI_REFRESH.md`  
> Dépend de :  
> - MVP-001_APP_SHELL  
> - MVP-002_DESIGN_SYSTEM  
> - MVP-003_CURRICULUM_LIBRARY  
> - MVP-004_ASSET_PIPELINE  
> - MVP-005_LOCAL_PRACTICE  
> - MVP-006_LOCAL_PROGRESS  
> - MVP-007_USER_PREFERENCES  
> - MVP-008_LOCAL_ONBOARDING  
> - `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md` (VALIDÉ)

---

# 1. Objectif

Refonte complète de l’identité graphique de Tai-Chi AI Coach.

Aucune nouvelle fonctionnalité.

Aucune logique métier modifiée.

Aucun comportement fonctionnel modifié.

Seul objectif : transformer la présentation afin qu’elle respecte intégralement :

`docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`

Passer d’une application fonctionnelle à une application possédant une véritable identité.

À la fin du ticket, tous les écrans existants devront transmettre immédiatement :

- le calme ;
- la respiration ;
- la simplicité ;
- la sérénité.

Le résultat devra évoquer un carnet personnel, un dojo paisible, une application premium de bien-être.

Jamais une application de sport, un tableau de bord, ni un logiciel métier.

---

# 2. Documents de référence

Lire intégralement :

- `docs/01_VISION.md`
- `docs/12_UX_UI.md`
- `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`
- `docs/13_TECH_ARCHITECTURE.md`
- `docs/20_TEST_STRATEGY.md`
- `docs/25_DESIGN_FREEZE.md`

Lire également :

- `docs/tickets/README.md`
- Runtime utiles : `00_PROJECT_STATUS`, `01_ARCHITECTURE_STATUS`, `02_FEATURE_STATUS`, `09_TEST_STATUS`, `17_CHANGE_HISTORY`

Règle absolue : lorsqu’un choix oppose l’ancienne interface et `12A`, **12A prévaut systématiquement**.

Aucune compatibilité graphique recherchée.

Chaque décision graphique devra pouvoir être reliée à un chapitre précis de `12A`.

---

# 3. Travail demandé

## 3.1 Audit préalable (obligatoire avant toute modification)

Analyser chaque écran / surface existante.

Identifier :

- les éléments conformes ;
- les éléments non conformes ;
- les composants à remplacer ;
- les composants à conserver.

**Aucune modification UI sans cet audit.**

### Résultat de l’audit (5 août 2026)

| Surface | Conformité | Problèmes principaux vs 12A | Conserver | Remplacer / refactorer | Chapitres 12A |
| --- | --- | --- | --- | --- | --- |
| Accueil | Non conforme | `page.tsx` = placeholder ; pas de prochaine action / dernière pratique / progression | `ContentLayout`, `InformationCard` | Remplacer `PagePlaceholder` par accueil calme (3 infos max, 1 CTA) | 9.3, 11, 12, 15, 18, 19 |
| Bibliothèque | Partiel | Cartes `rounded-xl p-4` (16 px) ; badges techniques ; intro trop longue | Tri prefs, Lucide, états vides | Cartes 24/24, moins de badges, texte court | 5, 6, 7, 9.5, 11, 12, 18, 19 |
| Fiche séance | Partiel | Étapes en cartes compactes ; libellés `uppercase` | Une CTA « Démarrer », retour secondaire | Structure aérée, hiérarchie H1/H2 | 5, 6, 7, 9.6, 11, 12, 18 |
| Pratique | Partiel | Trop d’actions visibles ; bilans/pauses `rounded-xl p-4` ; bilan trop métrique | Dialogs de sortie, ton non culpabilisant | Réduire contrôles ; bilan simple ; tokens 12A | 7.14, 9.7–9.9, 11, 12, 15, 18.19, 19.14 |
| Progression | Non conforme | Grille de 4 KPI (`progression-stats.tsx`) = dashboard / fitness | Pas de classement, état vide calme | Retirer KPI agressifs ; narration douce (continuité, habitudes) | 1.2, 7.16, 9.10, 14, 15, 18.14, 18.18, 19 |
| Profil | Partiel | Densité technique ; labels `sr-only` ; selects `h-10` (< 44 px) | Sections, thème système, reduced motion | Labels visibles, 44 px, alléger cartes | 5, 7.5, 7.17, 9.11, 11, 15, 19 |
| Onboarding | Partiel | `ChoiceCard` 16 px ; accueil trop chargé | Une question / écran, « Plus tard » | Tokens carte ; simplifier bienvenue | 5, 6, 7, 9.4, 11, 12, 15, 19 |
| Dialogs | Non conforme | `rounded-xl`, `p-4`, max 384 px, `z-50`, zoom 100 ms, blur ; « Close » EN | Pas d’`alert`/`confirm` ; familles Dialog | Primitive Dialog 12A (24/32, 480, z-40, 200–350 ms, FR) | 4, 5.14–5.17, 7.7, 7.12, 9.12, 13.8, 17.10, 18.6, 19 |
| Header | Partiel | `backdrop-blur`, `z-40`, logo « TC » | `max-w-5xl` 1024, marque, thème | Surface sobre, z-sticky 10, identité Fraunces | 2, 5.8, 5.15, 5.17, 7.15, 11.4, 13, 18, 19 |
| Bottom Nav | Partiel | Blur, `z-40`, texte ≈ 10,4 px (< Caption 12) | Lucide + libellés, safe-area | Sans verre, Caption 12, z-sticky | 5.9, 5.15, 5.17, 6, 7.15, 13, 15, 19 |
| Desktop Nav | Non conforme | Cibles < 44 px ; `rounded-lg` ; double indicateur actif | `aria-current`, focus, cohérence mobile | Hauteur ≥ 44, radius bouton 16, un seul actif | 5.4, 5.11, 5.15, 7.15, 15, 19 |

### Constats transverses

1. **Couleurs** — `globals.css` en `oklch` shadcn : proches en esprit, **non** mappées aux hex officiels (Rice Paper, Soft Jade, Bamboo, Night Paper…). Ch. 3, 5.19, 13, 17.
2. **Rayons** — `--radius: 0.75rem` → cartes/dialogs à 16 px au lieu de 24 px. Ch. 5.4.
3. **Typographie** — Fraunces + Source Sans 3 OK ; échelle Tailwind ≠ Display→Caption officielle. Ch. 5.10, 6.
4. **Largeurs** — `max-w-5xl` (1024) OK ; paddings cartes 16 ≠ 24 ; `Container.lg` 1152 > Content Max. Ch. 5.7–5.8.
5. **Ombres** — ring au lieu de Shadow Small/Medium/Large. Ch. 5.5, 2.4.
6. **Dark** — structure présente ; palette Night* non appliquée ; blur « tech ». Ch. 3.22, 17.
7. **Select** — chevron custom **conforme** (`globals.css`) ; hauteur/label Profil non conformes. Ch. 7.5.
8. **Progression** — dérive dashboard principale. Ch. 18.18.

### Ordre de refonte recommandé

1. Tokens globaux (couleurs, rayons, ombres, typo, z-index, dark)  
2. Primitives Button / Card / Dialog / Input  
3. Progression  
4. Accueil  
5. Densité des écrans métier (bibliothèque, fiche, pratique, profil, onboarding, nav)

## 3.2 Refonte UI (après audit)

Appliquer `12A` sur toute la présentation existante :

- variables CSS / thème clair et sombre ;
- composants UI partagés ;
- layouts et navigation ;
- tous les écrans listés en §3.1 ;
- Dialogs, états vides / chargement / erreur / succès.

Philosophie :

- ne pas embellir ;
- ne pas moderniser pour l’effet ;
- ne pas ajouter d’effets ;
- créer exactement l’expérience `12A`.

## 3.3 Validation émotionnelle (chaque écran)

Avant validation, chaque écran doit répondre **oui** à :

1. Est-il calme ?  
2. Respire-t-il ?  
3. Les couleurs sont-elles douces ?  
4. L’utilisateur sait-il immédiatement quoi faire ?  
5. Le regard trouve-t-il naturellement un point de repos ?  
6. L’écran donne-t-il envie de pratiquer ?  
7. Pourrait-il appartenir à Tai-Chi AI Coach et à aucune autre application ?

Si une réponse est non → écran refusé.

Critère de réussite principal : un nouvel utilisateur doit penser « Cette application est calme », jamais « C’est une application de sport ».

---

# 4. Hors périmètre

Ne jamais :

- modifier une logique métier ;
- modifier les services ;
- modifier les stores ;
- modifier Supabase ;
- modifier le Runtime (hors registres listés en §6 après livrable) ;
- modifier les Feature IDs ;
- modifier les routes ;
- ajouter une nouvelle fonctionnalité ;
- introduire Mei / caméra / IA Coach.

Uniquement : la présentation.

---

# 5. Critères d’acceptation

- [x] Audit préalable documenté (présent dans ce ticket §3.1).
- [x] Tokens 12A appliqués (couleurs, typo, rayons, ombres, z-index, dark, breakpoints).
- [x] Surfaces §3.1 refondues (Partie 3) — validation Partie 4 OK.
- [x] Aucune logique métier / service / store modifiée (présentation seule ; routes inchangées).
- [x] Select : chevron + labels visibles + hauteur ≥ 44 px.
- [x] Progression sans dashboard KPI agressif (carnet).
- [x] Accueil non placeholder : prochaine action, reprise, progression, bibliothèque.
- [x] Dialogs conformes (espace, FR, une décision).
- [x] Validation émotionnelle §3.3 / §54–56 OK pour chaque écran (voir §7).
- [x] Build, TypeScript, ESLint, tests existants verts (45 tests, build OK — 6 août 2026).
- [x] Rapport §7 rempli ; Runtime §6 mis à jour (CH-009).

---

# 6. Runtime Registers à mettre à jour

Après livrable UI uniquement :

- `docs/runtime/17_CHANGE_HISTORY.md` (nouvelle entrée CH-00x)
- `docs/runtime/00_PROJECT_STATUS.md` (si pertinent)
- `docs/runtime/01_ARCHITECTURE_STATUS.md` (couche présentation / Design System)
- `docs/runtime/09_TEST_STATUS.md` (si tests UI touchés)

Ne pas inventer de Feature ID. Aucune F-xxx nouvelle.

---

# 7. Rapport de clôture (6 août 2026)

## 7.1 Refonte

### Composants / surfaces revus

| Zone | Fichiers principaux |
| --- | --- |
| Tokens | `web/src/app/globals.css`, `web/src/config/assets.ts`, `manifest.webmanifest` |
| Primitives | `button`, `card`, `dialog`, `input`, `badge`, `progress`, `skeleton`, `switch`, `textarea`, `sonner`, `password-input` |
| Layout / nav | `app-header`, `bottom-nav`, `desktop-nav`, `app-shell`, `container`, `page-header`, `section`, `content-layout` |
| Accueil | `home-welcome.tsx`, `app/page.tsx` |
| Bibliothèque | `session-list`, `session-card`, `session-metadata`, `session-details`, pages bibliothèque |
| Pratique | `practice-intro`, `practice-step-view`, `practice-summary`, `practice-progress`, `practice-player` |
| Progression | `progression-dashboard`, `progression-stats`, `history-list`, page progression |
| Profil | `profile-preferences`, `preference-section`, i18n profil |
| Onboarding | `onboarding-flow`, `onboarding-shell`, `onboarding-step-view`, `onboarding-summary`, `choice-card`, choices |
| États / dialogs | `empty-state`, `error-state`, `loading-state`, `success-state`, dialogs App* |
| Divers | `app-brand`, `sessions/page` (invitation bibliothèque) |

### Design Tokens appliqués (12A → CSS)

| 12A | Token / utilitaire |
| --- | --- |
| Rice Paper / Night Paper | `--background`, `--rice-paper` |
| Soft Jade | `--primary`, `--soft-jade` |
| Bamboo / Bamboo Soft | `--foreground` / dark |
| Zen Stone | `--muted-foreground` |
| Surface / Border Soft | `--card`, `--border` |
| Shadow S/M/L | `--shadow-small/medium/large` + `.shadow-*` |
| Radius bouton 16 / carte-dialog 24 | `--radius`, `--radius-card`, `--radius-dialog` |
| Content Max 1024 / Reading 720 | `.max-w-content`, `.max-w-reading` |
| Typo Display→Caption | `.text-hero`, `.text-h1`…`.text-caption` |
| Z sticky / overlay / dialog | `--z-sticky`, `--z-overlay`, `--z-dialog` |
| Motion calme | `ease-calm`, `duration-fast/normal` + `prefers-reduced-motion` |

### Composants supprimés / harmonisés

- Aucun composant métier supprimé.
- Accueil : `PagePlaceholder` retiré au profit de `HomeWelcome`.
- `/sessions` : placeholder technique → EmptyState « Commençons ».
- Progression : grille KPI retirée → narration carnet.
- Bilan : 3ᵉ CTA « Fiche séance » retirée (une décision principale + secondaire).
- Styles historiques oklch shadcn / `rounded-xl` / blur tech : remplacés par tokens 12A.

### Hors périmètre — confirmé

- Aucune logique métier / service / store / Feature ID nouvelle.
- Aucune route métier ajoutée.
- Comportements fonctionnels inchangés (nav, bibliothèque, fiche, pratique, progression, profil, onboarding).

---

## 7.2 Validation

| Contrôle | Résultat |
| --- | --- |
| Build | **OK** (`next build`) |
| TypeScript | **OK** (intégré au build) |
| ESLint | **OK** |
| Tests | **OK** — 45 / 45 |
| Design System 12A | **OK** — tokens + écrans ; logos SVG officiels absents (fallback TC justifié) |
| Anti-patterns Ch.18 | **OK** — reprise MAJUSCULES onboarding, CTA bilan, pulse skeleton `motion-safe` |
| Responsive | **OK** structurelle — même personnalité ; BottomNav mobile ; DesktopNav ≥ 44 px ; Content Max |
| Accessibilité | **OK** partielle runtime — focus visibles, Dialogs, `prefers-reduced-motion`, thème clair/sombre, contrastes Soft Jade/Zen Stone ; pas d’audit axe automatisé |
| Validation émotionnelle | **OK** (tableau ci-dessous) |
| Test 3 secondes | **OK** |
| Test de fermeture | **OK** (sensation cible : calme) |

### Validation émotionnelle + test 3 s (par écran)

| Écran | Calme | Respire | Où ? | Faire ? | Action principale | Point de repos | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Accueil | Oui | Oui | Accueil / bienvenue | Pratiquer ou explorer | Commencer (prochaine pratique) | Marque + H1 | **OK** |
| Bibliothèque | Oui | Oui | Catalogue séances | Choisir une séance | Ouvrir une carte | Titre de page | **OK** |
| Fiche séance | Oui | Oui | Préparation séance | Démarrer | Démarrer | H1 + CTA | **OK** |
| Pratique | Oui | Oui | Séance en cours | Continuer / pause | Continuer / Suivant | Titre d’étape | **OK** |
| Pause | Oui | Oui | Pause | Reprendre | Reprendre | Message respiration | **OK** |
| Bilan | Oui | Oui | Fin de séance | Accueil ou progression | Retour accueil | « Séance terminée » | **OK** |
| Progression | Oui | Oui | Carnet | Continuer / lire historique | Choisir une séance | « Votre chemin » | **OK** |
| Profil | Oui | Oui | Préférences | Ajuster un réglage | (lecture + switch/select) | Sections aérées | **OK** |
| Onboarding | Oui | Oui | Première découverte | Choisir / continuer | Commencer / Continuer | H1 d’étape | **OK** |
| Dialogs | Oui | Oui | Décision | Confirmer ou annuler | Une décision | Titre court | **OK** |
| Empty / Error | Oui | Oui | Invitation / pause | Action proposée | CTA bienveillant | Icône douce | **OK** |

Splash : **N/A** (aucun écran splash dédié dans l’app).

### Comparatif Avant → Après

| Avant | Après |
| --- | --- |
| Accueil placeholder | Accueil accueillant (hero + prochaine pratique) |
| Progression type dashboard KPI | Carnet d’habitudes |
| Cartes denses / badges techniques | Cartes calmes (4 infos) |
| Dialogs shadcn « tech » | Dialogs silencieux 12A |
| Palette oklch générique | Rice Paper / Soft Jade / Zen Stone |
| Sensation « app web » | Sensation carnet / dojo |

**Gains UX** — orientation immédiate, une action principale par écran.  
**Gains Design** — tokens uniques, rayons/ombres/typo alignés 12A.  
**Gains émotionnels** — calme, respiration, absence de compétition.

---

## 7.3 Runtime

| Registre | Action |
| --- | --- |
| `17_CHANGE_HISTORY.md` | **CH-009** créé |
| `00_PROJECT_STATUS.md` | Mis à jour |
| `01_ARCHITECTURE_STATUS.md` | Mis à jour (Frontend / UI 12A) |
| `02_FEATURE_STATUS.md` | Remarques UI sur F-009/010/028/029 — **aucune** F-xxx nouvelle |
| `09_TEST_STATUS.md` | Campagne régression MVP-008A |

---

## 7.4 Validation finale 12A

**L’application respecte-t-elle désormais `12A_EXPERIENCE_DESIGN_SYSTEM` ?**

**Oui.**

Justification : tokens officiels appliqués ; écrans MVP alignés sur les chapitres 9 / 12 / 18 / 19 ; anti-patterns corrigés ; aucune dérive sport / dashboard / gamification constatée. Écart résiduel documenté : logos SVG officiels absents (fallback textuel « TC »), hors blocage identité.

---

## 7.5 Go / No-Go

| Critère | Statut |
| --- | --- |
| Build / TS / ESLint / Tests | OK |
| Runtime synchronisé (CH-009) | OK |
| Validation émotionnelle | OK |
| Test 3 secondes | OK |
| Test de fermeture | OK |

**Décision : GO**

Commit proposé (non exécuté tant que non demandé) :

```text
refactor(ui): apply Experience Design System across MVP interface
```

---

# 8. Contraintes

- Structure ticket 9 sections (`docs/tickets/README.md`).
- Français UI ; Lucide uniquement ; aucun emoji ; aucun `alert` / `confirm`.
- Conventional Commits.
- `12A` fait autorité sur toute décision graphique.
- Ne pas démarrer la refonte sans l’audit §3.1 (déjà produit).

---

# 9. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé | Fait |
| Audit préalable | **Fait** (5 août 2026) |
| Refonte tokens / primitives | **Fait** (Partie 2) |
| Refonte écrans (Partie 3) | **Fait** (6 août 2026) |
| Validation émotionnelle | **Fait** (Partie 4 — 6 août 2026) |
| Runtime CH-009 | **Fait** |
| Commit | **Fait** — `b6bad27` |

*Fin du ticket MVP-008A.*
