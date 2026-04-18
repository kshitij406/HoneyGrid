"use client";

import { useEffect } from "react";

export function InteractiveEffects() {
  useEffect(() => {
    document.documentElement.classList.add("effects-ready");

    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    let animationFrame = 0;
    let cursorX = window.innerWidth * 0.5;
    let cursorY = window.innerHeight * 0.5;
    let targetX = cursorX;
    let targetY = cursorY;

    if (isDesktop) {
      document.documentElement.classList.add("cursor-glow-enabled");
    }

    const renderCursor = () => {
      cursorX += (targetX - cursorX) * 0.14;
      cursorY += (targetY - cursorY) * 0.14;

      document.documentElement.style.setProperty("--cursor-x", `${cursorX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${cursorY}px`);

      animationFrame = window.requestAnimationFrame(renderCursor);
    };

    const handleMove = (event: MouseEvent) => {
      if (!isDesktop) {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;
    };

    const observedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    const attachRevealObserver = () => {
      const revealElements = document.querySelectorAll(".reveal-on-scroll");

      revealElements.forEach((element) => {
        if (observedElements.has(element)) {
          return;
        }

        observedElements.add(element);
        observer.observe(element);
      });
    };

    const mutationObserver = new MutationObserver(() => {
      attachRevealObserver();
    });

    attachRevealObserver();
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    if (isDesktop) {
      animationFrame = window.requestAnimationFrame(renderCursor);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove("effects-ready");
      document.documentElement.classList.remove("cursor-glow-enabled");
      document.documentElement.style.removeProperty("--cursor-x");
      document.documentElement.style.removeProperty("--cursor-y");
    };
  }, []);

  return null;
}
