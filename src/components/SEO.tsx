import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon16 from "../../data/assets/favicon-16x16.png"
import favicon32 from "../../data/assets/favicon-32x32.png"

interface Props {
  description?: string
  lang?: string
  meta?: []
  title: string
}

function SEO({ description, lang, meta, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{ className: "flex flex-col min-h-screen" }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${favicon32}`,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  )
}

export default SEO
