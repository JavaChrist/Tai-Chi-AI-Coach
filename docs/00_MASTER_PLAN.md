# 00 — Master Plan

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Master Plan |
| Numéro | 00 |
| Fichier | `docs/00_MASTER_PLAN.md` |
| Version | 1.1 |
| Statut | VALIDÉ |
| Dernière mise à jour | 5 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `WORKING_RULES.md`, `PROJECT_CONTEXT.md` |
| Documents utilisant celui-ci | Tous les documents de conception `docs/01` à `docs/25`, ainsi que `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` et `docs/99_DOCUMENTATION_STANDARD.md` |
| Décisions concernées | D-001 à D-022 |
| Dernière revue | 5 août 2026 — sync post–Design Freeze |
| Autorise le code | Après création de `docs/runtime/` (20 registres) |

> **VALIDÉ**
>
> **Élément :** `docs/00_MASTER_PLAN.md`
> **Date :** 4 août 2026
> **Par :** Projet Tai-Chi-AI-Coach
> **Version documentaire :** 1.1

Il constitue la carte de référence du projet. Il n’est ni un cahier des charges technique définitif, ni le document de Design Freeze (`25`).

> **NOTE DE PHASE (5 août 2026)**
>
> La phase de conception est **terminée**. Le Design Freeze est **déclaré** (`docs/25_DESIGN_FREEZE.md`, VALIDÉ).
> Prochaine étape officielle : création de `docs/runtime/`, rédaction des 20 registres Runtime, puis démarrage du développement MVP conformément à la documentation validée.
> Aucune modification du périmètre produit.

> **NOTE**
>
> Document normalisé selon `docs/99_DOCUMENTATION_STANDARD.md`.
> Intégration officielle de `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` et de la création différée de `docs/runtime/`.
> Aucune modification du périmètre produit.

## 2. Rôle du Master Plan

Le Master Plan organise la conception du projet. Il définit :

- ce que le projet cherche à construire ;
- pourquoi il existe ;
- les limites globales du produit ;
- l’ordre exact de conception ;
- les dépendances entre documents ;
- les décisions qui devront être prises ;
- les critères permettant de figer l’architecture ;
- les conditions autorisant le début du développement.

Le Master Plan **ne remplace pas** les documents spécialisés (`01` à `25`).  
Il **ne tranche pas** les choix techniques, pédagogiques, UX ou commerciaux détaillés qui appartiennent à ces documents.

## 3. Résumé exécutif du projet

**Tai-Chi AI Coach** est une application progressive (PWA) d’apprentissage et de coaching du Tai Chi, principalement destinée aux débutants.

Le projet vise à rendre la pratique accessible, guidée et progressive, y compris pour des personnes ayant peu ou pas d’accès régulier à un professeur.

La vision long terme *peut* inclure, sans engagement MVP :

- apprentissage guidé ;
- séances personnalisées ;
- suivi de progression ;
- assistance conversationnelle ;
- démonstrations visuelles ;
- analyse des mouvements par caméra ;
- corrections de posture ;
- professeurs virtuels ;
- programmes spécialisés.

**Point critique :** toutes ces fonctions ne seront pas nécessairement présentes dans le MVP. Le périmètre MVP sera figé uniquement après validation des documents de conception concernés, notamment `02_PRODUCT_SCOPE.md`, `05_FEATURES.md` et `25_DESIGN_FREEZE.md`.

Le projet est actuellement en **phase de conception**. Aucune architecture technique n’est validée à ce stade. Aucun développement applicatif n’est autorisé.

## 4. Problème utilisateur ciblé

Les débutants en Tai Chi rencontrent fréquemment :

- une difficulté à démarrer sans professeur ;
- un manque de structure claire pour progresser ;
- une peur de mal pratiquer ou de se blesser ;
- un accès inégal aux cours en présentiel ;
- une offre numérique souvent limitée à des vidéos passives, sans accompagnement adapté.

Le projet cherche à réduire ces frictions en proposant un accompagnement numérique prudent, progressif et pédagogique.

> **NOTE**
>
> La formulation du problème principal et des problèmes secondaires est précisée dans `docs/01_VISION.md` ; le détail personas reste à traiter dans `docs/03_PERSONAS.md`.

## 5. Vision générale

Vision de référence (détail validé dans `docs/01_VISION.md`) :

> Offrir un compagnon d’apprentissage du Tai Chi accessible, bienveillant et progressif, capable d’accompagner les débutants dans une pratique régulière, sans jamais se substituer à un professionnel de santé ni garantir une correction parfaite.

Le fichier préexistant `TaiChi_AI_Coach_Vision_Projet.md` constitue une source d’inspiration et d’hypothèses. Il n’est pas validé comme document officiel du dépôt documentaire structuré. Les contenus techniques ou produit qu’il contient restent des hypothèses jusqu’à reprise et validation dans les documents dédiés.

## 6. Proposition de valeur

Proposition de valeur de référence (détail dans `docs/01_VISION.md`) :

- rendre le Tai Chi abordable pour un débutant autonome ;
- structurer l’apprentissage (contenu, progression, rituels de séance) ;
- accompagner avec des explications claires, une tonique pédagogique rassurante et des limites explicites ;
- préparer, pour des versions ultérieures si validées, un coaching plus personnalisé (IA, vision, avatars).

La proposition de valeur est formulée dans `docs/01_VISION.md` et sera confrontée au modèle économique dans `docs/06_BUSINESS_MODEL.md`.

## 7. Publics prioritaires

Publics à étudier, **sans les déclarer encore définitivement prioritaires** :

- adultes débutants ;
- seniors autonomes ;
- personnes recherchant une activité douce ;
- personnes souhaitant améliorer équilibre et mobilité ;
- pratiquants souhaitant réviser entre les cours ;
- personnes ayant peu accès à un professeur.

> **HYPOTHÈSE**
>
> Les débutants constituent le public prioritaire du MVP — non validée définitivement.

La priorisation définitive relève de `docs/03_PERSONAS.md` et du périmètre déjà classé dans `docs/02_PRODUCT_SCOPE.md`.

## 8. Positionnement initial

Positionnement de travail (non validé) :

- produit d’apprentissage et de coaching, pas produit médical ;
- PWA d’abord, plutôt qu’application native exclusive ;
- priorité à l’accessibilité pédagogique plutôt qu’à la sophistication technique précoce ;
- différenciation future possible via coaching IA, vision par caméra et avatars virtuels — sous réserve de validation.

**Ouvert :** positionnement concurrentiel détaillé, ton de marque, et différenciateurs MVP vs V2/V3.

## 9. Périmètre global envisagé

Périmètre global *envisagé* (non figé) pour l’ensemble du produit sur le long terme :

- contenus d’initiation au Tai Chi ;
- parcours d’apprentissage structuré ;
- séances guidées ;
- suivi de progression ;
- assistant / coach IA ;
- démonstrations visuelles ;
- capacités PWA / usage hors ligne partiel ;
- extensions futures éventuelles : vision par caméra, corrections de posture, professeurs virtuels, programmes spécialisés.

Le découpage officiel Pré-MVP / MVP / V1 / V2 / V3 / Backlog / Hors périmètre est fixé dans `docs/02_PRODUCT_SCOPE.md`. Les précisions de features et de calendrier restent à traiter dans `docs/05_FEATURES.md` et `docs/22_ROADMAP.md`.

## 10. Hors périmètre initial

Éléments explicitement hors périmètre tant qu’ils ne sont pas validés autrement :

- dispositif médical, diagnostic, traitement, thérapie ;
- remplacement d’un professionnel de santé ou d’un professeur qualifié ;
- garantie d’absence de blessure ;
- développement applicatif avant Design Freeze ;
- décisions techniques définitives non reprises dans les documents `13` à `21` ;
- fonctions avancées (vision, avatars, coaching conversationnel profond) déclarées comme MVP sans validation produit.

## 11. Hypothèses actuelles

> **HYPOTHÈSE**
>
> Toutes les hypothèses ci-dessous sont explicites et non validées.

| ID | Hypothèse |
| --- | --- |
| H1 | Le public prioritaire du MVP est le débutant. |
| H2 | Une PWA est le format de distribution initial adapté. |
| H3 | Un parcours structuré + contenus guidés apporte plus de valeur qu’une bibliothèque vidéo seule. |
| H4 | Le coaching personnalisé sera un différenciateur important, probablement après le MVP. |
| H5 | L’analyse par caméra est souhaitable à terme, mais risque d’être hors MVP. |
| H6 | Une intégration éventuelle avec Virtual Humans Studio pourra enrichir les démonstrations / professeurs virtuels. |
| H7 | Le fichier préexistant de vision contient des pistes utiles (styles, 24 formes Yang, phases produit) à réévaluer document par document. |
| H8 | Une stack web moderne partagée avec d’autres projets de l’écosystème est envisageable — sans validation technique actuelle. |

## 12. Principes directeurs du produit

1. Accessibilité pédagogique avant sophistication.
2. Progression claire et rassurante pour les débutants.
3. Transparence sur les limites du produit et de l’IA.
4. Séparation stricte entre bien-être / pratique et prétention médicale.
5. MVP utile avant fonctions avancées impressionnantes.
6. Continuité d’usage (PWA, rituels, reprise de séance) comme axe produit à étudier.

## 13. Principes directeurs de conception

1. Documentation avant code.
2. Un document = un rôle ; pas de doublons de décisions.
3. Aucune décision structurante hors `DECISIONS.md`.
4. Aucune modification importante hors `CHANGELOG.md`.
5. Risques majeurs tracés dans `RISKS.md`.
6. Ordre officiel de rédaction respecté.
7. Un document n’est validable que si ses dépendances sont suffisamment stables.
8. Design Freeze obligatoire avant développement.
9. Architecture figée avant écriture de code applicatif.
10. Le dépôt documentaire réel est la source de vérité.
11. La documentation de conception est régie par `docs/99_DOCUMENTATION_STANDARD.md`.
12. La documentation de développement est régie par `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`.
13. Les documents de conception figés ne deviennent pas des journaux de développement.
14. Les informations évolutives du système réel sont placées dans `docs/runtime/` après sa création.
15. La documentation runtime constitue la mémoire vivante du développement.

## 14. Principes de sécurité et de prudence

Le produit ne doit jamais être présenté comme :

- un dispositif médical ;
- un outil de diagnostic ;
- un traitement ;
- une solution remplaçant un professionnel de santé ;
- une garantie contre les blessures.

Mécanismes futurs de prudence à prévoir (conception détaillée ultérieure) :

- avertissements clairs avant pratique ;
- adaptation du niveau ;
- consigne d’arrêt de séance en cas de douleur ;
- recommandations de consulter un professionnel en cas de doute ou pathologie ;
- limitations explicites de l’assistant IA (pas de conseil médical, pas de diagnostic, pas de promesse de correction parfaite).

Ces mécanismes seront précisés notamment dans `08_TAI_CHI_CURRICULUM.md`, `09_AI_COACH.md`, `12_UX_UI.md` et `17_PRIVACY_RGPD.md` selon leur nature.

## 15. Organisation documentaire

Rôle de chaque document de `docs/` :

### `00_MASTER_PLAN.md`

- **Objectif :** carte de référence de la conception.
- **Doit contenir :** ordre, dépendances, décisions à prendre, jalons, critères de gel et d’autorisation du développement.
- **Dépendances :** aucune (point d’entrée).
- **Ne doit pas décider :** stack définitive, écrans détaillés, schéma de données final, pricing final.

### `01_VISION.md`

- **Objectif :** vision, promesse, ambition long terme.
- **Doit contenir :** pourquoi le produit existe, direction stratégique, critères de succès vision.
- **Dépendances :** `00`.
- **Ne doit pas décider :** backlog détaillé, architecture, UX fine.

### `02_PRODUCT_SCOPE.md`

- **Objectif :** périmètre inclus / exclu, MVP vs hors MVP.
- **Doit contenir :** frontières produit, non-objectifs, hypothèses de scope.
- **Dépendances :** `00`, `01`.
- **Ne doit pas décider :** implémentation technique, design détaillé.

### `03_PERSONAS.md`

- **Objectif :** utilisateurs cibles et priorités.
- **Doit contenir :** personas, besoins, freins, priorisation.
- **Dépendances :** `00`, `01`, `02`.
- **Ne doit pas décider :** features finales, modèle économique.

### `04_USER_JOURNEYS.md`

- **Objectif :** parcours utilisateurs principaux.
- **Doit contenir :** journeys MVP, moments critiques, points de friction.
- **Dépendances :** `02`, `03`.
- **Ne doit pas décider :** wireframes finaux, APIs.

### `05_FEATURES.md`

- **Objectif :** fonctionnalités et priorisation.
- **Doit contenir :** liste features, MVP / V2 / V3, critères d’acceptation de haut niveau.
- **Dépendances :** `02`, `03`, `04`.
- **Ne doit pas décider :** architecture d’implémentation.

### `06_BUSINESS_MODEL.md`

- **Objectif :** modèle économique.
- **Doit contenir :** offres envisagées, hypothèses de monétisation, contraintes business.
- **Dépendances :** `01`, `02`, `05`.
- **Ne doit pas décider :** stack, UX détaillée.

### `07_CONTENT_STRATEGY.md`

- **Objectif :** stratégie de contenus.
- **Doit contenir :** types de contenus, ton, formats, production, localisation éventuelle.
- **Dépendances :** `01`, `03`, `05`.
- **Ne doit pas décider :** curriculum mouvement par mouvement.

### `08_TAI_CHI_CURRICULUM.md`

- **Objectif :** programme pédagogique Tai Chi.
- **Doit contenir :** progression, styles/formes retenus, niveaux, prudence pratique.
- **Dépendances :** `02`, `05`, `07`.
- **Ne doit pas décider :** modèle ML, UI fine, pricing.

### `09_AI_COACH.md`

- **Objectif :** rôle et limites du coach IA.
- **Doit contenir :** cas d’usage, ton, garde-fous, hors-scope IA.
- **Dépendances :** `05`, `08`, principes de prudence du `00`.
- **Ne doit pas décider :** fournisseur LLM définitif sans `13`, ni vision caméra.

### `10_COMPUTER_VISION.md`

- **Objectif :** cadre de l’analyse de mouvements.
- **Doit contenir :** objectifs, limites, exigences, phasage éventuel.
- **Dépendances :** `05`, `08`, `09`.
- **Ne doit pas décider :** stack globale hors vision, UX globale.

### `11_VIRTUAL_HUMANS.md`

- **Objectif :** cadre d’intégration éventuelle d’avatars / Virtual Humans Studio.
- **Doit contenir :** usages, contraintes, dépendances externes, phasage.
- **Dépendances :** `05`, `09`, éventuellement `10`.
- **Ne doit pas décider :** curriculum ni modèle économique.

### `12_UX_UI.md`

- **Objectif :** principes et spécifications d’expérience.
- **Doit contenir :** principes UX, structure d’information, parcours critiques, états de prudence.
- **Dépendances :** `04`, `05`, `08`, `09`.
- **Ne doit pas décider :** schéma SQL, infra.

### `13_TECH_ARCHITECTURE.md`

- **Objectif :** architecture technique cible.
- **Doit contenir :** composants, responsabilités, choix structurants, contraintes.
- **Dépendances :** `05`, `09`–`12`, `18` en boucle de cohérence.
- **Ne doit pas décider :** copy UX, curriculum.

### `14_DATA_MODEL.md`

- **Objectif :** modèle de données.
- **Doit contenir :** entités, relations, cycle de vie des données.
- **Dépendances :** `05`, `13`, entrées de `08`/`09`.
- **Ne doit pas décider :** branding, pricing.

### `15_API_ARCHITECTURE.md`

- **Objectif :** architecture des API.
- **Doit contenir :** frontières API, contrats de haut niveau, authz de surface.
- **Dépendances :** `13`, `14`.
- **Ne doit pas décider :** design visuel.

### `16_AUTH_SECURITY.md`

- **Objectif :** authentification et sécurité.
- **Doit contenir :** modèle d’identité, menaces, contrôles.
- **Dépendances :** `13`, `14`, `15`.
- **Ne doit pas décider :** contenus pédagogiques.

### `17_PRIVACY_RGPD.md`

- **Objectif :** confidentialité et conformité.
- **Doit contenir :** bases légales, données sensibles éventuelles (ex. caméra), rétention, droits.
- **Dépendances :** `14`, `16`, `10` si vision retenue.
- **Ne doit pas décider :** roadmap marketing.

### `18_PWA_OFFLINE.md`

- **Objectif :** comportement PWA et hors ligne.
- **Doit contenir :** capacités offline, cache, limites.
- **Dépendances :** `05`, `12`, `13`.
- **Ne doit pas décider :** modèle économique.

### `19_ANALYTICS.md`

- **Objectif :** mesure produit.
- **Doit contenir :** événements utiles, KPIs, limites éthiques/privacy.
- **Dépendances :** `05`, `12`, `17`.
- **Ne doit pas décider :** architecture complète.

### `20_TEST_STRATEGY.md`

- **Objectif :** stratégie de tests.
- **Doit contenir :** niveaux de test, risques couverts, critères qualité.
- **Dépendances :** `05`, `12`–`18`.
- **Ne doit pas décider :** vision produit.

### `21_DEPLOYMENT.md`

- **Objectif :** déploiement.
- **Doit contenir :** environnements, stratégie de release technique.
- **Dépendances :** `13`, `16`, `20`.
- **Ne doit pas décider :** personas.

### `22_ROADMAP.md`

- **Objectif :** séquence de livraison produit.
- **Doit contenir :** phases, dépendances, hypothèses de calendrier.
- **Dépendances :** `02`, `05`, `06`, `08`–`11`.
- **Ne doit pas décider :** détails d’implémentation locale.

### `23_RELEASE_PLAN.md`

- **Objectif :** plan de releases.
- **Doit contenir :** critères de sortie, go/no-go, rollback conceptuel.
- **Dépendances :** `20`, `21`, `22`.
- **Ne doit pas décider :** curriculum.

### `24_DEVELOPER_HANDOVER.md`

- **Objectif :** passation exploitables pour le développement (ex. Cursor).
- **Doit contenir :** synthèse actionnable, liens, contraintes, ordre d’implémentation.
- **Dépendances :** `00`–`23` suffisamment stables.
- **Ne doit pas inventer** de nouvelles décisions produit/techniques absentes des documents sources.

### `25_DESIGN_FREEZE.md`

- **Objectif :** figer la conception validée.
- **Doit contenir :** périmètre gelé, décisions gelées, procédure de réouverture.
- **Dépendances :** tous les documents nécessaires validés.
- **Ne doit pas** rouvrir des sujets sans justification bloquante documentée.

### `98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`

- **Objectif :** constitution officielle du développement et de la documentation runtime.
- **Doit contenir :** cycle de développement, registres runtime, règles commit, dette, bugs, mémoire projet.
- **Dépendances :** `docs/00_MASTER_PLAN.md`, `docs/99_DOCUMENTATION_STANDARD.md`, `WORKING_RULES.md`.
- **Ne doit pas :** remplacer la conception `00`–`25` ni autoriser le code avant Design Freeze.

### `99_DOCUMENTATION_STANDARD.md`

- **Objectif :** norme documentaire officielle de conception.
- **Doit contenir :** en-têtes, pieds, statuts, identifiants, blocs spéciaux, règles Cursor/ChatGPT.
- **Dépendances :** `WORKING_RULES.md`, `docs/00_MASTER_PLAN.md`.
- **Ne doit pas :** définir le runtime de développement (rôle de `98`).

### `docs/runtime/` (création différée)

- **Objectif :** mémoire vivante du système réel pendant le développement.
- **Doit contenir :** les 20 registres définis dans `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`.
- **Création :** après validation du Design Freeze et avant la première ligne de code applicatif.
- **Ne doit pas :** être créé pendant la phase de conception actuelle ; ne doit pas remplacer les documents de conception figés.

> **IMPORTANT**
>
> `docs/runtime/` n’existe pas encore. Sa création est différée (D-021, D-022).

## 16. Ordre officiel de rédaction

```text
00_MASTER_PLAN
01_VISION
02_PRODUCT_SCOPE
03_PERSONAS
04_USER_JOURNEYS
05_FEATURES
06_BUSINESS_MODEL
07_CONTENT_STRATEGY
08_TAI_CHI_CURRICULUM
09_AI_COACH
10_COMPUTER_VISION
11_VIRTUAL_HUMANS
12_UX_UI
13_TECH_ARCHITECTURE
14_DATA_MODEL
15_API_ARCHITECTURE
16_AUTH_SECURITY
17_PRIVACY_RGPD
18_PWA_OFFLINE
19_ANALYTICS
20_TEST_STRATEGY
21_DEPLOYMENT
22_ROADMAP
23_RELEASE_PLAN
24_DEVELOPER_HANDOVER
25_DESIGN_FREEZE
```

Règle : un document ne doit être considéré comme validé que lorsque ses dépendances sont suffisamment stables.

Ordre officiel de préparation des standards permanents et du runtime :

```text
99_DOCUMENTATION_STANDARD
98_DEVELOPMENT_DOCUMENTATION_STANDARD
25_DESIGN_FREEZE (validé)
  ↓
création de docs/runtime/ (20 registres)
  ↓
première ligne de code applicatif autorisée
  ↓
cycle permanent :
Ticket → Analyse → Développement → Tests → Documentation runtime → Audit → Commit → Validation
```

> **ATTENTION**
>
> Les standards `98` et `99` ne remplacent pas l’ordre `00`–`25`.
> Ils encadrent la forme documentaire et le travail de développement après gel.

## 17. Dépendances entre les documents

Dépendances principales (lecture : A → B signifie « B dépend de A ») :

```text
00 → 01 → 02 → 03 → 04 → 05
                 ↘︎ 06
            03/05 → 07 → 08 → 09 → 10 → 11
                         05/08/09 → 12
                         05/09–12 → 13 → 14 → 15 → 16 → 17
                         05/12/13 → 18
                         05/12/17 → 19
                         05/12–18 → 20 → 21
            02/05/06/08–11 → 22 → 23
            00–23 → 24 → 25
WORKING_RULES / 00 → 99
00 / 99 → 98
25 (validé) → docs/runtime/ → développement
```

Boucles de cohérence autorisées (relecture croisée, sans inversion de l’ordre officiel) :

- UX ↔ Features ↔ Curriculum ;
- Architecture ↔ PWA ↔ Auth/Privacy ;
- AI Coach ↔ Computer Vision ↔ Virtual Humans ;
- Roadmap ↔ Business Model ↔ Scope ;
- Conception figée ↔ Runtime (lecture seule vers la conception ; écriture dans le runtime).

## 18. Décisions produit à prendre

- Public prioritaire définitif du MVP.
- Promesse produit MVP.
- Inclus / exclus MVP, V2, V3.
- Niveau d’accompagnement attendu dès la V1.
- Place du suivi de progression.
- Place de la personnalisation.
- Critères de succès produit.

**Statut :** partiellement tranchées dans `docs/01_VISION.md` et `docs/02_PRODUCT_SCOPE.md` ; reste à affiner surtout dans `docs/05_FEATURES.md`.

## 19. Décisions pédagogiques à prendre

- Objectifs pédagogiques du MVP.
- Progression débutant.
- Durée et structure type d’une séance.
- Évaluations / feedback sans jugement médical.
- Contenu théorique vs pratique.
- Gestion de la motivation et de la régularité.

**Statut :** ouvertes — `07`, `08`.

## 20. Décisions liées au Tai Chi

- Style(s) et forme(s) retenus pour le MVP (**hypothèse issue du document de vision préexistant :** 24 mouvements Yang — non validée ici).
- Niveau de détail des explications techniques.
- Place de la respiration et de la méditation.
- Critères de « bonne pratique » communicables sans garantie.
- Validation / relecture experte éventuelle du contenu.

**Statut :** ouvertes — principalement `08`.

## 21. Décisions IA à prendre

- Présence ou non d’un coach IA dans le MVP.
- Cas d’usage autorisés / interdits.
- Ton, langue(s), niveau d’initiative de l’assistant.
- Garde-fous anti-conseil médical.
- Données minimales nécessaires au coaching.
- Critères de qualité et d’échec acceptable.

**Statut :** placement versionnel tranché dans `docs/02_PRODUCT_SCOPE.md` (assistant IA prévu pour V1, hors MVP) ; détail des cas d’usage ouvert dans `docs/09_AI_COACH.md`, avec impacts `docs/13_TECH_ARCHITECTURE.md` / `docs/17_PRIVACY_RGPD.md`.

## 22. Décisions liées à la vision par ordinateur

- Inclusion ou exclusion du MVP.
- Type d’analyse visé (posture, amplitude, rythme, etc.).
- Exigences matériel / éclairage / consentement.
- Précision attendue vs communication des limites.
- Traitement local vs distant (**hypothèse ouverte**, non tranchée).
- Implications RGPD spécifiques.

**Statut :** exclusion du MVP tranchée dans `docs/02_PRODUCT_SCOPE.md` (prévu pour V2) ; détail ouvert dans `docs/10_COMPUTER_VISION.md`, `docs/17_PRIVACY_RGPD.md`.

## 23. Décisions liées aux avatars virtuels

- Utilité produit réelle vs démonstration.
- Intégration éventuelle avec Virtual Humans Studio.
- Phase d’introduction (MVP / V2 / V3).
- Alternatives (vidéo humaine, illustration, 3D simple).
- Contraintes de coût, perf, accessibilité.

**Statut :** exclusion du MVP tranchée dans `docs/02_PRODUCT_SCOPE.md` (prévu pour V2) ; détail ouvert dans `docs/11_VIRTUAL_HUMANS.md`.

## 24. Décisions UX/UI à prendre

- Structure d’information principale.
- Parcours premier lancement.
- Affichage des avertissements de prudence.
- Modèle de navigation séance / leçon / progression.
- Accessibilité (seniors, mobilité réduite, lisibilité).
- États offline et erreurs.

**Statut :** ouvertes — `12`, alimenté par `04`.

## 25. Décisions techniques à prendre

Décisions **à prendre plus tard** dans les documents techniques, sans validation ici :

- architecture applicative ;
- hébergement et environnements ;
- choix d’auth ;
- stockage médias ;
- stratégie offline ;
- observabilité ;
- contraintes de performance.

Décisions documentaires de développement déjà tranchées au niveau Master Plan / standards :

- la documentation de conception suit `docs/99_DOCUMENTATION_STANDARD.md` ;
- la documentation de développement suit `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` ;
- `docs/runtime/` sera créé après Design Freeze et avant le code (D-022) ;
- chaque tâche de développement suivra le cycle Ticket → Analyse → Développement → Tests → Documentation runtime → Audit → Commit → Validation ;
- aucun commit fonctionnel ne sera considéré comme terminé si les registres runtime concernés ne sont pas synchronisés.

> **HYPOTHÈSE**
>
> Hypothèses non validées provenant du document de vision préexistant (stack citée : Next.js, TypeScript, Tailwind, Supabase, PWA, IA conversationnelle, Virtual Humans Studio) : à réévaluer dans `docs/13_TECH_ARCHITECTURE.md` et documents associés. Aucune de ces hypothèses n’est adoptée par le présent Master Plan.

## 26. Décisions de données et confidentialité

- Données collectées au MVP.
- Données de progression et conservation.
- Traitement éventuel d’images / vidéo.
- Bases légales, consentements, droits des personnes.
- Politique de rétention et de suppression.
- Analytics compatibles privacy.

**Statut :** ouvertes — `14`, `17`, `19`.

## 27. Décisions commerciales à prendre

- Modèle gratuit / freemium / abonnement / autre.
- Contenu gratuit vs premium.
- Positionnement prix.
- Partenariats éventuels (écoles, professeurs).
- Indicateurs business initiaux.

**Statut :** ouvertes — `06`.

## 28. Risques structurants

Risques à suivre dès la conception (détail opérationnel dans `RISKS.md`) :

> **RISQUE**
>
> Identifiants historiques conservés (`R1`–`R8`). Aucun renommage dans cette version.

| ID | Risque | Impact potentiel |
| --- | --- | --- |
| R1 | Confusion avec un produit médical | Légal / confiance |
| R2 | Sur-promesse IA ou correction de posture | Confiance / sécurité perçue |
| R3 | Scope MVP trop large | Retard / reconstruction |
| R4 | Vision par caméra trop tôt | Complexité / privacy |
| R5 | Contenu pédagogique non validé | Qualité / crédibilité |
| R6 | RGPD insuffisamment anticipé (surtout caméra) | Conformité |
| R7 | Décisions techniques précoces non documentées | Dette / rebuild |
| R8 | Avatars coûteux sans valeur MVP prouvée | Coût / distraction |

## 29. Jalons de conception

1. Vision validée.
2. Produit et utilisateurs validés.
3. Modèle économique validé.
4. Programme pédagogique validé.
5. Fonctions IA validées.
6. UX validée.
7. Architecture technique validée.
8. Sécurité et RGPD validés.
9. Roadmap validée.
10. Developer Handover validé.
11. Design Freeze signé.
12. Documentation runtime initialisée (`docs/runtime/`, 20 registres).
13. Développement autorisé.

## 30. Critères de validation de chaque jalon

| Jalon | Critères minimum |
| --- | --- |
| 1. Vision | `01` rédigé, cohérent avec `00`, hypothèses marquées, validation explicite |
| 2. Produit & utilisateurs | `02`, `03`, `04`, `05` stables ; MVP / hors MVP séparés |
| 3. Modèle économique | `06` rédigé ; hypothèses business explicites |
| 4. Programme pédagogique | `07`, `08` stables ; limites médicales/pédagogiques explicites |
| 5. Fonctions IA | `09` (+ `10`/`11` si dans le scope retenu) avec garde-fous |
| 6. UX | `12` cohérent avec journeys et features MVP |
| 7. Architecture technique | `13`, `14`, `15`, `18` définis sans contradiction majeure |
| 8. Sécurité & RGPD | `16`, `17` (et impacts `19`) définis |
| 9. Roadmap | `22`, `23` + stratégie de test `20` et déploiement `21` alignés |
| 10. Developer Handover | `24` exploitable sans interprétation majeure |
| 11. Design Freeze | `docs/25_DESIGN_FREEZE.md` signé ; décisions gelées listées |
| 12. Runtime initialisé | `docs/runtime/` créé avec les 20 registres définis par `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` |
| 13. Développement autorisé | tous les critères de la section 32 satisfaits |

## 31. Processus de Design Freeze

1. Vérifier que les documents nécessaires sont rédigés et suffisamment stables.
2. Vérifier la traçabilité dans `DECISIONS.md`, `RISKS.md`, `CHANGELOG.md`.
3. Confirmer la séparation MVP / V2 / V3.
4. Rédiger et faire valider `25_DESIGN_FREEZE.md`.
5. À partir de la signature : aucune nouvelle idée n’entre dans le périmètre gelé ; elles vont au backlog.
6. Toute réouverture suit la section 34.

## 32. Critères autorisant le développement

Le développement ne pourra commencer que si **toutes** les conditions suivantes sont remplies :

- les documents `docs/00` à `docs/25` sont rédigés ;
- les décisions structurantes sont tracées ;
- les risques majeurs sont documentés ;
- le périmètre MVP est figé ;
- les fonctions V2 et V3 sont séparées ;
- l’architecture technique est définie ;
- le modèle de données est défini ;
- les contraintes RGPD sont définies ;
- les limites médicales et pédagogiques sont définies ;
- le plan de test est défini ;
- le Design Freeze est validé ;
- le Developer Handover est exploitable par Cursor sans interprétation majeure ;
- `docs/99_DOCUMENTATION_STANDARD.md` est respecté pour la documentation de conception ;
- `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` est reconnu comme constitution du développement ;
- `docs/runtime/` est créé avec ses 20 registres avant la première ligne de code ;
- le cycle Ticket → Analyse → Développement → Tests → Documentation runtime → Audit → Commit → Validation est adopté ;
- aucun commit fonctionnel ne sera accepté sans synchronisation des registres runtime concernés.

Tant qu’une condition manque, le développement applicatif reste interdit.

> **IMPORTANT**
>
> Les documents de conception figés ne doivent pas devenir des journaux de développement.
> Les informations évolutives doivent être placées dans `docs/runtime/`.

## 33. Gestion des nouvelles idées après le Design Freeze

Règle stricte :

- **Avant** le Design Freeze : les idées peuvent être étudiées et intégrées aux documents concernés.
- **Après** le Design Freeze : les idées vont dans le backlog (`BACKLOG.md`, horizons V2 ou V3).
- Seules les erreurs critiques, risques légaux, failles de sécurité ou impossibilités techniques peuvent rouvrir une décision figée.
- Toute réouverture doit être documentée dans `DECISIONS.md`, `RISKS.md` et `CHANGELOG.md`.

## 34. Gestion des changements bloquants

Un changement bloquant peut être ouvert uniquement s’il relève d’au moins une catégorie :

- erreur critique de conception empêchant un produit sûr ou cohérent ;
- risque légal ;
- faille de sécurité ;
- impossibilité technique démontrée.

Processus :

1. Documenter le problème dans `RISKS.md`.
2. Proposer la réouverture dans `DECISIONS.md` avec justification.
3. Mesurer l’impact sur les documents dépendants.
4. Mettre à jour `CHANGELOG.md`.
5. Si nécessaire, amender `25_DESIGN_FREEZE.md` et les documents sources.
6. Ne reprendre le développement (s’il avait démarré) qu’après restabilisation documentaire.

## 35. Livrables finaux de conception

Livrables attendus avant développement :

- documents `docs/00` à `docs/25` rédigés ;
- `docs/99_DOCUMENTATION_STANDARD.md` en vigueur pour la conception ;
- `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` en vigueur pour le développement ;
- `WORKING_RULES.md` respectées ;
- `DECISIONS.md` à jour ;
- `RISKS.md` à jour ;
- `CHANGELOG.md` à jour ;
- `BACKLOG.md` pour le hors-gel / V2 / V3 ;
- `project/milestones/`, `project/audits/`, `project/handovers/` prêts à recevoir les preuves de jalons et passations ;
- Design Freeze signé ;
- Developer Handover exploitable ;
- `docs/runtime/` initialisé (20 registres) après Design Freeze et avant le code.

## 36. Définition de “prêt à développer”

Le projet est **prêt à développer** uniquement lorsque :

1. le Design Freeze est validé ;
2. les critères de la section 32 sont tous satisfaits ;
3. `docs/runtime/` existe avec les 20 registres officiels ;
4. un développeur (humain ou agent type Cursor) peut démarrer l’implémentation à partir de `docs/24_DEVELOPER_HANDOVER.md` sans inventer de décisions structurantes manquantes ;
5. chaque tâche pourra appliquer le cycle officiel de `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`.

État actuel : **conception terminée ; Design Freeze déclaré** ; prêt à ouvrir `docs/runtime/` ; développement MVP uniquement après les 20 registres Runtime (critères §32 / §36).

## 37. Prochaines actions

1. Créer `docs/runtime/` et rédiger les 20 registres Runtime (`98`, D-022 / D-215).
2. Démarrer le développement MVP conformément à la documentation validée et à `docs/24_DEVELOPER_HANDOVER.md`.
3. Respecter `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` et `docs/99_DOCUMENTATION_STANDARD.md` pour toute évolution documentaire.
4. Ne commencer aucun code applicatif avant satisfaction de la section 32 (runtime initialisé).
5. Diriger toute nouvelle idée hors gel vers `BACKLOG.md` (V2 / V3) sauf réouverture bloquante documentée.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.1 |
| Statut | VALIDÉ |
| Prochain document | `docs/runtime/` (20 registres) |
| Fin officielle | Oui |

*Fin officielle du document.*
