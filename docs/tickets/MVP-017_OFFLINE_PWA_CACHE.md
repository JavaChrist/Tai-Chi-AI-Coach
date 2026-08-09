# MVP-017_OFFLINE_PWA_CACHE

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Fermé** (GO — 9 août 2026 — validation PO — CH-021)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-017_OFFLINE_PWA_CACHE.md`
> Dépend de :
> - Socle PWA App Update (`docs/26_PWA_APP_UPDATE.md` — CH-014 — **à étendre, pas reconstruire**)
> - MVP-003 … MVP-016 (curriculum, shell, pratique, progression, prefs, onboarding — **fermés** sauf MVP-012)
> - MVP-012_PEDAGOGICAL_VIDEOS (Ouvert — MEDIA BLOCKED / REFERENCE MOTION BLOCKED — **non bloquant** ; **0 MP4** ; ne pas précacher)
> - `docs/18_PWA_OFFLINE.md` (Offline First cœur MVP)
> - `docs/13_TECH_ARCHITECTURE.md` (D-071)
> - `docs/17_PRIVACY_RGPD.md`
> - `docs/20_TEST_STRATEGY.md` (D-159)
> - `docs/21_DEPLOYMENT.md` / `docs/23_RELEASE_PLAN.md`
> - `docs/24_DEVELOPER_HANDOVER.md` / `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`
> - Runtime : `00`, `01`, `07`, `09`, `11`

---

# 1. Objectif

Cadrer officiellement (développement **ultérieur**, hors de cette ouverture) :

- **Service Worker unique** étendu : precache + stratégies fetch du **cache cœur** offline
- Préservation intégrale du socle App Update (Build ID, waiting, AppUpdateModal/Gate, SKIP_WAITING, claim, reload unique, différé `/pratique/*`)
- Offline First du **cœur pédagogique local** (`docs/18` §6 / §29) — **sans** packs `F-026`, **sans** sync `F-027`, **sans** IndexedDB métier, **sans** auth/IA/CV/Mei

**Phase actuelle : Fermé** — Offline/PWA **Livré** (validation PO). Precache mesuré ≈ **4,16 Mo** / 79 entrées (conforme ≤ 8 Mo).

MVP-012 reste MEDIA BLOCKED. MVP-018 **non ouvert**.

**Validation plateforme :** iPhone/Safari réel **non effectué** ici → reporté à **MVP-018** (manuel ; non bloquant pour cette clôture).

### Décisions PO enregistrées

| ID | Décision | Choix |
| --- | --- | --- |
| **PO-A** | Hero strategy | **A2** — 10 Hero Mobile Light/Dark precache ; Tablet/Desktop runtime Cache First |
| **PO-B** | Fallback | **Oui** — route `/hors-ligne` |
| **PO-C** | Budget | Cible **≤ 8 Mo** ; plafond dur **≤ 12 Mo** — precache validé ≈ **4,16 Mo** / 79 entrées |
| **PO-D** | Vidéos | **Network Only** — aucun precache / runtime cache MP4 |

---

# 2. Documents de référence

- `docs/13_TECH_ARCHITECTURE.md`, `docs/17_PRIVACY_RGPD.md`, `docs/18_PWA_OFFLINE.md`
- `docs/20_TEST_STRATEGY.md`, `docs/21_DEPLOYMENT.md`, `docs/22_ROADMAP.md`
- `docs/23_RELEASE_PLAN.md`, `docs/24_DEVELOPER_HANDOVER.md`
- `docs/26_PWA_APP_UPDATE.md` (**socle à étendre**)
- `docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`
- `docs/05_FEATURES.md` — `F-026` (V2 packs) / `F-041` (backlog) : **hors livrable MVP-017**
- Runtime `07_OFFLINE_STATUS.md`

---

# 3. Périmètre produit (Offline First MVP)

## 3.1 Ce que MVP-017 livre

| Capacité | Inclus |
| --- | --- |
| Extension du SW existant (`sw-source.ts` → `/sw.js`) | ● |
| Precache cache cœur versionné par `APP_BUILD_ID` | ● |
| Handlers `fetch` par famille de ressource | ● |
| Navigation offline des surfaces cœur | ● |
| Fallback documentaire calme (si PO-B = oui) | ● |
| Préservation App Update + différé pratique | ● |
| Purge caches obsolètes **à l’activate** de la nouvelle version | ● |

## 3.2 Hors périmètre (explicite)

| Sujet | Motif |
| --- | --- |
| Second Service Worker | Interdit — un seul `/sw.js` |
| `F-026` packs riches | V2 |
| `F-027` sync / file d’attente | V1 |
| IndexedDB métier | Report ; localStorage MVP inchangé |
| Precache vidéos MP4 | MVP-012 MEDIA BLOCKED ; explosion quota |
| Auth / cloud / IA / CV / Mei | Hors MVP |
| MVP-018 | Non ouvert |
| Modification ticket MVP-012 | Interdit |
| Version manuelle `cache-v1` / `cache-v2` | Interdit — Build ID uniquement |

## 3.3 Mapping features

MVP-017 est un ticket **infrastructure Offline First** (roadmap §20), **pas** `F-026` ni `F-041`.

Il matérialise `docs/18` §6 / §29 (« Shell + cache essentiel + pratique locale ») et D-071 / D-132 / D-135, en s’appuyant sur les données déjà locales (curriculum bundlé + localStorage MVP-015/007/008).

---

# 4. Audit existant (code réel — 9 août 2026)

## 4.1 Socle App Update (à préserver)

| Pièce | Emplacement | État |
| --- | --- | --- |
| Build ID auto | `web/scripts/with-app-build-id.mjs` + `next.config.ts` | Livré |
| `APP_BUILD_ID` | `web/src/lib/pwa/build-id.ts` ; Profil | Livré |
| Source SW | `web/src/lib/pwa/sw-source.ts` | Minimal — **pas** de cache / fetch |
| Route `/sw.js` | `web/src/app/sw.js/route.ts` | `force-static` ; `Cache-Control: no-cache` ; `Service-Worker-Allowed: /` |
| Register | `web/src/lib/pwa/register-service-worker.ts` | Secure Context only |
| Hook | `web/src/hooks/use-service-worker-update.ts` | Poll 60 s + focus + visibility ; reload unique |
| Modale / Gate | `app-update-modal.tsx` / `app-update-gate.tsx` | Différé `/pratique/*` |
| Tests | `sw-source`, `sw.js/route`, `register`, `update-prompt`, modal | Présents |

Comportement SW actuel :

- `install` : no-op (**pas** de `skipWaiting` auto)
- `message` `SKIP_WAITING` → `skipWaiting()`
- `activate` → `clients.claim()`
- **Aucun** `caches.*`, **aucun** `fetch` listener

## 4.2 Manifeste

`web/public/manifest.webmanifest` :

| Champ | Valeur | Gap |
| --- | --- | --- |
| name / short_name | Tai-Chi AI Coach / Tai-Chi | OK |
| start_url / scope / id | `/` | OK |
| display | standalone | OK |
| theme / background | `#7A998D` / `#F7F6F1` | OK |
| icons 192/512 + maskable | Présents sous `public/brand/icons/` | OK |
| screenshots / shortcuts / orientation | Absents | Cosmétique — non bloquant MVP |
| apple-touch | `layout.tsx` | OK |

Registre `07` mentionnait encore « icônes absentes » — **obsolète** (à corriger à l’ouverture runtime).

## 4.3 Données locales (indépendantes du SW)

| Domaine | Clé / store | Store |
| --- | --- | --- |
| Onboarding | `tai-chi-ai-coach.onboarding.v1` | localStorage |
| Préférences | `tai-chi-ai-coach.preferences.v1` | localStorage |
| Progression / historique | `tai-chi-ai-coach.progress.v1` | localStorage |
| Reprise pratique | `tai-chi-ai-coach.practice-resume.v1` | localStorage |
| Curriculum / Movement / BeginnerPath / respiration | TS embarqué (`web/src/data/**`, `domain/breathing`) | Bundle JS |

**Règle :** jamais de données utilisateur dans Cache Storage.

## 4.4 Médias

| Famille | État | Poids utile |
| --- | --- | --- |
| Hero viewport (30 WebP light+dark × 3 viewports) | Présents | ≈ **5,7 Mo** |
| Hero masters (10) | Sources — **ne pas précacher** | ≈ 3,2 Mo |
| Mouvements F-007 (3 WebP) | Présents | ≈ **107 Ko** |
| Icônes PWA | Présentes | ≈ 0,9 Mo (5 PNG) |
| Vidéos MP4 | **0 fichier** — MEDIA BLOCKED | — |
| `.next/static` (build local mesuré) | Chunks + assets | ≈ **1,2 Mo** |
| Artefacts server HTML/RSC (build) | ≈ 1,5 Mo disque build | À filtrer pour precache navigable |

## 4.5 Familles Hero réellement utilisées

| Famille | Surfaces |
| --- | --- |
| morning | Accueil, `/pratique/*`, `/parcours/debutant` |
| bamboo | Bibliothèque, séances, mouvements |
| mist | `/respiration`, `/progression`, résumé pratique |
| mountain | `/profil`, `/conseils-de-securite`, `/decouverte` |
| dojo | `/onboarding` |

Les **5 familles** sont utiles au cœur — mais **tous les viewports × thèmes** ne doivent pas être précachés aveuglément (budget).

---

# 5. Matrice routes offline

Légende : **REQUIRED** = utilisable offline après 1ère visite online / install ; **OPTIONAL** = confort ; **ONLINE ONLY** = réseau requis.

| Surface | Classe | Justification |
| --- | --- | --- |
| App Shell (layout, nav, header, ThemeToggle) | **OFFLINE REQUIRED** | `18` §6 shell ; D-071 |
| `/` Accueil | **OFFLINE REQUIRED** | Point d’entrée pratique / reprise |
| `/bibliotheque` | **OFFLINE REQUIRED** | Accès séances |
| `/bibliotheque/[sessionId]` (3 templates) | **OFFLINE REQUIRED** | Curriculum local ; entrée pratique |
| `/bibliotheque/mouvements` | **OFFLINE REQUIRED** | F-005/F-007 |
| `/bibliotheque/mouvements/[movementId]` (3) | **OFFLINE REQUIRED** | Fiches + image clé |
| `/parcours/debutant` | **OFFLINE REQUIRED** | F-003 |
| `/respiration` | **OFFLINE REQUIRED** | F-014 cœur quotidien |
| `/progression` | **OFFLINE REQUIRED** | F-009/F-010 ; données LS |
| `/profil` | **OFFLINE REQUIRED** | F-028 prefs LS ; Build ID |
| `/conseils-de-securite` | **OFFLINE REQUIRED** | F-016/F-031 prudence |
| `/decouverte` | **OFFLINE REQUIRED** | F-001/F-002 post-onboarding |
| `/pratique/[sessionId]` | **OFFLINE REQUIRED** | Pratique + reprise F-032 ; update différée inchangée |
| `/onboarding` | **OFFLINE REQUIRED** | F-033 local ; déjà Offline D-142 |
| `/sessions` | **OFFLINE OPTIONAL** | Redondant bibliothèque ; utile si bookmark |
| Lecteur vidéo pédagogique | **ONLINE ONLY** (MVP) | 0 MP4 ; pas de precache ; fallback calme existant |
| Auth / sync / IA / export compte | **ONLINE ONLY** | Hors MVP |
| `/sw.js` | Network / no-store | Toujours frais pour byte-diff update |
| Manifest | Stale-while-revalidate | Install / update metadata |

---

# 6. Stratégies de cache (par famille)

| Famille | Stratégie | Motif |
| --- | --- | --- |
| App shell + navigations document des routes cœur | **Cache First** après precache ; fallback document si miss | Démarrage / reload offline |
| `/_next/static/*` (JS/CSS/chunks hashés) | **Cache First** | Immutables par build |
| RSC / flight / data Next (si interceptés) | **Network First** + cache lecture ; fallback cache | Fraîcheur online, survie offline |
| Hero WebP (périmètre PO-A) | **Cache First** (precache et/ou runtime) | Atmosphère ; pas bloquant pédagogique si miss |
| Images mouvements (3 WebP) | **Cache First** + **precache cœur** | Petits, pédagogiquement importants |
| Vidéos MP4 | **Network Only** | MVP-012 ; pas de cache cœur |
| `manifest.webmanifest` | **Stale While Revalidate** | Métadonnées install |
| `/sw.js` | **Network Only** (headers no-store déjà) | Détection update |
| API / futures sync | **Network Only** | Hors MVP ; pas de cache sensible |
| localStorage | **Hors Cache Storage** | Indépendant |

Pas de stratégie universelle (D-135).

---

# 7. Version du cache (Build ID)

| Règle | Détail |
| --- | --- |
| Nom de cache precache | `tcac-precache-${APP_BUILD_ID}` |
| Nom de cache runtime (images, etc.) | `tcac-runtime-${APP_BUILD_ID}` (ou équivalent documenté) |
| Source de vérité | `NEXT_PUBLIC_APP_BUILD_ID` déjà injecté dans SW |
| Interdit | `cache-v1`, bump manuel |
| Invalidation | À l’**activate** de la version B : supprimer les caches dont le suffixe ≠ `APP_BUILD_ID` courant |
| Waiting | Tant que SW B est `waiting`, **ne pas** purger les caches A (utilisés par le contrôleur A) |

---

# 8. Lifecycle App Update ↔ Cache (cible)

```text
Version A active
  → contrôleur A
  → caches A (tcac-*-A)

Build B déployé (byte-diff /sw.js via nouvel APP_BUILD_ID)
  → SW B install (precache B dans caches B — sans toucher A)
  → SW B waiting
  → utilisateur continue sur A + caches A
  → modale update (hors /pratique/*)

Utilisateur « Mettre à jour »
  → SKIP_WAITING
  → activate B
  → purge caches obsolètes (≠ B)
  → clients.claim()
  → controllerchange
  → reload unique
  → application B + caches B
```

Contraintes :

1. Precache B pendant `install` de B **ne doit pas** casser A.
2. Purge **uniquement** dans `activate` de B (après SKIP_WAITING).
3. Socle update (poll, focus, visibility, Gate pratique) **inchangé** fonctionnellement.
4. Pendant `/pratique/*` : pas de modale ; pas de purge destructive ; snapshot reprise LS intact.

---

# 9. Navigation App Router offline

## 9.1 Réalité build

- Routes cœur majoritairement **statiques** / SSG (`generateStaticParams` pour sessions & mouvements).
- `/pratique/[sessionId]` dynamique mais templates locaux connus (3 IDs).
- Client navigation Next consomme chunks `/_next/static` + payloads RSC.
- Un HTML seul **ne suffit pas** : il faut chunks + (idéalement) documents precache des URLs cœur.

## 9.2 Solution MVP recommandée (sans usine)

1. **Manifest de precache généré au build** (liste d’URLs cœur + `/_next/static/*` essentiels + assets choisis) injecté dans `sw-source` / build step — **même** SW.
2. `install` : `cache.addAll` (ou équivalent borné) du manifest → cache `tcac-precache-${APP_BUILD_ID}`.
3. `fetch` :
   - navigations (`request.mode === "navigate"`) → cache match URL / fallback `/hors-ligne` (si PO-B) ;
   - static hashed → Cache First ;
   - reste images cœur → Cache First runtime.
4. Pas de Workbox obligatoire si le manifest custom reste simple ; Serwist/Workbox **optionnel** seulement s’il s’intègre **dans** le SW unique sans second worker.

## 9.3 Cas couverts

| Cas | Comportement cible |
| --- | --- |
| Soft nav offline (déjà visitée / precache) | OK via cache |
| Reload direct URL cœur offline | OK si document + chunks precache |
| URL hors périmètre / miss | Fallback calme `/hors-ligne` (PO-B) |
| Cold start offline **sans** jamais d’install online | Non garanti (`18` §6 note *) |

---

# 10. Fallback offline

| Option | Recommandation |
| --- | --- |
| Page `/hors-ligne` | **Recommandée** (PO-B) — message calme, lien Accueil / Réessayer, pas de jargon technique |
| `offline.html` isolé | Acceptable techniquement ; préférer route App Router pour cohérence DS |
| Aucun fallback | Déconseillé (écran navigateur brut) |

**Livré** : `web/src/app/hors-ligne/page.tsx` + `OfflineFallbackView` (Hero `mist` existant).

---

# 11. Assets cœur — stratégies recommandées

## 11.1 Toujours precache (cœur)

- Documents / entrées des routes **OFFLINE REQUIRED** (liste §5)
- Chunks `/_next/static` nécessaires au shell + pages cœur
- 3 WebP mouvements (`public/curriculum/movements/*-key.webp`) ≈ 107 Ko
- Icônes manifest essentielles (192 + 512, any + maskable) — ou les 4 PNG maskable/any
- Fallback `/hors-ligne` si retenu

## 11.2 Hero strategy (PO-A — **A2 validé**)

Precache **mobile** × 5 familles × light+dark (10 fichiers) + runtime Cache First tablet/desktop.

**Ne jamais** précacher les masters ni Desktop/Tablet au precache.

## 11.3 Mouvements

**Inclure au precache cœur** — 3 WebP, ~107 Ko, pédagogiquement critiques (F-007). PNG sources companion : **exclus**.

## 11.4 Vidéos (MVP-012)

| Règle | Valeur |
| --- | --- |
| Precache obligatoire | **Non** |
| Stratégie MVP | **Network Only** |
| Runtime cache ultérieur | Possible plus tard si docs + quota le justifient — **hors** cache cœur MVP-017 |
| Player offline | État absent / message calme déjà livré |

---

# 12. Budget cache MVP (proposition)

| Poste | Ordre de grandeur |
| --- | --- |
| JS/CSS `/_next/static` | ≈ 1–2 Mo |
| Documents / RSC navigables cœur | ≈ 0,5–1,5 Mo |
| Mouvements WebP | ≈ 0,1 Mo |
| Icônes PWA | ≈ 0,4–0,9 Mo |
| Hero (selon PO-A) | 0 / ≈ 1,4 / ≈ 5,7 Mo |
| **Budget cible** | **≤ 8 Mo** (PO-C) |
| **Plafond dur** | **≤ 12 Mo** (PO-C) |
| **Mesure build (assets+chunks)** | Public cœur ≈ 2,26 Mo + `/_next/static` ≈ 1,14 Mo ≈ **3,4 Mo** |
| **Mesure Cache Storage (PO)** | Precache **79** entrées ≈ **4,16 Mo** (conforme ≤ 8 Mo) |

Quota plein : ne pas corrompre localStorage ; échec precache → SW B non activé (A intact) ; online reste utilisable ; pas de boucle reload.

---

# 13. Privacy / RGPD

- Cache Storage = **uniquement** assets applicatifs / documents publics.
- **Interdit** : progress, resume, prefs, onboarding dans Cache Storage.
- Pas de flush analytics contraire au consentement.
- Clear site data utilisateur : comportement navigateur standard ; pas de sync cloud MVP.

---

# 14. iOS / Safari

| Sujet | Constat / règle MVP |
| --- | --- |
| Add to Home Screen | Manifest + apple-touch présents ; tester standalone |
| Service Worker | Supporté en Secure Context ; cycle de vie plus strict |
| Stockage / eviction | **Aucune** persistance absolue garantie — ne pas promettre |
| Offline | Fonctionne si caches présents ; peut être purgé sous pression |
| Vidéos | Online only ; comportements inline iOS hors scope cache |
| Update | Valider aussi en standalone (docs/26 §7.5) |
| LAN HTTP | Pas de Secure Context → pas de SW |

---

# 15. Erreurs / corruption

| Situation | Comportement cible |
| --- | --- |
| Cache absent | Online normal ; offline → fallback `/hors-ligne` ou erreur navigateur maîtrisée |
| Cache partiel | Servir ce qui est dispo ; ne pas boucler ; ne pas purge agressive |
| Asset manquant | Image : placeholder / sans Hero ; doc : fallback |
| Quota dépassé | Capturer échec `addAll` ; logger diag ; cœur minimal prioritaire |
| SW update échoue | Rester sur A ; pas de reload forcé |
| Offline pendant install SW B | Install incomplet → pas d’activate B ; A intact |
| Ancien cache résiduel | Purge à l’activate B uniquement |
| `/pratique` + waiting B | Modale différée ; caches A intacts ; LS reprise intact |

---

# 16. Développement local / prod (ne pas casser `docs/26`)

| Contexte | Règle |
| --- | --- |
| `next dev` | HMR ≠ nouvelle version SW ; Build ID figé par process |
| `build` + `start` | Scénario validation update + cache nominal |
| `localhost` / `127.0.0.1` | Secure Context → SW OK |
| HTTP LAN | SW **non** garanti |
| HTTPS / prod | Comportement nominal |
| Diagnostic | Build ID Profil = SW ; unregister exceptionnel documenté dans `26` |

---

# 17. Décisions PO

| ID | Décision | Statut |
| --- | --- | --- |
| **PO-A** | Hero A2 (10 Mobile Light/Dark) | **Validée + livrée** |
| **PO-B** | `/hors-ligne` | **Validée + livrée** |
| **PO-C** | ≤ 8 Mo / dur 12 Mo | **Validée** — mesure ≈ 3,4 Mo |
| **PO-D** | Vidéos Network Only | **Validée + livrée** |

---

# 18. Tests à prévoir (phase code)

## 18.1 Cache

- Installation SW + création `tcac-precache-${APP_BUILD_ID}`
- Assets attendus présents (shell, mouvements, hero selon PO-A)
- **Pas** de vidéo dans le cache
- **Pas** de clé localStorage / données user dans Cache Storage

## 18.2 Fetch

- Online : réseau / revalidate selon famille
- Offline : cache hit surfaces REQUIRED
- Cache miss : fallback document / dégradation calme
- Navigation soft + reload direct

## 18.3 Update A→B

- Caches A utilisables tant que B `waiting`
- SKIP_WAITING → activate B → purge A → claim → **un** reload
- Build ID Profil = B

## 18.4 Practice

- Update différée sur `/pratique/*`
- Snapshot `practice-resume` conservé
- Pratique offline si session precache

## 18.5 Erreurs

- Quota / `addAll` partial
- Asset absent
- Offline cold start sans precache

## 18.6 Manuel

- Chrome / Edge
- Safari iPhone (+ standalone)
- Light / Dark
- Mobile viewport
- Secure Context vs LAN HTTP (non-régression doc)

---

# 19. Critères d’acceptation (livraison future)

1. Un seul SW `/sw.js` étendu — socle update non régressé.
2. Cache cœur versionné uniquement par `APP_BUILD_ID`.
3. Surfaces OFFLINE REQUIRED utilisables offline après install online.
4. localStorage pratique / prefs / onboarding intact et hors Cache Storage.
5. 3 WebP mouvements en precache ; 0 MP4 precache.
6. Hero conforme PO-A ; budget conforme PO-C.
7. Lifecycle waiting : caches A préservés jusqu’à activate B.
8. `/pratique/*` : pas d’interruption update ; pas de purge destructive.
9. Fallback conforme PO-B.
10. Tests §18 + Build / tsc / ESLint / Vitest verts.
11. Runtime `07` + docs sync ; MVP-012 non fermé ; MVP-018 non ouvert.
12. `docs/26` non contredit (dev/prod/Secure Context).

---

# 20. Definition of Done

- [x] PO-A…D enregistrées
- [x] Gate **READY FOR CODE** puis implémentation
- [x] SW unique étendu (precache + fetch + purge activate)
- [x] App Update + Gate pratique préservés
- [x] Matrice routes livrée
- [x] Privacy cache respectée
- [x] Tests automatiques (Vitest) + validations Build/tsc/ESLint
- [x] Tests manuels Chrome/Edge (production locale) — validation PO
- [x] iPhone/Safari — **reporté MVP-018** (manuel ; non bloquant)
- [x] Runtime synchronisé (Offline Status — Livré)
- [x] MVP-012 inchangé (MEDIA BLOCKED)
- [x] MVP-018 non ouvert
- [x] Validation PO / clôture

---

# 21. Gates de readiness

| Sujet | Gate | Justification |
| --- | --- | --- |
| Socle update | OK | Préservé (`26`) |
| MVP-012 médias | Non bloquant | Network Only |
| PO-A…D | **Validées** | Implémentées |
| Implémentation | **Fermé** | Validation PO |

### Gate global MVP-017

**Fermé** (validation PO — CH-021)

**DEPENDENCY BLOCKED :** non.

---

# 22. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (9 août 2026) |
| Audit docs / code | **Fait** |
| Décisions PO | **Validées** (PO-A…D) |
| Gate readiness | **READY** (implémenté) |
| Implémentation code | **Livrée** — validée PO |
| Clôture | **Fermé** — CH-021 |

---

# 23. Risques

| Risque | Mitigation |
| --- | --- |
| Precache Hero trop lourd | PO-A2 + precache PO ≈ 4,16 Mo |
| Navigation RSC offline fragile | Precache documents + chunks ; fallback `/hors-ligne` ; soft nav validée |
| Purge prématurée caches A | Purge uniquement `activate` post-SKIP_WAITING — validé A→B |
| Régression update flow | Tests socle + lifecycle A→B validé PO |
| Promesse offline iOS absolue | Messaging prudent ; validation iPhone reportée MVP-018 |

---

## 24. Implémentation (référence code)

| Pièce | Emplacement |
| --- | --- |
| Listes cœur | `web/src/lib/pwa/precache-core.ts` |
| SW étendu | `web/src/lib/pwa/sw-source.ts` |
| Budget | `web/src/lib/pwa/precache-budget.ts` |
| Manifeste chunks post-build | `web/scripts/generate-precache-manifest.mjs` → `public/tcac-precache-manifest.json` |
| Fallback | `web/src/app/hors-ligne/page.tsx` |
| Build | `web/scripts/run-production-build.mjs` |

---

*Fin du ticket MVP-017 (Fermé — Offline Livré ; iPhone/Safari → MVP-018 ; MVP-012 MEDIA BLOCKED ; MVP-018 non ouvert).*
