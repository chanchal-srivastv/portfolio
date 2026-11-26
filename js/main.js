/**
 * js/main.js — Application bootstrapper.
 */

import { initIntroAnimation } from './intro-animation.js';
import { initYouTubeFacades } from './youtube-facade.js';
import { initGalleryFilter } from './gallery-filter.js';
import { initScrollObserver } from './scroll-observer.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  initIntroAnimation();
  initYouTubeFacades();
  initGalleryFilter();
  initScrollObserver();
  initContactForm();

  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});