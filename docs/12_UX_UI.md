# 12 — UX / UI

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | UX / UI |
| Numéro | 12 |
| Fichier | `docs/12_UX_UI.md` |
| Version | 1.0 |
| Statut | EN REVUE |
| Dernière mise à jour | 5 août 2026 — sync Password Visibility (D-113) |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `docs/03_PERSONAS.md`, `docs/04_USER_JOURNEYS.md`, `docs/05_FEATURES.md`, `docs/06_BUSINESS_MODEL.md`, `docs/07_CONTENT_STRATEGY.md`, `docs/08_TAI_CHI_CURRICULUM.md`, `docs/09_AI_COACH.md`, `docs/10_COMPUTER_VISION.md`, `docs/11_VIRTUAL_HUMANS.md` |
| Documents utilisant celui-ci | `docs/13_TECH_ARCHITECTURE.md`, `docs/18_PWA_OFFLINE.md`, `docs/22_ROADMAP.md`, `docs/24_DEVELOPER_HANDOVER.md` |
| Décisions concernées | D-078 à D-087 |
| Dernière revue | 4 août 2026 — revue croisée `12` ↔ `13` effectuée |
| Autorise le code | Non |

> **NOTE**
>
> Référence officielle UX/UI de conception. Aucune maquette pixel-perfect, aucun choix de police nominative ni tokens CSS figés ici.
> Alignement versions : MVP léger ; IA conversationnelle V1 ; caméra et Mei guide V2 optionnelles.
> Document conforme à `docs/99_DOCUMENTATION_STANDARD.md`.
> Revue croisée avec `docs/13_TECH_ARCHITECTURE.md` effectuée. Cohérence validée ; aucune incohérence bloquante identifiée.

## 2. Objectifs UX

L’expérience utilisateur doit transmettre les valeurs fondamentales de Tai-Chi AI Coach :

- calme ;
- simplicité ;
- bienveillance ;
- confiance ;
- progression.

L’application ne doit jamais générer de stress, de compétition ou de surcharge cognitive.

Objectifs opérationnels :

- permettre une première pratique utile rapidement (`F-033`, `F-013`) ;
- rassurer les personas cœur (P-001, P-002, P-003) ;
- rendre l’accessibilité native (`F-029`) ;
- préserver la reprise sans culpabilité (`F-032`).

## 3. Principes de conception

1. Une seule action principale par écran.
2. Navigation intuitive.
3. Apprentissage progressif.
4. Cohérence graphique.
5. Accessibilité maximale.
6. Réduction des distractions.
7. Feedback immédiat et rassurant.
8. Aucune pression commerciale pendant la pratique.
9. Aucune gamification compétitive (scores sociaux, classements, défis culpabilisants).
10. Dialogues et confirmations via **modales stylées** uniquement — jamais `alert` / `confirm` / `prompt` natifs.

## 4. Philosophie de l'interface

L’interface s’inspire davantage :

- des applications de méditation ;
- des applications de respiration ;
- des expériences zen.

Elle ne reprend **pas** les codes des applications de fitness intensif (intensité, records, streak culpabilisant, compétition).

Ton visuel attendu : espace, lenteur perçue, clarté, dignité.

## 5. Identité visuelle

L’identité graphique privilégie :

- couleurs naturelles ;
- espaces respirants ;
- typographie lisible ;
- illustrations sobres ;
- icônes simples.

Le design doit inspirer immédiatement le calme.

> **HYPOTHÈSE**
>
> Une direction artistique plus précise (logo, illustrations Mei, charte complète) sera figée avant Design Freeze, sans contredire les principes ci-dessous.

## 6. Palette de couleurs

Palette principale (direction, non tokens) :

- vert doux ;
- bleu clair ;
- beige ;
- gris chaud ;
- blanc cassé.

Règles :

- les couleurs d’alerte restent discrètes (prudence, erreur récupérable) ;
- pas de thème « fitness néon » ni de surcharge de contrastes agressifs ;
- contraste suffisant pour WCAG (section 22) ;
- éviter les looks génériques interdits par les conventions projet lorsque le design system sera implémenté (pas de violet-sur-blanc par défaut, etc.).

## 7. Typographie

Les polices doivent être :

- modernes ;
- lisibles ;
- accessibles ;
- expressives sans nuire à la lecture (pas de stack système générique comme seule identité).

Hiérarchie claire :

| Niveau | Usage |
| --- | --- |
| Titres | Écrans, moments clés |
| Sous-titres | Sections |
| Texte | Contenu principal |
| Informations secondaires | Métadonnées, aides |

Tailles et espacements doivent permettre le confort de P-001 et P-005 (`F-029`).

## 8. Design System

Tous les composants suivent un système unique :

- boutons ;
- cartes (uniquement quand elles portent une interaction utile — pas de cartes décoratives dans un hero) ;
- champs ;
- dialogues / modales ;
- notifications in-app ;
- badges sobres (non compétitifs) ;
- indicateurs de progression non comparatifs ;
- menus déroulants (`select`) avec chevron custom et marge confortable (jamais collé au bord).

Aucun composant spécifique ne doit rompre la cohérence visuelle.

Registry runtime des composants : après Design Freeze et implémentation (`docs/98`).

## 9. Navigation

Navigation principale limitée à quelques sections :

| Section | Rôle |
| --- | --- |
| Accueil | Prochaine action, calme, reprise |
| Séances | Pratique guidée / programme du jour |
| Progression | Acquis et régularité (`F-010`) |
| Bibliothèque | Mouvements / contenus (`F-004`) |
| Profil | Compte, paramètres, confidentialité |

Règles :

- profondeur de navigation ≤ **trois niveaux** ;
- une destination claire depuis l’Accueil (souvent « démarrer / reprendre ») ;
- pas de menus secondaires foisonnants en MVP.

## 10. Onboarding

L’onboarding doit être court (`F-033`).

Objectifs :

- découvrir l’application ;
- définir le niveau de départ (sobre) ;
- choisir les objectifs (simples) ;
- présenter le cadre de prudence (`F-016`, `F-031`) ;
- présenter Mei **lorsque le module est disponible** (V2) ;
- expliquer la caméra **lorsque le module est disponible** (V2), toujours comme option.

Durée cible : **moins de cinq minutes**.

Règles par version :

| Version | Contenu onboarding |
| --- | --- |
| MVP | Découverte, prudence, première séance ; sans Mei ni caméra obligatoires |
| V1 | + éventuelle intro IA concise si pertinente |
| V2 | + présentation optionnelle Mei / caméra, refusables |

P-002 / parcours pressés : onboarding allégeable ou contournable conceptuellement (`docs/04_USER_JOURNEYS.md`).

## 11. Tableau de bord (Accueil)

Le tableau de bord affiche en priorité :

- prochaine séance / reprise (`F-008`, `F-013`, `F-032`) ;
- progression sobre (`F-010`) ;
- recommandations douces ;
- historique récent (`F-009`) ;
- objectifs personnels simples.

Les informations secondaires restent masquées ou accessibles en un geste volontaire.

Pas de bandeau Promo, pas de stats competitifs, pas de surcharge « dashboard ».

## 12. Bibliothèque

Les séances / contenus sont classés par :

- niveau ;
- objectif ;
- durée ;
- style (lorsque plusieurs styles existent) ;
- programme.

Une recherche rapide est disponible dès que le volume le justifie.

Alignement catalogue : `F-004`, `F-002` (orientation styles), `F-011` (favoris V1).

## 13. Déroulement d'une séance

Chaque séance suit une structure constante pour rassurer, alignée sur `docs/08_TAI_CHI_CURRICULUM.md` :

| Phase UX | Équivalent cursus |
| --- | --- |
| Introduction | Accueil / Objectif |
| Préparation | Entrée (respiration / recentrage), prudence |
| Pratique | Corps de séance (démo → essai) |
| Retour au calme | Respiration / relaxation (`F-014`, `F-015`) |
| Bilan | Clôture sobre, sans notation |

Règles UX séance :

- une intention unique visible ;
- pause et reprise toujours possibles (`F-032`) ;
- aucun score de « réussite » social ;
- silence respecté pendant la concentration ;
- pas d’interruption Premium.

## 14. Interface caméra

L’utilisation de la caméra est toujours volontaire (D-057, D-081).

L’utilisateur peut :

- l’activer ;
- la désactiver ;
- la suspendre.

Règles :

- la caméra ne bloque jamais une séance ;
- consentement explicite avant analyse ;
- états d’incertitude visibles et rassurants (`docs/10_COMPUTER_VISION.md`) ;
- prévu pour V2 (`F-021`, `F-022`) ; hors MVP.

## 15. Présence de Mei

Mei apparaît uniquement lorsqu’elle apporte une valeur pédagogique (D-063, D-082).

Sa présence reste :

- discrète ;
- rassurante ;
- ponctuelle.

Elle disparaît pendant les phases de concentration.

Règles :

- transparente sur sa nature virtuelle (D-065) ;
- jamais médecin / maître / certificatrice ;
- module optionnel V2 (`F-023`) ;
- MVP / V1 restent utilisables via vidéo pédagogique (`F-006`).

## 16. IA Coach

L’IA intervient pour :

- expliquer ;
- encourager ;
- adapter.

Règles UX :

- concise ;
- évite les longs discours ;
- jamais intrusive pendant un enchaînement concentré ;
- alignée sur `docs/09_AI_COACH.md` ;
- prévue V1 (`F-019`, `F-020`) ; hors MVP complexe.

## 17. Progression

La progression met en avant :

- la régularité ;
- les acquis ;
- les prochaines étapes.

Interdit :

- comparaison avec d’autres utilisateurs ;
- classements ;
- badges de performance compétitive ;
- streak culpabilisant.

(`F-010`, `docs/04_USER_JOURNEYS.md`, `HP-014`.)

## 18. Notifications

Les notifications sont limitées (`F-017`, V1, opt-in).

Objectifs :

- rappeler une séance ;
- encourager ;
- informer.

Jamais :

- pression commerciale ;
- culpabilisation ;
- spam.

## 19. Paramètres

Les paramètres regroupent (`F-028`) :

- compte (`F-039` lorsque présent) ;
- confidentialité / export (`F-030`) ;
- langue ;
- voix (lorsque pertinente) ;
- caméra (V2) ;
- notifications (V1+) ;
- téléchargement / hors ligne (selon version) ;
- accessibilité (`F-029`).

### 19.1 Champs mot de passe (exigence UX officielle)

Aligné `docs/16_AUTH_SECURITY.md` (D-113 — Password Visibility Standard).

Tout champ mot de passe de l’application (création, connexion, réinitialisation, changement) doit intégrer :

- un bouton œil pour afficher / masquer le mot de passe ;
- un basculement utilisable au clavier (focus, activation Entrée / Espace) ;
- une accessibilité complète (nom accessible explicite, état annoncé aux technologies d’assistance) ;
- la conservation de la valeur lors du basculement visibility ;
- aucun feedback via `alert` / `confirm` / `prompt` natifs — uniquement UI / modale projet.

Cette règle est une **exigence UX officielle** dès qu’un champ mot de passe existe.

## 20. États de l'interface

Chaque écran prévoit :

| État | Intention |
| --- | --- |
| Chargement | Attente calme, non anxiogène |
| Succès | Confirmation discrète |
| Erreur | Message rassurant + suite possible |
| Hors connexion | Continuité Offline First sur l’essentiel |
| Vide | Invitation claire à la première action |

Tous les états sont illustrés de manière cohérente.

## 21. Responsive Design

L’application fonctionne sur :

- smartphone (prioritaire) ;
- tablette ;
- ordinateur.

Mobile First (D-084), cohérent avec PWA (`docs/13_TECH_ARCHITECTURE.md`).

## 22. Accessibilité

Respect des principes WCAG (`F-029`).

Prise en charge :

- contraste suffisant ;
- navigation clavier ;
- lecteurs d’écran ;
- taille du texte adaptable ;
- cibles tactiles confortables ;
- messages d’erreur accessibles (pas uniquement couleur).

Personas sensibles : P-001, P-005.

## 23. Animations

Les animations sont :

- lentes ;
- fluides ;
- discrètes.

Elles ne doivent jamais distraire ni bloquer une action.

Respecter `prefers-reduced-motion` lorsque applicable.

## 24. Micro-interactions

Les micro-interactions renforcent la compréhension :

- validation ;
- sélection ;
- progression ;
- réussite sobre (pas de fanfare compétitive).

## 25. Gestion des erreurs

Les messages d’erreur sont :

- rassurants ;
- explicites ;
- orientés solution.

Jamais de vocabulaire technique inutile, jamais de pop-up native bloquante.

## 26. Expérience Premium

Les fonctions Premium sont présentées avec sobriété (`docs/06_BUSINESS_MODEL.md`).

Règles :

- aucune interruption de séance ;
- aucun écran intrusif en cours de pratique ;
- pas de paywall précoce sur `F-003` / `F-013` / `F-032` ;
- le Premium enrichit, il ne bloque pas la survie du parcours.

## 27. Internationalisation

L’interface est conçue pour accueillir plusieurs langues sans modification structurelle :

- textes externalisables ;
- longueurs de chaînes variables prévues ;
- pas de texte critique incrusté dans des images seules.

## 28. Évolutions futures

Le design prévoit sans refonte de fond :

- plusieurs guides virtuels ;
- nouveaux programmes ;
- nouveaux appareils ;
- nouveaux modes d’apprentissage ;
- multi-disciplines douces (V3, hypothèse produit).

## 29. Limites UX

L’interface ne doit jamais :

- surcharger l’utilisateur ;
- créer de dépendance ;
- favoriser la compétition ;
- masquer des informations importantes (prudence, confidentialité, refus caméra) ;
- médicaliser ou diagnostiquer.

## 30. Décisions figées par ce document

| ID | Décision |
| --- | --- |
| D-078 | Interface inspirée des applications de méditation |
| D-079 | Une action principale par écran |
| D-080 | Navigation limitée à trois niveaux |
| D-081 | Caméra toujours optionnelle (UX) |
| D-082 | Mei intervient uniquement lorsqu’elle apporte une valeur pédagogique |
| D-083 | Aucune gamification compétitive |
| D-084 | Mobile First |
| D-085 | Accessibilité native |
| D-086 | Animations douces et non intrusives |
| D-087 | Les fonctions Premium ne perturbent jamais la pratique |

## 31. Décisions ouvertes

- choix nominatif des polices et tokens de couleur ;
- wireframes / maquettes haute fidélité ;
- composants exacts du design system implémenté ;
- seuils et libellés précis des notifications ;
- détail i18n des langues V1 ;
- arborescence exacte des écrans MVP (à figer avant Design Freeze).

## 32. Critères de validation

1. Document relu et accepté explicitement.
2. Principes UX alignés Vision / Journeys / Features / Business.
3. Structure de séance cohérente avec le cursus.
4. Caméra et Mei traités comme optionnels / versionnés.
5. Aucune gamification compétitive ni pression Premium en séance.
6. Décisions D-078 à D-087 tracées dans `DECISIONS.md`.
7. Revue croisée avec `docs/13_TECH_ARCHITECTURE.md` effectuée ; cohérence validée ; aucune incohérence bloquante identifiée.
8. Aucun code UI démarré sur la seule base de ce draft.

Statut actuel : **EN REVUE**.

## 33. Conclusion

L’UX de Tai-Chi AI Coach est une expérience calme, mobile-first, accessible, à une action principale par écran, sans compétition ni interruption de pratique.

Mei et la caméra enrichissent plus tard, sans jamais bloquer. Le Premium reste sobre. La progression reste personnelle.

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
