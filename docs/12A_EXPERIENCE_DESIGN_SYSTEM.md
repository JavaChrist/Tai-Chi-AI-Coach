# 12A — Experience Design System

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Experience Design System |
| Numéro | 12A |
| Fichier | `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md` |
| Version | 1.0 |
| Statut | **VALIDÉ** |
| Phase | Design System |
| Dernière mise à jour | 6 août 2026 — Références Experience Design (12B / 12B-A) |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/01_VISION.md`, `docs/12_UX_UI.md`, `docs/13_TECH_ARCHITECTURE.md` |
| Documents utilisant celui-ci | `docs/12B_VISUAL_ASSET_GUIDE.md`, `docs/12B-A_OFFICIAL_BRAND_MARK.md`, Tickets UI, Design System, écrans Frontend |
| Décisions concernées | À compléter après validation |
| Dernière revue | 6 août 2026 — Clôture phase Experience Design |
| Autorise le code | Oui — interfaces devant respecter ce guide |

> **VALIDÉ**
>
> **Élément :** `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md`
> **Date :** 5 août 2026
> **Par :** Projet Tai-Chi-AI-Coach
> **Version documentaire :** 1.0
>
> Référence officielle de l’expérience utilisateur de Tai-Chi AI Coach.
> Complète `docs/12_UX_UI.md`.
> Ne modifie pas les parcours utilisateur.
> Aucune interface ne pourra être développée sans respecter ce guide.

## Gouvernance

Ce document complète `docs/12_UX_UI.md`.

Il constitue la référence officielle de l’**expérience d’interface** de Tai-Chi AI Coach.

L’Experience Design officiel est constitué de :

- `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md` — expérience d’interface (présent document) ;
- `docs/12B_VISUAL_ASSET_GUIDE.md` — univers graphique et assets ;
- `docs/12B-A_OFFICIAL_BRAND_MARK.md` — symbole officiel (Brand Mark).

En cas de doute sur l’interface : `12A` prévaut.

En cas de doute sur un asset : `12B` prévaut, sans contredire `12A`.

En cas de doute sur le Brand Mark : `12B-A` prévaut, sans contredire `12A` ni `12B`.

Toute évolution future de ce document devra faire l’objet d’une Impact Analysis.

Toute modification devra être validée avant intégration.

Aucune modification silencieuse n’est autorisée.

---

# Chapitre 1 — Philosophie du Design

---

## 1.1 Objectif

Ce document définit l’identité visuelle officielle de Tai-Chi AI Coach.

Il complète :

- `docs/12_UX_UI.md`

Il devient la référence graphique de toutes les futures interfaces.

Aucune interface ne pourra être développée sans respecter ce guide.

---

## 1.2 Vision

Tai-Chi AI Coach n’est pas une application de sport.

Tai-Chi AI Coach n’est pas une application de fitness.

Tai-Chi AI Coach n’est pas un tableau de bord.

Tai-Chi AI Coach est un espace personnel de pratique.

L’interface doit transmettre immédiatement cette idée.

---

## 1.3 Le calme avant tout

Chaque écran doit ralentir le rythme.

Jamais l’accélérer.

L’utilisateur doit ressentir :

- le calme ;
- la respiration ;
- la sérénité ;
- la confiance ;
- la douceur.

Jamais :

- le stress ;
- la pression ;
- l’urgence ;
- la compétition.

---

## 1.4 Le vide est un composant

Le vide fait partie du Design System.

Un espace vide n’est jamais un oubli.

Il permet :

- au regard de respirer ;
- au cerveau de ralentir ;
- au contenu d’être mis en valeur.

Aucun écran ne doit être rempli uniquement parce qu’il reste de la place.

---

## 1.5 Une seule action principale

Chaque écran possède une seule action principale.

Toutes les autres actions doivent rester secondaires.

L’utilisateur ne doit jamais hésiter.

---

## 1.6 L’application ne doit jamais crier

Jamais :

- gros boutons rouges ;
- messages agressifs ;
- animations spectaculaires ;
- couleurs saturées.

Tout doit rester discret.

---

## 1.7 L’émotion recherchée

Avant de concevoir un écran, se poser une seule question :

> Quelle émotion doit ressentir l’utilisateur ?

Si la réponse est inconnue, l’écran ne doit pas être développé.

---

## 1.8 Les émotions officielles

| Écran / moment | Émotion |
| --- | --- |
| Accueil | Calme |
| Bibliothèque | Curiosité |
| Pratique | Concentration |
| Pause | Respiration |
| Bilan | Satisfaction |
| Progression | Motivation douce |
| Profil | Maîtrise |
| Onboarding | Confiance |

---

## 1.9 Le temps

L’application ne donne jamais l’impression d’être pressée.

Les animations sont lentes.

Les transitions sont fluides.

Le contenu apparaît naturellement.

---

## 1.10 La simplicité

Supprimer plutôt qu’ajouter.

Une interface réussie contient uniquement ce qui est nécessaire.

---

## 1.11 L’utilisateur

L’utilisateur n’est jamais jugé.

L’application ne critique jamais.

Elle accompagne.

Elle encourage.

Elle propose.

Jamais elle n’impose.

---

## 1.12 Le Tai Chi avant le numérique

Si une décision oppose :

- une belle interface

et

- une expérience plus proche de l’esprit du Tai Chi,

la seconde est toujours retenue.

---

## 1.13 Règle absolue

Chaque nouvel écran devra répondre à cette question :

> Est-ce que cet écran donne envie de ralentir ?

Si la réponse est :

**Non**

Alors l’écran devra être repensé avant validation.

---

## 1.14 Décision

Le Design de Tai-Chi AI Coach privilégie toujours :

- la sérénité ;
- la respiration ;
- la simplicité ;
- l’espace ;
- la confiance ;

au détriment de la densité d’information ou de l’effet visuel.

---

# Chapitre 2 — Langage visuel

---

## 2.1 Objectif

Le langage visuel de Tai-Chi AI Coach ne cherche pas à impressionner.

Il cherche à rassurer.

L’utilisateur doit avoir l’impression d’ouvrir :

- un carnet personnel ;
- un espace calme ;
- un lieu de pratique.

Jamais un logiciel.

---

## 2.2 Les surfaces

L’application est construite avec peu de niveaux visuels.

On distingue uniquement :

- le fond ;
- les surfaces ;
- les cartes ;
- les composants interactifs.

Chaque niveau doit rester immédiatement identifiable.

---

## 2.3 Les fonds

Le fond principal est toujours :

- chaud ;
- très clair ;
- légèrement texturé visuellement par la couleur uniquement.

Jamais :

- blanc pur ;
- gris froid ;
- noir profond.

Le fond ne doit jamais attirer l’attention.

Il doit disparaître derrière le contenu.

---

## 2.4 Les cartes

Les cartes représentent des feuilles de carnet.

Elles ne représentent jamais des widgets techniques.

Elles doivent donner l’impression :

- d’être légères ;
- d’être posées naturellement ;
- d’être légèrement séparées de leur support.

Elles ne flottent jamais.

Les cartes utilisent :

- grands rayons ;
- ombres discrètes ;
- beaucoup d’espace intérieur.

Les cartes ne doivent jamais être collées entre elles.

---

## 2.5 Les bordures

Les bordures existent uniquement pour séparer doucement les éléments.

Jamais pour les enfermer.

Les bordures sont :

- fines ;
- peu contrastées ;
- discrètes.

---

## 2.6 Les ombres

Les ombres ne créent pas un effet spectaculaire.

Elles servent uniquement à créer une légère séparation.

Une ombre ne doit jamais être immédiatement perceptible.

Si l’utilisateur remarque l’ombre avant le contenu :

elle est trop forte.

---

## 2.7 Les espacements

L’espace est un composant.

Il possède autant d’importance qu’un bouton.

Les écrans doivent respirer.

Les éléments importants sont isolés.

Les groupes sont clairement séparés.

Le contenu ne doit jamais sembler comprimé.

---

## 2.8 Les alignements

Tous les composants suivent une grille unique.

Les alignements doivent être parfaits.

Les éléments proches appartiennent au même groupe.

Les éléments éloignés représentent une séparation fonctionnelle.

---

## 2.9 Les couleurs

Les couleurs servent uniquement à guider.

Jamais à décorer.

Chaque couleur possède une signification unique.

Une couleur ne doit jamais avoir plusieurs rôles.

---

## 2.10 Les contrastes

Le contraste est suffisant pour l’accessibilité.

Mais il reste doux.

Les noirs absolus sont évités.

Les blancs purs sont évités.

Les gris intermédiaires sont privilégiés.

---

## 2.11 Les boutons

Le bouton principal attire naturellement le regard.

Sans utiliser :

- couleurs agressives ;
- tailles excessives ;
- animations.

Chaque écran possède un seul bouton principal.

Les autres restent volontairement plus discrets.

---

## 2.12 Les icônes

Les icônes sont uniquement des aides visuelles.

Elles ne remplacent jamais le texte.

Toutes les icônes proviennent de Lucide.

Elles possèdent :

- la même épaisseur ;
- la même taille ;
- le même style.

---

## 2.13 Les illustrations

Les illustrations renforcent l’ambiance.

Elles ne servent jamais à remplir un espace vide.

Une illustration est présente uniquement lorsqu’elle apporte :

- une émotion ;
- une compréhension ;
- une respiration visuelle.

---

## 2.14 Les photographies

Les photographies utilisent :

- lumière naturelle ;
- couleurs douces ;
- arrière-plans simples ;
- peu d’éléments.

Jamais :

- couleurs saturées ;
- effets HDR ;
- contrastes violents.

---

## 2.15 Les textures

Les textures sont uniquement suggérées.

Aucune texture ne doit distraire.

Le papier, la pierre ou le bambou sont évoqués par les couleurs.

Jamais par des images envahissantes.

---

## 2.16 Les listes

Les listes restent aérées.

Chaque ligne dispose d’un espace confortable.

Les séparateurs sont discrets.

Les listes longues utilisent la respiration visuelle pour éviter l’effet « tableau ».

---

## 2.17 Les tableaux

Les tableaux sont évités.

Lorsqu’ils sont indispensables :

- peu de colonnes ;
- beaucoup d’espace ;
- lecture immédiate.

---

## 2.18 Les écrans

Un écran doit être compris en moins de trois secondes.

L’utilisateur doit immédiatement identifier :

- où il est ;
- ce qu’il peut faire ;
- quelle est l’action principale.

---

## 2.19 Les interdits

Ne jamais utiliser :

- effets de verre complexes ;
- néons ;
- couleurs fluo ;
- animations permanentes ;
- fonds photographiques chargés ;
- dégradés agressifs ;
- ombres lourdes ;
- cartes collées ;
- textes trop petits ;
- interfaces surchargées.

---

## 2.20 Principe fondamental

Le design ne doit jamais attirer l’attention sur lui-même.

Il doit laisser toute la place à la pratique du Tai Chi.

Une interface réussie est une interface que l’utilisateur oublie.

---

# Chapitre 3 — La psychologie des couleurs

---

## 3.1 Objectif

Les couleurs de Tai-Chi AI Coach ne sont jamais décoratives.

Chaque couleur possède une fonction.

Chaque couleur possède une émotion.

Chaque couleur participe à la sensation générale de calme.

Une couleur ne doit jamais être choisie uniquement parce qu’elle est esthétique.

Elle doit transmettre une intention.

---

## 3.2 La lumière

L’application est éclairée comme une pièce recevant la lumière naturelle du matin.

Jamais comme un écran de contrôle.

La lumière est :

- douce ;
- chaude ;
- diffuse ;
- reposante.

L’utilisateur doit avoir la sensation d’un environnement naturel.

---

## 3.3 Rice Paper

Couleur principale.

Code officiel :

`#F7F6F1`

Évoque :

- le papier japonais ;
- le calme ;
- la simplicité ;
- la lumière.

Utilisation :

- fond principal ;
- grands espaces.

Ne jamais utiliser du blanc pur à sa place.

---

## 3.4 Morning Mist

Code officiel :

`#EFEEE8`

Évoque :

- la brume du matin ;
- la douceur ;
- le silence.

Utilisation :

- fonds secondaires ;
- panneaux ;
- zones légèrement séparées.

---

## 3.5 Soft Jade

Code officiel :

`#7A998D`

Évoque :

- le jade ;
- l’équilibre ;
- le mouvement lent.

Utilisation :

- action principale ;
- progression ;
- éléments interactifs.

Cette couleur devient l’identité de Tai-Chi AI Coach.

---

## 3.6 Bamboo

Code officiel :

`#456A5D`

Évoque :

- la stabilité ;
- l’enracinement ;
- la pratique.

Utilisation :

- titres ;
- actions importantes ;
- navigation active.

---

## 3.7 Warm Sand

Code officiel :

`#D9D0BF`

Évoque :

- la terre ;
- la stabilité ;
- la respiration.

Utilisation :

- séparateurs ;
- surfaces secondaires ;
- fonds ponctuels.

---

## 3.8 Zen Stone

Code officiel :

`#66716B`

Évoque :

- la pierre ;
- le silence ;
- la permanence.

Utilisation :

- texte secondaire ;
- descriptions ;
- aides.

Jamais pour les titres.

---

## 3.9 Ink

Code officiel :

`#243029`

Évoque :

- l’encre de Chine.

Utilisation :

- texte principal.

Jamais noir absolu.

Le contraste reste confortable.

---

## 3.10 Morning Sky

Couleur d’accent.

Code officiel :

`#A9C4C8`

Évoque :

- le ciel du matin ;
- l’ouverture ;
- la légèreté.

Très peu utilisée.

Uniquement pour :

- illustrations ;
- quelques éléments décoratifs.

Jamais comme couleur dominante.

---

## 3.11 Surface

Code officiel :

`#FFFEF9`

Évoque :

- une feuille posée ;
- la clarté discrète.

Utilisation :

- fond des cartes ;
- surfaces de contenu.

---

## 3.12 Surface Elevated

Code officiel :

`#FCFBF7`

Évoque :

- une surface légèrement relevée ;
- une séparation douce.

Utilisation :

- Dialogs ;
- panneaux au-dessus du contenu ;
- éléments qui doivent se détacher sans flotter.

---

## 3.13 Border Soft

Code officiel :

`#E5E1D6`

Évoque :

- une ligne de papier ;
- une séparation silencieuse.

Utilisation :

- bordures par défaut ;
- séparateurs légers ;
- contours d’inputs.

---

## 3.14 Border Strong

Code officiel :

`#C8C0B0`

Évoque :

- un trait plus affirmé ;
- une structure lisible.

Utilisation :

- focus / états actifs discrets ;
- séparations importantes ;
- contours renforcés.

Jamais pour crier.

---

## 3.15 Succès

Code officiel :

`#6A9B6B`

Le succès n’est jamais célébré de manière spectaculaire.

La couleur reste douce.

Elle signifie simplement :

« Vous progressez. »

Émotion : encouragement calme.

---

## 3.16 Attention

Code officiel :

`#C9A55B`

Une attention n’est jamais un avertissement violent.

Elle attire doucement le regard.

Sans provoquer d’anxiété.

Émotion : vigilance douce.

---

## 3.17 Erreur

Code officiel :

`#B66C64`

Une erreur ne doit jamais donner l’impression d’un échec.

Elle informe.

Elle propose une solution.

La couleur reste modérée.

Jamais rouge vif.

Émotion : information réparable.

---

## 3.18 Couleurs interdites

Ne jamais utiliser comme couleur dominante :

- rouge saturé ;
- vert fluo ;
- bleu électrique ;
- violet intense ;
- orange vif ;
- jaune pur.

Ces couleurs détruisent immédiatement l’ambiance recherchée.

---

## 3.19 Dégradés

Les dégradés sont exceptionnels.

Lorsqu’ils existent :

ils sont très subtils.

Ils évoquent la lumière.

Jamais un effet marketing.

---

## 3.20 Le contraste

L’accessibilité reste obligatoire (WCAG AA).

Mais le contraste est obtenu :

par les valeurs.

Jamais par des couleurs agressives.

---

## 3.21 Les émotions

| Couleur | Émotion |
| --- | --- |
| Rice Paper | Respiration |
| Morning Mist | Sérénité |
| Soft Jade | Équilibre |
| Bamboo | Confiance |
| Warm Sand | Ancrage |
| Zen Stone | Silence |
| Ink | Clarté |
| Morning Sky | Ouverture |
| Surface | Clarté discrète |
| Surface Elevated | Présence douce |
| Border Soft | Séparation silencieuse |
| Border Strong | Structure lisible |
| Succès | Encouragement calme |
| Attention | Vigilance douce |
| Erreur | Information réparable |

---

## 3.22 Palette Dark Mode

Le mode sombre n’est pas une inversion.

Chaque couleur conserve son rôle et son émotion.

| Token clair | Token sombre | Code sombre | Rôle |
| --- | --- | --- | --- |
| Rice Paper | Night Paper | `#1C221F` | Fond principal |
| Morning Mist | Night Mist | `#262E2A` | Fond secondaire / panneaux |
| Surface | Surface Night | `#2C3531` | Fond des cartes |
| Surface Elevated | Surface Night Elevated | `#343E39` | Dialogs / panneaux relevés |
| Border Soft | Border Soft Night | `#3D4842` | Bordures par défaut |
| Border Strong | Border Strong Night | `#52605A` | Bordures renforcées |
| Soft Jade | Soft Jade | `#7A998D` | Identité / action principale |
| Bamboo | Bamboo Soft | `#9BB5A8` | Titres / navigation active |
| Warm Sand | Warm Sand Night | `#4A453A` | Surfaces secondaires |
| Zen Stone | Zen Stone Soft | `#A8B0AB` | Texte secondaire |
| Ink | Mist Ink | `#E8E6E1` | Texte principal |
| Morning Sky | Morning Sky Soft | `#8AADB3` | Accent rare |
| Succès | Succès Soft | `#7AAD7B` | Progression douce |
| Attention | Attention Soft | `#D4B56A` | Attention non anxiogène |
| Erreur | Erreur Soft | `#C4847C` | Erreur modérée |

Jamais de noir pur (`#000000`).

Jamais de blanc pur (`#FFFFFF`) sur fond sombre.

---

## 3.23 Principe fondamental

La couleur ne doit jamais être remarquée.

Elle doit être ressentie.

L’utilisateur doit avoir l’impression que l’application est naturellement apaisante.

Sans pouvoir expliquer pourquoi.

---

## 3.24 Synthèse palette officielle (mode clair)

| Nom | Code | Rôle principal | Émotion |
| --- | --- | --- | --- |
| Rice Paper | `#F7F6F1` | Fond principal | Respiration |
| Morning Mist | `#EFEEE8` | Fond secondaire / panneaux | Sérénité |
| Surface | `#FFFEF9` | Fond des cartes | Clarté discrète |
| Surface Elevated | `#FCFBF7` | Dialogs / surfaces relevées | Présence douce |
| Border Soft | `#E5E1D6` | Bordures par défaut | Séparation silencieuse |
| Border Strong | `#C8C0B0` | Bordures renforcées | Structure lisible |
| Soft Jade | `#7A998D` | Identité / action principale | Équilibre |
| Bamboo | `#456A5D` | Titres / navigation active | Confiance |
| Warm Sand | `#D9D0BF` | Séparateurs / surfaces secondaires | Ancrage |
| Zen Stone | `#66716B` | Texte secondaire | Silence |
| Ink | `#243029` | Texte principal | Clarté |
| Morning Sky | `#A9C4C8` | Accent rare (illustrations) | Ouverture |
| Succès | `#6A9B6B` | Progression douce | Encouragement calme |
| Attention | `#C9A55B` | Attention non anxiogène | Vigilance douce |
| Erreur | `#B66C64` | Erreur modérée | Information réparable |

---

# Chapitre 4 — Le rythme et les animations

---

## 4.1 Objectif

Les animations de Tai-Chi AI Coach ne servent jamais à impressionner.

Elles servent uniquement à accompagner l’utilisateur.

Une animation est une respiration.

Jamais un spectacle.

---

## 4.2 Le rythme

L’application possède un rythme.

Ce rythme est lent.

Régulier.

Prévisible.

L’utilisateur ne doit jamais être surpris.

Chaque transition doit donner l’impression que l’interface accompagne naturellement son geste.

---

## 4.3 Le Silence Visuel

Le Silence Visuel est une composante officielle du Design System.

Il désigne tous les moments où l’interface choisit volontairement de ne rien faire.

Le silence visuel permet :

- au regard de se reposer ;
- à l’utilisateur de réfléchir ;
- au contenu de respirer.

Un écran n’est jamais animé en permanence.

---

## 4.4 Les transitions

Les transitions doivent être :

- progressives ;
- discrètes ;
- fluides.

Elles ne doivent jamais attirer l’attention.

L’utilisateur ne doit pas penser :

> « Belle animation. »

Il doit simplement avoir l’impression que tout est naturel.

---

## 4.5 Les vitesses

| Type | Durée |
| --- | --- |
| Transitions courtes | **200 ms** |
| Transitions normales | **250 à 300 ms** |
| Transitions plus contemplatives | **350 ms** |

Jamais :

- animation instantanée sans raison ;
- animation lente au point de gêner.

---

## 4.6 Les accélérations

Utiliser des courbes douces.

Éviter les accélérations brutales.

Les mouvements doivent :

commencer doucement,

se déplacer naturellement,

terminer doucement.

---

## 4.7 Les apparitions

Les éléments apparaissent calmement.

Ils ne surgissent jamais.

Une apparition peut utiliser :

- opacité ;
- léger déplacement vertical ;
- léger fondu.

Jamais :

- rebond ;
- rotation ;
- zoom spectaculaire.

---

## 4.8 Les disparitions

Une disparition est plus discrète qu’une apparition.

L’utilisateur doit avoir le temps de comprendre ce qui change.

Jamais de disparition brutale.

---

## 4.9 Les listes

Les listes ne doivent pas s’animer ligne par ligne.

L’ensemble apparaît naturellement.

Le contenu reste prioritaire sur l’effet.

---

## 4.10 Les cartes

Les cartes semblent légèrement séparées de leur support.

Elles ne flottent jamais.

Elles ne rebondissent pas.

Elles restent stables.

Le mouvement n’existe que lorsqu’une interaction le justifie.

---

## 4.11 Les boutons

Un bouton confirme l’action.

Il ne célèbre jamais le clic.

Le feedback reste discret.

Jamais :

- explosion ;
- rebond ;
- effet ressort.

---

## 4.12 Les Dialogs

Les Dialogs apparaissent calmement.

Le fond s’assombrit légèrement.

Jamais totalement.

L’utilisateur doit continuer à percevoir l’écran précédent.

---

## 4.13 Les chargements

Un chargement ne doit jamais générer de stress.

Préférer :

- Skeleton ;
- Spinner discret.

Éviter :

- barres agressives ;
- animations rapides.

---

## 4.14 La progression

La progression est douce.

Elle ne « saute » jamais brutalement.

Chaque changement est perceptible.

Sans être spectaculaire.

---

## 4.15 Les changements de thème

Le passage clair / sombre est progressif.

L’utilisateur ne doit jamais avoir l’impression d’un flash.

---

## 4.16 Les interactions

Chaque interaction possède un seul retour visuel.

Jamais plusieurs effets simultanés.

Exemple :

- légère variation de couleur ;

ou

- légère élévation.

Mais jamais les deux de manière excessive.

---

## 4.17 Les états vides

Les états vides restent vivants.

Mais très calmes.

Une illustration peut apparaître.

Jamais une animation permanente.

---

## 4.18 Les écrans de pratique

Pendant une séance :

les animations sont réduites au minimum.

Rien ne doit détourner l’attention de la pratique.

---

## 4.19 Les interdits

Ne jamais utiliser :

- bounce ;
- shake ;
- wobble ;
- zoom brutal ;
- rotation décorative ;
- parallaxe ;
- confettis ;
- animations infinies ;
- éléments clignotants.

---

## 4.20 Principe fondamental

Le mouvement ne doit jamais être remarqué.

Il doit être ressenti.

L’utilisateur doit avoir l’impression que l’application respire avec lui.

C’est cela, le rythme de Tai-Chi AI Coach.

---

# Chapitre 5 — Design Tokens

---

## 5.1 Objectif

Les Design Tokens constituent la base de toute l’interface.

Ils garantissent :

- la cohérence ;
- la simplicité ;
- la maintenabilité ;
- l’homogénéité.

Aucune valeur visuelle ne doit être utilisée directement dans les composants.

Toutes les valeurs proviennent des Design Tokens.

---

## 5.2 Philosophie

Les Design Tokens ne décrivent pas des pixels.

Ils décrivent un langage.

Lorsqu’un développeur écrit :

- Surface
- Rice Paper
- Soft Jade
- Radius Large

il sait immédiatement ce que cela représente.

---

## 5.3 Grille

Toute l’application repose sur une grille de :

**8 px**

Aucun espacement arbitraire.

Les espacements sont construits avec :

4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 96 · 128

---

## 5.4 Border Radius

| Token | Valeur |
| --- | --- |
| Extra Small | 4 px |
| Small | 8 px |
| Medium | 16 px |
| Large | 24 px |
| Extra Large | 32 px |

| Usage | Radius |
| --- | --- |
| Cartes | 24 px (Large) |
| Dialogs | 24 px (Large) |
| Boutons | 16 px (Medium) |
| Inputs | 16 px (Medium) |

---

## 5.5 Ombres

Trois niveaux uniquement.

Valeurs CSS officielles (mode clair) :

| Token | Valeur CSS | Usage |
| --- | --- | --- |
| Shadow Small | `0 1px 2px rgba(36, 48, 41, 0.06)` | Séparation légère |
| Shadow Medium | `0 4px 12px rgba(36, 48, 41, 0.08)` | Carte principale |
| Shadow Large | `0 12px 32px rgba(36, 48, 41, 0.12)` | Dialog |

Mode sombre :

| Token | Valeur CSS |
| --- | --- |
| Shadow Small | `0 1px 2px rgba(0, 0, 0, 0.25)` |
| Shadow Medium | `0 4px 12px rgba(0, 0, 0, 0.30)` |
| Shadow Large | `0 12px 32px rgba(0, 0, 0, 0.40)` |

Jamais d’autres niveaux.

---

## 5.6 Bordures

| Token | Largeur | Couleur claire | Couleur sombre |
| --- | --- | --- | --- |
| Border Soft | 1 px | `#E5E1D6` | `#3D4842` |
| Border Strong | 1 px | `#C8C0B0` | `#52605A` |

Jamais de bordure épaisse.

---

## 5.7 Espacement interne

| Contexte | Padding |
| --- | --- |
| Cartes | 24 px |
| Dialogs | 24 à 32 px |
| Sections | 32 px |
| Grandes pages | 48 px |

---

## 5.8 Largeur du contenu

| Token | Valeur | Usage |
| --- | --- | --- |
| Content Max | `1024 px` | Largeur maximale de page |
| Reading Max | `720 px` | Largeur maximale de lecture |
| Gutter Mobile | `16 px` | Marges latérales téléphone |
| Gutter Desktop | `24 px` | Marges latérales desktop |

Le contenu ne doit jamais occuper toute la largeur disponible.

Toujours laisser de l’air.

---

## 5.9 Icônes

Tailles officielles.

| Token | Valeur |
| --- | --- |
| Small | 16 px |
| Normal | 20 px |
| Large | 24 px |
| Hero | 32 px |

Aucune autre taille.

---

## 5.10 Typographie

Familles officielles :

| Rôle | Famille | Fallback |
| --- | --- | --- |
| Titres | Fraunces | `ui-serif, Georgia, serif` |
| Corps | Source Sans 3 | `ui-sans-serif, system-ui, sans-serif` |

Hiérarchie officielle :

| Niveau | Taille | Line-height | Weight | Famille |
| --- | --- | --- | --- | --- |
| Display | 40 px | 48 px | 500 | Fraunces |
| Hero | 32 px | 40 px | 500 | Fraunces |
| H1 | 28 px | 36 px | 600 | Fraunces |
| H2 | 22 px | 30 px | 600 | Fraunces |
| H3 | 18 px | 28 px | 600 | Fraunces |
| Body | 16 px | 26 px | 400 | Source Sans 3 |
| Small | 14 px | 22 px | 400 | Source Sans 3 |
| Caption | 12 px | 18 px | 400 | Source Sans 3 |

Aucun autre niveau.

---

## 5.11 Boutons

| Propriété | Valeur |
| --- | --- |
| Hauteur minimum | 44 px |
| Coins | 16 px |
| Padding | constant |

Le bouton principal est unique.

---

## 5.12 Inputs

| Propriété | Valeur |
| --- | --- |
| Hauteur minimum | 44 px |
| Coins | 16 px |

Jamais d’inputs compacts.

---

## 5.13 Cartes

| Propriété | Valeur |
| --- | --- |
| Padding | 24 px |
| Coins | 24 px |
| Ombre | Shadow Medium |
| Fond clair | Surface `#FFFEF9` |
| Fond sombre | Surface Night `#2C3531` |

Les cartes semblent légèrement séparées de leur support.

Elles ne flottent jamais.

---

## 5.14 Dialogs

| Propriété | Valeur |
| --- | --- |
| Coins | 24 px |
| Padding | 32 px |
| Largeur maximale | `480 px` |
| Fond clair | Surface Elevated `#FCFBF7` |
| Fond sombre | Surface Night Elevated `#343E39` |

Le contenu respire.

---

## 5.15 Navigation

Les zones interactives respectent toujours :

**44 × 44 px** minimum.

---

## 5.16 Animations

Durées officielles.

| Token | Durée |
| --- | --- |
| Rapide | 200 ms |
| Normale | 250–300 ms |
| Contemplative | 350 ms |

Easing officiel :

`cubic-bezier(0.22, 1, 0.36, 1)`

Lorsque `prefers-reduced-motion: reduce` est actif :

- supprimer les déplacements ;
- conserver uniquement les fondus discrets ou aucun mouvement.

Aucune autre durée.

---

## 5.17 Z-index

| Token | Valeur | Usage |
| --- | --- | --- |
| Z Base | `0` | Contenu |
| Z Sticky | `10` | Header / navigation sticky |
| Z Dropdown | `20` | Menus déroulants |
| Z Overlay | `30` | Scrim / fond de Dialog |
| Z Dialog | `40` | Dialogs |
| Z Toast | `50` | Notifications |
| Z Max | `60` | Exception documentée uniquement |

Aucune valeur arbitraire.

---

## 5.18 Responsive

Breakpoints officiels (mobile-first) :

| Token | Largeur minimale |
| --- | --- |
| Mobile | `0 px` |
| Tablet | `768 px` |
| Desktop | `1024 px` |
| Wide | `1280 px` |

Les Design Tokens restent identiques.

Seule la disposition change.

Les composants conservent la même identité.

---

## 5.19 Surfaces et Dark Mode

| Token | Clair | Sombre |
| --- | --- | --- |
| Background | Rice Paper `#F7F6F1` | Night Paper `#1C221F` |
| Background Subtle | Morning Mist `#EFEEE8` | Night Mist `#262E2A` |
| Surface | `#FFFEF9` | Surface Night `#2C3531` |
| Surface Elevated | `#FCFBF7` | Surface Night Elevated `#343E39` |
| Foreground | Ink `#243029` | Mist Ink `#E8E6E1` |
| Foreground Muted | Zen Stone `#66716B` | Zen Stone Soft `#A8B0AB` |
| Primary | Soft Jade `#7A998D` | Soft Jade `#7A998D` |
| Primary Strong | Bamboo `#456A5D` | Bamboo Soft `#9BB5A8` |

Respecter `prefers-color-scheme` lorsque le thème utilisateur est « système ».

---

## 5.20 Variables

Tous les composants utilisent uniquement :

- variables CSS ;
- ou tokens du thème.

Jamais de couleur codée directement dans un composant.

---

## 5.21 Principe fondamental

Les Design Tokens représentent la langue graphique officielle de Tai-Chi AI Coach.

Modifier un token modifie naturellement toute l’application.

Modifier directement un composant est interdit sauf justification exceptionnelle.

---

## 5.22 Références croisées

| Domaine | Chapitre |
| --- | --- |
| Noms et codes couleur | Chapitre 3 — Psychologie des couleurs |
| Palette Dark Mode | Chapitre 3 §3.22 · Chapitre 17 |
| Rythme / Silence Visuel | Chapitre 4 — Rythme et animations |
| Hiérarchie et ton typographique | Chapitre 6 — Typographie |
| Surface / Border | Chapitre 3 · tokens §5.6 · §5.19 |

---

# Chapitre 6 — Typographie

---

## 6.1 Objectif

La typographie est la voix de Tai-Chi AI Coach.

Elle ne cherche jamais à attirer l’attention.

Elle accompagne la lecture.

Elle crée un rythme.

Elle participe directement à la sensation de calme.

Le texte ne doit jamais donner l’impression d’être pressé.

---

## 6.2 Philosophie

La lecture doit être :

- naturelle ;
- fluide ;
- reposante.

Chaque texte doit sembler écrit pour une seule personne.

Jamais pour une foule.

L’application parle toujours calmement.

---

## 6.3 La hiérarchie

La hiérarchie visuelle est volontairement limitée.

Display → Hero → H1 → H2 → H3 → Body → Small → Caption

Aucun autre niveau.

---

## 6.4 Display

Utilisation :

- Splash ;
- Hero principal ;
- Messages exceptionnels.

Très rare.

Jamais utilisé dans les écrans de travail.

---

## 6.5 Hero

Utilisation :

- Accueil ;
- Onboarding ;
- Écrans de bienvenue.

Le Hero doit inspirer le calme.

Jamais l’excitation.

---

## 6.6 H1

Chaque écran possède un seul H1.

Le H1 identifie immédiatement l’écran.

Il ne doit jamais être remplacé par une simple carte.

---

## 6.7 H2

Utilisé pour :

- sections ;
- groupes ;
- cartes principales.

Toujours plus discret que le H1.

---

## 6.8 H3

Uniquement lorsque plusieurs groupes existent sur un même écran.

Ne jamais multiplier inutilement les niveaux.

---

## 6.9 Body

Le texte principal.

C’est lui qui est lu le plus souvent.

Il doit être :

- confortable ;
- aéré ;
- parfaitement lisible.

---

## 6.10 Small

Réservé :

- aides ;
- précisions ;
- informations secondaires.

Jamais pour un texte important.

---

## 6.11 Caption

Utilisation minimale.

Exemples :

- version ;
- métadonnées ;
- copyright.

Jamais pour une information essentielle.

---

## 6.12 Longueur des textes

Les textes sont courts.

Une phrase vaut mieux qu’un paragraphe.

Un paragraphe vaut mieux qu’une page.

L’utilisateur ne doit jamais avoir l’impression de lire une documentation.

---

## 6.13 Le ton

Toujours :

- calme ;
- bienveillant ;
- positif ;
- simple.

Jamais :

- autoritaire ;
- culpabilisant ;
- technique ;
- marketing.

---

## 6.14 Les verbes

Préférer :

Découvrir · Continuer · Respirer · Pratiquer · Observer · Reprendre

Éviter :

Optimiser · Performer · Accélérer · Battre · Gagner · Dépasser

---

## 6.15 Les chiffres

Les chiffres ne sont jamais mis en scène.

Ils informent.

Ils ne servent jamais à mettre l’utilisateur sous pression.

---

## 6.16 Les majuscules

Éviter les MAJUSCULES.

Les utiliser uniquement lorsqu’elles sont réellement nécessaires.

La lecture doit rester douce.

---

## 6.17 Les icônes

Les icônes complètent le texte.

Elles ne le remplacent jamais.

Une icône seule ne doit jamais porter une information importante.

---

## 6.18 Les messages

| Type | Intention |
| --- | --- |
| Erreur | Expliquent |
| Succès | Encouragent |
| Information | Rassurent |

Jamais de formulations anxiogènes.

---

## 6.19 Le silence

Tous les écrans n’ont pas besoin de texte.

Lorsqu’une illustration suffit,

le texte disparaît.

Le silence fait partie du langage.

---

## 6.20 Principe fondamental

Chaque texte de Tai-Chi AI Coach doit donner l’impression qu’un professeur calme s’adresse directement à une seule personne.

Jamais à une salle entière.

La typographie ne transmet pas seulement des informations.

Elle transmet la manière dont l’application prend soin de son utilisateur.

---

## 6.21 Tokens typographiques officiels

Familles :

- Titres : **Fraunces** (`ui-serif, Georgia, serif`)
- Corps : **Source Sans 3** (`ui-sans-serif, system-ui, sans-serif`)

| Niveau | Taille | Line-height | Weight | Famille |
| --- | --- | --- | --- | --- |
| Display | 40 px | 48 px | 500 | Fraunces |
| Hero | 32 px | 40 px | 500 | Fraunces |
| H1 | 28 px | 36 px | 600 | Fraunces |
| H2 | 22 px | 30 px | 600 | Fraunces |
| H3 | 18 px | 28 px | 600 | Fraunces |
| Body | 16 px | 26 px | 400 | Source Sans 3 |
| Small | 14 px | 22 px | 400 | Source Sans 3 |
| Caption | 12 px | 18 px | 400 | Source Sans 3 |

Hiérarchie officielle : Display → Caption (aucun autre niveau).

Ces valeurs sont alignées avec le Chapitre 5 — Design Tokens.

---

# Chapitre 7 — Les composants

---

## 7.1 Objectif

Les composants sont les briques fondamentales de Tai-Chi AI Coach.

Ils doivent donner l’impression d’appartenir à une seule famille.

L’utilisateur ne doit jamais avoir l’impression que plusieurs personnes ont conçu l’interface.

Chaque composant doit sembler évident.

---

## 7.2 Philosophie

Un composant n’existe que pour aider.

Jamais pour décorer.

Chaque composant doit répondre à une seule question :

> Est-ce qu’il simplifie réellement l’expérience ?

Si la réponse est non,

le composant doit être simplifié ou supprimé.

---

## 7.3 Les cartes

Les cartes sont les composants principaux de l’application.

Elles représentent :

- une séance ;
- une progression ;
- une information ;
- une recommandation.

Jamais un simple conteneur.

Une carte doit donner envie d’être ouverte.

Jamais d’être analysée.

---

## 7.4 Les boutons

Les boutons invitent.

Ils ne commandent jamais.

Le bouton principal reste unique.

Les boutons secondaires accompagnent.

Les boutons destructifs sont rares.

Une couleur ne doit jamais suffire à expliquer une action.

Le texte reste prioritaire.

---

## 7.5 Les champs de saisie

Un champ est une invitation.

Il ne doit jamais sembler technique.

Les labels restent toujours visibles.

Les placeholders ne remplacent jamais un label.

Les erreurs sont expliquées calmement.

### Select

Les menus déroulants (`select`) font partie du Design System.

Ils doivent :

- conserver un espace suffisant entre le texte et le chevron ;
- rester immédiatement lisibles ;
- ne jamais comprimer le contenu.

Règles officielles :

- masquer le chevron natif ;
- dessiner un chevron custom ;
- positionner le chevron avec une marge confortable (`right 0.75rem`) ;
- réserver un `padding-right` d’au moins `2rem` pour le chevron ;
- adapter la couleur du chevron à Zen Stone / Foreground Muted.

Le chevron ne doit jamais être collé au bord droit.

---

## 7.6 Les listes

Les listes servent à parcourir.

Jamais à comparer.

Chaque élément possède :

- de l’espace ;
- une hiérarchie claire ;
- une seule action principale.

---

## 7.7 Les Dialogs

Un Dialog représente un moment important.

Il interrompt doucement.

Jamais brutalement.

Il reste :

- court ;
- clair ;
- rassurant.

Une seule question.

Une seule décision.

---

## 7.8 Les notifications

Une notification informe.

Elle ne sollicite jamais inutilement.

Elle apparaît.

Elle disparaît.

Sans interrompre la pratique.

---

## 7.9 Les Skeletons

Le Skeleton donne l’impression que l’écran se construit progressivement.

Il remplace l’attente.

Il ne doit jamais devenir un élément décoratif.

---

## 7.10 Les états vides

Un état vide est une opportunité.

Il explique.

Il rassure.

Il guide.

Il ne donne jamais l’impression d’une erreur.

---

## 7.11 Les messages d’erreur

Un message d’erreur répond toujours à trois questions :

Que s’est-il passé ?

Que peut faire l’utilisateur ?

Que va faire l’application ?

Jamais de message technique.

---

## 7.12 Les confirmations

Toute action importante utilise un Dialog.

Jamais :

- `alert()`
- `confirm()`

Les confirmations restent rares.

---

## 7.13 Les indicateurs

Les badges.

Les compteurs.

Les progressions.

Ils restent discrets.

Ils servent à informer.

Jamais à mettre sous pression.

---

## 7.14 Les composants de pratique

Pendant une séance :

les composants disparaissent autant que possible.

Le Tai Chi reste au centre.

L’interface passe au second plan.

---

## 7.15 Les composants de navigation

La navigation ne doit jamais devenir l’élément principal de l’écran.

Elle accompagne.

Elle reste stable.

Elle est toujours reconnaissable.

---

## 7.16 Les composants de progression

La progression encourage.

Elle ne récompense pas.

Elle montre un chemin.

Pas une performance.

---

## 7.17 Les composants de profil

Le Profil donne à l’utilisateur le contrôle.

Jamais une impression de complexité.

Les réglages restent simples.

Peu nombreux.

Compréhensibles immédiatement.

---

## 7.18 Les composants réutilisables

Tout composant utilisé deux fois doit devenir réutilisable.

Les variantes sont préférées à la duplication.

La cohérence prime toujours sur la rapidité.

---

## 7.19 Les composants interdits

Ne jamais utiliser :

- carrousels automatiques ;
- popups publicitaires ;
- notifications envahissantes ;
- badges clignotants ;
- cartes animées en permanence ;
- tableaux complexes dans le MVP ;
- composants qui distraient pendant la pratique.

---

## 7.20 Principe fondamental

Chaque composant doit disparaître derrière son usage.

L’utilisateur ne doit jamais penser :

> « Quel beau composant. »

Il doit penser :

> « Tout est simple. »

Quand un composant devient invisible parce qu’il est évident,

alors il est réussi.

---

# Chapitre 8 — Mei, la présence discrète

---

## 8.1 Objectif

Mei est la guide officielle de Tai-Chi AI Coach.

Elle ne représente pas l’application.

Elle accompagne l’utilisateur.

Elle ne remplace jamais la pratique.

Elle ne remplace jamais le professeur réel.

---

## 8.2 Philosophie

Mei est une présence.

Jamais une démonstration technologique.

Mei est une guide virtuelle.

Sa nature virtuelle reste transparente.

L’expérience ne repose jamais sur une ambiguïté volontaire.

L’utilisateur doit ressentir qu’il est accompagné,

sans jamais être induit en erreur sur la nature de Mei.

---

## 8.3 Son rôle

Mei :

- accueille ;
- rassure ;
- explique ;
- encourage ;
- accompagne.

Elle ne :

- juge jamais ;
- commande jamais ;
- critique jamais ;
- culpabilise jamais.

---

## 8.4 Son langage

Mei parle peu.

Elle utilise :

- des phrases courtes ;
- un vocabulaire simple ;
- un ton calme.

Elle laisse toujours des silences.

Elle n’occupe jamais tout l’écran.

---

## 8.5 Sa présence

Par défaut,

Mei n’est pas affichée en permanence.

Elle apparaît uniquement lorsqu’elle apporte une valeur réelle.

Elle disparaît ensuite.

Le silence est souvent préférable à une présence permanente.

---

## 8.6 Son regard

Mei regarde l’utilisateur avec bienveillance.

Jamais avec autorité.

Son regard accompagne.

Il ne surveille jamais.

---

## 8.7 Sa posture

Les postures de Mei doivent évoquer :

- l’ouverture ;
- l’équilibre ;
- la sérénité.

Jamais :

- les bras croisés ;
- le doigt pointé vers l’utilisateur ;
- une posture dominante ;
- une attitude martiale agressive.

---

## 8.8 Son emplacement

Lorsque Mei apparaît :

elle ne doit jamais monopoliser l’écran.

En règle générale :

- 20 à 25 % maximum de la surface utile.

Le contenu pédagogique reste toujours prioritaire.

---

## 8.9 Ses interventions

Mei intervient uniquement :

- à l’accueil ;
- pendant l’onboarding (V2) ;
- lors d’une aide contextuelle ;
- à la fin d’une séance ;
- lors d’un encouragement.

Elle ne commente jamais chaque action.

---

## 8.10 Les émotions

Mei transmet :

- le calme ;
- la patience ;
- la confiance ;
- la douceur.

Jamais :

- l’excitation ;
- la compétition ;
- l’urgence.

---

## 8.11 Les animations

Les mouvements de Mei sont :

- lents ;
- fluides ;
- naturels.

Jamais :

- rapides ;
- exagérés ;
- répétitifs.

---

## 8.12 Les expressions

Les expressions restent discrètes.

Les sourires sont naturels.

Les réactions sont sobres.

Elle ne surjoue jamais ses émotions.

---

## 8.13 Les illustrations

Lorsqu’elle est représentée en image fixe :

- lumière douce ;
- fond épuré ;
- vêtements sobres ;
- posture détendue.

Elle ne doit jamais ressembler à une publicité.

---

## 8.14 Les dialogues

Les dialogues de Mei doivent donner l’impression d’une conversation.

Jamais d’un tutoriel.

Elle suggère.

Elle propose.

Elle accompagne.

---

## 8.15 Les interdits

Mei ne doit jamais :

- se présenter comme médecin ;
- se présenter comme maître ;
- promettre des résultats ;
- diagnostiquer ;
- faire peur ;
- culpabiliser ;
- interrompre une pratique sans raison.

---

## 8.16 L’absence

L’absence de Mei est normale.

Le produit doit rester parfaitement utilisable sans elle.

Chaque fonctionnalité doit pouvoir fonctionner même si Mei est désactivée.

---

## 8.17 La personnalisation

Dans les futures versions,

l’utilisateur pourra choisir :

- d’afficher Mei ;
- de réduire ses interventions ;
- de la masquer complètement.

Le produit reste identique.

---

## 8.18 Principe fondamental

Mei ne cherche jamais à être le centre de l’attention.

Le centre de Tai-Chi AI Coach est toujours :

l’utilisateur

et

sa pratique.

Lorsque Mei est parfaitement intégrée,

l’utilisateur a simplement l’impression d’avoir été accompagné avec douceur.

Sans jamais avoir été dérangé.

---

# Chapitre 9 — Les écrans

---

## 9.1 Objectif

Chaque écran de Tai-Chi AI Coach possède une identité propre.

Un écran n’est jamais uniquement une succession de composants.

Il raconte un moment du parcours utilisateur.

Chaque écran doit transmettre une émotion avant de transmettre une information.

---

## 9.2 Philosophie

L’utilisateur ne navigue pas dans un logiciel.

Il traverse une expérience.

Chaque écran constitue une étape de cette expérience.

Le passage d’un écran au suivant doit sembler naturel.

Jamais mécanique.

---

## 9.3 L’écran d’accueil

### Émotion recherchée

Le calme.

L’utilisateur doit ressentir :

> « Je suis au bon endroit. »

L’accueil ne doit jamais être chargé.

Il doit immédiatement montrer :

- la prochaine action ;
- la dernière pratique ;
- la progression générale.

Le reste disparaît.

---

## 9.4 L’onboarding

### Émotion recherchée

La confiance.

L’utilisateur découvre l’application.

Il ne doit jamais avoir peur de faire un mauvais choix.

Chaque étape doit être courte.

Chaque écran doit donner envie d’aller au suivant.

Jamais l’impression de remplir un formulaire.

---

## 9.5 La bibliothèque

### Émotion recherchée

La curiosité.

L’utilisateur doit avoir envie de découvrir les séances.

Les cartes sont aérées.

Peu nombreuses.

Faciles à comparer.

Jamais un catalogue dense.

---

## 9.6 La fiche séance

### Émotion recherchée

La préparation.

L’utilisateur doit ressentir :

> « Je suis prêt. »

L’écran ne montre que les informations nécessaires.

Tout ce qui n’est pas utile à la pratique disparaît.

---

## 9.7 La pratique

### Émotion recherchée

La concentration.

C’est l’écran le plus important de toute l’application.

Tout ce qui détourne l’attention doit disparaître.

Les animations deviennent très discrètes.

Les couleurs restent sobres.

Les contrôles sont peu nombreux.

Le Tai Chi devient l’élément principal.

L’application passe au second plan.

---

## 9.8 La pause

### Émotion recherchée

La respiration.

La pause ne doit jamais donner l’impression d’un arrêt brutal.

Elle représente simplement un moment de calme.

Le retour à la pratique est toujours évident.

---

## 9.9 Le bilan

### Émotion recherchée

La satisfaction.

Jamais la performance.

Le bilan rappelle :

- ce qui vient d’être réalisé ;
- encourage la régularité ;
- propose la suite.

Jamais de comparaison.

Jamais de score.

---

## 9.10 La progression

### Émotion recherchée

La motivation douce.

L’utilisateur voit son chemin.

Pas son classement.

La progression montre :

- la continuité ;
- la régularité ;
- les habitudes.

Jamais une compétition.

---

## 9.11 Le profil

### Émotion recherchée

La maîtrise.

Le profil permet de personnaliser l’application.

Il ne doit jamais devenir une page technique.

Les réglages sont simples.

Compréhensibles immédiatement.

---

## 9.12 Les Dialogs

### Émotion recherchée

La sérénité.

Une confirmation n’est jamais une punition.

Elle aide l’utilisateur à prendre une décision.

Le ton reste toujours bienveillant.

---

## 9.13 Les erreurs

### Émotion recherchée

Le réconfort.

Une erreur ne doit jamais provoquer de stress.

Elle explique simplement :

- ce qui s’est passé ;
- ce qui peut être fait.

---

## 9.14 Les états vides

### Émotion recherchée

L’invitation.

Un écran vide ne doit jamais sembler inachevé.

Il donne envie de commencer.

---

## 9.15 Les transitions

Le passage entre deux écrans fait partie de l’expérience.

Il doit être :

- fluide ;
- silencieux ;
- naturel.

Jamais spectaculaire.

---

## 9.16 Les respirations

Chaque écran possède au moins une grande zone vide.

Cette respiration est volontaire.

Elle fait partie du Design System.

Elle ne doit jamais être supprimée pour ajouter du contenu.

---

## 9.17 Le rythme global

L’utilisateur ne doit jamais avoir l’impression de courir.

Chaque écran ralentit légèrement le rythme.

Le produit accompagne.

Il ne pousse jamais.

---

## 9.18 Les interdits

Ne jamais créer un écran qui :

- ressemble à un tableau de bord financier ;
- ressemble à une application de fitness ;
- montre des dizaines d’informations simultanément ;
- affiche plusieurs actions principales.

---

## 9.19 Le parcours

À la fin de chaque écran,

l’utilisateur doit naturellement savoir :

- où il est ;
- ce qu’il vient de faire ;
- quelle est la prochaine étape.

Sans réfléchir.

---

## 9.20 Principe fondamental

Un écran réussi n’est pas celui qui montre beaucoup d’informations.

C’est celui qui montre exactement ce dont l’utilisateur a besoin au bon moment.

Chaque écran de Tai-Chi AI Coach doit donner l’impression d’accompagner la pratique.

Jamais de la diriger.

---

# Chapitre 10 — L’ambiance

---

## 10.1 Objectif

L’ambiance est la somme de tous les détails de l’interface.

Elle ne dépend pas :

- d’une couleur ;
- d’une animation ;
- d’un composant.

Elle naît de leur harmonie.

L’utilisateur doit ressentir une atmosphère.

Pas simplement voir une interface.

---

## 10.2 La première impression

Les cinq premières secondes sont essentielles.

En ouvrant Tai-Chi AI Coach, l’utilisateur doit ressentir :

- le calme ;
- la confiance ;
- la curiosité ;
- l’envie de pratiquer.

Jamais :

- la complexité ;
- la performance ;
- la pression.

---

## 10.3 Le silence numérique

L’application ne cherche jamais à occuper toute l’attention.

Elle accepte les silences.

Elle accepte les espaces.

Elle accepte les pauses.

L’utilisateur n’est jamais bombardé d’informations.

---

## 10.4 Le rythme de lecture

Le regard doit suivre naturellement un chemin.

Toujours :

Titre

↓

Contenu

↓

Action

Jamais plusieurs parcours visuels concurrents.

---

## 10.5 Les respirations

Chaque écran possède plusieurs respirations.

Entre :

- les sections ;
- les cartes ;
- les groupes.

Ces espaces sont volontaires.

Ils participent directement à la sensation de calme.

---

## 10.6 La densité

Tai-Chi AI Coach préfère afficher :

moins

mais mieux.

Un écran ne cherche jamais à tout montrer.

Chaque élément affiché doit avoir une raison d’être.

---

## 10.7 La lumière

Toute l’application semble éclairée par une lumière naturelle.

Jamais :

- froide ;
- artificielle ;
- spectaculaire.

Les surfaces semblent baignées d’une lumière douce.

---

## 10.8 La matière

Les composants évoquent :

- le papier ;
- le tissu ;
- le bois ;
- la pierre.

Jamais :

- le métal ;
- le plastique ;
- le verre futuriste.

---

## 10.9 Les saisons

Le produit doit pouvoir évoluer subtilement selon les saisons.

Sans modifier son identité.

Par exemple :

printemps :

plus lumineux.

automne :

plus chaleureux.

Toujours avec discrétion.

---

## 10.10 Le mouvement

Même immobile,

l’interface doit donner une impression de fluidité.

Les proportions,

les espacements,

les couleurs,

participent à cette sensation.

---

## 10.11 Les illustrations

Les illustrations ne sont jamais décoratives.

Elles servent à créer une émotion.

Une illustration inutile est supprimée.

---

## 10.12 Les photographies

Une photographie doit toujours sembler naturelle.

Jamais mise en scène.

Jamais publicitaire.

Le regard reste doux.

La lumière reste diffuse.

---

## 10.13 Les icônes

Les icônes respirent.

Elles ne remplissent jamais tout l’espace disponible.

Elles accompagnent le texte.

Jamais l’inverse.

---

## 10.14 Le temps

L’application donne toujours l’impression d’avoir du temps.

Elle n’incite jamais à aller plus vite.

Elle accompagne le rythme naturel de l’utilisateur.

---

## 10.15 Les émotions

Les émotions recherchées sont :

- calme ;
- sérénité ;
- équilibre ;
- confiance ;
- curiosité ;
- satisfaction.

Aucune autre émotion ne doit devenir dominante.

---

## 10.16 Les émotions interdites

Éviter absolument :

- urgence ;
- frustration ;
- compétition ;
- culpabilité ;
- surcharge ;
- agitation.

Si un écran provoque l’une de ces émotions,

il doit être repensé.

---

## 10.17 L’élégance

L’élégance vient :

- des proportions ;
- des espacements ;
- de la simplicité.

Jamais :

- des effets graphiques ;
- des animations ;
- des couleurs.

---

## 10.18 La cohérence

Chaque écran doit donner l’impression d’appartenir au même univers.

L’utilisateur ne doit jamais se demander :

> « Suis-je encore dans la même application ? »

---

## 10.19 La mémoire

Après plusieurs semaines d’utilisation,

l’utilisateur doit se souvenir de Tai-Chi AI Coach comme :

> une application agréable,

et non

> une application spectaculaire.

---

## 10.20 Principe fondamental

L’ambiance est plus importante que l’effet.

Lorsqu’un choix oppose :

- une interface impressionnante ;

et

- une interface apaisante,

Tai-Chi AI Coach choisit toujours la seconde.

---

# Chapitre 11 — La composition des écrans

---

## 11.1 Objectif

Chaque écran de Tai-Chi AI Coach suit une structure commune.

L’utilisateur ne doit jamais avoir besoin de réapprendre à utiliser une page.

Les écrans changent de contenu.

Jamais de logique de composition.

---

## 11.2 Philosophie

La composition doit sembler naturelle.

L’utilisateur ne doit jamais chercher :

- où regarder ;
- où cliquer ;
- où commencer.

Le regard est guidé naturellement.

---

## 11.3 Structure générale

Tous les écrans suivent le même rythme.

```text
Header

↓

Titre

↓

Sous-titre éventuel

↓

Contenu principal

↓

Action principale

↓

Espace libre
```

Aucun écran ne doit casser cette logique sans justification.

---

## 11.4 Le Header

Le Header est stable.

Il représente un point de repère.

Il ne change pas d’apparence entre deux écrans.

Sa hauteur reste constante.

---

## 11.5 Le titre

Chaque écran possède :

un seul H1.

Le titre est immédiatement visible.

Il explique où l’utilisateur se trouve.

Il n’explique jamais ce qu’il doit faire.

---

## 11.6 Le sous-titre

Le sous-titre est facultatif.

Il sert uniquement à :

- rassurer ;
- contextualiser ;
- expliquer rapidement.

Il ne dépasse généralement pas deux lignes.

---

## 11.7 Le contenu principal

Le contenu est organisé par blocs.

Chaque bloc possède :

- un objectif unique ;
- une hiérarchie claire ;
- beaucoup d’espace.

Les blocs ne se touchent jamais.

---

## 11.8 L’action principale

Chaque écran possède une seule action dominante.

Cette action est immédiatement identifiable.

Les autres actions restent secondaires.

---

## 11.9 Les actions secondaires

Elles accompagnent.

Elles ne rivalisent jamais avec l’action principale.

Leur poids visuel reste faible.

---

## 11.10 Les groupes

Les éléments appartenant au même sujet sont regroupés.

Les groupes différents sont séparés par une respiration importante.

Le regard comprend naturellement la structure.

---

## 11.11 Les cartes

Une carte représente toujours une seule idée.

Si plusieurs idées apparaissent dans une même carte,

celle-ci doit être repensée.

---

## 11.12 Les listes

Une liste est :

- courte ;
ou

- paginée.

Une liste interminable n’existe jamais.

---

## 11.13 Les zones vides

Chaque écran doit conserver une zone de respiration.

Cette zone ne sera jamais remplie « pour faire joli ».

Elle participe directement au confort visuel.

---

## 11.14 Le scroll

Le scroll est accepté.

Il ne doit jamais être évité au prix d’un écran surchargé.

Mieux vaut :

un écran long

qu’un écran dense.

---

## 11.15 La largeur

Le contenu ne doit jamais s’étaler inutilement.

Même sur un grand écran.

Le regard doit rester concentré.

---

## 11.16 Les sections

Une section possède :

- un titre ;
- un contenu ;
- une respiration avant et après.

Elle constitue une unité visuelle.

---

## 11.17 Les états

Tous les écrans prévoient :

- chargement ;
- vide ;
- erreur ;
- succès.

Ces états utilisent exactement la même composition que l’écran principal.

Ils ne donnent jamais l’impression d’un écran différent.

---

## 11.18 Les transitions

Le passage d’une section à une autre reste discret.

Le contenu semble naturellement apparaître.

Jamais brutalement.

---

## 11.19 Les écrans complexes

Si un écran contient plus de trois objectifs différents,

il doit être découpé.

La simplicité est toujours privilégiée.

---

## 11.20 Principe fondamental

Un écran réussi ne montre jamais tout.

Il montre exactement ce dont l’utilisateur a besoin,

au moment où il en a besoin.

Chaque écran doit donner une impression de clarté,

de calme

et

d’évidence.

---

# Chapitre 12 — La respiration de l’interface

---

## 12.1 Objectif

Une interface Tai Chi ne se contente pas d’être belle.

Elle respire.

Le rythme visuel de l’application est directement inspiré de la pratique du Tai Chi.

Chaque écran possède une respiration.

Chaque interaction possède une respiration.

Chaque pause possède une respiration.

---

## 12.2 Le principe

Dans le Tai Chi,

chaque mouvement alterne :

Plein

↓

Vide

↓

Plein

↓

Vide

L’interface suit exactement la même logique.

Le plein représente :

- le contenu ;
- l’action ;
- l’information.

Le vide représente :

- le silence ;
- le repos ;
- l’observation.

---

## 12.3 Les respirations visuelles

Une respiration visuelle est un espace volontaire.

Elle n’est jamais un oubli.

Elle permet :

- au regard de ralentir ;
- au cerveau de se reposer ;
- au contenu d’exister.

Une respiration possède autant d’importance qu’un composant.

---

## 12.4 Les respirations verticales

Entre deux sections importantes,

laisser une respiration généreuse.

Cette respiration est plus importante que la séparation graphique.

Les espacements remplacent souvent les bordures.

---

## 12.5 Les respirations horizontales

Le contenu ne doit jamais toucher les bords.

Même sur mobile.

L’utilisateur doit sentir que le contenu est accueilli.

Jamais enfermé.

---

## 12.6 Les respirations temporelles

Toutes les interactions possèdent une respiration.

Après une action,

l’interface laisse le temps de comprendre.

Elle ne passe jamais immédiatement à la suivante.

---

## 12.7 Les respirations de lecture

Le texte doit être découpé.

Une idée.

↓

Une respiration.

↓

Une autre idée.

Jamais un bloc compact.

---

## 12.8 Les respirations de pratique

Pendant une séance,

l’interface ralentit encore davantage.

Les animations diminuent.

Les informations disparaissent progressivement.

La pratique prend toute la place.

---

## 12.9 Les respirations émotionnelles

Une bonne interface laisse parfois l’utilisateur seul.

Après un bilan.

Après une séance.

Après un encouragement.

Elle n’ajoute pas immédiatement une nouvelle action.

---

## 12.10 Les rythmes

L’application alterne :

Écran riche

↓

Écran léger

↓

Écran riche

↓

Écran très léger

Cette alternance évite la fatigue.

---

## 12.11 Les micro-pauses

Avant un changement important,

l’application ralentit légèrement.

Quelques centaines de millisecondes suffisent.

Cette micro-pause prépare naturellement le cerveau.

---

## 12.12 Les grands espaces

Les grands espaces ne sont jamais vides.

Ils représentent :

le calme.

Ils permettent au regard de respirer.

Ils donnent de la valeur au contenu.

---

## 12.13 Les regroupements

Les éléments appartenant à la même idée restent proches.

Les idées différentes respirent entre elles.

L’utilisateur comprend naturellement l’organisation.

---

## 12.14 Les transitions

Une transition est un souffle.

Elle accompagne.

Elle ne coupe jamais.

L’utilisateur ne doit jamais ressentir une rupture.

---

## 12.15 Les interruptions

Les interruptions sont exceptionnelles.

Lorsqu’elles existent :

elles restent douces.

Jamais :

- agressives ;
- sonores ;
- envahissantes.

---

## 12.16 Les dialogues

Avant de demander une décision,

l’interface laisse toujours une respiration.

L’utilisateur ne doit jamais avoir l’impression d’être pressé.

---

## 12.17 Les réussites

Une réussite est accueillie avec simplicité.

Une respiration.

Un message.

Puis le calme revient.

Jamais une célébration.

---

## 12.18 Les erreurs

Une erreur ralentit.

Elle explique.

Elle laisse le temps de comprendre.

Elle ne pousse jamais à agir immédiatement.

---

## 12.19 Les écrans

Chaque écran doit être observé avec cette question :

> Est-ce que cet écran respire ?

Si la réponse est non,

le contenu est probablement trop dense.

---

## 12.20 Principe fondamental

Le Tai Chi enseigne que le vide est aussi important que le plein.

Tai-Chi AI Coach applique exactement le même principe.

Le silence,

les espaces,

les pauses,

les respirations,

font partie intégrante de l’expérience.

Ils ne seront jamais supprimés pour afficher davantage d’informations.

---

# Chapitre 13 — La lumière

---

## 13.1 Objectif

La lumière est l’élément invisible du Design System.

Elle ne doit jamais être remarquée.

Elle doit uniquement être ressentie.

Une bonne lumière donne l’impression que l’application est paisible.

Une mauvaise lumière transforme immédiatement l’interface en logiciel.

---

## 13.2 Philosophie

Tai-Chi AI Coach est éclairé comme une salle de pratique au lever du jour.

La lumière est :

- naturelle ;
- diffuse ;
- chaude ;
- stable.

Jamais :

- artificielle ;
- spectaculaire ;
- directionnelle.

---

## 13.3 La lumière du matin

Toute l’application évoque une lumière douce.

Jamais un soleil éclatant.

Jamais une nuit profonde.

Le matin représente :

- le début ;
- la respiration ;
- l’équilibre.

C’est cette sensation qui doit être retrouvée.

---

## 13.4 Les surfaces

Les surfaces ne brillent jamais.

Elles diffusent doucement la lumière.

Les reflets sont presque inexistants.

L’utilisateur ne doit jamais être distrait.

---

## 13.5 Les ombres

Les ombres ne représentent pas une profondeur.

Elles représentent une séparation.

Une ombre n’existe que pour aider la lecture.

Jamais pour créer un effet.

---

## 13.6 Les contrastes

Les contrastes restent doux.

Le regard ne doit jamais être agressé.

Les transitions entre deux couleurs sont progressives.

Le confort de lecture est toujours prioritaire.

---

## 13.7 Les cartes

Une carte semble légèrement séparée de son support.

Elle ne flotte jamais.

L’effet de volume reste extrêmement discret.

---

## 13.8 Les Dialogs

Les Dialogs apparaissent naturellement.

Le fond perd légèrement en luminosité.

Jamais complètement.

Le contenu précédent reste perceptible.

L’utilisateur conserve ses repères.

---

## 13.9 Le mode sombre

Le mode sombre n’est pas une inversion du mode clair.

Il représente une ambiance différente.

Les noirs absolus sont évités.

Les gris très foncés remplacent le noir.

Les contrastes restent doux.

La fatigue visuelle reste faible.

---

## 13.10 Les illustrations

Les illustrations utilisent une lumière cohérente avec toute l’application.

Jamais de lumière dramatique.

Jamais de contre-jour violent.

Jamais d’effets HDR.

---

## 13.11 Mei

Lorsque Mei apparaît,

elle est éclairée exactement comme l’interface.

Elle appartient au même univers.

Elle ne doit jamais sembler collée sur l’écran.

---

## 13.12 Les photographies

Toutes les photographies utilisent :

- lumière naturelle ;
- couleurs légèrement désaturées ;
- ombres douces.

Jamais :

- flash ;
- studio agressif ;
- contrastes extrêmes.

---

## 13.13 Les transitions

La lumière accompagne les transitions.

Elle ne change jamais brutalement.

L’utilisateur ne doit jamais percevoir un flash.

---

## 13.14 Les états

Succès.

Erreur.

Information.

Tous utilisent exactement la même qualité de lumière.

La couleur change.

Jamais la lumière.

---

## 13.15 Les saisons

La lumière peut évoluer très légèrement selon les saisons.

Printemps.

Été.

Automne.

Hiver.

Mais l’identité reste toujours immédiatement reconnaissable.

---

## 13.16 Les composants

Tous les composants utilisent la même logique lumineuse.

Aucun composant ne possède sa propre personnalité.

La cohérence est absolue.

---

## 13.17 Les interdits

Ne jamais utiliser :

- glow ;
- néons ;
- ombres multiples ;
- lumière colorée ;
- halos artificiels ;
- surfaces miroir.

Ces effets détruisent immédiatement l’ambiance Tai Chi.

---

## 13.18 Les émotions

Une bonne lumière donne envie :

de rester.

Une mauvaise lumière donne envie :

de quitter l’écran.

---

## 13.19 Le test

En regardant une capture d’écran,

la première impression doit être :

> « Cette interface semble calme. »

Jamais :

> « Cette interface est spectaculaire. »

---

## 13.20 Principe fondamental

La lumière de Tai-Chi AI Coach ne cherche jamais à montrer.

Elle cherche uniquement à apaiser.

Si l’utilisateur remarque la lumière,

c’est qu’elle est déjà trop présente.

---

# Chapitre 14 — L’expérience sensorielle

---

## 14.1 Objectif

Tai-Chi AI Coach ne cherche pas uniquement à être utilisé.

Il cherche à être ressenti.

L’expérience sensorielle constitue la dernière couche du Design System.

Elle relie :

- la vue ;
- le rythme ;
- le silence ;
- la respiration.

Elle donne au produit sa personnalité.

---

## 14.2 Philosophie

Une bonne interface disparaît.

Une excellente interface fait oublier qu’elle existe.

L’utilisateur ne doit plus penser :

> « J’utilise une application. »

Il doit simplement avoir la sensation :

> « Je prends un moment pour moi. »

---

## 14.3 La lenteur

Le produit assume la lenteur.

Jamais la précipitation.

Le rythme général invite naturellement l’utilisateur à ralentir.

Cette lenteur n’est jamais une perte de performance.

Elle est volontaire.

---

## 14.4 Les micro-silences

Après une action importante,

l’interface laisse volontairement un court silence.

Aucun nouveau message.

Aucune nouvelle animation.

Aucune sollicitation.

Le cerveau termine naturellement son action.

---

## 14.5 Les respirations émotionnelles

Chaque étape importante possède une respiration.

Exemples :

début d’une séance

↓

respiration

↓

première consigne

Fin d’une séance

↓

respiration

↓

bilan

Jamais l’inverse.

---

## 14.6 Les sensations

L’utilisateur doit ressentir :

- stabilité ;
- confiance ;
- simplicité ;
- douceur.

Jamais :

- urgence ;
- compétition ;
- pression.

---

## 14.7 Le regard

Le regard doit toujours trouver naturellement un point de repos.

Chaque écran possède une zone calme.

Cette zone ne contient aucune sollicitation.

---

## 14.8 La fatigue

L’application lutte contre la fatigue cognitive.

Elle réduit volontairement :

- le bruit visuel ;
- les décisions inutiles ;
- les interruptions.

---

## 14.9 Les émotions positives

Le produit valorise :

- la régularité ;
- le plaisir de pratiquer ;
- la progression personnelle.

Jamais la comparaison.

Jamais la performance.

---

## 14.10 Les émotions négatives

Le produit évite volontairement :

- frustration ;
- culpabilité ;
- sentiment d’échec ;
- peur de manquer.

Les erreurs restent toujours réparables.

---

## 14.11 Les récompenses

Une pratique terminée n’est jamais célébrée comme une victoire.

Elle est reconnue avec simplicité.

Quelques mots suffisent.

Le calme revient ensuite.

---

## 14.12 Les interruptions

Une interruption doit rester exceptionnelle.

Lorsqu’elle est nécessaire :

elle est discrète.

Elle laisse toujours le contrôle à l’utilisateur.

---

## 14.13 Le temps

Tai-Chi AI Coach ne cherche jamais à faire gagner du temps.

Il cherche à rendre le temps plus agréable.

Cette nuance est fondamentale.

---

## 14.14 Le rythme quotidien

L’application doit pouvoir être ouverte :

- une minute ;
- dix minutes ;
- une heure.

Sans jamais donner l’impression que la séance est trop courte ou trop longue.

Chaque pratique a la même valeur.

---

## 14.15 La mémoire émotionnelle

Après plusieurs semaines,

l’utilisateur ne doit pas se souvenir :

des boutons.

des menus.

des cartes.

Il doit se souvenir :

du calme.

---

## 14.16 Les détails

Les détails comptent.

Un espace.

Une transition.

Une phrase.

Une couleur.

Pris séparément,

ils semblent insignifiants.

Ensemble,

ils créent l’identité de Tai-Chi AI Coach.

---

## 14.17 Les sensations interdites

Ne jamais provoquer :

- addiction ;
- urgence ;
- pression quotidienne ;
- peur de perdre une série ;
- récompenses artificielles.

Le produit respecte toujours le rythme réel de la personne.

---

## 14.18 La philosophie finale

Tai-Chi AI Coach ne cherche pas à retenir l’utilisateur.

Il cherche à lui donner envie de revenir naturellement.

Cette différence définit toute l’expérience.

---

## 14.19 Vérification

Avant de valider un nouvel écran, se poser les questions suivantes :

- Est-il calme ?
- Est-il simple ?
- Respire-t-il ?
- Respecte-t-il le rythme naturel de l’utilisateur ?
- Laisse-t-il une sensation positive après utilisation ?

Si une réponse est négative,

l’écran doit être retravaillé.

---

## 14.20 Principe fondamental

Le meilleur compliment que puisse recevoir Tai-Chi AI Coach est :

> « Je me sens plus calme après avoir utilisé l’application. »

Si cette sensation disparaît,

alors le Design System n’est plus respecté.

---

# Chapitre 15 — L’accessibilité émotionnelle

---

## 15.1 Objectif

Tai-Chi AI Coach considère que l’accessibilité ne se limite pas au handicap.

Une interface peut être parfaitement conforme aux normes techniques et rester difficile à vivre.

L’objectif est de rendre l’application confortable pour :

- le corps ;
- les yeux ;
- l’attention ;
- les émotions.

---

## 15.2 Philosophie

L’application ne demande jamais plus d’énergie qu’elle n’en restitue.

Chaque interaction doit diminuer la charge mentale.

Jamais l’augmenter.

---

## 15.3 La fatigue cognitive

L’application lutte activement contre la fatigue cognitive.

Pour cela :

- peu de décisions simultanées ;
- peu d’informations visibles ;
- peu d’actions possibles.

L’utilisateur ne doit jamais avoir l’impression de devoir réfléchir à l’interface.

---

## 15.4 La fatigue visuelle

L’interface protège les yeux.

Éviter :

- contrastes agressifs ;
- saturation excessive ;
- blancs purs ;
- noirs absolus ;
- animations rapides.

Privilégier :

- couleurs chaudes ;
- contrastes doux ;
- respiration visuelle.

---

## 15.5 La fatigue émotionnelle

L’application ne crée jamais :

- d’urgence ;
- de culpabilité ;
- de frustration volontaire.

Une erreur reste une information.

Jamais une sanction.

---

## 15.6 La charge décisionnelle

Chaque écran réduit volontairement le nombre de choix.

Lorsque deux décisions suffisent,

la troisième disparaît.

---

## 15.7 Les confirmations

Une confirmation n’existe que lorsqu’elle protège réellement l’utilisateur.

Jamais pour ralentir son parcours.

---

## 15.8 Les messages

Tous les messages sont :

- courts ;
- rassurants ;
- positifs.

Même une erreur doit donner envie de continuer.

---

## 15.9 Les interruptions

Une interruption est toujours exceptionnelle.

Avant d’interrompre l’utilisateur,

l’application doit se demander :

> Est-ce vraiment indispensable ?

Si la réponse est non,

elle attend.

---

## 15.10 Les couleurs

Les couleurs n’ont jamais pour objectif de provoquer une réaction émotionnelle forte.

Elles guident.

Elles n’imposent jamais.

---

## 15.11 Les sons

Le silence est la valeur par défaut.

Les sons futurs devront toujours être :

- facultatifs ;
- discrets ;
- cohérents avec la pratique.

Jamais envahissants.

---

## 15.12 Les vibrations

Les vibrations ne sont utilisées que lorsqu’elles apportent une réelle valeur.

Jamais comme effet décoratif.

---

## 15.13 Les animations

Une animation ne doit jamais empêcher une personne sensible de rester concentrée.

Toutes les animations importantes doivent pouvoir être réduites ou supprimées.

---

## 15.14 Le temps

L’utilisateur dispose toujours du temps nécessaire.

L’application ne presse jamais.

Aucun chronomètre anxiogène.

Aucune limite arbitraire.

---

## 15.15 Les réussites

La réussite est accueillie avec simplicité.

Le produit remercie.

Il ne célèbre pas.

---

## 15.16 Les erreurs

Une erreur répond toujours :

- à ce qui s’est passé ;
- à ce qui peut être fait ;
- à ce qui va se passer ensuite.

Jamais de message culpabilisant.

---

## 15.17 Les différences

Chaque utilisateur avance à son rythme.

Tai-Chi AI Coach ne compare jamais les personnes entre elles.

L’application respecte toutes les vitesses d’apprentissage.

---

## 15.18 Les émotions

Une bonne accessibilité émotionnelle laisse l’utilisateur :

- plus calme ;
- plus confiant ;
- plus serein

qu’au moment où il a ouvert l’application.

---

## 15.19 Vérification

Avant de valider un écran, se poser ces questions :

- Réduit-il la fatigue ?
- Réduit-il les hésitations ?
- Réduit-il le stress ?
- Donne-t-il envie de continuer ?

Si une réponse est négative,

l’écran doit être retravaillé.

---

## 15.20 Principe fondamental

Une application réellement accessible n’est pas seulement utilisable.

Elle est confortable.

Tai-Chi AI Coach cherche toujours à protéger l’attention,

les émotions

et

la sérénité de son utilisateur.

---

# Chapitre 16 — Responsive Experience

---

## 16.1 Objectif

Tai-Chi AI Coach ne s’adapte pas uniquement à la taille d’un écran.

Il adapte l’expérience.

L’utilisateur doit retrouver la même sensation :

- sur téléphone ;
- sur tablette ;
- sur ordinateur.

Le produit change de forme.

Jamais d’identité.

---

## 16.2 Philosophie

Le Responsive Design ne consiste pas à déplacer des composants.

Il consiste à préserver le confort d’utilisation.

Chaque appareil possède son rythme.

L’application respecte ce rythme.

---

## 16.3 Le téléphone

Le téléphone est l’appareil principal.

Toutes les décisions de conception sont prises en priorité pour lui.

Le téléphone accompagne :

- une pratique quotidienne ;
- quelques minutes disponibles ;
- une consultation rapide.

L’expérience doit être immédiate.

---

## 16.4 La tablette

La tablette offre davantage d’espace.

Cet espace ne doit jamais être rempli artificiellement.

Il sert uniquement à :

- mieux respirer ;
- améliorer la lecture ;
- agrandir les illustrations.

Jamais à ajouter du contenu.

---

## 16.5 L’ordinateur

L’ordinateur permet davantage de confort.

Il ne transforme jamais Tai-Chi AI Coach en logiciel professionnel.

Le contenu reste centré.

Les marges restent généreuses.

Les lignes restent courtes.

---

## 16.6 Les largeurs

L’interface ne cherche jamais à utiliser toute la largeur disponible.

Même sur un écran très large.

Le regard doit rester concentré.

Le contenu reste contenu.

---

## 16.7 Les espacements

Plus l’écran grandit,

plus les respirations augmentent.

Jamais la densité.

---

## 16.8 Les composants

Les composants changent de disposition.

Jamais de personnalité.

Une carte reste une carte.

Un bouton reste un bouton.

Une section reste une section.

---

## 16.9 Les images

Les images grandissent naturellement.

Elles ne deviennent jamais envahissantes.

La pratique reste toujours prioritaire.

---

## 16.10 La navigation

La navigation évolue selon l’appareil.

Mais elle reste immédiatement reconnaissable.

L’utilisateur ne doit jamais devoir réapprendre à naviguer.

---

## 16.11 Les gestes

Sur mobile :

les gestes tactiles restent naturels.

Sur ordinateur :

la souris et le clavier sont privilégiés.

Chaque appareil utilise les interactions qui lui sont propres.

---

## 16.12 Les performances

Le Responsive Experience ne doit jamais dégrader les performances.

Chaque appareil reçoit uniquement ce qui lui est utile.

---

## 16.13 Les respirations

Les grands écrans respirent davantage.

Les petits écrans respirent autrement.

Jamais moins.

---

## 16.14 Les Dialogs

Les Dialogs conservent la même personnalité.

Ils changent seulement de taille.

Jamais de comportement.

---

## 16.15 Les animations

Les animations restent identiques.

Seule leur amplitude peut légèrement évoluer.

Le rythme reste constant.

---

## 16.16 Les pratiques

Une séance de Tai Chi procure exactement la même sensation,

quel que soit l’appareil.

Le support change.

Jamais l’expérience.

---

## 16.17 Les contraintes

Aucun écran ne doit devenir :

- surchargé sur mobile ;
- vide sur desktop.

Chaque écran trouve naturellement son équilibre.

---

## 16.18 Les vérifications

Chaque nouvel écran doit être validé :

- téléphone ;
- tablette ;
- desktop.

L’expérience est comparée.

Pas uniquement la mise en page.

---

## 16.19 Les interdits

Ne jamais :

- créer une version desktop différente ;
- cacher des fonctionnalités importantes ;
- multiplier les comportements selon les appareils.

Le produit reste unique.

---

## 16.20 Principe fondamental

Le Responsive Experience garantit que l’utilisateur retrouve toujours le même Tai-Chi AI Coach.

Peu importe l’appareil,

il retrouve :

- le même calme ;
- la même respiration ;
- la même simplicité ;
- la même sérénité.

---

# Chapitre 17 — La philosophie du mode sombre

---

## 17.1 Objectif

Le mode sombre de Tai-Chi AI Coach n’est pas une inversion du mode clair.

Il constitue une autre ambiance.

La personnalité de l’application reste exactement la même.

Le mode sombre ne doit jamais transformer Tai-Chi AI Coach en application « tech ».

---

## 17.2 Philosophie

Le mode clair évoque :

- le matin ;
- la lumière naturelle ;
- le papier ;
- l’air.

Le mode sombre évoque :

- le soir ;
- le silence ;
- la pierre ;
- la méditation.

Les deux modes racontent la même histoire.

---

## 17.3 Jamais noir

Le noir absolu n’est jamais utilisé.

Il est remplacé par des gris très profonds.

Le regard reste confortable.

La fatigue visuelle diminue.

---

## 17.4 Les contrastes

Le contraste reste suffisant pour l’accessibilité.

Mais il ne devient jamais agressif.

Le texte ne semble jamais « collé » au fond.

---

## 17.5 Les surfaces

Les cartes restent identifiables.

Elles ne disparaissent jamais dans le fond.

Le relief est créé :

- par les valeurs ;
- par la lumière ;
- par les respirations.

Jamais par de fortes ombres.

---

## 17.6 Les couleurs

Les couleurs conservent leur signification.

Soft Jade reste Soft Jade (`#7A998D`).

Bamboo devient Bamboo Soft (`#9BB5A8`) pour la lisibilité des titres.

Rice Paper devient Night Paper (`#1C221F`).

La palette sombre officielle est définie au Chapitre 3 §3.22 et aux tokens §5.19.

L’émotion ne change jamais.

---

## 17.7 Les illustrations

Les illustrations utilisent une lumière cohérente avec le mode sombre.

Jamais de version « flashy ».

Jamais de saturation excessive.

---

## 17.8 Mei

Lorsque Mei apparaît en mode sombre,

elle appartient naturellement au même univers.

Sa lumière reste douce.

Jamais spectaculaire.

---

## 17.9 Les animations

Les animations restent identiques.

Le rythme ne change pas.

Le mode sombre n’accélère jamais les interactions.

---

## 17.10 Les dialogues

Les Dialogs conservent leur personnalité.

Ils restent calmes.

Ils ne deviennent jamais des panneaux noirs massifs.

---

## 17.11 Les ombres

Les ombres sont réduites.

Le contraste naturel suffit.

Le relief vient principalement des valeurs.

---

## 17.12 Les composants

Tous les composants utilisent les mêmes proportions.

Seules les couleurs changent.

L’identité reste parfaitement reconnaissable.

---

## 17.13 Les photographies

Les photographies restent naturelles.

Jamais trop sombres.

Jamais dramatiques.

---

## 17.14 Les émotions

Le mode sombre doit évoquer :

- la tranquillité ;
- la contemplation ;
- le repos.

Jamais :

- la puissance ;
- la technologie ;
- la performance.

---

## 17.15 Les transitions

Le passage clair ↔ sombre est progressif.

Jamais brutal.

L’utilisateur ne doit jamais subir un flash.

---

## 17.16 Le choix

Le mode système est recommandé.

L’utilisateur garde toujours le contrôle.

Le changement reste immédiat.

---

## 17.17 Les interdits

Ne jamais utiliser :

- noir pur ;
- blanc pur sur fond noir ;
- néons ;
- glow ;
- bleu électrique ;
- contrastes extrêmes.

---

## 17.18 Les tests

Chaque nouvel écran est validé :

- en mode clair ;
- en mode sombre.

Les deux expériences doivent transmettre exactement la même émotion.

---

## 17.19 La continuité

Un utilisateur changeant de thème doit avoir l’impression :

de changer de lumière.

Jamais de changer d’application.

---

## 17.20 Principe fondamental

Le mode sombre est une ambiance.

Pas une couleur.

Tai-Chi AI Coach reste la même application.

Seule la lumière change.

---

# Chapitre 18 — Les anti-patterns

---

## 18.1 Objectif

Ce chapitre définit tout ce que Tai-Chi AI Coach ne fera jamais.

Ces règles protègent l’identité du produit.

Elles sont aussi importantes que les règles de conception.

Toute interface qui enfreint ces principes devra être revue avant validation.

---

## 18.2 Philosophie

Un bon Design System ne définit pas uniquement ce qu’il faut faire.

Il définit également ce qu’il ne faut jamais faire.

Chaque anti-pattern représente une dérive possible.

---

## 18.3 Bruit visuel

Ne jamais :

- surcharger un écran ;
- juxtaposer trop de cartes ;
- multiplier les couleurs ;
- multiplier les niveaux visuels.

Le regard doit toujours pouvoir respirer.

---

## 18.4 Densité

Ne jamais remplir un écran simplement parce qu’il reste de la place.

Le vide fait partie du contenu.

Supprimer est souvent préférable à ajouter.

---

## 18.5 Multiplication des actions

Un écran possède une seule action principale.

Deux actions principales créent immédiatement de l’hésitation.

Si plusieurs actions semblent prioritaires :

l’écran doit être repensé.

---

## 18.6 Popups

Ne jamais utiliser :

- `alert()`
- `confirm()`
- `prompt()`

Toutes les interactions importantes utilisent les Dialogs du Design System.

---

## 18.7 Couleurs

Ne jamais utiliser comme couleur dominante :

- rouge vif ;
- bleu électrique ;
- vert fluo ;
- jaune saturé ;
- violet néon.

La couleur guide.

Elle ne crie jamais.

---

## 18.8 Animations

Ne jamais utiliser :

- bounce
- shake
- wobble
- pulse permanent
- zoom spectaculaire
- rotation décorative
- confettis
- éléments clignotants
- animations infinies

Une animation accompagne toujours une action.

Elle ne cherche jamais à attirer l’attention.

---

## 18.9 Ombres

Ne jamais utiliser :

- ombres très noires ;
- ombres multiples ;
- ombres très diffuses ;
- relief exagéré.

Le relief reste discret.

---

## 18.10 Cartes

Une carte représente une seule idée.

Ne jamais :

- empiler plusieurs concepts dans une même carte ;
- mélanger actions et informations sans hiérarchie ;
- supprimer les respirations entre cartes.

---

## 18.11 Typographie

Ne jamais :

- utiliser plusieurs polices ;
- écrire des blocs très longs ;
- utiliser les MAJUSCULES pour attirer l’attention ;
- réduire fortement la taille du texte.

La lecture doit rester confortable.

---

## 18.12 Icônes

Lucide est la seule bibliothèque autorisée.

Ne jamais :

- mélanger plusieurs styles ;
- remplacer un texte important par une icône ;
- utiliser des pictogrammes décoratifs.

---

## 18.13 Emojis

Les emojis sont interdits dans toute l’interface.

Ils peuvent exister uniquement :

- dans des contenus utilisateur ;
- dans des exemples de documentation.

Jamais dans l’UI.

---

## 18.14 Gamification

Ne jamais utiliser :

- trophées ;
- médailles ;
- classements ;
- podiums ;
- séries obligatoires ;
- récompenses artificielles.

La motivation reste personnelle.

Jamais compétitive.

---

## 18.15 Comparaison

L’application ne compare jamais deux utilisateurs.

Elle ne cherche jamais à créer de compétition.

La progression est toujours individuelle.

---

## 18.16 Notifications

Les notifications restent exceptionnelles.

Elles ne doivent jamais interrompre une pratique.

Chaque notification doit avoir une raison clairement identifiable.

---

## 18.17 Mei

Mei ne doit jamais :

- monopoliser l’écran ;
- commenter chaque action ;
- interrompre une pratique ;
- remplacer le contenu pédagogique ;
- devenir la fonctionnalité principale.

---

## 18.18 Dashboard

Le Dashboard ne devient jamais :

- un cockpit ;
- un tableau de bord financier ;
- une page remplie de KPI ;
- une accumulation de widgets.

Il reste un espace calme.

---

## 18.19 Pratique

Pendant une séance :

aucun élément ne doit détourner l’attention.

La pratique est toujours prioritaire.

L’interface passe au second plan.

---

## 18.20 Principe fondamental

Chaque anti-pattern représente une dérive de l’identité du produit.

Lorsqu’un doute apparaît, une seule question doit être posée :

> Est-ce que cette décision rend Tai-Chi AI Coach plus calme ?

Si la réponse est non,

la décision doit être remise en question.

---

# Chapitre 19 — Checklist de validation des écrans

---

## 19.1 Objectif

Cette checklist constitue la validation finale de chaque écran de Tai-Chi AI Coach.

Elle est utilisée :

- avant une Pull Request ;
- avant la validation d’un ticket ;
- avant une Release.

Un écran qui ne satisfait pas cette checklist ne peut pas être considéré comme terminé.

---

## 19.2 Philosophie

Un écran n’est pas validé parce qu’il fonctionne.

Il est validé lorsqu’il respecte :

- la Vision ;
- l’Experience Design System ;
- l’esprit du Tai Chi.

---

## 19.3 Identité

- [ ] L’écran ressemble immédiatement à Tai-Chi AI Coach.
- [ ] Il ne pourrait pas être confondu avec une application de fitness.
- [ ] Il ne ressemble pas à un tableau de bord technique.

---

## 19.4 Émotion

- [ ] L’émotion recherchée est clairement identifiable.
- [ ] L’écran donne envie de ralentir.
- [ ] L’écran inspire confiance.
- [ ] L’écran reste calme.

---

## 19.5 Composition

- [ ] Un seul H1.
- [ ] Une seule action principale.
- [ ] Les sections sont clairement séparées.
- [ ] Les cartes respirent.
- [ ] Les espaces sont suffisants.

---

## 19.6 Couleurs

- [ ] Les couleurs officielles sont utilisées.
- [ ] Aucun contraste agressif.
- [ ] Aucun rouge saturé.
- [ ] Aucun effet visuel inutile.
- [ ] Les couleurs guident sans dominer.

---

## 19.7 Typographie

- [ ] Le texte est court.
- [ ] Les phrases sont simples.
- [ ] Les verbes sont bienveillants.
- [ ] Aucun jargon technique.
- [ ] Aucune MAJUSCULE inutile.

---

## 19.8 Composants

- [ ] Le Design System est respecté.
- [ ] Aucun composant spécifique inutile.
- [ ] Les composants sont réutilisables.
- [ ] Aucun doublon.

---

## 19.9 Navigation

- [ ] L’utilisateur sait immédiatement où il est.
- [ ] La prochaine action est évidente.
- [ ] Aucun chemin ambigu.

---

## 19.10 Animations

- [ ] Les animations restent discrètes.
- [ ] Aucun bounce.
- [ ] Aucun clignotement.
- [ ] Aucun effet spectaculaire.
- [ ] Le rythme est cohérent avec le produit.

---

## 19.11 Lumière

- [ ] Les ombres restent discrètes.
- [ ] Les surfaces sont naturelles.
- [ ] Le mode clair reste chaleureux.
- [ ] Le mode sombre reste apaisant.

---

## 19.12 Accessibilité

Accessibilité technique :

- [ ] Conformité WCAG AA.
- [ ] Contrastes conformes (WCAG AA).
- [ ] Navigation clavier.
- [ ] Focus visible.
- [ ] Lecteurs d’écran.
- [ ] Zones tactiles suffisantes (44 × 44 px).
- [ ] Aucune information portée uniquement par une couleur.
- [ ] `prefers-reduced-motion` respecté.
- [ ] `prefers-color-scheme` respecté (thème système).

Accessibilité émotionnelle :

- [ ] L’écran réduit la fatigue.
- [ ] L’écran ne crée ni urgence ni culpabilité.
- [ ] Les messages restent calmes et réparables.

---

## 19.13 Responsive Experience

- [ ] Téléphone.
- [ ] Tablette.
- [ ] Desktop.
- [ ] Même expérience sur tous les appareils.

---

## 19.14 Pratique

Pour les écrans de séance uniquement :

- [ ] Aucun élément parasite.
- [ ] La pratique reste au centre.
- [ ] Les contrôles restent discrets.
- [ ] L’utilisateur reste concentré.

---

## 19.15 Mei

Lorsque Mei est présente :

- [ ] Elle reste discrète.
- [ ] Elle accompagne.
- [ ] Elle ne monopolise jamais l’écran.
- [ ] Elle peut disparaître sans casser l’expérience.

---

## 19.16 Anti-patterns

- [ ] Aucun emoji.
- [ ] Aucun `alert()`.
- [ ] Aucun `confirm()`.
- [ ] Aucun KPI agressif.
- [ ] Aucune gamification.
- [ ] Aucun tableau complexe.
- [ ] Aucune animation permanente.

---

## 19.17 Performance

- [ ] Build valide.
- [ ] TypeScript valide.
- [ ] ESLint valide.
- [ ] Performances préservées.

---

## 19.18 Question finale

Avant de valider l’écran, répondre à cette question :

> Est-ce que cet écran donne envie de pratiquer le Tai Chi ?

Si la réponse est hésitante,

l’écran doit être retravaillé.

---

## 19.19 Validation

Un écran est considéré comme validé uniquement lorsque :

- toutes les cases sont satisfaites ;
- aucune exception non documentée n’existe ;
- les éventuelles dérogations sont explicitement justifiées.

---

## 19.20 Principe fondamental

Tai-Chi AI Coach ne cherche pas à créer de « beaux écrans ».

Il cherche à créer une expérience cohérente.

Cette checklist garantit que chaque nouvel écran renforce cette expérience au lieu de l’affaiblir.

---

# Chapitre 20 — Les règles d’or

---

## 20.1 Objectif

Ce chapitre conclut l’Experience Design System.

Il rassemble les principes fondamentaux qui ne devront jamais être remis en question.

Toutes les décisions de conception devront être cohérentes avec ces règles.

Lorsqu’un doute apparaît,

ce chapitre fait autorité.

---

## 20.2 Le produit

Tai-Chi AI Coach est un compagnon de pratique.

Jamais un logiciel.

Jamais une plateforme.

Jamais un tableau de bord.

Chaque écran doit rappeler cette identité.

---

## 20.3 Le calme

Le calme est la valeur centrale du produit.

Lorsqu’un choix oppose :

- plus d’effet ;

ou

- plus de calme,

Tai-Chi AI Coach choisit toujours le calme.

---

## 20.4 La simplicité

La simplicité est toujours préférable à la richesse.

Supprimer est souvent une amélioration.

Ajouter demande toujours une justification.

---

## 20.5 La respiration

Le vide fait partie de l’interface.

Il possède la même valeur que le contenu.

Les respirations ne sont jamais supprimées pour afficher davantage d’informations.

---

## 20.6 La personne

L’utilisateur n’est jamais évalué.

Jamais comparé.

Jamais jugé.

L’application accompagne uniquement son propre parcours.

---

## 20.7 La pratique

Le Tai Chi reste toujours plus important que l’interface.

Lorsque l’interface devient plus visible que la pratique,

elle doit être simplifiée.

---

## 20.8 Mei

Mei est une présence.

Jamais une démonstration technologique.

Elle apparaît lorsqu’elle aide.

Elle disparaît lorsqu’elle n’est plus nécessaire.

---

## 20.9 Les couleurs

Les couleurs servent à guider.

Jamais à impressionner.

L’émotion reste toujours plus importante que la saturation.

---

## 20.10 Les animations

Une animation accompagne.

Elle ne divertit jamais.

Elle ne ralentit jamais inutilement.

Elle ne cherche jamais à être remarquée.

---

## 20.11 Les composants

Les composants disparaissent derrière leur usage.

L’utilisateur ne remarque pas le composant.

Il accomplit naturellement son action.

---

## 20.12 Les textes

Les textes rassurent.

Ils expliquent.

Ils encouragent.

Ils ne donnent jamais de leçon.

Ils ne culpabilisent jamais.

---

## 20.13 Les erreurs

Une erreur reste toujours réparable.

Le produit propose une solution.

Jamais une impasse.

---

## 20.14 Les décisions

Lorsqu’un choix de conception est difficile,

poser systématiquement la question :

> Quelle solution protège le mieux le calme de l’utilisateur ?

La réponse guide la décision.

---

## 20.15 Les développements futurs

Toute nouvelle fonctionnalité devra respecter :

- la Vision ;
- l’Experience Design System ;
- le Design Freeze.

Aucune exception implicite.

---

## 20.16 Les revues

Avant toute validation :

relire la checklist du Chapitre 19.

Si un écran échoue,

il n’est pas terminé.

---

## 20.17 L’identité

Tai-Chi AI Coach ne cherche pas à être spectaculaire.

Il cherche à être mémorable.

La différence est fondamentale.

---

## 20.18 La réussite

La réussite du produit ne sera pas mesurée uniquement par :

- le nombre d’utilisateurs ;
- les téléchargements ;
- les abonnements.

Elle sera également mesurée par une question :

> Les utilisateurs se sentent-ils plus sereins après avoir utilisé l’application ?

---

## 20.19 La promesse

Tai-Chi AI Coach promet uniquement ce qu’il peut réellement offrir :

- un accompagnement ;
- une pratique progressive ;
- une expérience calme ;
- une interface respectueuse.

Jamais davantage.

---

## 20.20 Principe fondamental

Chaque ligne de code,

chaque écran,

chaque composant,

chaque couleur,

chaque animation,

chaque mot,

doivent répondre à une seule question :

> Est-ce que cette décision aide réellement l’utilisateur à pratiquer le Tai Chi dans le calme ?

Si la réponse est oui,

alors elle respecte l’esprit de Tai-Chi AI Coach.

Sinon,

elle devra être repensée avant d’être intégrée au produit.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | VALIDÉ |
| Emplacement | `docs/12A_EXPERIENCE_DESIGN_SYSTEM.md` |
| Chapitres | 1–20 (… · Checklist de validation · Règles d’or) |
| Finalisation | 12A.1 — corrections C1–C7 appliquées |
| Fin officielle | Oui |

*Fin officielle du document.*
