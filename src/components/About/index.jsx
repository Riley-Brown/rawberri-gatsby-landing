import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { StyledAbout } from "./StyledAbout"

import { useIsVisible } from "hooks/useIsVisible"

export default function About() {
  const aboutData = useStaticQuery(graphql`
    query AboutPageQuery {
      allContentfulAboutPage {
        edges {
          node {
            id
            pageTitle
            aboutUsOneImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            aboutUsOne {
              id
              content {
                nodeType
                content {
                  value
                  nodeType
                }
              }
            }
            aboutUsTwoImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            aboutUsTwo {
              id
              content {
                nodeType
                content {
                  value
                  nodeType
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    aboutUsOne,
    aboutUsOneImage,
    aboutUsTwo,
    aboutUsTwoImage,
    pageTitle,
  } = aboutData.allContentfulAboutPage.edges[0].node

  const leftRef = useRef()
  const rightRef = useRef()

  const leftVisible = useIsVisible({
    ref: leftRef,
    unobserveOnTrue: true,
    threshold: 0.5,
  })
  const rightVisible = useIsVisible({
    ref: rightRef,
    unobserveOnTrue: true,
    threshold: 0.5,
  })

  console.log(leftVisible, rightVisible)

  return (
    <StyledAbout rightVisible={rightVisible} leftVisible={leftVisible}>
      <div className="about-content">
        <h1>{pageTitle}</h1>
        <div className="text-wrapper">
          {aboutUsOne.content.map(node =>
            node.nodeType !== "paragraph" ? (
              <h5>{node.content[0].value}</h5>
            ) : (
              <p>{node.content[0].value}</p>
            )
          )}
        </div>
      </div>
      <div className="image-container">
        <Img fluid={aboutUsOneImage.fluid} />
        <span data-right className="overlay" ref={rightRef} />
      </div>
      <div className="image-container">
        <Img fluid={aboutUsTwoImage.fluid} />
        <span data-left className="overlay" ref={leftRef} />
      </div>
      <div className="about-content">
        <div className="text-wrapper">
          {aboutUsTwo.content.map(node =>
            node.nodeType !== "paragraph" ? (
              <h5>{node.content[0].value}</h5>
            ) : (
              <p>{node.content[0].value}</p>
            )
          )}
        </div>
      </div>
    </StyledAbout>
  )
}
