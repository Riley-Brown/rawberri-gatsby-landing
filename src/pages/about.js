import React from "react"
import { Link } from "gatsby"

import Layout from "components/Layout"
import Image from "components/image"
import SEO from "components/seo"
import About from "components/About"

const AboutPage = ({ uri }) => (
  <Layout pathname={uri}>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
