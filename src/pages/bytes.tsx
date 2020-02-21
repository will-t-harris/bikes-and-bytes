import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BytesPage = ({ data }) => (
  <Layout>
    <SEO title="Bytes" />
    <main>
      <h1>Bytes</h1>
      <p>Welcome to the Bytes page</p>
      <h2>Index</h2>
      {data.allMarkdownRemark.edges.map(post => (
        <Link
          key={post.node.id}
          to={post.node.frontmatter.path}
          style={{ display: "block" }}
        >
          {post.node.frontmatter.title}
        </Link>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export const bytesIndexQuery = graphql`
  query BlogPostsIndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default BytesPage
