import React from "react"
import { screen, render } from "@testing-library/react"

import Footer from "../Footer"

describe("Footer", () => {
  it("renders the component", () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the twitter icon", () => {
    render(<Footer />)

    expect(screen.getByTitle("Twitter icon")).toBeInTheDocument()
  })

  it("renders the linkedin icon", () => {
    render(<Footer />)

    expect(screen.getByTitle("LinkedIn icon")).toBeInTheDocument()
  })

  it("renders the github icon", () => {
    render(<Footer />)

    expect(screen.getByTitle("GitHub icon")).toBeInTheDocument()
  })

  it("renders the instagram icon", () => {
    render(<Footer />)

    expect(screen.getByTitle("Instagram icon")).toBeInTheDocument()
  })
})
