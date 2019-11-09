import React, { useRef, useState, useEffect } from "react"

import landingPlaceholder from "assets/img/landing-placeholder.jpg"
import landingPlaceholderSmall from "assets/img/landing-placeholder-xs.jpg"
import rawberriInside from "assets/img/rawberri-inside-1.jpg"
import rawberriInsideTwo from "assets/img/rawberri-inside-2.jpg"
import rawberriInsideThree from "assets/img/rawberri-inside-3.jpg"

import Markdown from "markdown-to-jsx"

import { StyledLanding } from "components/Landing/StyledLanding"

import { useCarousel } from "hooks/useCarousel"

import { TransitionGroup, CSSTransition } from "react-transition-group"

import { useStaticQuery, graphql } from "gatsby"

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
                src
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

  console.log(
    landingTitle.landingTitle
      .split(" ")
      .map(word =>
        word.includes("_") ? (
          <span>{word.slice(2, word.length - 2)}</span>
        ) : (
          word
        )
      )
      .join(" ")
  )

  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 50))
  const [loaded, setLoaded] = useState(false)

  const images = [
    landingPlaceholder,
    rawberriInside,
    rawberriInsideTwo,
    rawberriInsideThree,
  ]

  const landingRef = useRef()

  console.log(landingRef)

  const [index] = useCarousel({
    data: images,
    timeout: 4000,
    element: landingRef,
    defaultVisible: true,
  })

  return (
    <StyledLanding
      ref={landingRef}
      loaded={loaded}
      img={images[index]}
      random={randomNum}
      loadingImg={landingPlaceholderSmall}
    >
      <TransitionGroup>
        <CSSTransition
          onEntering={() => setRandomNum(Math.floor(Math.random() * 20))}
          key={index}
          timeout={1000}
          classNames="fade"
        >
          <div className="overlay">
            <img
              onLoad={() => setLoaded(true)}
              src={images[index]}
              alt=""
              data-index={index}
            />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="landing-content">
        <h1>
          <Markdown>{landingTitle.landingTitle}</Markdown>
        </h1>
        <h6>An organic super-food cafe </h6>
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
