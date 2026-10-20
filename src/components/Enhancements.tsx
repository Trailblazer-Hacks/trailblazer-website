'use client';

import { useEffect } from 'react';

/**
 * Progressive enhancement only. Without this code every story step, link and answer
 * remains visible and readable. Scroll-linked motion needs a wide, motion-tolerant screen.
 */
export function Enhancements() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 900px)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const journey = document.querySelector<HTMLElement>('[data-journey]');
    const steps = journey ? Array.from(journey.querySelectorAll<HTMLElement>('[data-step]')) : [];
    const scene = document.querySelector<HTMLElement>('[data-scene]');
    const depth = document.querySelector<HTMLElement>('[data-depth]');
    let scrollFrame = 0;
    let tiltFrame = 0;
    let visible = true;

    const setProgress = () => {
      if (!journey) return;
      const rect = journey.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const progress = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;
      journey.style.setProperty('--p', progress.toFixed(4));
      const active = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      steps.forEach((step, index) => {
        step.dataset.active = String(index === active);
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(setProgress);
    };
    const applyJourney = () => {
      if (!journey) return;
      if (!reduce.matches && wide.matches) {
        journey.dataset.js = 'true';
        setProgress();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
      } else {
        delete journey.dataset.js;
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        steps.forEach((step) => delete step.dataset.active);
      }
    };

    const resetTilt = () => {
      cancelAnimationFrame(tiltFrame);
      if (depth) depth.style.transform = '';
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!scene || !depth || !visible || reduce.matches || !finePointer.matches) return;
      cancelAnimationFrame(tiltFrame);
      tiltFrame = requestAnimationFrame(() => {
        const rect = scene.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        depth.style.transform = `rotateX(${-y * 7}deg) rotateY(${x * 9}deg)`;
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (scene) scene.dataset.visible = String(visible);
      if (!visible) resetTilt();
    });
    if (scene) {
      observer.observe(scene);
      scene.addEventListener('pointermove', onPointerMove);
      scene.addEventListener('pointerleave', resetTilt);
    }

    applyJourney();
    reduce.addEventListener('change', applyJourney);
    wide.addEventListener('change', applyJourney);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reduce.removeEventListener('change', applyJourney);
      wide.removeEventListener('change', applyJourney);
      scene?.removeEventListener('pointermove', onPointerMove);
      scene?.removeEventListener('pointerleave', resetTilt);
      resetTilt();
    };
  }, []);
  return null;
}
