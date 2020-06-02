import React from "react"
import { Link, graphql } from "gatsby"

import Typewriter from "../components/TypeWriter"
import SEO from "../components/SEO"

interface Props {
  data: {
    sitePage: {
      path: string
    }
  }
}

const IndexPage = ({ data }: Props) => {
  // Path to current page for SEO component
  const pathname = data.sitePage.path

  return (
    <>
      <SEO title="Home" pathname={pathname} />
      <article className="lg:grid lg:grid-cols-4 pt-20">
        <h1 className="mx-8 lg:mx-0 lg:col-start-2 lg:col-end-4 font-roboto-slab text-5xl font-bold">
          <Typewriter />
        </h1>
        <div className="flex flex-col mx-8 mt-10 lg:mx-0 lg:grid lg:col-start-2 lg:col-span-2">
          <p className="font-open-sans font-semibold text-lg w-full opacity-87">
            I'm a developer currently living in San Francisco. This website is
            intended as a place to collect my thoughts about programming,
            technology, and my growing quiver of bicycles. 🙂
          </p>
          <p className="mt-10 opacity-87 font-open-sans font-semibold text-lg w-full">
            I'm interested in open source software, online privacy,
            cryptography, and security.
          </p>
          <p className="mt-10 opacity-87 font-open-sans font-semibold text-lg w-full">
            I'm passionate about bikes - I think they make the world a better
            place. I'm happiest bumping along on a dirt road on a sunny day in
            the middle of nowhere carrying all that I need on my bike.
          </p>
        </div>
      </article>
      <div
        className="flex bg-bodyBackground text-gray-200 rounded-lg mx-auto mt-20 shadow-2xl border-4 w-64 h-16 hover:text-gray-200 hover:border-accent transition-colors duration-500"
        role="button"
        tabIndex={0}
      >
        <Link
          to="/bytes"
          className="font-extrabold hover:text-accent transition-colors duration-300 pt-4 pl-10 w-64 h-16"
        >
          LATEST BLOG POSTS
        </Link>
      </div>
      <div className="opacity-87 flex flex-col mx-8 mt-20 pb-20 lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-3">
        <p className="opacity-87 py-4 font-open-sans text-lg text-white font-semibold lg:col-start-2">
          Want to work together?
        </p>
        <p className="opacity-87 py-4 font-open-sans text-lg text-white font-semibold lg:col-start-2">
          Got an awesome project in mind?
        </p>
        <p className="opacity-87 py-4 font-open-sans text-lg text-white font-semibold lg:col-start-2">
          Contact me at
          <em className="text-primary font-extrabold">
            {" "}
            will@bikesandbytes.net
          </em>
        </p>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    sitePage(component: { regex: "/index/" }, id: { eq: "SitePage /" }) {
      path
    }
  }
`
