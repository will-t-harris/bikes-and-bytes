import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"

interface Props {
  data: any
}

const NotFoundPage = ({ data }: Props) => {
  const path = data.sitePage.path

  return (
    <>
      <SEO title="404: Not found" pathname={`${path}`} />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage

export const query = graphql`
  query fourOhFour {
    sitePage(component: { regex: "/404/" }, id: { eq: "SitePage /404/" }) {
      path
    }
  }
`
