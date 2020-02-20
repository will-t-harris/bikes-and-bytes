import React from "react"
import { Link } from "gatsby"

const SideBarButton = ({ buttonTitle, buttonSlug }) => (
  <>
    <Link
      to={buttonSlug}
      className="bg-gray-200 hover:bg-gray-400 flex justify-center w-full py-6 mx-auto text-2xl font-semibold rounded"
    >
      {buttonTitle}
    </Link>
  </>
)

export default SideBarButton
