import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <>
      <SEO title={title} />
      <div className="grid grid-cols-4">
        <h1 className="pt-16 col-start-2 col-span-2 text-2xl font-semibold">
          {title}
        </h1>
        <div
          className="my-10 col-start-2 col-span-2 leading-8"
          dangerouslySetInnerHTML={{ __html: html }}
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
