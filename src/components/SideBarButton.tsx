import React from "react"
import { Link } from "gatsby"

const SideBarButton = ({ buttonTitle, buttonSlug }) => (
  <>
    <button className="content-end py-6 bg-gray-200 hover:bg-gray-400">
      <Link to={buttonSlug}> {buttonTitle}</Link>
    </button>
  </>
)

export default SideBarButton
