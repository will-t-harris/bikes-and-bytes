import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="text-col">Contact</h1>
    <ContactForm />
    <Link className="text-col" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default ContactPage
