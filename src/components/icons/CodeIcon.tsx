import React from "react"

interface Props {
  iconTitle: string
}

const CodeIcon = ({ iconTitle }: Props) => (
  <svg
    className="fill-current mx-6"
    width="64"
    height="64"
    fill="none"
    aria-labelledby={iconTitle}
  >
    <title id={iconTitle}>Code terminal icon</title>
    <path d="M32.32 44.88c0 .352.272.64.6.64h14.8c.328 0 .6-.288.6-.64v-3.84c0-.352-.272-.64-.6-.64h-14.8c-.328 0-.6.288-.6.64v3.84zm-15.592.488l15.36-12.88a.645.645 0 000-.984l-15.36-12.872a.636.636 0 00-1.048.488v5.016c0 .192.08.368.232.488L24.696 32l-8.784 7.376a.647.647 0 00-.232.488v5.016c0 .544.632.84 1.048.488zM61.44 0H2.56A2.557 2.557 0 000 2.56v58.88A2.557 2.557 0 002.56 64h58.88A2.557 2.557 0 0064 61.44V2.56A2.557 2.557 0 0061.44 0zm-3.2 58.24H5.76V5.76h52.48v52.48z" />
  </svg>
)

export default CodeIcon
