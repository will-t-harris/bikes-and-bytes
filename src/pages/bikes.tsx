import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const BikesPage = () => (
  <Layout>
    <SEO title="Bikes" />
    <main>
      <h1>Bikes</h1>
      <p>Welcome to the bikes page</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export default BikesPage
