import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="py-16 font-serif text-4xl text-gray-900 font-bold text-col">
      Contact
    </h1>
    <ContactForm />
  </Layout>
)

export default ContactPage
