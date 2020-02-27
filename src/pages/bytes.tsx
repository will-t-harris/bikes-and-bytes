import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BytesPage = ({ data }) => (
  <Layout>
    <SEO title="Bytes" />
    <h1>Index</h1>
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
