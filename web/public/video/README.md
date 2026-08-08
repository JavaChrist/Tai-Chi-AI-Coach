# Video

Vidéos pédagogiques (`F-006` — MVP-012).

## Structure

```
public/video/
  README.md                 ← ce fichier
  movements/                ← démonstrations par mouvement
    README.md
    movement-<slug>-demo.mp4   ← futurs fichiers validés uniquement
```

## Convention

- minuscules, séparateur `-` ;
- conteneur **MP4**, codec vidéo **H.264**, audio **AAC** si présent ;
- durée cible **15–45 s** ;
- plein pied, caméra stable, poids mobile raisonnable ;
- préfixe `movement-` pour les démos mouvement ;
- **aucun autoplay** côté application.

## Poster

L’image F-007 (`mediaKeyImage`) sert de poster. Pas de champ poster séparé MVP.

## État

Aucun fichier vidéo n’est requis ni livré tant que `mediaKeyVideo` reste `null`.
Pas de téléchargement Offline / packs dans MVP-012 (voir MVP-017).

## Frontière de production

Tai-Chi AI Coach définit le contrat `Movement` + chemins.
Un outil externe (ex. Virtual Humans Studio) peut produire le média ; **aucune dépendance runtime**.

Futur template documentaire (non implémenté) : `TAI_CHI_MOTION_VIDEO_V1`
— voir ticket MVP-012.
