require("ts-node").register({ files: true })

module.exports = {
  siteMetadata: {
    title: `Bikes & Bytes`,
    description: `Will Harris' personal website and blog. A corner of the internet to collect my thoughts about programming, technology, and bicycles.`,
    author: `Will Harris`,
    siteUrl: `https://www.bikesandbytes.net`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/Layout.tsx"),
      },
    },
    // Sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/bikes/`,
        name: `bikes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/blog/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/assets`,
        name: `assets`,
      },
    },
  ],
}
