import React from "react"
import { render } from "@testing-library/react"

import HeaderButton from "../HeaderButton"

const headerButtonProps = {
  buttonTitle: "Test title",
  buttonSlug: "/testSlug",
  buttonClass: "mx-auto",
}

describe("Header Button", () => {
  it("matches the previous snapshot", () => {
    const { container } = render(<HeaderButton {...headerButtonProps} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the button title", () => {
    const { getByText } = render(<HeaderButton {...headerButtonProps} />)

    expect(getByText("Test title")).toBeInTheDocument()
  })
})
