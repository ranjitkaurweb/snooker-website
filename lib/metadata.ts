/**
 * SEO and Metadata Utilities
 * Provides structured data and metadata generation functions
 */

/**
 * Generates organization structured data schema for SEO
 * @returns JSON-LD schema object for SportsOrganization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: 'Jalandhar District Cue Sports Association',
    url: 'https://jalandharcuesports.org',
    logo: 'https://jalandharcuesports.org/images/logo.png',
    description: 'Promoting excellence in cue sports including snooker, billiards, and pool in Jalandhar District',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jalandhar',
      addressRegion: 'Punjab',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://facebook.com/jalandharcuesports',
      'https://twitter.com/jalandharcuesports'
    ]
  }
}
