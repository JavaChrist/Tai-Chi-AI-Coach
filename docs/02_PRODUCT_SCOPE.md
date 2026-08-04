# 02 — Product Scope

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Product Scope |
| Numéro | 02 |
| Fichier | `docs/02_PRODUCT_SCOPE.md` |
| Version | 1.1 |
| Statut | VALIDÉ |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md` |
| Documents utilisant celui-ci | `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md`, `docs/22_ROADMAP.md`, `docs/23_RELEASE_PLAN.md` |
| Décisions concernées | D-014 à D-019 |
| Dernière revue | 4 août 2026 |
| Autorise le code | Non |

> **VALIDÉ**
>
> **Élément :** `docs/02_PRODUCT_SCOPE.md`
> **Date :** 4 août 2026
> **Par :** Projet Tai-Chi-AI-Coach
> **Version documentaire :** 1.1

Il classe le périmètre fonctionnel. Il ne choisit ni stack, ni modèle de données, ni fournisseur IA, ni écrans détaillés, ni API.

> **NOTE**
>
> Document normalisé selon `docs/99_DOCUMENTATION_STANDARD.md`. Aucune décision fonctionnelle ni classification de fonctionnalité modifiée.

## 2. Rôle du document

Ce document définit :

- ce qui appartient au produit ;
- ce qui n’appartient pas au produit ;
- les versions officielles ;
- le catalogue fonctionnel numéroté ;
- la version cible de chaque fonctionnalité ;
- les priorités ;
- les critères de passage entre versions ;
- les conditions de report et de suppression.

Après lecture, aucune fonctionnalité listée ne doit rester dans un statut ambigu entre « MVP », « plus tard », « abandonnée » ou « simple idée ».

Les détails d’acceptation fine, de parcours et d’UX relèvent des documents `03` à `05` et `12`. Le présent document fixe les frontières.

## 3. Objectifs du périmètre

1. Traduire la vision en frontières produit exploitables.
2. Garder le MVP volontairement léger pour tester intérêt, régularité, compréhension et simplicité.
3. Reporter caméra, corrections automatiques, avatars et IA complexe hors MVP.
4. Préserver la direction : accessibilité, progression, calme, prudence, non-médical.
5. Éviter la surcharge fonctionnelle dès le départ.
6. Offrir un cadre stable pour `03_PERSONAS.md`, `04_USER_JOURNEYS.md` et `05_FEATURES.md`.

## 4. Ce qui appartient au produit

Appartient au produit, selon la version cible indiquée plus bas :

- l’apprentissage progressif du Tai Chi ;
- la découverte pédagogique ;
- les contenus de mouvements guidés ;
- les séances et programmes simples ;
- le suivi léger de progression et d’historique ;
- les conseils de sécurité et la prudence d’usage ;
- l’accessibilité de base ;
- plus tard, une assistance IA prudente ;
- plus tard, une analyse de mouvement prudente ;
- plus tard, des professeurs virtuels optionnels ;
- à long terme, un élargissement possible vers d’autres pratiques douces.

Le produit reste un compagnon d’apprentissage et de coaching prudent. Il n’est pas un dispositif médical.

## 5. Ce qui n’appartient pas au produit

N’appartient pas au produit :

- le diagnostic, le traitement, la prescription ou le coaching médical ;
- le remplacement systématique d’un professeur humain ou d’un professionnel de santé ;
- le réseau social, la compétition et les classements ;
- la vente de matériel, la marketplace, la publicité invasive ;
- les NFT, crypto, paris ;
- toute fonction qui contredit calme, simplicité, confiance et non-culpabilisation.

La liste détaillée figure en section 14 et dans les fonctionnalités classées « Hors périmètre ».

## 6. Définition officielle des versions

| Version | Définition |
| --- | --- |
| **Pré-MVP** | Socle indispensable avant tout test utilisateur : contenus de prudence et fondations pédagogiques minimales sans lesquelles un test serait irresponsable ou illisible. |
| **MVP** | Première expérience produit volontairement simple, destinée à tester intérêt, régularité, compréhension et simplicité. Sans caméra, sans correction automatique, sans avatars obligatoires, sans IA complexe. |
| **V1** | Enrichissement après validation du MVP : assistance IA prudente, notifications, statistiques, synchronisation, et fonctions de confort utiles. |
| **V2** | Fonctions importantes mais non indispensables au démarrage : caméra, analyse prudente, premiers professeurs virtuels, personnalisation avancée, hors ligne enrichi. |
| **V3** | Vision avancée : moteur de coaching réutilisable, plusieurs disciplines douces, écosystème élargi. |
| **Backlog** | Idées intéressantes, non planifiées dans une version cible. |
| **Hors périmètre** | Explicitement exclu ; ne sera pas développé tant qu’une décision bloquante contraire n’est pas documentée. |

Règle de langage :

- on écrit **« prévu pour »** une version ;
- on écrit **« hors périmètre »** pour une exclusion ;
- on n’écrit pas « à implémenter ».

## 7. Fonctionnalités

Catalogue officiel. Chaque entrée possède : identifiant, nom, objectif, description, valeur utilisateur, dépendances, priorité, version cible, statut.

### F-001 — Présentation du Tai Chi

| Champ | Valeur |
| --- | --- |
| Identifiant | F-001 |
| Nom | Présentation du Tai Chi |
| Objectif | Donner un point d’entrée clair pour comprendre ce qu’est le Tai Chi. |
| Description | Contenus courts d’introduction : nature de la pratique, esprit général, attentes réalistes, limites du produit. |
| Valeur utilisateur | Réduit la confusion initiale et pose un cadre rassurant. |
| Dépendances | Aucune |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-002 — Découverte des styles

| Champ | Valeur |
| --- | --- |
| Identifiant | F-002 |
| Nom | Découverte des styles |
| Objectif | Informer l’utilisateur de l’existence de différents styles, sans le noyer. |
| Description | Présentation pédagogique légère des styles principaux ; le style retenu pour le parcours débutant reste une décision ouverte (`08_TAI_CHI_CURRICULUM.md`). |
| Valeur utilisateur | Oriente sans exiger un choix expert immédiat. |
| Dépendances | F-001 |
| Priorité | P1 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-003 — Parcours débutant

| Champ | Valeur |
| --- | --- |
| Identifiant | F-003 |
| Nom | Parcours débutant |
| Objectif | Proposer une progression structurée pour démarrer. |
| Description | Séquence ordonnée de leçons / mouvements / séances pour un débutant, avec un ordre clair et une charge progressive. |
| Valeur utilisateur | Répond au besoin « par où commencer ». |
| Dépendances | F-001, F-004, F-016 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-004 — Bibliothèque des mouvements

| Champ | Valeur |
| --- | --- |
| Identifiant | F-004 |
| Nom | Bibliothèque des mouvements |
| Objectif | Rendre consultables les mouvements du programme retenu. |
| Description | Catalogue des mouvements disponibles dans le parcours, avec accès individuel. Le nombre exact de mouvements reste ouvert. |
| Valeur utilisateur | Permet révision et consultation hors flux linéaire. |
| Dépendances | F-005 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-005 — Explication détaillée d’un mouvement

| Champ | Valeur |
| --- | --- |
| Identifiant | F-005 |
| Nom | Explication détaillée d’un mouvement |
| Objectif | Expliquer un mouvement de façon compréhensible et prudente. |
| Description | Texte pédagogique, points d’attention, erreurs fréquentes non médicales, consignes de rythme. Contenu validé par des personnes compétentes. |
| Valeur utilisateur | Réduit la peur de mal faire et aide à mémoriser. |
| Dépendances | Aucune (cœur éditorial) |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-006 — Vidéo pédagogique

| Champ | Valeur |
| --- | --- |
| Identifiant | F-006 |
| Nom | Vidéo pédagogique |
| Objectif | Montrer le mouvement de façon visuelle. |
| Description | Vidéo de démonstration associée à un mouvement ou à une séance. Pas d’analyse caméra côté utilisateur. |
| Valeur utilisateur | Complète le texte et facilite l’imitation prudente. |
| Dépendances | F-005 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-007 — Images de référence

| Champ | Valeur |
| --- | --- |
| Identifiant | F-007 |
| Nom | Images de référence |
| Objectif | Fournir des repères visuels statiques. |
| Description | Images ou illustrations de positions clés pour appuyer l’explication. |
| Valeur utilisateur | Aide la mémoire et la compréhension sans dépendre uniquement de la vidéo. |
| Dépendances | F-005 |
| Priorité | P1 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-008 — Programme quotidien

| Champ | Valeur |
| --- | --- |
| Identifiant | F-008 |
| Nom | Programme quotidien |
| Objectif | Proposer une suggestion de pratique du jour simple. |
| Description | Proposition légère de séance ou de révision adaptée au parcours, sans personnalisation avancée ni pression. |
| Valeur utilisateur | Favorise la régularité et réduit le choix paralysant. |
| Dépendances | F-003, F-013 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-009 — Historique

| Champ | Valeur |
| --- | --- |
| Identifiant | F-009 |
| Nom | Historique |
| Objectif | Permettre de revoir ce qui a déjà été pratiqué. |
| Description | Journal simple des séances ou leçons consultées / terminées. Sans statistiques avancées. |
| Valeur utilisateur | Soutient la continuité et la reprise. |
| Dépendances | F-013 |
| Priorité | P1 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-010 — Progression

| Champ | Valeur |
| --- | --- |
| Identifiant | F-010 |
| Nom | Progression |
| Objectif | Rendre visible l’avancement dans le parcours. |
| Description | Indication simple de progression dans le parcours débutant (ex. leçons abordées / suivantes). Sans gamification agressive. |
| Valeur utilisateur | Donne un sentiment de progression rassurant. |
| Dépendances | F-003 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-011 — Favoris

| Champ | Valeur |
| --- | --- |
| Identifiant | F-011 |
| Nom | Favoris |
| Objectif | Permettre de marquer des contenus à revoir. |
| Description | Marquage de mouvements, séances ou leçons favorites. |
| Valeur utilisateur | Facilite la révision ciblée. |
| Dépendances | F-004 |
| Priorité | P1 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-012 — Recherche

| Champ | Valeur |
| --- | --- |
| Identifiant | F-012 |
| Nom | Recherche |
| Objectif | Retrouver rapidement un contenu. |
| Description | Recherche simple dans les mouvements et contenus pédagogiques disponibles. |
| Valeur utilisateur | Gain de temps dès que le catalogue s’étoffe. |
| Dépendances | F-004 |
| Priorité | P2 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-013 — Séances guidées

| Champ | Valeur |
| --- | --- |
| Identifiant | F-013 |
| Nom | Séances guidées |
| Objectif | Offrir une pratique structurée de bout en bout. |
| Description | Séances précomposées (échauffement éventuel, mouvements, conclusion), guidées pas à pas, sans génération IA complexe. |
| Valeur utilisateur | Transforme des contenus isolés en pratique réelle. |
| Dépendances | F-004, F-006, F-016 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-014 — Exercices de respiration

| Champ | Valeur |
| --- | --- |
| Identifiant | F-014 |
| Nom | Exercices de respiration |
| Objectif | Intégrer des exercices de respiration simples liés à la pratique. |
| Description | Contenus courts de respiration, prudents, non médicaux, utilisables seuls ou dans une séance. |
| Valeur utilisateur | Aide au calme et à l’entrée dans la pratique. |
| Dépendances | F-016 |
| Priorité | P1 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-015 — Relaxation

| Champ | Valeur |
| --- | --- |
| Identifiant | F-015 |
| Nom | Relaxation |
| Objectif | Proposer une conclusion douce de séance. |
| Description | Contenus courts de relaxation / retour au calme, sans promesse thérapeutique. |
| Valeur utilisateur | Clôture la pratique de façon cohérente avec l’expérience recherchée. |
| Dépendances | F-016 |
| Priorité | P1 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-016 — Conseils de sécurité

| Champ | Valeur |
| --- | --- |
| Identifiant | F-016 |
| Nom | Conseils de sécurité |
| Objectif | Poser les limites physiques et d’usage avant et pendant la pratique. |
| Description | Conseils stables : arrêter en cas de douleur, adapter l’effort, consulter un professionnel compétent si nécessaire, absence de promesse médicale. |
| Valeur utilisateur | Renforce la confiance et la sécurité perçue. |
| Dépendances | Aucune |
| Priorité | P0 |
| Version cible | Pré-MVP |
| Statut | Classée — prévue pour Pré-MVP |

### F-017 — Notifications

| Champ | Valeur |
| --- | --- |
| Identifiant | F-017 |
| Nom | Notifications |
| Objectif | Soutenir la régularité sans culpabiliser. |
| Description | Rappels optionnels, discrets, désactivables, orientés encouragement et non pression. |
| Valeur utilisateur | Aide à maintenir une pratique régulière. |
| Dépendances | F-008, F-028 |
| Priorité | P1 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-018 — Objectifs personnels

| Champ | Valeur |
| --- | --- |
| Identifiant | F-018 |
| Nom | Objectifs personnels |
| Objectif | Permettre à l’utilisateur de définir des intentions simples. |
| Description | Objectifs légers (fréquence, durée, reprise d’un mouvement), sans compétition ni score social. |
| Valeur utilisateur | Donne un cadre personnel motivant. |
| Dépendances | F-010 |
| Priorité | P2 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-019 — Assistant IA

| Champ | Valeur |
| --- | --- |
| Identifiant | F-019 |
| Nom | Assistant IA |
| Objectif | Accompagner l’utilisateur par une assistance conversationnelle prudente. |
| Description | Assistant capable d’expliquer, encourager, proposer des révisions et adapter le rythme dans des limites strictes. Pas d’autorité médicale. Pas prévu pour le MVP. |
| Valeur utilisateur | Personnalise l’accompagnement après validation de l’intérêt de base. |
| Dépendances | F-003, F-005, F-016 |
| Priorité | P1 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-020 — Questions / Réponses

| Champ | Valeur |
| --- | --- |
| Identifiant | F-020 |
| Nom | Questions / Réponses |
| Objectif | Répondre aux questions fréquentes sur la pratique et les mouvements. |
| Description | Capacité Q/R, éventuellement portée par l’assistant IA ou par une base éditoriale contrôlée. Interdit : diagnostic, interprétation pathologique d’une douleur. |
| Valeur utilisateur | Réduit les blocages de compréhension. |
| Dépendances | F-019 ou base éditoriale F-005 |
| Priorité | P1 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-021 — Analyse caméra

| Champ | Valeur |
| --- | --- |
| Identifiant | F-021 |
| Nom | Analyse caméra |
| Objectif | Observer certains points du corps et comparer à une référence, de façon prudente. |
| Description | Fonction avancée de vision par ordinateur, avec consentement clair et limites explicites. Pas de garantie de posture parfaite. |
| Valeur utilisateur | Feedback visuel complémentaire, jamais absolu. |
| Dépendances | F-006, F-016, F-028 |
| Priorité | P2 |
| Version cible | V2 |
| Statut | Classée — prévue pour V2 |

### F-022 — Corrections de posture

| Champ | Valeur |
| --- | --- |
| Identifiant | F-022 |
| Nom | Corrections de posture |
| Objectif | Fournir des indications prudentes d’écart par rapport à une référence. |
| Description | Suggestions de correction simples, non médicales, conscientisées comme faillibles. Pas de correction automatique présentée comme vérité clinique. |
| Valeur utilisateur | Aide à améliorer la pratique sans jugement. |
| Dépendances | F-021 |
| Priorité | P2 |
| Version cible | V2 |
| Statut | Classée — prévue pour V2 |

### F-023 — Professeurs virtuels

| Champ | Valeur |
| --- | --- |
| Identifiant | F-023 |
| Nom | Professeurs virtuels |
| Objectif | Démontrer, guider et encourager via une couche de présentation animée. |
| Description | Avatars / professeurs virtuels optionnels. Le produit ne doit pas dépendre d’un fournisseur unique (dont Virtual Humans Studio). |
| Valeur utilisateur | Enrichit la démonstration et la présence pédagogique. |
| Dépendances | F-006 |
| Priorité | P2 |
| Version cible | V2 |
| Statut | Classée — prévue pour V2 |

### F-024 — Statistiques

| Champ | Valeur |
| --- | --- |
| Identifiant | F-024 |
| Nom | Statistiques |
| Objectif | Donner une lecture simple de l’activité. |
| Description | Statistiques sobres (fréquence, durée cumulée, reprise). Sans classement social ni pression. |
| Valeur utilisateur | Renforce le sentiment de progression et de régularité. |
| Dépendances | F-009, F-010 |
| Priorité | P2 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-025 — Contenus Premium

| Champ | Valeur |
| --- | --- |
| Identifiant | F-025 |
| Nom | Contenus Premium |
| Objectif | Distinguer éventuellement des contenus d’accès élargi. |
| Description | Ensemble de contenus ou capacités pouvant être associés à une offre payante. Le modèle économique exact reste ouvert (`06_BUSINESS_MODEL.md`). |
| Valeur utilisateur | Accès élargi si l’offre apporte une valeur claire. |
| Dépendances | F-003, F-013 |
| Priorité | P2 |
| Version cible | V2 |
| Statut | Classée — prévue pour V2 |

### F-026 — Téléchargement hors ligne

| Champ | Valeur |
| --- | --- |
| Identifiant | F-026 |
| Nom | Téléchargement hors ligne |
| Objectif | Permettre la pratique sans connexion permanente. |
| Description | Téléchargement ou mise en cache de leçons / médias sélectionnés. Périmètre technique exact ouvert. |
| Valeur utilisateur | Continuité d’usage hors réseau. |
| Dépendances | F-006, F-013 |
| Priorité | P2 |
| Version cible | V2 |
| Statut | Classée — prévue pour V2 |

### F-027 — Synchronisation multi-appareils

| Champ | Valeur |
| --- | --- |
| Identifiant | F-027 |
| Nom | Synchronisation multi-appareils |
| Objectif | Retrouver progression et historique sur plusieurs appareils. |
| Description | Synchronisation des données de progression / favoris / historique entre appareils de l’utilisateur. |
| Valeur utilisateur | Continuité d’expérience. |
| Dépendances | F-009, F-010, F-039 |
| Priorité | P2 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-028 — Paramètres

| Champ | Valeur |
| --- | --- |
| Identifiant | F-028 |
| Nom | Paramètres |
| Objectif | Laisser l’utilisateur contrôler les options essentielles. |
| Description | Paramètres de base : langue si disponible, notifications plus tard, consentements, préférences simples. |
| Valeur utilisateur | Maîtrise et confiance. |
| Dépendances | Aucune |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-029 — Accessibilité

| Champ | Valeur |
| --- | --- |
| Identifiant | F-029 |
| Nom | Accessibilité |
| Objectif | Rendre l’expérience utilisable par un public large, y compris débutants peu à l’aise avec le numérique. |
| Description | Socle d’accessibilité : lisibilité, contrastes, tailles de texte, navigation claire. Approfondissements possibles ensuite. |
| Valeur utilisateur | Réduit les freins d’usage. |
| Dépendances | Aucune |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-030 — Export utilisateur

| Champ | Valeur |
| --- | --- |
| Identifiant | F-030 |
| Nom | Export utilisateur |
| Objectif | Permettre à l’utilisateur d’exporter ses données utiles. |
| Description | Export des données de compte / progression selon les exigences de transparence. Détail RGPD dans `17_PRIVACY_RGPD.md`. |
| Valeur utilisateur | Confiance et maîtrise des données. |
| Dépendances | F-039 |
| Priorité | P2 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-031 — Avertissements avant pratique

| Champ | Valeur |
| --- | --- |
| Identifiant | F-031 |
| Nom | Avertissements avant pratique |
| Objectif | Afficher clairement les limites avant une séance. |
| Description | Messages de prudence visibles avant la pratique : arrêt si douleur, pas de promesse médicale, adaptation du niveau. |
| Valeur utilisateur | Sécurité et clarté dès le premier usage. |
| Dépendances | F-016 |
| Priorité | P0 |
| Version cible | Pré-MVP |
| Statut | Classée — prévue pour Pré-MVP |

### F-032 — Reprise de séance

| Champ | Valeur |
| --- | --- |
| Identifiant | F-032 |
| Nom | Reprise de séance |
| Objectif | Reprendre facilement après interruption. |
| Description | Capacité simple à reprendre une séance ou le parcours là où l’utilisateur s’était arrêté. |
| Valeur utilisateur | Soutient la régularité sans culpabilisation. |
| Dépendances | F-009, F-013 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-033 — Première découverte guidée

| Champ | Valeur |
| --- | --- |
| Identifiant | F-033 |
| Nom | Première découverte guidée |
| Objectif | Accueillir l’utilisateur sans surcharge. |
| Description | Court parcours d’entrée : présentation, prudence, premier pas dans le parcours débutant. Pas d’onboarding marketing long. |
| Valeur utilisateur | Réduit le frottement du premier lancement. |
| Dépendances | F-001, F-003, F-031 |
| Priorité | P0 |
| Version cible | MVP |
| Statut | Classée — prévue pour MVP |

### F-039 — Compte utilisateur

| Champ | Valeur |
| --- | --- |
| Identifiant | F-039 |
| Nom | Compte utilisateur |
| Objectif | Identifier l’utilisateur pour synchroniser et protéger ses données. |
| Description | Compte permettant sauvegarde et synchronisation. Non requis pour un MVP local minimal si la reprise locale suffit ; requis pour F-027 et F-030. |
| Valeur utilisateur | Continuité et portabilité. |
| Dépendances | Aucune |
| Priorité | P1 |
| Version cible | V1 |
| Statut | Classée — prévue pour V1 |

### F-034 — Personnalisation avancée

| Champ | Valeur |
| --- | --- |
| Identifiant | F-034 |
| Nom | Personnalisation avancée |
| Objectif | Adapter plus finement séances et recommandations. |
| Description | Adaptation selon niveau perçu, préférences, historique riche, éventuellement assistant IA. Au-delà du programme quotidien simple du MVP. |
| Valeur utilisateur | Meilleure adéquation à la situation de l’utilisateur. |
| Dépendances | F-008, F-019, F-010 |
| Priorité | P2 |
| Version cible | V2 |
| Statut | Classée — prévue pour V2 |

### F-035 — Programmes adaptés

| Champ | Valeur |
| --- | --- |
| Identifiant | F-035 |
| Nom | Programmes adaptés |
| Objectif | Proposer des parcours thématiques au-delà du parcours débutant générique. |
| Description | Programmes possibles : seniors, mobilité, anti-stress, révision entre cours, etc. Contenu et priorisation ouverts. |
| Valeur utilisateur | Répond à des besoins plus spécifiques. |
| Dépendances | F-003, F-013 |
| Priorité | P2 |
| Version cible | V2 |
| Statut | Classée — prévue pour V2 |

### F-036 — Moteur de coaching réutilisable

| Champ | Valeur |
| --- | --- |
| Identifiant | F-036 |
| Nom | Moteur de coaching réutilisable |
| Objectif | Factoriser le cœur de coaching pour d’autres pratiques douces. |
| Description | Capacité structurante long terme : séparer moteur d’accompagnement et contenus disciplinaires. |
| Valeur utilisateur | Indirecte à court terme ; stratégique à long terme. |
| Dépendances | F-019, F-034 |
| Priorité | P3 |
| Version cible | V3 |
| Statut | Classée — prévue pour V3 |

### F-037 — Plusieurs disciplines douces

| Champ | Valeur |
| --- | --- |
| Identifiant | F-037 |
| Nom | Plusieurs disciplines douces |
| Objectif | Étendre le produit au-delà du seul Tai Chi. |
| Description | Ouverture possible vers Qi Gong, mobilité, équilibre, respiration élargie, etc. Le Tai Chi reste le centre initial. |
| Valeur utilisateur | Continuité dans un écosystème de pratiques douces. |
| Dépendances | F-036 |
| Priorité | P3 |
| Version cible | V3 |
| Statut | Classée — prévue pour V3 |

### F-038 — Méditation guidée élargie

| Champ | Valeur |
| --- | --- |
| Identifiant | F-038 |
| Nom | Méditation guidée élargie |
| Objectif | Enrichir la dimension de présence et de calme. |
| Description | Contenus de méditation plus développés que la simple relaxation de fin de séance. Place exacte ouverte. |
| Valeur utilisateur | Approfondit l’expérience de calme. |
| Dépendances | F-015 |
| Priorité | P3 |
| Version cible | Backlog |
| Statut | Classée — backlog |

### F-040 — Partenariats écoles / professeurs

| Champ | Valeur |
| --- | --- |
| Identifiant | F-040 |
| Nom | Partenariats écoles / professeurs |
| Objectif | Relier éventuellement pratique numérique et enseignement humain. |
| Description | Idée d’intégration ou de cohabitation avec des écoles / professeurs. Non planifiée. |
| Valeur utilisateur | Complémentarité éventuelle avec le présentiel. |
| Dépendances | Aucune |
| Priorité | P3 |
| Version cible | Backlog |
| Statut | Classée — backlog |

### F-041 — Mode hors ligne partiel minimal

| Champ | Valeur |
| --- | --- |
| Identifiant | F-041 |
| Nom | Mode hors ligne partiel minimal |
| Objectif | Explorer une continuité hors ligne légère avant le téléchargement riche. |
| Description | Idée de consultation limitée hors ligne, distincte de F-026. Non planifiée tant que le besoin n’est pas prouvé. |
| Valeur utilisateur | Continuité partielle. |
| Dépendances | F-013 |
| Priorité | P3 |
| Version cible | Backlog |
| Statut | Classée — backlog |

### HP-001 — Réseau social

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-001 |
| Nom | Réseau social |
| Objectif | — |
| Description | Fil d’actualité, abonnements, interactions sociales centrées communauté. |
| Valeur utilisateur | Non retenue ; hors vision. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-002 — Classement mondial

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-002 |
| Nom | Classement mondial |
| Objectif | — |
| Description | Leaderboards globaux ou scores comparatifs publics. |
| Valeur utilisateur | Non retenue ; contraire à l’absence de compétition. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-003 — Compétition entre utilisateurs

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-003 |
| Nom | Compétition entre utilisateurs |
| Objectif | — |
| Description | Défis compétitifs, duels, pression sociale de performance. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-004 — Diagnostic médical

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-004 |
| Nom | Diagnostic médical |
| Objectif | — |
| Description | Toute fonction visant à diagnostiquer une pathologie. |
| Valeur utilisateur | Non retenue ; interdit par la vision. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-005 — Prescription

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-005 |
| Nom | Prescription |
| Objectif | — |
| Description | Prescription d’exercices à visée thérapeutique ou médicale. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-006 — Vente de matériel

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-006 |
| Nom | Vente de matériel |
| Objectif | — |
| Description | E-commerce de matériel associé. |
| Valeur utilisateur | Non retenue dans le produit. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-007 — Marketplace

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-007 |
| Nom | Marketplace |
| Objectif | — |
| Description | Place de marché de contenus ou services tiers. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-008 — Publicité invasive

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-008 |
| Nom | Publicité invasive |
| Objectif | — |
| Description | Publicités intrusives, interstitiels agressifs, tracking publicitaire invasif. |
| Valeur utilisateur | Non retenue ; contraire au calme recherché. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-009 — NFT

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-009 |
| Nom | NFT |
| Objectif | — |
| Description | Jetons non fongibles liés à l’usage. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-010 — Crypto

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-010 |
| Nom | Crypto |
| Objectif | — |
| Description | Paiements ou mécaniques crypto-actives. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-011 — Paris

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-011 |
| Nom | Paris |
| Objectif | — |
| Description | Paris, jeux d’argent, mécaniques assimilées. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-012 — Coaching médical

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-012 |
| Nom | Coaching médical |
| Objectif | — |
| Description | Accompagnement présenté comme médical, clinique ou thérapeutique. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-013 — Caméra sans consentement clair

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-013 |
| Nom | Caméra sans consentement clair |
| Objectif | — |
| Description | Toute activation ou analyse caméra sans consentement explicite. |
| Valeur utilisateur | Non retenue ; contraire à la confiance. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

### HP-014 — Gamification culpabilisante

| Champ | Valeur |
| --- | --- |
| Identifiant | HP-014 |
| Nom | Gamification culpabilisante |
| Objectif | — |
| Description | Streaks punitifs, messages de honte, pression à l’usage quotidien forcé. |
| Valeur utilisateur | Non retenue. |
| Dépendances | — |
| Priorité | — |
| Version cible | Hors périmètre |
| Statut | Classée — hors périmètre |

## 8. Pré-MVP

Fonctionnalités indispensables avant tout test utilisateur :

| ID | Nom | Priorité |
| --- | --- | --- |
| F-016 | Conseils de sécurité | P0 |
| F-031 | Avertissements avant pratique | P0 |

Conditions Pré-MVP associées (non fonctionnelles au sens catalogue, mais bloquantes) :

- contenus pédagogiques minimaux validés par des personnes compétentes ;
- formulation non médicale vérifiée ;
- parcours débutant minimal compréhensible prêt à être testé dans le MVP.

Sans ce socle, aucun test utilisateur du MVP n’est autorisé.

## 9. MVP

Objectif du MVP : tester l’intérêt réel, la régularité, la compréhension et la simplicité.

### Fonctionnalités autorisées (prévues pour MVP)

| ID | Nom | Priorité |
| --- | --- | --- |
| F-001 | Présentation du Tai Chi | P0 |
| F-002 | Découverte des styles | P1 |
| F-003 | Parcours débutant | P0 |
| F-004 | Bibliothèque des mouvements | P0 |
| F-005 | Explication détaillée d’un mouvement | P0 |
| F-006 | Vidéo pédagogique | P0 |
| F-007 | Images de référence | P1 |
| F-008 | Programme quotidien | P0 |
| F-009 | Historique | P1 |
| F-010 | Progression | P0 |
| F-013 | Séances guidées | P0 |
| F-014 | Exercices de respiration | P1 |
| F-015 | Relaxation | P1 |
| F-028 | Paramètres | P0 |
| F-029 | Accessibilité | P0 |
| F-032 | Reprise de séance | P0 |
| F-033 | Première découverte guidée | P0 |

Le MVP inclut aussi, par héritage du Pré-MVP : F-016 et F-031.

### Explicitement refusé dans le MVP

- F-019 Assistant IA (IA complexe / conversationnelle)
- F-021 Analyse caméra
- F-022 Corrections de posture
- F-023 Professeurs virtuels (avatars obligatoires ou non)
- F-025 Contenus Premium
- F-026 Téléchargement hors ligne riche
- F-027 Synchronisation multi-appareils
- toute fonction hors périmètre

Le MVP doit rester une expérience courte, calme et compréhensible.

## 10. Version 1

Fonctions après validation du MVP.

| ID | Nom | Priorité |
| --- | --- | --- |
| F-011 | Favoris | P1 |
| F-012 | Recherche | P2 |
| F-017 | Notifications | P1 |
| F-018 | Objectifs personnels | P2 |
| F-019 | Assistant IA | P1 |
| F-020 | Questions / Réponses | P1 |
| F-024 | Statistiques | P2 |
| F-027 | Synchronisation multi-appareils | P2 |
| F-030 | Export utilisateur | P2 |
| F-039 | Compte utilisateur | P1 |

La V1 enrichit l’accompagnement et la continuité, sans introduire la caméra ni les professeurs virtuels.

## 11. Version 2

Fonctions importantes mais non indispensables au démarrage.

| ID | Nom | Priorité |
| --- | --- | --- |
| F-021 | Analyse caméra | P2 |
| F-022 | Corrections de posture | P2 |
| F-023 | Professeurs virtuels | P2 |
| F-025 | Contenus Premium | P2 |
| F-026 | Téléchargement hors ligne | P2 |
| F-034 | Personnalisation avancée | P2 |
| F-035 | Programmes adaptés | P2 |

La V2 n’est engagée que si la valeur du MVP/V1 est confirmée et si les garde-fous privacy / prudence sont prêts.

## 12. Version 3

Vision avancée.

| ID | Nom | Priorité |
| --- | --- | --- |
| F-036 | Moteur de coaching réutilisable | P3 |
| F-037 | Plusieurs disciplines douces | P3 |

Direction uniquement : pas d’engagement de livraison à ce stade.

## 13. Backlog

Idées intéressantes mais non planifiées :

| ID | Nom |
| --- | --- |
| F-038 | Méditation guidée élargie |
| F-040 | Partenariats écoles / professeurs |
| F-041 | Mode hors ligne partiel minimal |

Toute nouvelle idée postérieure au Design Freeze rejoindra ce backlog ou une version V2/V3, sauf réouverture bloquante documentée.

## 14. Hors périmètre

Ne sera pas développé :

| ID | Nom |
| --- | --- |
| HP-001 | Réseau social |
| HP-002 | Classement mondial |
| HP-003 | Compétition entre utilisateurs |
| HP-004 | Diagnostic médical |
| HP-005 | Prescription |
| HP-006 | Vente de matériel |
| HP-007 | Marketplace |
| HP-008 | Publicité invasive |
| HP-009 | NFT |
| HP-010 | Crypto |
| HP-011 | Paris |
| HP-012 | Coaching médical |
| HP-013 | Caméra sans consentement clair |
| HP-014 | Gamification culpabilisante |

Ces exclusions protègent la vision : calme, simplicité, non-médical, non-compétitif.

## 15. Dépendances fonctionnelles

Dépendances principales :

| Fonction | Nécessite |
| --- | --- |
| F-002 | F-001 |
| F-003 | F-001, F-004, F-016 |
| F-004 | F-005 |
| F-006 | F-005 |
| F-007 | F-005 |
| F-008 | F-003, F-013 |
| F-009 | F-013 |
| F-010 | F-003 |
| F-011 | F-004 |
| F-012 | F-004 |
| F-013 | F-004, F-006, F-016 |
| F-014 | F-016 |
| F-015 | F-016 |
| F-017 | F-008, F-028 |
| F-018 | F-010 |
| F-019 | F-003, F-005, F-016 |
| F-020 | F-019 ou F-005 |
| F-021 | F-006, F-016, F-028 |
| F-022 | F-021 |
| F-023 | F-006 |
| F-024 | F-009, F-010 |
| F-025 | F-003, F-013 |
| F-026 | F-006, F-013 |
| F-027 | F-009, F-010, F-039 |
| F-030 | F-039 |
| F-031 | F-016 |
| F-032 | F-009, F-013 |
| F-033 | F-001, F-003, F-031 |
| F-034 | F-008, F-019, F-010 |
| F-035 | F-003, F-013 |
| F-036 | F-019, F-034 |
| F-037 | F-036 |
| F-038 | F-015 |
| F-041 | F-013 |

Exemple canonique : **F-022 nécessite F-021** ; **F-021 nécessite F-006**.

## 16. Priorités

| Niveau | Signification |
| --- | --- |
| **P0** | Indispensable pour la version cible. Sans cette fonction, la version ne peut pas être considérée comme atteinte. |
| **P1** | Importante pour la valeur de la version cible. Peut être allégée, pas omise sans justification. |
| **P2** | Utile, mais reportable à l’intérieur de la version ou vers la version suivante si contrainte. |
| **P3** | Souhaitable à long terme ou exploratoire ; ne bloque aucune version proche. |

Règle : une fonction P0 d’une version N ne peut pas être silencieusement déplacée sans mise à jour de `DECISIONS.md`, `CHANGELOG.md` et du présent document.

## 17. Critères de passage

### Pré-MVP → MVP

- F-016 et F-031 prêts ;
- contenus minimaux validés par des personnes compétentes ;
- formulation non médicale vérifiée ;
- parcours débutant minimal compréhensible ;
- environnement de test utilisateur prêt sans fonctions avancées hors scope.

### MVP → V1

- intérêt utilisateur observé (hypothèse à mesurer, méthode ouverte) ;
- compréhension du parcours jugée suffisante ;
- régularité ou intention de régularité suffisamment encourageante pour investir l’enrichissement ;
- aucune dérive médicale / culpabilisante détectée dans l’usage ;
- besoins V1 priorisés sans élargir subrepticement vers la caméra.

### V1 → V2

- assistant IA et fonctions V1 stabilisés avec garde-fous ;
- valeur de la personnalisation simple confirmée ou infirmée proprement ;
- readiness privacy / consentement pour la caméra si F-021 est engagée ;
- justification produit claire pour avatars et hors ligne riche.

### V2 → V3

- stabilité du cœur Tai Chi ;
- preuve que l’extension multi-disciplines n’affaiblit pas la simplicité ;
- architecture de contenus / coaching suffisamment séparable (décision technique ultérieure) ;
- arbitrage économique et pédagogique documenté.

## 18. Conditions de report

Une fonctionnalité doit être repoussée lorsque :

- elle menace la simplicité du MVP ;
- ses dépendances ne sont pas prêtes ;
- le risque privacy / médical / pédagogique est insuffisamment traité ;
- son coût retarde la validation d’hypothèse plus fondamentale ;
- les retours utilisateurs montrent qu’elle n’est pas prioritaire ;
- elle dépend d’une décision encore ouverte critique (ex. modèle économique pour F-025).

Le report doit indiquer la nouvelle version cible et mettre à jour le catalogue.

## 19. Conditions de suppression

Une fonctionnalité doit être retirée lorsque :

- elle contredit la vision (médical, compétitif, culpabilisant, dépendance fournisseur unique critique) ;
- elle est redondante avec une autre fonction mieux cadrée ;
- les tests montrent une absence durable de valeur ;
- elle crée un risque légal ou de confiance disproportionné ;
- elle est reclassée explicitement hors périmètre.

La suppression doit être tracée dans `DECISIONS.md` et `CHANGELOG.md`.

## 20. Limites du MVP

Le MVP refuse volontairement :

- la caméra et toute analyse de mouvement ;
- les corrections automatiques de posture ;
- les professeurs virtuels / avatars ;
- l’IA conversationnelle complexe ;
- la monétisation premium comme condition d’accès à l’essentiel ;
- la synchronisation multi-appareils comme prérequis ;
- les statistiques riches et la gamification ;
- l’élargissement multi-disciplines ;
- tout élément hors périmètre listé en section 14.

Cette frugalité est un choix produit : prouver d’abord l’utilité d’un apprentissage simple, progressif et rassurant.

## 21. Vision d’évolution

Enrichir sans casser la simplicité :

1. Stabiliser le cœur pédagogique (parcours, mouvements, séances, prudence).
2. Ajouter l’accompagnement (IA, rappels, objectifs) seulement après validation d’usage.
3. Introduire la caméra et les avatars comme couches optionnelles, jamais comme fondations obligatoires.
4. Élargir ensuite vers programmes adaptés puis, à long terme, moteur réutilisable et disciplines douces.
5. Conserver à chaque étape : calme, clarté, non-jugement, non-médical.

Toute évolution doit pouvoir être expliquée par un besoin utilisateur validé, pas par l’attrait technologique seul.

## 22. Critères de validation du Scope

Le présent document pourra être considéré comme validé lorsque :

1. il est relu et accepté explicitement ;
2. chaque fonctionnalité listée a une version cible unique ;
3. le MVP est clairement délimité et volontairement léger ;
4. caméra, corrections, avatars et IA complexe sont hors MVP ;
5. le hors périmètre contient au minimum les exclusions imposées ;
6. les dépendances P0 du MVP sont cohérentes ;
7. les décisions structurantes sont tracées dans `DECISIONS.md` ;
8. `CHANGELOG.md` est à jour ;
9. `docs/03_PERSONAS.md` peut s’appuyer sur ce périmètre sans ambiguïté majeure.

> **VALIDÉ**
>
> Critères de validation du Scope considérés remplis pour la version documentaire 1.1.

## 23. Décisions ouvertes

Restent ouvertes après ce document :

- public prioritaire définitif (`03_PERSONAS.md`) ;
- style(s) et forme(s) Tai Chi retenus ;
- nombre exact de mouvements du MVP ;
- durée et structure type d’une séance ;
- critères chiffrés de succès MVP → V1 ;
- détail des cas d’usage IA autorisés / interdits ;
- modalités exactes de monétisation (F-025) ;
- langues supportées ;
- profondeur d’accessibilité au-delà du socle ;
- choix techniques, fournisseurs, APIs, modèle de données ;
- traitement local vs distant pour la caméra ;
- calendrier réel de livraison (roadmap).

Ces ouvertures ne remettent pas en cause le classement des fonctionnalités ci-dessus.

## 24. Conclusion

Ce document fige le découpage officiel des versions et le catalogue fonctionnel numéroté.

Le MVP reste une expérience minimale d’apprentissage guidé du Tai Chi, centrée sur la clarté, la prudence et la régularité. L’IA arrive en V1. La caméra, les corrections prudentes et les professeurs virtuels arrivent en V2. Le moteur multi-disciplines appartient à la V3. Les dérives sociales, compétitives, médicales et spéculatives sont hors périmètre.

Prochaine étape documentaire prévue par l’ordre officiel : `docs/03_PERSONAS.md`.

Aucun développement applicatif n’est autorisé sur la seule base de ce document.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.1 |
| Statut | VALIDÉ |
| Prochain document | `docs/03_PERSONAS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
