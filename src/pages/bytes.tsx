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
            <li key={post.node.id}>
              <Link
                to={post.node.frontmatter.path}
                className="text-2xl font-semibold hover:underline"
              >
                {post.node.frontmatter.title} - {post.node.frontmatter.date}
              </Link>
              <div
                className="italic text-lg"
                dangerouslySetInnerHTML={{
                  __html: post.node.excerpt,
                }}
              ></div>
            </li>
          ))}
      </ul>
    </div>
  </>
)

export default BytesPage

export const bytesIndexQuery = graphql`
  query BlogPostsIndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { path: { regex: "/[/]/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "MMM Do YYYY")
          }
          excerpt(truncate: true, pruneLength: 60, format: HTML)
        }
      }
    }
  }
`
