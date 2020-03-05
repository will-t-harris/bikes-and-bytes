import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BytesPage = ({ data }) => (
  <Layout>
    <SEO title="Bytes" />
    <div className="flex flex-col">
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
                {post.node.frontmatter.title} -- {post.node.frontmatter.date}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  </Layout>
)

export const bytesIndexQuery = graphql`
  query BlogPostsIndexQuery {
    allMarkdownRemark(limit: 10) {
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
