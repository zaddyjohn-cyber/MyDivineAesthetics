import {
  Sparkles,
  Droplets,
  Syringe,
  Leaf,
  Activity,
  HeartPulse,
} from 'lucide-react';

export const featuredServices = [
  {
    icon: Leaf,
    title: 'Skin Care',
    blurb:
      'Hydrating, brightening, and calming treatments designed to restore your skin’s natural glow.',
    href: '/services#skin',
  },
  {
    icon: Syringe,
    title: 'Botox',
    blurb:
      'Smooth fine lines and refresh your appearance with natural-looking injectable treatments.',
    href: '/services#injectables',
  },
  {
    icon: Sparkles,
    title: 'Facial Balancing',
    blurb:
      'Restore volume, enhance contours, and bring harmony to your natural features.',
    href: '/services#injectables',
  },
  {
    icon: Activity,
    title: 'Prescription Acne Care',
    blurb:
      'Personalized prescription-strength support for clearer, calmer, more confident skin.',
    href: '/services#acne',
  },
  {
    icon: Droplets,
    title: 'IV Hydration',
    blurb:
      'Wellness-focused drips designed to support energy, glow, immunity, and recovery.',
    href: '/services#iv',
  },
  {
    icon: HeartPulse,
    title: 'Medical Weight Loss',
    blurb:
      'Guided wellness support to help you feel stronger, healthier, and more confident.',
    href: '/services#weight',
  },
];

export const serviceCategories = [
  {
    id: 'skin',
    eyebrow: 'Skin Care',
    title: 'Facials for a Radiant, Restored Glow',
    description:
      'Each facial is customized to your skin type and concerns — calming, brightening, and deeply hydrating treatments designed by a nurse practitioner.',
    bestFor:
      'Dullness, congestion, uneven texture, dehydration, sensitivity, men’s skin health, and general maintenance.',
    benefits: [
      'Restores luminous, healthy-looking skin',
      'Calms inflammation and sensitivity',
      'Deeply hydrates and rebalances',
      'Improves tone, clarity, and texture',
    ],
    items: [
      { name: 'The Divine Glow Facial', price: '$150' },
      { name: 'Radiance Renewal Peel', price: '$180' },
      { name: 'Clear & Calm Acne Control', price: '$190' },
      { name: 'King Energy Men’s Facial', price: '$170' },
      { name: 'Beard Detox & Hydration Treatment (Add-On)', price: '$40' },
    ],
  },
  {
    id: 'injectables',
    eyebrow: 'Injectables',
    title: 'Natural-Looking Botox & Facial Balancing',
    description:
      'Subtle, artful injectable work that enhances your features without ever looking overdone. Designed by an experienced nurse practitioner.',
    bestFor:
      'Fine lines, expression lines, volume loss, asymmetry, and clients seeking refreshed, natural-looking results.',
    benefits: [
      'Refreshed, natural-looking results',
      'Smooths fine lines and softens expression lines',
      'Enhances contours without overfilling',
      'Personalized to your facial harmony',
    ],
    items: [
      { name: 'Botox', price: '$12 / unit' },
      { name: 'Facial Balancing', price: '$800 / syringe' },
    ],
  },
  {
    id: 'acne',
    eyebrow: 'Prescription-Strength Acne Care',
    title: 'Clear Skin, Personalized Care',
    description:
      'A medically guided acne program for clients whose over-the-counter routines aren’t enough. Custom prescriptions, monthly support, and real follow-through.',
    bestFor:
      'Hormonal acne, persistent breakouts, cystic acne, post-acne marks, and teens or adults ready for a real plan.',
    benefits: [
      'Personalized prescription treatment plan',
      'Monthly check-ins and adjustments',
      'Calms active breakouts and inflammation',
      'Supports long-term clarity and confidence',
    ],
    items: [
      { name: 'Initial Acne Consultation', price: '$125' },
      { name: 'Follow-Up Visit', price: '$75' },
      { name: 'Monthly Acne Management Program', price: '$99 / month' },
    ],
  },
  {
    id: 'iv',
    eyebrow: 'IV Hydration',
    title: 'Wellness Drips for Glow, Energy & Recovery',
    description:
      'Vitamin-rich IV therapy curated for everyday wellness — for the days you want to feel your most radiant, energized, and restored.',
    bestFor:
      'Fatigue, jet lag, post-workout recovery, immune support, beauty and glow, hangover relief, and overall vitality.',
    benefits: [
      'Boosts hydration and recovery',
      'Supports glowing skin and natural radiance',
      'Strengthens immune defenses',
      'Restores energy and focus',
    ],
    items: [
      { name: 'The Divine Glow Drip', price: '$170' },
      { name: 'The Energy Revival Drip', price: '$160' },
      { name: 'The Immune Shield Drip', price: '$180' },
      { name: 'The Body Sculpt Drip', price: '$190' },
      { name: 'The Rescue & Recover Drip', price: '$180' },
      { name: 'The King Energy Drip', price: '$170' },
    ],
    addons: [
      { name: 'Glutathione Push', price: '$40' },
      { name: 'Extra Vitamin C', price: '$30' },
      { name: 'Additional B12 Shot', price: '$25' },
      { name: 'Toradol', price: '$25' },
      { name: 'Zofran', price: '$2' },
    ],
  },
  {
    id: 'weight',
    eyebrow: 'Medical Weight Loss',
    title: 'Guided Wellness for a Stronger, Healthier You',
    description:
      'A medically supervised, judgment-free approach to sustainable weight loss — combining clinical care with whole-person wellness.',
    bestFor:
      'Clients seeking medically supervised weight management, GLP-1 therapy, and oral prescription support.',
    benefits: [
      'Personalized clinical plan',
      'Ongoing supervision and adjustments',
      'Sustainable, healthy progress',
      'Compassionate, judgment-free care',
    ],
    items: [
      { name: 'Initial Consultation', price: '$75' },
      { name: 'GLP-1 Program In-Office', price: 'Starts at $100 / weekly injection' },
      { name: 'Oral Weight Loss Prescriptions', price: '$100 / month' },
    ],
  },
];
