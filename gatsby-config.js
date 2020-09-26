require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    defaultTitle: `gatsby-MUI-starter`,
    titleTemplate: "%s · gatsby-MUI-starter",
    defaultDescription: `gatsby-MUI-starter description goes here`,
    lang: `en`,
    siteUrl: "https://github.com/andersgee/gatsbystarter",
    defaultImage: "andyfx",
    author: "Anders Gustafsson",
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
};
