/**
 * Point d’entrée du Design System Tai-Chi AI Coach (MVP-002).
 * Composants UI réutilisables — aucune logique métier.
 */

// Boutons
export { Button, buttonVariants } from "@/components/ui/button";
export { LoadingButton } from "@/components/ui/loading-button";
export { IconButton } from "@/components/ui/icon-button";

// Cartes
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
export { FeatureCard } from "@/components/cards/feature-card";
export { InformationCard } from "@/components/cards/information-card";
export { EmptyStateCard } from "@/components/cards/empty-state-card";

// États
export { EmptyState } from "@/components/states/empty-state";
export { LoadingState } from "@/components/states/loading-state";
export { ErrorState } from "@/components/states/error-state";
export { SuccessState } from "@/components/states/success-state";

// Dialogs
export { ConfirmationDialog } from "@/components/dialogs/confirmation-dialog";
export { ErrorDialog } from "@/components/dialogs/error-dialog";
export { SuccessDialog } from "@/components/dialogs/success-dialog";
export { InformationDialog } from "@/components/dialogs/information-dialog";
export { AppDialog, DialogActionButton } from "@/components/dialogs/app-dialog";

// Toasts
export { toast } from "@/lib/toast";
export { Toaster } from "@/components/ui/sonner";

// Inputs
export { Input } from "@/components/ui/input";
export { TextInput } from "@/components/ui/text-input";
export { PasswordInput } from "@/components/ui/password-input";
export { EmailInput } from "@/components/ui/email-input";
export { SearchInput } from "@/components/ui/search-input";
export { Textarea } from "@/components/ui/textarea";
export { Label } from "@/components/ui/label";

// Feedback
export { Spinner } from "@/components/ui/spinner";
export { Skeleton } from "@/components/ui/skeleton";
export { Progress } from "@/components/ui/progress";
export { Badge } from "@/components/ui/badge";
export { Switch } from "@/components/ui/switch";

// Préférences
export { PreferenceCard } from "@/components/preferences/preference-card";
export { PreferenceSection } from "@/components/preferences/preference-section";
export { PreferenceSwitch } from "@/components/preferences/preference-switch";
export { PreferenceSelect } from "@/components/preferences/preference-select";

// Layouts
export { Container } from "@/components/layout/container";
export { ContentLayout } from "@/components/layout/content-layout";
export { PageHeader } from "@/components/layout/page-header";
export { Section } from "@/components/layout/section";
export { AppShell } from "@/components/layout/app-shell";
export { AppHeader } from "@/components/layout/app-header";
export { DesktopNav } from "@/components/layout/desktop-nav";
export { BottomNav } from "@/components/layout/bottom-nav";
