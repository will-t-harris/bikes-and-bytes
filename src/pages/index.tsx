import React, { useRef } from "react"
import { Link, graphql } from "gatsby"

import Typewriter from "../components/TypeWriter"
import SEO from "../components/SEO"

interface Props {
  data: {
    allFile: {
      nodes: [
        {
          childMarkdownRemark: {
            frontmatter: {
              path: string
            }
          }
        }
      ]
    }
  }
}

const IndexPage = ({ data }: Props) => {
  const {
    allFile: { nodes },
  } = data

  const {
    childMarkdownRemark: {
      frontmatter: { path },
    },
  } = nodes[0]

  return (
    <>
      <SEO title="Home" />
      <article className="grid grid-cols-4 py-10 mb-20">
        <h1 className="col-start-2 col-end-4 font-mono text-4xl text-blueGray-900 font-bold">
          <Typewriter />
        </h1>
        <p className="about-text">
          I'm a developer currently living in San Francisco. This website is
          intended as a place to collect my thoughts about programming,
          technology, and my growing quiver of bicycles. 🙂
        </p>
        <p className="about-text">
          I'm interested in open source software, online privacy, cryptography,
          and security.
        </p>
        <p className="about-text">
          I'm passionate about bikes--I think they make the world a better
          place. I'm happiest bumping along on a dirt road on a sunny day in the
          middle of nowhere carrying all that I need on my bike.
        </p>
      </article>
      <div className="flex bg-blueGray-900 text-gray-200 rounded-lg mx-auto shadow-2xl border-4 border-pink-600 w-64 h-16 hover:text-gray-200 hover:bg-blueGray-900 transition-colors duration-500">
        <Link
          to={path}
          className="font-extrabold hover:text-pink-400 transition-colors duration-300 pt-4 pl-10 w-64 h-16"
        >
          LATEST BLOG POST
        </Link>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query latestPostQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "blog" } }
      limit: 1
      sort: { fields: birthTime, order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            path
          }
        }
      }
    }
  }
`
