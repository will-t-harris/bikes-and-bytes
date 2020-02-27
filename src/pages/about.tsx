import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="text-xl">About Me</h1>
    <p>I'm a web developer currently living in San Francisco. </p>
    <p>
      I'm interested in open source software, online privacy, and web security.
    </p>
  </Layout>
)

export default AboutPage
