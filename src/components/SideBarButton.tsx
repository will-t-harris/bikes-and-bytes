import React from "react"

const SideBarButton = buttonTitle => (
  <>
    <button className="content-end py-6 bg-gray-200">
      {buttonTitle.buttonTitle}
    </button>
  </>
)

export default SideBarButton
