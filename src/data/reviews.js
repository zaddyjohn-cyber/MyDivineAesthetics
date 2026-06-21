/**
 * Realistic sample reviews displayed until a live Google Place API
 * connection is wired. To go live:
 *  1. Get a Google Place ID for "My Divine Aesthetics"
 *  2. Provision a Places API key restricted to the production domain
 *  3. Swap `useSampleData` to false and point the widget at the API
 */
export const PLACE_ID = ''; // e.g. 'ChIJ...placeholder...'
export const PLACE_API_KEY = ''; // env-injected in production
export const useSampleData = true;

export const sampleReviews = {
  averageRating: 4.9,
  totalReviews: 137,
  reviews: [
    {
      author: 'Jasmine R.',
      rating: 5,
      timeAgo: '2 weeks ago',
      text:
        'Imani is the calm, skilled provider I’ve been searching for. My Botox looks so natural — friends just keep telling me I look rested. The studio itself feels like a sacred ritual.',
    },
    {
      author: 'Alicia W.',
      rating: 5,
      timeAgo: '1 month ago',
      text:
        'Facial balancing with Imani changed how I feel in photos. She listened, she went slow, and the result is exactly the “me, but lifted” I asked for. Worth every dollar.',
    },
    {
      author: 'Brittany M.',
      rating: 5,
      timeAgo: '1 month ago',
      text:
        'The Divine Glow Facial is unmatched. My skin was honestly glowing for two weeks. Loved every second of the experience — beautiful, calming, and so personal.',
    },
    {
      author: 'Naomi T.',
      rating: 5,
      timeAgo: '2 months ago',
      text:
        'After years of trying drugstore acne products, the prescription program finally cleared my skin. Imani checked in every step. My confidence is finally back.',
    },
    {
      author: 'Kayla P.',
      rating: 5,
      timeAgo: '3 months ago',
      text:
        'The Glow Drip before my wedding day was a game changer. Hydrated, awake, photo-ready. The whole experience felt like luxury self-care.',
    },
    {
      author: 'Devon S.',
      rating: 5,
      timeAgo: '3 months ago',
      text:
        'King Energy IV + men’s facial = the move. Felt sharper for days. Imani actually explains the why, which I appreciate as a guy new to all of this.',
    },
  ],
};
