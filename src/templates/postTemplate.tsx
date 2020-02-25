import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"

const Post = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/bytes" style={{ display: "block" }}>
          Back to blog posts
        </Link>
        <Link to="/">Return to home page</Link>
      </div>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
