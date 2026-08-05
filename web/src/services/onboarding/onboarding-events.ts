const listeners = new Set<() => void>();

export function subscribeOnboarding(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function emitOnboardingChanged() {
  listeners.forEach((listener) => listener());
}
