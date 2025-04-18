/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://newcrea.fr/',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: [
        '/not-found',
        '/mentions-legales-politique-confidentialite'
    ],
};
