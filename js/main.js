/**
 * js/main.js — Application bootstrapper.
 */

import { initYouTubeFacades } from './youtube-facade.js';
import { initGalleryFilter } from './gallery-filter.js';
import { initScrollObserver } from './scroll-observer.js';

document.addEventListener('DOMContentLoaded', () => {
  initYouTubeFacades();
  initGalleryFilter();
  initScrollObserver();

  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});