# 05 — Features

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Features |
| Numéro | 05 |
| Fichier | `docs/05_FEATURES.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md` |
| Documents utilisant celui-ci | `docs/06_BUSINESS_MODEL.md`, `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md`, `docs/12_UX_UI.md`, `docs/22_ROADMAP.md` |
| Décisions concernées | D-032 à D-034 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Spécification fonctionnelle officielle. Aucune fonctionnalité ajoutée, supprimée ou déplacée de version par rapport à `docs/02_PRODUCT_SCOPE.md`.
> Document conforme à `docs/99_DOCUMENTATION_STANDARD.md`.

## 2. Objectif

Décrire précisément les **41 fonctionnalités officielles** du produit : ce que le produit fait, pour qui, dans quel parcours, avec quelles règles et limites.

## 3. Rôle du document

Référence unique pour toutes les fonctionnalités. Sert de base à la stratégie de contenu, au curriculum, à l’IA, à l’UX, à la roadmap et aux tests d’acceptation fonctionnelle.

Ne remplace pas le Product Scope pour le classement des versions. Ne décide pas de l’implémentation.

## 4. Organisation du catalogue

Le catalogue suit l’ordre numérique officiel `F-001` … `F-041` (y compris les numéros non contigus déjà figés : `F-039` placé après `F-033` dans le Scope, conservé ici dans l’ordre numérique croissant pour lecture).

Ordre de présentation dans ce document : `F-001` → `F-041`.

## 5. Convention des fonctionnalités

| Règle | Valeur |
| --- | --- |
| Préfixe | `F-` |
| Plage officielle | `F-001` à `F-041` (41 fonctionnalités) |
| Priorités | `P0`, `P1`, `P2`, `P3` |
| Versions | Pré-MVP, MVP, V1, V2, V3, Backlog |
| Dépendances | Uniquement des identifiants `F-xxx` ou `Aucune` |
| Personas | `P-001` à `P-005` |
| Langage | « est prévu pour » / « appartient à » — jamais « sera développé » |

---

## 6. Catalogue complet

### 6.1 F-001 — Présentation du Tai Chi

#### Identifiant
F-001

#### Nom
Présentation du Tai Chi

#### Version cible
MVP

#### Priorité
P0

#### Description
Contenus courts d’introduction : nature de la pratique, esprit général, attentes réalistes, limites du produit.

#### Objectif utilisateur
Comprendre rapidement ce qu’est le Tai Chi dans ce produit.

#### Valeur apportée
Réduit la confusion initiale et pose un cadre rassurant.

#### Personas concernés
P-001, P-002, P-003, P-005

#### Parcours concernés
Première ouverture ; découverte ; activation assistée (P-005)

#### Dépendances
Aucune

#### Règles métier
- Ne promet aucun résultat médical.
- Reste courte et non infantilissante.
- Oriente vers la prudence et le parcours débutant.

#### Cas particuliers
P-004 peut ignorer cette étape s’il cherche directement la bibliothèque.

#### Limites
Ne remplace pas un cours complet d’histoire du Tai Chi.

#### Critères d'acceptation
- L’utilisateur peut lire une présentation claire du Tai Chi.
- L’utilisateur comprend que le produit n’est pas médical.
- L’utilisateur peut accéder ensuite à une prochaine étape évidente.

#### Décisions associées
D-006, D-012

#### Évolutions futures
Enrichissement éditorial sans changer le rôle d’entrée.

---

### 6.2 F-002 — Découverte des styles

#### Identifiant
F-002

#### Nom
Découverte des styles

#### Version cible
MVP

#### Priorité
P1

#### Description
Présentation pédagogique légère des styles principaux, sans noyer l’utilisateur.

#### Objectif utilisateur
Savoir que plusieurs styles existent, sans devoir choisir en expert.

#### Valeur apportée
Oriente sans exiger un choix immédiat.

#### Personas concernés
P-001, P-003, P-004

#### Parcours concernés
Découverte ; parcours débutant

#### Dépendances
F-001

#### Règles métier
- N’impose pas le style définitif du curriculum.
- Reste optionnelle par rapport à la première séance.

#### Cas particuliers
P-002 peut la contourner au profit de la séance du jour.

#### Limites
Le style retenu pour le parcours reste ouvert (`docs/08_TAI_CHI_CURRICULUM.md`).

#### Critères d'acceptation
- L’utilisateur peut consulter une présentation simple des styles.
- L’utilisateur n’est pas bloqué s’il ne choisit pas de style.

#### Décisions associées
Aucune décision de style figée

#### Évolutions futures
Lien éventuel avec programmes adaptés (F-035).

---

### 6.3 F-003 — Parcours débutant

#### Identifiant
F-003

#### Nom
Parcours débutant

#### Version cible
MVP

#### Priorité
P0

#### Description
Séquence ordonnée de leçons / mouvements / séances pour un débutant, avec charge progressive.

#### Objectif utilisateur
Savoir par où commencer et quoi faire ensuite.

#### Valeur apportée
Structure l’apprentissage autonome.

#### Personas concernés
P-001, P-002, P-003, P-005

#### Parcours concernés
Première ouverture ; première séance ; première semaine ; routine

#### Dépendances
F-001, F-004, F-016

#### Règles métier
- Une prochaine étape doit toujours être identifiable.
- Autorise la répétition d’une étape.
- N’utilise pas de compétition.

#### Cas particuliers
P-004 n’en dépend pas pour réviser.

#### Limites
Nombre exact de mouvements non figé ici.

#### Critères d'acceptation
- L’utilisateur peut entrer dans un parcours ordonné.
- L’utilisateur peut identifier l’étape suivante.
- L’utilisateur peut revenir sur une étape déjà vue.

#### Décisions associées
D-006, D-016, D-027

#### Évolutions futures
Branches thématiques via F-035.

---

### 6.4 F-004 — Bibliothèque des mouvements

#### Identifiant
F-004

#### Nom
Bibliothèque des mouvements

#### Version cible
MVP

#### Priorité
P0

#### Description
Catalogue des mouvements disponibles, consultables individuellement.

#### Objectif utilisateur
Retrouver et réviser un mouvement hors flux linéaire.

#### Valeur apportée
Soutient mémorisation et révision.

#### Personas concernés
P-001, P-003, P-004

#### Parcours concernés
Semaine / routine ; révision (P-004)

#### Dépendances
F-005

#### Règles métier
- Chaque mouvement expose au minimum une explication.
- Accessible sans obliger à terminer tout le parcours.

#### Cas particuliers
Point d’entrée dominant pour P-004.

#### Limites
Nombre de mouvements ouvert.

#### Critères d'acceptation
- L’utilisateur peut parcourir la liste des mouvements disponibles.
- L’utilisateur peut ouvrir la fiche d’un mouvement.

#### Décisions associées
D-016

#### Évolutions futures
Favoris (F-011) et recherche (F-012) en V1.

---

### 6.5 F-005 — Explication détaillée d’un mouvement

#### Identifiant
F-005

#### Nom
Explication détaillée d’un mouvement

#### Version cible
MVP

#### Priorité
P0

#### Description
Texte pédagogique, points d’attention, erreurs fréquentes non médicales, consignes de rythme. Contenu validé par des personnes compétentes.

#### Objectif utilisateur
Comprendre un mouvement sans jargon inutile.

#### Valeur apportée
Réduit la peur de mal faire.

#### Personas concernés
P-001, P-002, P-003, P-004

#### Parcours concernés
Première séance ; révision

#### Dépendances
Aucune

#### Règles métier
- Pas de diagnostic.
- Contenu maîtrisé ; l’IA ne doit pas inventer la technique.

#### Cas particuliers
Peut servir de base éditoriale à F-020.

#### Limites
N’assure pas une posture parfaite.

#### Critères d'acceptation
- L’utilisateur peut lire une explication claire d’un mouvement.
- L’explication ne présente pas de conseil médical.

#### Décisions associées
D-011, D-008

#### Évolutions futures
Enrichissement multimédia sans changer le rôle.

---

### 6.6 F-006 — Vidéo pédagogique

#### Identifiant
F-006

#### Nom
Vidéo pédagogique

#### Version cible
MVP

#### Priorité
P0

#### Description
Vidéo de démonstration associée à un mouvement ou une séance. Sans analyse caméra côté utilisateur.

#### Objectif utilisateur
Voir le mouvement pour l’imiter prudemment.

#### Valeur apportée
Complète le texte et facilite l’apprentissage visuel.

#### Personas concernés
P-001, P-002, P-003, P-004, P-005

#### Parcours concernés
Première séance ; routine ; révision

#### Dépendances
F-005

#### Règles métier
- L’utilisateur peut revoir / mettre en pause conceptuellement (contrôle de rythme).
- Pas de promesse de correction automatique.

#### Cas particuliers
Critique pour P-001 et P-003.

#### Limites
Ne constitue pas une analyse de posture.

#### Critères d'acceptation
- L’utilisateur peut visionner une démonstration associée au mouvement ou à la séance.
- L’utilisateur peut revenir sur la démonstration.

#### Décisions associées
D-016

#### Évolutions futures
Couche professeurs virtuels optionnelle (F-023) en V2.

---

### 6.7 F-007 — Images de référence

#### Identifiant
F-007

#### Nom
Images de référence

#### Version cible
MVP

#### Priorité
P1

#### Description
Images ou illustrations de positions clés.

#### Objectif utilisateur
Disposer de repères statiques.

#### Valeur apportée
Aide mémoire sans dépendre uniquement de la vidéo.

#### Personas concernés
P-001, P-003, P-004

#### Parcours concernés
Première séance ; révision

#### Dépendances
F-005

#### Règles métier
- Servent l’explication, pas le diagnostic.

#### Cas particuliers
Utiles si la vidéo est mise en pause.

#### Limites
Ne remplacent pas une démonstration dynamique.

#### Critères d'acceptation
- L’utilisateur peut consulter des images de référence liées au mouvement.

#### Décisions associées
Aucune

#### Évolutions futures
Variantes d’angle éventuelles.

---

### 6.8 F-008 — Programme quotidien

#### Identifiant
F-008

#### Nom
Programme quotidien

#### Version cible
MVP

#### Priorité
P0

#### Description
Suggestion légère de séance ou révision du jour, sans personnalisation avancée ni pression.

#### Objectif utilisateur
Savoir quoi pratiquer aujourd’hui sans choisir longtemps.

#### Valeur apportée
Favorise la régularité.

#### Personas concernés
P-001, P-002, P-003

#### Parcours concernés
Première semaine ; routine ; Wow moment (P-002)

#### Dépendances
F-003, F-013

#### Règles métier
- Aucune culpabilisation si non réalisé.
- Une seule suggestion principale suffit.

#### Cas particuliers
Entrée dominante pour P-002.

#### Limites
Pas de personnalisation avancée (voir F-034 en V2).

#### Critères d'acceptation
- L’utilisateur peut accéder à une proposition de pratique du jour.
- L’utilisateur peut ignorer la proposition sans pénalité.

#### Décisions associées
D-029, D-027

#### Évolutions futures
Personnalisation avancée (F-034).

---

### 6.9 F-009 — Historique

#### Identifiant
F-009

#### Nom
Historique

#### Version cible
MVP

#### Priorité
P1

#### Description
Journal simple des séances ou leçons consultées / terminées.

#### Objectif utilisateur
Revoir ce qui a déjà été pratiqué.

#### Valeur apportée
Soutient continuité et reprise.

#### Personas concernés
P-002, P-003, P-001

#### Parcours concernés
Première semaine ; routine

#### Dépendances
F-013

#### Règles métier
- Pas de classement social.
- Pas de sanction pour absence.

#### Cas particuliers
Alimente plus tard F-024 et F-027.

#### Limites
Pas de statistiques avancées au MVP.

#### Critères d'acceptation
- L’utilisateur peut consulter un historique simple de ses pratiques ou leçons.

#### Décisions associées
D-029

#### Évolutions futures
Statistiques (F-024) en V1.

---

### 6.10 F-010 — Progression

#### Identifiant
F-010

#### Nom
Progression

#### Version cible
MVP

#### Priorité
P0

#### Description
Indication simple d’avancement dans le parcours débutant, sans gamification agressive.

#### Objectif utilisateur
Sentir où il en est et quoi faire ensuite.

#### Valeur apportée
Sentiment de progression rassurant.

#### Personas concernés
P-001, P-002, P-003

#### Parcours concernés
Premier succès ; première semaine ; premier mois

#### Dépendances
F-003

#### Règles métier
- Pas de compétition.
- Pas de streaks punitifs.

#### Cas particuliers
Signal sobre de réussite.

#### Limites
Ne mesure pas la qualité biomécanique.

#### Critères d'acceptation
- L’utilisateur peut voir son avancement dans le parcours.
- L’utilisateur peut identifier une prochaine étape.

#### Décisions associées
D-029, D-030

#### Évolutions futures
Objectifs personnels (F-018) en V1.

---

### 6.11 F-011 — Favoris

#### Identifiant
F-011

#### Nom
Favoris

#### Version cible
V1

#### Priorité
P1

#### Description
Marquage de mouvements, séances ou leçons favorites.

#### Objectif utilisateur
Retrouver rapidement ce qu’il veut réviser.

#### Valeur apportée
Révision ciblée.

#### Personas concernés
P-003, P-004

#### Parcours concernés
Routine V1 ; révision

#### Dépendances
F-004

#### Règles métier
- Ajout / retrait simple.
- Pas de partage social obligatoire.

#### Cas particuliers
Très utile à P-004.

#### Limites
Appartient à V1, pas au MVP.

#### Critères d'acceptation
- L’utilisateur peut marquer un contenu en favori.
- L’utilisateur peut retrouver ses favoris.

#### Décisions associées
Aucune

#### Évolutions futures
Sync via F-027.

---

### 6.12 F-012 — Recherche

#### Identifiant
F-012

#### Nom
Recherche

#### Version cible
V1

#### Priorité
P2

#### Description
Recherche simple dans mouvements et contenus pédagogiques.

#### Objectif utilisateur
Retrouver vite un contenu.

#### Valeur apportée
Gain de temps quand le catalogue s’étoffe.

#### Personas concernés
P-004, P-002, P-003

#### Parcours concernés
Révision ; routine V1

#### Dépendances
F-004

#### Règles métier
- Résultats limités aux contenus disponibles.
- Pas de découverte médicale.

#### Cas particuliers
Prioritaire pour P-004.

#### Limites
Prévue pour V1.

#### Critères d'acceptation
- L’utilisateur peut saisir une recherche et obtenir des contenus pertinents disponibles.

#### Décisions associées
Aucune

#### Évolutions futures
Filtres simples éventuels.

---

### 6.13 F-013 — Séances guidées

#### Identifiant
F-013

#### Nom
Séances guidées

#### Version cible
MVP

#### Priorité
P0

#### Description
Séances précomposées guidées pas à pas, sans génération IA complexe.

#### Objectif utilisateur
Pratiquer une séance complète de bout en bout.

#### Valeur apportée
Transforme des contenus isolés en pratique réelle.

#### Personas concernés
P-001, P-002, P-003, P-005

#### Parcours concernés
Première séance ; Wow moment ; routine

#### Dépendances
F-004, F-006, F-016

#### Règles métier
- Inclut la prudence avant pratique.
- Autorise interruption et reprise.
- Pas de compétition.

#### Cas particuliers
Peut être courte pour P-002.

#### Limites
Pas de génération IA complexe au MVP.

#### Critères d'acceptation
- L’utilisateur peut démarrer une séance guidée.
- L’utilisateur peut suivre la séance jusqu’à une conclusion claire.
- L’utilisateur peut interrompre sans perdre le fil (via F-032).

#### Décisions associées
D-016, D-027

#### Évolutions futures
Personnalisation (F-034), premium (F-025).

---

### 6.14 F-014 — Exercices de respiration

#### Identifiant
F-014

#### Nom
Exercices de respiration

#### Version cible
MVP

#### Priorité
P1

#### Description
Contenus courts de respiration, prudents, non médicaux.

#### Objectif utilisateur
Entrer dans le calme avant ou pendant la pratique.

#### Valeur apportée
Soutient l’expérience apaisante.

#### Personas concernés
P-001, P-002, P-003

#### Parcours concernés
Première séance ; routine

#### Dépendances
F-016

#### Règles métier
- Aucune promesse thérapeutique.
- Arrêt si malaise / douleur.

#### Cas particuliers
Très utile à P-002.

#### Limites
Ne constitue pas un traitement.

#### Critères d'acceptation
- L’utilisateur peut lancer un exercice de respiration simple.
- Le contenu ne se présente pas comme médical.

#### Décisions associées
D-008

#### Évolutions futures
Lien éventuel avec F-038 (backlog).

---

### 6.15 F-015 — Relaxation

#### Identifiant
F-015

#### Nom
Relaxation

#### Version cible
MVP

#### Priorité
P1

#### Description
Contenus courts de relaxation / retour au calme, sans promesse thérapeutique.

#### Objectif utilisateur
Conclure une séance en douceur.

#### Valeur apportée
Cohérence avec l’expérience calme.

#### Personas concernés
P-001, P-002, P-003

#### Parcours concernés
Fin de première séance ; routine

#### Dépendances
F-016

#### Règles métier
- Non médical.
- Optionnelle mais recommandée en fin de séance.

#### Cas particuliers
Peut être très courte.

#### Limites
Distincte d’une méditation élargie (F-038).

#### Critères d'acceptation
- L’utilisateur peut accéder à une conclusion de type relaxation.
- Aucune promesse de guérison n’apparaît.

#### Décisions associées
D-012

#### Évolutions futures
Méditation élargie en backlog (F-038).

---

### 6.16 F-016 — Conseils de sécurité

#### Identifiant
F-016

#### Nom
Conseils de sécurité

#### Version cible
Pré-MVP

#### Priorité
P0

#### Description
Conseils stables : arrêt si douleur, adaptation de l’effort, orientation vers un professionnel compétent, absence de promesse médicale.

#### Objectif utilisateur
Pratiquer avec des limites claires.

#### Valeur apportée
Confiance et sécurité perçue.

#### Personas concernés
P-001, P-002, P-003, P-004, P-005

#### Parcours concernés
Pré-pratique ; première ouverture ; activation P-005

#### Dépendances
Aucune

#### Règles métier
- Toujours accessibles.
- Jamais contradictoires avec un discours médical.

#### Cas particuliers
Bloquant avant test utilisateur.

#### Limites
Ne remplacent pas un avis professionnel.

#### Critères d'acceptation
- L’utilisateur peut consulter les conseils de sécurité.
- Les conseils indiquent l’arrêt en cas de douleur.
- Les conseils excluent diagnostic et traitement.

#### Décisions associées
D-008, D-011

#### Évolutions futures
Formulations affinées sans changer le rôle.

---

### 6.17 F-017 — Notifications

#### Identifiant
F-017

#### Nom
Notifications

#### Version cible
V1

#### Priorité
P1

#### Description
Rappels optionnels, discrets, désactivables, orientés encouragement.

#### Objectif utilisateur
Soutenir la régularité sans pression.

#### Valeur apportée
Aide au retour à la pratique.

#### Personas concernés
P-002, P-001, P-003

#### Parcours concernés
Fidélisation V1+

#### Dépendances
F-008, F-028

#### Règles métier
- Douces, utiles, rares, jamais culpabilisantes.
- Opt-in.
- Désactivables.

#### Cas particuliers
Faible pertinence pour P-004 / P-005.

#### Limites
Absentes du MVP.

#### Critères d'acceptation
- L’utilisateur peut activer ou désactiver les notifications.
- Une notification ne contient pas de message culpabilisant.
- L’utilisateur peut ignorer une notification sans pénalité.

#### Décisions associées
D-028, D-029

#### Évolutions futures
Personnalisation des horaires.

---

### 6.18 F-018 — Objectifs personnels

#### Identifiant
F-018

#### Nom
Objectifs personnels

#### Version cible
V1

#### Priorité
P2

#### Description
Objectifs légers (fréquence, durée, reprise), sans compétition ni score social.

#### Objectif utilisateur
Se donner une intention simple.

#### Valeur apportée
Cadre motivant personnel.

#### Personas concernés
P-002, P-001, P-003

#### Parcours concernés
Fidélisation V1+

#### Dépendances
F-010

#### Règles métier
- Pas de classement.
- Échec d’objectif non punitif.

#### Cas particuliers
Optionnel.

#### Limites
Prévue pour V1.

#### Critères d'acceptation
- L’utilisateur peut définir un objectif simple.
- L’utilisateur peut modifier ou abandonner un objectif sans sanction.

#### Décisions associées
D-029

#### Évolutions futures
Lien avec personnalisation (F-034).

---

### 6.19 F-019 — Assistant IA

#### Identifiant
F-019

#### Nom
Assistant IA

#### Version cible
V1

#### Priorité
P1

#### Description
Assistance conversationnelle prudente : expliquer, encourager, proposer des révisions, adapter le rythme dans des limites strictes.

#### Objectif utilisateur
Obtenir un accompagnement personnalisé non médical.

#### Valeur apportée
Personnalise l’aide après validation de l’intérêt de base.

#### Personas concernés
P-002, P-003, P-001, P-004

#### Parcours concernés
Fidélisation V1+ ; questions après séance

#### Dépendances
F-003, F-005, F-016

#### Règles métier
- Pas d’autorité médicale.
- Pas de diagnostic.
- Pas d’invention de technique hors contenu maîtrisé.
- Recommande l’arrêt en cas de douleur.
- Oriente vers un professionnel compétent si nécessaire.

#### Cas particuliers
Absente du MVP.

#### Limites
Ne remplace pas un professeur humain.

#### Critères d'acceptation
- L’utilisateur peut poser une question liée à la pratique.
- L’assistant refuse les demandes de diagnostic.
- L’assistant reste dans un ton non jugeant.

#### Décisions associées
D-008, D-017

#### Évolutions futures
Détail dans `docs/09_AI_COACH.md`.

---

### 6.20 F-020 — Questions / Réponses

#### Identifiant
F-020

#### Nom
Questions / Réponses

#### Version cible
V1

#### Priorité
P1

#### Description
Capacité Q/R sur pratique et mouvements, via assistant IA et/ou base éditoriale contrôlée.

#### Objectif utilisateur
Lever un blocage de compréhension.

#### Valeur apportée
Réponses rapides et cadrées.

#### Personas concernés
P-002, P-003, P-001, P-004

#### Parcours concernés
Fidélisation V1+ ; révision

#### Dépendances
F-019, F-005

#### Règles métier
- Interdit : diagnostic, interprétation pathologique d’une douleur.
- Réponses alignées sur contenus validés.

#### Cas particuliers
Peut s’appuyer sur F-005 même si F-019 est limité.

#### Limites
Prévue pour V1.

#### Critères d'acceptation
- L’utilisateur peut obtenir une réponse à une question fréquente sur un mouvement.
- Une demande médicale reçoit une réponse de limite / orientation.

#### Décisions associées
D-008, D-017

#### Évolutions futures
Base FAQ éditoriale enrichie.

---

### 6.21 F-021 — Analyse caméra

#### Identifiant
F-021

#### Nom
Analyse caméra

#### Version cible
V2

#### Priorité
P2

#### Description
Observation prudente de certains points du corps et comparaison à une référence, avec consentement clair.

#### Objectif utilisateur
Recevoir un feedback visuel complémentaire.

#### Valeur apportée
Indication d’écarts simples, jamais absolue.

#### Personas concernés
P-002, P-003, P-004

#### Parcours concernés
Enrichissement V2 (hors parcours MVP)

#### Dépendances
F-006, F-016, F-028

#### Règles métier
- Consentement explicite obligatoire.
- Limites communiquées.
- Pas de garantie de posture parfaite.
- Pas de lecture médicale.

#### Cas particuliers
Faible appétit pour P-001 / P-005 au démarrage.

#### Limites
Hors MVP ; nombreux faux positifs possibles.

#### Critères d'acceptation
- L’utilisateur doit consentir avant toute analyse.
- L’utilisateur voit les limites de l’analyse.
- L’utilisateur peut refuser ou désactiver la caméra.

#### Décisions associées
D-009, D-017

#### Évolutions futures
Détail dans `docs/10_COMPUTER_VISION.md`.

---

### 6.22 F-022 — Corrections de posture

#### Identifiant
F-022

#### Nom
Corrections de posture

#### Version cible
V2

#### Priorité
P2

#### Description
Suggestions prudentes d’écart par rapport à une référence, non médicales, conscientisées comme faillibles.

#### Objectif utilisateur
Améliorer sa pratique sans jugement.

#### Valeur apportée
Feedback correctif simple.

#### Personas concernés
P-002, P-003, P-004

#### Parcours concernés
Enrichissement V2

#### Dépendances
F-021

#### Règles métier
- Jamais présentées comme vérité clinique.
- Ton non culpabilisant.
- Arrêt recommandé si douleur.

#### Cas particuliers
Inutile sans F-021.

#### Limites
Hors MVP.

#### Critères d'acceptation
- L’utilisateur peut recevoir une suggestion d’écart simple.
- La suggestion rappelle qu’elle n’est pas un diagnostic.

#### Décisions associées
D-009, D-017

#### Évolutions futures
Réglage du niveau de détail.

---

### 6.23 F-023 — Professeurs virtuels

#### Identifiant
F-023

#### Nom
Professeurs virtuels

#### Version cible
V2

#### Priorité
P2

#### Description
Couche de présentation animée pour démontrer, guider, encourager. Optionnelle. Mei envisagée comme guide principale.

#### Objectif utilisateur
Bénéficier d’une présence visuelle rassurante.

#### Valeur apportée
Enrichit la démonstration.

#### Personas concernés
P-001, P-002, P-003, P-005

#### Parcours concernés
Accueil / démonstration V2 (hypothèse Mei)

#### Dépendances
F-006

#### Règles métier
- Optionnelle pour le fonctionnement du produit.
- Pas de présentation comme maître diplômé.
- Ne doit pas envahir ni monopoliser.
- Pas de dépendance bloquante à un fournisseur unique.

#### Cas particuliers
Mei : hypothèse (D-026, D-031).

#### Limites
Hors MVP ; design non figé.

#### Critères d'acceptation
- L’utilisateur peut utiliser le produit sans professeur virtuel.
- Si un guide apparaît, il peut être ignoré ou réduit.
- Le guide ne se présente pas comme maître diplômé.

#### Décisions associées
D-010, D-026, D-031

#### Évolutions futures
`docs/11_VIRTUAL_HUMANS.md`.

---

### 6.24 F-024 — Statistiques

#### Identifiant
F-024

#### Nom
Statistiques

#### Version cible
V1

#### Priorité
P2

#### Description
Statistiques sobres : fréquence, durée cumulée, reprise. Sans classement social.

#### Objectif utilisateur
Lire simplement son activité.

#### Valeur apportée
Soutient le sentiment de régularité.

#### Personas concernés
P-002, P-003

#### Parcours concernés
Fidélisation V1+

#### Dépendances
F-009, F-010

#### Règles métier
- Pas de leaderboard.
- Pas de pression.

#### Cas particuliers
Faible priorité pour P-001.

#### Limites
Prévue pour V1.

#### Critères d'acceptation
- L’utilisateur peut consulter des statistiques simples d’activité.
- Aucun classement entre utilisateurs n’apparaît.

#### Décisions associées
D-029

#### Évolutions futures
Objectifs (F-018).

---

### 6.25 F-025 — Contenus Premium

#### Identifiant
F-025

#### Nom
Contenus Premium

#### Version cible
V2

#### Priorité
P2

#### Description
Ensemble de contenus ou capacités pouvant être associés à une offre d’accès élargi.

#### Objectif utilisateur
Accéder à un élargissement de valeur clairement utile.

#### Valeur apportée
Différenciation éventuelle d’offre.

#### Personas concernés
P-002, P-004

#### Parcours concernés
Post-MVP / V2

#### Dépendances
F-003, F-013

#### Règles métier
- Ne doit pas verrouiller le parcours débutant critique trop tôt.
- Modèle économique exact ouvert.

#### Cas particuliers
À trancher dans `docs/06_BUSINESS_MODEL.md`.

#### Limites
Hors MVP.

#### Critères d'acceptation
- L’utilisateur comprend ce qui est inclus dans l’accès élargi.
- Les contenus essentiels du parcours débutant restent accessibles selon les règles d’offre retenues.

#### Décisions associées
Aucune décision de prix

#### Évolutions futures
Packaging commercial.

---

### 6.26 F-026 — Téléchargement hors ligne

#### Identifiant
F-026

#### Nom
Téléchargement hors ligne

#### Version cible
V2

#### Priorité
P2

#### Description
Téléchargement ou mise à disposition hors connexion de leçons / médias sélectionnés.

#### Objectif utilisateur
Pratiquer sans connexion permanente.

#### Valeur apportée
Continuité d’usage.

#### Personas concernés
P-003, P-004, P-001

#### Parcours concernés
Routine V2 ; révision

#### Dépendances
F-006, F-013

#### Règles métier
- L’utilisateur choisit ce qui est disponible hors ligne.
- Distinct de F-041 (backlog).

#### Cas particuliers
Utile aux révisions P-004.

#### Limites
Hors MVP.

#### Critères d'acceptation
- L’utilisateur peut rendre disponible hors connexion un contenu sélectionné.
- L’utilisateur peut consulter ce contenu sans connexion.

#### Décisions associées
Aucune

#### Évolutions futures
Gestion de l’espace local (hors détail technique ici).

---

### 6.27 F-027 — Synchronisation multi-appareils

#### Identifiant
F-027

#### Nom
Synchronisation multi-appareils

#### Version cible
V1

#### Priorité
P2

#### Description
Retrouver progression, favoris et historique sur plusieurs appareils.

#### Objectif utilisateur
Continuer sur un autre appareil sans perdre le fil.

#### Valeur apportée
Continuité d’expérience.

#### Personas concernés
P-002, P-001, P-003, P-004

#### Parcours concernés
Fidélisation V1+

#### Dépendances
F-009, F-010, F-039

#### Règles métier
- Requiert un compte (F-039).
- Pas de partage social automatique.

#### Cas particuliers
Non requis pour MVP local.

#### Limites
Prévue pour V1.

#### Critères d'acceptation
- L’utilisateur connecté retrouve sa progression sur un autre appareil.
- L’utilisateur sans compte comprend la limite.

#### Décisions associées
Aucune

#### Évolutions futures
Conflits de reprise à clarifier fonctionnellement plus tard.

---

### 6.28 F-028 — Paramètres

#### Identifiant
F-028

#### Nom
Paramètres

#### Version cible
MVP

#### Priorité
P0

#### Description
Options essentielles : préférences simples, consentements, notifications plus tard, langue si disponible.

#### Objectif utilisateur
Contrôler son expérience.

#### Valeur apportée
Maîtrise et confiance.

#### Personas concernés
P-001, P-002, P-003, P-005

#### Parcours concernés
Installation ; routine ; activation P-005

#### Dépendances
Aucune

#### Règles métier
- Accessibles sans friction excessive.
- Incluent les contrôles liés au consentement quand pertinents.

#### Cas particuliers
Point d’entrée pour F-017 et F-021 plus tard.

#### Limites
Liste exacte des options ouverte.

#### Critères d'acceptation
- L’utilisateur peut ouvrir les paramètres.
- L’utilisateur peut modifier au moins une préférence essentielle.

#### Décisions associées
Aucune

#### Évolutions futures
Options d’accessibilité avancées.

---

### 6.29 F-029 — Accessibilité

#### Identifiant
F-029

#### Nom
Accessibilité

#### Version cible
MVP

#### Priorité
P0

#### Description
Socle : lisibilité, contrastes, tailles de texte, navigation claire.

#### Objectif utilisateur
Utiliser le produit confortablement.

#### Valeur apportée
Réduit les freins d’usage.

#### Personas concernés
P-001, P-005, P-002, P-003

#### Parcours concernés
Installation ; première ouverture ; toute pratique

#### Dépendances
Aucune

#### Règles métier
- Ne présume pas qu’un senior est incompétent numériquement.
- Pas d’infantilisation.

#### Cas particuliers
Critique pour P-001 et P-005.

#### Limites
Valeurs techniques exactes dans `docs/12_UX_UI.md`.

#### Critères d'acceptation
- L’utilisateur peut lire les contenus essentiels confortablement.
- L’utilisateur peut naviguer vers la prochaine action sans confusion majeure.

#### Décisions associées
D-012

#### Évolutions futures
Approfondissements accessibilité.

---

### 6.30 F-030 — Export utilisateur

#### Identifiant
F-030

#### Nom
Export utilisateur

#### Version cible
V1

#### Priorité
P2

#### Description
Export des données utiles de compte / progression.

#### Objectif utilisateur
Maîtriser ses données.

#### Valeur apportée
Confiance et transparence.

#### Personas concernés
P-001, P-002, P-003, P-004, P-005

#### Parcours concernés
Fidélisation V1+ ; confiance

#### Dépendances
F-039

#### Règles métier
- Export compréhensible pour l’utilisateur.
- Pas d’export de données non autorisées.

#### Cas particuliers
Lié au compte.

#### Limites
Prévue pour V1 ; détail conformité ailleurs.

#### Critères d'acceptation
- L’utilisateur disposant d’un compte peut exporter ses données utiles.
- L’utilisateur comprend ce qui est exporté.

#### Décisions associées
Aucune

#### Évolutions futures
`docs/17_PRIVACY_RGPD.md`.

---

### 6.31 F-031 — Avertissements avant pratique

#### Identifiant
F-031

#### Nom
Avertissements avant pratique

#### Version cible
Pré-MVP

#### Priorité
P0

#### Description
Messages de prudence visibles avant une séance : arrêt si douleur, pas de promesse médicale, adaptation du niveau.

#### Objectif utilisateur
Démarrer en connaissance des limites.

#### Valeur apportée
Sécurité et clarté dès le premier usage.

#### Personas concernés
P-001, P-002, P-003, P-004, P-005

#### Parcours concernés
Avant chaque première pratique / séances

#### Dépendances
F-016

#### Règles métier
- Visibles avant la pratique.
- Non anxiogènes mais explicites.

#### Cas particuliers
Bloquant Pré-MVP.

#### Limites
Ne remplacent pas F-016 (socle durable).

#### Critères d'acceptation
- L’utilisateur voit un avertissement avant de pratiquer.
- L’avertissement mentionne l’arrêt en cas de douleur.
- L’avertissement exclut la promesse médicale.

#### Décisions associées
D-008

#### Évolutions futures
Fréquence d’affichage à affiner en UX.

---

### 6.32 F-032 — Reprise de séance

#### Identifiant
F-032

#### Nom
Reprise de séance

#### Version cible
MVP

#### Priorité
P0

#### Description
Reprendre une séance ou le parcours là où l’utilisateur s’était arrêté.

#### Objectif utilisateur
Continuer sans recommencer à zéro ni culpabiliser.

#### Valeur apportée
Soutient la régularité.

#### Personas concernés
P-001, P-002, P-003, P-005

#### Parcours concernés
Première semaine ; routine ; première habitude

#### Dépendances
F-009, F-013

#### Règles métier
- Aucun message de sanction après pause.
- Prochaine action évidente.

#### Cas particuliers
Levier anti-abandon majeur.

#### Limites
Précision du point de reprise ouverte fonctionnellement.

#### Critères d'acceptation
- L’utilisateur peut reprendre une séance ou un parcours interrompu.
- L’utilisateur n’est pas culpabilisé pour l’interruption.

#### Décisions associées
D-029, D-030

#### Évolutions futures
Sync multi-appareils (F-027).

---

### 6.33 F-033 — Première découverte guidée

#### Identifiant
F-033

#### Nom
Première découverte guidée

#### Version cible
MVP

#### Priorité
P0

#### Description
Court parcours d’entrée : présentation, prudence, premier pas. Pas d’onboarding marketing long.

#### Objectif utilisateur
Démarrer sans surcharge.

#### Valeur apportée
Réduit le frottement du premier lancement.

#### Personas concernés
P-001, P-002, P-003, P-005

#### Parcours concernés
Première ouverture ; activation P-005

#### Dépendances
F-001, F-003, F-031

#### Règles métier
- Court.
- Une prochaine action claire.
- Contournable conceptuellement pour P-004.

#### Cas particuliers
P-004 ne doit pas être forcé longtemps.

#### Limites
Pas un tutoriel exhaustif.

#### Critères d'acceptation
- L’utilisateur peut terminer la première découverte rapidement.
- L’utilisateur arrive à une première action de pratique évidente.

#### Décisions associées
D-027, D-030

#### Évolutions futures
Variantes d’accueil avec Mei (V2, hypothèse).

---

### 6.34 F-034 — Personnalisation avancée

#### Identifiant
F-034

#### Nom
Personnalisation avancée

#### Version cible
V2

#### Priorité
P2

#### Description
Adaptation plus fine des séances et recommandations selon niveau perçu, préférences, historique, éventuellement IA.

#### Objectif utilisateur
Recevoir des propositions mieux adaptées.

#### Valeur apportée
Meilleure adéquation à la situation.

#### Personas concernés
P-002, P-001, P-003

#### Parcours concernés
Enrichissement V2

#### Dépendances
F-008, F-019, F-010

#### Règles métier
- Reste non culpabilisante.
- N’impose pas la caméra.

#### Cas particuliers
Au-delà du programme quotidien simple.

#### Limites
Hors MVP.

#### Critères d'acceptation
- L’utilisateur peut recevoir une recommandation plus adaptée que la suggestion quotidienne de base.
- L’utilisateur peut conserver un mode simple.

#### Décisions associées
D-017

#### Évolutions futures
Moteur réutilisable (F-036).

---

### 6.35 F-035 — Programmes adaptés

#### Identifiant
F-035

#### Nom
Programmes adaptés

#### Version cible
V2

#### Priorité
P2

#### Description
Parcours thématiques au-delà du parcours débutant générique (ex. seniors, mobilité, anti-stress, révision).

#### Objectif utilisateur
Suivre un programme plus spécifique.

#### Valeur apportée
Répond à des besoins ciblés.

#### Personas concernés
P-001, P-002, P-003

#### Parcours concernés
Post-parcours débutant / V2

#### Dépendances
F-003, F-013

#### Règles métier
- Non médicaux.
- Contenu validé.

#### Cas particuliers
P-001 peut valoriser un programme mobilité/équilibre non clinique.

#### Limites
Contenu exact ouvert.

#### Critères d'acceptation
- L’utilisateur peut choisir un programme adapté disponible.
- Le programme reste distinct d’une promesse médicale.

#### Décisions associées
Aucune

#### Évolutions futures
Catalogue de programmes.

---

### 6.36 F-036 — Moteur de coaching réutilisable

#### Identifiant
F-036

#### Nom
Moteur de coaching réutilisable

#### Version cible
V3

#### Priorité
P3

#### Description
Séparer le cœur d’accompagnement des contenus disciplinaires pour réutilisation.

#### Objectif utilisateur
Bénéficier à terme d’un accompagnement cohérent sur plusieurs pratiques douces.

#### Valeur apportée
Valeur stratégique long terme.

#### Personas concernés
Indirects (tous futurs)

#### Parcours concernés
Vision long terme

#### Dépendances
F-019, F-034

#### Règles métier
- Tai Chi reste le centre initial.
- Pas d’impact MVP.

#### Cas particuliers
Non visible comme feature utilisateur immédiate.

#### Limites
Prévue pour V3.

#### Critères d'acceptation
- Le produit peut distinguer conceptuellement accompagnement et contenus disciplinaires.
- L’utilisateur Tai Chi n’est pas dégradé par cette evolution.

#### Décisions associées
Aucune

#### Évolutions futures
F-037.

---

### 6.37 F-037 — Plusieurs disciplines douces

#### Identifiant
F-037

#### Nom
Plusieurs disciplines douces

#### Version cible
V3

#### Priorité
P3

#### Description
Ouverture possible vers Qi Gong, mobilité, équilibre, respiration élargie, etc.

#### Objectif utilisateur
Élargir sa pratique douce dans le même écosystème.

#### Valeur apportée
Continuité long terme.

#### Personas concernés
P-001, P-002 (potentiel futur)

#### Parcours concernés
Vision long terme

#### Dépendances
F-036

#### Règles métier
- Tai Chi reste prioritaire au démarrage produit.
- Non médical.

#### Cas particuliers
Hors MVP / V1 / V2.

#### Limites
Prévue pour V3.

#### Critères d'acceptation
- L’utilisateur peut comprendre qu’une discipline additionnelle est distincte du Tai Chi.
- L’accès Tai Chi demeure clair.

#### Décisions associées
Aucune

#### Évolutions futures
Sélection des disciplines.

---

### 6.38 F-038 — Méditation guidée élargie

#### Identifiant
F-038

#### Nom
Méditation guidée élargie

#### Version cible
Backlog

#### Priorité
P3

#### Description
Contenus de méditation plus développés que la relaxation de fin de séance.

#### Objectif utilisateur
Approfondir la présence et le calme.

#### Valeur apportée
Enrichissement optionnel.

#### Personas concernés
P-001, P-002

#### Parcours concernés
Non planifié

#### Dépendances
F-015

#### Règles métier
- Non thérapeutique.
- Distincte de F-015.

#### Cas particuliers
Backlog seulement.

#### Limites
Non planifiée.

#### Critères d'acceptation
- Si proposée un jour, l’utilisateur peut la distinguer de la relaxation courte.
- Aucune promesse médicale.

#### Décisions associées
Aucune

#### Évolutions futures
Arbitrage de priorisation.

---

### 6.39 F-039 — Compte utilisateur

#### Identifiant
F-039

#### Nom
Compte utilisateur

#### Version cible
V1

#### Priorité
P1

#### Description
Compte permettant sauvegarde et synchronisation. Non requis pour un MVP local minimal.

#### Objectif utilisateur
Protéger et retrouver ses données.

#### Valeur apportée
Continuité et portabilité.

#### Personas concernés
P-002, P-001, P-003, P-004

#### Parcours concernés
Fidélisation V1+

#### Dépendances
Aucune

#### Règles métier
- Requis pour F-027 et F-030.
- Optionnel au MVP si reprise locale suffit.

#### Cas particuliers
P-005 peut aider à créer le compte du proche plus tard.

#### Limites
Prévue pour V1.

#### Critères d'acceptation
- L’utilisateur peut créer ou ouvrir un compte.
- L’utilisateur comprend les bénéfices liés au compte.
- L’utilisateur peut utiliser le MVP sans compte si la reprise locale est prévue.

#### Décisions associées
Aucune

#### Évolutions futures
Auth détaillée hors ce document.

---

### 6.40 F-040 — Partenariats écoles / professeurs

#### Identifiant
F-040

#### Nom
Partenariats écoles / professeurs

#### Version cible
Backlog

#### Priorité
P3

#### Description
Idée d’intégration ou de cohabitation avec écoles / professeurs. Non planifiée.

#### Objectif utilisateur
Relier pratique numérique et enseignement humain.

#### Valeur apportée
Complémentarité éventuelle.

#### Personas concernés
P-004

#### Parcours concernés
Non planifié

#### Dépendances
Aucune

#### Règles métier
- Ne remplace pas le professeur.
- Respect de la complémentarité.

#### Cas particuliers
Backlog.

#### Limites
Non planifiée.

#### Critères d'acceptation
- Si activée un jour, l’utilisateur comprend le rôle complémentaire du partenariat.

#### Décisions associées
Aucune

#### Évolutions futures
Modèle de partenariat.

---

### 6.41 F-041 — Mode hors ligne partiel minimal

#### Identifiant
F-041

#### Nom
Mode hors ligne partiel minimal

#### Version cible
Backlog

#### Priorité
P3

#### Description
Idée de consultation limitée hors ligne, distincte de F-026. Non planifiée tant que le besoin n’est pas prouvé.

#### Objectif utilisateur
Continuité partielle hors réseau.

#### Valeur apportée
Filet minimal éventuel.

#### Personas concernés
P-001, P-002, P-003, P-004

#### Parcours concernés
Non planifié

#### Dépendances
F-013

#### Règles métier
- Distincte de F-026.
- Ne pas la confondre avec le hors ligne riche.

#### Cas particuliers
Backlog.

#### Limites
Non planifiée.

#### Critères d'acceptation
- Si proposée un jour, l’utilisateur comprend ce qui est disponible hors ligne et ce qui ne l’est pas.

#### Décisions associées
Aucune

#### Évolutions futures
Arbitrage vs F-026.

---

## 7. Matrice Fonctionnalités / Personas

Légende : C = Critique · I = Importante · U = Utile · F = Faible · N = Non pertinente  
(Source d’alignement : `docs/03_PERSONAS.md`, sans modification de versions.)

| ID | P-001 | P-002 | P-003 | P-004 | P-005 |
| --- | --- | --- | --- | --- | --- |
| F-001 | I | U | C | F | I |
| F-002 | U | F | I | U | F |
| F-003 | C | I | C | F | I |
| F-004 | I | U | C | C | U |
| F-005 | C | I | C | C | U |
| F-006 | C | C | C | C | I |
| F-007 | I | U | I | I | U |
| F-008 | I | C | I | F | U |
| F-009 | U | I | I | U | F |
| F-010 | I | C | C | U | U |
| F-011 | U | U | I | C | F |
| F-012 | F | U | U | C | F |
| F-013 | C | C | C | U | I |
| F-014 | I | C | I | U | U |
| F-015 | I | C | U | U | U |
| F-016 | C | I | C | I | C |
| F-017 | U | I | U | F | F |
| F-018 | U | I | U | F | F |
| F-019 | U | I | I | U | F |
| F-020 | U | I | I | U | F |
| F-021 | F | U | U | U | F |
| F-022 | F | U | U | U | F |
| F-023 | U | U | U | F | U |
| F-024 | F | U | U | F | F |
| F-025 | F | U | F | U | F |
| F-026 | U | U | I | I | F |
| F-027 | U | I | U | U | F |
| F-028 | I | I | I | U | I |
| F-029 | C | I | I | U | C |
| F-030 | U | U | U | U | U |
| F-031 | C | I | C | I | C |
| F-032 | C | C | C | U | I |
| F-033 | C | C | C | F | C |
| F-034 | U | I | U | F | F |
| F-035 | I | U | U | F | U |
| F-036 | N | F | F | F | N |
| F-037 | F | F | F | F | F |
| F-038 | U | U | F | F | F |
| F-039 | U | I | U | U | U |
| F-040 | F | F | F | I | F |
| F-041 | U | U | U | U | F |

## 8. Matrice Fonctionnalités / Parcours

| ID | Étapes de parcours principales |
| --- | --- |
| F-001 | Découverte ; première ouverture |
| F-002 | Découverte |
| F-003 | Première ouverture ; première semaine ; routine |
| F-004 | Routine ; révision |
| F-005 | Première séance ; révision |
| F-006 | Première séance ; routine |
| F-007 | Première séance ; révision |
| F-008 | Première semaine ; routine |
| F-009 | Première semaine ; routine |
| F-010 | Premier succès ; première semaine ; premier mois |
| F-011 | Routine V1 ; révision |
| F-012 | Révision V1 |
| F-013 | Première séance ; Wow moment ; routine |
| F-014 | Première séance ; routine |
| F-015 | Fin de séance ; routine |
| F-016 | Pré-pratique ; activation |
| F-017 | Fidélisation V1 |
| F-018 | Fidélisation V1 |
| F-019 | Fidélisation V1 |
| F-020 | Fidélisation V1 |
| F-021 | Enrichissement V2 |
| F-022 | Enrichissement V2 |
| F-023 | Accueil / démonstration V2 |
| F-024 | Fidélisation V1 |
| F-025 | Offre élargie V2 |
| F-026 | Routine V2 |
| F-027 | Fidélisation V1 |
| F-028 | Installation ; routine |
| F-029 | Installation ; toute pratique |
| F-030 | Confiance V1 |
| F-031 | Avant pratique |
| F-032 | Première habitude ; routine |
| F-033 | Première ouverture |
| F-034 | Enrichissement V2 |
| F-035 | Post-débutant V2 |
| F-036 | Vision long terme |
| F-037 | Vision long terme |
| F-038 | Non planifié |
| F-039 | Fidélisation V1 |
| F-040 | Non planifié |
| F-041 | Non planifié |

## 9. Matrice Fonctionnalités / Versions

| Version | Fonctionnalités |
| --- | --- |
| Pré-MVP | F-016, F-031 |
| MVP | F-001, F-002, F-003, F-004, F-005, F-006, F-007, F-008, F-009, F-010, F-013, F-014, F-015, F-028, F-029, F-032, F-033 (+ héritage Pré-MVP) |
| V1 | F-011, F-012, F-017, F-018, F-019, F-020, F-024, F-027, F-030, F-039 |
| V2 | F-021, F-022, F-023, F-025, F-026, F-034, F-035 |
| V3 | F-036, F-037 |
| Backlog | F-038, F-040, F-041 |

## 10. Matrice Fonctionnalités / Priorités

| Priorité | Fonctionnalités |
| --- | --- |
| P0 | F-001, F-003, F-004, F-005, F-006, F-008, F-010, F-013, F-016, F-028, F-029, F-031, F-032, F-033 |
| P1 | F-002, F-007, F-009, F-011, F-014, F-015, F-017, F-019, F-020, F-039 |
| P2 | F-012, F-018, F-021, F-022, F-023, F-024, F-025, F-026, F-027, F-030, F-034, F-035 |
| P3 | F-036, F-037, F-038, F-040, F-041 |

## 11. Fonctionnalités critiques

Critiques pour prouver le MVP auprès des cœurs de cible :

F-003, F-005, F-006, F-008, F-010, F-013, F-016, F-029, F-031, F-032, F-033

## 12. Fonctionnalités différenciantes

Différenciation recherchée (non prouvée commercialement) :

- progression guidée : F-003, F-010
- simplicité / reprise : F-008, F-032, F-033
- pédagogie : F-005, F-006, F-007
- assistance prudente : F-019, F-020 (V1)
- démonstration enrichie : F-023 (V2, Mei hypothèse)
- analyse prudente : F-021, F-022 (V2)

## 13. Fonctionnalités Premium

| ID | Commentaire |
| --- | --- |
| F-025 | Vecteur principal d’offre élargie (V2) |
| F-026 | Peut entrer dans une offre élargie |
| F-034 / F-035 | Candidates selon modèle économique ouvert |
| F-019 | Peut être partielle en offre élargie — non figé |

Le parcours débutant critique ne doit pas être verrouillé trop tôt.

## 14. Fonctionnalités reportables

Reportables sans empêcher un MVP utile :

F-002 (allégeable), F-007, F-009, F-011+, toutes V1/V2/V3/Backlog hors P0 MVP.

## 15. Fonctionnalités dépendantes de l'IA

| ID | Nature |
| --- | --- |
| F-019 | Assistant IA |
| F-020 | Q/R (via IA et/ou éditorial) |
| F-034 | Personnalisation pouvant s’appuyer sur l’IA |
| F-036 | Moteur de coaching (long terme) |

## 16. Fonctionnalités dépendantes de Mei

| ID | Nature |
| --- | --- |
| F-023 | Professeurs virtuels / guide visuelle (Mei hypothèse) |
| F-006 | Peut être enrichie par une démonstration Mei, sans dépendance |
| F-033 | Accueil éventuel Mei en V2, non bloquant MVP |

## 17. Fonctionnalités dépendantes de la caméra

| ID | Nature |
| --- | --- |
| F-021 | Analyse caméra |
| F-022 | Corrections de posture (via F-021) |

## 18. Fonctionnalités hors MVP

Toutes les fonctionnalités prévues pour V1, V2, V3 et Backlog listées en section 9, notamment :

F-011, F-012, F-017, F-018, F-019, F-020, F-021, F-022, F-023, F-024, F-025, F-026, F-027, F-030, F-034, F-035, F-036, F-037, F-038, F-039, F-040, F-041

## 19. Hypothèses

| ID | Hypothèse |
| --- | --- |
| H-F1 | Le sous-ensemble critique MVP suffit à créer Wow moment et premier succès. |
| H-F2 | F-008 est l’entrée dominante pour P-002. |
| H-F3 | F-003 est l’entrée dominante pour P-003. |
| H-F4 | F-032 réduit l’abandon post-pause. |
| H-F5 | F-019 ajoute de la valeur après validation MVP, pas avant. |
| H-F6 | F-023 / Mei restent optionnels sans perte du cœur pédagogique. |

## 20. Décisions ouvertes

- nombre exact de mouvements ;
- durée type des séances ;
- style / forme Tai Chi ;
- packaging exact de F-025 ;
- seuil et libellés des notifications ;
- intensité de présence de Mei ;
- critères chiffrés d’acceptation UX ;
- profondeur de F-029.

## 21. Critères de validation

1. 41 fiches présentes, ni plus ni moins.
2. Aucun changement de version vs `docs/02_PRODUCT_SCOPE.md`.
3. Dépendances exprimées uniquement en `F-xxx` ou `Aucune`.
4. Critères d’acceptation fonctionnels uniquement.
5. Matrices 7 à 10 cohérentes.
6. Décisions D-032 à D-034 tracées.
7. `docs/06_BUSINESS_MODEL.md` peut s’y référer.

Statut actuel : **EN REVUE**.

## 22. Conclusion

`docs/05_FEATURES.md` fige la spécification fonctionnelle des 41 fonctionnalités officielles.

Le MVP reste centré sur parcours, séances, pédagogie visuelle, prudence, reprise et accessibilité. L’IA arrive en V1 ; caméra, corrections et professeurs virtuels en V2 ; le moteur multi-disciplines en V3.

Prochaine étape documentaire : `docs/06_BUSINESS_MODEL.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/06_BUSINESS_MODEL.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
