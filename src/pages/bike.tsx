import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const BikesPage = () => (
  <>
    <SEO title="Bikes" />
    <h1 className="py-16 font-serif text-4xl text-gray-900 font-bold text-col">
      Bikes
    </h1>
    <p className="text-col">Welcome to the bikes page</p>
    <div className="text-col">
      <Link
        to="/bike/long-haul-trucker"
        className="px-4 ml-10 text-green-800 hover:text-green-500 hover:underline"
      >
        Long Haul Trucker
      </Link>
      <Link
        to="/bike/krampus"
        className="px-4 text-red-800 hover:text-red-500 hover:underline"
      >
        Krampus
      </Link>
      <Link
        to="/bike/unit"
        className="px-4 text-purple-700 hover:text-purple-500 hover:underline"
      >
        Unit
      </Link>
    </div>
  </>
)

export default BikesPage
