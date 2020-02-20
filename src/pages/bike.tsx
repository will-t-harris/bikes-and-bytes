import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BikesPage = () => (
  <Layout>
    <SEO title="Bikes" />
    <main>
      <h1>Bikes</h1>
      <p>Welcome to the bikes page</p>
      <div className="">
        <Link
          to="/bike/lht"
          className="px-4 text-green-800 hover:text-green-400"
        >
          LHT
        </Link>
        <Link
          to="/bike/krampus"
          className="px-4 text-red-800 hover:text-red-400"
        >
          Krampus
        </Link>
        <Link
          to="/bike/unit"
          className="px-4 text-purple-700 hover:text-purple-400"
        >
          Unit
        </Link>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export default BikesPage
