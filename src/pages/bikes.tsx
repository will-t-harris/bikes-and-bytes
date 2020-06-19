import React from "react"
import { Link, graphql } from "gatsby"
import Image, { FixedObject, FluidObject } from "gatsby-image"

import { SEO } from "../components"

interface Props {
  data: {
    sitePage: {
      path: string
    }
    long_haul_trucker: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    trek_990: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const BikesPage = ({ data }: Props) => {
  const pathname = data.sitePage.path
  return (
    <>
      <SEO title="Bikes" pathname={pathname} />
      <h1 className="py-16 font-roboto-slab text-center text-4xl text-white font-bold mx-auto w-1/2">
        My Bikes
      </h1>
      <section className="flex flex-col mx-auto pb-8 lg:pb-16 w-1/2 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:row-gap-16">
        <Link
          to="/bikes/surly-long-haul-trucker"
          className="px-4 my-auto mx-auto h-auto text-green-300 font-open-sans text-xl hover:text-green-600 hover:underline"
        >
          2012 Surly Long Haul Trucker
        </Link>
        <Link to="/bikes/surly-long-haul-trucker">
          <Image
            fluid={data.long_haul_trucker.childImageSharp.fluid}
            className="rounded-sm lg:h-full"
          />
        </Link>

        <Link
          to="/bikes/1995-trek-990"
          className="px-4 mt-8 lg:my-auto h-auto mx-auto text-orange-300 font-open-sans text-xl hover:text-orange-600 hover:underline"
        >
          1995 Trek 990
        </Link>
        <Link to="/bikes/1995-trek-990">
          <Image
            fluid={data.trek_990.childImageSharp.fluid}
            className="rounded-sm lg:h-full"
          />
        </Link>
      </section>
    </>
  )
}

export default BikesPage

export const query = graphql`
  query BikePageQuery {
    sitePage(component: { regex: "/bikes/" }, id: { eq: "SitePage /bikes/" }) {
      path
    }
    long_haul_trucker: file(
      childImageSharp: { original: { src: { regex: "/long-haul-trucker/" } } }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trek_990: file(
      childImageSharp: { original: { src: { regex: "/trek-990-troll-fork/" } } }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
