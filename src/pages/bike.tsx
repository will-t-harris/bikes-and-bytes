import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BikesPage = () => (
  <Layout>
    <SEO title="Bikes" />
    <h1 className="text-col">Bikes</h1>
    <p className="text-col">Welcome to the bikes page</p>
    <div className="text-col">
      <Link
        to="/bike/lht"
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
  </Layout>
)

export default BikesPage
