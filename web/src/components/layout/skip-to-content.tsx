/**
 * Lien d’évitement clavier — premier élément utile hors onboarding (F-029 / PO-C).
 * Invisible au repos ; visible au focus ; cible `#contenu-principal`.
 */
export function SkipToContent() {
  return (
    <a href="#contenu-principal" className="skip-to-content">
      Aller au contenu principal
    </a>
  );
}
