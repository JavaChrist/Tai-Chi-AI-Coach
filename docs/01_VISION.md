# 01 — Vision

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Vision |
| Numéro | 01 |
| Fichier | `docs/01_VISION.md` |
| Version | 1.1 |
| Statut | VALIDÉ |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md` |
| Documents utilisant celui-ci | `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md` |
| Décisions concernées | D-006 à D-013 |
| Dernière revue | 4 août 2026 |
| Autorise le code | Non |

> **VALIDÉ**
>
> **Élément :** `docs/01_VISION.md`
> **Date :** 4 août 2026
> **Par :** Projet Tai-Chi-AI-Coach
> **Version documentaire :** 1.1

Il fixe la direction stratégique du produit. Il ne fige ni le périmètre MVP, ni la stack technique, ni le modèle de données, ni l’architecture IA, ni le business model final.

Le fichier préexistant `TaiChi_AI_Coach_Vision_Projet.md` a servi de source d’idées. Il n’est pas une architecture validée. En cas de contradiction, l’ordre de priorité reste :

```text
WORKING_RULES.md
→ docs/00_MASTER_PLAN.md
→ DECISIONS.md
→ PROJECT_CONTEXT.md
→ TaiChi_AI_Coach_Vision_Projet.md
```

> **NOTE**
>
> Document normalisé selon `docs/99_DOCUMENTATION_STANDARD.md`. Aucune décision fonctionnelle modifiée.

## 2. Résumé de la vision

Tai-Chi AI Coach vise à rendre l’apprentissage régulier du Tai Chi plus accessible, progressif, rassurant et personnalisable.

Le produit doit pouvoir accompagner une personne depuis la découverte jusqu’à une pratique autonome régulière. Il ne prétend pas remplacer systématiquement un professeur humain, ni se substituer à un professionnel de santé.

L’intelligence artificielle, la vision par ordinateur et les professeurs virtuels sont des moyens possibles d’enrichir l’expérience. Aucun de ces moyens n’est, à ce stade, une obligation de première version.

## 3. Origine du projet

Le projet naît du constat suivant, encore à confirmer :

beaucoup de personnes souhaitent découvrir ou pratiquer le Tai Chi, mais peinent à trouver un cadre simple, régulier et rassurant pour démarrer et progresser.

Des pistes antérieures — coaching personnalisé, analyse de mouvements, avatars, programmes spécialisés — ont été listées dans un document de vision préexistant. Ces pistes restent des hypothèses. Elles seront reprises, filtrées ou écartées document par document, selon l’ordre officiel de conception.

Le projet est en phase de conception. Aucune architecture technique n’est validée. Aucun développement applicatif n’est autorisé.

## 4. Problème principal

> **HYPOTHÈSE**
>
> Problème produit à confirmer — non validé par une étude de marché à ce stade.

Beaucoup de personnes souhaitent découvrir ou pratiquer le Tai Chi, mais rencontrent des obstacles qui freinent le démarrage ou la régularité :

- difficulté à trouver un cours proche ;
- contraintes horaires ;
- coût ;
- peur de mal reproduire les mouvements ;
- difficulté à mémoriser les enchaînements ;
- vidéos trop rapides ou mal adaptées ;
- manque de progression structurée ;
- absence de suivi entre deux cours.

Le problème central que le produit cherche à réduire est donc le suivant :

**l’écart entre l’envie de pratiquer le Tai Chi et la capacité réelle à démarrer, comprendre, répéter et progresser de façon régulière, sans cadre pédagogique adapté.**

Cette formulation reste une hypothèse de travail. Elle sera précisée et confrontée aux utilisateurs dans `03_PERSONAS.md` et aux parcours dans `04_USER_JOURNEYS.md`.

## 5. Problèmes secondaires

> **HYPOTHÈSE**
>
> Problèmes secondaires à confirmer.

| ID | Problème secondaire |
| --- | --- |
| PS1 | Offre numérique souvent limitée à des vidéos passives, sans accompagnement. |
| PS2 | Peur de se blesser ou de « mal faire » en autonomie. |
| PS3 | Difficulté à savoir par où commencer et dans quel ordre progresser. |
| PS4 | Motivation fragile sans rappel bienveillant ni sentiment de progression. |
| PS5 | Accès inégal à un professeur compétent selon le lieu, le temps ou le budget. |
| PS6 | Contenu trop dense, trop rapide ou trop technique pour un débutant. |
| PS7 | Manque de continuité entre deux séances ou entre un cours présentiel et la pratique à domicile. |

Ces problèmes ne sont pas classés par priorité définitive ici. Leur priorisation relève de `02_PRODUCT_SCOPE.md` et `03_PERSONAS.md`.

## 6. Utilisateurs envisagés

Publics à étudier, **sans déclaration définitive de priorité** avant `03_PERSONAS.md` :

- adultes débutants ;
- seniors autonomes ;
- personnes recherchant une activité douce ;
- personnes souhaitant améliorer équilibre et mobilité ;
- pratiquants souhaitant réviser entre les cours ;
- personnes ayant peu accès à un professeur.

> **HYPOTHÈSE**
>
> Les débutants constituent le public principal envisagé pour les premières versions — non validée définitivement.

Cette hypothèse oriente la vision, mais ne fige pas encore le public MVP. La priorisation définitive sera tranchée dans `docs/03_PERSONAS.md` et confrontée au périmètre dans `docs/02_PRODUCT_SCOPE.md`.

## 7. Besoins utilisateurs fondamentaux

Besoins fondamentaux envisagés, à confirmer :

1. **Comprendre** — savoir ce qu’est le Tai Chi, à quoi sert une séance, comment démarrer sans se perdre.
2. **Être guidé** — suivre une progression claire plutôt qu’empiler des contenus isolés.
3. **Se rassurer** — recevoir des consignes prudentes, sans jugement, avec des limites explicites.
4. **Pratiquer à son rythme** — adapter durée, intensité perçue et fréquence à sa situation.
5. **Mémoriser** — réviser les mouvements et enchaînements sans devoir tout retenir d’un coup.
6. **Progresser** — percevoir une évolution concrète, même modeste.
7. **Maintenir une régularité** — retrouver facilement une séance, reprendre après une interruption.
8. **Rester en sécurité** — savoir quand ralentir, s’arrêter, ou consulter un professionnel compétent.

Ces besoins ne constituent pas encore une liste de fonctionnalités.

## 8. Vision produit

La vision produit est centrée sur ceci :

> rendre l’apprentissage régulier du Tai Chi plus accessible, progressif, rassurant et personnalisable.

Le produit doit pouvoir accompagner une personne depuis la découverte jusqu’à une pratique autonome régulière.

Il doit rester un compagnon d’apprentissage et de coaching prudent. Il ne doit pas prétendre remplacer systématiquement un professeur humain, ni garantir une posture parfaite, ni promettre un résultat médical.

## 9. Mission du produit

Aider une personne à découvrir, comprendre, pratiquer et maintenir une pratique régulière du Tai Chi, grâce à un accompagnement numérique simple, progressif et bienveillant, dans le respect de ses limites physiques et de son rythme.

## 10. Promesse centrale

Tai-Chi AI Coach promet d’offrir un cadre clair pour apprendre et pratiquer le Tai Chi avec plus de confiance, à un rythme maîtrisé, sans pression ni prétention médicale.

La promesse exacte du MVP — ce qui sera réellement livré en première version — reste ouverte et sera formulée dans `02_PRODUCT_SCOPE.md` et `05_FEATURES.md`.

## 11. Proposition de valeur

Proposition de valeur de travail :

- rendre le Tai Chi abordable pour une personne qui démarre ou reprend en autonomie partielle ;
- structurer l’apprentissage (contenu, progression, rituels de séance) ;
- accompagner avec des explications claires et un ton pédagogique rassurant ;
- expliciter les limites du produit, de l’IA et de toute analyse de mouvement éventuelle ;
- préparer, pour des versions ultérieures si elles sont validées, un coaching plus personnalisé.

Cette proposition n’est pas encore confrontée à un modèle économique. Cette confrontation relève de `06_BUSINESS_MODEL.md`.

## 12. Expérience recherchée

L’utilisateur doit pouvoir ressentir :

- simplicité ;
- calme ;
- confiance ;
- progression ;
- encouragement ;
- absence de jugement ;
- sécurité ;
- maîtrise de son rythme.

L’application doit éviter :

- surcharge visuelle ;
- compétition excessive ;
- pression ;
- gamification agressive ;
- culpabilisation ;
- discours médical non fondé.

L’expérience recherchée n’impose pas encore d’écrans définitifs. Les principes UX détaillés relèvent de `12_UX_UI.md`.

## 13. Principes fondamentaux

1. **Accessibilité pédagogique avant sophistication.**
2. **Progression claire et rassurante.**
3. **Calme, simplicité, confiance.**
4. **Transparence sur les limites du produit et de l’IA.**
5. **Séparation stricte entre bien-être / pratique et prétention médicale.**
6. **Contenu maîtrisé avant automatisation.**
7. **Utilité progressive avant fonctions impressionnantes.**
8. **Indépendance vis-à-vis d’un fournisseur unique** pour les capacités critiques du produit.
9. **Consentement et maîtrise des données** avant toute fonction caméra ou analyse sensible.
10. **Accompagnement sans substitution systématique** à un professeur humain ou à un professionnel de santé.

## 14. Accessibilité et simplicité

Le produit doit privilégier une entrée simple dans la pratique :

- langage compréhensible ;
- parcours lisible ;
- charge cognitive limitée ;
- consignes actionnables ;
- possibilité d’avancer sans maîtriser tout le vocabulaire technique dès le départ.

**Ouvert :** le niveau d’accessibilité à viser pour les seniors, les personnes à mobilité particulière, ou les utilisateurs peu à l’aise avec le numérique sera précisé dans `03_PERSONAS.md` et `12_UX_UI.md`.

La simplicité ne signifie pas l’absence de profondeur. Elle signifie que la profondeur doit se découvrir progressivement.

## 15. Progression pédagogique

La progression est un pilier de la vision.

Le produit doit viser une montée en compétence structurée : découverte, premiers gestes, consolidation, enchaînements, autonomie croissante.

**Ouvert et à trancher plus tard :**

- style(s) et forme(s) retenus ;
- nombre de mouvements ;
- durée type d’une séance ;
- place exacte de la respiration et de la méditation ;
- critères communicables de « bonne pratique » sans garantie.

Ces sujets relèvent principalement de `07_CONTENT_STRATEGY.md` et `08_TAI_CHI_CURRICULUM.md`.

## 16. Motivation et régularité

La vision inclut le soutien à la régularité, sans culpabilisation.

Moyens envisagés, non figés :

- reprise facile après interruption ;
- sentiment de progression visible ;
- encouragement mesuré ;
- rappels éventuels non intrusifs ;
- séances adaptées au temps disponible.

Le produit ne doit pas transformer l’absence de pratique en échec moral. La motivation recherchée est durable, douce et respectueuse du rythme de l’utilisateur.

**Ouvert :** mécanismes concrets de motivation, notifications, rituels et métriques de régularité.

## 17. Place de l’intelligence artificielle

L’IA est un **moyen possible** d’accompagnement, pas une fin en soi et pas une autorité médicale.

Usages envisagés, sous réserve de validation ultérieure :

- personnaliser des séances ;
- expliquer des mouvements ;
- répondre à des questions ;
- adapter le rythme ;
- encourager ;
- proposer des révisions ;
- aider à comprendre des erreurs simples de pratique, dans des limites explicites.

Garde-fous non négociables au niveau de la vision :

- l’IA ne doit jamais se présenter comme médecin ;
- elle ne doit pas diagnostiquer ;
- elle ne doit pas interpréter une douleur comme une pathologie ;
- elle doit recommander l’arrêt de l’exercice en cas de douleur ;
- elle doit orienter vers un professionnel compétent lorsque nécessaire ;
- elle ne doit pas inventer une technique Tai Chi hors contenu maîtrisé.

**Ouvert :**

- présence ou non d’un coach IA dans le MVP ;
- cas d’usage autorisés / interdits détaillés ;
- ton, langues, niveau d’initiative ;
- fournisseur ou architecture IA.

Ces sujets relèvent de `09_AI_COACH.md` et, le cas échéant, des documents techniques.

## 18. Place de la vision par ordinateur

La caméra peut devenir une **fonction avancée**, utile pour :

- observer certains points du corps ;
- comparer un mouvement à une référence ;
- détecter des écarts simples ;
- fournir des indications prudentes.

Limites à reconnaître dès la vision :

- environnement de prise de vue ;
- vêtements ;
- lumière ;
- angle ;
- mobilité particulière de l’utilisateur ;
- diversité morphologique ;
- risque de faux positifs ;
- impossibilité de garantir une posture parfaite ;
- nécessité de protéger les données vidéo ;
- nécessité d’un consentement clair.

Cette fonction reste une **évolution possible**, pas une obligation de première version, et pas une dépendance initiale du produit.

**Ouvert :** inclusion ou exclusion du MVP, type d’analyse, traitement local ou distant, exigences matérielles, communication des limites. Ces sujets relèvent de `10_COMPUTER_VISION.md` et `17_PRIVACY_RGPD.md`.

## 19. Place des professeurs virtuels

Les professeurs virtuels peuvent servir à :

- démontrer ;
- guider ;
- expliquer ;
- encourager ;
- proposer plusieurs styles de présentation.

Ils doivent rester une **couche de présentation**.

Le produit ne doit pas dépendre entièrement de Virtual Humans Studio pour fonctionner. Une intégration éventuelle avec Virtual Humans Studio reste une option à évaluer, pas une dépendance obligatoire.

**Ouvert :**

- utilité réelle vs démonstration ;
- phase d’introduction éventuelle ;
- alternatives (vidéo humaine, illustration, 3D simple) ;
- contraintes de coût, performance et accessibilité.

Ces sujets relèvent de `11_VIRTUAL_HUMANS.md`.

## 20. Place du contenu humain et expert

La vision prévoit que :

- les contenus Tai Chi devront être validés par des personnes compétentes ;
- l’IA ne doit pas inventer une technique ;
- les mouvements, consignes et progressions doivent avoir une source éditoriale maîtrisée ;
- les contenus générés automatiquement doivent rester contrôlés.

Sans validation experte, le produit risque de perdre crédibilité et prudence. Ce risque est structurant et doit rester visible tout au long de la conception.

**Ouvert :** modalités exactes de validation éditoriale, profils experts, processus de relecture, formats de production. Ces sujets relèvent de `07_CONTENT_STRATEGY.md` et `08_TAI_CHI_CURRICULUM.md`.

## 21. Prudence médicale et physique

Le produit ne doit jamais être présenté comme :

- un dispositif médical ;
- un outil de diagnostic ;
- un traitement ;
- une thérapie ;
- une solution de guérison ;
- une prévention garantie ;
- un substitut à un professionnel de santé.

Principes de prudence à conserver dans toute évolution :

- avertissements clairs avant pratique ;
- adaptation du niveau lorsque c’est pertinent ;
- consigne d’arrêt en cas de douleur ;
- orientation vers un professionnel compétent en cas de doute ou de pathologie ;
- absence de promesse d’absence de blessure ;
- absence de promesse de correction parfaite.

Les mécanismes détaillés seront précisés dans les documents pédagogiques, IA, UX et conformité.

## 22. Confidentialité et confiance

La confiance est une condition de la vision, surtout si le produit collecte un jour des données de progression, de conversation ou de vidéo.

Principes de direction :

- consentement clair, surtout pour la caméra ;
- minimisation des données ;
- transparence sur l’usage ;
- maîtrise par l’utilisateur de ce qui est collecté, conservé ou supprimé ;
- pas d’usage caméra sans consentement clair.

Les bases légales, rétentions et droits détaillés relèvent de `17_PRIVACY_RGPD.md`. Ils ne sont pas tranchés ici.

## 23. Différenciation recherchée

La différenciation envisagée repose sur la combinaison de :

- progression guidée ;
- simplicité ;
- adaptation ;
- pédagogie ;
- suivi ;
- assistance IA prudente ;
- démonstration visuelle ;
- possible analyse de mouvement ;
- expérience pensée pour les débutants et les personnes recherchant une activité douce.

Cette différenciation est une **intention**, pas une preuve commerciale. Elle n’est pas encore démontrée face au marché. Le positionnement concurrentiel détaillé reste ouvert.

## 24. Ce que le produit ne doit pas devenir

Le produit ne doit pas devenir :

- une bibliothèque de vidéos sans accompagnement ;
- une application de fitness générique ;
- un réseau social ;
- une plateforme médicale ;
- un substitut systématique à un professeur ;
- un produit dépendant d’un seul fournisseur IA ;
- une application utilisant la caméra sans consentement clair ;
- une application culpabilisante ;
- une compétition entre utilisateurs ;
- un projet surchargé par trop de fonctions dès le départ ;
- un dispositif médical, même par implication marketing ;
- un produit qui promet diagnostic, traitement, guérison ou prévention garantie.

Ces limites servent de garde-fous pour les documents suivants, notamment le périmètre et les fonctionnalités.

## 25. Vision à court terme

Direction à court terme — **pas un engagement de livraison** :

- comprendre les utilisateurs ;
- définir le programme pédagogique ;
- proposer une expérience simple ;
- tester l’intérêt réel ;
- valider la régularité d’usage.

À ce stade, le court terme désigne surtout la phase de conception et les premières expériences produit utiles, sans figer le contenu du MVP.

## 26. Vision à moyen terme

Direction à moyen terme — **pas un engagement de livraison** :

- personnalisation ;
- programmes adaptés ;
- assistant IA ;
- contenus enrichis ;
- meilleure mesure de progression ;
- premiers professeurs virtuels si pertinents.

Ces éléments ne sont pas automatiquement inclus dans une V2. Leur place sera arbitrée dans `02_PRODUCT_SCOPE.md`, `05_FEATURES.md` et `22_ROADMAP.md`.

## 27. Vision à long terme

Direction à long terme — **pas un engagement de livraison** :

- analyse de mouvements ;
- corrections prudentes ;
- plusieurs disciplines douces ;
- moteur de coaching réutilisable ;
- écosystème pouvant inclure Tai Chi, Qi Gong, mobilité, équilibre, respiration.

Cette vision long terme ne doit pas contaminer le périmètre initial. Elle oriente l’ambition, sans imposer l’architecture actuelle ni le backlog immédiat.

## 28. Extensions possibles

Extensions possibles à explorer plus tard, sans validation actuelle :

- programmes spécialisés (seniors, mobilité, anti-stress, etc.) ;
- révision entre cours présentiels ;
- contenus hors ligne partiels ;
- démonstrations enrichies ;
- coaching conversationnel plus profond ;
- déclinaisons vers d’autres pratiques douces ;
- partenariats éventuels avec écoles ou professeurs.

Aucune de ces extensions n’est retenue comme obligatoire ici.

## 29. Limites de la vision

Cette vision :

- ne fixe pas le MVP ;
- ne choisit pas la stack ;
- ne définit pas le schéma de données ;
- ne détaille pas les API ;
- ne fige pas les écrans ;
- ne valide pas le business model ;
- ne prouve pas le problème par une étude de marché ;
- ne déclare pas la vision par ordinateur obligatoire ;
- ne rend pas Virtual Humans Studio obligatoire ;
- ne garantit aucun résultat physique ou médical ;
- ne remplace pas la validation experte des contenus Tai Chi.

Ses limites sont volontaires : elle doit rester stable tout en laissant les documents suivants décider précisément.

## 30. Hypothèses à valider

| ID | Hypothèse | Statut |
| --- | --- | --- |
| H-V1 | Le problème principal décrit correspond à une friction réelle et suffisamment fréquente. | Non validée |
| H-V2 | Les débutants constituent le public principal le plus pertinent pour démarrer. | Non validée |
| H-V3 | Une progression guidée apporte plus de valeur qu’une bibliothèque vidéo seule. | Non validée |
| H-V4 | Un ton calme, simple et non culpabilisant favorise la régularité. | Non validée |
| H-V5 | Une personnalisation progressive améliorera l’engagement après les premières versions. | Non validée |
| H-V6 | L’IA d’accompagnement peut créer de la valeur sans devenir une autorité médicale. | Non validée |
| H-V7 | La vision par ordinateur peut enrichir le coaching, mais n’est pas nécessaire pour prouver l’intérêt initial. | Non validée |
| H-V8 | Les professeurs virtuels peuvent améliorer la démonstration, sans être indispensables au fonctionnement du produit. | Non validée |
| H-V9 | Des contenus validés par des personnes compétentes sont une condition de crédibilité. | Non validée comme processus, mais retenue comme exigence de direction |
| H-V10 | Une pratique douce, progressive et accessible répond à un besoin durable au-delà du seul public « fitness ». | Non validée |

## 31. Décisions ouvertes

Restent explicitement ouvertes après ce document :

- périmètre exact du MVP ;
- promesse produit MVP détaillée ;
- public prioritaire définitif ;
- style(s) et forme(s) Tai Chi retenus ;
- nombre de mouvements ;
- présence ou non d’un coach IA en première version ;
- inclusion ou exclusion de la caméra ;
- place et calendrier des professeurs virtuels ;
- choix d’un fournisseur IA ;
- stack technique ;
- modèle de données ;
- architecture applicative ;
- modèle économique et prix ;
- métriques de succès commerciales ;
- formats de contenus exacts ;
- langues supportées ;
- partenariats éventuels.

Ces décisions devront être tranchées dans les documents prévus par le Master Plan, sans remettre en cause la direction fondamentale ci-dessus sauf problème bloquant documenté.

## 32. Critères de validation de la vision

La vision pourra être considérée comme validée lorsque :

1. le présent document est relu et accepté explicitement ;
2. il reste cohérent avec `docs/00_MASTER_PLAN.md` ;
3. les hypothèses sont clairement marquées comme telles ;
4. les décisions ouvertes restent ouvertes et listées ;
5. aucune promesse médicale indue n’y figure ;
6. la vision par ordinateur et les professeurs virtuels y sont positionnés comme non obligatoires pour démarrer ;
7. les décisions structurantes issues de ce document sont tracées dans `DECISIONS.md` ;
8. les modifications importantes sont tracées dans `CHANGELOG.md` ;
9. le document suivant (`docs/02_PRODUCT_SCOPE.md`) peut s’appuyer sur cette vision sans ambiguïté majeure sur la direction.

> **VALIDÉ**
>
> Critères de validation de la vision considérés remplis pour la version documentaire 1.1.

## 33. Vision synthétique en une phrase

Rendre l’apprentissage régulier du Tai Chi plus accessible, progressif, rassurant et personnalisable, sans prétention médicale et sans substitution systématique à un professeur humain.

## 34. Vision synthétique en un paragraphe

Tai-Chi AI Coach est conçu comme un compagnon d’apprentissage du Tai Chi, capable d’accompagner une personne depuis la découverte jusqu’à une pratique autonome plus régulière. Sa direction est de rendre cette pratique accessible, progressive, calme et rassurante, grâce à un contenu maîtrisé, une pédagogie claire et, lorsque cela sera pertinent, une assistance IA prudente. La vision par ordinateur et les professeurs virtuels pourront enrichir l’expérience plus tard, sans devenir des dépendances initiales. Le produit ne doit jamais se présenter comme un dispositif médical, ni culpabiliser, ni se transformer en fitness compétitif ou en simple bibliothèque de vidéos.

## 35. Conclusion

Ce document fixe la direction durable du produit avant les arbitrages de périmètre, de fonctionnalités, de technique et de modèle économique.

Il affirme ce qui doit rester stable : accessibilité, progression, prudence, simplicité, confiance, maîtrise éditoriale des contenus, et refus des dérives médicales, compétitives ou culpabilisantes.

Il laisse volontairement ouverts les choix nécessaires aux documents suivants, en commençant par `docs/02_PRODUCT_SCOPE.md`.

Aucun développement applicatif n’est autorisé sur la seule base de ce document.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.1 |
| Statut | VALIDÉ |
| Prochain document | `docs/02_PRODUCT_SCOPE.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
