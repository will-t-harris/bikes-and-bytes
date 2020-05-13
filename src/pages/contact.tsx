import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

interface Props {
  data: {
    sitePage: {
      path: string
    }
  }
}

const ContactPage = ({ data }: Props) => {
  const pathname = data.sitePage.path

  return (
    <>
      <SEO title="Contact" pathname={pathname} />
      <h1 className="py-16 font-serif text-4xl text-gray-900 font-bold text-col">
        Get in touch!
      </h1>
      <p className="py-4 font-serif text-xl text-gray-900 font-bold text-col">
        Want to work together? Got an awesome project in mind? Drop me a line
        through the contact form below!
      </p>
      <ContactForm />
    </>
  )
}

export default ContactPage

export const query = graphql`
  {
    sitePage(
      component: { regex: "/contact/" }
      id: { eq: "SitePage /contact/" }
    ) {
      path
    }
  }
`
