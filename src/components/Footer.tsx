import React from "react"

import { TwitterIcon, InstagramIcon, GithubIcon, LinkedinIcon } from "./icons"

const Footer = () => {
  const twClasses =
    "text-gray-400 hover:text-accent transition ease-in-out duration-150"

  return (
    <footer className="w-full flex text-center py-2 px-12 bg-navBackground site-linear-gradient border-b-0 border-t-8">
      <div className="flex mx-auto">
        <a href="https://twitter.com/will__tweets">
          <TwitterIcon twClasses={twClasses} iconTitle="twitterIcon" />
        </a>
        <a href="https://www.linkedin.com/in/will-t-harris/">
          <LinkedinIcon twClasses={twClasses} iconTitle="linkedinIcon" />
        </a>
        <a href="https://www.github.com/will-t-harris">
          <GithubIcon twClasses={twClasses} iconTitle="githubIcon" />
        </a>
        <a href="https://www.instagram.com/willbikes/">
          <InstagramIcon twClasses={twClasses} iconTitle="instagramIcon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
