/**
 * Single source of truth for contact details and shared links.
 * Import this in BaseLayout (top bar + footer), index.astro, 404.astro, About,
 * Psychotherapy and any schema (LocalBusiness) so every page shows the same facts.
 *
 * Change a value here once, rebuild, and it updates everywhere that imports it.
 */
export const site = {
  name: 'Nepal Hypnosis',

  // Contact
  phoneDisplay: '+977 9841459618',
  phoneTel: '+9779841459618', // use as href={`tel:${site.phoneTel}`}
  whatsappUrl: 'https://wa.me/9779841459618',
  emails: {
    primary: 'info@nepalhypnosis.com',
    secondary: 'mailhypnosis@gmail.com',
  },

  // Location and visiting
  address: {
    street: 'Tangal',
    locality: 'Kathmandu-5',
    country: 'Nepal',
    display: 'Tangal, Kathmandu-5, Nepal',
  },
  visitPolicy: 'By appointment only',
  hours: 'Sun–Fri, 10:00 AM – 5:00 PM',

  // Booking
  portalUrl: 'https://portal.nepalhypnosis.com/form/consultation-request',

  // Safety: confirm this number is current before relying on it
  helpline: '1166',

  // YouTube (channel id is UC..., its uploads playlist is the same id starting UU...)
  youtubeChannelUrl: 'https://www.youtube.com/channel/UCifKne_f3_7iydVqF91fkQA',
  youtubeUploadsPlaylistId: 'UUifKne_f3_7iydVqF91fkQA',
} as const;