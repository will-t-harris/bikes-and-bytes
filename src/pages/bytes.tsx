import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/SEO"

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: [
        {
          title: string
          path: string
          date: string
        }
      ]
    }
    sitePage: {
      path: string
    }
  }
}

const BytesPage = ({ data }: Props) => {
  const pathname = data.sitePage.path

  return (
    <>
      <SEO title="Bytes" pathname={pathname} />
      <div className="flex flex-col mx-auto w-1/2">
        <hr className="my-20 border-2 border-secondary" />
        <ul className="list-none">
          {data &&
            data.allMarkdownRemark.nodes.map((post: any) => (
              <li key={post.id} className="mb-8">
                <Link
                  to={post.frontmatter.path}
                  className="text-2xl font-semibold hover:underline hover:text-accent transition ease-in-out duration-75"
                >
                  {post.frontmatter.title}
                </Link>
                <p>
                  <em>{post.frontmatter.date}</em>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default BytesPage

export const bytesIndexQuery = graphql`
  query BlogPostsIndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { path: { regex: "/[/]/" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          path
          date(formatString: "MMM Do YYYY")
        }
      }
    }
    sitePage(component: { regex: "/bytes/" }, id: { eq: "SitePage /bytes/" }) {
      path
    }
  }
`
