# MVP-015_HISTORY_PROGRESS_RESUME

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Fermé** (GO — 9 août 2026 — validation PO — CH-019)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-015_HISTORY_PROGRESS_RESUME.md`
> Dépend de :
> - MVP-005_LOCAL_PRACTICE (Fermé — PracticePlayer / état mémoire)
> - MVP-006_LOCAL_PROGRESS (Fermé — `PracticeRecord` / `/progression` / localStorage)
> - MVP-007_USER_PREFERENCES (Fermé — `/profil` ; prefs locales)
> - MVP-009_SAFETY_WARNINGS (Fermé — F-016 / F-031)
> - MVP-013_BEGINNER_PATH (Fermé — `c3b4a98` — F-003 / BeginnerPath)
> - MVP-014_DAILY_PROGRAM (Fermé — `d0574f9` — F-008 / F-014 / F-015)
> - MVP-012_PEDAGOGICAL_VIDEOS (Ouvert — MEDIA BLOCKED / REFERENCE MOTION BLOCKED — **non bloquant** pour ce ticket)
> - `docs/05_FEATURES.md` (F-009, F-010, F-013, F-032)
> - `docs/14_DATA_MODEL.md` (PracticeSession / UserProgress)
> - `docs/17_PRIVACY_RGPD.md` / `docs/18_PWA_OFFLINE.md` / `docs/26_PWA_APP_UPDATE.md`
> - `docs/25_DESIGN_FREEZE.md`

---

# 1. Objectif

Cadrer officiellement (développement **ultérieur**, hors de cette ouverture) :

- **F-009** — Historique
- **F-010** — Progression
- **F-032** — Reprise de séance (persistante)
- **Finalisation F-013** — Séances guidées « complètes » au sens lifecycle (pas médias)

But produit : assurer **continuité locale** — revoir ce qui a été pratiqué, sentir où l’on en est dans le parcours débutant, reprendre une séance interrompue après refresh/fermeture, et clôturer le cycle séance (démarrage → interruption → reprise → fin → historique) **sans** compte, **sans** sync, **sans** gamification, **sans** dépendre des vidéos F-006.

**Phase actuelle : Fermé** — F-009 / F-010 / F-032 / F-013 (lifecycle) **Livré** (validation PO). Correctifs QA inclus (persistance reprise post F-031 ; snapshot serveur BeginnerPath stable). MVP-012 reste MEDIA BLOCKED. MVP-016 non ouvert.

---

# 2. Documents de référence

- `docs/02_PRODUCT_SCOPE.md`
- `docs/04_USER_JOURNEYS.md`
- `docs/05_FEATURES.md` §6.9, §6.10, §6.13, §6.32
- `docs/08_TAI_CHI_CURRICULUM.md` §12, §16–18
- `docs/12_UX_UI.md` / `12A` / `12B`
- `docs/13_TECH_ARCHITECTURE.md`
- `docs/14_DATA_MODEL.md`
- `docs/16_AUTH_SECURITY.md`
- `docs/17_PRIVACY_RGPD.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/19_ANALYTICS.md`
- `docs/20_TEST_STRATEGY.md`
- `docs/22_ROADMAP.md`
- `docs/24_DEVELOPER_HANDOVER.md`
- `docs/26_PWA_APP_UPDATE.md`
- Tickets MVP-005, MVP-006, MVP-013, MVP-014
- Runtime : `00`, `02`, `03`, `06`, `07`, `09`, `11`, `17`

---

# 3. Audit — état réel (docs + code)

## 3.1 Déjà livré (socle)

| Élément | État | Source |
| --- | --- | --- |
| `SessionTemplate` / `SessionStep` (3 séances) | OK | `local-curriculum` |
| PracticePlayer (intro → steps → bilan) | OK | MVP-005 |
| Pause / Reprendre **en mémoire de page** | OK | reducer `PAUSE` / `RESUME` |
| Safety gate F-031 | OK | ack mémoire page (rejoué à chaque entrée) |
| Mapping mouvements / retour au calme | OK | MVP-012 / MVP-014 |
| Historique `PracticeRecord` + localStorage | Partiel F-009 | clé `tai-chi-ai-coach.progress.v1` |
| Page `/progression` (stats sobres + liste) | Partiel F-010 | MVP-006 |
| Accueil « Reprendre » | **Relance template** dernière history | **pas** mid-session |
| BeginnerPath `/parcours/debutant` | OK sans progression perso | MVP-013 |
| Séance du jour F-008 | Stateless | MVP-014 |
| Prefs / onboarding localStorage | OK | MVP-007 / MVP-008 |
| PWA App Update socle | OK | `docs/26` — pas de cache métier |

## 3.2 Gaps confirmés

| Gap | Impact |
| --- | --- |
| État séance non persisté | Refresh / fermeture / reload update → perte du fil (F-032) |
| Accueil « Reprendre » = relance, pas reprise | Fausse continuité |
| F-010 non branché sur F-003 | Pas d’avancement parcours lisible |
| Pas de wipe historique/progression côté UI | Privacy locale incomplète |
| F-013 pas Livré global | CA « interrompre sans perdre le fil » non satisfait |
| IndexedDB métier | Absent (conception `18` ; runtime = localStorage) |

## 3.3 Hors MVP (rappel)

Auth, compte, Supabase, sync cloud (F-027), stats avancées (F-024), export (F-030), streaks punitifs, XP, leaderboards, caméra, analytics produit, MVP-016/017/018.

---

# 4. F-009 — Historique (cadrage exact)

## 4.1 Définition produit (`05` §6.9)

Journal simple des séances **terminées / abandonnées** (déjà enregistrées). Pas de classement. Pas de sanction. Pas de stats avancées (F-024 → V1).

## 4.2 Événement enregistré

| Champ | Décision d’ouverture |
| --- | --- |
| Quand | Uniquement à la **fin de séance** (bilan `summary`) : `completed` **ou** `abandoned` — comportement MVP-006 conservé |
| Pas d’entrée | Pause seule, navigation silencieuse sans quitter, reload mid-session |
| Données minimales | Réutiliser `PracticeRecord` : `id`, `sessionTemplateId`, `sessionTitle`, `practicedAt` (ISO), `durationMs` (**réelle** = `activeElapsedMs`), `status`, `stepsCompleted`, `stepsTotal` |
| Durée | **Réelle active** (hors pause) — déjà le cas |
| Répétitions | Autorisées : N entrées pour la même `sessionTemplateId` |
| Suppression unitaire | **Non requise** MVP (reco) — wipe global suffit (voir §12) |
| Limite d’historique | **Aucune limite dure documentée** — reco : conserver tout ; éventuellement plafond soft ≥ 100 si perf (décision PO-D) |
| Surface UI | `/progression` existante ; Accueil peut montrer **lien carnet** / évent. 1 ligne récente (`12` §11) sans dashboard |
| Persistance | localStorage `progress.v1` (existant) |

## 4.3 Ce qui n’est pas F-009

- Journal des leçons « consultées » sans pratique → **hors** (pas d’implémentation actuelle ; ne pas inventer)
- Analytics / sync / export

---

# 5. F-010 — Progression (cadrage exact)

## 5.1 Définition produit (`05` §6.10)

Indication simple d’avancement dans le **parcours débutant**, sans gamification. Voir où l’on en est + prochaine étape. Dépend de F-003 (**Livré**).

## 5.2 Ce que « progression » signifie au MVP

| Concept | MVP-015 ? | Notes |
| --- | --- | --- |
| Progression pédagogique (path) | **Oui** | Dérivée de BeginnerPath + historique `completed` |
| Séances effectuées (compteurs) | **Oui** | Stats existantes `/progression` |
| Parcours débutant enrichi | **Oui** | États honnêtes par étape (voir §11) |
| Statistiques sobres | **Oui** | total / completed / durée / dernière pratique — déjà là |
| Streak | **Non** | Interdit (punitif) |
| Score / XP / badges compétitifs | **Non** | Hors docs MVP |
| Gamification / classements | **Non** | `02` / `12` §17 |
| Qualité biomécanique | **Non** | Limite F-010 |

## 5.3 Indicateurs autorisés (calculables, non stockés en doublon)

- Pour chaque `sessionId` du BeginnerPath : **jamais pratiquée** / **abordée** (`abandoned` ou `completed`) / **terminée au moins une fois** (`completed ≥ 1`)
- **Prochaine étape** = première séance du path sans `completed` ; si toutes complétées → message calme « vous pouvez revisiter » (pas de verrou)
- Compteurs globaux existants (`UserStatistics`)
- **Pas** de barre de % inventée ni de « niveau » fictif

## 5.4 Agrégat `UserProgress`

Ne **pas** persister un gros snapshot redondant. Recalculer depuis `PracticeHistory` + `BeginnerPath`. Un type TS `ProgressSummary` (calculé) suffit.

---

# 6. F-032 — Reprise persistante (cadrage exact)

## 6.1 Définition produit (`05` §6.32)

Reprendre une séance (ou le parcours) là où l’utilisateur s’était arrêté, sans culpabilité. Limite officielle : **précision du point de reprise ouverte** → arbitrage ci-dessous.

## 6.2 Recommandation de granularité (PO-A)

**Point de reprise = étape** (`currentStepIndex` + `stepId` + `phase`) + temps actif + statut pause.

| Donnée sauvegardée | Oui / Non | Justification |
| --- | --- | --- |
| `sessionTemplateId` | Oui | ID stable |
| `templateVersion` / `contentVersion` | Oui | Invalidation si contenu change |
| `practiceSessionId` (instance) | Oui | Éviter doubles écritures |
| `phase` (`intro` \| `step` \| `summary`) | Oui | |
| `currentStepIndex` | Oui | |
| `currentStepId` | Oui | Validation croisée |
| `completedStepIds` | Oui | |
| `status` (`running` \| `paused`) | Oui | |
| `activeElapsedMs` | Oui | Continuité durée |
| `startedAt` | Oui | |
| `updatedAt` | Oui | Diagnostic / TTL éventuel |
| Texte complet des steps | **Non** | Recharger depuis curriculum |
| Ack safety | **Non** (reco) | Gate F-031 rejoué à la reprise (PO-B) |

## 6.3 Quand sauvegarder

| Événement | Sauvegarde |
| --- | --- |
| Après `START` / `BEGIN_STEPS` | Oui |
| Changement d’étape | Oui |
| Pause / Reprendre (in-page) | Oui |
| Tick temps (throttle raisonnable, ex. ≤ 5–15 s) | Optionnel |
| Avant unload (`pagehide` / `visibilitychange` hidden) | Oui si supporté |

## 6.4 Quand effacer

| Événement | Effacer reprise |
| --- | --- |
| Fin `completed` (après enregistrement historique OK) | Oui |
| Abandon confirmé (après enregistrement historique OK) | Oui |
| Action utilisateur « Abandonner / Recommencer » depuis Accueil | Oui |
| État corrompu / session inconnue / version incompatible | Oui (+ fallback calme) |
| Wipe privacy | Oui |

## 6.5 Comportements

| Situation | Comportement |
| --- | --- |
| Reload / fermeture navigateur | Restaurer snapshot → reprendre à l’étape |
| Nouvelle version PWA (reload après `controllerchange`) | Snapshot localStorage **survivant** → reprise possible ; App Update ne purge pas LS |
| Contenu / `contentVersion` changé | Invalider reprise ; proposer démarrer depuis le début (message calme) |
| Session template absente | Effacer ; EmptyState / lien bibliothèque |
| État corrompu / version schema inconnue | Effacer ; ne pas planter |
| Une seule reprise active | **Oui** (reco) — dernière séance interrompue |

## 6.6 Interaction PracticePlayer

- Étendre le player pour **hydrater** depuis snapshot (sans rewrite du moteur).
- Pause in-page reste inchangée conceptuellement.
- Ne pas contourner F-031 (voir PO-B).

---

# 7. Finalisation F-013 — gaps restants

## 7.1 Déjà présent

SessionTemplate, SessionStep, PracticePlayer, mapping mouvements, retour au calme, safety gate, bilan, enregistrement historique fin de séance.

## 7.2 Gaps pour « séances complètes » (ce ticket)

| Gap | Requis pour F-013 Livré ? |
| --- | --- |
| Interrompre **sans perdre le fil** (F-032 persistante) | **Oui** — CA `05` |
| Continuité Accueil / parcours honnête | **Oui** |
| Médias vidéo dans PracticePlayer | **Non** — reste MVP-012 MEDIA BLOCKED |
| Génération IA / personnalisation | **Non** |

**Verdict :** F-013 peut passer **Livré** quand le lifecycle local (démarrage → interruption persistante → reprise → conclusion → historique) est validé PO, **indépendamment** des MP4.

---

# 8. Persistance — stratégie MVP

## 8.1 Existant

| Donnée | Mécanisme |
| --- | --- |
| Historique / stats | localStorage `tai-chi-ai-coach.progress.v1` |
| Préférences | localStorage `…preferences.v1` |
| Onboarding | localStorage `…onboarding.v1` |
| État séance live | Mémoire page |
| IndexedDB | **Absent** |

## 8.2 Recommandation

**Rester sur localStorage** pour MVP-015 :

- Cohérent avec MVP-006 / prefs / onboarding
- Suffisant pour 1 snapshot reprise + historique raisonnable
- Pas de migration IDB dans ce ticket
- IndexedDB reste cible conception (`18`) pour offline métier plus riche — **MVP-017+**, pas bloquant ici

Nouvelle clé proposée :

```text
tai-chi-ai-coach.practice-resume.v1
```

Store abstrait (`PracticeResumeStore`) remplaçable plus tard — même pattern que `ProgressStore`.

**Pas d’auth. Pas de Supabase. Pas de sync.**

---

# 9. Modèles minimaux

| Modèle | Persisté ? | Décision |
| --- | --- | --- |
| `PracticeRecord` / `PracticeHistory` | Oui (existant) | Conserver ; évent. champs mineurs seulement si justifiés |
| `PracticeResumeState` | Oui (nouveau) | Snapshot mid-session (§6.2) |
| `ProgressSummary` | Non (calculé) | Path + stats dérivés |
| `PracticeSession` SQL / User cloud | Non | Hors MVP |
| `Recommendation` persistée / `progress_rule` | **Non** MVP-015 minimal | F-008 reste stateless ; display-only optionnel (§13) |
| Dupliquer titres longs / steps | Non | IDs + reload curriculum |

Schéma conceptuel `PracticeResumeState` :

```text
version: 1
practiceSessionId
sessionTemplateId
templateVersion
phase
currentStepIndex
currentStepId
completedStepIds[]
status: running | paused
activeElapsedMs
startedAt
updatedAt
```

---

# 10. Lifecycle

## 10.1 Reprise

```text
Accueil détecte PracticeResumeState valide
  → zone prioritaire « Continuer / Reprendre » (libellé calme — PO-C)
  → CTA → /pratique/{sessionId}?… ou hydratation directe
  → Safety gate F-031 (reco : toujours)
  → Hydrate reducer depuis snapshot
  → Utilisateur continue
```

Actions secondaires :

- **Recommencer** : efface snapshot ; démarre intro
- **Abandonner** : confirme (modale) → `abandoned` en historique si séance avait démarré → efface snapshot

## 10.2 Fin de séance (ordre anti double-écriture)

1. Transition reducer → `summary` + `endReason`
2. `recordPractice` **une seule fois** (garde `recordedRef` / idempotence par `practiceSessionId`)
3. Effacer `PracticeResumeState`
4. Afficher bilan (« Enregistré dans votre carnet local »)
5. Reload sur bilan : **ne pas** re-écrire l’historique ; reprise absente

## 10.3 Reload mid-session

- Snapshot présent → reprise
- Pas de `PracticeRecord` tant que pas de fin explicite

---

# 11. BeginnerPath enrichi (F-010)

Sur `/parcours/debutant` (et Accueil si léger) :

| Affichage | Règle |
| --- | --- |
| Étape non abordée | Neutre |
| Abordée / interrompue | « Commencée » / sobre — **sans** pénalité |
| Terminée ≥ 1 | « Déjà pratiquée » (libellé MVP-013 prévu) |
| Prochaine étape | Première sans `completed` |
| Verrouillage | **Interdit** |
| % / score | **Interdit** |

Sources : uniquement historique local + IDs path. Pas de progression fictive.

---

# 12. Privacy / reset

| Donnée | Pourquoi | Durée | Suppression |
| --- | --- | --- | --- |
| `PracticeHistory` | Continuité / carnet | Appareil | Wipe UI (reco) + clear navigateur |
| `PracticeResumeState` | Reprise | Jusqu’à fin / abandon / invalidation | Auto + wipe |
| Prefs / onboarding | Existants | Appareil | Existants / clear navigateur |
| Caméra / médical | — | **Aucune** | — |

**Reco PO-E :** sur `/profil`, action « Effacer mon historique et ma reprise locaux » :

- Modale de confirmation (pas `alert` / `confirm`)
- Efface `progress.v1` + `practice-resume.v1`
- Ne touche pas forcément onboarding/prefs (ou proposer choix clair)
- Annonce status accessible

Conformité esprit `17` (minimisation, local, pas de vidéo CV). Export F-030 = **V1** hors ticket.

---

# 13. Interaction DailyProgram (F-008)

- Algorithme **inchangé** (stateless, date locale, BeginnerPath).
- **Ne pas** transformer en programme personnalisé.
- Option d’affichage (PO-F) : si historique montre un `completed` **aujourd’hui** pour la séance du jour → mention calme « déjà pratiquée aujourd’hui » **sans** changer la suggestion ni inventer de validation de journée.
- Défaut reco : **ne pas** bloquer / remplacer la suggestion.

---

# 14. Interaction PWA App Update

| Règle `26` | Implication MVP-015 |
| --- | --- |
| Pas d’interruption `/pratique/*` | Conservée |
| Reload unique après acceptation update | Snapshot LS doit survivre → F-032 couvre le cas |
| SW sans precache métier | Inchangé ; pas confondre avec MVP-017 |
| Clear site data | Wipe tout (y compris reprise) — comportement navigateur |

Tests obligatoires : reprise après reload post-update (simulation `controllerchange` + reload).

---

# 15. UI / routes

| Surface | Rôle MVP-015 |
| --- | --- |
| Accueil | Priorité : **reprise mid-session** > Séance du jour > relance « dernière séance » (renommer si besoin pour éviter confusion) ; progression sobre ; lien carnet |
| `/pratique/[sessionId]` | Hydratation reprise + garde fin de séance |
| `/parcours/debutant` | États F-010 |
| `/progression` | Historique + stats (existant, évent. polish) |
| `/profil` | Wipe local (reco) |
| Nouvelle route `/historique` | **Non** (évite duplication) |

Bottom-nav : **aucun** nouvel item.

### Priorité Accueil (PO-C)

1. Reprise persistante active  
2. Séance du jour (F-008)  
3. Relance template dernière history (libellé distinct : « Refaire » / « Dernière séance » — **pas** « Reprendre » si mid-session existe)

Verbes 12A : Continuer · Reprendre · Pratiquer.

---

# 16. Accessibilité

- Statuts textuels (pas seulement icônes / barres)
- Progression path lisible au clavier / lecteurs d’écran
- `role="status"` / `aria-live` pour sauvegarde / reprise / wipe
- Confirmation destructive = modale DS
- `prefers-reduced-motion` respecté
- Aucune info uniquement visuelle

---

# 17. Offline

- Persistance locale **sans réseau** (LS)
- MVP-017 reste responsable du cache app shell / assets
- Ne pas ouvrir MVP-017 ici

---

# 18. Tests prévus (implémentation)

- Sauvegarde reprise (step change / pause / unload)
- Reload → reprise correcte (index, temps, pause)
- Reprise Accueil → player hydraté
- Abandon → history `abandoned` + resume cleared
- Fin séance → history `completed` + resume cleared
- Répétition même séance → N entrées
- Absence double entrée après reload bilan
- Progression path (états / prochaine étape)
- Données corrompues / version inconnue → clear safe
- Session inconnue / contentVersion mismatch
- Interaction PWA reload + reprise
- Reset privacy (modale + clés vidées)
- F-008 algorithme inchangé (+ option badge si PO-F)
- Safety gate non contourné
- Régressions F-003 / F-008 / F-013 player / F-031
- Light / Dark ; Mobile ; a11y basique

---

# 19. Décisions PO nécessaires

| ID | Sujet | Recommandation d’ouverture | Bloquant code ? |
| --- | --- | --- | --- |
| **PO-A** | Granularité reprise | **Validé** — étape + pause + `activeElapsedMs` ; save step/pause/reprise/pagehide/sortie ; **pas** de write/seconde | — |
| **PO-B** | Safety gate à la reprise | **Validé** — Accueil → Reprendre → F-031 → hydrate | — |
| **PO-C** | Priorité / wording Accueil | **Validé** — reprise > jour > Refaire ; « Reprendre » réservé au snapshot | — |
| **PO-D** | Limite historique | **Validé** — max **200** FIFO | — |
| **PO-E** | Wipe privacy UI | **Validé** — Profil « Effacer mes données de pratique » (history + resume ; prefs/onboarding intacts) | — |
| **PO-F** | Badge « déjà pratiquée aujourd’hui » | **Validé** — statut informatif ; algo F-008 inchangé | — |
| **PO-G** | F-013 sans médias | **Validé** — lifecycle local suffit ; F-006/MVP-012 séparés | — |

---

# 20. Périmètre / hors périmètre

## In scope (implémentation future)

- F-032 snapshot localStorage + hydratation PracticePlayer
- F-009 complétion produit (historique honnête + Accueil non trompeur)
- F-010 branché BeginnerPath + `ProgressSummary` calculé
- Finalisation F-013 lifecycle
- Wipe local (si PO-E)
- Tests + Runtime

## Hors scope

- Auth / sync / Supabase / compte
- IndexedDB migration
- F-024 / F-027 / F-030 / F-018
- Streaks / XP / gamification
- Modifier / fermer MVP-012
- MVP-016 / MVP-017 / MVP-018
- Caméra / analytics produit
- Changer l’algo F-008

---

# 21. Critères d’acceptation (ticket)

### F-032

1. Après refresh / fermeture, l’utilisateur peut reprendre à l’étape sauvegardée.
2. Aucun message de culpabilisation.
3. Recommencer / abandonner possibles clairement.
4. Snapshot effacé après fin ou abandon enregistré.
5. F-031 non contourné involontairement.

### F-009

1. Historique consultable (`/progression`).
2. Entrées créées uniquement en fin de séance (`completed` / `abandoned`).
3. Durée réelle active.
4. Répétitions possibles.
5. Pas de classement / sanction.

### F-010

1. Avancement visible sur le parcours débutant (états honnêtes).
2. Prochaine étape identifiable.
3. Stats sobres conservées.
4. Pas de streak / XP / compétition / % inventé.

### F-013 (finalisation)

1. Démarrer → conclure clairement (existant).
2. Interrompre sans perdre le fil (via F-032).
3. Indépendant des MP4 MVP-012.

### Privacy

1. Données locales uniquement.
2. Wipe possible si PO-E accepté.
3. Aucune donnée caméra / médicale.

---

# 22. Gates de readiness

| Feature | Gate | Justification |
| --- | --- | --- |
| **F-009** | **Livré** | Historique + FIFO 200 + Accueil Refaire ; validé PO |
| **F-010** | **Livré** | `ProgressSummary` calculé + BeginnerPath enrichi ; validé PO |
| **F-032** | **Livré** | `PracticeResumeState` localStorage + hydrate post F-031 ; validé PO |
| **F-013 finalisation** | **Livré** (hors médias) | Lifecycle complet ; médias = MVP-012 MEDIA BLOCKED |
| **MVP-012** | Inchangé | MEDIA BLOCKED — parallèle |
| **MVP-016** | Non ouvert | — |

### Gate global MVP-015

**Fermé** (validation PO — CH-019)

**DEPENDENCY BLOCKED :** non — aucune dépendance média / auth.

---

# 23. Definition of Done

- [x] PO-A…G validées
- [x] F-032 : reprise persistante post-refresh/fermeture
- [x] F-009 : historique cohérent ; Accueil non trompeur (« Refaire »)
- [x] F-010 : path enrichi + prochaine étape
- [x] F-013 : CA interruption satisfait (hors médias) → **Livré**
- [x] Privacy wipe (PO-E)
- [x] F-008 algorithme intact (+ badge PO-F)
- [x] Snapshot LS survit reload/update (pas de purge SW)
- [x] Correctif QA : pas de snapshot avant acknowledgement F-031
- [x] Correctif QA : server snapshot BeginnerPath stable
- [x] Tests automatisés (161) + Build / tsc / ESLint
- [x] Runtime synchronisé (F-009 / F-010 / F-032 / F-013 Livré)
- [x] MVP-012 non fermé ; MVP-016 non ouvert
- [x] Validation PO visuelle + clôture + commit

---

# 24. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (9 août 2026) |
| Audit docs / code | **Fait** |
| Modèles / persistance / lifecycle | **Implémentés** |
| Décisions PO | **Validées** (PO-A…G) |
| Gate readiness | **READY FOR CODE** |
| Implémentation code | **Livrée** — validée PO |
| Clôture | **Fermé** — CH-019 |

---

*Fin du ticket MVP-015 (Fermé — MVP-012 reste MEDIA BLOCKED / REFERENCE MOTION BLOCKED ; MVP-016 non ouvert).*
