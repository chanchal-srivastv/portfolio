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

  requestAnimationFrame(() => {
    curtain.classList.add('is-playing');
  });

  window.setTimeout(() => {
    curtain.remove();
  }, 1550);
}