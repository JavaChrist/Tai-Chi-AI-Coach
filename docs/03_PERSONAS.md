# 03 — Personas

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Personas |
| Numéro | 03 |
| Fichier | `docs/03_PERSONAS.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md` |
| Documents utilisant celui-ci | `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md`, `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md`, `docs/11_VIRTUAL_HUMANS.md`, `docs/12_UX_UI.md` |
| Décisions concernées | D-023 à D-026 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Document rédigé selon `docs/99_DOCUMENTATION_STANDARD.md`.
> Les personas sont des profils de référence hypothétiques, non issus d’une enquête déjà réalisée.
> Aucune modification du Product Scope (`F-xxx` / `HP-xxx`).

## 2. Rôle du document

Ce document définit les utilisateurs de référence du produit afin que les futurs choix de fonctionnalités, contenus, UX, accessibilité et modèle économique soient fondés sur des besoins concrets.

Il alimente directement :

- `docs/04_USER_JOURNEYS.md`
- `docs/05_FEATURES.md`
- `docs/07_CONTENT_STRATEGY.md`
- `docs/08_TAI_CHI_CURRICULUM.md`
- `docs/09_AI_COACH.md`
- `docs/12_UX_UI.md`
- `docs/16_AUTH_SECURITY.md`
- `docs/17_PRIVACY_RGPD.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/22_ROADMAP.md`

Il ne remplace ni le périmètre (`docs/02_PRODUCT_SCOPE.md`), ni les parcours, ni les écrans.

## 3. Méthode de construction

Méthode utilisée :

1. reprise des publics d’étude de `docs/01_VISION.md` ;
2. confrontation au périmètre et aux versions de `docs/02_PRODUCT_SCOPE.md` ;
3. construction de personas principaux, secondaires et anti-personas ;
4. liaison explicite aux fonctionnalités existantes `F-xxx` ;
5. marquage systématique des hypothèses à valider.

> **HYPOTHÈSE**
>
> Ces personas sont des outils de conception. Ils ne constituent pas une preuve de marché.

## 4. Limites et hypothèses

Limites du document :

- aucun chiffre de marché inventé ;
- aucun diagnostic médical ;
- aucun persona caricatural ;
- aucune attribution de maladie précise ;
- aucune supposition qu’une personne âgée est nécessairement peu à l’aise avec le numérique ;
- aucun prix définitif ;
- aucun choix technique définitif ;
- aucun écran détaillé.

> **HYPOTHÈSE**
>
> Les trois cœurs de cible P-001, P-002 et P-003 couvrent suffisamment le MVP pour guider les parcours et contenus initiaux. À confirmer.

## 5. Segmentation générale

| Segment | Identifiants | Niveau de priorité |
| --- | --- | --- |
| Senior autonome recherchant activité douce | P-001 | Cœur de cible |
| Adulte actif recherchant calme et régularité | P-002 | Cœur de cible |
| Débutant à accès limité (lieu / horaires) | P-003 | Cœur de cible |
| Pratiquant déjà accompagné | P-004 | Cible secondaire |
| Aidant / proche accompagnateur | P-005 | Influenceur ou accompagnateur |
| Recherche compétition / performance intensive | AP-001 | Non-cible |
| Recherche diagnostic / traitement médical | AP-002 | Non-cible |

## 6. Critères de priorité

Un persona est **cœur de cible** s’il cumule :

- un besoin d’apprentissage progressif du Tai Chi ;
- une pratique à domicile ou autonome envisageable ;
- une adéquation avec calme, simplicité, prudence et non-compétition ;
- une capacité à valider l’intérêt du MVP léger.

Un persona est **secondaire** s’il tire de la valeur du produit sans être le premier à convaincre.

Un persona est **influenceur / accompagnateur** s’il facilite l’accès d’un autre utilisateur.

Un anti-persona est **non-cible** si ses attentes contredisent la vision ou le hors périmètre.

## 7. Synthèse des personas

| ID | Nom de référence | Priorité | Besoin central |
| --- | --- | --- | --- |
| P-001 | Senior actif — mobilité et équilibre | Cœur de cible | Pratiquer en douceur, avec confiance |
| P-002 | Adulte actif — calme et régularité | Cœur de cible | Tenir 10–20 min sans surcharge |
| P-003 | Débutant contraint — accès / horaires | Cœur de cible | Progresser seul sans professeur proche |
| P-004 | Pratiquant accompagné | Cible secondaire | Réviser entre les cours |
| P-005 | Aidant / proche | Influenceur | Aider à démarrer en sécurité |
| AP-001 | Performance intensive | Non-cible | Compétition / intensité |
| AP-002 | Attente médicale | Non-cible | Diagnostic / traitement |

## 8. P-001 — Senior actif recherchant mobilité et équilibre

### 8.1 Fiche

| Champ | Valeur |
| --- | --- |
| Identifiant | P-001 |
| Identité fictive | Hélène, 68 ans |
| Tranche d’âge | 60–75 ans |
| Situation personnelle générale | Autonome, retraite ou semi-retraite, vit à domicile |
| Contexte de vie | Souhaite préserver mobilité et équilibre ; pratique une activité douce à la maison |
| Expérience du Tai Chi | Débutante ou très débutante |
| Niveau numérique | Utilise quotidiennement smartphone ou tablette ; refuse l’infantilisation |
| Appareils utilisés | Smartphone et/ou tablette |
| Objectif principal | Pratiquer régulièrement une activité douce rassurante |
| Objectifs secondaires | Mieux comprendre les mouvements ; sentir une progression ; éviter la peur de mal faire |
| Motivations | Autonomie, bien-être perçu, maintien des gestes du quotidien |
| Freins | Appréhension physique générale, contenus trop rapides, interfaces surchargées |
| Craintes | Se blesser, être jugée, ne pas comprendre |
| Contraintes de temps | Disponibilité souvent flexible, mais sessions courtes préférées |
| Contraintes physiques générales | Possibles raideurs ou appréhension ; aucune pathologie précise attribuée |
| Environnement de pratique | Domicile, espace dégagé limité |
| Attentes envers l’application | Explications lentes, lisibles, rassurantes ; sécurité explicite |
| Comportements probables | Revoit plusieurs fois une vidéo ; avance prudemment ; privilégie la tablette |
| Déclencheur d’inscription | Recommandation d’un proche, envie d’activité douce accessible |
| Cause probable d’abandon | Rythme trop rapide, jargon, culpabilisation, interface confuse |
| Critères de réussite | Pratiquer régulièrement sans stress ; comprendre les consignes ; oser recommencer |
| Priorité produit | Cœur de cible |

### 8.2 Fonctionnalités

| Importance | Fonctionnalités |
| --- | --- |
| Les plus importantes | F-003, F-005, F-006, F-007, F-013, F-016, F-029, F-031, F-032, F-033 |
| Peu importantes | F-024, F-025, F-036, F-037 |

### 8.3 Scénario d’usage représentatif

Hélène ouvre l’application sur tablette, lit les avertissements, lance une courte séance guidée, met la vidéo en pause pour reproduire un geste, puis reprend le lendemain via la reprise de séance.

### 8.4 Citation illustrative

> **NOTE**
>
> Citation fictive illustrative, non issue d’un entretien réel :
> « Je veux quelque chose de clair, sans me presser, et sans qu’on me traite comme une enfant. »

### 8.5 Hypothèses à valider

> **HYPOTHÈSE**
>
> P-001 valorise surtout lisibilité, lenteur contrôlée et sécurité perçue davantage que les statistiques ou le premium.

## 9. P-002 — Adulte actif recherchant calme et régularité

### 9.1 Fiche

| Champ | Valeur |
| --- | --- |
| Identifiant | P-002 |
| Identité fictive | Marc, 42 ans |
| Tranche d’âge | 35–60 ans |
| Situation personnelle générale | Actif professionnellement, charge mentale élevée |
| Contexte de vie | Stress ou fatigue quotidienne ; fenêtres de pratique courtes |
| Expérience du Tai Chi | Débutant ou reprise occasionnelle |
| Niveau numérique | À l’aise avec les applications numériques |
| Appareils utilisés | Smartphone en priorité |
| Objectif principal | Pratiquer 10 à 20 minutes chez soi de façon régulière |
| Objectifs secondaires | Se recentrer ; réduire la friction de démarrage ; suivre une progression simple |
| Motivations | Calme, modernité sobre, absence de compétition |
| Freins | Programmes trop longs, trop d’options, notifications culpabilisantes |
| Craintes | Perdre le fil après une semaine chargée ; s’ennuyer ou abandonner |
| Contraintes de temps | Fortes ; pratique souvent en fin de journée |
| Contraintes physiques générales | Fatigue, tension ; aucune pathologie précise attribuée |
| Environnement de pratique | Domicile, parfois espace réduit |
| Attentes envers l’application | Expérience apaisante, programme du jour clair, reprise facile |
| Comportements probables | Cherche la séance du jour ; saute les longs textes ; revient si reprise simple |
| Déclencheur d’inscription | Besoin de calme, découverte d’une alternative douce au fitness intensif |
| Cause probable d’abandon | Complexité, durée excessive, pression, gamification agressive |
| Critères de réussite | Tenir une régularité réaliste ; ressentir du calme ; ne pas culpabiliser après une pause |
| Priorité produit | Cœur de cible |

### 9.2 Fonctionnalités

| Importance | Fonctionnalités |
| --- | --- |
| Les plus importantes | F-008, F-013, F-014, F-015, F-010, F-032, F-017, F-018, F-033 |
| Peu importantes | F-002 (après démarrage), F-023, F-036 |

### 9.3 Scénario d’usage représentatif

Marc ouvre l’app en rentrant, lance le programme quotidien de 15 minutes, suit respiration + quelques mouvements + relaxation, puis referme sans chercher à « optimiser » sa performance.

### 9.4 Citation illustrative

> **NOTE**
>
> Citation fictive illustrative, non issue d’un entretien réel :
> « Si ça me demande une heure et dix menus, j’abandonne. »

### 9.5 Hypothèses à valider

> **HYPOTHÈSE**
>
> P-002 abandonne dès que le coût de démarrage dépasse quelques gestes simples.

## 10. P-003 — Débutant contraint par l’accès ou les horaires

### 10.1 Fiche

| Champ | Valeur |
| --- | --- |
| Identifiant | P-003 |
| Identité fictive | Léa, 29 ans |
| Tranche d’âge | Adulte, souvent 25–45 ans (non exclusif) |
| Situation personnelle générale | Souhaite découvrir le Tai Chi sans accès pratique à un cours |
| Contexte de vie | Peu ou pas de cours proches ; horaires incompatibles avec clubs / associations |
| Expérience du Tai Chi | Nulle ou quasi nulle |
| Niveau numérique | Variable, souvent confortable sur mobile |
| Appareils utilisés | Smartphone, parfois ordinateur |
| Objectif principal | Apprendre progressivement et en autonomie |
| Objectifs secondaires | Revoir les démonstrations ; mémoriser ; gagner en confiance |
| Motivations | Accessibilité, structure, autonomie |
| Freins | Peur de mal reproduire ; contenus trop rapides ; absence de feedback rassurant |
| Craintes | Apprendre « de travers » ; se décourager seule |
| Contraintes de temps | Horaires décalés ; pratique irrégulière possible |
| Contraintes physiques générales | Aucune pathologie précise ; besoin de prudence débutant |
| Environnement de pratique | Domicile, parfois seul(e) |
| Attentes envers l’application | Parcours structuré, vidéos rejouables, explications claires |
| Comportements probables | Boucle plusieurs fois le même mouvement ; consulte la bibliothèque |
| Déclencheur d’inscription | Impossibilité de rejoindre un cours ; curiosité structurée |
| Cause probable d’abandon | Manque de progression lisible ; confusion sur « par où commencer » |
| Critères de réussite | Suivre un parcours sans se perdre ; oser pratiquer seule ; progresser pas à pas |
| Priorité produit | Cœur de cible |

### 10.2 Fonctionnalités

| Importance | Fonctionnalités |
| --- | --- |
| Les plus importantes | F-001, F-003, F-004, F-005, F-006, F-010, F-013, F-032, F-033 |
| Peu importantes | F-040, F-025 (au démarrage) |

### 10.3 Scénario d’usage représentatif

Léa commence par la présentation, entre dans le parcours débutant, revoit trois fois la vidéo d’un mouvement, marque sa progression, puis reprend le lendemain au même point.

### 10.4 Citation illustrative

> **NOTE**
>
> Citation fictive illustrative, non issue d’un entretien réel :
> « Il n’y a pas de cours près de chez moi. J’ai besoin que l’appli me tienne vraiment la main. »

### 10.5 Hypothèses à valider

> **HYPOTHÈSE**
>
> P-003 est le persona le plus dépendant d’un parcours débutant clair (F-003) dès le MVP.

## 11. P-004 — Pratiquant accompagné par un professeur

### 11.1 Fiche

| Champ | Valeur |
| --- | --- |
| Identifiant | P-004 |
| Identité fictive | Nadia, 51 ans |
| Tranche d’âge | Adulte, souvent 30–70 ans |
| Situation personnelle générale | Suit déjà un cours physique |
| Contexte de vie | Cherche à réviser entre les séances sans remplacer son professeur |
| Expérience du Tai Chi | Débutante à intermédiaire selon le cours suivi |
| Niveau numérique | Correct |
| Appareils utilisés | Smartphone / tablette |
| Objectif principal | Réviser mouvements, consignes et enchaînements vus en cours |
| Objectifs secondaires | Préparer la prochaine séance ; consolider la mémoire gestuelle |
| Motivations | Continuité entre cours et domicile |
| Freins | Contenu trop générique, divergent de son école, ou trop « coach qui remplace » |
| Craintes | Confusion entre styles / consignes ; conflit perçu avec son professeur |
| Contraintes de temps | Révisions courtes entre deux cours |
| Contraintes physiques générales | Celles de sa pratique habituelle ; aucune pathologie attribuée |
| Environnement de pratique | Domicile |
| Attentes envers l’application | Bibliothèque claire, favoris, recherche, hors ligne utile plus tard |
| Comportements probables | Accès direct aux mouvements ; peu d’onboarding long |
| Déclencheur d’inscription | Besoin de révision ; conseil éventuel d’un professeur |
| Cause probable d’abandon | Sentiment que l’app veut remplacer le cours |
| Critères de réussite | Réviser efficacement ; rester complémentaire au présentiel |
| Priorité produit | Cible secondaire |

### 11.2 Fonctionnalités

| Importance | Fonctionnalités |
| --- | --- |
| Les plus importantes | F-004, F-005, F-006, F-011, F-012, F-026, F-040 |
| Peu importantes | F-033 (si déjà initiée), F-023 |

### 11.3 Scénario d’usage représentatif

Nadia ouvre la bibliothèque, retrouve le mouvement vu samedi, le met en favori, le rejoue deux fois, puis ferme l’app.

### 11.4 Citation illustrative

> **NOTE**
>
> Citation fictive illustrative, non issue d’un entretien réel :
> « Mon professeur reste ma référence. L’appli m’aide juste à ne pas oublier entre deux cours. »

### 11.5 Hypothèses à valider

> **HYPOTHÈSE**
>
> P-004 valorise la complémentarité au présentiel davantage que l’assistant IA conversationnel.

## 12. P-005 — Aidant ou proche accompagnateur

### 12.1 Fiche

| Champ | Valeur |
| --- | --- |
| Identifiant | P-005 |
| Identité fictive | Thomas, 45 ans |
| Tranche d’âge | Adulte |
| Situation personnelle générale | Aide un parent ou un proche à découvrir l’application |
| Contexte de vie | Peut configurer l’appareil et lancer les premières séances |
| Expérience du Tai Chi | Faible ; rôle d’accompagnateur |
| Niveau numérique | Souvent plus à l’aise que le pratiquant aidé |
| Appareils utilisés | Smartphone / tablette du proche, parfois le sien |
| Objectif principal | Permettre un démarrage clair et rassurant |
| Objectifs secondaires | Vérifier que les consignes de sécurité sont visibles |
| Motivations | Aider sans surveiller de façon intrusive |
| Freins | Interface confuse, absence d’avertissements, parcours trop long |
| Craintes | Que le proche se décourage ou se sente en danger |
| Contraintes de temps | Disponibilité limitée pour l’installation initiale |
| Contraintes physiques générales | Non pertinentes pour lui en tant qu’aidant |
| Environnement de pratique | Domicile du proche |
| Attentes envers l’application | Interface claire, sécurité explicite, premier lancement simple |
| Comportements probables | Configure, montre une première séance, puis s’efface |
| Déclencheur d’inscription | Demande d’un proche ; volonté d’offrir une activité douce |
| Cause probable d’abandon | Trop de friction à l’installation ; message ambigu sur le médical |
| Critères de réussite | Le proche démarre seul ensuite ; les alertes de prudence sont comprises |
| Priorité produit | Influenceur ou accompagnateur |

### 12.2 Fonctionnalités

| Importance | Fonctionnalités |
| --- | --- |
| Les plus importantes | F-016, F-031, F-033, F-028, F-029, F-001 |
| Peu importantes | F-019, F-021, F-024 |

### 12.3 Scénario d’usage représentatif

Thomas installe l’app, parcourt les conseils de sécurité avec son proche, lance la première découverte guidée, puis laisse le proche continuer.

### 12.4 Citation illustrative

> **NOTE**
>
> Citation fictive illustrative, non issue d’un entretien réel :
> « Je veux juste être sûr que c’est clair et prudent avant de le laisser seul avec l’appli. »

### 12.5 Hypothèses à valider

> **HYPOTHÈSE**
>
> P-005 influence fortement l’adoption de P-001, sans être lui-même un pratiquant régulier.

## 13. AP-001 — Recherche de compétition et de performance intensive

| Champ | Valeur |
| --- | --- |
| Identifiant | AP-001 |
| Profil | Utilisateur recherchant records, classements, défis agressifs ou entraînement physique intense |
| Priorité produit | Non-cible |
| Compatibilité vision | Incompatible avec calme, non-compétition, non-culpabilisation |
| Fonctionnalités hors périmètre associées | HP-002, HP-003, HP-014 |
| Attitude produit | Ne pas concevoir pour ce besoin |

> **ATTENTION**
>
> Servir AP-001 conduirait à trahir D-013 et le hors périmètre du Product Scope.

## 14. AP-002 — Recherche de diagnostic ou traitement médical

| Champ | Valeur |
| --- | --- |
| Identifiant | AP-002 |
| Profil | Utilisateur attendant interprétation de douleurs, diagnostic, prescription ou rééducation médicale |
| Priorité produit | Non-cible |
| Compatibilité vision | Explicitement hors périmètre |
| Fonctionnalités hors périmètre associées | HP-004, HP-005, HP-012 |
| Attitude produit | Orienter hors produit ; rappeler les limites ; jamais diagnostiquer |

> **ATTENTION**
>
> Toute réponse de type médical renforcerait le risque R1 (confusion avec un produit médical).

## 15. Besoins communs

Besoins partagés par P-001, P-002, P-003 (et souvent utiles à P-004 / P-005) :

1. comprendre par où commencer ;
2. être guidé sans jugement ;
3. pratiquer à son rythme ;
4. revoir les démonstrations ;
5. voir une progression simple ;
6. reprendre après interruption ;
7. disposer de consignes de sécurité claires ;
8. distinguer bien-être général et conseil médical.

## 16. Différences structurantes

| Dimension | P-001 | P-002 | P-003 | P-004 | P-005 |
| --- | --- | --- | --- | --- | --- |
| Enjeu principal | Confiance / lisibilité | Régularité courte | Autonomie structurée | Révision ciblée | Démarrage assisté |
| Temps de séance | Court à modéré | 10–20 min | Variable | Très court | Installation initiale |
| Rapport au professeur | Absent ou rare | Absent ou rare | Absent | Présent | Indirect |
| Sensibilité accessibilité | Élevée | Moyenne | Moyenne | Moyenne | Élevée (pour le proche) |
| Appétit IA | Prudent | Utile si simple | Utile si rassurant | Secondaire | Faible |
| Appétit caméra | Très prudent | Optionnel plus tard | Mitigé | Mitigé | Très prudent |

## 17. Impacts sur le produit

- Le MVP doit servir d’abord P-001, P-002 et P-003.
- Le produit doit rester complémentaire pour P-004, jamais substitut systématique au professeur.
- P-005 impose un premier lancement et des alertes de prudence particulièrement clairs.
- AP-001 et AP-002 ne doivent influencer ni le ton, ni les mécaniques de motivation.

## 18. Impacts sur les contenus

- Rythme progressif et droit de répéter pour tous les cœurs de cible.
- Langage simple, non infantilisant (surtout P-001).
- Séances courtes exploitables par P-002.
- Parcours débutant explicite pour P-003.
- Fiches mouvement utiles à la révision pour P-004.
- Distinction claire bien-être / non-médical partout.
- Consigne d’arrêt en cas de douleur ; orientation vers un professionnel compétent si nécessaire.

## 19. Impacts sur l’UX et l’accessibilité

À étudier dans `docs/12_UX_UI.md` (valeurs techniques non figées ici) :

- taille et lisibilité des textes ;
- contraste ;
- navigation simple ;
- boutons et zones tactiles suffisamment grands ;
- sous-titres ;
- contrôle du son ;
- vitesse des vidéos ;
- répétition d’un mouvement ;
- usage smartphone et tablette ;
- réduction des animations ;
- langage simple ;
- aide au démarrage.

Priorité d’attention accessibilité : P-001 et le proche aidé via P-005, sans présumer d’incompétence numérique liée à l’âge.

## 20. Impacts sur l’intelligence artificielle

- IA prévue pour V1 (`F-019`, `F-020`), pas pour le MVP.
- Pour P-001 / P-003 : ton rassurant, non jugeant, non médical.
- Pour P-002 : réponses courtes, actionnables, liées à la séance du jour.
- Pour P-004 : privilégier l’explication de mouvement plutôt que le remplacement du professeur.
- Interdit pour AP-002 : toute dérive diagnostique.

## 21. Impacts sur la vision par ordinateur

- `F-021` / `F-022` prévus pour V2, hors MVP.
- P-001 et P-005 exigent consentement clair, limites explicites, absence de promesse de posture parfaite.
- Ne pas présenter la caméra comme nécessaire pour « bien pratiquer ».
- Refuser toute lecture médicale d’une douleur via la caméra.

## 22. Impacts sur les professeurs virtuels

> **HYPOTHÈSE**
>
> Mei est envisagée comme guide visuelle principale.

Principes retenus pour la suite (`docs/11_VIRTUAL_HUMANS.md`, `docs/12_UX_UI.md`) :

- Mei peut accompagner, démontrer et rassurer ;
- elle porte une tenue officielle propre à Tai-Chi AI Coach (détail non figé) ;
- elle ne doit pas être présentée comme un véritable maître diplômé ;
- son utilisation reste optionnelle pour le fonctionnement du produit ;
- Virtual Humans Studio ne doit pas devenir une dépendance bloquante ;
- présence dans le MVP, voix, animations et calendrier d’intégration restent ouverts.

`F-023` reste prévu pour V2 selon `docs/02_PRODUCT_SCOPE.md`.

## 23. Impacts sur la confidentialité

- Minimiser les données demandées au démarrage (surtout P-001 / P-005).
- Compte (`F-039`) non requis pour prouver le MVP local simple.
- Caméra : consentement explicite obligatoire (HP-013 hors périmètre).
- Export (`F-030`) utile pour la confiance à partir de V1.
- Ne pas collecter de données de santé cliniques.

Détail à traiter dans `docs/17_PRIVACY_RGPD.md` et `docs/16_AUTH_SECURITY.md`.

## 24. Impacts sur le modèle économique

> **HYPOTHÈSE**
>
> Les cœurs de cible accepteront mieux un accès essentiel simple avant toute offre premium.

Orientations non définitives pour `docs/06_BUSINESS_MODEL.md` :

- ne pas verrouiller le parcours débutant critique derrière un paywall précoce ;
- `F-025` reste prévu pour V2 ;
- P-004 peut valoriser bibliothèque / hors ligne plus que coaching IA ;
- aucun prix fixé ici.

## 25. Fonctionnalités prioritaires par persona

Matrice d’importance (uniquement des `F-xxx` existants).

Légende : **C** = Critique · **I** = Importante · **U** = Utile · **F** = Faible · **N** = Non pertinente

| Fonctionnalité | P-001 | P-002 | P-003 | P-004 | P-005 |
| --- | --- | --- | --- | --- | --- |
| F-001 Présentation | I | U | C | F | I |
| F-002 Styles | U | F | I | U | F |
| F-003 Parcours débutant | C | I | C | F | I |
| F-004 Bibliothèque | I | U | C | C | U |
| F-005 Explication mouvement | C | I | C | C | U |
| F-006 Vidéo pédagogique | C | C | C | C | I |
| F-007 Images de référence | I | U | I | I | U |
| F-008 Programme quotidien | I | C | I | F | U |
| F-009 Historique | U | I | I | U | F |
| F-010 Progression | I | C | C | U | U |
| F-011 Favoris | U | U | I | C | F |
| F-012 Recherche | F | U | U | C | F |
| F-013 Séances guidées | C | C | C | U | I |
| F-014 Respiration | I | C | I | U | U |
| F-015 Relaxation | I | C | U | U | U |
| F-016 Conseils de sécurité | C | I | C | I | C |
| F-017 Notifications | U | I | U | F | F |
| F-018 Objectifs personnels | U | I | U | F | F |
| F-019 Assistant IA | U | I | I | U | F |
| F-020 Questions / Réponses | U | I | I | U | F |
| F-021 Analyse caméra | F | U | U | U | F |
| F-022 Corrections posture | F | U | U | U | F |
| F-023 Professeurs virtuels | U | U | U | F | U |
| F-024 Statistiques | F | U | U | F | F |
| F-025 Premium | F | U | F | U | F |
| F-026 Hors ligne | U | U | I | I | F |
| F-027 Sync multi-appareils | U | I | U | U | F |
| F-028 Paramètres | I | I | I | U | I |
| F-029 Accessibilité | C | I | I | U | C |
| F-030 Export | U | U | U | U | U |
| F-031 Avertissements | C | I | C | I | C |
| F-032 Reprise de séance | C | C | C | U | I |
| F-033 Première découverte | C | C | C | F | C |
| F-034 Personnalisation avancée | U | I | U | F | F |
| F-035 Programmes adaptés | I | U | U | F | U |
| F-036 Moteur coaching | N | F | F | F | N |
| F-037 Multi-disciplines | F | F | F | F | F |
| F-038 Méditation élargie | U | U | F | F | F |
| F-039 Compte utilisateur | U | I | U | U | U |
| F-040 Partenariats écoles | F | F | F | I | F |
| F-041 Hors ligne partiel | U | U | U | U | F |

Aucune fonctionnalité nouvelle n’est créée par cette matrice. Aucune version cible n’est modifiée.

## 26. Risques de mauvaise interprétation

| Risque d’interprétation | Conséquence | Contre-mesure |
| --- | --- | --- |
| Transformer P-001 en « senior incapable du numérique » | UX infantilisante | Concevoir digne, lisible, non condescendante |
| Optimiser uniquement pour P-002 « productif » | Perte de lenteur pédagogique | Garder le droit de répéter et le calme |
| Faire de P-003 un prétexte à sur-feature IA/caméra | MVP trop lourd | Rester sur parcours + vidéos + prudence |
| Faire de P-004 la cible MVP | Produit de révision sans acquisition débutant | MVP d’abord cœurs de cible |
| Médicaliser AP-002 par empathie mal placée | Risque légal / confiance (R1) | Refus clair + orientation professionnelle |
| Introduire compétition pour « engager » AP-001 | Trahison de vision | Hors périmètre maintenu |

Aucun nouveau risque structurant distinct des risques déjà listés dans le Master Plan n’est ajouté à `RISKS.md` à ce stade.

## 27. Hypothèses à tester

| ID | Hypothèse |
| --- | --- |
| H-P1 | P-001, P-002 et P-003 constituent un trio de cœurs de cible suffisant pour le MVP. |
| H-P2 | P-001 n’exige pas moins de dignité d’interface qu’un adulte plus jeune. |
| H-P3 | P-002 abandonne si la première séance utile dépasse nettement ~20 minutes. |
| H-P4 | P-003 a besoin d’un parcours linéaire avant toute bibliothèque riche. |
| H-P5 | P-004 accepte le produit s’il reste explicitement complémentaire au professeur. |
| H-P6 | P-005 améliore l’activation de P-001 lors du premier lancement. |
| H-P7 | Mei rassure davantage qu’elle n’intrigue, si elle n’est pas présentée comme maître diplômé. |
| H-P8 | Les anti-personas AP-001 et AP-002 apparaissent réellement dans les attentes utilisateurs à écarter. |

## 28. Méthodes futures de validation

Méthodes envisageables, non engagées :

- entretiens qualitatifs courts ;
- tests de premier lancement ;
- observation de reprise de séance ;
- tests de compréhension des avertissements ;
- essais de lisibilité / vitesse vidéo ;
- confrontation aux parcours de `docs/04_USER_JOURNEYS.md`.

Aucune enquête n’est présentée comme déjà réalisée.

## 29. Décisions ouvertes

Restent ouvertes :

- répartition commerciale exacte des segments ;
- âge précis dominant en usage réel ;
- présence de Mei dans le MVP ;
- tenue, voix et animations de Mei ;
- durée exacte des séances par persona ;
- style / forme Tai Chi définitifs ;
- profondeur d’accessibilité chiffrée ;
- prix et packaging par segment ;
- place exacte de P-004 dans la roadmap marketing.

## 30. Critères de validation du document

Le document pourra être considéré comme validé lorsque :

1. il est relu et accepté explicitement ;
2. les 3 personas principaux, 2 secondaires et 2 anti-personas sont stables ;
3. la matrice `F-xxx` ne crée aucune fonctionnalité nouvelle ;
4. aucune classification de version n’est altérée ;
5. Mei reste une hypothèse non bloquante ;
6. les décisions D-023 à D-026 sont tracées ;
7. `docs/04_USER_JOURNEYS.md` peut s’appuyer dessus sans ambiguïté majeure.

Statut actuel : **EN REVUE**.

## 31. Conclusion

Les cœurs de cible du produit sont P-001, P-002 et P-003 : un senior actif en quête de mobilité rassurante, un adulte pressé en quête de calme régulier, et un débutant contraint par l’accès ou les horaires.

P-004 et P-005 enrichissent l’écosystème sans redéfinir le MVP. AP-001 et AP-002 restent explicitement hors cible.

Mei est envisagée comme guide visuelle principale, sans titre de maître et sans dépendance obligatoire à Virtual Humans Studio.

Prochaine étape documentaire : `docs/04_USER_JOURNEYS.md`.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN REVUE |
| Prochain document | `docs/04_USER_JOURNEYS.md` |
| Fin officielle | Oui |

*Fin officielle du document.*
