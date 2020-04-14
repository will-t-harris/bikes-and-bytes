require("ts-node").register({ files: true })

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allBikesJson {
        edges {
          node {
            slug
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `)

  const bikeTemplate = require.resolve("./src/templates/bikeTemplate.tsx")
  const postTemplate = require.resolve("./src/templates/postTemplate.tsx")

  if (result.error) {
    console.error("Something went wrong")
  }

  result.data.allBikesJson.edges.forEach(edge => {
    const bike = edge.node

    createPage({
      path: `/bike/${bike.slug}/`,
      component: bikeTemplate,
      context: {
        slug: bike.slug,
      },
    })
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    })
  })
}
