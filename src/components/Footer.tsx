import React from "react"
import TwitterIcon from "./icons/TwitterIcon"
import InstagramIcon from "./icons/InstagramIcon"
import GithubIcon from "./icons/GithubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"

const Footer = () => {
  const iconVisualTheme =
    "fill-current text-gray-400 hover:text-pink-600 transition ease-in-out duration-150"

  return (
    <footer className="w-full flex text-center py-2 px-12 bg-gray-800">
      <div className="flex mx-auto">
        <a href="https://twitter.com/will__tweets">
          <TwitterIcon iconVisualTheme={iconVisualTheme} />
        </a>
        <a href="https://www.linkedin.com/in/will-t-harris/">
          <LinkedinIcon iconVisualTheme={iconVisualTheme} />
        </a>
        <a href="https://www.github.com/will-t-harris">
          <GithubIcon iconVisualTheme={iconVisualTheme} />
        </a>
        <a href="https://www.instagram.com/willbikes/">
          <InstagramIcon iconVisualTheme={iconVisualTheme} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
