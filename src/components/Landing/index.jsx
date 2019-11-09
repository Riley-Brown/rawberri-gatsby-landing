import React, { useRef, useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"

import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { StyledLanding } from "components/Landing/StyledLanding"
import { useCarousel } from "hooks/useCarousel"

export default function Landing() {
  useEffect(() => setLoaded(true), [])

  const landingData = useStaticQuery(graphql`
    query LandingPageQuery {
      allContentfulLandingPage {
        edges {
          node {
            landingTitle {
              landingTitle
            }
            landingSlogan
            landingCarousel {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const {
    landingTitle,
    landingSlogan,
    landingCarousel,
  } = landingData.allContentfulLandingPage.edges[0].node

  const [loaded, setLoaded] = useState(false)

  const images = [...landingCarousel]

  const landingRef = useRef()

  const [index] = useCarousel({
    data: images,
    timeout: 4000,
    element: landingRef,
    defaultVisible: true,
  })

  return (
    <StyledLanding ref={landingRef} loaded={loaded} img={images[index]}>
      <TransitionGroup>
        <CSSTransition key={index} timeout={1000} classNames="fade">
          <div className="overlay">
            <Img fluid={images[index].fluid} />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="landing-content">
        <h1>
          <Markdown>{landingTitle.landingTitle}</Markdown>
        </h1>
        <h6>{landingSlogan}</h6>
        <div className="buttons">
          <button>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://loving-kilby-fc3f0a.netlify.com/"
            >
              Order Online
            </a>
          </button>
          <button>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://wizardly-jang-d732c8.netlify.com/"
            >
              Rawberri Store
            </a>
          </button>
        </div>
      </div>
    </StyledLanding>
  )
}
