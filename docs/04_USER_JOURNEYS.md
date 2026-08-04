# 04 — User Journeys

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | User Journeys |
| Numéro | 04 |
| Fichier | `docs/04_USER_JOURNEYS.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md` |
| Documents utilisant celui-ci | `docs/05_FEATURES.md`, `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md`, `docs/11_VIRTUAL_HUMANS.md`, `docs/12_UX_UI.md`, `docs/22_ROADMAP.md` |
| Décisions concernées | D-027 à D-031 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Document rédigé selon `docs/99_DOCUMENTATION_STANDARD.md`.
> Aucun écran, wireframe, code ni nouvelle fonctionnalité.
> Utilisation exclusive des `F-xxx` / `P-xxx` / `AP-xxx` existants.
> Cycle de travail futur rappelé par `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` (sans création runtime ici).

## 2. Objectif

Définir le parcours complet des utilisateurs afin de montrer :

- pourquoi l’utilisateur arrive ;
- comment il découvre l’application ;
- comment il progresse ;
- pourquoi il revient ;
- pourquoi il pourrait abandonner ;
- comment l’application évite cet abandon.

Référence directe pour :

- UX/UI ;
- IA ;
- notifications ;
- onboarding ;
- roadmap ;
- tests utilisateurs.

## 3. Méthodologie

1. Partir des personas de `docs/03_PERSONAS.md`.
2. Croiser avec le périmètre et les versions de `docs/02_PRODUCT_SCOPE.md`.
3. Décrire chaque parcours par étapes de vie (découverte → fidélisation).
4. Relier chaque étape aux `F-xxx` existantes uniquement.
5. Distinguer MVP (sans IA complexe, sans caméra, sans avatars obligatoires) et enrichissements V1/V2.
6. Marquer les hypothèses.

> **HYPOTHÈSE**
>
> Les parcours ci-dessous sont des modèles de conception à valider par tests utilisateurs, non des observations terrain déjà réalisées.

## 4. Principes UX

Principes de parcours (détail d’interface dans `docs/12_UX_UI.md`) :

1. Calme avant stimulation.
2. Une prochaine action évidente à chaque étape.
3. Droit de répéter sans pénalité.
4. Aucune culpabilisation après une pause.
5. Prudence visible avant pratique (`F-016`, `F-031`).
6. Progression lisible sans compétition (`F-010`).
7. Reprise facile (`F-032`).
8. Fidélisation par sérénité, habitude, confiance et plaisir — jamais par pression, peur ou sanctions.
9. Notifications futures : douces, utiles, rares, jamais culpabilisantes (`F-017`, V1).
10. Mei, si présente, guide sans envahir (hypothèse, D-026).

## 5. Vue d'ensemble des parcours

| Persona | Priorité parcours | Intention centrale | Parcours MVP dominant |
| --- | --- | --- | --- |
| P-001 | Cœur | Confiance + douceur | Découverte → séance courte → reprise |
| P-002 | Cœur | Régularité courte | Programme du jour → séance 10–20 min |
| P-003 | Cœur | Autonomie structurée | Parcours débutant linéaire |
| P-004 | Secondaire | Révision ciblée | Bibliothèque / mouvement |
| P-005 | Influenceur | Activation assistée | Sécurité + première découverte |
| AP-001 | Refusé | Compétition | Non servi |
| AP-002 | Refusé | Médical | Non servi |

## 6. Parcours P-001

Persona : senior actif recherchant mobilité et équilibre (ex. Hélène).

### 6.1 Découverte

- Arrive via recommandation d’un proche (souvent P-005) ou recherche d’activité douce.
- Cherche des signes de sérieux, de calme et de non-infantilisation.
- Fonctions associées : `F-001` (promesse claire), pas de compétition.

### 6.2 Installation

- Installe sur tablette ou smartphone.
- Attend une ouverture simple, texte lisible, contraste confortable (`F-029`).
- Pas de compte obligatoire au MVP.

### 6.3 Première ouverture

- Première découverte guidée (`F-033`).
- Présentation courte du Tai Chi (`F-001`).
- Conseils de sécurité et avertissements (`F-016`, `F-031`).
- Une seule prochaine action : commencer une courte séance ou le début du parcours (`F-003` / `F-013`).

### 6.4 Première séance

- Séance guidée courte (`F-013`).
- Vidéo pédagogique rejouable / pause (`F-006`).
- Explication et images de référence (`F-005`, `F-007`).
- Respiration et relaxation possibles (`F-014`, `F-015`).
- Arrêt recommandé en cas de douleur (message de prudence).

### 6.5 Première semaine

- Reprise de séance (`F-032`) plutôt que recommencer à zéro.
- Progression simple (`F-010`).
- Programme quotidien optionnel (`F-008`) si non surchargeant.
- Droit de revoir le même mouvement plusieurs fois (`F-004`, `F-006`).

### 6.6 Première réussite

- Sensation : « j’ai compris et j’ai osé pratiquer ».
- Signal produit sobre : avancement du parcours (`F-010`), historique léger (`F-009`).
- Pas de score, pas de classement.

### 6.7 Routine

- Ouverture → reprise ou séance du jour → pratique → fin calme.
- Paramètres d’accessibilité ajustés si besoin (`F-028`, `F-029`).

### 6.8 Fidélisation

- Confiance, lisibilité, absence de jugement.
- Habitude douce, pas de streak punitif.
- Plus tard (V1) : rappels discrets (`F-017`) uniquement si souhaités.

### 6.9 Risques d'abandon

- Vidéo trop rapide.
- Texte trop petit / interface confuse.
- Ton infantilisant.
- Peur de mal faire sans réassurance.
- Culpabilisation après une pause.

### 6.10 Solutions

- Contrôle du rythme de consultation (`F-006`, répétition).
- Accessibilité et navigation simple (`F-029`).
- Messages de prudence non anxiogènes (`F-016`, `F-031`).
- Reprise sans reproche (`F-032`).
- Progression non compétitive (`F-010`).

## 7. Parcours P-002

Persona : adulte actif recherchant calme et régularité (ex. Marc).

### 7.1 Découverte

- Arrive par besoin de calme, alternative douce au fitness intensif.
- Évalue rapidement : « est-ce que je peux faire 15 minutes ce soir ? »

### 7.2 Installation

- Smartphone en priorité.
- Installation rapide, peu d’étapes.

### 7.3 Première ouverture

- `F-033` très court.
- Prudence (`F-016`, `F-031`) visible mais non bloquante longtemps.
- Accès immédiat au programme quotidien ou à une séance (`F-008`, `F-013`).

### 7.4 Première séance

- 10–20 minutes (`F-013` + `F-014` + `F-015`).
- Peu de théorie avant la pratique (`F-001` accessible, non obligatoire en premier).
- Fin sur une note de calme.

### 7.5 Première semaine

- Programme quotidien (`F-008`) comme point d’entrée par défaut.
- Reprise après journée chargée (`F-032`).
- Progression visible sans pression (`F-010`).

### 7.6 Première réussite

- Sensation : « j’ai tenu une semaine sans y passer une heure ».
- Historique / progression sobres (`F-009`, `F-010`).

### 7.7 Routine

- Ouvrir → séance du jour → terminer → fermer.
- Objectifs personnels légers en V1 (`F-018`) si utiles.
- Notifications optionnelles en V1 (`F-017`).

### 7.8 Fidélisation

- Faible friction, plaisir de la courte séance, sérénité.
- Jamais de ranking ni défi agressif.

### 7.9 Risques d'abandon

- Trop d’options au premier lancement.
- Séances trop longues.
- Notifications culpabilisantes.
- Complexité perçue.

### 7.10 Solutions

- Une action principale évidente (`F-008` / `F-013`).
- Séances courtes.
- Notifications rares et utiles seulement en V1.
- Reprise sans dramatiser l’absence (`F-032`).

## 8. Parcours P-003

Persona : débutant contraint par l’accès ou les horaires (ex. Léa).

### 8.1 Découverte

- Arrive faute de cours proches ou d’horaires compatibles.
- Cherche une progression autonome crédible.

### 8.2 Installation

- Mobile ou ordinateur.
- Attend un « par où commencer » immédiat.

### 8.3 Première ouverture

- `F-033` mène vers `F-001` puis `F-003`.
- Sécurité (`F-016`, `F-031`) avant la première pratique.
- Entrée claire dans le parcours débutant.

### 8.4 Première séance

- Première leçon du parcours (`F-003`, `F-013`).
- Boucle vidéo / explication / essai (`F-006`, `F-005`, `F-007`).
- Bibliothèque disponible mais non prioritaire au premier jour (`F-004`).

### 8.5 Première semaine

- Avancer pas à pas dans `F-003`.
- Revoir plusieurs fois le même mouvement.
- Progression et reprise (`F-010`, `F-032`).

### 8.6 Première réussite

- Sensation : « je ne suis plus perdue ; je sais quoi faire ensuite ».
- Prochaine leçon évidente.

### 8.7 Routine

- Continuer le parcours ; parfois révision ciblée via bibliothèque.
- Plus tard : favoris / recherche en V1 (`F-011`, `F-012`) ; Q/R IA en V1 (`F-019`, `F-020`).

### 8.8 Fidélisation

- Structure, confiance, autonomie croissante.
- Pas de substitution affichée à un professeur humain comme obligation.

### 8.9 Risques d'abandon

- Catalogue sans ordre.
- Peur de « mal apprendre ».
- Absence de prochaine étape claire.
- Surcharge de fonctions avancées trop tôt.

### 8.10 Solutions

- Parcours linéaire dominant (`F-003`).
- Démonstrations rejouables (`F-006`).
- Progression explicite (`F-010`).
- IA/caméra seulement aux versions prévues, jamais comme condition du premier succès.

## 9. Parcours P-004

Persona : pratiquant accompagné par un professeur (ex. Nadia).

### 9.1 Découverte

- Arrive pour réviser entre les cours.
- N’attend pas un remplacement de son professeur.

### 9.2 Installation

- Rapide ; peu d’onboarding long (`F-033` allégeable / contournable conceptuellement).

### 9.3 Première ouverture

- Accès rapide à la bibliothèque (`F-004`).
- Prudence toujours disponible (`F-016`, `F-031`) sans récit débutant obligatoire trop long.

### 9.4 Première séance

- Consultation d’un mouvement précis (`F-005`, `F-006`, `F-007`).
- Pas nécessairement une séance complète `F-013`.

### 9.5 Première semaine

- Favoris et recherche dès V1 (`F-011`, `F-012`).
- Révisions courtes répétées.

### 9.6 Première réussite

- Sensation : « j’ai consolidé ce que j’ai vu en cours ».

### 9.7 Routine

- Ouverture ciblée → mouvement → fermeture.
- Hors ligne utile plus tard (`F-026`, V2).
- Partenariats éventuels en backlog (`F-040`).

### 9.8 Fidélisation

- Complémentarité au présentiel, richesse de la bibliothèque, respect du professeur humain.

### 9.9 Risques d'abandon

- Sentiment que l’app veut remplacer le professeur.
- Contenu trop générique ou divergent perçu.

### 9.10 Solutions

- Positionnement explicite de complément.
- Accès direct contenus (`F-004`).
- Pas de discours « professeur IA supérieur ».

## 10. Parcours P-005

Persona : aidant ou proche accompagnateur (ex. Thomas).

### 10.1 Découverte

- Découvre pour un proche (souvent P-001).
- Évalue clarté, prudence, simplicité.

### 10.2 Installation

- Configure l’appareil du proche.
- Paramètres et accessibilité (`F-028`, `F-029`).

### 10.3 Première ouverture

- Parcourt `F-016` et `F-031` avec le proche.
- Lance `F-033` puis une première micro-pratique.

### 10.4 Première séance

- Accompagne la première séance (`F-013` / début `F-003`).
- Vérifie que le proche comprend pause, reprise, arrêt si douleur.

### 10.5 Première semaine

- S’efface progressivement.
- Le proche doit pouvoir revenir seul (`F-032`).

### 10.6 Première réussite

- Sensation aidant : « il/elle peut continuer sans moi ».

### 10.7 Routine

- Interventions ponctuelles (réglages, rappel bienveillant humain).
- Peu d’usage personnel durable de l’app.

### 10.8 Fidélisation

- Indirecte : succès du proche.
- Pas de parcours « aidant » compétitif ou social.

### 10.9 Risques d'abandon

- Installation trop complexe.
- Ambiguïté médicale.
- Proche découragé dès le jour 1.

### 10.10 Solutions

- Premier lancement ultra clair (`F-033`).
- Sécurité explicite non médicale (`F-016`, `F-031`).
- Une seule prochaine action pour le pratiquant.

## 11. Points communs

Tous les parcours cibles partagent :

- entrée calme ;
- prudence avant pratique ;
- une prochaine action évidente ;
- droit de répéter ;
- reprise sans culpabilité ;
- progression non compétitive ;
- distinction bien-être / non-médical ;
- MVP centré séances guidées, parcours, vidéos, reprise — sans IA/caméra/avatars obligatoires.

## 12. Différences

| Dimension | P-001 | P-002 | P-003 | P-004 | P-005 |
| --- | --- | --- | --- | --- | --- |
| Entrée dominante | Confiance / lisibilité | Séance du jour | Parcours linéaire | Bibliothèque | Sécurité + démarrage |
| Durée cible | Courte à modérée | 10–20 min | Variable | Très courte | Installation |
| Besoin de réassurance | Très élevé | Moyen | Élevé | Faible | Élevé (pour le proche) |
| Tolérance onboarding | Moyenne si digne | Faible | Élevée si utile | Faible | Élevée si claire |
| Rôle des notifications V1 | Optionnel discret | Utile si rare | Optionnel | Faible | Faible |

## 13. Moments clés

| Moment | Définition | Signal produit typique |
| --- | --- | --- |
| Wow moment | Première sensation de clarté et de calme | Séance courte réussie (`F-013`) sans friction |
| Premier succès | « J’ai pratiqué et j’ai compris » | Fin de première séance + prochaine étape (`F-010`) |
| Première habitude | Retour spontané sans obligation | `F-032` / `F-008` utilisés naturellement |
| Première semaine | Au moins quelques pratiques sans culpabilité | Historique / progression sobres (`F-009`, `F-010`) |
| Premier mois | Régularité réaliste ou reprise sereine après pauses | Continuité perçue, pas de sanction |

> **HYPOTHÈSE**
>
> Le Wow moment survient pendant ou juste après la première séance utile, pas pendant un onboarding long.

## 14. Parcours de Mei

> **HYPOTHÈSE**
>
> Mei est une guide visuelle envisagée (D-026). Son design, sa voix, sa tenue et son calendrier d’intégration restent ouverts (`docs/11_VIRTUAL_HUMANS.md`, `docs/12_UX_UI.md`).
> `F-023` est prévu pour V2 ; Mei ne doit pas être une dépendance du MVP.

### 14.1 Rôle dans le parcours

Mei peut :

- accueillir ;
- rassurer ;
- expliquer ;
- encourager.

Mei ne doit pas :

- envahir l’écran ;
- interrompre inutilement ;
- remplacer l’utilisateur ;
- monopoliser l’expérience ;
- se présenter comme maître diplômé.

### 14.2 Quand elle apparaît

- Accueil de première ouverture (si intégrée).
- Démonstration d’un mouvement lorsque utile.
- Encouragement bref après une première séance ou une reprise.
- Moments de doute pédagogique simple (explication).

### 14.3 Quand elle disparaît

- Pendant la pratique concentrée de l’utilisateur.
- Lorsque l’utilisateur choisit un mode discret / sans guide.
- Dès qu’elle n’ajoute pas de clarté.

### 14.4 Quand elle parle

- Consignes courtes.
- Encouragements sobres.
- Explications ciblées.

### 14.5 Quand elle reste silencieuse

- Lecture de contenus de sécurité critiques (texte prioritaire).
- Pratique en cours.
- Navigation utilitaire (paramètres, bibliothèque ciblée pour P-004).
- Toute situation où la parole ajouterait de la charge cognitive.

## 15. Place de l'IA

`F-019` / `F-020` : prévus pour **V1**, absents du MVP.

### 15.1 Moments utiles (V1+)

- Après une séance, pour expliquer un point ;
- quand l’utilisateur demande « pourquoi ce mouvement ? » ;
- pour proposer une révision adaptée ;
- pour encourager sans juger ;
- pour aider P-003 à choisir la suite dans le parcours.

### 15.2 Moments interdits

- Diagnostic ou interprétation pathologique d’une douleur ;
- promesse médicale ;
- pression / culpabilisation ;
- interruption pendant une séance sans demande ;
- substitution affichée à un professionnel de santé ou à un professeur humain ;
- invention de technique hors contenu maîtrisé.

## 16. Place des notifications

`F-017` : prévu pour **V1**.

### 16.1 Utiles quand

- l’utilisateur les a acceptées ;
- elles rappellent une intention choisie ;
- elles proposent une séance courte réaliste ;
- elles aident à reprendre après une pause sans reproche.

### 16.2 Intrusives quand

- fréquentes ;
- culpabilisantes (« tu as échoué », streaks punitifs) ;
- concurrentielles ;
- envoyées sans consentement ;
- sans valeur immédiate.

Principes figés : **douces, utiles, rares, jamais culpabilisantes**.

## 17. Frictions

Risques de perte d’utilisateur :

| ID | Friction | Personas surtout exposés |
| --- | --- | --- |
| FR-01 | Onboarding trop long | P-002, P-004 |
| FR-02 | Prochaine action floue | P-003 |
| FR-03 | Vidéo trop rapide / non rejouable | P-001, P-003 |
| FR-04 | Interface peu lisible | P-001, P-005 |
| FR-05 | Peur de mal faire | P-001, P-003 |
| FR-06 | Séance trop longue | P-002 |
| FR-07 | Culpabilisation après pause | P-002, P-001 |
| FR-08 | Ambiguïté médicale | P-005, AP-002 (à écarter) |
| FR-09 | Sentiment de remplacer le professeur | P-004 |
| FR-10 | Surcharge de fonctions avancées trop tôt | Tous cœurs de cible |
| FR-11 | Notifications intrusives | P-002 |
| FR-12 | Installation complexe pour aidant | P-005 |

## 18. Leviers de fidélisation

### 18.1 Autorisés

- progression ;
- sérénité ;
- habitude ;
- plaisir ;
- confiance.

### 18.2 Interdits

- pression ;
- compétition ;
- peur ;
- sanctions ;
- classements ;
- gamification culpabilisante (`HP-014`).

## 19. Fonctionnalités utilisées

Matrice Persona → Fonctionnalités → Étape du parcours.

| Persona | Étape | Fonctionnalités principales |
| --- | --- | --- |
| P-001 | Découverte / 1re ouverture | F-033, F-001, F-016, F-031, F-029 |
| P-001 | Première séance | F-013, F-006, F-005, F-007, F-014, F-015 |
| P-001 | Semaine / routine | F-032, F-010, F-008, F-003, F-004 |
| P-001 | Fidélisation V1+ | F-017 (optionnel), F-028 |
| P-002 | Découverte / 1re ouverture | F-033, F-016, F-031, F-008 |
| P-002 | Première séance | F-013, F-014, F-015, F-006 |
| P-002 | Semaine / routine | F-008, F-032, F-010, F-009 |
| P-002 | Fidélisation V1+ | F-017, F-018, F-024, F-027, F-039 |
| P-003 | Découverte / 1re ouverture | F-033, F-001, F-003, F-016, F-031 |
| P-003 | Première séance | F-003, F-013, F-006, F-005, F-007 |
| P-003 | Semaine / routine | F-003, F-010, F-032, F-004 |
| P-003 | Fidélisation V1+ | F-019, F-020, F-011, F-012 |
| P-004 | Ouverture / révision | F-004, F-005, F-006, F-007 |
| P-004 | Routine V1/V2 | F-011, F-012, F-026, F-040 |
| P-005 | Installation / activation | F-028, F-029, F-016, F-031, F-033, F-001 |
| P-005 | Première séance assistée | F-013, F-003, F-032 |

Aucune fonctionnalité hors catalogue. Aucun changement de version cible.

## 20. Parcours refusés

### 20.1 AP-001 — Compétition et performance intensive

Parcours typique attendu par AP-001 :

- défis, classements, records, intensité.

Pourquoi refusé :

- contraire à la vision et à D-013 / D-025 ;
- hors périmètre `HP-002`, `HP-003`, `HP-014`.

Réponse produit : ne pas offrir ces mécaniques ; assumer un positionnement calme.

### 20.2 AP-002 — Diagnostic ou traitement médical

Parcours typique attendu par AP-002 :

- interprétation de douleurs, diagnostic, prescription, rééducation médicale.

Pourquoi refusé :

- contraire à la prudence médicale et à D-008 / D-025 ;
- hors périmètre `HP-004`, `HP-005`, `HP-012`.

Réponse produit : messages de limites ; arrêt si douleur ; orientation vers un professionnel compétent ; jamais de diagnostic.

## 21. Hypothèses

| ID | Hypothèse |
| --- | --- |
| H-J1 | Le Wow moment survient à la première séance utile, pas à l’onboarding. |
| H-J2 | P-002 convertit surtout via `F-008` + séance courte. |
| H-J3 | P-003 convertit surtout via `F-003` linéaire. |
| H-J4 | P-001 convertit si lisibilité + prudence + répétition vidéo. |
| H-J5 | La reprise sans culpabilité (`F-032`) réduit l’abandon post-pause. |
| H-J6 | Les notifications n’aident que si rares et opt-in. |
| H-J7 | Mei augmente la réassurance seulement si discrète et non « maître ». |
| H-J8 | P-005 améliore l’activation de P-001 au jour 0 puis doit pouvoir s’effacer. |

## 22. Décisions ouvertes

- durée exacte recommandée des premières séances par persona ;
- libellés exacts des moments clés dans l’UI ;
- intensité de présence de Mei par étape ;
- seuil de déclenchement des notifications ;
- contournement exact de l’onboarding pour P-004 ;
- métriques chiffrées de succès première semaine / premier mois ;
- détails d’accessibilité chiffrés (`docs/12_UX_UI.md`).

## 23. Critères de validation

Le document pourra être considéré comme validé lorsque :

1. il est relu et accepté explicitement ;
2. les parcours P-001 à P-005 sont complets selon la structure prévue ;
3. les anti-parcours sont explicitement refusés ;
4. aucune nouvelle `F-xxx` n’a été créée ;
5. aucune version de fonctionnalité n’a été déplacée ;
6. Mei reste une hypothèse non bloquante pour le MVP ;
7. les décisions D-027 à D-031 sont tracées ;
8. `docs/05_FEATURES.md` peut s’y référer sans ambiguïté majeure.

Statut actuel : **EN REVUE**.

## 24. Conclusion

Les parcours prioritaires sont ceux de P-001, P-002 et P-003 : confiance douce, régularité courte, autonomie structurée.

P-004 révise ; P-005 active ; AP-001 et AP-002 ne sont pas servis.

La fidélisation repose sur progression, sérénité, habitude, plaisir et confiance. Les notifications, l’IA et Mei enrichissent plus tard, sans jamais culpabiliser ni médicaliser.

Prochaine étape documentaire : `docs/05_FEATURES.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/05_FEATURES.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
