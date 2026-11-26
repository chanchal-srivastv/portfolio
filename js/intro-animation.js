/**
 * js/intro-animation.js — Triggers the opening scissor-cut reveal and cleans up the DOM.
 */

export function initIntroAnimation() {
  const curtain = document.getElementById('intro-curtain');
  if (!curtain) {
    document.documentElement.classList.remove('intro-locked');
    return;
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.documentElement.classList.remove('intro-locked');
    curtain.remove();
    return;
  }

  document.documentElement.classList.add('intro-locked');
  document.documentElement.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    curtain.classList.add('is-playing');
  });

  /* Reveal page content right as the two curtains start parting */
  window.setTimeout(() => {
    document.documentElement.classList.remove('intro-locked');
  }, 900);

  window.setTimeout(() => {
    document.documentElement.style.overflow = '';
    curtain.remove();
  }, 1600);
}