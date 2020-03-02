import React from "react"
import { Link } from "gatsby"

const HeaderButton = ({ buttonTitle, buttonSlug, buttonClass }) => (
  <>
    <div className="flex-auto shadow-2xl">
      <Link to={buttonSlug} className={buttonClass}>
        {buttonTitle}
      </Link>
    </div>
  </>
)

export default HeaderButton
