# 98 — Development Documentation Standard

## 1. Statut

| Champ | Valeur |
| --- | --- |
| Nom du document | Development Documentation Standard |
| Numéro | 98 |
| Fichier | `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` |
| Version | 1.0 |
| Statut | EN RÉDACTION |
| Dernière mise à jour | 4 août 2026 |
| Auteur | Projet Tai-Chi-AI-Coach |
| Documents dépendants | `docs/99_DOCUMENTATION_STANDARD.md`, `docs/00_MASTER_PLAN.md`, `WORKING_RULES.md` |
| Documents utilisant celui-ci | Toute tâche de développement, tout agent Cursor, toute documentation `docs/runtime/` |
| Décisions concernées | D-021 |
| Dernière revue | Non effectuée |
| Autorise le code | Non (ce document ne lance pas le développement) |

Ce document est la **constitution officielle du développement**.

À partir de sa validation :

- aucun développement ne peut commencer sans le respecter ;
- toute tâche Cursor doit appliquer ces règles ;
- toute fonctionnalité développée doit mettre à jour la documentation runtime.

Il complète `docs/99_DOCUMENTATION_STANDARD.md` sans le remplacer.

> **IMPORTANT**
>
> Les fichiers de `docs/runtime/` sont définis ici par rôle uniquement.
> Ils ne sont **pas** créés par le présent document.

## 2. Objectif

Définir les règles permanentes de développement du projet pendant toute sa vie :

- comment une tâche entre et sort du cycle ;
- quelle documentation runtime doit être mise à jour ;
- ce qui est obligatoire avant un commit ;
- comment tracer dette, bugs, décisions et mémoire projet ;
- ce que Cursor et ChatGPT doivent faire à chaque tâche.

Ce document est directement applicable. Pas de théorie, pas de généralités, pas de code.

## 3. Champ d'application

S’applique dès qu’une activité de développement est autorisée et engagée :

- écriture de code applicatif ;
- création ou modification de composants, API, schémas, migrations ;
- ajout de tests ;
- correctifs ;
- releases ;
- audits techniques ;
- tâches exécutées par Cursor ou un autre agent.

Ne remplace pas :

- `docs/99_DOCUMENTATION_STANDARD.md` pour la conception ;
- `docs/00` à `docs/25` pour les décisions produit/architecture de conception ;
- l’interdiction de coder avant Design Freeze / critères du Master Plan.

> **ATTENTION**
>
> Tant que le développement n’est pas autorisé par le Master Plan et le Design Freeze, ce document prépare les règles futures. Il n’autorise pas le code.

## 4. Philosophie

1. **Le code sans mémoire est une dette.**
2. **La documentation runtime est mise à jour avec le code, pas après « si on a le temps ».**
3. **Un commit non documenté est un commit invalide.**
4. **Les registres sont la carte du système réel.**
5. **Les décisions de développement sont tracées, jamais silencieuses.**
6. **Les bugs et la dette ont des identifiants stables.**
7. **Cursor et ChatGPT appliquent les mêmes règles qu’un développeur humain.**
8. **La conception (`99`, `00`–`25`) prime sur l’improvisation runtime.**
9. **Aucune suppression silencieuse d’historique.**
10. **Simplicité et traçabilité avant sophistication documentaire.**

## 5. Cycle officiel de développement

Workflow officiel obligatoire :

```text
Ticket
  ↓
Analyse
  ↓
Développement
  ↓
Tests
  ↓
Documentation Runtime
  ↓
Audit
  ↓
Commit
  ↓
Validation
```

### 5.1 Ticket

Entrée unique d’une tâche.

Contenu minimal du ticket :

```markdown
## Ticket

| Champ | Valeur |
| --- | --- |
| ID ticket | T-XXX |
| Titre | ... |
| Objectif | ... |
| Fonctionnalités liées | F-XXX |
| Hors scope | ... |
| Critères d’acceptation | ... |
| Registres impactés prévus | ... |
```

### 5.2 Analyse

Avant de coder :

- lire les documents de conception concernés ;
- identifier les registres runtime à mettre à jour ;
- repérer contradictions éventuelles ;
- confirmer que la tâche est autorisée (périmètre, Design Freeze).

Sortie minimale :

```markdown
## Analyse

- Objectif confirmé :
- Fichiers prévus :
- Registres à mettre à jour :
- Risques :
- Décisions ouvertes bloquantes : aucune / liste
```

### 5.3 Développement

- coder uniquement le périmètre du ticket ;
- respecter les décisions `D-xxx` et le scope `F-xxx` ;
- ne pas inventer de fonction hors ticket.

### 5.4 Tests

- ajouter ou mettre à jour les tests nécessaires ;
- enregistrer le résultat dans `09_TEST_REGISTRY.md` lorsque le runtime existe ;
- aucun commit « tests plus tard » sans exception documentée.

### 5.5 Documentation Runtime

- synchroniser tous les registres impactés (section 8) ;
- mettre à jour `00_PROJECT_STATUS.md` si l’état global change ;
- enrichir `16_PROJECT_MEMORY.md` si un enseignement ou compromis apparaît.

### 5.6 Audit

Contrôle rapide avant commit :

```markdown
## Audit pré-commit

- [ ] Périmètre ticket respecté
- [ ] Tests présents / mis à jour
- [ ] Registres runtime synchronisés
- [ ] Aucune décision figée altérée
- [ ] CHANGELOG mis à jour si nécessaire
- [ ] Pas de secret dans le diff
```

### 5.7 Commit

Autorisé seulement si la checklist de la section 9 est verte.

### 5.8 Validation

- vérifier les critères d’acceptation du ticket ;
- marquer le ticket terminé uniquement si la section 23 est satisfaite.

## 6. Documentation Runtime

La documentation runtime est la **mémoire vivante** du projet après le début du développement.

Elle décrit le système **tel qu’il est réellement**, pas tel qu’on l’imaginait en conception.

Rôles :

- cartographier fonctionnalités, composants, API, données, IA, UI, contenus ;
- tracer tests, perf, sécurité, dette, bugs ;
- conserver l’historique des décisions de développement ;
- préparer releases, audits et migrations ;
- permettre à un humain ou une IA de reprendre le projet sans archéologie.

Règle :

```text
Conception (docs/00–25, 99) = intention et règles
Runtime (docs/runtime/)     = état réel du système
```

En cas d’écart, l’écart doit être explicite dans les registres et, si structurant, remonter en décision.

## 7. Arborescence Runtime officielle

Structure officielle à créer **plus tard**, lorsque le développement sera autorisé :

```text
docs/runtime/

README.md
00_PROJECT_STATUS.md
01_ARCHITECTURE_STATE.md
02_FEATURE_REGISTRY.md
03_COMPONENT_REGISTRY.md
04_DATABASE_REGISTRY.md
05_API_REGISTRY.md
06_AI_REGISTRY.md
07_UI_REGISTRY.md
08_CONTENT_REGISTRY.md
09_TEST_REGISTRY.md
10_PERFORMANCE.md
11_SECURITY.md
12_TECH_DEBT.md
13_KNOWN_ISSUES.md
14_DECISION_HISTORY.md
15_RELEASE_NOTES.md
16_PROJECT_MEMORY.md
17_AUDITS.md
18_MIGRATIONS.md
19_DEPENDENCIES.md
```

> **NOTE**
>
> Ne pas créer ces fichiers maintenant.
> Le présent document définit uniquement leur rôle.

### 7.1 Rôle de chaque fichier

| Fichier | Rôle |
| --- | --- |
| `README.md` | Point d’entrée runtime : ordre de lecture, conventions locales, état de maturité des registres. |
| `00_PROJECT_STATUS.md` | État global du projet : phase, version courante, blocages, prochaine priorité. |
| `01_ARCHITECTURE_STATE.md` | Architecture réelle déployée / en cours, écarts vs conception. |
| `02_FEATURE_REGISTRY.md` | Registre des fonctionnalités réellement présentes, liées aux `F-xxx`. |
| `03_COMPONENT_REGISTRY.md` | Inventaire des composants applicatifs et de leurs responsabilités. |
| `04_DATABASE_REGISTRY.md` | Tables, entités, relations réellement utilisées. |
| `05_API_REGISTRY.md` | Endpoints / contrats API réellement exposés. |
| `06_AI_REGISTRY.md` | Capacités IA réellement branchées, limites, garde-fous actifs. |
| `07_UI_REGISTRY.md` | Écrans / flux UI réellement livrés. |
| `08_CONTENT_REGISTRY.md` | Contenus pédagogiques / médias réellement intégrés. |
| `09_TEST_REGISTRY.md` | Couverture de tests, suites, zones non couvertes. |
| `10_PERFORMANCE.md` | Constats perf, budgets, mesures. |
| `11_SECURITY.md` | Contrôles sécurité, menaces traitées, écarts. |
| `12_TECH_DEBT.md` | Dette technique identifiée (`TD-xxx`). |
| `13_KNOWN_ISSUES.md` | Bugs connus (`BUG-xxx`). |
| `14_DECISION_HISTORY.md` | Historique des décisions de développement. |
| `15_RELEASE_NOTES.md` | Notes de versions livrées. |
| `16_PROJECT_MEMORY.md` | Mémoire permanente : pourquoi, compromis, enseignements. |
| `17_AUDITS.md` | Comptes rendus d’audits. |
| `18_MIGRATIONS.md` | Journal des migrations de données / schéma. |
| `19_DEPENDENCIES.md` | Dépendances externes et contraintes associées. |

Nombre officiel de registres runtime listés : **20 fichiers** (README + 00 à 19).

## 8. Mise à jour obligatoire

Toute évolution code entraîne la mise à jour du registre correspondant.

```text
Nouvelle fonctionnalité
  ↓
FEATURE_REGISTRY

Nouveau composant
  ↓
COMPONENT_REGISTRY

Nouvelle API
  ↓
API_REGISTRY

Nouvelle table
  ↓
DATABASE_REGISTRY

Nouvelle IA
  ↓
AI_REGISTRY

Modification UI
  ↓
UI_REGISTRY

Nouvelle décision
  ↓
DECISION_HISTORY

Dette technique
  ↓
TECH_DEBT

Bug connu
  ↓
KNOWN_ISSUES

Release
  ↓
RELEASE_NOTES
```

### 8.1 Table de correspondance

| Événement | Registre obligatoire | Compléments fréquents |
| --- | --- | --- |
| Nouvelle fonctionnalité | `02_FEATURE_REGISTRY.md` | `00`, `07`, `08`, `09` |
| Nouveau composant | `03_COMPONENT_REGISTRY.md` | `01`, `09` |
| Nouvelle API | `05_API_REGISTRY.md` | `11`, `09` |
| Nouvelle table / entité | `04_DATABASE_REGISTRY.md` | `18_MIGRATIONS.md` |
| Nouvelle capacité IA | `06_AI_REGISTRY.md` | `11`, `16` |
| Modification UI | `07_UI_REGISTRY.md` | `02`, `09` |
| Nouveau contenu pédagogique | `08_CONTENT_REGISTRY.md` | `02` |
| Nouvelle décision de dev | `14_DECISION_HISTORY.md` | `16`, et `DECISIONS.md` si structurante |
| Dette découverte / créée | `12_TECH_DEBT.md` | `16` |
| Bug connu | `13_KNOWN_ISSUES.md` | `09` si test manquant |
| Release | `15_RELEASE_NOTES.md` | `00`, `CHANGELOG.md` |
| Migration | `18_MIGRATIONS.md` | `04` |
| Dépendance ajoutée | `19_DEPENDENCIES.md` | `11` si surface sécu |
| Audit réalisé | `17_AUDITS.md` | `00` |

### 8.2 Règle d’or

```text
Si le code change un fait observable du système,
le registre qui décrit ce fait doit changer dans la même tâche.
```

## 9. Documentation obligatoire avant Commit

Le commit est **interdit** tant que la documentation runtime n’est pas synchronisée.

Checklist pré-commit copiable :

```markdown
### Checklist documentation avant commit

- [ ] Ticket et analyse disponibles
- [ ] Code limité au périmètre
- [ ] Tests ajoutés ou mis à jour
- [ ] Registres runtime impactés mis à jour
- [ ] `02_FEATURE_REGISTRY.md` à jour si fonctionnalité touchée
- [ ] `03_COMPONENT_REGISTRY.md` à jour si composant touché
- [ ] `05_API_REGISTRY.md` à jour si API touchée
- [ ] `04_DATABASE_REGISTRY.md` + `18_MIGRATIONS.md` à jour si données touchées
- [ ] `06_AI_REGISTRY.md` à jour si IA touchée
- [ ] `07_UI_REGISTRY.md` à jour si UI touchée
- [ ] `12_TECH_DEBT.md` à jour si dette créée/résolue
- [ ] `13_KNOWN_ISSUES.md` à jour si bug créé/corrigé/connu
- [ ] `14_DECISION_HISTORY.md` à jour si décision de dev
- [ ] `16_PROJECT_MEMORY.md` enrichi si enseignement/compromis
- [ ] `CHANGELOG.md` mis à jour si modification importante
- [ ] Audit pré-commit effectué
- [ ] Aucun secret dans le diff
```

Si une case pertinente est non cochée : **pas de commit**.

## 10. Documentation des composants

Contenu minimal d’une entrée dans `03_COMPONENT_REGISTRY.md` :

```markdown
### CMP-001 — NomDuComposant

| Champ | Valeur |
| --- | --- |
| ID | CMP-001 |
| Nom | NomDuComposant |
| Chemin | `chemin/vers/fichier` |
| Responsabilité | ... |
| Fonctionnalités liées | F-XXX |
| Dépendances | ... |
| États / props principaux | ... |
| Tests liés | ... |
| Statut | actif / déprécié / prévu |
| Dernière mise à jour | JJ mois AAAA |
```

## 11. Documentation des API

Contenu minimal d’une entrée dans `05_API_REGISTRY.md` :

```markdown
### API-001 — Nom de l’endpoint

| Champ | Valeur |
| --- | --- |
| ID | API-001 |
| Méthode | GET / POST / PUT / PATCH / DELETE |
| Chemin | `/api/...` |
| Objectif | ... |
| Auth requise | oui / non |
| Entrées principales | ... |
| Sorties principales | ... |
| Erreurs principales | ... |
| Fonctionnalités liées | F-XXX |
| Tests liés | ... |
| Statut | actif / déprécié / prévu |
| Dernière mise à jour | JJ mois AAAA |
```

> **NOTE**
>
> Ce modèle documente le contrat réel. Il ne remplace pas `docs/15_API_ARCHITECTURE.md` en conception.

## 12. Documentation des bases de données

Contenu minimal d’une entrée dans `04_DATABASE_REGISTRY.md` :

```markdown
### DB-001 — nom_table

| Champ | Valeur |
| --- | --- |
| ID | DB-001 |
| Nom | nom_table |
| Objectif | ... |
| Champs principaux | ... |
| Clés | ... |
| Relations | ... |
| Données sensibles | oui / non — détail |
| Fonctionnalités liées | F-XXX |
| Migrations liées | MIG-XXX |
| Statut | active / dépréciée / prévue |
| Dernière mise à jour | JJ mois AAAA |
```

## 13. Documentation des migrations

Contenu minimal d’une entrée dans `18_MIGRATIONS.md` :

```markdown
### MIG-001 — titre court

| Champ | Valeur |
| --- | --- |
| ID | MIG-001 |
| Titre | ... |
| Date | JJ mois AAAA |
| Objectif | ... |
| Tables impactées | DB-XXX |
| Type | additive / modificative / destructive |
| Reversible | oui / non |
| Risques | ... |
| Statut | prévue / appliquée / annulée |
```

Règle : aucune migration appliquée sans entrée `MIG-xxx`.

## 14. Documentation des tests

Contenu minimal d’une entrée dans `09_TEST_REGISTRY.md` :

```markdown
### TST-001 — titre du test / suite

| Champ | Valeur |
| --- | --- |
| ID | TST-001 |
| Nom | ... |
| Type | unitaire / integration / e2e / autre |
| Cible | composant / API / flux |
| Fonctionnalités liées | F-XXX |
| Chemin | `chemin/vers/test` |
| Statut | actif / flaky / désactivé |
| Dernier résultat connu | OK / KO / non exécuté |
| Dernière mise à jour | JJ mois AAAA |
```

## 15. Documentation des performances

Contenu minimal d’une entrée dans `10_PERFORMANCE.md` :

```markdown
### PERF-001 — sujet mesuré

| Champ | Valeur |
| --- | --- |
| ID | PERF-001 |
| Sujet | ... |
| Métrique | ... |
| Valeur observée | ... |
| Budget / seuil | ... |
| Contexte de mesure | ... |
| Impact utilisateur | ... |
| Actions | ... |
| Statut | observé / amélioré / régressé |
| Dernière mise à jour | JJ mois AAAA |
```

## 16. Documentation sécurité

Contenu minimal d’une entrée dans `11_SECURITY.md` :

```markdown
### SEC-001 — contrôle ou sujet

| Champ | Valeur |
| --- | --- |
| ID | SEC-001 |
| Sujet | ... |
| Menace liée | ... |
| Mesure en place | ... |
| Données concernées | ... |
| Statut | couvert / partiel / ouvert |
| Lien conception | `docs/16_AUTH_SECURITY.md` / `docs/17_PRIVACY_RGPD.md` |
| Dernière mise à jour | JJ mois AAAA |
```

Règles permanentes :

- pas de secret dans les registres ;
- tout traitement caméra / données sensibles doit être explicite ;
- tout écart de sécurité ouvert doit aussi créer un `BUG-xxx` ou `TD-xxx` selon nature.

## 17. Gestion de la dette technique

Registre : `12_TECH_DEBT.md`  
Identifiants : `TD-001`, `TD-002`, ...

### 17.1 Niveaux de sévérité

| Niveau | Signification | Action |
| --- | --- | --- |
| **Critique** | Bloque la sûreté, la conformité, ou rend le système instable. | Traiter immédiatement ou stopper la zone concernée. |
| **Majeure** | Freine fortement l’évolution ou crée un risque prochain. | Planifier sous délai court. |
| **Mineure** | Gêne locale, contournable. | Suivre ; traiter quand la zone est touchée. |

### 17.2 Modèle d’entrée

```markdown
### TD-001 — titre court

| Champ | Valeur |
| --- | --- |
| ID | TD-001 |
| Titre | ... |
| Sévérité | Critique / Majeure / Mineure |
| Zone | ... |
| Description | ... |
| Cause | ... |
| Impact | ... |
| Contournement | ... |
| Plan de résolution | ... |
| Statut | ouverte / en cours / résolue / acceptée |
| Créée le | JJ mois AAAA |
| Mise à jour | JJ mois AAAA |
```

Règle : créer une dette dès qu’un raccourci volontaire est pris.

## 18. Gestion des bugs

Registre : `13_KNOWN_ISSUES.md`  
Identifiants : `BUG-001`, `BUG-002`, ...

### 18.1 Niveaux de sévérité

| Niveau | Signification |
| --- | --- |
| **Bloquant** | Empêche l’usage principal ou la release. |
| **Critique** | Bug grave avec impact fort, contournement difficile. |
| **Majeur** | Fonction importante dégradée, contournement possible. |
| **Mineur** | Impact limité, cosmétique ou cas rare. |

### 18.2 Modèle d’entrée

```markdown
### BUG-001 — titre court

| Champ | Valeur |
| --- | --- |
| ID | BUG-001 |
| Titre | ... |
| Sévérité | Bloquant / Critique / Majeur / Mineur |
| Symptôme | ... |
| Reproductibilité | toujours / intermittent / rare |
| Impact utilisateur | ... |
| Fonctionnalités liées | F-XXX |
| Contournement | ... |
| Statut | ouvert / en cours / résolu / reporté |
| Créé le | JJ mois AAAA |
| Mis à jour | JJ mois AAAA |
```

Règle : un bug corrigé reste dans le registre avec statut `résolu` ; l’ID n’est jamais réutilisé.

## 19. Historique des décisions

Registre : `14_DECISION_HISTORY.md`

Rôle : tracer les décisions **prises pendant le développement** (choix d’implémentation, arbitrages locaux, écarts assumés).

### 19.1 Lien avec `DECISIONS.md`

| Type | Où écrire |
| --- | --- |
| Décision structurante produit / architecture / norme | `DECISIONS.md` (`D-xxx`) + mention runtime |
| Décision locale de développement | `14_DECISION_HISTORY.md` (`DD-xxx`) |
| Les deux si impact durable | les deux, avec renvoi croisé |

### 19.2 Modèle

```markdown
### DD-001 — titre court

| Champ | Valeur |
| --- | --- |
| ID | DD-001 |
| Date | JJ mois AAAA |
| Décision | ... |
| Contexte | ... |
| Alternatives écartées | ... |
| Conséquences | ... |
| Documents / registres liés | ... |
| Décision structurante liée | D-XXX ou Aucune |
| Statut | active / remplacée / annulée |
```

Règle : **ne jamais supprimer** une décision ; la marquer `remplacée` ou `annulée`.

## 20. Mémoire permanente du projet

Fichier : `16_PROJECT_MEMORY.md`

Rôle : conserver ce que les registres techniques ne capturent pas seuls.

Il doit expliquer :

- pourquoi une décision a été prise ;
- les compromis acceptés ;
- les difficultés rencontrées ;
- les idées reportées ;
- les enseignements réutilisables.

### 20.1 Modèle d’entrée

```markdown
### MEM-001 — titre court

| Champ | Valeur |
| --- | --- |
| ID | MEM-001 |
| Date | JJ mois AAAA |
| Sujet | ... |
| Pourquoi | ... |
| Compromis | ... |
| Difficultés | ... |
| Idées reportées | ... |
| Enseignement | ... |
| Liens | DD-XXX / D-XXX / F-XXX / TD-XXX / BUG-XXX |
```

Règle : après toute tâche non triviale, ajouter une entrée si un enseignement ou un compromis existe.

## 21. Règles Cursor

Cursor doit appliquer intégralement les règles suivantes :

1. Suivre le cycle officiel Ticket → … → Validation.
2. Mettre à jour **tous** les registres runtime concernés dans la même tâche.
3. Ne jamais oublier un registre obligatoire de la section 8.
4. Signaler toute contradiction avec la conception (`00`–`25`, `99`) ou ce document.
5. Ne jamais modifier un document `VALIDÉ` ou `FIGÉ` sans demande explicite.
6. Ne jamais supprimer une décision (`D-xxx`, `DD-xxx`).
7. Ne jamais créer les fichiers runtime avant y être autorisé / missionnée.
8. Ne jamais commencer le développement si le Master Plan / Design Freeze l’interdit encore.
9. Refuser un commit tant que la checklist section 9 n’est pas satisfaite.
10. Utiliser les identifiants officiels (`F-`, `TD-`, `BUG-`, `API-`, `CMP-`, `MIG-`, etc.).
11. Mettre à jour `CHANGELOG.md` pour toute modification importante.
12. Ajouter une entrée `MEM-xxx` lorsqu’un compromis ou enseignement apparaît.
13. Ne pas élargir le périmètre du ticket sans demande.
14. En fin de tâche, lister les registres modifiés.

Modèle de signalement :

```markdown
> **ATTENTION**
>
> Contradiction détectée entre le code/tâche et `docs/XX_....md`
> au sujet de : [description].
> Aucune modification d’un document figé n’a été faite.
> Action demandée : arbitrage humain.
```

## 22. Règles ChatGPT

ChatGPT / assistants externes doivent respecter les mêmes contraintes :

1. Appliquer le cycle officiel.
2. Produire ou mettre à jour la documentation runtime concernée.
3. Ne jamais omettre un registre obligatoire.
4. Signaler toute contradiction.
5. Ne jamais modifier un document figé sans demande.
6. Ne jamais supprimer une décision.
7. Ne pas inventer d’API, table, composant ou feature hors ticket.
8. Utiliser les modèles copiables de ce document.
9. Rappeler qu’un commit est interdit sans documentation synchronisée.
10. Séparer clairement conception (`99`, `00`–`25`) et runtime (`docs/runtime/`).

Prompt minimal recommandé :

```text
Respecte docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md
et docs/99_DOCUMENTATION_STANDARD.md.
Suis le cycle Ticket → Analyse → Développement → Tests → Documentation Runtime → Audit → Commit → Validation.
Met à jour tous les registres impactés.
Signale toute contradiction.
Ne modifie aucun document FIGÉ/VALIDÉ sans demande explicite.
Ne supprime aucune décision.
```

## 23. Critères de conformité

Une tâche de développement est terminée **uniquement si** :

- ✓ code du périmètre livré
- ✓ tests ajoutés ou mis à jour
- ✓ documentation runtime synchronisée
- ✓ changelog mis à jour si modification importante
- ✓ audit pré-commit effectué
- ✓ commit valide (ou prêt à commit selon consigne)
- ✓ validation des critères d’acceptation du ticket

Checklist finale copiable :

```markdown
### Checklist de fin de tâche

- [ ] ✓ Code
- [ ] ✓ Tests
- [ ] ✓ Documentation runtime
- [ ] ✓ Changelog (si nécessaire)
- [ ] ✓ Audit
- [ ] ✓ Commit
- [ ] ✓ Validation ticket
```

Si une case manque : la tâche **n’est pas terminée**.

## 24. Exceptions

Exceptions rares, uniquement avec décision documentée :

1. **Hotfix de production** : commit urgent autorisé si `BUG-xxx` Bloquant créé immédiatement et documentation runtime complétée dans un délai maximal de 24 h, tracé dans `14_DECISION_HISTORY.md`.
2. **Spike / exploration jetable** : branche temporaire sans merge ; aucun merge vers la branche principale sans registres.
3. **Migration de documentation** : chantier dédié pour créer l’arborescence runtime initiale.
4. **Document de conception figé** : aucune exception runtime ne permet de le réécrire sans procédure du Master Plan.

Modèle d’exception :

```markdown
> **DÉCISION**
>
> **ID :** DD-XXX ou D-XXX
> **Décision :** exception temporaire à `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`
> **Motif :** ...
> **Durée :** ...
> **Compensation documentaire :** ...
> **Statut :** active
```

## 25. Conclusion

`docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md` est la constitution du développement.

Il impose un cycle unique, une documentation runtime obligatoire, des registres stables, et des règles identiques pour humains et agents.

Il ne remplace pas le standard de conception `99`.  
Il ne crée pas encore les fichiers runtime.  
Il n’autorise pas le code avant les conditions du Master Plan.

À partir de sa validation, développer sans documentation runtime synchronisée est non conforme.

---

## Pied de document

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Statut | EN RÉDACTION |
| Prochain document | Aucun (référence transversale développement) |
| Fin officielle | Oui |

*Fin officielle du document.*
