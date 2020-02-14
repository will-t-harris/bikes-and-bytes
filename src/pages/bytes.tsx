import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BytesPage = () => (
  <Layout>
    <SEO title="Bytes" />
    <main>
      <h1>Bytes</h1>
      <p>Welcome to the Bytes page</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export default BytesPage
