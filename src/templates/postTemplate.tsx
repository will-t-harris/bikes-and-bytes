import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Post = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <div className="">
        <h1 className="pt-16 text-col">{post.frontmatter.title}</h1>
        <div
          className="mt-10 text-col"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </>
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
