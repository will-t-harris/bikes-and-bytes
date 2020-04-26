import React, { useState } from "react"
import { Link } from "gatsby"
import HeaderButton from "./HeaderButton"
import BikeIcon from "./icons/BikeIcon"
import CodeIcon from "./icons/CodeIcon"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blueGray-900 px-6 ">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/" className="ml-6 flex self-center flex-row mr-6">
          <BikeIcon />
          <CodeIcon />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-12 py-2 "
          onClick={toggleMenu}
          onBlur={() => {
            setTimeout(toggleMenu, 50)
          }}
        >
          <svg
            className="fill-current h-6 w-6 text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto`}
      >
        <HeaderButton
          buttonTitle="Bytes"
          buttonSlug="/bytes"
          buttonClass="header-btn inline-block lg:inline-block lg:mt-0"
        />
        <HeaderButton
          buttonTitle="Bikes"
          buttonSlug="/bike"
          buttonClass="header-btn lg:inline-block lg:mt-0"
        />
        <HeaderButton
          buttonTitle="Contact"
          buttonSlug="/contact"
          buttonClass="header-btn lg:inline-block lg:mt-0"
        />
      </div>
    </nav>
  )
}

export default Header
