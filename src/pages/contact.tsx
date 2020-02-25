import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <main>
      <h1>Contact</h1>
      <ContactForm />
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export default ContactPage
