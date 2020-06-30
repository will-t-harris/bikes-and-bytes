import React, { useState, useEffect } from "react"

import { Header, Footer } from "./index"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(getInitialMode())

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage
    const savedMode = JSON.parse(localStorage.getItem("dark") || "true")
    const userPrefersDark = getPrefColorScheme()
    console.log(userPrefersDark)
    if (userPrefersDark) {
      return true
    } else if (isReturningUser) {
      return savedMode
    } else {
      return false
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return

    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  const darkModeClasses = darkMode ? "dark-mode" : "light-mode"

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={`${darkModeClasses} flex-1 min-h-screen`}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
