import React from "react"
import SideBarButton from "./SideBarButton"

const SideBar = () => (
  <aside className="bg-gray-400 float-left w-1/5 h-full flex flex-col">
    <SideBarButton buttonTitle="Bytes" buttonSlug="bytes" />
    <SideBarButton buttonTitle="Bikes" buttonSlug="bikes" />
    <SideBarButton buttonTitle="Routes" buttonSlug="routes" />
    <SideBarButton buttonTitle="About" buttonSlug="about" />
    <SideBarButton buttonTitle="Contact" buttonSlug="contact" />
  </aside>
)

export default SideBar
