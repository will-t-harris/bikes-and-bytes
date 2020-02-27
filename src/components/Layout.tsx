/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import "../../src/index.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1 bg-texture text-gray-800 text-center min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
