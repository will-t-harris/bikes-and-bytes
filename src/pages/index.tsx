import React from "react"
import Typewriter from "../components/TypeWriter"
import SEO from "../components/SEO"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="grid grid-cols-4 py-10">
      <h1 className="col-start-2 font-serif text-4xl text-gray-900 font-bold">
        <Typewriter />
      </h1>
      <p className="mt-10 col-start-2 col-span-2">
        I'm a developer currently living in San Francisco.{" "}
      </p>
      <p className="mt-10 col-start-2 col-span-2">
        I'm interested in open source software, online privacy, cryptography,
        and web security.
      </p>
      <p className="mt-10 col-start-2 col-span-2">
        I'm passionate about bikes--I think they make the world a better place.
        I'm happiest bumping along on a dirt road on a sunny day in the middle
        of nowhere carrying all that I need on my bike.
      </p>
    </div>
  </>
)

export default IndexPage
