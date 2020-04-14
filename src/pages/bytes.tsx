import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"

const BytesPage = ({ data }) => (
  <>
    <SEO title="Bytes" />
    <div className="flex flex-col text-col">
      <h1 className="py-16 font-serif text-4xl text-gray-900 font-bold">
        Bytes
      </h1>
      <ul className="list-disc">
        {data &&
          data.allMarkdownRemark.edges.map(post => (
            <li>
              <Link
                key={post.node.id}
                to={post.node.frontmatter.path}
                className="text-2xl hover:underline"
              >
                {post.node.frontmatter.title} - {post.node.frontmatter.date}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  </>
)

export const bytesIndexQuery = graphql`
  query BlogPostsIndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default BytesPage
