require("ts-node").register({ files: true })

module.exports = {
  siteMetadata: {
    title: `Bikes & Bytes`,
    description: `Will Harris' personal blog. A corner of the internet to collect my thoughts about programming, technology, and bicycles.`,
    author: `Will Harris`,
    siteUrl: `https://www.bikesandbytes.net`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164726645-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/Layout.tsx"),
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        ignore: ["prismjs/themes/prism-okaidia.css"],
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
