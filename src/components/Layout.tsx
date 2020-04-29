import React from "react"

import Header from "./Header"
import "../../src/index.css"
import Footer from "./Footer"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-200 text-blueGray-800 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
