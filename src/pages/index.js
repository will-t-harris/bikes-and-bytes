import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mt-8 sm:ml-auto sm:mr-32 sm:w-1/2 lg:w-full">
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices,
        risus ac tincidunt faucibus, nibh sapien aliquet purus, vitae porttitor
        erat turpis id sem. Aliquam erat volutpat. Mauris libero elit, cursus
        nec dignissim in, hendrerit ut tortor. Ut placerat ex quam, tempus
        iaculis odio sodales ac. Fusce nisi ligula, egestas non pharetra vel,
        placerat at metus. Ut bibendum finibus fermentum. Ut sodales ornare
        tortor, id mollis mi viverra ut. Sed cursus nisi a erat hendrerit
        blandit. In tincidunt vehicula sem quis eleifend. Sed suscipit massa sit
        amet eros dictum, nec dignissim augue sollicitudin. Proin interdum
        tincidunt arcu sed consectetur. Sed aliquam tortor sit amet purus
        aliquam, nec euismod quam imperdiet. Nullam egestas ligula et ex
        ultricies, sit amet gravida nisi malesuada.{" "}
      </p>
      <p>
        {" "}
        Curabitur dapibus nunc sit amet laoreet gravida. Fusce sed faucibus
        felis. Sed a tempor neque, ut hendrerit quam. Phasellus vulputate
        volutpat molestie. Etiam vehicula mi diam, a accumsan augue cursus vel.
        Integer lacinia ornare placerat. Nulla tellus magna, consequat ut
        lacinia a, dignissim ut turpis. Integer lacinia sit amet est non dictum.
        Nullam risus orci, pharetra sed accumsan vitae, bibendum vitae dolor.
        Pellentesque malesuada ante tellus, ac scelerisque tellus bibendum in.
        Etiam fermentum nibh at mauris mattis, vitae pellentesque leo pharetra.
        Nunc consectetur massa at laoreet gravida. Etiam rutrum suscipit arcu in
        tincidunt. Donec et ex sed est pulvinar condimentum. In rutrum eu nulla
        id auctor.{" "}
      </p>
      <p>
        {" "}
        Nulla facilisi. Nulla aliquam pulvinar magna in elementum. Nunc neque
        sem, pretium at suscipit eget, tincidunt ut justo. Aenean lacinia felis
        vitae tortor lacinia, vel consectetur augue tristique. Vivamus eget diam
        in diam fermentum volutpat eu sodales justo. Proin volutpat gravida
        justo ac mattis. Vestibulum non lacus quis quam aliquam scelerisque.
        Curabitur iaculis eu neque at aliquam. Maecenas eu cursus ligula. Aenean
        elementum mi sit amet ultrices facilisis. Fusce vestibulum, sem ac
        commodo feugiat, turpis nulla fringilla quam, non vulputate lorem velit
        eget dolor.{" "}
      </p>
    </div>

    <Link className="mr-6 font-bold" to="/page-2/">
      Go to page 2
    </Link>
    <Link className="font-bold" to="/about">
      Go to about page
    </Link>
  </Layout>
)

export default IndexPage
