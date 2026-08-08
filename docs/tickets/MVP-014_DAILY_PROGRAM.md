# MVP-014_DAILY_PROGRAM

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Livré partiellement (code)** / F-014 CONTENT BLOCKED / attente PO (ouvert — non fermé — 8 août 2026 ; F-008 + F-015 En test)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-014_DAILY_PROGRAM.md`
> Dépend de :
> - MVP-003_CURRICULUM_LIBRARY (Fermé — séances structurelles F-013)
> - MVP-005_LOCAL_PRACTICE (Fermé — PracticePlayer / SessionStep)
> - MVP-009_SAFETY_WARNINGS (Fermé — F-016 / F-031)
> - MVP-013_BEGINNER_PATH (Fermé — `c3b4a98` — F-003 / BeginnerPath)
> - MVP-012_PEDAGOGICAL_VIDEOS (Ouvert — MEDIA BLOCKED / REFERENCE MOTION BLOCKED — **non bloquant** pour ce ticket)
> - `docs/05_FEATURES.md` (F-008, F-014, F-015)
> - `docs/08_TAI_CHI_CURRICULUM.md` §12, §27, §28
> - `docs/12_UX_UI.md` / `12A` / `12B`
> - `docs/14_DATA_MODEL.md` (Program / Exercise / Recommendation — cibles conception)
> - `docs/25_DESIGN_FREEZE.md`

---

# 1. Objectif

Cadrer officiellement (développement **ultérieur**, hors de cette ouverture) :

- **F-008** — Programme quotidien
- **F-014** — Exercices de respiration
- **F-015** — Relaxation

But produit : proposer **une suggestion claire de pratique du jour** (régularité, réduction du choix), et ancrer respiration / retour au calme dans le rituel de séance — **sans** personnalisation avancée, **sans** pression, **sans** inventer de technique respiratoire ou de méditation non documentée, **sans** dépendre des vidéos F-006 ni ouvrir MVP-015.

**Phase actuelle : code partiel livré (F-008 + F-015)** — F-014 dédié reste CONTENT BLOCKED. Ticket **non fermé**. Aucun commit demandé à cette étape.

---

# 2. Documents de référence

- `docs/00_MASTER_PLAN.md`
- `docs/01_VISION.md`
- `docs/02_PRODUCT_SCOPE.md` (F-008, F-014, F-015)
- `docs/03_PERSONAS.md` (P-002 dominant pour F-008)
- `docs/04_USER_JOURNEYS.md`
- `docs/05_FEATURES.md` §6.8, §6.14, §6.15
- `docs/07_CONTENT_STRATEGY.md` §7–§8
- `docs/08_TAI_CHI_CURRICULUM.md` §5, §12, §27, §28
- `docs/12_UX_UI.md`, `12A`, `12B`
- `docs/14_DATA_MODEL.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/20_TESTS.md` / stratégie tests
- `docs/22_ROADMAP.md` §7.5
- `docs/24_DEVELOPER_HANDOVER.md`
- Tickets MVP-012, MVP-013
- Runtime : `00`, `02`, `03`, `11`

---

# 3. Définitions officielles

## 3.1 F-008 — Programme quotidien

| Champ | Valeur (sources `02` / `05`) |
| --- | --- |
| Identifiant | F-008 |
| Nom | Programme quotidien |
| Version cible | MVP |
| Priorité | P0 (Must — régularité) |
| Objectif | Proposer une suggestion de pratique du jour simple |
| Objectif utilisateur | Savoir quoi pratiquer aujourd’hui sans choisir longtemps |
| Description | Suggestion légère de séance ou révision du jour, sans personnalisation avancée ni pression |
| Personas | P-001, **P-002** (entrée dominante), P-003 |
| Parcours | Première semaine ; routine ; Wow moment (P-002) |
| Dépendances produit | F-003 (**Livré**), F-013 (séances structurelles existantes ; pas Livré global) |
| Règles métier | Aucune culpabilisation si non réalisé ; **une seule** suggestion principale |
| Acceptation | Accéder à une proposition du jour ; **ignorer sans pénalité** |
| Limites | Pas de personnalisation avancée (F-034 = V2) ; pas de notifications (F-017 = V1) |
| Décisions associées | D-029, D-027 |
| Évolutions | F-034 (V2) |

### Rôle produit (audit)

- Point d’entrée Accueil pour la régularité (`12` §11 : prochaine séance / programme ; `04` §7 : ouvrir → séance du jour).
- **Ne remplace pas** le parcours débutant (F-003) : il **pointe** vers une séance déjà dans le cursus / BeginnerPath (`08` §12).
- Accueil actuel (« Prochaine pratique ») = tri préférences + première séance catalogue — **ce n’est pas encore F-008** (pas de notion « du jour », pas de lien BeginnerPath).

## 3.2 F-014 — Exercices de respiration

| Champ | Valeur (sources `02` / `05`) |
| --- | --- |
| Identifiant | F-014 |
| Nom | Exercices de respiration |
| Version cible | MVP |
| Priorité | P1 (Should) |
| Objectif | Intégrer des exercices de respiration simples liés à la pratique |
| Objectif utilisateur | Entrer dans le calme avant ou pendant la pratique |
| Description | Contenus courts, prudents, non médicaux, utilisables seuls **ou** dans une séance |
| Personas | P-001, P-002, P-003 |
| Dépendances | F-016 (**Livré**) |
| Règles | Aucune promesse thérapeutique ; arrêt si malaise / douleur |
| Acceptation | Lancer un exercice de respiration **simple** ; contenu non médical |
| Limites | Ne constitue pas un traitement ; distinct de F-038 (méditation élargie, backlog) |
| Décisions | D-008 |

### Contenu réellement prévu (audit — ne rien inventer)

| Élément | Documenté ? | Source |
| --- | --- | --- |
| Place structurelle « Entrée (respiration ou recentrage) » | Oui | `08` §12 |
| Lien UX retour / préparation | Oui | `12` §13 ; `07` §7 |
| Technique avec rythme imposé (ex. 4-7-8) | **Non** | — |
| Durée dédiée F-014 | **Non figée** | `07` §8 note ; `08` §28 ouvertes |
| Script audio obligatoire | **Non** | `07` : audio optionnel |
| Place dédiée par phase | **Décision ouverte** | `08` §28 |
| Respiration « naturelle, sans imposer de rythme » | Oui (gestes) | `08` §27 + `local-movements` |

**Verdict F-014 :** un **exercice dédié** avec protocole rythmé **n’existe pas** dans le corpus. Seules existent des étapes `entree` structurelles (dont un titre « respiration simple » placeholder) et des consignes « respiration naturelle » sur les mouvements.

## 3.3 F-015 — Relaxation

| Champ | Valeur (sources `02` / `05`) |
| --- | --- |
| Identifiant | F-015 |
| Nom | Relaxation |
| Version cible | MVP |
| Priorité | P1 (Should) |
| Objectif | Proposer une conclusion douce de séance |
| Objectif utilisateur | Conclure une séance en douceur |
| Description | Contenus courts de relaxation / retour au calme, sans promesse thérapeutique |
| Personas | P-001, P-002, P-003 |
| Dépendances | F-016 (**Livré**) |
| Règles | Non médical ; optionnelle mais recommandée en fin de séance |
| Acceptation | Accéder à une conclusion de type relaxation ; aucune promesse de guérison |
| Limites | Distincte de F-038 (méditation élargie) |
| Décisions | D-012 |

### Contenu réellement prévu (audit)

| Élément | Documenté ? | Source |
| --- | --- | --- |
| Étape structurelle « Retour au calme » | Oui | `08` §12 ; 3 séances locales |
| UX « Retour au calme = F-014 / F-015 » | Oui | `12` §13 |
| Exercice de relaxation autonome (hors séance) | **Non** | — |
| Durée exacte F-015 | **Non figée** (peut être très courte — `05`) | `05` cas particuliers |
| Méditation développée | **Hors** (F-038) | `02` / `05` |

**Verdict F-015 :** le **retour au calme** comme étape de séance est déjà structurellement présent → base MVP honnête. Pas d’exercice dédié hors séance documenté.

---

# 4. Audit — corpus existant

## 4.1 Inventaire respiration / calme / quotidien

| Contenu | Nature | Source exacte |
| --- | --- | --- |
| Structure séance : Entrée (respiration ou recentrage) → … → Retour au calme | Conception | `docs/08` §12 |
| F-008 peut pointer vers une séance adaptée au parcours | Conception | `docs/08` §12 |
| Types contenu « Respiration » début / transition | Conception | `docs/07` §7 |
| Séances 10–20 min pour P-002 | Conception | `docs/07` §8 ; `docs/04` §7.4 |
| Programme quotidien = entrée P-002 | Conception | `docs/03` ; `docs/04` ; `docs/05` |
| Accueil : prochaine séance / reprise = F-008 / F-013 / F-032 | Conception UX | `docs/12` §11 |
| Décision ouverte : place F-014/F-015 dédiée par phase | Conception | `docs/08` §28 |
| Step Initiation `Entrée — respiration simple` + note « F-014 enrichis plus tard » | Code / contenu local | `web/src/data/curriculum/local-curriculum.ts` |
| Steps `Retour au calme` (3 séances) | Code / contenu local | idem |
| Steps `entree` Découverte / Progression (recentrage, sans protocole) | Code | idem |
| Pause pratique « Respirez. Reprenez… » | UI PracticePlayer | `practice-step-view.tsx` |
| `Movement.breathing` MV-001…003 (naturelle, sans rythme imposé) | Code + `08` §27 | `local-movements.ts` / `08` |
| Hero `mist` rôle « respiration » | Assets catalogue | `background-assets.ts` |
| BeginnerPath 3 séances ordonnées | Code livré MVP-013 | `local-beginner-path.ts` |
| Accueil « Prochaine pratique » = `ordered[0]` préférences | Code (pas F-008) | `home-welcome.tsx` |
| Historique / stats locales (MVP-006) | Code partiel F-009/F-010 | ProgressStore — **insuffisant pour « séance du jour faite » produit** sans MVP-015 |
| Entité `Exercise` / `Program` TS | **Absente** | `14` conception seulement |
| Audio respiration | **Absent** | — |
| Notifications quotidiennes | Hors MVP (F-017 V1) | `02` / `22` |

## 4.2 Séances locales (cible F-008)

| ID | Titre | Phase | Durée | Entrée | Retour |
| --- | --- | --- | --- | --- | --- |
| `st-decouverte-premiere-courte` | Première séance courte | decouverte | 8 min | recentrage | Retour au calme |
| `st-initiation-rituel-base` | Rituel de séance débutant | initiation | 12 min | respiration simple (placeholder F-014) | Retour au calme |
| `st-progression-liaison-legere` | Séance avec liaison légère | progression | 15 min | Entrée | Retour au calme |

Alignées BeginnerPath (`orderedSessionIds`).

## 4.3 Contenu manquant (bloquant ou non)

| Manque | Impact | Feature |
| --- | --- | --- |
| Protocole respiratoire dédié (rythme, durée, script) | Bloque exercice F-014 « lançable » au sens fort | F-014 |
| Exercice relaxation autonome hors séance | Non requis si F-015 = étape `retour` | F-015 |
| Règle « déjà pratiqué aujourd’hui » riche | MVP-015 / F-009–F-010 — **ne pas inventer** | F-008 |
| Entité Program persistée SQL | Non requise MVP local | F-008 |
| Audio / vidéo respiration | Non requis (texte suffit ; F-006 MEDIA BLOCKED) | F-014 |
| Validation PO du texte enrichi `entree` / `retour` | Avant livraison | F-014 / F-015 |

---

# 5. Programme du jour — options évaluées

| Option | Description | Compatible docs ? | Requise progression MVP-015 ? | Verdict |
| --- | --- | --- | --- | --- |
| **A. Fixe quotidien** | Toujours la même séance | Oui (faible) | Non | Trop pauvre vs « du jour » |
| **B. Rotation déterministe locale** | `dayIndex % N` sur un pool de séances | Oui (déterministe, local) | Non | OK techniquement |
| **C. Basé BeginnerPath** | Pool = `orderedSessionIds` du path ; rotation ou index jour | Oui (`08` : adapté au parcours ; F-003 dep) | Non | **Recommandé** (B∩C) |
| **D. Basé progression utilisateur** | Prochaine étape non faite / révision | Partiel (F-010 / Recommendation `progress_rule`) | **Oui** (MVP-015) | **Hors MVP-014** |

### Recommandation MVP (honnête et minimale)

**Option C + B :** suggestion du jour = séance du BeginnerPath choisie par **rotation déterministe sur la date locale** :

```text
localDateKey = YYYY-MM-DD (timezone navigateur / appareil)
index = dayOrdinal(localDateKey) % orderedSessionIds.length
sessionId = orderedSessionIds[index]
```

- Une seule suggestion principale.
- Stable toute la journée locale.
- Change au jour civil local suivant.
- Ignorable sans pénalité.
- Aucune progression path persistante requise.
- Enrichissement ultérieur via MVP-015 / Recommendation `progress_rule` (hors ticket).

**Persistance F-008 :** **non requise** pour la suggestion (recalcul pur). Pas d’état « journée validée » inventé ici.

**Premier usage :** afficher la suggestion du jour (même règle).
**Jour suivant :** éventuelle autre séance du path (rotation).
**Sans progression :** comportement inchangé (option C+B).

**Dépendances MVP-015 :** aucune pour le MVP minimal F-008. MVP-015 pourra remplacer/enrichir l’origine (`progress_rule`) plus tard.

---

# 6. Architecture recommandée

## 6.1 Couches

| Couche | Rôle MVP-014 |
| --- | --- |
| Domain | Type léger `DailyProgramSuggestion` (calculé, non stocké) ; helpers date locale |
| Data | Réutilise `localBeginnerPath` + SessionTemplate existants |
| Services | `resolveDailyProgram(date, path, curriculum)` pur |
| UI Accueil | Remplacer / renommer « Prochaine pratique » → suggestion **du jour** + CTA |
| PracticePlayer | Extension **minimale** des textes `entree` / `retour` ; pas de nouveau moteur |
| Hors scope | Nouveau bottom-nav ; SW cache ; notifications ; Program SQL |

## 6.2 PracticePlayer / SessionStep

| Approche | Décision |
| --- | --- |
| Nouveaux `SessionStepKind` | **Non** — kinds existants suffisent (`entree`, `retour`) |
| Entité Exercise runtime | **Non** pour MVP minimal (conception `14` reste cible future) |
| Contenu autour de séance | Non prioritaire |
| Exercices séparés routes | F-014 dédié **bloqué contenu** ; ne pas créer de route inventée |
| Extension minimale | Enrichir `summary` des steps `entree` / `retour` avec consignes **déjà documentées** (respiration naturelle ; retour au calme non médical) + éventuellement `exerciseIds` plus tard |

Favoriser : **pas de refactor PracticePlayer** — le player affiche déjà `title` + `summary` + mouvements.

## 6.3 Modèle de données

| Candidat | Nécessaire MVP-014 ? | Décision |
| --- | --- | --- |
| `Program` (`14`) | Non pour suggestion locale | **Reporter** ; Session + BeginnerPath suffisent |
| `Exercise` (`14`) | Non tant que F-014 dédié CONTENT BLOCKED | **Reporter** |
| `Recommendation` persistée | Non | Recalcul ; `origin` conceptuel = `deterministic_curriculum` |
| `DailyProgramSuggestion` (type TS calculé) | Oui (léger) | **Recommandé** — pas une table |
| BeginnerPath | Oui (pool ordonné) | Existant |
| SessionTemplate | Oui (cible CTA) | Existant |

---

# 7. Date / temps (local only)

| Règle | Décision |
| --- | --- |
| Timezone | Celle de l’appareil (navigateur) |
| Clé jour | Date civile locale `YYYY-MM-DD` |
| Stabilité | Même suggestion pour toute la journée locale |
| Changement | Au passage de minuit local |
| Backend / cron | **Aucun** |
| Notifications | **Hors** (F-017 V1) |
| Sync multi-appareils | Hors MVP |

---

# 8. UX

| Sujet | Décision d’ouverture |
| --- | --- |
| Emplacement principal | **Accueil** — une suggestion principale (conforme `12` §11, P-002) |
| CTA | « Commencer » → `/pratique/{sessionId}` (existant) |
| Route dédiée `/programme` | **Non requise** MVP ; optionnelle seulement si surcharge Accueil (décision PO à l’implémentation) |
| Bottom-nav | **Aucun** nouvel item |
| Lien Parcours débutant | Conservé (F-003) ; distinct de la suggestion du jour |
| Respiration / relaxation | Via étapes de la séance lancée ; pas de parcours UI parallèle inventé |
| État vide | Si path/séances absents → message calme + lien bibliothèque / parcours (EmptyState existant) |
| « Déjà pratiqué aujourd’hui » | **Ne pas inventer** dans MVP-014 (requiert cadrage MVP-015 / historique) |
| Ignorer | Pas de pénalité, pas de streak punitif (D-029) |
| Onboarding | Inchangé |

### Hero

| Surface | Hero catalogue |
| --- | --- |
| Accueil (F-008) | Conserver **`morning`** (rôle commencement — déjà Accueil) |
| Si page secondaire respiration un jour | `mist` (rôle catalogue « respiration ») — **non requis** tant que F-014 dédié bloqué |
| Pratique | `morning` (existant gate / pratique) |

Aucun nouvel asset.

---

# 9. Sécurité

- Respiration / relaxation : **non médicales**, sans traitement, sans promesse (`05`, D-008, D-012).
- Arrêt possible à tout moment (PracticePlayer pause / quitter déjà présents).
- Respect F-016 / F-031 (gate pré-pratique inchangé).
- Pas de technique forcée ; consignes = respiration **naturelle** uniquement (corpus existant).
- Pas d’audio obligatoire (accessibilité + absence d’asset).

---

# 10. Accessibilité

| Exigence | Implication MVP-014 |
| --- | --- |
| Instructions textuelles | Obligatoires (source de vérité UI) |
| Timers | **Non** tant qu’aucun protocole minuté n’est documenté |
| Annonces | `aria` / `role="status"` pour changements de suggestion ; pas d’info seulement animée |
| Audio | Non requis ; pas de dépendance |
| Clavier | CTA / PracticePlayer existants |
| `prefers-reduced-motion` | Respect DS existant ; pas d’animation porteuse d’info |

---

# 11. Offline

- MVP-017 **non ouvert** — pas de nouveau cache.
- Contenu local (curriculum, path, suggestion calculée) reste utilisable comme aujourd’hui (Offline First local partiel).
- Pas de fetch serveur pour le programme du jour.

---

# 12. Tests prévus (à l’implémentation)

- Choix programme du jour (index / session attendue pour une date locale donnée)
- Stabilité même jour (même `localDateKey` → même session)
- Changement de jour (date suivante → index suivant mod N)
- Relation aux séances BeginnerPath uniquement (pas de séance hors path)
- Enrichissement / affichage respiration (`entree`) — quand contenu validé
- Affichage relaxation / retour (`retour`)
- Absence de progression fictive / pas de « journée validée » inventée
- Ignorer suggestion : aucune pénalité UI
- Navigation Accueil → pratique
- Sécurité : textes non médicaux ; gate F-031 intact
- Accessibilité : labels, reduced motion
- Light / Dark Accueil
- Régressions BeginnerPath + PracticePlayer + Accueil parcours

---

# 13. Périmètre / hors périmètre

## In scope (implémentation future)

- F-008 suggestion du jour (BeginnerPath + date locale) sur Accueil
- CTA vers séance existante
- Enrichissement **minimal** textes `entree` / `retour` **uniquement** avec consignes déjà documentées (après validation PO du wording)
- Runtime + tests associés

## Hors scope

- MVP-015 (historique riche, progression path, reprise persistante avancée, « déjà fait aujourd’hui »)
- F-034 personnalisation / IA
- F-017 notifications
- F-038 méditation
- Inventer technique respiratoire / rythme / audio
- Modifier / fermer MVP-012
- Nouveaux MP4 / WebP
- Nouveau bottom-nav
- Entités Program / Exercise persistées complètes
- Auth / sync / Mei / CV

---

# 14. Critères d’acceptation (ticket)

### F-008

1. L’utilisateur voit une proposition de pratique **du jour** (libellé clair).
2. La proposition pointe vers une séance du BeginnerPath.
3. Même date locale → même proposition.
4. Il peut ignorer / choisir autre chose (parcours, bibliothèque) sans pénalité.
5. Aucune culpabilisation, streak punitif, ni verrou.

### F-014

1. **Si CONTENT READY :** l’utilisateur rencontre une respiration simple (étape `entree` enrichie et/ou exercice dédié validé PO) non médicale.
2. **Tant que CONTENT BLOCKED exercice dédié :** ne pas livrer de protocole inventé ; le ticket peut livrer F-008 + F-015 et documenter le gap F-014.

### F-015

1. Chaque séance du path conserve une conclusion « retour au calme » accessible dans PracticePlayer.
2. Textes non médicaux, sans promesse de guérison.
3. Optionnelle au sens produit (pas de score si sautée — comportement player existant).

---

# 15. Gates de readiness

| Feature | Gate | Justification |
| --- | --- | --- |
| **F-008** | **READY FOR CODE** | Séances + BeginnerPath + Accueil existent ; règle date locale déterministe documentée ; pas de média requis |
| **F-014** | **CONTENT BLOCKED** (exercice dédié / protocole) | `08` §28 ouvert ; pas de technique documentée ; placeholder Initiation seulement. Enrichissement « respiration naturelle » possible **après** wording PO, sans inventer de rythme |
| **F-015** | **READY FOR CODE** (via étapes `retour`) | Structure `Retour au calme` déjà dans les 3 séances ; enrichissement textuel minimal documentable ; pas d’asset requis |
| **MVP-012** | Inchangé | MEDIA BLOCKED — parallèle, non bloquant |
| **MVP-015** | Non ouvert | Ne pas dépendre de D |

### Gate global MVP-014

**READY FOR CODE (périmètre F-008 + F-015)** avec **CONTENT BLOCKED sur F-014 dédié**.

L’implémentation peut démarrer sur F-008 + clôture calme F-015 sans attendre les MP4.
Livraison « F-014 acceptation forte » (`05` : lancer un exercice de respiration) **exige** un contenu PO validé (texte minimal non inventé) — sinon F-014 reste partiel / reporté dans le ticket.

---

# 16. Definition of Done

- [x] F-008 : suggestion du jour Accueil, déterministe locale, ignorable
- [x] Lien BeginnerPath + SessionTemplate
- [x] F-015 : retour au calme présent / enrichi sans promesse médicale
- [ ] F-014 : soit contenu PO validé livré, soit écart explicitement documenté à la clôture
- [x] Pas de progression fictive / pas d’état « jour validé » inventé
- [x] Pas de dépendance vidéo
- [x] Tests + validations Light/Dark (structure DS ; attente validation PO visuelle)
- [x] Runtime synchronisé (livraison partielle)
- [x] MVP-012 non fermé par erreur
- [x] MVP-015 non ouvert
- [ ] Validation PO + clôture

---

# 17. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (8 août 2026) |
| Audit docs / code | **Fait** |
| Corpus inventorié | **Fait** |
| Options programme du jour | **Décidées (reco C+B)** |
| Gate readiness | **Décidée** |
| Implémentation code F-008 + F-015 | **Livré (code)** — attente PO |
| F-014 dédié | **CONTENT BLOCKED** — non livré |
| Clôture | **Non** — ticket reste ouvert |

---

*Fin du ticket MVP-014 (Livré partiellement — F-014 CONTENT BLOCKED ; MVP-012 reste MEDIA BLOCKED ; MVP-015 non ouvert).*
