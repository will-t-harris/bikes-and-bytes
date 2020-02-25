import React from "react"
import TwitterIcon from "./icons/TwitterIcon"
import InstagramIcon from "./icons/InstagramIcon"
import GithubIcon from "./icons/GithubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"

const Footer = () => {
  const iconVisualTheme = "fill-current text-gray-400 hover:text-blueGray-900"

  return (
    <footer className="w-full flex text-center border-t border-gray-500 p-2 bottom-0 bg-gray-600">
      <div className="flex align-middle">
        <p className="flex items-center text-gray-400">
          {`© ${new Date().getFullYear()} Will Harris`}
        </p>
      </div>
      <div className="flex flex-grow">
        <a href="https://twitter.com/will__tweets" className="ml-auto">
          <TwitterIcon iconVisualTheme={iconVisualTheme} />
        </a>
        <a href="https://www.instagram.com/willbikes/">
          <InstagramIcon iconVisualTheme={iconVisualTheme} />
        </a>
        <a href="https://www.github.com/will-t-harris">
          <GithubIcon iconVisualTheme={iconVisualTheme} />
        </a>
        <a href="https://www.linkedin.com/in/will-t-harris/">
          <LinkedinIcon iconVisualTheme={iconVisualTheme} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
