import React from "react"
import { Link } from "gatsby"

import { HeaderButton } from "./"
import { BikeIcon, CodeIcon } from "./icons"

const Header = () => {
  return (
    <header className="flex items-center justify-between flex-wrap bg-navBackground px-6 site-linear-gradient">
      <nav className="flex mx-auto py-4 items-center flex-shrink-0 lg:mr-6 lg:ml-0">
        <Link to="/" className="lg:ml-6 lg:mr-6 flex self-center flex-row">
          <BikeIcon iconTitle="bikeIcon" />
          <CodeIcon iconTitle="codeIcon" />
        </Link>
      </nav>
      <nav className="w-full flex lg:w-auto">
        <HeaderButton
          buttonTitle="Bytes"
          buttonSlug="/bytes"
          buttonClass="header-btn inline-block lg:flex lg:mt-0 lg:mr-12"
        />
        <HeaderButton
          buttonTitle="Bikes"
          buttonSlug="/bikes"
          buttonClass="header-btn inline-block lg:flex lg:mt-0 lg:mr-12"
        />
        <HeaderButton
          buttonTitle="Projects"
          buttonSlug="/projects"
          buttonClass="header-btn inline-block lg:flex lg:mt-0 lg:mr-12"
        />
      </nav>
    </header>
  )
}

export default Header
