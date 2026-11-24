/**
 * js/data/projects.js — Single source of truth for editing projects & case studies.
 * Replace placeholder YouTube IDs and thumbnail paths with your own assets.
 */

export const SHOWREEL = {
  id: 'showreel',
  title: 'Editing Showreel',
  youtubeId: 'REPLACE_WITH_SHOWREEL_ID',
  aspectRatio: '16/9',
  thumb: 'assets/thumbs/showreel-poster.webp',
  duration: '1:15',
};

export const PROJECTS = [
  {
    id: 'reel-01',
    slug: 'short-form-creator-reel',
    title: '[Project Title — Short-Form Reel]',
    category: 'reels',
    aspectRatio: '9/16',
    youtubeId: 'REPLACE_WITH_VIDEO_ID_1',
    thumb: 'assets/thumbs/reel-01.webp',
    duration: '0:38',
    summary: 'High-retention hook pacing, kinetic captions, and layered sound design cut in DaVinci Resolve.',
    caseStudy: {
      objective: '[Describe the core communication goal, target platform, and audience retention target.]',
      approach: '[Outline hook structure, J-cut/L-cut pacing, and visual rhythm.]',
      decisions: '[Note typography choices, sound hits, and restraint around visual effects.]',
      resolveWorkflow: '[Detail Cut/Edit timeline organization, Fusion motion nodes, Color grading, and Fairlight mix.]',
    },
  },
  {
    id: 'gaming-01',
    slug: 'creator-gaming-highlight',
    title: '[Project Title — Creator Highlight]',
    category: 'gaming',
    aspectRatio: '9/16',
    youtubeId: 'REPLACE_WITH_VIDEO_ID_2',
    thumb: 'assets/thumbs/gaming-01.webp',
    duration: '0:45',
    summary: 'Beat-synced transitions, dynamic zooms, and clean audio ducking for creator storytelling.',
    caseStudy: {
      objective: '[Describe the creator narrative goal and pacing target.]',
      approach: '[Outline how raw gameplay was distilled into a 45-second arc.]',
      decisions: '[Detail comedic timing, SFX layering, and caption legibility.]',
      resolveWorkflow: '[Detail DaVinci Resolve Cut page selects, Fusion callouts, and Fairlight dialogue leveling.]',
    },
  },
  {
    id: 'promo-01',
    slug: 'social-product-promo',
    title: '[Project Title — Social Promo]',
    category: 'promo',
    aspectRatio: '9/16',
    youtubeId: 'REPLACE_WITH_VIDEO_ID_3',
    thumb: 'assets/thumbs/promo-01.webp',
    duration: '0:30',
    summary: 'Structured product narrative with custom Fusion typography and balanced color grading.',
    caseStudy: {
      objective: '[Describe the promotional goal and vertical feed constraints.]',
      approach: '[Outline visual hook, feature callouts, and CTA pacing.]',
      decisions: '[Detail color palette consistency and clean motion graphics.]',
      resolveWorkflow: '[Detail DaVinci Resolve node tree for color matching and Fusion title templates.]',
    },
  },
];