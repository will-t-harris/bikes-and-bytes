import React from "react"
import { render, screen } from "@testing-library/react"

import Header from "../Header"

describe("Header", () => {
  it("matches the previous snapshot", () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the bike icon", () => {
    render(<Header />)

    expect(screen.getByTitle("Bike icon")).toBeInTheDocument()
  })

  it("renders the code icon", () => {
    render(<Header />)

    expect(screen.getByTitle("Code terminal icon")).toBeInTheDocument()
  })

  it("renders the Bytes link", () => {
    render(<Header />)

    expect(screen.getByText("Bytes")).toBeInTheDocument()
  })

  it("renders the Bikes link", () => {
    render(<Header />)

    expect(screen.getByText("Bikes")).toBeInTheDocument()
  })
})
