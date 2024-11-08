const config = require('./config');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-meta-redirect',
      options: {
        redirects: require('./gatsby-node').redirects,
      },
    },
    {
      resolve: 'gatsby-theme-academic',
      options: {
        contentPath: 'content',
        googleAnalyticTrackingId: 'UA-XXXXXXXXX-X',
        defaultLanguage: 'en',
        pages: config.pages,
        tagColors: config.tagColors,
        author: config.author,
        icon: './static/logo.png',
      },
    },
  ],
  siteMetadata: config,
  pathPrefix: config.pathPrefix,
};
