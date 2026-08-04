# 13 — Tech Architecture

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Tech Architecture |
| Numéro | 13 |
| Fichier | `docs/13_TECH_ARCHITECTURE.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md`, `docs/06_BUSINESS_MODEL.md`, `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md`, `docs/10_COMPUTER_VISION.md`, `docs/11_VIRTUAL_HUMANS.md`, `docs/12_UX_UI.md` |
| Documents utilisant celui-ci | `docs/14_DATA_MODEL.md`, `docs/15_API_ARCHITECTURE.md`, `docs/16_AUTH_SECURITY.md`, `docs/17_PRIVACY_RGPD.md`, `docs/18_PWA_OFFLINE.md`, `docs/20_TEST_STRATEGY.md`, `docs/21_DEPLOYMENT.md`, `docs/24_DEVELOPER_HANDOVER.md` |
| Décisions concernées | D-066 à D-077 |
| Dernière revue | 4 août 2026 — revue croisée `12` ↔ `13` effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Revue croisée avec `docs/12_UX_UI.md` effectuée. Cohérence validée ; aucune incohérence bloquante identifiée.
> Aucun développement applicatif n’est autorisé avant Design Freeze et critères du Master Plan (dont runtime).

> **NOTE**
>
> Document conforme à `docs/99_DOCUMENTATION_STANDARD.md`.
> Les choix de stack ci-dessous constituent des décisions d’architecture de ce document (absorption contrôlée des hypothèses antérieures du Master Plan).

## 2. Objectifs techniques

Ce document définit l’architecture technique de référence de **Tai-Chi AI Coach**.

Il constitue la référence unique pour :

- l’architecture logicielle ;
- l’organisation des modules ;
- les technologies retenues au niveau cible ;
- les échanges entre composants ;
- les contraintes techniques ;
- la scalabilité ;
- les performances ;
- la sécurité technique de conception.

Aucun développement ne doit commencer avant validation de cette architecture **et** satisfaction des critères d’autorisation du Master Plan.

## 3. Principes d'architecture

1. Simplicité.
2. Modularité.
3. Indépendance des composants.
4. Évolutivité.
5. Faible couplage.
6. Forte cohérence interne des modules.
7. Sécurité dès la conception.
8. Confidentialité des données (Privacy by Design).
9. Remplacement possible des fournisseurs IA.
10. Offline First pour les fonctions essentielles.
11. API First pour les contrats backend.
12. Observabilité native.
13. Documentation avant code ; documentation runtime après implémentation (`docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`).

## 4. Architecture générale

L’application est organisée en couches indépendantes :

| Couche | Responsabilité |
| --- | --- |
| Interface utilisateur (PWA) | Présentation, interactions, accessibilité |
| Gestion des états | État local, global, synchronisé |
| Cœur applicatif | Orchestration des cas d’usage |
| Modules métiers | Curriculum, Premium, progression, etc. |
| Couche de services | IA, sync, notifications, analytics, stockage |
| Backend | API, persistance, auth, orchestration serveur |
| Fournisseurs IA | Modèles / services externes derrière abstraction |

Chaque couche possède une responsabilité clairement définie. Les modules métiers n’appellent jamais un fournisseur IA en direct.

```text
PWA (UI)
  ↓
État / Cœur applicatif
  ↓
Modules métiers
  ↓
Services (interfaces stables)
  ↓
Backend API (stateless)
  ↓
PostgreSQL / Stockage objet / Fournisseurs IA (via adaptateurs)
```

## 5. Stack technologique

Stack cible retenue pour l’architecture :

### 5.1 Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- PWA

### 5.2 Backend

- API REST
- Services indépendants
- Architecture stateless

### 5.3 Données

- PostgreSQL (relationnel)
- Stockage objet pour médias / ressources

### 5.4 Authentification

À définir dans `docs/16_AUTH_SECURITY.md` (non tranché ici au-delà du besoin d’une identité pour sync / export).

### 5.5 Hors stack figée ici

- fournisseur IA précis ;
- moteur de vision précis ;
- pipeline Virtual Humans précis ;
- hébergeur précis (`docs/21_DEPLOYMENT.md`).

## 6. Frontend

Le frontend est une Progressive Web App.

Objectifs :

- rapide ;
- responsive ;
- installable ;
- accessible ;
- utilisable hors connexion pour les fonctions essentielles.

Règles :

- contient uniquement la logique de présentation et l’orchestration UI ;
- aucune logique métier complexe durable dans les composants ;
- l’architecture frontend / PWA est définie conformément à `docs/12_UX_UI.md` ;
- aligne accessibilité avec `F-029` et personas P-001 / P-005.

## 7. Backend

Le backend centralise :

- authentification (selon `16`) ;
- données utilisateur ;
- historique ;
- synchronisation ;
- appels IA (via couche d’abstraction) ;
- analytics serveur si retenus.

Règles :

- aucune logique d’interface ;
- services stateless autant que possible ;
- contrats exposés via API (détail dans `docs/15_API_ARCHITECTURE.md`) ;
- secrets et configuration externalisés.

## 8. Architecture IA

L’IA est organisée autour d’une **couche d’abstraction**.

Règles :

- aucun fournisseur n’est appelé directement depuis les composants métiers ;
- les garde-fous de `docs/09_AI_COACH.md` s’appliquent au comportement, indépendamment du fournisseur ;
- remplacement d’un modèle / fournisseur sans refonte du produit ;
- `F-019` / `F-020` restent prévus pour V1.

```text
Module métier / Coach
  ↓
Interface AIService
  ↓
Adaptateur fournisseur A | B | ...
```

## 9. Computer Vision

Le moteur de vision est **totalement indépendant**.

Responsabilités :

- analyse vidéo (quand activée) ;
- estimation des mouvements ;
- comparaison avec postures / références attendues ;
- calcul d’indicateurs d’écart.

Règles :

- ne prend **jamais** de décision pédagogique seule ;
- alimente éventuellement l’IA / l’UI pour un feedback prudent (`docs/10_COMPUTER_VISION.md`) ;
- consentement obligatoire ;
- module optionnel V2 (`F-021`, `F-022`) ;
- isolable pour performance / appareils limités.

## 10. Virtual Humans

Le module Virtual Humans est **autonome**.

Il gère conceptuellement :

- Mei ;
- futurs guides virtuels ;
- animations ;
- voix ;
- interactions visuelles.

Règles :

- guides facultatifs (`F-023`, V2) ;
- aucune dépendance bloquante à un fournisseur unique (D-010, D-061) ;
- le produit reste utilisable avec démonstrations vidéo classiques (`F-006`).

## 11. Gestion des données

Domaines de données (détail schéma dans `docs/14_DATA_MODEL.md`) :

| Domaine | Exemples |
| --- | --- |
| Utilisateur | Identité, profil minimal |
| Progression | Avancement parcours (`F-010`) |
| Séances | Historique, reprises (`F-009`, `F-032`) |
| Préférences | Paramètres, accessibilité, notifications |
| Historique | Journal d’activité |
| Paramètres | Consentements, options caméra |

Chaque domaine reste aussi indépendant que possible.

## 12. Stockage

Distinction obligatoire :

| Type | Usage |
| --- | --- |
| Données locales | Reprise MVP, préférences, cache essentiel |
| Données synchronisées | Compte, multi-appareils (V1+) |
| Ressources statiques | Contenu éditorial de base |
| Contenus téléchargeables | Hors ligne enrichi (`F-026`, V2) |

Les médias sont séparés des données métier.

## 13. Synchronisation

Principes :

- synchronisation uniquement lorsque nécessaire (`F-027`, V1) ;
- détection automatique des conflits ;
- aucune perte de données utilisateur en cas de coupure réseau ;
- mode dégradé Offline First pour le cœur pédagogique.

## 14. Architecture PWA

La PWA offre :

- installation locale ;
- cache intelligent ;
- mode hors connexion (essentiel) ;
- mises à jour progressives ;
- notifications (V1, opt-in, `F-017`).

Détail offline : `docs/18_PWA_OFFLINE.md`.

## 15. Performance

Objectifs :

- démarrage rapide ;
- faible consommation mémoire ;
- animations fluides ;
- faible consommation batterie ;
- isolation des calculs intensifs (vision, médias) lorsque possible.

Les appareils anciens font partie des limites assumées (section 31).

## 16. Sécurité technique

Sécurité dès la conception :

- moindre privilège ;
- chiffrement en transit (et au repos selon `16` / `17`) ;
- validation des entrées ;
- protection contre les injections ;
- journalisation sans secrets ni données personnelles en clair ;
- Privacy by Design.

Détail auth/menaces : `docs/16_AUTH_SECURITY.md`.  
Détail privacy : `docs/17_PRIVACY_RGPD.md`.

## 17. Modularité

Chaque domaine métier constitue un module indépendant.

Exemples de modules :

- AI Coach
- Computer Vision
- Curriculum
- Virtual Humans
- Premium
- Analytics

Règle : dépendances croisées minimales ; communication via interfaces / événements clairs.

## 18. Scalabilité

L’architecture doit permettre sans refonte majeure :

- plusieurs guides virtuels ;
- plusieurs langues ;
- nouveaux modèles IA ;
- nouveaux programmes ;
- nouveaux appareils ;
- éventuelles disciplines douces (V3, `F-036` / `F-037`).

## 19. Monitoring

Chaque module expose conceptuellement :

- métriques ;
- erreurs ;
- temps de réponse ;
- disponibilité.

Le monitoring reste transparent pour l’utilisateur final (pas d’intrusion UX).

## 20. Journalisation

Les journaux doivent permettre :

- diagnostic ;
- audit ;
- supervision.

Interdit : données personnelles ou médias sensibles en clair dans les logs.

## 21. Gestion des erreurs

Les erreurs doivent être :

- compréhensibles ;
- non bloquantes lorsque possible ;
- journalisées ;
- récupérables.

L’utilisateur reçoit toujours une information claire, calme, non technique inutile.

## 22. Configuration

- toutes les configurations sont externalisées ;
- aucune valeur sensible codée en dur ;
- séparation stricte par environnement.

## 23. Environnements

| Environnement | Rôle |
| --- | --- |
| Développement | Travail local |
| Test | Vérifications automatisées / manuelles |
| Préproduction | Validation avant release |
| Production | Usage réel |

Chaque environnement possède sa configuration propre.

## 24. Dépendances externes

- limitées au strict nécessaire ;
- toute dépendance critique doit pouvoir être remplacée (surtout IA, vision, virtual humans, notifications) ;
- inventaire runtime futur dans `docs/runtime/19_DEPENDENCIES.md` après Design Freeze.

## 25. Architecture des composants

Les composants UI sont :

- réutilisables ;
- découplés ;
- testables ;
- documentés (registry runtime après développement).

Ils ne contiennent aucune logique métier complexe.

## 26. Architecture des services

Services regroupés conceptuellement :

- IA ;
- stockage ;
- synchronisation ;
- notifications ;
- analytics.

Chaque service possède une interface clairement définie (contrats dans `15`).

## 27. Architecture des états

Distinction :

| Type d’état | Exemple |
| --- | --- |
| Local | UI éphémère, lecteur vidéo |
| Global client | Session de pratique en cours |
| Serveur | Progression synchronisée, compte |

Responsabilités clairement séparées ; pas de duplication anarchique.

## 28. Tests techniques

Les tests couvriront :

- composants ;
- services ;
- intégration ;
- performances ;
- sécurité.

Stratégie détaillée : `docs/20_TEST_STRATEGY.md`.

## 29. Principes de développement

Le développement respecte le **JavaChrist Development Framework** et les standards du dépôt :

- documentation avant code ;
- Design Freeze obligatoire ;
- architecture modulaire ;
- documentation runtime après implémentation (`docs/98`) ;
- audit avant validation ;
- compatibilité ascendante privilégiée ;
- cycle Ticket → Analyse → Développement → Tests → Documentation runtime → Audit → Commit → Validation.

## 30. Évolutions futures

Sans remettre en cause les fondations :

- nouveaux coachs / guides virtuels ;
- nouveaux cursus ;
- nouvelles plateformes ;
- nouveaux moteurs IA ;
- nouvelles fonctionnalités Premium ;
- multi-disciplines douces.

## 31. Limites techniques

Limites identifiées :

| Limite | Impact |
| --- | --- |
| Dépendance aux fournisseurs IA | Disponibilité, coût, qualité | 
| Performances des appareils anciens | Fluidité, vision |
| Qualité variable des caméras | Fiabilité `F-021` |
| Disponibilité réseau | Sync, IA cloud, médias |

Ces contraintes doivent être prises en compte par les modules concernés.

## 32. Décisions figées par ce document

| ID | Décision |
| --- | --- |
| D-066 | Architecture Frontend First (PWA) |
| D-067 | Architecture modulaire |
| D-068 | IA découplée des fournisseurs |
| D-069 | Computer Vision indépendante |
| D-070 | Virtual Humans autonomes |
| D-071 | Fonctionnement Offline First (essentiel) |
| D-072 | Backend stateless |
| D-073 | Privacy by Design |
| D-074 | API First |
| D-075 | Observabilité native |
| D-076 | Architecture évolutive |
| D-077 | Application du JavaChrist Development Framework |

## 33. Décisions ouvertes

- détail d’authentification (`16`) ;
- hébergement et CI/CD (`21`) ;
- fournisseur(s) IA ;
- moteur de vision ;
- pipeline Virtual Humans ;
- stratégie cache PWA fine (`18`) ;
- schéma de données détaillé (`14`) ;
- contrats API détaillés (`15`) ;
- budgets perf chiffrés.

## 34. Critères de validation

1. Document relu et accepté explicitement.
2. Couches et modules clairement séparés.
3. Stack cible documentée sans figer les fournisseurs IA/vision/VH.
4. Décisions D-066 à D-077 tracées dans `DECISIONS.md`.
5. Cohérence avec scope (MVP sans caméra/IA complexe/avatars obligatoires).
6. Revue croisée avec `docs/12_UX_UI.md` effectuée ; cohérence validée ; aucune incohérence bloquante identifiée.
7. Aucun code applicatif démarré sur la seule base de ce draft.

Statut actuel : **EN REVUE**.

## 35. Conclusion

L’architecture de Tai-Chi AI Coach est une PWA modulaire, Offline First sur l’essentiel, API First, avec backend stateless, PostgreSQL, abstraction IA, vision et Virtual Humans optionnels et remplaçables.

Elle prépare l’évolution sans compromettre la simplicité du MVP.

Revue croisée `12` ↔ `13` clôturée. Prochaine priorité documentaire : `docs/14_DATA_MODEL.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/14_DATA_MODEL.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
