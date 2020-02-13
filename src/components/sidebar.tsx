import React from "react"
import SideBarButton from "./SideBarButton"

const SideBar = () => (
  <aside className="float-left w-1/5 h-full flex flex-col">
    <SideBarButton buttonTitle="Bytes" />
    <SideBarButton buttonTitle="Bikes" />
    <SideBarButton buttonTitle="Routes" />
    <SideBarButton buttonTitle="About" />
    <SideBarButton buttonTitle="Contact" />
  </aside>
)

export default SideBar
