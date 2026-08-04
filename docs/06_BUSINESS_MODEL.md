# 06 — Business Model

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Business Model |
| Numéro | 06 |
| Fichier | `docs/06_BUSINESS_MODEL.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md` |
| Documents utilisant celui-ci | `docs/07_CONTENT_STRATEGY.md`, `docs/22_ROADMAP.md`, `docs/23_RELEASE_PLAN.md` |
| Décisions concernées | D-035 à D-039 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Référence officielle du modèle économique.
> Aucun prix, fournisseur, système de paiement ni calcul financier détaillé.
> Aucune nouvelle fonctionnalité. Catalogue exclusif `F-001` à `F-041`.
> Document conforme à `docs/99_DOCUMENTATION_STANDARD.md`.

## 2. Objectif

Définir un modèle économique durable, cohérent avec la vision : calme, confiance, progression et simplicité.

Le document répond notamment à :

- pourquoi l’utilisateur installe l’application ;
- pourquoi il continue à l’utiliser ;
- pourquoi il accepterait de payer ;
- quelle valeur est offerte gratuitement ;
- quelle valeur justifie une offre Premium ;
- comment éviter une frustration artificielle destinée uniquement à vendre un abonnement.

## 3. Principes économiques

1. **Valeur d’abord, monétisation ensuite.** Le gratuit doit permettre une progression réelle.
2. **Le Premium enrichit, il ne débloque pas la survie du parcours.**
3. **Pas de frustration artificielle** pour forcer l’achat.
4. **Cohérence avec le calme** : pas de pression, compétition, culpabilisation commerciale.
5. **Transparence** : l’utilisateur comprend ce qui est gratuit et ce qui est Premium.
6. **Éthique** : pas de publicité invasive, pas de vente de données personnelles, pas de manipulation.
7. **Alignement versions** : la monétisation suit la maturité produit (MVP utile avant Premium riche).
8. **Personas au centre** : P-001, P-002, P-003 doivent pouvoir réussir sans payer ; Premium sert surtout l’approfondissement.

> **IMPORTANT**
>
> `F-025` (Contenus Premium) appartient à V2. Le MVP peut exister sans offre payante active.

## 4. Proposition de valeur

### 4.1 Pourquoi l’utilisateur installe

| Persona | Motif d’installation |
| --- | --- |
| P-001 | Activité douce, lisible, rassurante à domicile |
| P-002 | Calme et séances courtes sans complexité |
| P-003 | Apprendre sans cours accessible |
| P-004 | Réviser entre les cours |
| P-005 | Aider un proche à démarrer en sécurité |

Valeur d’installation : accès immédiat à un cadre clair (`F-033`, `F-001`, `F-016`, `F-031`) puis à une première séance utile (`F-013`, `F-006`).

### 4.2 Proposition de valeur centrale

Offrir un compagnon d’apprentissage du Tai Chi accessible, progressif et rassurant, permettant une pratique régulière autonome, sans prétention médicale ni compétition.

### 4.3 Pourquoi payer un jour

L’utilisateur accepterait de payer lorsqu’il :

- a déjà progressé gratuitement ;
- fait confiance au ton et à la pédagogie ;
- perçoit un gain clair (personnalisation, programmes enrichis, continuité multi-appareils, contenus complémentaires, accompagnement IA plus poussé) ;
- n’a pas le sentiment d’avoir été bloqué artificiellement.

## 5. Pourquoi l'utilisateur revient

Le retour repose sur :

| Levier | Fonctionnalités associées |
| --- | --- |
| Progression visible | F-003, F-010 |
| Séance du jour simple | F-008, F-013 |
| Reprise sans culpabilité | F-032 |
| Pédagogie claire | F-005, F-006, F-007 |
| Calme de l’expérience | F-014, F-015, F-029 |
| Confiance / prudence | F-016, F-031 |
| Habitude douce | F-009, plus tard F-017 (opt-in) |

Jamais sur pression, peurs, classements ou sanctions.

## 6. Valeur gratuite

Le mode gratuit doit permettre de :

- découvrir l’application ;
- progresser réellement ;
- créer de la confiance ;
- comprendre la valeur éventuelle du Premium.

### 6.1 Socle gratuit non négociable

Ces capacités restent accessibles sans abonnement dès qu’elles existent dans le produit :

| ID | Nom | Raison |
| --- | --- | --- |
| F-001 | Présentation du Tai Chi | Comprendre le cadre |
| F-003 | Parcours débutant | Progression réelle |
| F-004 | Bibliothèque des mouvements | Révision essentielle |
| F-005 | Explication détaillée | Pédagogie de base |
| F-006 | Vidéo pédagogique | Démonstration de base |
| F-008 | Programme quotidien | Régularité |
| F-010 | Progression | Sentiment d’avancée |
| F-013 | Séances guidées | Pratique réelle |
| F-016 | Conseils de sécurité | Confiance |
| F-029 | Accessibilité | Usage digne |
| F-031 | Avertissements avant pratique | Prudence |
| F-032 | Reprise de séance | Anti-abandon |
| F-033 | Première découverte guidée | Activation |

### 6.2 Gratuit complémentaire (dès disponibilité versionnelle)

| ID | Nom | Commentaire |
| --- | --- | --- |
| F-002 | Découverte des styles | Orientation |
| F-007 | Images de référence | Aide pédagogique |
| F-009 | Historique | Continuité simple |
| F-014 | Exercices de respiration | Calme |
| F-015 | Relaxation | Fin de séance |
| F-028 | Paramètres | Maîtrise |
| F-011 | Favoris | Confort V1, utile aussi en gratuit |
| F-039 | Compte utilisateur | Peut être gratuit (prérequis sync/export) |
| F-030 | Export utilisateur | Confiance / transparence |

> **ATTENTION**
>
> Ne pas verrouiller le parcours débutant critique (`F-003`, `F-013`, `F-032`) derrière un paywall précoce.

## 7. Valeur Premium

Le Premium doit apporter une **valeur réelle**, pas un déblocage artificiel du minimum vital.

### 7.1 Promesse Premium

Approfondir et personnaliser la pratique après que la confiance et la régularité de base ont été établies.

### 7.2 Familles de valeur Premium (concepts)

| Famille | Exemples `F-xxx` | Commentaire |
| --- | --- | --- |
| Accompagnement personnalisé | F-019, F-020, F-034 | Principalement V1/V2 |
| Programmes enrichis | F-035, F-025 | V2 |
| Continuité avancée | F-026, F-027 | Hors ligne riche / multi-appareils |
| Lecture d’activité enrichie | F-024 (niveau avancé), F-018 | Sans compétition |
| Expérience visuelle enrichie | F-023 (optionnelle) | V2, Mei hypothèse |
| Analyse prudente | F-021, F-022 | V2, jamais médicale |

### 7.3 Règle d’or Premium

Le produit reste **utilisable et progressif sans abonnement**.  
Le Premium accélère, approfondit ou confortabilise ; il ne rend pas le gratuit inutile.

## 8. Offre d'essai

### 8.1 Objectif de l’essai

Permettre de goûter une partie de la valeur Premium **après** avoir vécu la valeur gratuite, sans piège.

### 8.2 Principes

- L’essai n’est pas obligatoire pour progresser.
- L’essai est clairement daté et réversible conceptuellement.
- La fin d’essai ne retire pas le socle gratuit.
- Aucune rétention par obscurcissement des règles.

### 8.3 Contenu d’essai (concept, non figé)

Exemples possibles d’éléments essayables : une portion de `F-019` / `F-020`, un aperçu de `F-035`, un aperçu de `F-025`.

> **HYPOTHÈSE**
>
> Un essai après première semaine / premier mois convertit mieux qu’un paywall immédiat.

Durée, déclencheurs et périmètre exacts restent ouverts.

## 9. Segmentation des offres

### 9.1 Gratuit

Accès au cœur pédagogique et aux parcours de démarrage / régularité.

### 9.2 Premium

Accès élargi : personnalisation, programmes enrichis, continuité avancée, accompagnement IA plus riche, éventuels contenus complémentaires (`F-025`).

### 9.3 Évolutions futures éventuelles

Concepts non figés :

- offres thématiques (ex. programmes adaptés `F-035`) ;
- complémentarité écoles / professeurs (`F-040`, backlog) ;
- élargissement multi-disciplines (`F-037`, V3).

Aucun tarif n’est fixé. Aucune troisième offre n’est obligatoire.

## 10. Fonctionnalités par offre

Matrice officielle.  
Légende :

- **G** = Gratuit (dès que la fonction existe)
- **P** = Premium (valeur élargie)
- **G/P** = Socle gratuit possible + enrichissement Premium
- **O** = Ouvert / arbitrage futur
- **N** = Non monétisé directement (fondation ou backlog)

| ID | Nom | Offre | Commentaire |
| --- | --- | --- | --- |
| F-001 | Présentation du Tai Chi | G | Découverte |
| F-002 | Découverte des styles | G | Orientation |
| F-003 | Parcours débutant | G | Progression réelle obligatoire en gratuit |
| F-004 | Bibliothèque des mouvements | G/P | Socle G ; profondeur catalogue élargie possible en P via F-025 |
| F-005 | Explication détaillée | G | Pédagogie de base |
| F-006 | Vidéo pédagogique | G | Démonstration de base |
| F-007 | Images de référence | G | Aide visuelle |
| F-008 | Programme quotidien | G | Régularité |
| F-009 | Historique | G | Continuité simple |
| F-010 | Progression | G | Sans compétition |
| F-011 | Favoris | G | Confort |
| F-012 | Recherche | G/P | G de base ; filtres/profondeur O |
| F-013 | Séances guidées | G/P | Séances essentielles G ; volumes/programmes enrichis P |
| F-014 | Exercices de respiration | G | Calme |
| F-015 | Relaxation | G | Fin de séance |
| F-016 | Conseils de sécurité | G | Non monétisable |
| F-017 | Notifications | G | Opt-in, jamais purement commerciales |
| F-018 | Objectifs personnels | G/P | Objectifs simples G ; packs avancés O |
| F-019 | Assistant IA | G/P | Découverte limitée éventuelle G ; usage riche P |
| F-020 | Questions / Réponses | G/P | FAQ essentielle G ; profondeur P |
| F-021 | Analyse caméra | P | V2, optionnelle |
| F-022 | Corrections de posture | P | V2, liée à F-021 |
| F-023 | Professeurs virtuels | P | V2, optionnelle (Mei) |
| F-024 | Statistiques | G/P | Vue simple G ; lecture enrichie P |
| F-025 | Contenus Premium | P | Vecteur principal V2 |
| F-026 | Téléchargement hors ligne | P | Continuité avancée |
| F-027 | Sync multi-appareils | P | Continuité multi-appareils |
| F-028 | Paramètres | G | Maîtrise |
| F-029 | Accessibilité | G | Non monétisable |
| F-030 | Export utilisateur | G | Confiance |
| F-031 | Avertissements avant pratique | G | Non monétisable |
| F-032 | Reprise de séance | G | Anti-abandon |
| F-033 | Première découverte guidée | G | Activation |
| F-034 | Personnalisation avancée | P | V2 |
| F-035 | Programmes adaptés | P | V2 |
| F-036 | Moteur de coaching réutilisable | N | Fondation V3 |
| F-037 | Plusieurs disciplines douces | O | V3, packaging futur |
| F-038 | Méditation guidée élargie | O | Backlog |
| F-039 | Compte utilisateur | G | Prérequis possible de P, compte lui-même G |
| F-040 | Partenariats écoles / professeurs | O | Backlog |
| F-041 | Mode hors ligne partiel minimal | O | Backlog |

### 10.1 Matrice de synthèse par famille

| Famille | Gratuit | Premium |
| --- | --- | --- |
| Découverte & prudence | F-001, F-002, F-016, F-031, F-033 | — |
| Apprentissage cœur | F-003, F-004, F-005, F-006, F-007, F-013 | Profondeur via F-025 / F-035 |
| Régularité | F-008, F-009, F-010, F-032, F-014, F-015 | F-018 enrichi, F-024 enrichi |
| Confort & confiance | F-011, F-028, F-029, F-030, F-039, F-017 | F-026, F-027 |
| Accompagnement avancé | FAQ limitée F-020 | F-019, F-020 riche, F-034 |
| Vision / avatars | — | F-021, F-022, F-023 |

## 11. Fidélisation

La fidélisation repose sur :

- progression personnelle (`F-003`, `F-010`) ;
- qualité pédagogique (`F-005`, `F-006`) ;
- régularité (`F-008`, `F-032`) ;
- expérience agréable (calme, `F-014`, `F-015`, `F-029`).

Jamais sur :

- culpabilisation ;
- blocages artificiels ;
- dépendance psychologique ;
- compétition (`HP` hors périmètre déjà exclus).

Le Premium intervient comme **approfondissement choisi**, pas comme punition du gratuit.

## 12. Rétention

### 12.1 Leviers de rétention

| Horizon | Levier | Fonctions |
| --- | --- | --- |
| Jour 0–1 | Clarté + première séance | F-033, F-031, F-013, F-006 |
| Semaine 1 | Habitude douce | F-008, F-032, F-010 |
| Mois 1 | Progression & confiance | F-003, F-009, F-005 |
| Au-delà | Approfondissement volontaire | F-019, F-035, F-025, F-026, F-027 |

### 12.2 Ce qui ne doit pas servir la rétention

- notifications uniquement promotionnelles ;
- retrait soudain du socle gratuit ;
- messages de honte après inactivité ;
- dark patterns de renouvellement.

## 13. Éviter les frustrations artificielles

Interdits économiques explicites :

1. Couper une séance en cours pour vendre Premium.
2. Masquer la reprise (`F-032`) derrière un paywall.
3. Rendre illisibles les conseils de sécurité (`F-016`, `F-031`) hors Premium.
4. Limiter artificiellement la vitesse de lecture pédagogique pour pousser à l’achat.
5. Utiliser des streaks punitifs ou une gamification culpabilisante.
6. Faire croire qu’on ne peut pas progresser sans Premium.
7. Multiplying les pop-ups commerciaux pendant la pratique.

Méthode autorisée :

- montrer clairement un bénéfice Premium **après** une réussite gratuite ;
- proposer un essai compréhensible ;
- laisser l’utilisateur refuser sans dégrader le cœur pédagogique.

## 14. Éthique du modèle économique

Le modèle s’engage à :

- respecter le calme et la dignité des personas (surtout P-001 et P-005) ;
- ne jamais monétiser la peur (blessure, échec, culpabilité) ;
- ne jamais présenter le Premium comme exigence de sécurité ;
- aligner toute offre IA / caméra sur les garde-fous déjà décidés (non médical).

## 15. Limites volontaires

Limites figées du modèle :

- **pas de publicité invasive** (aligné `HP-008`) ;
- **pas de vente de données personnelles** ;
- **pas de manipulation psychologique** ;
- **pas de notifications destinées uniquement à vendre** (`F-017` reste utile et rare, D-028) ;
- **pas de réseau social / classements / compétition** comme levier business ;
- **pas de promesse médicale** monétisée ;
- **pas de NFT / crypto / paris**.

## 16. Hypothèses économiques

| ID | Hypothèse |
| --- | --- |
| H-B1 | Une progression gratuite réelle augmente la disposition à payer plus tard. |
| H-B2 | P-002 est le segment le plus susceptible de valoriser Premium pour gain de temps / personnalisation. |
| H-B3 | P-001 paie surtout pour confort, clarté et programmes adaptés, pas pour la performance. |
| H-B4 | P-003 convertit après avoir dépassé la peur de « mal faire » en gratuit. |
| H-B5 | P-004 valorise hors ligne / bibliothèque enrichie davantage que l’IA conversationnelle. |
| H-B6 | Un Premium introduit trop tôt (avant preuve MVP) nuit à la confiance. |
| H-B7 | `F-025` en V2 est un véhicule plus sain qu’un paywall MVP. |

## 17. Décisions ouvertes

Restent ouvertes :

- prix et devises ;
- durée d’abonnement / essai ;
- part exacte de `F-019` / `F-020` en gratuit vs Premium ;
- profondeur gratuite de la bibliothèque vs catalogue Premium (`F-004` / `F-025`) ;
- inclusion ou non de `F-021`–`F-023` dans le Premium de base ;
- éventuelle offre « famille / aidant » pour P-005 ;
- partenariats (`F-040`) ;
- indicateurs business chiffrés de conversion ;
- calendrier exact d’activation de l’offre payante.

## 18. Critères de validation

Le document pourra être considéré comme validé lorsque :

1. il est relu et accepté explicitement ;
2. le gratuit permet une progression réelle ;
3. le Premium apporte une valeur réelle sans rendre le produit inutilisable ;
4. aucune frustration artificielle n’est validée comme levier ;
5. les limites éthiques sont explicites ;
6. la matrice `F-xxx` → offres n’introduit aucune nouvelle fonctionnalité ;
7. aucun prix n’est indûment figé ;
8. les décisions D-035 à D-039 sont tracées ;
9. `docs/07_CONTENT_STRATEGY.md` peut s’y référer.

Statut actuel : **EN REVUE**.

## 19. Conclusion

Le modèle économique retenu conceptuellement est un **freemium éthique** :

- gratuit pour découvrir, progresser et faire confiance ;
- Premium pour approfondir, personnaliser et gagner en continuité ;
- jamais de monétisation par la peur, la culpabilité ou le blocage du cœur pédagogique.

Le MVP prouve d’abord l’utilité. La monétisation riche (`F-025` et enrichissements associés) s’inscrit surtout à partir des versions où la valeur avancée existe réellement.

Prochaine étape documentaire : `docs/07_CONTENT_STRATEGY.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/07_CONTENT_STRATEGY.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
