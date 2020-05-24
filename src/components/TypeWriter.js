import React from "react"
import Typewriter from "typewriter-effect"

const HomeTypeWriter = () => {
  return (
    <Typewriter
      onInit={typewriter => {
        typewriter.typeString("Hi, I'm Will.").start()
      }}
    />
  )
}

export default HomeTypeWriter
