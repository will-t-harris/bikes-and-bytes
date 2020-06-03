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
      <article className="flex flex-col py-10 lg:py-20 lg:grid lg:grid-cols-10 lg:grid-rows-1 ">
        <a
          href="https://movewithmadeline.com"
          className="flex flex-col self-center lg:col-start-2 lg:col-span-2"
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
        <div className="w-full mt-10 px-20 self-center leading-6 opacity-75 lg:my-0 lg:mx-0 lg:col-start-7 lg:col-span-3">
          <h2 className="text-xl font-bold mb-4">Fitness/Lifestyle Blog</h2>
          <a
            href="https://github.com/will-t-harris/move-with-madeline"
            className="underline text-blue-500 font-semibold visited:text-purple-600"
          >
            Source (GitHub)
          </a>
          <p className="font-semibold mt-4">Built with:</p>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Gatsby</li>
            <li>Tailwind CSS</li>
            <li>Netlify CMS</li>
          </ul>
        </div>
      </article>

      <article className="flex flex-col mt-10 pb-20 lg:grid lg:grid-cols-10 lg:grid-rows-1 ">
        <a
          href="http://abqtrails.deepdivecoding.com/"
          className="flex flex-col self-center lg:col-start-2 lg:col-span-2"
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
        <div className="w-full mt-10 px-20 self-center leading-6 opacity-75 lg:my-0 lg:mx-0 lg:col-start-7 lg:col-span-3">
          <h2 className="text-xl font-bold mb-4">
            Albuquerque Area Bike Trails App
          </h2>
          <a
            href="https://github.com/abq-outdoor-trails/outdoor-trails-master"
            className="underline text-blue-500 font-semibold visited:text-purple-600"
          >
            Source (GitHub)
          </a>
          <p className="font-semibold mt-4">Built with:</p>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Mapbox GL JS</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default ProjectsPage
