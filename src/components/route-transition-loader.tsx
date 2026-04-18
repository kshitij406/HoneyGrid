"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function RouteTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<"route" | "lang">("route");
  const previousRef = useRef({ pathname, lang: searchParams.get("lang") ?? "en" });

  const lang = searchParams.get("lang") ?? "en";

  useEffect(() => {
    const previous = previousRef.current;
    const pathChanged = previous.pathname !== pathname;
    const languageChanged = previous.lang !== lang;

    if (!pathChanged && !languageChanged) {
      return;
    }

    setMode(!pathChanged && languageChanged ? "lang" : "route");
    previousRef.current = { pathname, lang };
    setIsVisible(true);

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 760);

    return () => window.clearTimeout(timeout);
  }, [pathname, lang]);

  return (
    <div
      className={`route-loader ${isVisible ? "is-active" : ""} ${
        mode === "lang" ? "is-lang" : ""
      }`}
      aria-hidden="true"
    >
      <div className="route-loader-track" />
      <div className="route-loader-hexes">
        <span className="route-loader-hex" />
        <span className="route-loader-hex" />
        <span className="route-loader-hex" />
      </div>
    </div>
  );
}
