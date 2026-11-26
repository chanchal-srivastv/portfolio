/**
 * js/youtube-facade.js — Zero-iframe YouTube Lite Facade with single-active-player control.
 */

let activeStage = null;
let preconnected = false;

function injectPreconnect() {
  if (preconnected) return;
  preconnected = true;

  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://www.youtube-nocookie.com';
  document.head.appendChild(link);
}

function teardownActiveStage() {
  if (!activeStage) return;

  const iframe = activeStage.querySelector('iframe.yt-embed-iframe');
  const trigger = activeStage.querySelector('.yt-facade-trigger');
  const poster = activeStage.querySelector('.yt-facade-poster');

  if (iframe) iframe.remove();
  if (trigger) trigger.hidden = false;
  if (poster) poster.hidden = false;

  activeStage = null;
}

function activateStage(stage) {
  const youtubeId = stage.dataset.youtubeId;
  if (!youtubeId || youtubeId.startsWith('REPLACE_WITH_')) {
    const label = stage.querySelector('.yt-facade-label');
    if (label) {
      label.textContent = 'Add YouTube ID in HTML / projects.js';
    }
    return;
  }

  if (activeStage && activeStage !== stage) {
    teardownActiveStage();
  }

  const trigger = stage.querySelector('.yt-facade-trigger');
  const poster = stage.querySelector('.yt-facade-poster');
  if (trigger) trigger.hidden = true;
  if (poster) poster.hidden = true;

  const iframe = document.createElement('iframe');
  iframe.className = 'yt-embed-iframe';
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0&modestbranding=1`;
  iframe.title = trigger?.getAttribute('aria-label') || 'YouTube video player';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;

  stage.appendChild(iframe);
  activeStage = stage;
}

export function initYouTubeFacades() {
  const stages = document.querySelectorAll('.video-stage[data-youtube-id]');

  stages.forEach((stage) => {
    const trigger = stage.querySelector('.yt-facade-trigger');
    if (!trigger) return;

    const youtubeId = stage.dataset.youtubeId;
    const hasRealId = youtubeId && !youtubeId.startsWith('REPLACE_WITH_');
    const thumbPath =
      stage.dataset.thumb ||
      (hasRealId ? `https://i.ytimg.com/vi/${encodeURIComponent(youtubeId)}/hqdefault.jpg` : null);

    if (thumbPath && !stage.querySelector('.yt-facade-poster')) {
      const img = document.createElement('img');
      img.className = 'yt-facade-poster';
      img.src = thumbPath;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      stage.prepend(img);
    }

    stage.addEventListener('pointerenter', injectPreconnect, { once: true });
    trigger.addEventListener('focus', injectPreconnect, { once: true });
    trigger.addEventListener('click', () => activateStage(stage));
  });
}