import React from "react"
import { Link } from "gatsby"

const SideBarButton = ({ buttonTitle, buttonSlug }) => (
  <>
    {" "}
    <Link to={buttonSlug} className="bg-gray-200 hover:bg-gray-400">
      <button className="flex justify-center w-1/2 py-6 my-4 mx-auto bg-gray-400 rounded">
        {buttonTitle}
      </button>
    </Link>
  </>
)

export default SideBarButton
