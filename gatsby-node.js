/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

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

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const postTemplate = path.resolve("./src/templates/post.tsx")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
