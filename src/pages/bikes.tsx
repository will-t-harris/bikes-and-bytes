import React from "react"
import { Link, graphql } from "gatsby"

import { SEO } from "../components"

interface Props {
  data: {
    sitePage: {
      path: string
    }
  }
}

const BikesPage = ({ data }: Props) => {
  const pathname = data.sitePage.path

  return (
    <>
      <SEO title="Bikes" pathname={pathname} />
      <h1 className="py-16 font-serif text-4xl text-white font-bold mx-auto w-1/2">
        Bikes
      </h1>
      <div className="flex flex-col mx-auto w-1/2">
        <Link
          to="/bikes/long-haul-trucker"
          className="px-4 text-green-800 hover:text-green-500 hover:underline"
        >
          2012 Surly Long Haul Trucker
        </Link>
        <Link
          to="/bikes/krampus"
          className="px-4 text-red-800 hover:text-red-500 hover:underline"
        >
          2018 Surly Krampus
        </Link>
        <Link
          to="/bikes/unit"
          className="px-4 text-purple-700 hover:text-purple-500 hover:underline"
        >
          2015 Kona Unit
        </Link>
      </div>
    </>
  )
}

export default BikesPage

export const query = graphql`
  query BikePageQuery {
    sitePage(component: { regex: "/bikes/" }, id: { eq: "SitePage /bikes/" }) {
      path
    }
  }
`
