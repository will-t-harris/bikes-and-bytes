import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { SEO } from "../components"

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
        path: string
        bikeImage: {
          childImageSharp: any
        }
      }
    }
  }
}

// define component for displaying a single bike
const Bike = ({ data }: Props) => {
  const {
    markdownRemark: { frontmatter },
  } = data
  const title = frontmatter.title
  const pathname = `/${frontmatter.path}`

  return (
    <>
      <SEO title={title} pathname={pathname} />
      <div className="flex flex-col lg:grid lg:grid-cols-4">
        <h1 className="my-4 col-start-2 col-span-2 text-center text-4xl">
          {title}
        </h1>
        <div
          className="markdown mx-8 lg:mx-0 col-start-2 col-span-2 leading-8 opacity-87 text-lg"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </>
  )
}

export default Bike

export const query = graphql`
  query bikeQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        slug
        bikeImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
