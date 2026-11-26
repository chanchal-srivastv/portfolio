/**
 * js/intro-animation.js — Triggers the opening scissor-cut reveal and cleans up the DOM.
 */

export function initIntroAnimation() {
  const curtain = document.getElementById('intro-curtain');
  if (!curtain) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    curtain.remove();
    return;
  }

  document.documentElement.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    curtain.classList.add('is-playing');
  });

  window.setTimeout(() => {
    document.documentElement.style.overflow = '';
    curtain.remove();
  }, 1600);
}