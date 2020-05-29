require("ts-node").register({ files: true })

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            path
          }
        }
      }
    }
  `)

  const bikeTemplate = require.resolve("./src/templates/bikeTemplate.tsx")
  const postTemplate = require.resolve("./src/templates/postTemplate.tsx")

  if (data.error) {
    console.error("Something went wrong")
  }

  data.allMarkdownRemark.nodes.forEach(node => {
    if (node.frontmatter.slug) {
      createPage({
        path: `/bikes/${node.frontmatter.slug}`,
        component: bikeTemplate,
        context: { slug: node.frontmatter.slug },
      })
    }
  })

  data.allMarkdownRemark.nodes.forEach(node => {
    if (node.frontmatter.path) {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    }
  })
}
