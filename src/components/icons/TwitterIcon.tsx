import React from "react"

interface Props {
  iconVisualTheme: string
}

const TwitterIcon = ({ iconVisualTheme }: Props) => (
  <svg className={iconVisualTheme} height="56.693" width="56.693">
    <path d="M52.837 15.065a20.11 20.11 0 01-5.805 1.591 10.125 10.125 0 004.444-5.592 20.232 20.232 0 01-6.418 2.454 10.093 10.093 0 00-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 00-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 01-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 01-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 01-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0015.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 005.042-5.23z" />
  </svg>
)

export default TwitterIcon
