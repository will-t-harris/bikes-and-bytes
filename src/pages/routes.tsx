import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const RoutesPage = () => (
  <Layout>
    <SEO title="Routes" />
    <h1>Routes</h1>
    <p>Welcome to the routes page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RoutesPage
