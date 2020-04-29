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
      <Link
        to={buttonSlug}
        className={buttonClass}
        activeClassName="text-pink-600 underline transition-all ease-in duration-200"
      >
        {buttonTitle}
      </Link>
    </div>
  </>
)

export default HeaderButton
