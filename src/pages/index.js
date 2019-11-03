import React from "react"
import { Link } from "gatsby"

import Layout from "components/Layout"
import Image from "components/image"
import SEO from "components/seo"
import Landing from "components/Landing"

const IndexPage = ({ uri }) => (
  <Layout pathname={uri}>
    <SEO title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
