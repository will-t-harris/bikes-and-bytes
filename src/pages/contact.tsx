import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="py-16 font-serif text-4xl text-gray-900 font-bold text-col">
      Get in touch!
    </h1>
    <p className="py-4 font-serif text-xl text-gray-900 font-bold text-col">
      Want to work together? Got an awesome project in mind? Drop me a line
      through the contact form below!
    </p>
    <ContactForm />
  </Layout>
)

export default ContactPage
