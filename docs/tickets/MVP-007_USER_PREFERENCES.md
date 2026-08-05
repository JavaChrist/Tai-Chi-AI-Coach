# MVP-007_USER_PREFERENCES

> Tai-Chi AI Coach  
> Version 1.0  
> Statut : **Fermé**  
> Phase : MVP  
> Emplacement : `docs/tickets/MVP-007_USER_PREFERENCES.md`  
> Nature : Ticket validé puis livré (contenu d’origine conservé ; clôture en fin de document)  
> Dépend de :  
> - MVP-001_APP_SHELL  
> - MVP-002_DESIGN_SYSTEM  
> - MVP-003_CURRICULUM_LIBRARY  
> - MVP-004_ASSET_PIPELINE  
> - MVP-005_LOCAL_PRACTICE  
> - MVP-006_LOCAL_PROGRESS  


---

# 1. Objectif

Créer le système de préférences utilisateur locales de Tai-Chi AI Coach.

Toutes les préférences restent stockées localement derrière une couche d'abstraction.

Aucune synchronisation.

Aucune authentification.

Aucun Supabase.

L'objectif est que l'application devienne réellement personnalisable dès le MVP.

---

# 2. Documents de référence

Lire obligatoirement :

- docs/03_PERSONAS.md
- docs/05_FEATURES.md
- docs/12_UX_UI.md
- docs/13_TECH_ARCHITECTURE.md
- docs/14_DATA_MODEL.md
- docs/20_TEST_STRATEGY.md
- docs/25_DESIGN_FREEZE.md

Runtime :

- docs/runtime/00_PROJECT_STATUS.md
- docs/runtime/02_FEATURE_STATUS.md
- docs/runtime/03_DATA_STATUS.md
- docs/runtime/09_TEST_STATUS.md
- docs/runtime/17_CHANGE_HISTORY.md

Identifier uniquement les F-xxx réellement concernés.

---

# 3. Travail demandé

## 3.1 Domaine

Créer les types nécessaires.

Prévoir :

- UserPreferences
- ThemePreference
- PracticePreferences
- AccessibilityPreferences
- LocalePreference

Uniquement les champs utiles au MVP.

---

## 3.2 Stockage

Créer :

- PreferenceStore
- LocalStoragePreferenceStore

Le stockage doit pouvoir être remplacé ultérieurement par Supabase sans modifier les composants UI.

---

## 3.3 Préférences MVP

Implémenter uniquement :

- thème :
  - clair
  - sombre
  - système

- langue

Architecture multilingue.

Langue disponible :

- Français

- durée préférée des séances

- niveau préféré

- affichage des conseils

- animations réduites

Ne pas implémenter :

- Mei
- Camera
- IA
- Notifications
- Audio

Prévoir uniquement leur futur emplacement.

---

## 3.4 Page Profil

Transformer :

`/profil`

en véritable page MVP.

Créer les sections :

- Apparence
- Préférences de pratique
- Accessibilité
- Informations de l'application

---

## 3.5 Thème

Le changement de thème doit être :

- immédiat ;
- persistant localement ;
- disponible dès le chargement de l'application.

---

## 3.6 Composants

Créer uniquement les composants nécessaires.

Exemples :

- PreferenceCard
- PreferenceSection
- PreferenceSwitch
- PreferenceSelect

Réutiliser le Design System existant.

---

## 3.7 États

Prévoir :

- chargement ;
- sauvegarde ;
- erreur de lecture.

---

## 3.8 Accessibilité

Tous les composants doivent respecter :

- navigation clavier ;
- lecteurs d'écran ;
- contrastes ;
- labels.

---

# 4. Standards UI

Toujours respecter :

- aucun emoji ;
- uniquement Lucide Icons ;
- aucune popup alert();
- aucune popup confirm();
- uniquement Dialog / Modal ;
- PasswordInput avec bouton œil si un champ mot de passe apparaît ;
- responsive ;
- interface française.

---

# 5. Hors périmètre

Ne pas développer :

- Supabase
- API
- Auth
- IA
- Camera
- Mei
- Notifications
- Premium
- Synchronisation

---

# 6. Critères d'acceptation

Le ticket est terminé si :

- les préférences sont stockées localement ;
- la page Profil fonctionne ;
- le changement de thème fonctionne ;
- Build OK ;
- TypeScript OK ;
- ESLint OK ;
- Tests OK.

---

# 7. Runtime Registers

Mettre à jour uniquement :

- docs/runtime/00_PROJECT_STATUS.md
- docs/runtime/02_FEATURE_STATUS.md
- docs/runtime/03_DATA_STATUS.md
- docs/runtime/09_TEST_STATUS.md
- docs/runtime/17_CHANGE_HISTORY.md

Créer :

**CH-007**

si disponible.

Ne modifier aucun autre Runtime Register sans nécessité.

---

# 8. Rapport attendu

## Développement

- types créés
- composants créés
- stockage créé
- page Profil

## Fonctionnalités

Lister uniquement les F-xxx réellement impactées.

Justifier leur évolution.

## Validation

- Build
- TypeScript
- ESLint
- Tests

## Runtime

Lister les Runtime Registers mis à jour.

## Commit conseillé

Proposer un Conventional Commit.

---

# 9. Contraintes

Aucune fonctionnalité hors périmètre.

Aucune persistance distante.

Respect strict du Design Freeze.

Le stockage local doit être entièrement remplaçable par Supabase dans un futur ticket.

---

# 10. Rapport de clôture (archive)

> Statut d’origine du ticket : **À développer**.  
> Livré, validé, commité et poussé — statut final : **Fermé**.

## Développement

- Domaine `web/src/domain/preferences/`
- `PreferenceStore` + `LocalStoragePreferenceStore` + service
- Composants préférences + page `/profil`
- i18n FR (`web/src/i18n/`)
- Thème clair / sombre / système branché sur les préférences

## Fonctionnalités

| F-xxx | Évolution | Justification |
| --- | --- | --- |
| **F-028** Paramètres | → **En développement** | Page Profil + préférences essentielles locales |
| **F-029** Accessibilité | → **En développement** | Animations réduites (+ socle contrastes DS) |

## Validation

Build / TypeScript / ESLint OK ; **32** tests Vitest cumulés OK.

## Runtime

- **CH-007**
- Registres : `00`, `02`, `03`, `09`, `17`

## Commit

| Champ | Valeur |
| --- | --- |
| SHA | `16cafbe` |
| Message | `feat(preferences): add local user preferences and profile page` |
