import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <main>
      <h1>Contact</h1>
      <p>Welcome to the contact page</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export default ContactPage
