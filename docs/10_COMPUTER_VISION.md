# 10 — Computer Vision

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Computer Vision |
| Numéro | 10 |
| Fichier | `docs/10_COMPUTER_VISION.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md`, `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md` |
| Documents utilisant celui-ci | `docs/11_VIRTUAL_HUMANS.md`, `docs/12_UX_UI.md`, `docs/17_PRIVACY_RGPD.md` |
| Décisions concernées | D-056 à D-060 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Référence officielle fonctionnelle de la vision par ordinateur (`F-021`, `F-022`, prévues pour V2, hors MVP).
> Aucune technologie, framework, modèle, fournisseur, API ni implémentation.
> Document conforme à `docs/99_DOCUMENTATION_STANDARD.md`.

## 2. Objectif

Définir le rôle fonctionnel de la caméra : pourquoi l’utiliser, quand l’utiliser ou non, ce qu’elle peut observer, ses limites et les précautions associées.

Ce document décrit uniquement le comportement produit attendu, pas la manière de le construire.

## 3. Rôle de la vision par ordinateur

La caméra est un **outil d’aide** à la pratique.

Elle :

- propose des indications prudentes d’écart par rapport à une référence ;
- peut soutenir l’apprentissage après que le parcours de base a prouvé sa valeur ;
- reste **optionnelle**.

Elle n’est **jamais une autorité**.

Elle propose.  
Elle ne certifie pas.

Fonctionnalités concernées :

- `F-021` — Analyse caméra (V2)
- `F-022` — Corrections de posture (V2, dépend de `F-021`)

## 4. Pourquoi utiliser la caméra

Objectifs fonctionnels possibles :

| Objectif | Intérêt utilisateur |
| --- | --- |
| Observer certains écarts simples | Prendre conscience d’un détail |
| Comparer à une démonstration de référence | Soutenir la mémorisation |
| Compléter l’explication textuelle / vidéo | Enrichir le feedback |
| Encourager une reprise ciblée | Réviser un point précis |

La caméra n’est pas nécessaire pour découvrir, progresser et pratiquer en MVP / V1.

## 5. Quand utiliser la caméra

Usage pertinent lorsque :

- l’utilisateur le demande ou l’active explicitement ;
- le consentement est donné ;
- l’environnement permet une observation raisonnable ;
- l’utilisateur a déjà compris le geste via démonstration (`F-006`) et explication (`F-005`) ;
- une indication simple peut aider sans créer d’anxiété ;
- on est en phase d’enrichissement (V2), pas de dépendance au démarrage.

Personas les plus susceptibles d’y trouver un intérêt secondaire : P-002, P-003, P-004.  
P-001 et P-005 : prudence accrue ; jamais d’obligation.

## 6. Quand ne pas utiliser la caméra

Ne pas utiliser / ne pas pousser la caméra lorsque :

- l’utilisateur refuse ou retire son consentement ;
- l’espace, la lumière ou l’angle rendent l’observation peu fiable ;
- l’utilisateur exprime une douleur ou un malaise ;
- la demande est médicale (« dis-moi ce que j’ai ») ;
- l’utilisateur est en découverte initiale et a besoin de calme, pas de feedback technique ;
- la caméra créerait de la pression, de la honte ou de la distraction ;
- le produit est encore en MVP / V1 (fonction hors périmètre de ces versions).

## 7. Ce que la caméra peut observer

Notions générales uniquement — **sans précision absolue promise** :

| Notion | Description prudente |
| --- | --- |
| Posture globale | Impression d’ensemble relative à une référence |
| Orientation | Sens approximatif du corps / du visage dans le cadre |
| Équilibre apparent | Indices visuels grossiers, non cliniques |
| Déplacement | Mouvement visible dans l’espace de prise de vue |
| Rythme | Impression de vitesse relative par rapport à une démo |

> **ATTENTION**
>
> Toute observation est conditionnelle à l’environnement, à la morphologie, aux vêtements, à l’angle et à la lumière. Les faux positifs sont possibles.

## 8. Ce que la caméra ne peut pas garantir

La caméra ne garantit jamais :

- la qualité parfaite des mouvements ;
- l’absence de blessure ;
- un diagnostic ;
- une correction parfaite ;
- la compréhension du ressenti de l’utilisateur ;
- une vérité biomécanique ;
- l’équité de jugement entre toutes les morphologies ;
- un résultat médical ou thérapeutique.

## 9. Conditions d'utilisation

Principes (sans valeurs techniques) :

| Condition | Intention |
| --- | --- |
| Espace suffisant | L’utilisateur peut bouger sans danger immédiat évident |
| Visibilité | Le corps utile à l’exercice est raisonnablement dans le cadre |
| Éclairage | La scène est assez lisible pour une observation grossière |
| Tenue adaptée | Les vêtements ne rendent pas l’observation absurde |
| Angle raisonnable | La caméra n’est pas placée de façon extrême |

Si ces conditions ne sont pas réunies : mieux vaut désactiver l’analyse et revenir à la démonstration guidée.

## 10. Gestion des erreurs

Si la caméra « ne comprend pas » :

1. le dire clairement à l’utilisateur ;
2. ne pas inventer une correction ;
3. proposer de réessayer après ajustement d’espace / angle / lumière ;
4. ou proposer de continuer **sans** caméra (démonstration, explication, révision) ;
5. ne jamais blâmer l’utilisateur.

## 11. Gestion de l'incertitude

L’application doit reconnaître lorsqu’elle n’est pas certaine.

Règles :

- en cas de faible confiance perçue / conditions médiocres : s’abstenir de corriger ;
- formuler les retours au conditionnel prudent (« il semble que… », « tu peux vérifier… ») ;
- préférer une absence de feedback à un faux positif culpabilisant ;
- une seule suggestion à la fois si un écart simple paraît plausible ;
- rappeler que l’utilisateur reste juge de son ressenti ;
- en cas de doute durable : revenir au parcours pédagogique classique.

L’incertitude est une qualité produit, pas un échec.

## 12. Confidentialité

Principes :

- minimiser ce qui est capté et conservé ;
- ne pas détourner les images à des fins non liées à l’aide à la pratique ;
- ne pas vendre les données issues de la caméra ;
- informer clairement l’usage prévu ;
- permettre le contrôle utilisateur (activer / désactiver) ;
- détail légal dans `docs/17_PRIVACY_RGPD.md`.

Aucun détail technique de stockage ici.

## 13. Consentement

Principes :

- la caméra est **toujours volontaire** ;
- consentement explicite avant analyse (`HP-013` hors périmètre : caméra sans consentement) ;
- retrait possible à tout moment ;
- refus = expérience complète possible via les autres modes d’apprentissage ;
- pas de dark pattern pour forcer l’activation.

## 14. Place de l'IA

Chaîne fonctionnelle de référence :

```text
Caméra
  ↓
IA (interprétation prudente / formulation)
  ↓
Utilisateur
```

Règles :

- la caméra fournit des indices ; l’IA les traduit en langage calme et limité ;
- l’IA applique les interdits de `docs/09_AI_COACH.md` (pas de diagnostic, pas d’humiliation) ;
- l’utilisateur reste décisionnaire ;
- aucune correction caméra ne contourne les garde-fous IA.

## 15. Place de Mei

Mei peut :

- expliquer le principe d’un exercice ;
- encourager avant / après une tentative ;
- rappeler de pratiquer sans pression.

Mei **ne valide jamais** une posture.

Elle ne dit pas « c’est correct » au nom de la caméra.  
Elle reste une guide, pas un certificateur.

## 16. Feedback utilisateur

Le feedback issu de la caméra doit toujours être :

- prudent ;
- nuancé ;
- encourageant ;
- explicatif.

Jamais catégorique (« faux », « dangereux », « pathologique », « parfait à 100 % »).

Préférer :

> « Essaie de … Un peu plus lentement. Puis refais une fois. »

plutôt que :

> « Tu es mal positionné. »

## 17. Cas où la caméra doit s'arrêter

La caméra / l’analyse doit s’arrêter notamment si :

- l’utilisateur retire son consentement ;
- l’utilisateur demande l’arrêt ;
- une douleur ou un malaise est signalé ;
- les conditions de prise de vue deviennent inutilisables ;
- l’incertitude est trop élevée pour proposer quoi que ce soit d’utile ;
- une demande médicale explicite apparaît ;
- une erreur répétée de détection crée de la confusion ;
- l’utilisateur quitte la séance.

## 18. Cas où la caméra ne doit pas démarrer

Ne pas démarrer l’analyse si :

- aucun consentement explicite ;
- l’utilisateur est encore dans un onboarding de prudence non compris ;
- le mode « sans caméra » est choisi ;
- l’environnement est manifestement inadapté et l’utilisateur n’a pas été informé des limites ;
- la fonction n’est pas disponible dans la version courante (MVP / V1) ;
- le but déclaré est un diagnostic ou une évaluation médicale.

## 19. Limites éthiques

Interdits explicites :

| Interdit | Raison |
| --- | --- |
| Surveillance permanente | Contraire à la confiance et au calme |
| Notation des personnes | Compétition / humiliation |
| Classement | Hors vision (`HP-002`, `HP-003`) |
| Détection médicale | Hors périmètre (`HP-004`, `HP-012`) |
| Reconnaissance d’identité à des fins non nécessaires | Risque privacy disproportionné |
| Exploitation commerciale des images | Contraire à D-038 / confiance |
| Caméra sans consentement | `HP-013` |
| Pression à activer la caméra pour « bien progresser » | Frustration artificielle / culpabilisation |

## 20. Limites pédagogiques

- La caméra ne remplace pas la démonstration ni l’explication.
- Elle ne doit pas intervenir avant que l’utilisateur ait vu le geste.
- Elle ne doit pas multiplier les corrections simultanées.
- Elle ne définit pas la réussite du parcours.
- Un utilisateur qui n’utilise jamais la caméra doit pouvoir progresser pleinement dans le cursus de base.
- Les faux positifs peuvent nuire à la confiance : mieux vaut moins de feedback.

## 21. Hypothèses

| ID | Hypothèse |
| --- | --- |
| H-V1 | La caméra apporte de la valeur surtout après stabilisation du parcours (V2). |
| H-V2 | Beaucoup d’utilisateurs progresseront sans jamais l’activer. |
| H-V3 | Un feedback unique et prudent bat plusieurs corrections simultanées. |
| H-V4 | P-001 / P-005 sont particulièrement sensibles à la pression caméra. |
| H-V5 | L’incertitude affichée augmente la confiance plus qu’une fausse assurance. |

## 22. Décisions ouvertes

- moments exacts d’activation dans les leçons V2 ;
- granularité des points observés ;
- formulation exacte des messages d’incertitude ;
- conservation éventuelle et durée des captations (privacy) ;
- traitement local vs distant (technique, hors ce document mais décision future) ;
- place de la caméra dans l’offre Premium ;
- accessibilité pour utilisateurs à mobilité particulière ;
- protocole de tests utilisateurs caméra.

## 23. Critères de validation

1. Document relu et accepté explicitement.
2. Rôle « outil d’aide, jamais autorité » explicite.
3. Consentement volontaire obligatoire.
4. Limites d’observation et de garantie claires.
5. Incertitude et arrêt cadrés.
6. Limites éthiques listées.
7. Aucune technologie imposée.
8. Décisions D-056 à D-060 tracées.
9. `docs/11_VIRTUAL_HUMANS.md` peut s’y référer pour Mei / non-validation de posture.

Statut actuel : **EN REVUE**.

## 24. Conclusion

La vision par ordinateur de Tai-Chi AI Coach est un enrichissement V2 optionnel. Elle aide à remarquer des écarts simples, dans des conditions favorables, avec consentement, prudence et droit à l’incertitude.

Elle ne certifie rien, ne diagnostique rien, ne surveille personne et ne conditionne pas la progression de base.

Prochaine étape documentaire : `docs/11_VIRTUAL_HUMANS.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/11_VIRTUAL_HUMANS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
