import { useEffect, useState } from "react";
import { AccessibilityInfo } from "react-native";

// Mirrors the prototype's `@media (prefers-reduced-motion: reduce)` overrides
// (dice-spin, chip-pop, mascot bounce/shake all had reduced-motion fallbacks
// in mobile-ios.html) — the RN port has no equivalent without this hook.
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled().then((value) => {
      if (mounted) setReduced(value);
    });
    const subscription = AccessibilityInfo.addEventListener("reduceMotionChanged", (value) => setReduced(value));
    return () => {
      mounted = false;
      subscription.remove();
    };
  }, []);

  return reduced;
}
