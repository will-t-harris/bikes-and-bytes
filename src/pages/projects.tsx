import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/SEO"
import ProjectImage from "../components/ProjectImage"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsPageQuery {
      sitePage(
        component: { regex: "/projects/" }
        id: { eq: "SitePage /projects/" }
      ) {
        path
      }
      moveWithMadeline: file(
        sourceInstanceName: { eq: "assets" }
        childImageSharp: {
          fixed: { originalName: { regex: "/move-with-madeline/" } }
        }
      ) {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      abqBikeTrails: file(
        sourceInstanceName: { eq: "assets" }
        childImageSharp: {
          fixed: { originalName: { regex: "/abq-bike-trails/" } }
        }
      ) {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const pathname = data.sitePage.path

  return (
    <>
      <SEO title="Projects" pathname={pathname} />
      <div className="flex flex-col py-10 lg:py-20 lg:grid lg:grid-cols-10 lg:grid-rows-1 ">
        <a
          href="https://movewithmadeline.com"
          className="flex flex-col lg:col-start-2 lg:col-span-2"
        >
          <ProjectImage
            data={data.moveWithMadeline.childImageSharp}
            border="border-accent"
          />
        </a>
        <a
          href="https://movewithmadeline.com"
          className="w-64 font-body font-semibold self-center text-center border-b-2 mt-10 border-accent lg:mt-0 lg:col-start-5 "
        >
          movewithmadeline.com
        </a>
        <p className="mx-8 mt-10 self-center leading-6 opacity-75 lg:my-0 lg:mx-0 lg:col-start-7 lg:col-span-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus
          mauris sit amet lobortis rutrum. Nulla non sagittis neque. Mauris eget
          risus sit amet justo porta vehicula. Morbi a magna volutpat,
          ullamcorper risus vel, egestas tortor. Morbi tristique, massa vel
          accumsan dictum, mauris velit tincidunt justo, non ullamcorper tortor
          neque quis leo. Integer nisl mauris, sollicitudin a imperdiet a,
          ornare id risus. Duis eleifend leo mauris, pellentesque lacinia nisl
          volutpat sed.
        </p>
      </div>

      <div className="flex flex-col mt-10 mb-32 lg:grid lg:grid-cols-10 lg:grid-rows-1 ">
        <a
          href="http://abqtrails.deepdivecoding.com/"
          className="flex flex-col lg:col-start-2 lg:col-span-2"
        >
          <ProjectImage
            data={data.abqBikeTrails.childImageSharp}
            border="border-primary"
          />
        </a>
        <a
          href="http://abqtrails.deepdivecoding.com/"
          className="w-64 font-body font-semibold self-center text-center border-b-2 mt-10 border-primary lg:mt-0 lg:col-start-5 lg:mx-auto"
        >
          abqtrails.deepdivecoding.com
        </a>
        <p className="mx-8 mt-10 self-center leading-6 opacity-75 lg:my-0 lg:mx-0 lg:col-start-7 lg:col-span-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus
          mauris sit amet lobortis rutrum. Nulla non sagittis neque. Mauris eget
          risus sit amet justo porta vehicula. Morbi a magna volutpat,
          ullamcorper risus vel, egestas tortor. Morbi tristique, massa vel
          accumsan dictum, mauris velit tincidunt justo, non ullamcorper tortor
          neque quis leo. Integer nisl mauris, sollicitudin a imperdiet a,
          ornare id risus. Duis eleifend leo mauris, pellentesque lacinia nisl
          volutpat sed.
        </p>
      </div>
    </>
  )
}

export default ProjectsPage
