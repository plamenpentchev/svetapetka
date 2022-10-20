const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: `Webseite und Webpräsenz der bulgarischen orthodoxen Kirche in Mannheim`,
    siteUrl: `https://svetapetka-mannheim.de`,
    keywords:`sveta, petka, mannheim, sveta petka mannheim, tarnovska, bulgarische, kirche, mannheim, света, петка, търновска, света петка търновска, манхайм, българска, църква, българска църква манхайм,`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
