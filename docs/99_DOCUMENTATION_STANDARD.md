# 99 — Documentation Standard

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Documentation Standard |
| Numéro | 99 |
| Fichier | `docs/99_DOCUMENTATION_STANDARD.md` |
| Version | 1.0 |
| Statut | EN RÉDACTION |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `WORKING_RULES.md`, `docs/00_MASTER_PLAN.md` |
| Documents utilisant celui-ci | Tous les documents présents et futurs du dépôt |
| Décisions concernées | D-020 |
| Dernière revue | Non effectuée |
| Autorise le code | Non |

Ce document devient la **référence documentaire officielle** du projet.

À partir de sa validation, tous les documents présents et futurs devront le respecter.

Aucun document ne pourra déroger à cette norme sans décision documentée dans `DECISIONS.md`.

## 2. Objectif

Définir une norme unique afin que tous les fichiers Markdown :

- aient exactement la même présentation ;
- utilisent les mêmes conventions ;
- soient faciles à maintenir ;
- puissent être compris aussi bien par un humain que par une IA.

Ce document est un **guide de style interne directement applicable**.  
Tous les modèles ci-dessous sont destinés à être copiés tels quels.

## 3. Champ d'application

Le standard s’applique à :

- tous les fichiers de `docs/` ;
- `PROJECT_CONTEXT.md` ;
- `WORKING_RULES.md` ;
- `DECISIONS.md` ;
- `RISKS.md` ;
- `CHANGELOG.md` ;
- `BACKLOG.md` ;
- les fichiers de `project/` lorsqu’ils sont rédigés en Markdown de conception.

Il ne s’applique pas au code source, aux commentaires de code, ni aux fichiers générés automatiquement.

**Règle :** en cas de conflit entre un document existant et ce standard, ce standard prime après validation, sauf décision contraire documentée.

## 4. Principes généraux

1. **Une source de vérité** — chaque décision vit à un seul endroit officiel.
2. **Lisibilité avant élégance** — clarté > style littéraire.
3. **Identifiants stables** — un identifiant créé n’est jamais réutilisé pour autre chose.
4. **Statuts explicites** — aucun document sans statut officiel.
5. **Hypothèses visibles** — toute hypothèse est marquée comme telle.
6. **Pas d’ambiguïté de périmètre** — prévu pour / backlog / hors périmètre.
7. **Traçabilité** — toute modification importante apparaît dans `CHANGELOG.md`.
8. **Neutralité** — pas de marketing exagéré, pas de promesse médicale.
9. **Copie facile** — modèles réutilisables, formulations stables.
10. **Compatibilité IA** — structure prévisible, titres numérotés, identifiants explicites.

## 5. Structure obligatoire des documents

### 5.1 En-tête obligatoire

Chaque document de conception doit commencer par un titre H1, puis une section **Statut** contenant exactement ce modèle :

```markdown
# NN — Titre du document

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Titre du document |
| Numéro | NN |
| Fichier | `docs/NN_NOM.md` |
| Version | 1.0 |
| Statut | EN RÉDACTION |
| Dernière mise à jour | JJ mois AAAA |
| Auteur | Nom ou rôle |
| Documents dépendants | `docs/XX_....md`, `docs/YY_....md` |
| Documents utilisant celui-ci | `docs/ZZ_....md` |
| Décisions concernées | D-XXX, D-YYY |
| Dernière revue | JJ mois AAAA ou `Non effectuée` |
```

### 5.2 Ordre minimal recommandé

Après l’en-tête, chaque document doit contenir, dans cet ordre logique :

1. Statut
2. Objectif ou rôle du document
3. Corps numéroté propre au sujet
4. Décisions ouvertes (si pertinent)
5. Critères de validation (si pertinent)
6. Conclusion
7. Pied de document

### 5.3 Règles d’en-tête

- Les champs absents se remplissent par `Aucun` ou `Non effectuée`, jamais par un champ manquant.
- `Documents dépendants` liste uniquement les documents dont le présent document a besoin.
- `Documents utilisant celui-ci` liste les documents connus qui s’appuient dessus.
- `Décisions concernées` pointe vers `DECISIONS.md`.

## 6. Pied de document

Chaque document se termine par ce pied standard :

```markdown
---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN RÉDACTION |
| Prochain document | `docs/NN_NOM.md` ou `Aucun` |
| Fin officielle | Oui |

*Fin officielle du document.*
```

Règles :

- le pied est toujours la dernière section utile du fichier ;
- `Prochain document` suit l’ordre officiel du Master Plan lorsqu’il existe ;
- la mention `*Fin officielle du document.*` est obligatoire.

## 7. Titres

### 7.1 Niveaux autorisés

| Niveau | Usage | Exemple |
| --- | --- | --- |
| H1 | Titre unique du document | `# 03 — Personas` |
| H2 | Sections principales numérotées | `## 1. Statut` |
| H3 | Sous-sections | `### 1.1 En-tête` |
| H4 | Détail local uniquement | `#### Exemple copiable` |

### 7.2 Interdictions

- un seul H1 par document ;
- pas de H5 ni H6 ;
- pas de titre sans numéro de section au niveau H2 ;
- pas de titre décoratif sans contenu ;
- ne pas sauter un niveau (H2 → H4 interdit).

### 7.3 Format du H1

```text
# NN — Titre en français
```

Exemples valides :

```text
# 01 — Vision
# 02 — Product Scope
# 99 — Documentation Standard
```

## 8. Numérotation

### 8.1 Règle

Les sections H2 et H3 suivent une numérotation décimale :

```text
1.
1.1
1.2
2.
2.1
2.1.1
3.
```

### 8.2 Application Markdown

```markdown
## 1. Statut

## 2. Objectif

### 2.1 Périmètre

### 2.2 Hors sujet

## 3. Contenu
```

### 8.3 Règles

- la numérotation recommence à `1.` dans chaque document ;
- on ne renumérote pas silencieusement une section déjà citée ailleurs ;
- si une section est supprimée, son numéro n’est pas réattribuvé dans la même version majeure sans note de migration ;
- les annexes éventuelles utilisent `A.`, `B.`, etc.

## 9. Tableaux

### 9.1 Style obligatoire

```markdown
| Champ | Valeur |
| --- | --- |
| Exemple | Texte |
```

### 9.2 Alignement

- en-têtes à gauche ;
- séparateur `| --- | --- |` ;
- pas d’alignement centré ou à droite sauf besoin numérique justifié ;
- une idée simple par cellule.

### 9.3 Colonnes

- nombre de colonnes stable dans un même tableau ;
- noms de colonnes courts et constants dans tout le dépôt ;
- colonnes recommandées pour les catalogues : `Identifiant`, `Nom`, `Statut`, `Version cible`, `Priorité`.

### 9.4 Interdictions

- tableaux HTML ;
- cellules fusionnées ;
- tableaux purement décoratifs.

## 10. Listes

### 10.1 Listes simples

```markdown
- premier point ;
- deuxième point ;
- troisième point.
```

Règle : points courts, ponctuation cohérente, une idée par puce.

### 10.2 Listes numérotées

```markdown
1. Première étape.
2. Deuxième étape.
3. Troisième étape.
```

Usage : procédures, ordres, priorités séquentielles.

### 10.3 Listes de décisions

```markdown
- **D-014** — Taxonomie officielle des versions — décidé
- **D-016** — MVP volontairement léger — décidé
```

Ou sous forme de tableau :

```markdown
| ID | Décision | Statut |
| --- | --- | --- |
| D-014 | Taxonomie officielle des versions | décidé |
| D-016 | MVP volontairement léger | décidé |
```

## 11. Blocs spéciaux

Tous les blocs spéciaux utilisent exactement ces libellés.  
Modèles copiables :

### 11.1 NOTE

```markdown
> **NOTE**
>
> Information utile qui clarifie le propos sans changer une décision.
```

### 11.2 IMPORTANT

```markdown
> **IMPORTANT**
>
> Point structurant à ne pas ignorer lors d’une rédaction ou d’une revue.
```

### 11.3 ATTENTION

```markdown
> **ATTENTION**
>
> Risque d’erreur, de dérive ou de non-conformité si la consigne est ignorée.
```

### 11.4 HYPOTHÈSE

```markdown
> **HYPOTHÈSE**
>
> Affirmation non validée. Ne pas traiter comme une décision.
```

### 11.5 DÉCISION

```markdown
> **DÉCISION**
>
> **ID :** D-016
> **Décision :** le MVP reste volontairement léger.
> **Statut :** décidé
```

### 11.6 RISQUE

```markdown
> **RISQUE**
>
> **ID :** R-003
> **Risque :** scope MVP trop large.
> **Impact :** retard / reconstruction
```

### 11.7 À FAIRE

```markdown
> **À FAIRE**
>
> Action documentaire restante, sans engagement de développement applicatif.
```

### 11.8 VALIDÉ

```markdown
> **VALIDÉ**
>
> **Élément :** docs/01_VISION.md
> **Date :** JJ mois AAAA
> **Par :** Nom ou rôle
```

## 12. Références croisées

### 12.1 Documents

Format obligatoire :

```text
`docs/01_VISION.md`
```

Forme rédigée acceptée :

```text
voir `docs/02_PRODUCT_SCOPE.md` section 9
```

### 12.2 Fonctionnalités

```text
F-019
F-021
HP-004
```

Exemple :

```text
F-019 est prévue pour V1.
```

### 12.3 Risques

```text
R-001
R-003
```

### 12.4 Décisions

```text
D-008
D-016
```

### 12.5 Personas

```text
P-001
P-002
```

### 12.6 Interdictions

- pas de liens relatifs flous du type « le doc vision » ;
- pas de renvoi sans identifiant lorsqu’un identifiant existe ;
- pas de référence à un numéro de ligne fragile comme source principale.

## 13. Identifiants officiels

### 13.1 Conventions

| Préfixe | Objet | Exemple |
| --- | --- | --- |
| `D-` | Décision | `D-001` |
| `F-` | Fonctionnalité | `F-001` |
| `HP-` | Hors périmètre | `HP-001` |
| `R-` | Risque | `R-001` |
| `P-` | Persona | `P-001` |
| `P0`…`P3` | Priorité | `P0` |
| `MVP` | Version MVP | `MVP` |
| `V1` | Version 1 | `V1` |
| `V2` | Version 2 | `V2` |
| `V3` | Version 3 | `V3` |

### 13.2 Format numérique

- trois chiffres minimum : `001`, `002`, `010` ;
- jamais de réutilisation d’un identifiant supprimé ;
- un identifiant retiré reste réservé et documenté comme retiré.

### 13.3 Versions produit

Versions officielles autorisées dans les documents :

```text
Pré-MVP
MVP
V1
V2
V3
Backlog
Hors périmètre
```

### 13.4 Priorités

```text
P0 = indispensable pour la version cible
P1 = importante
P2 = utile / reportable
P3 = exploratoire / long terme
```

## 14. Versionnement

### 14.1 Schéma

```text
MAJOR.MINOR
```

Exemples :

```text
1.0
1.1
1.2
2.0
```

### 14.2 Signification

| Version | Quand l’utiliser |
| --- | --- |
| `1.0` | Première version complète du document |
| `1.1` | Correction ou précision sans changer le sens structurant |
| `1.2` | Ajout compatible, sans rupture |
| `2.0` | Changement structurant, réorganisation majeure, ou invalidation partielle du contenu précédent |

### 14.3 Règles

- toute montée de version apparaît dans l’en-tête et le pied ;
- toute version `MAJOR` nouvelle doit être mentionnée dans `CHANGELOG.md` ;
- un document `FIGÉ` ne change de version qu’après réouverture documentée.

## 15. Gestion des statuts

### 15.1 Statuts officiels

| Statut | Signification |
| --- | --- |
| `BROUILLON` | Ébauche incomplète, non fiable pour décision. |
| `EN RÉDACTION` | Rédaction active en cours ; contenu exploitable mais non stable. |
| `EN REVUE` | Rédaction terminée côté auteur ; en attente de relecture / validation. |
| `VALIDÉ` | Accepté explicitement ; base autorisée pour les documents dépendants. |
| `FIGÉ` | Gelé (ex. après Design Freeze ou gel local) ; modification interdite hors procédure. |
| `ARCHIVÉ` | Conservé pour historique ; ne plus utiliser comme source active. |

### 15.2 Transitions autorisées

```text
BROUILLON → EN RÉDACTION → EN REVUE → VALIDÉ → FIGÉ → ARCHIVÉ
```

Transitions exceptionnelles :

- `VALIDÉ` → `EN RÉDACTION` uniquement après décision de réouverture ;
- `FIGÉ` → `EN RÉDACTION` uniquement pour erreur critique, risque légal, faille de sécurité ou impossibilité technique documentée.

### 15.3 Formulation interdite

Ne plus utiliser comme statut officiel unique des formulations vagues du type :

```text
À rédiger
Rédigé — non validé
```

Pendant la migration des documents existants, ces formulations peuvent coexister temporairement, mais tout nouveau document doit utiliser les statuts officiels ci-dessus.

## 16. Règles Markdown

### 16.1 Espaces et lignes vides

- une ligne vide entre deux sections H2 ;
- une ligne vide avant et après un tableau ;
- une ligne vide avant et après un bloc de citation spécial ;
- pas de ligne vide inutile en fin de paragraphe ;
- pas d’espaces en fin de ligne.

### 16.2 Largeur

- viser des phrases courtes ;
- pas d’obligation de hard-wrap à 80 caractères ;
- éviter les lignes extrêmes illisibles dans les tableaux.

### 16.3 Code

- blocs ` ```markdown `, ` ```text ` ou langage réel ;
- jamais de bloc de code applicatif dans un document qui interdit le code, sauf exemple documentaire.

### 16.4 Tableaux

- toujours le style GitHub Flavored Markdown ;
- pas de tableau sans en-tête.

### 16.5 Citations

- réservées aux blocs spéciaux ou aux citations courtes de vision/principe ;
- pas de longues citations décoratives.

### 16.6 Liens

- chemins de fichiers en backticks ;
- URLs externes complètes si nécessaires ;
- pas de lien cassé volontaire.

## 17. Règles d'écriture

### 17.1 Style

- français clair, direct, précis ;
- phrases courtes ;
- une idée principale par paragraphe.

### 17.2 Temps

- présent de constat pour l’état actuel ;
- futur prudent pour les évolutions non engagées ;
- éviter le conditionnel marketing.

### 17.3 Personne

- préfère l’impersonnel ou « le produit / le document » ;
- éviter « nous allons révolutionner » ;
- les instructions aux agents peuvent employer l’impératif.

### 17.4 Niveau de détail

- chaque document traite son rôle seulement ;
- pas de stack dans la vision ;
- pas d’écrans détaillés dans le scope ;
- pas de schéma SQL hors documents données/architecture.

### 17.5 Langage

- vocabulaire stable du projet ;
- réutiliser les identifiants officiels ;
- éviter les synonymes changeants pour le même concept.

### 17.6 Neutralité

- pas de promesse médicale ;
- pas de gamification culpabilisante ;
- pas d’exagération commerciale ;
- marquer toute hypothèse.

Formulations recommandées :

```text
prévu pour MVP
prévu pour V1
classée — backlog
hors périmètre
hypothèse non validée
```

Formulations interdites :

```text
à implémenter
sera forcément
garantit la guérison
le meilleur du marché
```

## 18. Règles pour Cursor

Les agents Cursor doivent respecter intégralement les règles suivantes :

1. **Ne jamais modifier un document `VALIDÉ` ou `FIGÉ` sans demande explicite.**
2. **Ne jamais changer une décision** (`D-xxx`) sans instruction et sans mise à jour de `DECISIONS.md`.
3. **Toujours respecter les identifiants** existants (`F-`, `D-`, `R-`, `P-`, `HP-`).
4. **Toujours conserver la numérotation** des sections ; ne pas renommer silencieusement.
5. **Ne jamais réordonner les sections** d’un document structuré sans demande.
6. **Signaler toute contradiction** détectée avec `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md`, `docs/02_PRODUCT_SCOPE.md`, `DECISIONS.md` ou le présent standard.
7. **Mettre à jour `CHANGELOG.md`** pour toute modification importante autorisée.
8. **Ne pas inventer de statut, version ou identifiant hors convention.**
9. **Ne pas commencer le document suivant** si la mission demande de s’arrêter.
10. **Aucun code applicatif** tant que les règles du Master Plan l’interdisent.

Modèle de signalement de contradiction :

```markdown
> **ATTENTION**
>
> Contradiction détectée entre `docs/01_VISION.md` et `docs/02_PRODUCT_SCOPE.md`
> au sujet de : [description courte].
> Aucune modification automatique n’a été faite.
```

## 19. Règles pour ChatGPT

Les sessions ChatGPT / assistants externes doivent appliquer les mêmes contraintes :

1. Ne jamais modifier un document `VALIDÉ` ou `FIGÉ` sans demande explicite.
2. Ne jamais changer une décision sans consigne et traçabilité.
3. Toujours respecter les identifiants officiels.
4. Toujours conserver la numérotation.
5. Ne jamais réordonner les sections sans demande.
6. Signaler toute contradiction.
7. Proposer des textes conformes aux modèles de ce standard.
8. Ne pas introduire de stack, d’API, de schéma ou d’écrans dans un document qui les interdit.
9. Utiliser uniquement les statuts officiels.
10. En cas d’incertitude, demander une clarification plutôt que d’inventer une norme locale.

Prompt minimal de conformité recommandé :

```text
Respecte docs/99_DOCUMENTATION_STANDARD.md.
Conserve les identifiants, statuts et numéros de section.
Signale toute contradiction.
Ne modifie aucun document VALIDÉ ou FIGÉ sans demande explicite.
```

## 20. Critères de conformité

Un document est conforme uniquement si :

- ✓ il possède un H1 au format `NN — Titre` ;
- ✓ il possède une section `1. Statut` complète ;
- ✓ tous les champs d’en-tête obligatoires sont présents ;
- ✓ les titres H2 sont numérotés ;
- ✓ aucun H5/H6 n’est utilisé ;
- ✓ les identifiants respectent les préfixes officiels ;
- ✓ les statuts utilisés sont officiels ;
- ✓ les hypothèses sont marquées ;
- ✓ les références croisées utilisent les chemins ou IDs officiels ;
- ✓ les tableaux suivent le style imposé ;
- ✓ les blocs spéciaux utilisent les libellés officiels ;
- ✓ le pied de document est présent ;
- ✓ aucune formulation interdite de périmètre n’apparaît (« à implémenter », etc.) ;
- ✓ le document ne décide pas hors de son rôle ;
- ✓ les décisions structurantes associées sont tracées dans `DECISIONS.md` lorsque nécessaire ;
- ✓ les modifications importantes sont tracées dans `CHANGELOG.md`.

Checklist copiable :

```markdown
### Checklist de conformité

- [ ] H1 conforme
- [ ] Section Statut complète
- [ ] Version renseignée
- [ ] Statut officiel
- [ ] Dépendances renseignées
- [ ] Numérotation H2/H3 correcte
- [ ] Identifiants conformes
- [ ] Hypothèses marquées
- [ ] Références croisées valides
- [ ] Pied de document présent
- [ ] Pas de dépassement de rôle
- [ ] CHANGELOG à jour si modification importante
- [ ] DECISIONS à jour si décision structurante
```

## 21. Processus de mise à jour

### 21.1 Mise à jour mineure (`x.1`, `x.2`)

1. Vérifier que le document n’est pas `FIGÉ`.
2. Modifier uniquement les sections concernées.
3. Mettre à jour `Version` et `Dernière mise à jour`.
4. Ajouter une entrée dans `CHANGELOG.md`.
5. Si une décision change, mettre à jour `DECISIONS.md`.
6. Si un risque change, mettre à jour `RISKS.md`.

### 21.2 Mise à jour majeure (`2.0+`)

1. Documenter la justification.
2. Créer ou mettre à jour la décision associée.
3. Mesurer l’impact sur les documents dépendants.
4. Monter la version majeure.
5. Faire passer le statut à `EN RÉDACTION` puis `EN REVUE`.
6. Revalider explicitement.

### 21.3 Document `FIGÉ`

Aucune modification de fond sans :

- risque bloquant documenté ;
- décision de réouverture ;
- entrée `CHANGELOG.md`.

## 22. Exceptions

Exceptions rares autorisées uniquement si documentées dans `DECISIONS.md` :

1. document historique archivé conservé tel quel ;
2. extrait externe cité avec son format d’origine ;
3. tableau temporaire de migration pendant l’alignement des anciens documents ;
4. annexe générée automatiquement, clairement marquée comme telle.

Toute autre dérogation est interdite.

Modèle d’exception :

```markdown
> **DÉCISION**
>
> **ID :** D-XXX
> **Décision :** dérogation temporaire au standard 99 pour `docs/NN_NOM.md`
> **Motif :** migration / contrainte externe
> **Échéance :** JJ mois AAAA
> **Statut :** décidé
```

## 23. Conclusion

`docs/99_DOCUMENTATION_STANDARD.md` est la norme documentaire unique du projet.

Il impose une présentation homogène, des identifiants stables, des statuts clairs et des règles identiques pour les rédacteurs humains et les agents IA.

À partir de sa validation, aucun document présent ou futur ne peut ignorer ce standard sans décision documentée.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN RÉDACTION |
| Prochain document | Aucun (référence transversale) |
| Fin officielle | Oui |

*Fin officielle du document.*
