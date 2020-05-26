import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string
  lang?: string
  meta?: []
  title: string
  pathname: string
}

function SEO({ description, lang, meta, title, pathname }: Props) {
  const { site, favicon16, favicon32 } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        favicon16: file(
          sourceInstanceName: { eq: "assets" }
          childImageSharp: {
            fixed: { originalName: { regex: "/favicon-16x16/" } }
          }
        ) {
          childImageSharp {
            fixed(width: 16) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        favicon32: file(
          sourceInstanceName: { eq: "assets" }
          childImageSharp: {
            fixed: { originalName: { regex: "/favicon-32x32/" } }
          }
        ) {
          childImageSharp {
            fixed(width: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const icon16 = favicon16.childImageSharp.fixed.src
  const icon32 = favicon32.childImageSharp.fixed.src

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{ className: "flex flex-col min-h-full" }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
              {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: `${icon16}`,
              },
              {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: `${icon32}`,
              },
            ]
          : [
              {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: `${icon16}`,
              },
              {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: `${icon32}`,
              },
            ]
      }
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
