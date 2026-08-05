# MVP-008_LOCAL_ONBOARDING

> Tai-Chi AI Coach  
> Version : 1.0  
> Statut : Fermé  


> Phase : MVP  
> Emplacement : `docs/tickets/MVP-008_LOCAL_ONBOARDING.md`  
> Dépend de :  
> - MVP-001_APP_SHELL  
> - MVP-002_DESIGN_SYSTEM  
> - MVP-003_CURRICULUM_LIBRARY  
> - MVP-006_LOCAL_PROGRESS  
> - MVP-007_USER_PREFERENCES  

---

# 1. Objectif

Créer un onboarding local, court et non bloquant pour Tai-Chi AI Coach.

L’onboarding doit permettre à un nouvel utilisateur de :

- comprendre la proposition du produit ;
- choisir un niveau initial ;
- sélectionner un objectif principal de pratique ;
- choisir une durée de séance préférée ;
- enregistrer ces choix localement ;
- accéder ensuite à l’application.

L’onboarding ne doit pas introduire :

- Mei ;
- caméra ;
- Computer Vision ;
- IA Coach ;
- authentification ;
- Supabase ;
- synchronisation distante.

Ces éléments appartiennent à des versions ultérieures.

---

# 2. Documents de référence

Lire obligatoirement :

- `docs/02_PRODUCT_SCOPE.md`
- `docs/03_PERSONAS.md`
- `docs/04_USER_JOURNEYS.md`
- `docs/05_FEATURES.md`
- `docs/08_TAI_CHI_CURRICULUM.md`
- `docs/12_UX_UI.md`
- `docs/14_DATA_MODEL.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/20_TEST_STRATEGY.md`
- `docs/22_ROADMAP.md`
- `docs/25_DESIGN_FREEZE.md`

Lire également :

- `docs/tickets/README.md`
- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/03_DATA_STATUS.md`
- `docs/runtime/07_OFFLINE_STATUS.md`
- `docs/runtime/09_TEST_STATUS.md`
- `docs/runtime/17_CHANGE_HISTORY.md`

Identifier uniquement les `F-xxx` réellement couverts par ce ticket.

Ne pas inventer d’identifiant fonctionnel.

---

# 3. Travail demandé

## 3.1 Domaine Onboarding

Créer uniquement les types nécessaires au MVP.

Prévoir notamment :

- `OnboardingState`
- `OnboardingStep`
- `OnboardingVersion`
- `LearningGoal`
- `InitialLevel`
- `OnboardingStatus`

Le modèle doit permettre de distinguer :

- onboarding non commencé ;
- onboarding en cours ;
- onboarding terminé ;
- onboarding ignoré ou reporté si cette possibilité est prévue dans les documents.

Ne pas modéliser Mei ou la caméra dans le parcours MVP.

---

## 3.2 Stockage local

Créer une abstraction remplaçable, par exemple :

- `OnboardingStore`
- `LocalStorageOnboardingStore`

Utiliser une clé versionnée, par exemple :

`tai-chi-ai-coach.onboarding.v1`

Le stockage doit pouvoir être remplacé plus tard par Supabase sans modifier les composants UI.

Ne pas coupler directement les composants à `localStorage`.

---

## 3.3 Versionnement

L’onboarding doit déclarer une version explicite.

Prévoir :

- version courante ;
- date de complétion ;
- reprise d’un onboarding interrompu ;
- possibilité future de relancer un onboarding lors d’une évolution majeure.

Ne pas implémenter de migration complexe dans ce ticket.

---

## 3.4 Parcours

Créer un parcours court, limité au strict nécessaire.

Structure proposée à confirmer avec `12_UX_UI.md` :

1. Bienvenue
2. Niveau initial
3. Objectif principal
4. Durée préférée
5. Confirmation

Le parcours doit rester réalisable en quelques minutes.

Une seule action principale par écran.

---

## 3.5 Étape Bienvenue

Présenter simplement :

- ce qu’est Tai-Chi AI Coach ;
- le caractère progressif et bienveillant ;
- l’absence de compétition ;
- l’absence de promesse médicale ;
- le fait que l’utilisateur peut modifier ses choix plus tard.

Ne pas présenter Mei.

Ne pas demander l’accès à la caméra.

---

## 3.6 Niveau initial

Proposer uniquement les niveaux déjà définis dans les documents.

Ne pas inventer de niveaux supplémentaires.

Le choix doit être accessible et explicite.

Prévoir une option neutre du type :

- « Je débute »
- ou toute formulation réellement présente dans la conception.

Ne pas transformer ce choix en évaluation médicale ou sportive.

---

## 3.7 Objectif de pratique

Permettre de choisir un objectif principal parmi ceux réellement définis.

Exemples possibles uniquement s’ils sont validés dans les documents :

- découvrir le Tai Chi ;
- améliorer la régularité ;
- pratiquer en douceur ;
- approfondir les bases.

Ne pas inventer d’objectif thérapeutique.

---

## 3.8 Durée préférée

Réutiliser la préférence déjà introduite dans MVP-007.

L’onboarding doit enregistrer la durée choisie dans le système de préférences existant.

Ne pas créer une seconde source de vérité.

Le service Onboarding doit orchestrer la sauvegarde sans dupliquer les données.

---

## 3.9 Écran de confirmation

Afficher un résumé :

- niveau choisi ;
- objectif ;
- durée préférée.

Permettre :

- de revenir en arrière ;
- de confirmer ;
- d’accéder à l’application.

Après confirmation :

- marquer l’onboarding comme terminé ;
- enregistrer la version ;
- rediriger vers l’accueil ou la prochaine destination définie par les parcours.

---

## 3.10 Reprise

Si l’utilisateur quitte l’onboarding avant la fin :

- conserver l’étape atteinte ;
- permettre la reprise ;
- ne pas perdre les choix déjà validés.

La reprise reste locale.

---

## 3.11 Non-blocage

L’onboarding doit rester non coercitif.

Si les documents autorisent explicitement une option « Plus tard », l’implémenter.

Sinon, ne pas inventer cette fonctionnalité.

Le refus futur de Mei ou de la caméra ne doit jamais empêcher l’utilisation du produit, mais ces choix ne sont pas présentés dans le MVP.

---

## 3.12 Routes

Créer une route dédiée, par exemple :

`/onboarding`

Adapter uniquement si une route différente est déjà prévue dans le projet.

Ne pas multiplier les routes si un parcours mono-route avec étapes locales est plus cohérent.

---

## 3.13 Redirection initiale

Mettre en place un mécanisme local simple :

- utilisateur sans onboarding terminé → onboarding ;
- utilisateur ayant terminé → application normale.

Cette redirection ne doit pas rendre l’application inutilisable si le stockage local échoue.

En cas d’erreur locale :

- afficher un message calme ;
- permettre une solution de repli ;
- ne pas créer de boucle de redirection.

---

## 3.14 Page Profil

Ajouter dans `/profil` une section permettant :

- de consulter le statut de l’onboarding ;
- de relancer l’onboarding si cette action est cohérente avec les documents ;
- ou de modifier directement les préférences existantes.

Ne pas dupliquer inutilement les réglages déjà disponibles.

---

## 3.15 Composants

Créer uniquement les composants nécessaires, par exemple :

- `OnboardingShell`
- `OnboardingProgress`
- `OnboardingStep`
- `LevelChoice`
- `GoalChoice`
- `DurationChoice`
- `OnboardingSummary`

Réutiliser le Design System existant.

Éviter les abstractions prématurées.

---

# 4. Standards UI obligatoires

- Interface en français.
- Aucun emoji.
- Icônes Lucide uniquement.
- Aucun `alert()`.
- Aucun `confirm()`.
- Utiliser les Dialogs existants si une confirmation est nécessaire.
- Aucun champ de mot de passe dans ce ticket.
- Si un champ de mot de passe apparaît hors périmètre, utiliser `PasswordInput` avec bouton œil accessible.
- Navigation clavier complète.
- Focus visible.
- Labels accessibles.
- Responsive mobile, tablette et bureau.
- Messages calmes, clairs et non techniques.
- Aucune gamification compétitive.
- Aucune pression pour terminer l’onboarding.
- Aucune promesse médicale.

---

# 5. Tests demandés

Tester au minimum :

- état initial non commencé ;
- démarrage de l’onboarding ;
- navigation entre les étapes ;
- conservation des choix ;
- retour à l’étape précédente ;
- reprise après interruption ;
- finalisation ;
- version enregistrée ;
- intégration de la durée avec `PreferenceStore` ;
- redirection après complétion ;
- comportement en cas de stockage indisponible ou corrompu ;
- absence de Mei et de caméra dans le parcours MVP.

Ne pas déclarer un test exécuté s’il ne l’a pas été.

---

# 6. Hors périmètre

Ne pas développer :

- Supabase ;
- authentification ;
- compte utilisateur ;
- synchronisation ;
- API distante ;
- Mei ;
- Virtual Humans ;
- caméra ;
- Computer Vision ;
- IA Coach ;
- notifications ;
- audio ;
- Premium ;
- Analytics Produit ;
- évaluation médicale ;
- personnalisation avancée ;
- multi-langue réelle autre que le français.

---

# 7. Critères d’acceptation

Le ticket est terminé si :

- un nouvel utilisateur peut démarrer l’onboarding ;
- le parcours suit les étapes validées ;
- le niveau, l’objectif et la durée sont enregistrés localement ;
- la durée utilise le système de préférences existant ;
- l’onboarding peut reprendre après interruption ;
- la complétion et la version sont enregistrées ;
- la redirection ne crée aucune boucle ;
- Mei et la caméra ne sont pas présentées ;
- aucune dépendance distante n’est ajoutée ;
- Build OK ;
- TypeScript OK ;
- ESLint OK ;
- tests OK.

---

# 8. Runtime Registers

Mettre à jour uniquement les registres réellement concernés :

- `docs/runtime/00_PROJECT_STATUS.md`
- `docs/runtime/01_ARCHITECTURE_STATUS.md` uniquement si une couche ou un module réel évolue ;
- `docs/runtime/02_FEATURE_STATUS.md`
- `docs/runtime/03_DATA_STATUS.md`
- `docs/runtime/07_OFFLINE_STATUS.md`
- `docs/runtime/09_TEST_STATUS.md`
- `docs/runtime/13_BUGS.md` uniquement si un bug réel est découvert ;
- `docs/runtime/16_KNOWN_LIMITATIONS.md` uniquement si une limitation réelle est confirmée ;
- `docs/runtime/17_CHANGE_HISTORY.md`

Règles :

- créer `CH-008` si l’identifiant est libre ;
- mettre à jour uniquement les `F-xxx` réellement concernés ;
- ne pas déclarer l’onboarding entièrement livré si une partie prévue au MVP manque ;
- classer factuellement l’onboarding comme Offline, Hybrid ou Online selon D-142 ;
- ne pas déclarer l’Offline First complet ;
- ne pas inventer de dette, bug, décision Runtime ou limitation.

---

# 9. Rapport attendu

## Développement

- types créés ;
- store créé ;
- service créé ;
- routes ;
- composants ;
- intégration avec les préférences ;
- fichiers modifiés.

## Fonctionnalités

- `F-xxx` concernés ;
- statut avant/après ;
- justification.

## Validation

- Build ;
- TypeScript ;
- ESLint ;
- tests ;
- validations manuelles.

## Runtime

- registres modifiés ;
- `CH-xxx` créé ;
- bug, limitation, dette ou divergence réellement constatés.

## Ticket

Mettre à jour :

`docs/tickets/MVP-008_LOCAL_ONBOARDING.md`

Cycle attendu :

- À développer
- En développement
- En validation
- Fermé après validation, commit et push

## Commit conseillé

Proposer un message Conventional Commits.

---

# 10. Contraintes strictes

- Aucun Supabase.
- Aucune API distante.
- Aucune authentification.
- Aucun onboarding Mei.
- Aucune demande caméra.
- Aucun Computer Vision.
- Aucun contenu médical.
- Aucune fonctionnalité inventée.
- Aucun code hors périmètre.
- Respect strict du Design Freeze.
- Le stockage local doit rester remplaçable ultérieurement par Supabase.
