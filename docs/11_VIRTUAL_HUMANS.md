# 11 — Virtual Humans

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Virtual Humans |
| Numéro | 11 |
| Fichier | `docs/11_VIRTUAL_HUMANS.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md`, `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md`, `docs/10_COMPUTER_VISION.md` |
| Documents utilisant celui-ci | `docs/12_UX_UI.md`, `docs/22_ROADMAP.md` |
| Décisions concernées | D-061 à D-065 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Référence officielle fonctionnelle et pédagogique des professeurs virtuels (`F-023`, prévu pour V2, hors MVP).
> Aucune technologie, pipeline, asset graphique détaillé ni dépendance bloquante à un fournisseur.
> Mei est la guide envisagée (D-026). Document conforme à `docs/99_DOCUMENTATION_STANDARD.md`.

## 2. Objectif

Définir le rôle des Virtual Humans : pourquoi les utiliser, quelle valeur pédagogique, quand ils apparaissent ou s’effacent, comment ils accompagnent et comment ils laissent pratiquer.

Ce document reste exclusivement fonctionnel et pédagogique.

## 3. Philosophie générale

Le professeur virtuel doit se comporter comme un excellent enseignant :

- il montre ;
- il accompagne ;
- il rassure ;
- puis il s’efface.

L’utilisateur reste toujours au centre de l’expérience.

Principes fondateurs :

1. **Guide, jamais autorité sacrée.**
2. **Présence discrète > spectacle permanent.**
3. **Démonstration utile > théâtralité.**
4. **Optionnel pour le fonctionnement du produit** (D-010).
5. **Complémentaire à l’IA, non substitut** (D-054).
6. **Transparence** : ne jamais faire croire qu’il s’agit d’une personne réelle présente.
7. **Cohérence** avec calme, dignité et non-médical.

## 4. Pourquoi utiliser un professeur virtuel

| Motif | Valeur recherchée |
| --- | --- |
| Humaniser la démonstration | Sensation d’accompagnement de cours |
| Clarifier un geste | Voir avant d’imiter |
| Réduire la solitude perçue | Soutien discret, surtout P-001 / P-003 |
| Rythmer une leçon | Accueil, démo, encouragement, clôture |
| Enrichir sans dépendre de la caméra | Aide visuelle non certificatrice |

Un professeur virtuel n’est **pas** requis pour apprendre en MVP / V1 via vidéo pédagogique (`F-006`) et parcours (`F-003`).

## 5. Valeur pédagogique

Valeur attendue :

- meilleure compréhension visuelle d’une intention de geste ;
- encouragement sobre aux moments clés ;
- continuité perçue d’un « fil de cours » ;
- réduction de la charge cognitive si la démo est claire et courte ;
- sentiment de présence sans pression sociale.

Valeur non attendue / interdite :

- certification de posture ;
- diagnostic ;
- remplacement d’un professeur humain ;
- dépendance obligatoire au produit.

## 6. Place dans l'expérience utilisateur

| Moment | Place typique |
| --- | --- |
| Première découverte | Accueil bref possible (si intégrée) |
| Leçon | Démonstration / explication courte |
| Séance | Entrée, démo ciblée, encouragement, clôture |
| Pratique libre | Absente ou très en retrait |
| Révision | Démonstration rejouable |
| Caméra (V2) | Encourage / explique, **ne valide pas** (D-059) |
| Parcours P-004 | Souvent secondaire (accès bibliothèque prioritaire) |

Fonctionnalité : `F-023` — Professeurs virtuels (V2).

## 7. Mei

Mei est la **guide officielle envisagée** de Tai-Chi AI Coach.

### 7.1 Rôle principal

Guider l’utilisateur avec calme : montrer, éclairer, encourager, puis laisser pratiquer.

### 7.2 Attitude

- digne ;
- bienveillante ;
- non condescendante ;
- non théâtrale ;
- centrée sur l’utilisateur.

### 7.3 Posture pédagogique

- une intention à la fois ;
- progression alignée sur le cursus ;
- patience face à la répétition ;
- jamais de jugement.

### 7.4 Ton

Calme, respectueux, encourageant, professionnel — jamais autoritaire (D-042).

### 7.5 Rythme

Lent et posé. Pauses. Silence pendant la pratique de l’utilisateur.

### 7.6 Place dans les séances

Présente aux moments utiles (accueil, démo, encouragement, fin) ; effacée pendant l’essai libre.

### 7.7 Ce qu’elle n’est jamais

Mei n’est **jamais** présentée comme :

- maître officiel ;
- médecin ;
- experte certifiée / diplômée ;
- substitut à un professionnel de santé ;
- juge de posture parfait.

Mei est **toujours** une **guide**.

## 8. Rôle de Mei

### 8.1 Elle peut

- accueillir ;
- expliquer ;
- montrer ;
- encourager ;
- féliciter (sobriété) ;
- conclure.

### 8.2 Elle ne doit pas

- parler sans arrêt ;
- interrompre la pratique ;
- monopoliser l’écran ;
- remplacer l’IA ;
- valider une posture caméra ;
- culpabiliser ;
- vendre de manière intrusive pendant la leçon ;
- inventer une technique hors contenu validé.

## 9. Relation Mei / IA

```text
Mei
  ↓
Guide (présence / démonstration / encouragement)

IA
  ↓
Coach conversationnel (clarification / Q-R / révision suggérée)
```

Ils sont **complémentaires** :

| Besoin | Acteur préféré |
| --- | --- |
| Voir un geste | Mei / démonstration |
| Comprendre une question ouverte | IA |
| Encouragement bref de séance | Mei |
| Reformulation après blocage | IA |
| Silence de pratique | Les deux s’effacent |

Règle : l’IA complète Mei ; elle ne la remplace pas (D-054).  
Mei ne devient pas un chatbot permanent.

## 10. Présence

### 10.1 Quand Mei apparaît

- accueil de leçon / séance ;
- démonstration d’un geste ou micro-enchaînement ;
- encouragement court après un essai ;
- clôture calme ;
- moments de doute pédagogique simple (explication courte).

### 10.2 Quand elle disparaît

- pratique libre de l’utilisateur ;
- navigation utilitaire (paramètres, bibliothèque ciblée) ;
- lorsqu’elle n’ajoute pas de clarté ;
- sur préférence utilisateur « mode discret / sans guide » ;
- pendant une analyse caméra si sa présence distrait (elle peut revenir après).

### 10.3 Quand elle reste silencieuse

- essai en cours ;
- respiration / retour au calme ;
- lecture des avertissements de prudence (texte prioritaire) ;
- dès que parler ajouterait de la charge cognitive.

## 11. Communication non verbale

Principes (sans détail d’animation technique) :

- sourire léger ;
- calme ;
- mouvements fluides ;
- regard naturel ;
- aucune gestuelle théâtrale ;
- aucune caricature ;
- aucune infantilisation visuelle.

## 12. Ton de voix

Principes :

- calme ;
- posé ;
- rassurant ;
- naturel ;
- jamais autoritaire ;
- jamais culpabilisant ;
- jamais précipité.

La voix sert la pédagogie, pas le spectacle.

## 13. Progression

Mei accompagne les phases du cursus sans changer de personnalité :

| Phase | Accompagnement Mei |
| --- | --- |
| Découverte | Accueil, rassurance, première démo très simple |
| Initiation | Démonstrations fondatrices, encouragements sobres |
| Progression | Démos de liaison, moins d’explications verbales |
| Consolidation | Présence réduite ; révisions sur demande |
| Autonomie | Quasi effacement ; rappel occasionnel si utile |

```text
Découverte → Initiation → Progression → Consolidation → Autonomie
(présence utile décroissante, autonomie croissante)
```

## 14. Personnalisation

Principes uniquement :

- intensité de présence réglable (plus / moins de guide) ;
- possibilité de pratiquer sans professeur virtuel ;
- adaptation du rythme de démonstration au besoin de clarté, pas à une performance ;
- pas de profilage culpabilisant (« tu n’as pas vu Mei depuis 3 jours ») ;
- détail d’implémentation hors scope.

## 15. Place pendant la pratique

Section précise :

| Situation | Comportement |
| --- | --- |
| Elle parle | Accueil, consigne courte, encouragement, clôture |
| Elle regarde / reste en retrait visible | Transition brève, si cela rassure sans distraire |
| Elle démontre | Avant l’essai ; éventuellement un rappel unique |
| Elle laisse pratiquer seul | Pendant pratique guidée lente et pratique libre : silence et effacement |

Règle d’or de séance :

```text
Montrer → laisser faire → encourager brièvement si besoin → s’effacer
```

## 16. Place dans les contenus Premium

Principes (alignés `docs/06_BUSINESS_MODEL.md`) :

- des démonstrations enrichies ou guides additionnels peuvent entrer dans une offre élargie ;
- le cœur pédagogique ne doit pas dépendre exclusivement d’un avatar Premium pour être praticable ;
- la prudence et les bases restent accessibles sans professeur virtuel ;
- aucun paywall sur la sécurité.

## 17. Limites

Un professeur virtuel ne doit jamais :

- se présenter comme personne réelle en live ;
- se présenter comme maître diplômé / médecin ;
- certifier une posture ou un résultat ;
- diagnostiquer ;
- humilier ou infantiliser ;
- monopoliser l’écran pendant la pratique ;
- rendre le produit inutilisable s’il est absent ;
- dépendre d’un fournisseur unique comme condition de fonctionnement (D-010) ;
- pousser une vente pendant l’apprentissage.

## 18. Éthique

Toujours :

- **transparence** sur la nature virtuelle du guide ;
- respect de la dignité des utilisateurs ;
- cohérence avec le non-médical ;
- optionnalité réelle.

Jamais :

- faire croire qu’il s’agit d’une personne réelle présente ;
- créer une relation de dépendance émotionnelle manipulatoire ;
- exploiter l’apparence du guide pour de la peur ou de la culpabilité ;
- dissimuler qu’il s’agit d’une couche de présentation.

## 19. Évolutions futures

Prévoir sans rien figer :

- autres guides (styles de présence différents) ;
- déclinaisons Qi Gong ;
- respiration ;
- mobilité ;
- éventuelle cohérence avec le moteur multi-disciplines (`F-036`, `F-037`).

Ces évolutions restent ouvertes et non planifiées ici.

## 20. Hypothèses

| ID | Hypothèse |
| --- | --- |
| H-M1 | Mei augmente la réassurance si elle est rare et claire. |
| H-M2 | Une présence trop fréquente réduit la sensation de pratique réelle. |
| H-M3 | Beaucoup d’utilisateurs progresseront sans jamais activer F-023. |
| H-M4 | P-001 valorise dignité et calme plus que réalisme spectaculaire. |
| H-M5 | P-004 utilise surtout la démo courte, pas l’accueil narratif. |

## 21. Décisions ouvertes

- présence éventuelle d’une forme allégée avant V2 ;
- apparence / tenue exacte de Mei ;
- voix exacte et langues ;
- intensité par défaut selon persona ;
- catalogue d’autres guides ;
- place précise dans le Premium ;
- tests utilisateurs de présence / distraction ;
- choix d’outils de production (hors ce document).

## 22. Critères de validation

1. Document relu et accepté explicitement.
2. Mei définie comme guide, jamais maître / médecin / experte certifiée.
3. Complémentarité Mei ↔ IA explicite.
4. Présence / silence / effacement cadrés.
5. Éthique de transparence affirmée.
6. Optionnalité et non-dépendance fournisseur rappelées.
7. Aucune technologie imposée.
8. Décisions D-061 à D-065 tracées.
9. `docs/12_UX_UI.md` peut s’y appuyer pour l’expérience de présence.

Statut actuel : **EN REVUE**.

## 23. Conclusion

Les professeurs virtuels de Tai-Chi AI Coach, avec Mei comme guide envisagée, servent à montrer, accompagner et rassurer — puis à s’effacer. Ils enrichissent l’expérience en V2 sans conditionner l’apprentissage de base, sans certifier les postures, et sans jamais se faire passer pour une personne réelle ou une autorité médicale.

L’utilisateur reste au centre. Mei guide. L’IA clarifie. La pratique se fait dans le silence utile.

Prochaine étape documentaire : `docs/12_UX_UI.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/12_UX_UI.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
