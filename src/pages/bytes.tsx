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
  }
}

const BytesPage = ({ data }: Props) => (
  <>
    <SEO title="Bytes" />
    <div className="flex flex-col text-col">
      <h1 className="py-16 font-serif text-4xl text-gray-900 font-bold">
        Bytes
      </h1>
      <ul className="list-disc">
        {data &&
          data.allMarkdownRemark.nodes.map((post: any) => (
            <li key={post.node.id} className="mb-8">
              <Link
                to={post.node.frontmatter.path}
                className="text-2xl font-semibold hover:underline"
              >
                {post.node.frontmatter.title}
              </Link>
              <p>
                <em>{post.node.frontmatter.date}</em>
              </p>
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
      nodes {
        id
        frontmatter {
          title
          path
          date(formatString: "MMM Do YYYY")
        }
      }
    }
  }
`
