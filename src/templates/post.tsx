import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

const Post = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <Link to="/bytes" style={{ display: "block" }}>
        Back to blog posts
      </Link>
      <Link to="/">Return to home page</Link>
    </div>
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
