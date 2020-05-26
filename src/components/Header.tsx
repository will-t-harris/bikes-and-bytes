import React from "react"
import { Link } from "gatsby"

import HeaderButton from "./HeaderButton"
import BikeIcon from "./icons/BikeIcon"
import CodeIcon from "./icons/CodeIcon"

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-navBackground px-6 site-linear-gradient">
      <div className="flex mx-auto py-4 items-center flex-shrink-0 lg:mr-6 lg:ml-0">
        <Link to="/" className="lg:ml-6 lg:mr-6 flex self-center flex-row">
          <BikeIcon />
          <CodeIcon />
        </Link>
      </div>
      <div className="w-full flex lg:w-auto">
        <HeaderButton
          buttonTitle="Bytes"
          buttonSlug="/bytes"
          buttonClass="header-btn inline-block lg:flex lg:mt-0 lg:mr-12"
        />
        <HeaderButton
          buttonTitle="Bikes"
          buttonSlug="/bike"
          buttonClass="header-btn inline-block lg:flex lg:mt-0 lg:mr-12"
        />
      </div>
    </nav>
  )
}

export default Header
