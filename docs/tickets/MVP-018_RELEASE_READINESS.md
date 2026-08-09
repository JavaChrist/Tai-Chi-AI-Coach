# MVP-018_RELEASE_READINESS

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Ouvert** — Fix round P1/P3 revalidé — **READY FOR GATE 9/10** (commit `34549c4`)
> Phase : MVP — Recette finale / gates / publiabilité
> Release publication : **BLOCKED** (GATE 9 + GATE 10 uniquement)
> Emplacement : `docs/tickets/MVP-018_RELEASE_READINESS.md`
> Dépend de :
> - Tickets fermés MVP-008B → MVP-017 (sauf MVP-012)
> - MVP-012_PEDAGOGICAL_VIDEOS (**Ouvert** — MEDIA BLOCKED / REFERENCE MOTION BLOCKED — **conservé** ; 0 MP4)
> - `docs/00_MASTER_PLAN.md` … `docs/26_PWA_APP_UPDATE.md`, `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`
> - Runtime : `00`, `02`, `07`, `09`, `10`, `11`, `13`, `16`, `19`

---

# 1. Objectif

Ouvrir et cadrer la **recette finale** du MVP :

- vérifier le produit complet ;
- détecter les bugs réels ;
- vérifier les gates de publication ;
- documenter les limitations acceptées ;
- déterminer si le MVP est **publiable** ;
- **ensuite** corriger uniquement ce qui bloque réellement la release.

**Phase actuelle :** Fix round BUG-001/002/003 **revalidé** (9 août 2026).
**Décision campagne :** **READY FOR GATE 9/10** — GATES 1→8 PASS ; 0 P0/P1 ouverts.
**Release publication :** **BLOCKED** (GATE 9 iPhone + GATE 10 F-006 uniquement).

MVP-018 **n’est pas** un ticket fourre-tout : hors bugs P0/P1 de release et décisions PO explicites, pas de scope creeping.

---

# 2. Documents de référence

| Source | Usage |
| --- | --- |
| `docs/00_MASTER_PLAN.md` | Cap produit |
| `docs/02_PRODUCT_SCOPE.md` | Périmètre MVP / F-006 classée MVP |
| `docs/05_FEATURES.md` | Catalogue + critères F-xxx + critique F-006 |
| `docs/17_PRIVACY_RGPD.md` / runtime `06` | Local only, pas de compte |
| `docs/18_PWA_OFFLINE.md` / `26` / runtime `07` | Offline / App Update |
| `docs/20_TEST_STRATEGY.md` / runtime `09` | Tests |
| `docs/21_DEPLOYMENT.md` / runtime `10` | Déploiement |
| `docs/22_ROADMAP.md` / tickets README §20 | Séquence |
| `docs/23_RELEASE_PLAN.md` | Go/No-Go G1–G14 |
| `docs/24_DEVELOPER_HANDOVER.md` | Handover |
| `docs/25_DESIGN_FREEZE.md` | DS figé |
| Tickets MVP-008B…017 + MVP-012 | Preuves de livré / blocages |

État Git de référence à l’ouverture : `main` @ `b9c82e8` ; working tree clean ; Vitest **181/181** (référence clôture MVP-017).

---

# 3. Périmètre / hors périmètre

## 3.1 Inclus

| Élément | Inclus |
| --- | --- |
| Audit features MVP (statut réel) | ● |
| Plan de recette routes + E2E | ● |
| Checklist PWA / offline / install | ● |
| Procédure iPhone/Safari réelle | ● |
| Gates release 1→10 + décision publiabilité | ● |
| Inventaire bugs par sévérité (après exécution) | ● |
| Limitations acceptées + décisions PO | ● |
| Correctifs **uniquement** P0/P1 bloquant release (phase ultérieure du ticket) | ● (après recette) |

## 3.2 Exclu (explicite)

| Sujet | Motif |
| --- | --- |
| Nouveau développement fonctionnel « nice to have » | Hors release |
| Production / ajout MP4 | MVP-012 MEDIA BLOCKED |
| Fermeture ou modification statut MVP-012 sans justification documentaire | Interdit |
| Auth / sync / IA / CV / Mei / F-026 packs | Hors MVP |
| Optimisation prématurée / Lighthouse inventé | Interdit |
| Déploiement production sans demande explicite | Interdit |
| Commit / push dans l’ouverture audit | Interdit |

---

# 4. Matrice features MVP (audit ouverture)

Statuts de recette (distincts du runtime `02` quand pertinent) :

`Livré` · `En test` · `Bloqué` · `Hors release` · `Limitation acceptée`

| ID | Nom | Runtime `02` | Statut recette MVP-018 | Preuve / remarque |
| --- | --- | --- | --- | --- |
| F-001 | Présentation Tai Chi | Livré | **Livré** / En test (recette) | `/decouverte` — MVP-010 |
| F-002 | Styles | Livré | **Livré** / En test | Section styles — MVP-010 |
| F-003 | Parcours débutant | Livré | **Livré** / En test | `/parcours/debutant` — MVP-013 |
| F-004 | Bibliothèque mouvements | Livré | **Livré** / En test | `/bibliotheque/mouvements` — MVP-011 |
| F-005 | Explication mouvement | Livré | **Livré** / En test | Fiches slug — MVP-011 |
| F-006 | Vidéo pédagogique | En test | **Bloqué** (média) | Infra + fallback ; **0 MP4** ; MVP-012 ouvert — voir §5 |
| F-007 | Images de référence | Livré | **Livré** / En test | WebP F-007 — MVP-011 ; fallback pédagogique actif |
| F-008 | Programme quotidien | Livré | **Livré** / En test | Séance du jour — MVP-014 |
| F-009 | Historique | Livré | **Livré** / En test | `/progression` — MVP-015 |
| F-010 | Progression | Livré | **Livré** / En test | Stats sobres — MVP-015 |
| F-013 | Séances guidées | Livré | **Livré** / En test (+ **Limitation** médias) | Lifecycle OK ; player média = MVP-012 |
| F-014 | Respiration | Livré | **Livré** / En test | `/respiration` — MVP-014 |
| F-015 | Relaxation | Livré | **Livré** / En test | Steps retour — MVP-014 |
| F-016 | Conseils sécurité | Livré | **Livré** / En test | `/conseils-de-securite` — MVP-009 |
| F-028 | Paramètres | Livré | **Livré** / En test | `/profil` — MVP-016/007 |
| F-029 | Accessibilité | Livré | **Livré** / En test | Skip, reduceMotion, touch — MVP-016 |
| F-031 | Avertissements pré-pratique | Livré | **Livré** / En test | Gate `/pratique/...` — MVP-009 |
| F-032 | Reprise séance | Livré | **Livré** / En test | localStorage resume — MVP-015 |
| F-033 | Onboarding | Livré | **Livré** / En test | `/onboarding` — MVP-016/008 |

Hors scope MVP release (catalogue) : F-011+ V1/V2/V3/backlog — **Hors release**.

---

# 5. Décisions PO officielles (PO-R1 → PO-R7) — enregistrées

| ID | Décision | Choix officiel | Impact |
| --- | --- | --- | --- |
| **PO-R1** | F-006 obligatoire pour MVP publiable publiquement ? | **Oui** — priorité **P0 / critique** inchangée | GATE 10 obligatoire pour Go |
| **PO-R2** | Waiver `deferred media` / F-007+F-005 suffisent pour release publique ? | **Non** — F-007+F-005 = développement, fallback, navigation, tests **uniquement** ; **ne permettent pas** de déclarer F-006 Livré | Aucun waiver release |
| **PO-R3** | Minimum média pour lever GATE 10 | **3 vidéos pédagogiques validées** (1 par mouvement) : MV-001, MV-002, MV-003. Une qualité par mouvement suffit. Pas d’obligation multi-angles / normale+ralentie / voix / montage complexe | Critère PASS GATE 10 |
| **PO-R4** | Fidélité | Pipeline obligatoire : source fiable → référence approuvée → production Mei → QC → validation humaine → publication. Fidélité pédagogique/biomécanique **>** esthétique. Mouvement douteux = **REJET** | MVP-012 reste MEDIA BLOCKED / REFERENCE MOTION BLOCKED tant que non satisfait |
| **PO-R5** | iPhone / Safari | Test **iPhone réel obligatoire** avant Go. **Pas de waiver** | GATE 9 **BLOCKED** jusqu’au test réel |
| **PO-R6** | Staging HTTPS/Vercel | Fait partie de la recette finale. **Ne pas déployer** dans la mission documentaire. Campagne doit prévoir build prod + staging/preview + HTTPS + PWA + iPhone réel | Prérequis GATE 9 (URL HTTPS) |
| **PO-R7** | Go / No-Go maintenant | **Aucun Go maintenant**. Go final = GATES 1→10 satisfaits | Release publication bloquée |

### 5.1 Conséquence gates

| Indicateur | Valeur |
| --- | --- |
| Gate ticket MVP-018 | **READY FOR FINAL QA** |
| Release publication | **BLOCKED** (jusqu’à GATE 9 PASS + GATE 10 PASS + 0 P0/P1 ouverts) |
| MVP-012 | **Ouvert** / MEDIA BLOCKED / REFERENCE MOTION BLOCKED — **inchangé** (référence documentaire uniquement) |
| F-006 | Non Livré ; 0 MP4 ; reste En test / Bloqué média |

### 5.2 Référence MVP-012 (sans modification de statut)

Voir `docs/tickets/MVP-012_PEDAGOGICAL_VIDEOS.md` : infra code + fallback ; publication F-006 « Livré » exige médias validés. PO-R1→R4 confirment cette ligne : GATE 10 parallèle via MVP-012.

---


# 6. Audit routes (plan de vérification)

Routes réelles (`web/src/app/**/page.tsx`) :

| Route | Build | Accès direct | Nav | Mobile | Desktop | Light | Dark | Offline* | Vide | Erreur / 404 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| `/decouverte` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | — |
| `/bibliotheque` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| `/bibliotheque/mouvements` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| `/bibliotheque/mouvements/[id]` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | ☐ id inconnu |
| `/bibliotheque/[sessionId]` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | ☐ session inconnue |
| `/parcours/debutant` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | — |
| `/respiration` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | — |
| `/progression` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| `/profil` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | — |
| `/conseils-de-securite` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | — |
| `/onboarding` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | — |
| `/pratique/[sessionId]` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — | ☐ session / resume |
| `/hors-ligne` | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ (cible) | — | — |
| `/sessions` (si exposée) | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | — |

\*Offline = navigation/reload après precache MVP-017, si applicable.

**Légende résultats :** `OK` / `KO` / `N/A` / `NT` (non testé).

---

# 7. Parcours utilisateur E2E (recette)

## 7.1 Nouvel utilisateur

| # | Étape | Surface | Critère PASS |
| --- | --- | --- | --- |
| 1 | Première ouverture | `/` ou redirect onboarding | Shell DS ; pas d’alert natif |
| 2 | Onboarding | `/onboarding` | 5 étapes ; complete→découverte ; skip→bibliothèque |
| 3 | Découverte | `/decouverte` | F-001/F-002 ; non médical |
| 4 | Parcours débutant | `/parcours/debutant` | 3 phases ; liens séances |
| 5 | Séance (fiche) | `/bibliotheque/[sessionId]` | Contenu + CTA pratique |
| 6 | Safety gate | `/pratique/...` pré-pratique | F-031 ; lien F-016 |
| 7 | Mouvement associé | fiche mouvement | F-005/F-007 ; fallback vidéo calme |
| 8 | Pratique | steps guidés | Pause/reprise ; pas de crash |
| 9 | Retour au calme | steps `retour` | F-015 ; ton prudent |
| 10 | Fin séance | bilan | Historique mis à jour (F-009) |
| 11 | Historique | `/progression` | Entrée récente visible |
| 12 | Progression | stats | F-010 sobre ; pas de gamification |
| 13 | Séance du jour | Accueil | F-008 déterministe |
| 14 | Respiration | `/respiration` | F-014 texte seul |
| 15 | Profil | `/profil` | Thème / prefs / Build ID |
| 16 | Reset | Profil | Confirmation **modale** ; données effacées |

## 7.2 Utilisateur revenant

| # | Étape | Critère PASS |
| --- | --- | --- |
| 1 | Reprise persistante | Accueil « Reprendre » = vrai resume (F-032) |
| 2 | Reload mid-session | État cohérent ou reprise sûre |
| 3 | Reprise après F-031 | Gate puis hydrate resume |
| 4 | Completion | Record + clear resume |
| 5 | Update PWA | Modale / gate ; différé `/pratique/*` (`26`) |
| 6 | Offline | Cœur navigable ; MP4 absents OK ; `/hors-ligne` si besoin |
| 7 | Retour online | Reprise normale ; pas de corruption |

---

# 8. PWA / Offline — checklist

| Item | Attendu | Résultat |
| --- | --- | --- |
| Install (Chrome/Edge) | Critères installabilité | ☐ |
| Update (Build ID) | Waiting → SKIP_WAITING → reload unique | ☐ |
| Offline navigation cœur | Precache ~4,16 Mo / 79 entrées | ☐ |
| Reload direct offline | Routes précachées OK | ☐ |
| Fallback `/hors-ligne` | Document calme | ☐ |
| Reprise offline/online | localStorage intact | ☐ |
| Cache version | `tcac-precache-${APP_BUILD_ID}` | ☐ |
| Purge activate | Anciens caches retirés | ☐ |
| Aucun MP4 en cache | Network Only vidéos | ☐ |
| Budget cache | ≤ 8 Mo cible (mesuré ≈ 4,16 Mo) | ☐ |
| Pas de PII dans Cache Storage | Prefs/pratique en localStorage seulement | ☐ |

---

# 9. iPhone / Safari (report MVP-017 — obligatoire ici)

## 9.1 Procédure

1. Build prod local ou URL HTTPS déployée (Secure Context requis pour SW).
2. Safari iOS (appareil réel, pas simulateur seul si possible).
3. Première visite → parcours court (onboarding skip OK) → 1 séance jusqu’à step pratique.
4. **Ajouter à l’écran d’accueil** (A2HS) ; rouvrir en standalone.
5. Couper réseau ; recharger `/`, `/pratique/...` connue, route inconnue → `/hors-ligne`.
6. Vérifier update : déployer/new Build ID si possible ; sinon documenter **NT**.
7. Vérifier lecture média : **pas de MP4** → fallback image/texte (pas de crash).
8. Vérifier thème Light/Dark système iOS.
9. Consigne : pas d’`alert`/`confirm` natifs.

## 9.2 Résultat attendu (à remplir)

| Item | testé réel | non testé | bloque release | limitation documentée |
| --- | --- | --- | --- | --- |
| Navigation cœur | ☐ | ☐ | ☐ | ☐ |
| A2HS / standalone | ☐ | ☐ | ☐ | ☐ |
| SW / offline | ☐ | ☐ | ☐ | ☐ |
| App Update | ☐ | ☐ | ☐ | ☐ |
| Fallback vidéo | ☐ | ☐ | ☐ | ☐ |
| Touch / safe areas | ☐ | ☐ | ☐ | ☐ |

**État :** iPhone/Safari = **non testé** (report MVP-017). GATE 9 = **BLOCKED** jusqu’au test **iPhone réel** sur URL HTTPS (PO-R5 — **pas de waiver** ; PO-R6 staging).

---

# 10. PWA Install — audit manifeste

| Champ | Valeur réelle (`manifest.webmanifest`) | Recette |
| --- | --- | --- |
| name | Tai-Chi AI Coach | ☐ |
| short_name | Tai-Chi | ☐ |
| start_url | `/` | ☐ |
| display | `standalone` | ☐ |
| theme_color | `#7A998D` | ☐ |
| background_color | `#F7F6F1` | ☐ |
| icons 192/512 any + maskable | Présents sous `/brand/icons/` | ☐ |
| Chrome/Edge install | À valider | ☐ |
| iOS A2HS | À valider (§9) | ☐ |

---

# 11. UI / Design — checklist

| Item | Attendu | ☐ |
| --- | --- | --- |
| Aucun écran hors Design System | 12A / tokens | ☐ |
| Hero correct (surfaces Hero) | Full-bleed / familles validées | ☐ |
| Light / Dark | Cohérent | ☐ |
| Responsive mobile/desktop | OK | ☐ |
| Touch targets ≥ 44px | Interactifs | ☐ |
| Header / nav | Accessible | ☐ |
| Dette technique ouverte | **0** (TD-001 fermée) | ☐ |
| Aucun placeholder éditorial / asset erreur | Pas de « lorem » / broken image visible | ☐ |

---

# 12. Accessibilité — checklist finale

| Item | ☐ |
| --- | --- |
| Skip link | ☐ |
| Landmarks | ☐ |
| Headings | ☐ |
| Focus visible | ☐ |
| Dialogs (focus trap / Esc) | ☐ |
| Clavier | ☐ |
| Touch targets | ☐ |
| Alt images | ☐ |
| Contraste | ☐ |
| `prefers-reduced-motion` / pref reduceMotion | ☐ |
| Status text (pas info couleur seule) | ☐ |
| Pas d’alertes natives | ☐ |

---

# 13. Contenu — checklist

| Item | ☐ |
| --- | --- |
| Contenu Tai Chi validé (curriculum `08`) | ☐ |
| Pas de promesse médicale | ☐ |
| Prudence F-016 / F-031 | ☐ |
| F-014 respiration non médicale | ☐ |
| Mouvements MV-001…003 | ☐ |
| Styles (découverte) | ☐ |
| Textes onboarding | ☐ |
| Aucun placeholder éditorial utilisateur final | ☐ |
| Fallback vidéo : message calme, pas d’erreur brute | ☐ |

---

# 14. Privacy — checklist

| Item | Attendu | ☐ |
| --- | --- | --- |
| Local only | Pas de backend compte | ☐ |
| Pas de compte | — | ☐ |
| Pas de caméra | — | ☐ |
| Pas de tracking non documenté | Analytics runtime 0 | ☐ |
| Reset données | Profil + modale | ☐ |
| localStorage | Prefs / pratique / onboarding | ☐ |
| Cache Storage sans PII | Precache assets uniquement | ☐ |
| Logs sans données sensibles | Build/dev | ☐ |

---

# 15. Erreurs — cas à recetter

| Cas | Attendu | ☐ |
| --- | --- | --- |
| 404 movement | Not-found / message calme | ☐ |
| Session inconnue | Message / redirect sûr | ☐ |
| Resume corrompu | Clear / fallback sûr | ☐ |
| Cache manquant | Réseau ou `/hors-ligne` | ☐ |
| Offline route inconnue | Fallback hors-ligne | ☐ |
| Vidéo absente | Fallback F-007/texte (0 MP4) | ☐ |
| PWA update failure | Pas de boucle reload ; UI calme | ☐ |
| localStorage corruption | Dégradation gracieuse | ☐ |
| Reset | État neuf | ☐ |

---

# 16. Performance — gates MVP réalistes

| Gate | Cible réaliste | Mesure | ☐ |
| --- | --- | --- | --- |
| Build prod | Succès sans erreur | `npm run build` (web) | ☐ |
| Cache precache | ≤ 8 Mo (≈ 4,16 Mo connu) | Budget script / DevTools | ☐ |
| Images | WebP Hero/F-007 | Visuel | ☐ |
| Hero LCP | Pas d’audit inventé | Outil si présent, sinon NT | ☐ |

Pas d’optimisation prématurée dans MVP-018 sauf P0/P1 perf bloquant.

---

# 17. Tests — inventaire

| Couche | État à l’ouverture | Manque réel avant pub ? |
| --- | --- | --- |
| Vitest | **181/181** (réf. MVP-017) | Rejouer avant Go |
| Tests manuels routes/E2E | **Non exécutés** (campagne MVP-018) | **Oui** — cœur de ce ticket |
| Tests offline | Partiels unitaires SW ; manuel appareil | **Oui** — checklist §8 |
| E2E automatisé (Playwright…) | Non prévu MVP | Non obligatoire si manuel complet |
| Couverture % | Non gate | Non |

---

# 18. Déploiement — readiness (sans déployer)

| Item | État réel | Recette |
| --- | --- | --- |
| Build prod local | À confirmer | ☐ |
| Env vars | Aucun secret métier attendu MVP local | ☐ |
| Vercel / hébergeur | Runtime `10` : **Publication Non commencé** | ☐ |
| Domaine | Absent | ☐ |
| HTTPS | Requis PWA | ☐ |
| Headers / cache SW | `sw.js` no-cache (code) | ☐ |
| Logs / erreurs runtime prod | N/A sans deploy | ☐ |

Ne pas déployer dans l’audit d’ouverture sauf demande explicite PO.

---

# 19. Release Gates — synthèse

Valeurs : `PASS` · `FAIL` · `BLOCKED` · `READY` (exécutable, non encore joué) · `WAIVED` (interdit ici pour 9/10).

| Gate | État campagne | Preuve / remarque |
| --- | --- | --- |
| **GATE 1 — Build** | **PASS** | Revalidé post-fix : build + tsc + eslint OK |
| **GATE 2 — Tests** | **PASS** | Vitest **191/191** (50 files) post-fix |
| **GATE 3 — Fonctionnel E2E** | **PASS** | Happy path + 404 séance/mouvement avec SW → not-found réel (BUG-002) |
| **GATE 4 — Responsive/Mobile** | **PASS** | BUG-003 corrigé ; skip link ≥44px mesuré |
| **GATE 5 — Accessibilité** | **PASS** | Inchangé (pas de régression) |
| **GATE 6 — Offline/PWA** | **PASS** | Online 404 conservé ; network failure → hors-ligne (tests) ; cache hit offline ; 0 MP4 |
| **GATE 7 — Privacy** | **PASS** | Inchangé |
| **GATE 8 — Contenu** | **PASS** | BUG-001 levé ; fallback « Démonstration vidéo à venir » conservé |
| **GATE 9 — iPhone/Safari** | **BLOCKED** | Non exécuté — PO-R5/R6 |
| **GATE 10 — F-006 / vidéos** | **BLOCKED** | 0 MP4 — MVP-012 MEDIA BLOCKED |

**Règle :** GATES 1→8 peuvent s’exécuter **même si** GATE 10 est bloqué. Ne pas attendre Mei/VHS. GATE 9 dès qu’une URL HTTPS de recette existe.

---

# 19A. Campagne QA exécutable (ordre recommandé)

```text
GATE 1 Build
  → GATE 2 Tests
    → GATE 3 Fonctionnel E2E
      → GATE 4 Responsive/Mobile
        → GATE 5 Accessibilité
          → GATE 6 Offline/PWA (local)
            → GATE 7 Privacy
              → GATE 8 Contenu
                ⇢ (dès HTTPS staging) GATE 9 iPhone/Safari
                ⇢ (parallèle MVP-012) GATE 10 F-006
```

**Première campagne immédiate :** GATES 1→8 en local + build production.
**Bugs :** enregistrer (sévérité, repro, gate) — **ne pas corriger** avant validation du rapport de campagne.
**Déploiement staging :** hors mission documentaire ; requis avant GATE 9 (PO-R6).

---

# 19B. Détail par gate

### GATE 1 — Build

| Champ | Contenu |
| --- | --- |
| Procédure | Dans `web/` : install deps si besoin ; `npm run build` (script prod projet, incl. precache/Build ID). |
| Preuve | Log build succès ; sortie `.next` ; Build ID généré ; manifeste precache sans erreur budget. |
| PASS | Build termine exit 0 ; aucune erreur bloquante ; precache ≤ budget (≤ 8 Mo cible). |
| FAIL | Erreur compilation/type ; échec génération SW/precache ; budget dépassé dur. |
| Bugs typiques | P0 build cassé ; P1 warning traité comme erreur CI ; P2/P3 bruit non bloquant. |

### GATE 2 — Tests

| Champ | Contenu |
| --- | --- |
| Procédure | `npm test` / Vitest dans `web/` ; constater total vs référence **181**. |
| Preuve | Rapport Vitest (pass/fail count). |
| PASS | Tous les tests verts (ou delta justifié documenté). |
| FAIL | Tout échec non justifié. |
| Bugs typiques | P0 suite rouge massif ; P1 flaky récurrent ; P3 assertion cosmétique. |

### GATE 3 — Fonctionnel E2E

| Champ | Contenu |
| --- | --- |
| Procédure | `next start` (ou équivalent) après build ; exécuter §7.1 + §7.2 ; matrice routes §6. Fallback vidéo attendu (0 MP4) = OK pour ce gate. |
| Preuve | Checklist §7 cochée ; notes par étape ; captures si KO. |
| PASS | Parcours nouveau + revenant sans blocage métier ; erreurs §15 gérées calmement. |
| FAIL | Crash, boucle, perte données critique, safety gate contourné, reset cassé. |
| Bugs typiques | P0 pratique/resume cassé ; P1 nav cassée ; P2 UX contournable ; P3 cosmétique. |

### GATE 4 — Responsive / Mobile

| Champ | Contenu |
| --- | --- |
| Procédure | Viewport mobile (~390) + desktop ; touch targets ; header/nav ; Hero ; Light/Dark. |
| Preuve | Checklist §11 ; notes overflow / cibles. |
| PASS | Surfaces utilisables mobile+desktop ; touch ≥ 44px interactifs ; pas d’écran hors DS. |
| FAIL | Contenu illisible ; CTA injoignable ; layout cassé critique. |
| Bugs typiques | P1 CTA hors écran ; P2 overflow secondaire ; P3 alignement. |

### GATE 5 — Accessibilité

| Champ | Contenu |
| --- | --- |
| Procédure | Checklist §12 : clavier, skip, focus, dialogs, reduce motion, contraste, alt, status text. |
| Preuve | Checklist §12 ; parcours clavier onboarding/pratique/profil/modales. |
| PASS | Aucun P0/P1 a11y ; critères §12 OK. |
| FAIL | Modale piège focus ; pratique inutilisable clavier ; info couleur seule critique. |
| Bugs typiques | P0 piège focus ; P1 skip/focus absent critique ; P2 contraste secondaire ; P3 libellé. |

### GATE 6 — Offline / PWA

| Champ | Contenu |
| --- | --- |
| Procédure | Secure Context local ; install SW ; precache ; offline nav cœur ; `/hors-ligne` ; update différé `/pratique/*` ; vérifier **aucun MP4** en cache ; budget. |
| Preuve | DevTools Application (SW, Cache Storage) ; checklist §8 ; taille precache. |
| PASS | Cœur offline OK ; fallback OK ; App Update préservé ; 0 MP4 caché ; budget OK. |
| FAIL | SW absent ; cœur offline cassé ; reload infini update ; MP4 précachés ; purge cassée. |
| Bugs typiques | P0 offline cœur mort ; P1 update casse pratique ; P2 eviction edge ; P3 libellé hors-ligne. |

### GATE 7 — Privacy

| Champ | Contenu |
| --- | --- |
| Procédure | Checklist §14 : pas de compte/caméra/tracking ; localStorage only métier ; Cache sans PII ; reset modale ; logs. |
| Preuve | DevTools Storage ; parcours reset ; absence appels tracking non documentés. |
| PASS | Local only conforme ; reset OK ; pas de PII en Cache Storage. |
| FAIL | Fuite données ; tracking occulté ; reset inopérant ; caméra demandée. |
| Bugs typiques | P0 fuite ; P1 reset cassé ; P2 libellé privacy ; P3 texte. |

### GATE 8 — Contenu

| Champ | Contenu |
| --- | --- |
| Procédure | Checklist §13 : non médical ; prudence ; mouvements ; styles ; onboarding ; pas de placeholder ; message fallback vidéo calme. |
| Preuve | Relecture surfaces listées ; notes écarts éditoriaux. |
| PASS | Contenu validé ; 0 promesse médicale ; 0 placeholder utilisateur final. |
| FAIL | Contenu médical / dangereux ; placeholder visible ; texte trompeur critique. |
| Bugs typiques | P1 promesse médicale ; P2 typo pédagogique ; P3 cosmétique texte. |

### GATE 9 — iPhone / Safari réel

| Champ | Contenu |
| --- | --- |
| Procédure | Après déploiement HTTPS staging/preview (PO-R6) : procédure §9 (A2HS, offline, standalone, fallback vidéo, thème). **Pas de waiver** (PO-R5). |
| Preuve | Tableau §9.2 rempli « testé réel » ; modèle iOS / version Safari. |
| PASS | Items §9.2 testés réel sans P0/P1. |
| FAIL | Crash iOS ; offline inutilisable ; A2HS cassé critique ; update destructeur. |
| État | **BLOCKED** jusqu’URL HTTPS + appareil réel. |
| Bugs typiques | P0 crash Safari ; P1 SW iOS cassé ; P2 eviction cache iOS (limitation connue) ; P3 UI notch. |

### GATE 10 — F-006 / vidéos (MVP-012)

| Champ | Contenu |
| --- | --- |
| Procédure | Parallèle MVP-012 : produire/valider **3 MP4** (MV-001, MV-002, MV-003) selon pipeline PO-R4 ; intégrer ; visionner en app (fiche + pratique). |
| Preuve | 3 fichiers validés ; QC + validation humaine ; lecture UI OK ; F-006 → Livré (alors seulement). |
| PASS | 3 vidéos fidèles validées + lecture utilisateur OK (critères F-006). |
| FAIL | < 3 vidéos ; mouvement douteux (REJET) ; player cassé avec média présent. |
| État | **BLOCKED** — 0 MP4 ; MEDIA BLOCKED / REFERENCE MOTION BLOCKED. |
| Bugs typiques | P0 média invalide publié ; P1 mapping `mediaKeyVideo` cassé ; P2 poster ; P3 contrôles UI. |

---

# 20. Bugs (registre campagne — 9 août 2026)

Sévérité : **P0** bloque totalement · **P1** bloque release · **P2** important contournable · **P3** mineur.

| Sévérité | Ouverts | IDs |
| --- | --- | --- |
| P0 | **0** | — |
| P1 | **0** | — |
| P2 | **0** | — |
| P3 | **0** | — |

| ID | Gate | Sévérité | Description | Statut |
| --- | --- | --- | --- | --- |
| BUG-001 | GATE 8 | P1 | Placeholders/technique curriculum | **Résolu** |
| BUG-002 | GATE 6 / 3 | P1 | SW 404 → hors-ligne | **Résolu** |
| BUG-003 | GATE 4 | P3 | Skip link &lt; 44px | **Résolu** |

Détail : `docs/runtime/13_BUGS.md`.

---

# 21. Limitations acceptables (après PO-R)

| ID | Description | Acceptée pour release publique ? |
| --- | --- | --- |
| LIM-R1 | 0 MP4 / F-006 non Livré | **Non** (PO-R1/R2) — bloque publication |
| LIM-R2 | iOS cache eviction possible | Oui (documentée) si cœur offline validé GATE 9 |
| LIM-R3 | Pas de sync multi-appareils | Oui (V1) |
| LIM-R4 | Pas d’analytics produit | Oui |
| LIM-R5 | Pas F-026 packs | Oui (V2) |
| LIM-R6 | Staging non encore déployé | Bloque seulement GATE 9 jusqu’à URL HTTPS |

---

# 22. Décisions PO — statut

| ID | Statut |
| --- | --- |
| PO-R1…R7 | **Enregistrées** (§5) |
| Go publication | **Non décidé** (PO-R7) — requis après GATES 1→10 PASS |

---

# 23. Release decision

| Indicateur | Valeur |
| --- | --- |
| Décision campagne après fix | **READY FOR GATE 9/10** |
| Release publication | **BLOCKED** (GATE 9 + GATE 10) |
| Conditions de déblocage publication | GATE 9 PASS + GATE 10 PASS + 0 P0/P1 |
| Go / No-Go | **Reporté** (PO-R7) |

MVP-012 **reste ouvert** / MEDIA BLOCKED / REFERENCE MOTION BLOCKED.

---

# 24. Definition of Done

- [x] PO-R1→R7 enregistrées
- [x] Campagne gates 1→10 procédurée
- [x] GATES 1→8 exécutés puis **PASS** après fix round
- [x] Correctifs BUG-001/002/003 + revalidation
- [ ] GATE 9 PASS (iPhone réel + HTTPS)
- [ ] GATE 10 PASS (3 MP4 validés via MVP-012)
- [x] Bugs P0/P1 résolus (0 ouvert)
- [ ] Go / No-Go publication enregistré (PO-R7)
- [x] MVP-012 statut inchangé (MEDIA BLOCKED)

---

# 25. Runtime à mettre à jour (cette étape)

| Registre | Action |
| --- | --- |
| `00_PROJECT_STATUS` | READY FOR FINAL QA ; RELEASE PUBLICATION BLOCKED ; PO-R |
| `11_BACKLOG` | MVP-018 → READY FOR FINAL QA ; MVP-012 inchangé |
| `14_DECISIONS_RUNTIME` | RD release PO-R1→R7 |
| `tickets/README` | Statut MVP-018 |
| MVP-012 / `02_FEATURE_STATUS` F-006 | **Pas de changement de statut** |

---

# 26. Historique ticket

| Date | Événement |
| --- | --- |
| 9 août 2026 | Ouverture — AUDIT + PLAN DE RECETTE ; gate DESIGN/PRODUCT DECISION REQUIRED (F-006) |
| 9 août 2026 | PO-R1→R7 enregistrées ; **READY FOR FINAL QA** ; **RELEASE PUBLICATION BLOCKED** (GATE 9 + GATE 10) ; campagne 1→10 procédurée ; aucun code |
| 9 août 2026 | Campagne GATES 1→8 exécutée ; PASS 1/2/4/5/7 ; FAIL 3/6/8 ; BUG-001…003 ; **BLOCKED BY P0/P1** |
| 9 août 2026 | Fix round BUG-001/002/003 ; Vitest **191/191** ; gates 1→8 **PASS** ; décision **READY FOR GATE 9/10** ; commit `34549c4` |

### Preuves fix round (commandes)

| Commande | Résultat |
| --- | --- |
| `npx tsc --noEmit` | exit 0 |
| `npm run lint` | exit 0 |
| `npm test` | **191/191** passed (50 files) |
| `npm run build` | exit 0 |
| Prod `:3457` + Playwright chrome | GATE 3/4/6/8 revalidés |

---

*Fin du ticket MVP-018 (READY FOR GATE 9/10).*
