import React from "react"

import Img from "gatsby-image"

interface Props {
  border: string
  data: any
}

const ProjectImage = ({ data, border }: Props) => (
  <Img fixed={data.fixed} className={`border-2 ${border} mx-auto lg:mx-0`} />
)

export default ProjectImage
