# MVP-012_PEDAGOGICAL_VIDEOS

> Tai-Chi AI Coach
> Version : 1.0
> Statut : **Livré (code)** / **MEDIA BLOCKED** / attente média (ouvert — non fermé — 8 août 2026 ; infra F-006 + mapping F-013 ; commit `0e19f1b` ; **0** MP4 ; aucune production vidéo)
> Phase : MVP
> Emplacement : `docs/tickets/MVP-012_PEDAGOGICAL_VIDEOS.md`
> Dépend de :
> - MVP-011_MOVEMENTS_LIBRARY (Fermé — `e8eebff` — F-004 / F-005 / F-007)
> - MVP-003_CURRICULUM_LIBRARY (Fermé — séances F-013 structurelles)
> - MVP-004_ASSET_PIPELINE (Fermé — emplacement `public/video/`)
> - `docs/05_FEATURES.md` (F-006, F-013)
> - `docs/08_TAI_CHI_CURRICULUM.md` §27
> - `docs/14_DATA_MODEL.md` (MediaAsset / ContentMediaLink)
> - `docs/25_DESIGN_FREEZE.md`
> - `docs/26_PWA_APP_UPDATE.md` (socle update ; hors cache vidéo / MVP-017)

---

# 1. Objectif

Cadrer puis livrer (développement **ultérieur**, hors de cette ouverture) :

- **F-006** — Vidéo pédagogique (démonstration associée à un mouvement / séance)
- **Enrichissement F-013** — intégration séances ↔ mouvements (et médias) **sans** livrer F-013 « complet » (reprise / historique → MVP-015)

But produit : permettre à l’utilisateur de **voir** un geste pour l’imiter prudemment, en complément du texte F-005 et de l’image F-007, sans analyse caméra et sans dépendance runtime à Virtual Humans Studio.

**Phase actuelle : code livré (infra).** Player + `mediaKeyVideo` + mapping séances ; **aucune** vidéo générée ; aucun provider IA ; aucun appel Virtual Humans.

---

# 2. Documents de référence

- `docs/05_FEATURES.md` (F-006, F-004, F-005, F-007, F-013)
- `docs/07_CONTENT_STRATEGY.md`
- `docs/08_TAI_CHI_CURRICULUM.md` §27
- `docs/11_VIRTUAL_HUMANS.md`
- `docs/12_UX_UI.md` / `12A` / `12B`
- `docs/13_TECH_ARCHITECTURE.md`
- `docs/14_DATA_MODEL.md`
- `docs/15_API_ARCHITECTURE.md`
- `docs/18_PWA_OFFLINE.md`
- `docs/20_TEST_STRATEGY.md`
- `docs/22_ROADMAP.md`
- `docs/24_DEVELOPER_HANDOVER.md`
- `docs/tickets/MVP-011_MOVEMENTS_LIBRARY.md`
- `web/public/video/README.md`
- `web/public/characters/mei/README.md`
- Runtime : `00`, `02`, `03`, `11`

---

# 3. Définition officielle F-006

| Champ | Valeur (`05` §6.6) |
| --- | --- |
| Identifiant | F-006 |
| Nom | Vidéo pédagogique |
| Priorité | P0 |
| Version | MVP |
| Description | Vidéo de démonstration associée à un mouvement ou une séance. **Sans analyse caméra** côté utilisateur. |
| Objectif utilisateur | Voir le mouvement pour l’imiter prudemment. |
| Dépendances | **F-005** (texte) |
| Règles métier | Revoir / pause (contrôle de rythme) ; pas de correction automatique. |
| Limites | Ne constitue **pas** une analyse de posture. |
| Acceptation | Visionner une démo associée ; pouvoir y revenir. |
| Relation Mei | Peut être enrichie par une démo Mei **sans dépendance** (`05` §16). |

## 3.1 Contenu obligatoire MVP (corpus actuel)

Pour chaque mouvement **published** du corpus MV-001…003, lorsque le média est livré :

1. **1** démonstration vidéo pédagogique complète (corps entier, rythme lent, caméra stable).
2. Association Movement ↔ média vidéo (locator logique).
3. Visionnage sur la **fiche mouvement** avec contrôles (play / pause / revenir).
4. **Fallback** si vidéo absente : fiche reste utilisable (F-005 + F-007).
5. Poster (image) — prioritairement dérivé de / aligné sur F-007.

## 3.2 Contenu optionnel MVP

- Angle caméra supplémentaire (profil / 3/4) **uniquement** si justifié pédagogiquement (voir §9).
- Intégration légère dans un `SessionStep` « corps » (enrichissement F-013).
- Sous-titres / transcript textuel (nice-to-have ; F-005 reste l’alternative textuelle).

## 3.3 Contenu V1 / V2 (hors MVP-012)

| Version | Contenu |
| --- | --- |
| V1 | Packs offline riches (F-026) ; sync ; pas de génération à la demande |
| V2 | Professeurs virtuels / Mei interactive (F-023) ; CV (F-021/F-022) |

## 3.4 Relation F-005 / F-007

| Feature | Rôle | Relation vidéo |
| --- | --- | --- |
| F-005 | Explication textuelle | **Toujours** accessible ; alternative textuelle principale |
| F-007 | Image de référence clé | **Toujours** disponible ; poster / pause visuelle ; ne remplace pas la dynamique |
| F-006 | Démonstration dynamique | Enrichit ; **ne remplace ni** le texte ni l’image |

## 3.5 Comportement sans vidéo

- Aucune erreur bloquante.
- UI calme : zone vidéo absente ou empty state discret.
- Texte + image restent complets.
- Séances F-013 restent praticables sans vidéo.

## 3.6 Contraintes UX

- Attention minimale pendant la pratique (`12A`).
- Contrôles peu nombreux ; pas de carrousel auto ; pas de binge vidéo (`07`).
- Hero / Design System figés ; pas de nouvelle direction graphique.
- Pas d’`alert` / `confirm` natifs.

## 3.7 Offline

- **MVP-017 non ouvert** — pas de cache vidéo dans MVP-012.
- Online : fetch / lecture depuis assets statiques (ou URL future).
- Futur Offline : médias essentiels Cache First après 1er fetch (`18`) — hors scope ici.
- Documenter le poids potentiel ; ne pas bloquer le player online.

## 3.8 Accessibilité

- Contrôles clavier / focus visibles.
- **Pas d’autoplay avec son** (autoplay muet éventuel non prioritaire ; défaut = contrôles utilisateur).
- `playsInline` (iOS).
- Respect `prefers-reduced-motion` : ne pas forcer lecture auto ; proposer lecture manuelle.
- Alternative textuelle = F-005 (obligatoire) ; transcript optionnel MVP.
- Poster avec `alt` pertinent (non médical).

## 3.9 Formats média attendus (cible MVP)

| Élément | Cible |
| --- | --- |
| Conteneur | **MP4** (H.264 + AAC) — Safari / iOS / PWA |
| Option progressive | WebM (VP9) en complément **si** double export sans complexité (non obligatoire MVP) |
| Emplacement | `web/public/video/` — naming `movement-<slug>-demo.mp4` (convention README) |
| Poster | WebP F-007 existant ou `movement-<slug>-poster.webp` |
| Orientation | Portrait ou paysage **lisant le plein pied** ; cohérence avec F-007 (portrait 3:5) **préférée** pour continuité UI |
| Durée cible | Courte — un geste (`07`) ; ordre de grandeur **15–45 s** selon le mouvement (à valider production) |
| Poids | Objectif raisonnable mobile (cible indicative **≤ ~5–8 Mo** / clip après encodage ; à figer à la production) |

**Aucun fichier à convertir pendant cette ouverture.**

---

# 4. Règle pédagogique critique (normative)

> **Aucune vidéo générée ou transformée par IA ne peut devenir une référence pédagogique uniquement parce qu’elle est visuellement réussie.**

Une vidéo F-006 **publiable** doit suivre :

```text
SOURCE DE MOUVEMENT FIABLE
  → RÉFÉRENCE APPROUVÉE
  → TRANSFERT / PRODUCTION AVEC MEI
  → CONTRÔLE DE FIDÉLITÉ
  → VALIDATION
  → PUBLICATION
```

**La fidélité du mouvement est prioritaire** sur :

- esthétique ;
- fluidité cinématographique ;
- créativité du modèle ;
- qualité marketing.

Un générateur vidéo **ne doit pas inventer librement** un geste de Tai Chi ensuite utilisé comme référence d’apprentissage.

---

# 5. Inventaire références dynamiques (état réel dépôt)

| Mouvement | Texte F-005 | Image F-007 | Séquence positions | Vidéo humaine ref. | Mocap | Pose / squelette | Ref. externe approuvée | Ref. dynamique |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MV-001 | Oui (`08` §27.2) | Oui (WebP) | Texte ordonné seulement | **Non** | **Non** | **Non** | **Non** dans le dépôt | **Absente** |
| MV-002 | Oui (`08` §27.3) | Oui | Texte ordonné seulement | **Non** | **Non** | **Non** | **Non** | **Absente** |
| MV-003 | Oui (`08` §27.4) | Oui | Texte ordonné seulement | **Non** | **Non** | **Non** | **Non** | **Absente** |

Référence personnage / tenue (hors F-006) :

- `web/public/characters/mei/tai-chi/mei-tai-chi-reference-front.webp` (+ PNG source)
- Documentée dans `web/public/characters/mei/README.md` — **pas** une référence dynamique de mouvement.

---

# 6. Virtual Humans Studio — pipeline de production (externe)

## 6.1 Principes

- Pipeline de **production** externe, **pas** dépendance runtime.
- Tai-Chi consomme des médias **préfabriqués validés**.
- Tai-Chi fonctionne si VHS est indisponible.
- **Aucune** génération vidéo à la demande dans le MVP.

## 6.2 Contrat minimal (conceptuel)

```text
Movement (MV-00x)
  → production brief (fidélité + angles)
  → reference motion (source fiable approuvée)
  → character Mei + tenue Tai Chi officielle
  → generation / transfer
  → QC fidélité (checklist §4)
  → approved media
  → export MP4 (+ poster)
  → dépôt Tai-Chi : public/video/ + MAJ data Movement
```

## 6.3 Mei (F-006)

- Même identité que la référence tenue.
- Tenue Tai Chi officielle (ivoire/crème).
- Cohérence corporelle ; **mouvement prioritaire** ; environnement non prioritaire (fond neutre / simple).

## 6.4 Futur contrat prompt — `TAI_CHI_MOTION_VIDEO_V1` (documentaire uniquement)

**Ne pas implémenter** dans Virtual Humans Studio ni dans Tai-Chi AI Coach pour MVP-012.

Un futur template spécialisé pourra s’appeler `TAI_CHI_MOTION_VIDEO_V1` et devra séparer :

| Bloc | Rôle |
| --- | --- |
| `MovementSpec` | Identité pédagogique (MV-00x, étapes, fidélité) |
| `MotionReference` | Source dynamique fiable / approuvée |
| `GenerationConstraints` | Limites de génération (pas d’invention gestuelle) |
| `CameraConstraints` | Angle, plein pied, stabilité |
| `CharacterConstraints` | Mei + tenue officielle |
| `QCRequirements` | Checklist fidélité avant export |

Règle normative : **motion fidelity > visual creativity**.
La validation humaine reste **obligatoire** avant publication pédagogique.
Aucune dépendance runtime Tai-Chi ↔ Virtual Humans Studio.

---

# 7. Stratégie vidéo MVP (corpus 3 mouvements)

**Option minimale retenue :** **1 vidéo pédagogique validée par mouvement** (3 clips).

Par défaut pour chaque clip :

- démonstration complète du geste ;
- rythme lent ;
- corps entier visible ;
- caméra stable ;
- mouvement lisible ;
- aucun montage distrayant ;
- aucun texte / flèche / annotation incrustés (aligné esprit F-007 / `12B`).

**Angles supplémentaires :**

| Mouvement | Angle MVP recommandé | Angle supplémentaire ? |
| --- | --- | --- |
| MV-001 | Face (posture neutre) | Non — face suffit |
| MV-002 | Face ou 3/4 léger (transfert lisible) | Non — un seul angle ; profil seulement si QC face insuffisant |
| MV-003 | Face presque frontale (comme F-007 validé) | Non — un seul angle ; profil pas requis MVP |

Ne pas multiplier les angles sans justification pédagogique.

---

# 8. Fiches de besoin vidéo

## 8.1 MV-001 — Posture de départ

| Champ | Besoin |
| --- | --- |
| Objectif pédagogique | Montrer une position stable et détendue avant de bouger |
| Mouvement | Posture immobile + micro-ajustements de relâchement |
| Position initiale | Installation confortable |
| Déroulement | Répartir poids → relâcher épaules/bras → genoux souples → observer |
| Position finale | Posture stable maintenue |
| Durée cible | ~20–30 s (aligné rythme apprentissage `08`) |
| Vitesse | Immobile / calme |
| Angle | Face |
| Cadrage | Plein pied, marge généreuse |
| Fidélité | Genoux non verrouillés ; épaules basses ; pas de posture trop basse |
| Points critiques | Pieds, genoux, bassin, épaules, regard |
| Ref. dynamique | **Non** |
| Readiness production | **BLOCKED** — manque source de mouvement fiable |

## 8.2 MV-002 — Transfert de poids latéral

| Champ | Besoin |
| --- | --- |
| Objectif pédagogique | Sentir le passage progressif du poids |
| Mouvement | Transfert lent jambe A ↔ centre ↔ jambe B |
| Position initiale | Posture stable proche MV-001, pieds confortables |
| Déroulement | Centre → un côté (sans instabilité) → centre → autre côté |
| Position finale | Retour au centre stable |
| Durée cible | ~25–40 s |
| Vitesse | Lente, régulière, sans à-coup |
| Angle | Face (ou 3/4 léger si meilleur pour bassin) |
| Cadrage | Plein pied ; bassin et pieds lisibles |
| Fidélité | Pas de bascule brutale ; pieds au sol ; amplitude contrôlée |
| Points critiques | Pieds, genoux, bassin, verticalité du buste |
| Ref. dynamique | **Non** |
| Readiness production | **BLOCKED** |

## 8.3 MV-003 — Pas avant contrôlé

| Champ | Besoin |
| --- | --- |
| Objectif pédagogique | Déplacer un pied avec contrôle et stabilité |
| Mouvement | Transfert → lever pied → petit pas → pose talon → stabiliser → transfert avant → retour |
| Position initiale | Stable, espace libre devant |
| Déroulement | 7 étapes `08` §27.4 |
| Position finale | Retour position de départ |
| Durée cible | ~30–45 s |
| Vitesse | Lente ; courtes pauses possibles |
| Angle | Face presque frontale (cohérent F-007 validé) |
| Cadrage | Plein pied ; pied avant / arrière lisibles |
| Fidélité | Petit pas ; pas d’avancée avant transfert ; pas d’accélération pour l’équilibre |
| Points critiques | Appui arrière, talon avant, bassin, bras détendus |
| Ref. dynamique | **Non** |
| Readiness production | **BLOCKED** |

---

# 9. Enrichissement F-013

## 9.1 Signification

Pas une feature séparée. Périmètre ticket = **brancher** mouvements / vidéos dans le flux séances existant, sans livrer F-013 complet (historique, reprise persistante → MVP-015).

## 9.2 État code (après implémentation MVP-012)

- `SessionStep.movementIds?: string[]` — livré.
- Mapping curriculum : Découverte corps → MV-001 ; Initiation corps → MV-001, MV-002 ; Progression liaison → MV-002, MV-003.
- Intégrité : `curriculumReader.validateMovementLinks` + helpers `session-movement-links`.
- UX : liens « Mouvement(s) associé(s) » fiche séance + étape pratique → fiche MV.
- `PracticePlayer` : **pas** de player vidéo inline (texte + liens légers seulement).

## 9.3 Mapping minimal justifié (`08` §27.7)

| Séance | Mapping MVP-012 proposé |
| --- | --- |
| `st-decouverte-premiere-courte` | Optionnel : corps → **MV-001** (rituel prioritaire) |
| `st-initiation-rituel-base` | Corps → **MV-001** puis **MV-002** (MV-003 selon charge) |
| `st-progression-liaison-legere` | Liaison entre **MV-002** / **MV-003** déjà connus — pas de nouveau geste |

## 9.4 Extension modèle minimale

Sur `SessionStep` (données locales) :

```text
movementIds?: string[]  // ex. ["MV-001"] — optionnel
```

UI pratique minimale MVP-012 :

- Sur une étape `corps` liée : lien « Voir le mouvement » → fiche `/bibliotheque/mouvements/[slug]` **et/ou** lecteur vidéo inline si média présent.
- Ne pas transformer PracticePlayer en studio vidéo.
- Ne pas inventer de nouveaux steps hors curriculum.

## 9.5 Frontière MVP-013+

| Dans MVP-012 | Hors MVP-012 |
| --- | --- |
| Liens step → Movement IDs du corpus | Parcours débutant F-003 |
| Lecture vidéo sur fiche + accès depuis séance | Séances complètement réécrites |
| Enrichissement data locale | Sync / génération IA de séances |

---

# 10. Architecture média

## 10.1 Existant

| Couche | État |
| --- | --- |
| `Movement.mediaKeyImage` | Livré (string locator) |
| `Movement.mediaKeyVideo` | Livré (`null` pour MV-001…003) |
| Types TS `MediaAsset` / `ContentMediaLink` | **Absents** (conceptuels `14` seulement) |
| Fichiers `public/video/movements/` | README + convention — **0** MP4 |
| Player | `PedagogicalVideo` — prêt ; fallback sans média |

## 10.2 Extensions réellement nécessaires (MVP)

Sans migration lourde ni Object Storage obligatoire :

```text
Movement
  mediaKeyImage: string | null     // existant F-007
  mediaKeyVideo: string | null     // NOUVEAU — locator MP4 F-006
  // optionnel:
  mediaVideoPoster?: string | null // défaut = mediaKeyImage
```

Alignement futur `14` : conserver la possibilité d’introduire `MediaAsset` + `ContentMediaLink` sans bloquer le MVP (locator string = forme minimale de logical_locator).

**Ne pas** introduire Supabase Storage pour le MVP si les fichiers tiennent sous `public/video/`.

---

# 11. Stockage & lecture MVP

| Décision | Choix |
| --- | --- |
| Stockage | Fichiers statiques `web/public/video/` |
| Accès | Chemins publics `/video/movements/movement-<slug>-demo.mp4` |
| Player | `<video>` natif (+ wrapper accessibilité) ; pas de dépendance lourde requise |
| Attributs | `controls` ; `playsInline` ; `preload="metadata"` ; poster = F-007 |
| Autoplay | **Non** avec son ; pas d’autoplay obligatoire |
| Safari / iOS PWA | MP4 H.264 ; validation manuelle obligatoire |
| Preload agressif | Non (poids) |

---

# 12. UX fiche mouvement

Ordre de lecture retenu :

1. Titre / métadonnées
2. Image F-007 (repère visuel)
3. **Bloc vidéo F-006** — player si `mediaKeyVideo` ; sinon « Démonstration vidéo à venir »
4. Contenu pédagogique F-005 (résumé → Placement → Déroulement → … → Prudence)

Fallback : si pas de vidéo → **pas** de player vide ; message calme (pas une erreur technique).

**Reduced motion :** pas d’autoplay — l’utilisateur contrôle toujours la lecture ; aucun comportement spécial complexe requis.

**Offline :** aucun cache vidéo (MVP-017) ; F-005 + F-007 restent l’expérience principale.

**Safari / iOS (validation manuelle à documenter côté PO) :** MP4 H.264, `playsInline`, `controls`, poster F-007, pas d’autoplay.

---

# 13. Tests prévus (implémentation future)

## Domaine / data

- `mediaKeyVideo` présent / null
- locator MP4 (pas PNG sources)
- liste published inchangée (3 mouvements)

## UI fiche

- player si média
- fallback si absent
- poster
- contrôles
- F-005 + F-007 toujours visibles
- erreur média (onError) → fallback calme

## Enrichissement F-013

- `movementIds` sur steps (si retenu)
- lien vers fiche
- séance sans mapping reste OK

## Régression

- F-004 / F-005 / F-007
- PracticePlayer texte
- PWA App Update (SW) intact
- aucun cache vidéo

## Manuel

- Safari iOS / PWA : lecture, `playsInline`, orientation
- Desktop / Mobile × Light / Dark

---

# 14. Gates

## 14.1 CODE READINESS

| Condition | État |
| --- | --- |
| Corpus F-005 / F-007 livrés | Oui |
| Modèle d’extension documenté | Oui (`mediaKeyVideo`) |
| UX fallback sans vidéo | Oui |
| Architecture stockage MVP | Oui (`public/video`) |
| Mapping F-013 minimal documenté | Oui |

**Décision CODE : READY FOR CODE**

L’application peut être développée avec player + fallback **avant** livraison des MP4 définitifs.

## 14.2 MEDIA PRODUCTION READINESS

| Condition | État |
| --- | --- |
| Source de mouvement fiable (vidéo humaine / mocap / pose) | **Non** — 0/3 |
| Pipeline VHS documenté | Oui (externe) |
| QC fidélité normatif | Oui (§4) |
| Clips MP4 produits | **Non** |

**Décision MEDIA : REFERENCE MOTION BLOCKED**

Production / publication pédagogique des vidéos **bloquée** jusqu’à obtention d’une source de mouvement fiable et approuvée pour chaque MV-00x.

## 14.3 Synthèse gate ticket

| Dimension | État |
| --- | --- |
| CODE READINESS | **READY FOR CODE** |
| MEDIA PRODUCTION READINESS | **REFERENCE MOTION BLOCKED** |

Les deux coexistent : développement UI/data autorisé avec médias absents ; **publication** F-006 « Livré » exige médias validés.

---

# 15. Périmètre / hors périmètre

## Dans MVP-012

- Player vidéo + fallback
- `mediaKeyVideo` (+ poster)
- Intégration fiche mouvement
- Enrichissement data SessionStep → Movement (minimal)
- Accès depuis pratique (lien / lecture légère)
- Docs / tests associés

## Hors périmètre

- Génération IA / appels VHS runtime
- CV / caméra (F-021/F-022)
- Mei interactive (F-023)
- Cache offline / MVP-017
- Packs F-026
- Parcours F-003 (MVP-013)
- F-013 complet (MVP-015)
- Object Storage / Supabase médias (sauf décision ultérieure)
- Multi-angles systématiques
- Invention de nouveaux mouvements

---

# 16. Definition of Done

- [x] Infra F-006 : player + `mediaKeyVideo` + fallback
- [x] Pause / reprise lecture (controls natifs ; pas d’autoplay)
- [x] Fallback sans vidéo (pas d’erreur bloquante)
- [x] F-005 + F-007 toujours présents
- [x] Enrichissement F-013 minimal (`movementIds` + liens)
- [x] Statut « player prêt / médias absents » documenté (**0** MP4)
- [ ] MP4 H.264 validés pour MV-001…003 (MEDIA BLOCKED)
- [ ] QC fidélité passé avant publication média
- [x] Build / tsc / ESLint / Vitest (à confirmer en CI locale)
- [ ] Validation Safari iOS manuelle (checklist PO)
- [x] Runtime synchronisé ; MVP-013 non ouvert
- [x] Aucune dépendance runtime VHS
- [ ] Validation PO + clôture ticket

---

# 17. État d’avancement

| Étape | État |
| --- | --- |
| Ticket créé / ouvert | **Fait** (8 août 2026) |
| Audit contenu / code | **Fait** |
| Pipeline production documenté | **Fait** |
| Sources de mouvement fiables | **Absentes** — MEDIA BLOCKED |
| Implémentation code | **Livré (code)** — commit `0e19f1b` ; attente média |
| Production vidéos | **Interdite** tant que référence dynamique absente |
| Clôture | **Non** — ticket reste ouvert |

---

*Fin du ticket MVP-012 (Livré code / MEDIA REFERENCE MOTION BLOCKED / attente média — non fermé).*
