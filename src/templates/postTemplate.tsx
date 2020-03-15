import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Post = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <div className="grid grid-cols-4">
        <h1 className="pt-16 col-start-2 col-span-2">
          {post.frontmatter.title}
        </h1>
        <div
          className="my-10 col-start-2 col-span-2"
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
