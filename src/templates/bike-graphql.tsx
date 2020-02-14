import React from "react"
import { graphql } from "gatsby"
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
    <div>
      <h1>{bike.title}</h1>
      <Image
        fluid={bike.image.childImageSharp.fluid}
        alt={bike.title}
        style={{ float: "left", marginRight: "1rem", width: 150 }}
      />
      <div dangerouslySetInnerHTML={{ __html: bike.description }}></div>
    </div>
  )
}

export default Bike
