import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderButton from "./HeaderButton"
import BikeIcon from "./icons/BikeIcon"
import CodeIcon from "./icons/CodeIcon"

const Header = ({ siteTitle }) => {
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
          buttonClass="btn"
        />
        <HeaderButton buttonTitle="Bikes" buttonSlug="bike" buttonClass="btn" />
        <HeaderButton
          buttonTitle="Routes"
          buttonSlug="routes"
          buttonClass="btn"
        />
        <HeaderButton
          buttonTitle="About"
          buttonSlug="about"
          buttonClass="btn"
        />
        <HeaderButton
          buttonTitle="Contact"
          buttonSlug="contact"
          buttonClass="btn"
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
