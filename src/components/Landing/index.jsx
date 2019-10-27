import React, { useRef, useEffect, useState } from "react"

import LandingPlaceholder from "assets/img/landing-placeholder.jpg"
import rawberriInside from "assets/img/rawberri-inside-1.jpg"
import rawberriInsideTwo from "assets/img/rawberri-inside-2.jpg"
import rawberriInsideThree from "assets/img/rawberri-inside-3.jpg"

import { StyledLanding } from "components/Landing/StyledLanding"

import { useCarousel } from "hooks/useCarousel"

import { TransitionGroup, CSSTransition } from "react-transition-group"

export default function Landing() {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 50))

  const images = [
    LandingPlaceholder,
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
    <StyledLanding ref={landingRef} img={images[index]} random={randomNum}>
      <TransitionGroup>
        <CSSTransition
          onEntering={() => setRandomNum(Math.floor(Math.random() * 50))}
          // appear={true}
          key={index}
          timeout={1000}
          classNames="fade"
        >
          <div className="overlay">
            <img src={images[index]} alt="" data-index={index} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </StyledLanding>
  )
}
