/**
 * js/scroll-observer.js — Lightweight IntersectionObserver for subtle section reveals.
 */

export function initScrollObserver() {
  const targets = document.querySelectorAll(
    'main > section:not(#hero), .project-item, .case-study-preview, .services-list li, .beyond-list li'
  );

  if (!targets.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('js-motion');

  targets.forEach((el) => {
    el.setAttribute('data-reveal', '');
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach((el) => observer.observe(el));
}