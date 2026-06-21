export const testimonials = [
  {
    quote:
      'Imani was amazing. She took her time and made me feel completely at ease.',
    name: 'Jasmine R.',
    treatment: 'Botox & Skin Consultation',
  },
  {
    quote:
      'My results are so natural. I look refreshed, not overdone — exactly what I wanted.',
    name: 'Alicia W.',
    treatment: 'Facial Balancing',
  },
  {
    quote:
      'The vibe was everything. Beautiful space, great energy, and I left glowing.',
    name: 'Brittany M.',
    treatment: 'The Divine Glow Facial',
  },
  {
    quote:
      'Finally found an acne plan that actually works. My skin and confidence have changed.',
    name: 'Naomi T.',
    treatment: 'Acne Management Program',
  },
];

export const blogPosts = [
  {
    category: 'Injectables',
    title: 'What to Know Before Your First Botox Appointment',
    excerpt:
      'A nurse practitioner’s guide to planning your first treatment — what to expect, what to ask, and how to get the most natural-looking results.',
    readTime: '5 min read',
  },
  {
    category: 'Skin Care',
    title: 'How to Choose the Right Facial for Your Skin',
    excerpt:
      'Glow, peel, calm, or clarify? A breakdown of how to match a facial to what your skin actually needs right now.',
    readTime: '4 min read',
  },
  {
    category: 'Philosophy',
    title: 'Why Natural-Looking Results Matter',
    excerpt:
      'Subtle, balanced, and elevated — why the most beautiful aesthetic work is the kind people can’t quite put their finger on.',
    readTime: '3 min read',
  },
  {
    category: 'Acne Care',
    title: 'Acne Care: When Over-the-Counter Products Are Not Enough',
    excerpt:
      'If you’ve tried everything at the drugstore and still feel stuck, here’s when it’s time to escalate to medical-grade care.',
    readTime: '6 min read',
  },
  {
    category: 'IV Hydration',
    title: 'IV Hydration and Wellness: What Clients Should Know',
    excerpt:
      'From the Divine Glow Drip to Immune Shield — what each IV is actually doing inside your body, and how to choose the right one.',
    readTime: '5 min read',
  },
  {
    category: 'Injectables',
    title: 'Facial Balancing vs. Overfilled Results',
    excerpt:
      'Restoring harmony to the face is an art. Here’s the philosophy behind balanced work — and the red flags of overfilled treatments.',
    readTime: '4 min read',
  },
];

const BASE = import.meta.env.BASE_URL;
const UNSPLASH = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

export const galleryItems = [
  {
    category: 'Skin Care',
    label: 'The Divine Glow Facial',
    caption: 'A calm, sensory ritual designed to leave skin lit from within.',
    media: { type: 'image', src: UNSPLASH('1570172619644-dfd03ed5d881') },
  },
  {
    category: 'Injectables',
    label: 'Refined Botox Refresh',
    caption: 'Subtle, artful tweaks that soften — never freeze — expression.',
    media: { type: 'video', src: `${BASE}gallery/refined-botox-refresh.mp4` },
  },
  {
    category: 'Acne Care',
    label: 'Personalized Acne Program',
    caption: 'Medical-grade protocols, monthly check-ins, real-life progress.',
    media: { type: 'image', src: `${BASE}gallery/personalized-acne-program.jpg` },
  },
  {
    category: 'Facial Balancing',
    label: 'Lip & Chin Harmony',
    caption: 'Quiet rebalancing that honors your natural proportions.',
    media: { type: 'image', src: UNSPLASH('1581182800629-7d90925ad072') },
  },
  {
    category: 'Wellness',
    label: 'The Divine Glow Drip',
    caption: 'Vitamin-rich hydration for radiance, recovery, and clarity.',
    media: { type: 'image', src: UNSPLASH('1552693673-1bf958298935') },
  },
  {
    category: 'Skin Care',
    label: 'Radiance Renewal Peel',
    caption: 'A custom chemistry brightens dullness and reveals fresh skin.',
    media: { type: 'video', src: `${BASE}gallery/radiance-renewal-peel.mp4` },
  },
  {
    category: 'Injectables',
    label: 'Soft Refresh — Crow’s Feet',
    caption: 'A gentle smoothing that keeps your smile entirely yours.',
    media: { type: 'image', src: UNSPLASH('1580870069867-74c57ee1bb07') },
  },
  {
    category: 'Acne Care',
    label: 'Calm & Clear Plan',
    caption: 'Designed for inflamed, hormonal, and cystic skin journeys.',
    media: { type: 'image', src: UNSPLASH('1581182815808-b6eb627a8798') },
  },
  {
    category: 'Wellness',
    label: 'Inside the Studio',
    caption: 'A private, considered space made for sacred self-care.',
    media: { type: 'image', src: UNSPLASH('1573461160327-b450ce3d8e7f') },
  },
];
