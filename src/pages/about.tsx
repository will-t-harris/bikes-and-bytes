import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="text-2xl text-col">About Me</h1>
    <p className="text-col">
      I'm a web developer currently living in San Francisco.{" "}
    </p>
    <p className="text-col">
      I'm interested in open source software, online privacy, and web security.
    </p>
    <p className="text-col">
      I'm passionate about bikes--I think they make the world a better place.
      I'm happiest bumping along on a dirt road on a sunny day in the middle of
      nowhere carrying all that I need on my bike.
    </p>
  </Layout>
)

export default AboutPage
