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
      <div className="flex flex-col lg:grid lg:grid-cols-4">
        <h1 className="mx-auto py-6 text-4xl font-black lg:py-12 lg:col-start-2 lg:col-span-2">
          {title}
        </h1>
        <hr className="mb-6 col-start-2 col-span-2 border-2 border-accent rounded-sm" />
        <div className="mx-auto lg:mx-0 mb-4 lg:col-start-2">
          <Link
            to="/"
            className="mr-3 font-semibold opacity-75 hover:underline hover:text-accent transition ease-in-out duration-75"
          >
            Home
          </Link>
          <Link
            to="/bytes"
            className="font-semibold opacity-75 hover:underline hover:text-accent transition ease-in-out duration-75"
          >
            Other Posts
          </Link>
        </div>

        <div
          className="markdown mx-8 lg:mx-0 col-start-2 col-span-2 leading-8 content-text text-lg"
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
