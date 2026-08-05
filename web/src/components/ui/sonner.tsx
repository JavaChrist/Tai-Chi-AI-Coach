"use client";

import type { CSSProperties } from "react";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useTheme } from "@/components/theme/theme-provider";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-center"
      duration={4000}
      icons={{
        success: <CircleCheckIcon className="size-4" aria-hidden />,
        info: <InfoIcon className="size-4" aria-hidden />,
        warning: <TriangleAlertIcon className="size-4" aria-hidden />,
        error: <OctagonXIcon className="size-4" aria-hidden />,
        loading: <Loader2Icon className="size-4 animate-spin" aria-hidden />,
      }}
      style={
        {
          "--normal-bg": "var(--surface-elevated)",
          "--normal-text": "var(--foreground)",
          "--normal-border": "var(--border-soft)",
          "--border-radius": "var(--radius-card)",
          "--success-bg": "var(--surface-elevated)",
          "--error-bg": "var(--surface-elevated)",
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "cn-toast shadow-medium border border-border text-body !bg-[var(--surface-elevated)]",
          title: "text-body font-medium",
          description: "text-small text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
