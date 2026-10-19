'use client';

import { useEffect } from 'react';

/** One event-driven island. No animation library, render loop, or scroll hijacking. */
export function Enhancements() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>('[data-scene]');
    const depth = document.querySelector<HTMLElement>('[data-depth]');
    if (!scene || !depth) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let visible = true;
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      depth.style.transform = '';
    };
    const move = (e: PointerEvent) => {
      if (!visible || motion.matches || !finePointer.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = scene.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        depth.style.transform = `rotateX(${-y * 7}deg) rotateY(${x * 9}deg)`;
      });
    };
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      scene.dataset.visible = String(visible);
      if (!visible) reset();
    });
    observer.observe(scene);
    scene.addEventListener('pointermove', move);
    scene.addEventListener('pointerleave', reset);
    motion.addEventListener('change', reset);
    return () => {
      observer.disconnect();
      reset();
      scene.removeEventListener('pointermove', move);
      scene.removeEventListener('pointerleave', reset);
      motion.removeEventListener('change', reset);
    };
  }, []);
  return null;
}
