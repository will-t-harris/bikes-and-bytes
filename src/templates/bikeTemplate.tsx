import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

// define component for displaying a single bike
const Bike = ({ data }) => (
  <>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <h1 className="text-center">{data.markdownRemark.frontmatter.title}</h1>
    <div className="mx-auto max-w-xl">
      <Image
        fixed={data.markdownRemark.frontmatter.bikeImage.childImageSharp.fixed}
      />
    </div>
    <p className="text-center">{data.markdownRemark.frontmatter.description}</p>
    <Link to="/" style={{ display: "block" }}>
      Return to homepage
    </Link>
    <Link to="/bike" style={{ display: "block" }}>
      Return to bikes
    </Link>
  </>
)

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
