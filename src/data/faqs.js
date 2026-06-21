export const faqGroups = [
  {
    group: 'Injectables',
    items: [
      {
        q: 'Does Botox hurt?',
        a: 'Most clients describe the injections as small pinches that pass quickly. We use the finest needles available and can apply topical numbing on request. Most areas are done in 5–10 minutes total.',
      },
      {
        q: 'Will I look frozen?',
        a: 'No. Our approach is restraint, not erasure. We use the smallest amount that delivers a natural, refreshed result — you’ll still have expression and movement.',
      },
      {
        q: 'How long does Botox last?',
        a: 'Typically 3–4 months for most clients. With consistent treatments, results often last a bit longer as the muscles soften over time.',
      },
      {
        q: 'What is facial balancing and how is it different from filler?',
        a: 'Facial balancing is a strategic plan that restores proportion (chin, jaw, mid-face, lips) rather than adding volume for its own sake. Same product family, completely different philosophy.',
      },
      {
        q: 'What happens if I don’t love my results?',
        a: 'We always offer a two-week follow-up. Small touch-ups, when needed, are included. If something needs to be dissolved (rare), we discuss that openly and honestly.',
      },
    ],
  },
  {
    group: 'Skin & Acne',
    items: [
      {
        q: 'How is your acne program different from drugstore products?',
        a: 'We prescribe medical-grade treatments tailored to your skin and hormones, with monthly check-ins and the ability to message your provider between visits. It is a real plan, not a single product.',
      },
      {
        q: 'How soon will I see results from a facial?',
        a: 'You’ll feel a difference the same day. Visible skin change typically shows up after 3–6 sessions, then a maintenance rhythm every 6–8 weeks.',
      },
      {
        q: 'Are your peels safe for melanin-rich skin?',
        a: 'Yes. We choose acids and protocols that are safe and effective across skin tones, and we pre-condition skin when needed to reduce post-inflammatory pigmentation risk.',
      },
    ],
  },
  {
    group: 'IV Hydration & Wellness',
    items: [
      {
        q: 'How long does an IV drip take?',
        a: 'Most drips take 30–45 minutes in a comfortable chair. You can read, scroll, work, or simply rest.',
      },
      {
        q: 'How often should I get an IV?',
        a: 'For most clients, once or twice a month. Athletes, busy executives, and clients on weight loss programs sometimes run weekly for several months. We tailor the cadence.',
      },
      {
        q: 'Is IV hydration covered by insurance?',
        a: 'IV hydration is a self-pay wellness service. We provide a clear receipt that you may submit to your FSA/HSA where eligible.',
      },
    ],
  },
  {
    group: 'Medical Weight Loss',
    items: [
      {
        q: 'How does the GLP-1 program work?',
        a: 'After an initial medical consultation, we develop a personalized plan that includes weekly in-office injections, nutrition guidance, and regular check-ins. It is fully physician-supervised.',
      },
      {
        q: 'Am I a candidate?',
        a: 'Most healthy adults seeking sustainable weight management are candidates, but we evaluate medical history carefully. The initial consultation determines fit.',
      },
      {
        q: 'What does it cost?',
        a: 'The initial consultation is $75. The GLP-1 program starts at $100 per weekly injection in-office. Oral prescription support is $100/month.',
      },
    ],
  },
  {
    group: 'Visit & Booking',
    items: [
      {
        q: 'How do I book?',
        a: 'Tap any Book Now button on the site, message us on WhatsApp, or call (617) 943-0892. We confirm appointments individually rather than via auto-confirm to make sure your visit is set up properly.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Free reschedule with 24+ hours’ notice. A 50% rebooking fee applies inside 24 hours. Full details on our Cancellation page.',
      },
      {
        q: 'Where is the studio?',
        a: 'My Divine Aesthetics is a private, by-appointment studio. The exact address is shared during your booking confirmation.',
      },
      {
        q: 'Do you offer consultations?',
        a: 'Yes. Most services include a brief consultation. For injectables, weight loss, and acne, we strongly recommend booking a dedicated consultation visit first.',
      },
    ],
  },
];

export function faqJsonLd() {
  const mainEntity = faqGroups.flatMap((g) =>
    g.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    }))
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
}
