/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allBikesJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error("Something went wrong")
    return
  }

  results.data.allBikesJson.edges.forEach(edge => {
    const bike = edge.node

    createPage({
      path: `/bike/${bike.slug}/`,
      component: require.resolve("./src/templates/bike-graphql.tsx"),
      context: {
        slug: bike.slug,
      },
    })
  })
}
