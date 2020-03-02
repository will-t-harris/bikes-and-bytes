require("ts-node").register({ files: true })

module.exports = {
  siteMetadata: {
    title: `Bikes & Bytes`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Will Harris`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
  ],
}
