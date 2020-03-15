import { Link } from "gatsby"
import React from "react"
import HeaderButton from "./HeaderButton"
import BikeIcon from "./icons/BikeIcon"
import CodeIcon from "./icons/CodeIcon"

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-blueGray-900">
        <Link to="/" className="ml-6 flex self-center flex-row mr-6">
          <BikeIcon />
          <CodeIcon />
        </Link>
        <HeaderButton
          buttonTitle="Bytes"
          buttonSlug="bytes"
          buttonClass="header-btn"
        />
        <HeaderButton
          buttonTitle="Bikes"
          buttonSlug="bike"
          buttonClass="header-btn"
        />
        <HeaderButton
          buttonTitle="About"
          buttonSlug="about"
          buttonClass="header-btn"
        />
        <HeaderButton
          buttonTitle="Contact"
          buttonSlug="contact"
          buttonClass="header-btn"
        />
      </div>
    </header>
  )
}

export default Header
