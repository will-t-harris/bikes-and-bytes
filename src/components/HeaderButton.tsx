import React from "react"
import { Link } from "gatsby"

interface Props {
  buttonTitle: string
  buttonSlug: string
  buttonClass: string
}

const HeaderButton = ({ buttonTitle, buttonSlug, buttonClass }: Props) => (
  <>
    <div className="flex flex-auto">
      <Link to={buttonSlug} className={buttonClass}>
        {buttonTitle}
      </Link>
    </div>
  </>
)

export default HeaderButton
