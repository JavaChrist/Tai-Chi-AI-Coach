const listeners = new Set<() => void>();

export function subscribePreferences(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function emitPreferencesChanged() {
  listeners.forEach((listener) => listener());
}
