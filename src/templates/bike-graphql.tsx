import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

// define query for a single bike
export const query = graphql`
  query($slug: String!) {
    bikesJson(slug: { eq: $slug }) {
      title
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// define component for displaying a single bike
const Bike = ({ data }) => {
  const bike = data.bikesJson

  return (
    <>
      <div className="flex">
        <h1 className="text-center">{bike.title}</h1>
        <Image
          fluid={bike.image.childImageSharp.fluid}
          alt={bike.title}
          style={{ marginRight: "1rem", width: 500 }}
        />
        <p>{bike.description}</p>
      </div>
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
