import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        bikeImage: {
          childImageSharp: any
        }
      }
    }
  }
}

// define component for displaying a single bike
const Bike = ({ data }: Props) => {
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const description = markdownRemark.frontmatter.description
  const bikeImage = markdownRemark.frontmatter.bikeImage.childImageSharp.fixed
  return (
    <>
      <SEO title={title} />
      <h1 className="text-center">{title}</h1>
      <div className="mx-auto max-w-xl">
        <Image fixed={bikeImage} />
      </div>
      <p className="text-center">{description}</p>
      <Link to="/" style={{ display: "block" }}>
        Return to homepage
      </Link>
      <Link to="/bike" style={{ display: "block" }}>
        Return to bikes
      </Link>
    </>
  )
}

export default Bike

export const query = graphql`
  query bikeQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
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
