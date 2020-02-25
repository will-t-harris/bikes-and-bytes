import React from "react"
import TwitterIcon from "./icons/TwitterIcon"
import InstagramIcon from "./icons/InstagramIcon"
import GithubIcon from "./icons/GithubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"

const Footer = () => {
  const iconVisualTheme = "fill-current text-gray-400 hover:text-gray-600"
  return (
    <footer className="w-full text-center border-t border-gray-500 p-4 bottom-0 absolute">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <div className="flex">
        <a href="https://twitter.com/will__tweets">
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
