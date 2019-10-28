import React from "react"
import { Link } from "gatsby"

import Layout from "components/Layout"
import Image from "components/image"
import SEO from "components/seo"
import About from "components/About"

const AboutPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
