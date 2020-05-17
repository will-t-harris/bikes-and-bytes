import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/SEO"

interface Props {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
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
  const pathname = markdownRemark.frontmatter.path
  const excerpt = markdownRemark.excerpt

  return (
    <>
      <SEO title={title} pathname={pathname} description={excerpt} />
      <div className="grid grid-cols-4">
        <h1 className="mt-12 mb-6 col-start-2 col-span-2 text-2xl font-black">
          {title}
        </h1>
        <hr className="col-start-2 col-span-2 border-2 border-pink-600 rounded-sm" />
        <div className="col-start-2 mt-4">
          <Link
            to="/"
            className="mr-3 font-semibold opacity-75 hover:underline hover:text-pink-600 transition ease-in-out duration-75"
          >
            Home
          </Link>
          <Link
            to="/bytes"
            className="font-semibold opacity-75 hover:underline hover:text-pink-600 transition ease-in-out duration-75"
          >
            Other Posts
          </Link>
        </div>

        <div
          className="markdown mt-4 col-start-2 col-span-2 leading-8"
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
      excerpt(pruneLength: 160)
      frontmatter {
        path
        title
      }
    }
  }
`
