import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  description?: string;
  duration?: number;
};

/** Toasts typés — Success / Error / Warning / Information. */
export const toast = {
  success(message: string, options?: ToastOptions) {
    return sonnerToast.success(message, options);
  },
  error(message: string, options?: ToastOptions) {
    return sonnerToast.error(message, options);
  },
  warning(message: string, options?: ToastOptions) {
    return sonnerToast.warning(message, options);
  },
  information(message: string, options?: ToastOptions) {
    return sonnerToast.info(message, options);
  },
  info(message: string, options?: ToastOptions) {
    return sonnerToast.info(message, options);
  },
};
