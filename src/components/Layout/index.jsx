/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "components/Nav"
import "index.css"

const Layout = ({ children, style }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav />
      <div
        style={
          {
            // margin: `0 auto`,
            // maxWidth: 1400,
            // padding: `0px 1.0875rem 1.45rem`,
            // paddingTop: 0,
            // display: "flex",
            // justifyContent: "space-between",
            // ...style,
          }
        }
      >
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout