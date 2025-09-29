/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bpfa.lk',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/classes'),
    await config.transform(config, '/trainers'),
    await config.transform(config, '/pricing'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/join'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/private/']
      }
    ],
    additionalSitemaps: [
      'https://bpfa.lk/sitemap.xml',
    ],
  },
}