import React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"

import Contact from "Components/Contact"

export default function ContactPage({ uri }) {
  return (
    <Layout pathname={uri}>
      <SEO title="About" />
      <Contact />
    </Layout>
  )
}
