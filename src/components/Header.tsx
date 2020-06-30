import React, { Dispatch, SetStateAction } from "react"
import { Link } from "gatsby"

import { HeaderButton } from "./"
import { BikeIcon, CodeIcon } from "./icons"

interface Props {
  setDarkMode: Dispatch<SetStateAction<boolean>>
  darkMode: boolean
}

const Header = ({ darkMode, setDarkMode }: Props) => {
  const darkModeClasses = darkMode ? "dark-mode" : "light-mode"

  return (
    <header
      className={`${darkModeClasses} flex items-center justify-between flex-wrap px-6 site-linear-gradient`}
    >
      <nav className="flex mx-auto py-4 items-center flex-shrink-0 lg:mr-6 lg:ml-0">
        <Link to="/" className="lg:ml-6 lg:mr-6 flex self-center flex-row">
          <BikeIcon iconTitle="bikeIcon" />
          <CodeIcon iconTitle="codeIcon" />
        </Link>
      </nav>
      <nav>
        <div>
          <span
            className={`${
              darkMode ? "text-pink-400" : "text-green-400"
            } text-2xl`}
          >
            ☀️
          </span>
          <span>
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              type="checkbox"
              name="toggleCheckbox"
              id="toggleCheckbox"
            />
            <label htmlFor="toggleCheckbox"></label>
          </span>
          <span className="text-yellow-400 text-xl">🌙</span>
        </div>
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
