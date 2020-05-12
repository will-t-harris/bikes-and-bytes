import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        path: string
        title: string
      }
    }
  }
}

const Post = ({ data }: Props) => {
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <>
      <SEO title={title} />
      <div className="grid grid-cols-4">
        <h1 className="mt-12 mb-8 col-start-2 col-span-2 text-2xl font-black">
          {title}
        </h1>
        <hr className="col-start-2 col-span-2 border-2 border-pink-600 rounded-sm" />

        <Link
          to="/"
          className="col-start-2 mt-6 font-semibold hover:underline hover:text-pink-600 transition ease-in-out duration-75"
        >
          Home
        </Link>
        <Link
          to="/bytes"
          className="col-start-2 mt-3 font-semibold hover:underline hover:text-pink-600 transition ease-in-out duration-75"
        >
          Other Posts
        </Link>

        <div
          className="markdown mt-6 col-start-2 col-span-2 leading-8"
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
