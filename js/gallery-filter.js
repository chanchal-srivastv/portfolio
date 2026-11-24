/**
 * js/gallery-filter.js — Accessible category filtering for Selected Editing Work.
 */

export function initGalleryFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
  const items = document.querySelectorAll('.gallery-grid .project-item');
  const statusEl = document.getElementById('gallery-status');

  if (!filterButtons.length || !items.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.filter;

      filterButtons.forEach((b) => {
        b.setAttribute('aria-pressed', String(b === btn));
      });

      let visibleCount = 0;
      items.forEach((item) => {
        const matches = selected === 'all' || item.dataset.category === selected;
        item.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (statusEl) {
        const label = btn.textContent.trim();
        statusEl.textContent = `Showing ${visibleCount} project${visibleCount === 1 ? '' : 's'} for ${label}.`;
      }
    });
  });
}