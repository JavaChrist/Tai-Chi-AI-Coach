# Changelog

## Objectif

Tracer les modifications importantes du projet.

## Statut

En cours de tenue — non validé comme document de conception figé.

Ce document ne doit pas encore être considéré comme validé.

## Entrées

### 4 août 2026

- Création de l’architecture documentaire initiale du projet.
- Renommage du dossier racine de `TaiChi-AI-Coach` en `Tai-Chi-AI-Coach`.
- Rédaction intégrale de `docs/00_MASTER_PLAN.md`.
- Rédaction complète de `docs/01_VISION.md`.
- Clarification de la mission et de la proposition de valeur.
- Positionnement prudent de l’IA, de la caméra et des professeurs virtuels.
- Définition des limites du produit.
- Ajout des décisions structurantes D-006 à D-013 dans `DECISIONS.md`.
- Rédaction intégrale de `docs/02_PRODUCT_SCOPE.md`.
- Découpage officiel des versions (Pré-MVP, MVP, V1, V2, V3, Backlog, Hors périmètre).
- Création du catalogue fonctionnel.
- Numérotation officielle des fonctionnalités (`F-xxx` / `HP-xxx`).
- Ajout des décisions structurantes D-014 à D-019 dans `DECISIONS.md`.
- Création du standard documentaire officiel (`docs/99_DOCUMENTATION_STANDARD.md`).
- Ajout de la décision D-020 dans `DECISIONS.md`.
- Création du standard officiel de documentation de développement (`docs/98_DEVELOPMENT_DOCUMENTATION_STANDARD.md`).
- Ajout de la décision D-021 dans `DECISIONS.md`.
- Normalisation de `docs/00_MASTER_PLAN.md`, `docs/01_VISION.md` et `docs/02_PRODUCT_SCOPE.md` selon `docs/99_DOCUMENTATION_STANDARD.md`.
- Passage de ces documents à la version documentaire `1.1` avec statut `VALIDÉ`.
- Intégration officielle des standards `98` et `99` dans le Master Plan.
- Inscription de la création différée de `docs/runtime/` (D-022).
- Aucune modification du périmètre produit.
- Rédaction complète de `docs/03_PERSONAS.md`.
- Création des identifiants `P-001` à `P-005`.
- Création des anti-personas `AP-001` et `AP-002`.
- Définition des trois cœurs de cible.
- Intégration de Mei comme hypothèse de guide visuelle.
- Ajout des décisions D-023 à D-026 dans `DECISIONS.md`.
- Aucune modification du Product Scope.
- Rédaction complète de `docs/04_USER_JOURNEYS.md`.
- Définition des parcours P-001 à P-005 et des parcours refusés AP-001 / AP-002.
- Définition des moments clés, du rôle de Mei dans les parcours, des principes de notifications et de fidélisation.
- Ajout des décisions D-027 à D-031 dans `DECISIONS.md`.
- Aucune modification du catalogue fonctionnel.
- Rédaction complète de `docs/05_FEATURES.md` (spécification fonctionnelle officielle).
- Description des 41 fonctionnalités `F-001` à `F-041` avec fiches, matrices et critères d’acceptation.
- Ajout des décisions D-032 à D-034 dans `DECISIONS.md`.
- Aucun ajout, suppression ni déplacement de version de fonctionnalité.
- Rédaction complète de `docs/06_BUSINESS_MODEL.md`.
- Définition du freemium éthique, du socle gratuit, de la valeur Premium et des limites anti-frustration.
- Ajout des décisions D-035 à D-039 dans `DECISIONS.md`.
- Aucun prix ni nouvelle fonctionnalité introduits.
- Rédaction complète de `docs/07_CONTENT_STRATEGY.md`.
- Définition de la philosophie pédagogique, des niveaux de contenu, du ton éditorial et du rôle de Mei.
- Ajout des décisions D-040 à D-045 dans `DECISIONS.md`.
- Aucun curriculum mouvement par mouvement ni style Tai Chi figé.
- Rédaction complète de `docs/08_TAI_CHI_CURRICULUM.md`.
- Définition des cinq phases du cursus, des structures de leçon et de séance, et de la réutilisabilité multi-styles.
- Ajout des décisions D-046 à D-050 dans `DECISIONS.md`.
- Aucun style Tai Chi ni nombre de mouvements figé.
- Rédaction complète de `docs/09_AI_COACH.md`.
- Définition du comportement, des interdits, du style conversationnel et de la prudence du coach IA.
- Ajout des décisions D-051 à D-055 dans `DECISIONS.md`.
- Aucun choix de modèle, fournisseur ou implémentation IA.
- Rédaction complète de `docs/10_COMPUTER_VISION.md`.
- Définition du rôle, des limites, du consentement et des garde-fous de la vision par ordinateur.
- Ajout des décisions D-056 à D-060 dans `DECISIONS.md`.
- Aucun choix technologique de vision par ordinateur.
- Rédaction complète de `docs/11_VIRTUAL_HUMANS.md`.
- Définition du rôle de Mei, de la présence/effacement, de la complémentarité avec l’IA et des limites éthiques.
- Ajout des décisions D-061 à D-065 dans `DECISIONS.md`.
- Aucun pipeline ni choix technologique de Virtual Humans.
- Rédaction complète de `docs/13_TECH_ARCHITECTURE.md` (EN REVUE).
- Stack cible : Next.js, React, TypeScript, Tailwind, PWA, API REST, PostgreSQL, stockage objet.
- Principes : Frontend First, modulaire, Offline First, API First, backend stateless, Privacy by Design, IA découplée, CV indépendante, VH autonomes, observabilité.
- Ajout des décisions D-066 à D-077 dans `DECISIONS.md`.
- Auth détaillée reportée à `16` ; tests à `20` ; PWA fine à `18`.
- Rédaction complète de `docs/12_UX_UI.md` (EN REVUE).
- Principes UX : calme type méditation, une action/écran, navigation ≤ 3 niveaux, Mobile First, accessibilité native, pas de gamification compétitive, Premium non intrusif.
- Alignement versions : Mei/caméra optionnels V2 dans onboarding ; structure de séance alignée sur le cursus.
- Ajout des décisions D-078 à D-087 dans `DECISIONS.md`.
- Mise à jour de la note de dépendance dans `docs/13_TECH_ARCHITECTURE.md` (relecture croisée `12` ↔ `13` encore ouverte).
- Clôture officielle de la revue croisée `docs/12_UX_UI.md` ↔ `docs/13_TECH_ARCHITECTURE.md`.
- Corrections documentaires C-1 / C-2 / C-3 uniquement (statuts et références obsolètes).
- Cohérence validée ; aucune incohérence bloquante identifiée.
- Statut des deux documents conservé en `EN REVUE` (Design Freeze non atteint).
- Aucune nouvelle décision d’architecture ; C-4 / C-5 non appliquées (reportées à `14` / `18`).
- Rédaction complète de `docs/14_DATA_MODEL.md` (EN REVUE).
- Modèle conceptuel : domaines, entités, relations, intégrité, cycles de vie, versionnement, matrice local/sync/distant.
- Séparation SessionTemplate / PracticeSession ; pas de vidéo CV brute par défaut ; consentements versionnés ; progression non compétitive.
- Ajout des décisions D-088 à D-097 dans `DECISIONS.md`.
- Rédaction complète de `docs/15_API_ARCHITECTURE.md` (EN REVUE).
- Contrats REST versionnés : familles API, opérations métier, erreurs, idempotence, async, sync Offline First.
- Séparation API cliente / interne / fournisseur ; IA/CV/VH abstraits ; médias hors JSON lourd.
- Ajout des décisions D-098 à D-110 dans `DECISIONS.md`.
- Rédaction complète de `docs/16_AUTH_SECURITY.md` (EN REVUE).
- Auth/sécurité conceptuelle : comptes, sessions, Least Privilege, Password Visibility Standard, protections IA/CV/VH, Offline/PWA.
- Ajout des décisions D-111 à D-120 dans `DECISIONS.md`.
- Rédaction complète de `docs/17_PRIVACY_RGPD.md` (EN REVUE) — document de conception, non politique publique.
- Registre des traitements, consentements indépendants, droits, export/suppression, IA/CV/VH, durées ouvertes signalées.
- Ajout D-131 : gouvernance obligatoire des nouvelles fonctionnalités traitant des PII avant implémentation.
- Ajout des décisions D-121 à D-131 dans `DECISIONS.md`.
- Rédaction complète de `docs/18_PWA_OFFLINE.md` (EN REVUE).
- Offline First : Local First, Sync Later, cache intelligent, IndexedDB conceptuel, conflits, file d’attente, UX calme.
- Alignement versions : cœur MVP local ; sync `F-027` V1 ; packs `F-026` V2 ; IA non bloquante.
- Ajout D-142 : gouvernance Offline obligatoire pour toute nouvelle fonctionnalité.
- Ajout des décisions D-132 à D-142 dans `DECISIONS.md`.
- Mise à jour `docs/18_PWA_OFFLINE.md` en v1.1 : classification obligatoire Offline / Hybrid / Online.
- Renforcement de D-142 (classification + livrables documentaires par classe).
- Rédaction complète de `docs/19_ANALYTICS.md` (EN REVUE).
- Analytics éthiques : taxonomie, événements minimisés, KPI non compétitifs, interdits IA/CV, consentement opt-in.
- Gouvernance D-153 et classification Sans / Techniques / Produit (D-154).
- Ajout des décisions D-143 à D-154 dans `DECISIONS.md`.
- Mise à jour `docs/19_ANALYTICS.md` en v1.1 : §26 bis Justification des Analytics.
- Ajout de la décision D-155 (justification obligatoire par métrique / événement).
- Rédaction complète de `docs/20_TEST_STRATEGY.md` (EN REVUE).
- Stratégie de validation : pyramide, UX (œil MDP), Offline, API, sécu, RGPD, Analytics, critères MVP/V1/V2.
- Gouvernance des tests D-166, classification D-167, justification des campagnes D-168.
- Ajout des décisions D-156 à D-168 dans `DECISIONS.md`.
- Rédaction complète de `docs/21_DEPLOYMENT.md` (EN REVUE).
- Environnements, secrets, PWA/backend, backups, rollback, monitoring, gates pre-prod, continuité.
- Gouvernance D-179, classification Mineure/Majeure/Critique D-180, justification prod D-181.
- Ajout des décisions D-169 à D-181 dans `DECISIONS.md`.
- Rédaction complète de `docs/22_ROADMAP.md` (EN REVUE) — roadmap stratégique sans calendrier.
- Versions Pré-MVP→V3, MoSCoW, dépendances, gates de passage, backlog, gouvernance D-191/D-192.
- Ajout des décisions D-182 à D-192 dans `DECISIONS.md`.
- Rédaction complète de `docs/23_RELEASE_PLAN.md` (EN REVUE).
- Types Hotfix/Patch/Minor/Major, checklist Go/No-Go G1–G14, Release Notes, rollback, compatibilité.
- Gouvernance D-201 et justification/classification D-202.
- Ajout des décisions D-193 à D-202 dans `DECISIONS.md`.
- Rédaction complète de `docs/24_DEVELOPER_HANDOVER.md` (EN REVUE) — point d’entrée de reprise.
- État projet, autorité documentaire, ordre d’implémentation, Impact Analysis, vigilance.
- Ajout des décisions D-203 à D-212 dans `DECISIONS.md`.
- **Design Freeze officiel** : rédaction et validation de `docs/25_DESIGN_FREEZE.md` (VALIDÉ).
- Phase de conception close ; baseline `00`–`24` gelée ; décisions D-213 à D-222.
- Développement autorisé seulement après création de `docs/runtime/` (20 registres), puis MVP.
- Aucun code applicatif ni `docs/runtime/` créés dans ce livrable.
- **Sync documentaire post–Design Freeze** (corrections d’audit, sans nouvelle décision) :
  - `docs/00_MASTER_PLAN.md` : note de phase, conception close, prochaine étape = `docs/runtime/` puis MVP.
  - `docs/24_DEVELOPER_HANDOVER.md` : Freeze déclaré / `25` VALIDÉ ; décisions jusqu’à D-222 ; MVP après Runtime.
  - `docs/19_ANALYTICS.md` v1.2 : Analytics Produit = **V1** ; MVP = technique / erreurs / supervision uniquement.
  - `docs/12_UX_UI.md` : exigence UX officielle Password Visibility (D-113) pour tous les champs mot de passe.
- Aucune modification d’architecture ni de catalogue fonctionnel ; aucun runtime créé.
