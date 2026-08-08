# Vidéos pédagogiques — mouvements (F-006)

Emplacement runtime des démonstrations validées associées aux mouvements.

## Convention de nommage

```
movement-<slug>-demo.mp4
```

Exemples futurs (à déposer **uniquement après validation humaine**) :

| Mouvement | Fichier |
| --- | --- |
| MV-001 Posture de départ | `movement-posture-de-depart-demo.mp4` |
| MV-002 Transfert de poids latéral | `movement-transfert-poids-lateral-demo.mp4` |
| MV-003 Pas avant contrôlé | `movement-pas-avant-controle-demo.mp4` |

Locator logique dans le modèle : `mediaKeyVideo`
Ex. `/video/movements/movement-posture-de-depart-demo.mp4`

## Spécifications techniques

| Critère | Exigence |
| --- | --- |
| Conteneur | MP4 |
| Vidéo | H.264 |
| Audio | AAC si présent (optionnel) |
| Durée cible | 15–45 s |
| Cadre | Plein pied |
| Caméra | Stable |
| Poids | Mobile raisonnable |
| Autoplay | Interdit côté app |

## Poster

Pas de fichier poster séparé MVP.
L’image F-007 du mouvement (`mediaKeyImage`) sert de poster / repère visuel.

## État actuel (MVP-012)

**Aucun fichier MP4** n’est présent ici.
`mediaKeyVideo` reste `null` pour MV-001 / MV-002 / MV-003 tant qu’aucune démonstration pédagogique n’est validée.

## Offline / cache

Aucun pré-cache dans ce dossier (responsabilité MVP-017).
Hors ligne : texte F-005 + image F-007 restent l’expérience principale.

## Production externe

La génération éventuelle (ex. Virtual Humans Studio) est **hors runtime**.
Pipeline documenté dans `docs/tickets/MVP-012_PEDAGOGICAL_VIDEOS.md`.
