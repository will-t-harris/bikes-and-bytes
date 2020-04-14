import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

// define component for displaying a single bike
const Bike = ({ data }) => {
  const bike = data.bikesJson

  return (
    <>
      <SEO title={bike.title} />
      <h1 className="text-center">{bike.title}</h1>
      <div className="mx-auto max-w-xl">
        <Image fluid={bike.image.childImageSharp.fluid} alt={bike.title} />
      </div>
      <p className="text-center">{bike.description}</p>
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

// define query for a single bike
export const query = graphql`
  query($slug: String!) {
    bikesJson(slug: { eq: $slug }) {
      title
      description
      image {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
