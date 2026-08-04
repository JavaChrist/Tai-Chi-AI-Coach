# 07 — Content Strategy

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Content Strategy |
| Numéro | 07 |
| Fichier | `docs/07_CONTENT_STRATEGY.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md`, `docs/06_BUSINESS_MODEL.md` |
| Documents utilisant celui-ci | `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md`, `docs/11_VIRTUAL_HUMANS.md`, `docs/12_UX_UI.md` |
| Décisions concernées | D-040 à D-045 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Référence officielle de la stratégie pédagogique et éditoriale.
> Ce document ne décrit pas les mouvements de Tai Chi ; il décrit la stratégie d’apprentissage.
> Style, nombre de mouvements et planning détaillé restent ouverts pour `docs/08_TAI_CHI_CURRICULUM.md`.
> Document conforme à `docs/99_DOCUMENTATION_STANDARD.md`.

## 2. Objectif

Définir la philosophie d’enseignement de Tai-Chi AI Coach et la manière dont l’application transmet les connaissances.

Le document répond notamment à :

- comment l’utilisateur apprend ;
- dans quel ordre ;
- à quel rythme ;
- sous quelle forme ;
- comment maintenir sa motivation ;
- quand expliquer ;
- quand simplement pratiquer ;
- comment éviter la surcharge cognitive.

## 3. Philosophie pédagogique

Le produit doit enseigner comme un excellent professeur :

- progressivement ;
- patiemment ;
- simplement.

Il ne doit jamais se comporter comme une plateforme de consommation rapide de vidéos.

Principes fondateurs :

1. L’utilisateur est au centre ; le contenu sert sa pratique, pas l’inverse.
2. Une notion principale à la fois.
3. Comprendre juste assez pour oser pratiquer.
4. Répéter sans honte.
5. Progresser sans compétition.
6. Rester prudent sans anxiété.
7. Distinguer clairement bien-être / pratique et discours médical.

> **IMPORTANT**
>
> Les contenus Tai Chi doivent être validés par des personnes compétentes (D-011).
> L’IA ne doit pas inventer une technique.

## 4. Principes d'apprentissage

1. **Du simple au composé** — geste isolé avant enchaînement.
2. **Voir → comprendre → essayer → répéter → enchaîner.**
3. **Pratique avant théorie abondante.**
4. **Rythme maîtrisé par l’utilisateur** — pause, reprise, relecture autorisées.
5. **Charge cognitive faible** — peu d’éléments simultanés.
6. **Feedback non jugeant.**
7. **Continuité** — toujours une prochaine étape claire (`F-003`, `F-010`).
8. **Sécurité éditoriale** — prudence visible (`F-016`, `F-031`) sans dramatiser.
9. **Accessibilité du langage** — digne, non infantilisant (surtout P-001).
10. **Silence utile** — laisser de l’espace pour pratiquer.

## 5. Progression générale

Ordre pédagogique de référence :

```text
Découverte
  → premiers repères et confiance
Débutant
  → gestes fondateurs et premières séances courtes
Progression
  → enrichissement contrôlé et enchaînements simples
Consolidation
  → fluidité, mémoire gestuelle, autonomie croissante
Maîtrise
  → raffinement, stabilité de pratique, approfondissement
```

Règles :

- on n’avance pas en sautant les fondations ;
- on peut rester longtemps sur un niveau sans échec moral ;
- la reprise après pause ne culpabilise jamais (`F-032`) ;
- le détail mouvement par mouvement appartient à `docs/08_TAI_CHI_CURRICULUM.md`.

## 6. Découpage des contenus

Niveaux officiels (sans nombre exact de leçons) :

| Niveau | Intention | Expérience utilisateur |
| --- | --- | --- |
| **Découverte** | Comprendre le cadre, oser commencer | `F-001`, `F-033`, prudence |
| **Débutant** | Acquérir les bases en sécurité | `F-003`, `F-013`, `F-005`, `F-006` |
| **Progression** | Relier les acquis | Séances un peu plus riches, révisions |
| **Consolidation** | Stabiliser la mémoire et le calme | Révisions ciblées, autonomie |
| **Maîtrise** | Affiner et maintenir | Approfondissement, éventuels programmes adaptés |

> **HYPOTHÈSE**
>
> La majorité de la valeur MVP se situe dans Découverte + Débutant + début de Progression.

## 7. Types de contenus

| Type | Rôle | Quand l’utiliser |
| --- | --- | --- |
| **Texte** | Expliquer, cadrer, rassurer | Avant un geste nouveau ; points d’attention ; prudence |
| **Image** | Repère statique | Positions clés ; mémoire visuelle (`F-007`) |
| **Illustration** | Clarifier une idée abstraite | Transfert de poids, orientation, schéma simple |
| **Vidéo** | Démontrer le mouvement vivant | Apprentissage et révision (`F-006`) |
| **Animation** | Mettre en évidence un détail | Uniquement si elle réduit la confusion |
| **Audio** | Guider sans surcharger l’écran | Respiration, encouragement bref, guide éventuel |
| **Respiration** | Entrer dans le calme | Début / transition de séance (`F-014`) |
| **Pratique libre** | Laisser l’utilisateur s’approprier | Après une démonstration claire |
| **Rappel** | Relancer sans pression | Intentions douces ; notifications V1 opt-in (`F-017`) |
| **Quiz éventuel** | Vérifier une compréhension simple | Rare, non noté, jamais punitif |
| **Révision** | Consolider | Retour volontaire sur un geste (`F-004`, favoris V1) |

Règle : préférer **démonstration + essai** à un long discours.

## 8. Taille idéale des contenus

Recommandations (aucun chiffre définitif) :

- **texte court** — une intention claire par bloc ;
- **vidéos courtes** — un geste ou un micro-enchaînement à la fois ;
- **une notion principale par leçon** ;
- **éviter la surcharge** — pas de multiples messages concurrents ;
- **séances compatibles avec 10–20 minutes** pour P-002, sans interdire plus lent pour P-001 / P-003.

> **NOTE**
>
> Les durées exactes seront arbitrées avec le curriculum et l’UX, sans figer ici de métriques.

## 9. Rôle de Mei

Mei est envisagée comme **guide officielle** (D-026, D-031), sans titre de maître diplômé.

### 9.1 Elle peut

- accueillir ;
- expliquer ;
- encourager ;
- féliciter ;
- rassurer ;
- donner l’impression d’accompagner un cours réel, avec discrétion.

### 9.2 Elle ne doit pas

- parler en permanence ;
- interrompre la pratique ;
- monopoliser l’écran ;
- infantiliser ;
- se substituer à l’utilisateur ;
- créer une dépendance bloquante au produit (Virtual Humans Studio non obligatoire).

### 9.3 Présence pédagogique

- Discrète.
- Au service de la clarté.
- L’utilisateur reste au centre.
- Intégration exacte (MVP vs V2 via `F-023`) reste ouverte.

## 10. Place de l'IA

`F-019` / `F-020` : prévues pour V1, absentes du MVP.

### 10.1 Quand elle intervient

- après une séance, sur demande ;
- pour reformuler une explication ;
- pour proposer une révision ;
- pour encourager sans juger ;
- pour clarifier « quoi faire ensuite » dans le parcours.

### 10.2 Quand elle reste silencieuse

- pendant la pratique concentrée ;
- pendant la lecture des avertissements de prudence ;
- lorsqu’aucune question n’est posée ;
- dès qu’elle ajouterait de la charge cognitive.

### 10.3 Quand elle propose une aide

- blocage répété sur un même geste ;
- reprise après longue pause ;
- demande explicite de l’utilisateur.

### 10.4 Interdits IA éditoriaux

- diagnostic ;
- interprétation pathologique d’une douleur ;
- invention de technique hors contenu maîtrisé ;
- ton autoritaire ou culpabilisant.

## 11. Place du silence

L’application doit parfois **ne rien ajouter**.

Moments de silence utiles :

- essai d’un mouvement ;
- respiration ;
- enchaînement en cours ;
- fin de séance calme ;
- pause volontaire de l’utilisateur.

Le silence n’est pas un vide produit : c’est un espace pédagogique.

## 12. Répétition

Philosophie de révision :

- répéter est normal et valorisé ;
- aucune pénalité pour revoir un geste simple ;
- la bibliothèque (`F-004`) et les favoris (`F-011`, V1) servent la mémoire gestuelle ;
- mieux vaut un geste bien repris qu’une accumulation précipitée ;
- les révisions peuvent être suggérées, jamais imposées comme punition.

## 13. Progression

Principes :

1. Critères de passage pédagogiques, pas de scores sociaux.
2. La progression est visible (`F-010`) et rassurante.
3. On peut ralentir sans « perdre ».
4. Les enchaînements viennent après la stabilité des bases.
5. La maîtrise n’est jamais présentée comme perfection corporelle garantie.

## 14. Motivation

### 14.1 Leviers autorisés

- sentiment de progression ;
- clarté de la prochaine étape ;
- plaisir de la pratique calme ;
- encouragement sobre ;
- réussite de petites séances ;
- reprise facile après interruption.

### 14.2 Leviers interdits

- compétition ;
- culpabilisation ;
- peur de l’échec ;
- sanctions ;
- classements ;
- marketing agressif pendant l’apprentissage.

Aligné avec D-028, D-029, D-039.

## 15. Feedback

Ton du feedback : toujours

- positif ;
- rassurant ;
- constructif.

Formulations recherchées :

- ce qui est déjà bien ;
- un seul point d’amélioration à la fois ;
- invitation à réessayer sans jugement.

Formulations à éviter :

- « tu as mal fait » ;
- « encore raté » ;
- comparaisons entre utilisateurs ;
- urgences artificielles.

## 16. Gestion des erreurs

Corriger un utilisateur consiste à :

1. reconnaître l’effort ;
2. isoler une seule erreur fréquente non médicale ;
3. montrer à nouveau le détail (`F-006` / `F-007`) ;
4. inviter à une répétition courte ;
5. s’arrêter si douleur et rappeler la prudence.

En V2, les corrections caméra (`F-021`, `F-022`) restent prudentes, faillibles et non cliniques.

## 17. Gestion des pauses

### 17.1 Encourager une pause

- sensation de fatigue exprimée ou perceptible dans le rythme ;
- confusion croissante ;
- séance trop longue pour le moment disponible ;
- besoin de digérer un geste nouveau.

### 17.2 Proposer de revenir plus tard

- après une première réussite ;
- quand la prochaine étape est clairement mémorisable ;
- jamais sous forme d’ultimatum.

La pause est une compétence pédagogique, pas un échec.

## 18. Gestion de la fatigue

Sans aspect médical :

- préférer des séances courtes et terminables ;
- rappeler qu’il est possible de s’arrêter ;
- éviter d’enchaîner trop de nouveautés d’affilée ;
- conclure par du calme (`F-015`) plutôt que par une surcharge ;
- ne jamais interpréter la fatigue comme pathologie.

## 19. Accessibilité éditoriale

| Dimension | Règle |
| --- | --- |
| Vocabulaire | Simple, précis, digne ; jargon expliqué si indispensable |
| Lisibilité | Phrases courtes ; une idée par paragraphe / bloc |
| Longueur | Minimum utile ; développer seulement si cela aide la pratique |
| Simplicité | Une action demandée à la fois |
| Dignité | Jamais infantilisant (P-001, P-005) |
| Prudence | Limites claires, non anxiogènes |

Détail d’interface dans `docs/12_UX_UI.md` ; ici uniquement la stratégie éditoriale.

## 20. Localisation

Prévoir dès la conception éditoriale :

- **traduction future** possible sans réécriture totale de la pédagogie ;
- **neutralité culturelle** : éviter les références exclusives inutiles ;
- **adaptation linguistique** : expressions naturelles, pas de calques rigides.

Les langues supportées ne sont pas détaillées ici.

## 21. Ton éditorial

Ton officiel :

| Qualité | Application |
| --- | --- |
| Calme | Rythme, formulations, absence d’urgence artificielle |
| Respectueux | Dignité de tous les personas |
| Encourageant | Soutien sans flatterie creuse |
| Professionnel | Sérieux pédagogique, contenus maîtrisés |
| Jamais autoritaire | Pas d’injonction humiliante ni de ton punitif |

Le ton reste cohérent entre texte, Mei, IA, notifications et feedback.

## 22. Contenus Premium

Philosophie (détail commercial dans `docs/06_BUSINESS_MODEL.md`) :

- le Premium **approfondit** : programmes enrichis, accompagnement plus personnalisé, continuité avancée ;
- il ne retire pas le droit d’apprendre les bases ;
- il ne monétise pas la peur ni la sécurité ;
- les contenus Premium suivent les mêmes exigences de qualité, prudence et validation experte que le gratuit.

`F-025`, `F-034`, `F-035` et enrichissements associés restent des véhicules possibles, sans détail de catalogue ici.

## 23. Qualité éditoriale

Un contenu n’est publiable conceptuellement que s’il satisfait :

1. exactitude pédagogique validée par des personnes compétentes ;
2. clarté pour un débutant ;
3. absence de promesse médicale ;
4. une intention d’apprentissage unique identifiable ;
5. cohérence avec le ton officiel ;
6. praticabilité (l’utilisateur peut agir après lecture/visionnage) ;
7. accessibilité linguistique de base ;
8. respect des personas cœurs de cible ;
9. compatibilité avec reprise / répétition ;
10. pas de surcharge inutile.

## 24. Contenus interdits

Sont interdits notamment :

- promesses médicales ;
- diagnostic, traitement, guérison, prévention garantie ;
- discours culpabilisant ;
- marketing agressif dans les leçons ;
- contenu anxiogène ;
- pseudo-science ;
- contenus non validés techniquement ;
- compétition / classements / humiliation ;
- infantilisation ;
- injonctions à ignorer une douleur ;
- invention de technique par automatisation non contrôlée.

## 25. Hypothèses

| ID | Hypothèse |
| --- | --- |
| H-C1 | Une notion par leçon augmente la rétention chez P-001 / P-003. |
| H-C2 | Les séances courtes convertissent mieux P-002 que les modules longs. |
| H-C3 | Le silence pendant la pratique augmente la sensation de cours réel. |
| H-C4 | Mei rassure si elle est rare et claire, et gêne si elle parle trop. |
| H-C5 | La répétition valorisée réduit l’abandon lié à la peur de mal faire. |
| H-C6 | Un feedback unique par correction suffit au débutant. |

## 26. Décisions ouvertes

- style(s) et forme(s) Tai Chi ;
- nombre de mouvements et découpage exact des leçons ;
- durées cibles chiffrées des vidéos / textes ;
- place exacte des quiz ;
- intensité et calendrier de Mei ;
- langues prioritaires ;
- profondeur théorique autorisée par niveau ;
- formats Premium éditoriaux détaillés.

Ces points relèvent surtout de `docs/08_TAI_CHI_CURRICULUM.md`, `docs/11_VIRTUAL_HUMANS.md` et `docs/12_UX_UI.md`.

## 27. Critères de validation

Le document pourra être considéré comme validé lorsque :

1. il est relu et accepté explicitement ;
2. la philosophie pédagogique est claire et actionnable ;
3. les cinq niveaux de découpage sont stables ;
4. les types de contenus ont un rôle défini ;
5. Mei, IA, silence et feedback sont cadrés ;
6. les contenus interdits sont explicites ;
7. aucune leçon mouvement par mouvement n’a été indûment figée ici ;
8. les décisions D-040 à D-045 sont tracées ;
9. `docs/08_TAI_CHI_CURRICULUM.md` peut s’y appuyer sans ambiguïté majeure.

Statut actuel : **EN REVUE**.

## 28. Conclusion

Tai-Chi AI Coach enseigne progressivement, patiemment et simplement.

La stratégie de contenu privilégie la pratique guidée, la répétition digne, le silence utile, un ton calme et un feedback constructif. Mei et l’IA accompagnent sans envahir. Aucun contenu médical, culpabilisant ou non validé n’a sa place.

Le détail des mouvements et du curriculum appartient au document suivant.

Prochaine étape documentaire : `docs/08_TAI_CHI_CURRICULUM.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/08_TAI_CHI_CURRICULUM.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
