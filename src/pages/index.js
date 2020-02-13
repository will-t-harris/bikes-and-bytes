import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link className="mr-6 font-bold" to="/page-2/">
      Go to page 2
    </Link>
    <Link className="font-bold" to="/about">
      Go to about page
    </Link>
  </Layout>
)

export default IndexPage
