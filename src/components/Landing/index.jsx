import React, { useRef, useState } from "react"

import landingPlaceholder from "assets/img/landing-placeholder.jpg"
import landingPlaceholderSmall from "assets/img/landing-placeholder-xs.jpg"
import rawberriInside from "assets/img/rawberri-inside-1.jpg"
import rawberriInsideTwo from "assets/img/rawberri-inside-2.jpg"
import rawberriInsideThree from "assets/img/rawberri-inside-3.jpg"

import { StyledLanding } from "components/Landing/StyledLanding"

import { useCarousel } from "hooks/useCarousel"

import { TransitionGroup, CSSTransition } from "react-transition-group"

export default function Landing() {
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
      <img
        src={landingPlaceholderSmall}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          height: "calc(100vh - 101px)",
          transition: "1000ms",
          opacity: loaded && 0,
        }}
        alt=""
      />
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
      {/* <CSSTransition appear={true} classNames="fade" timeout={1000} in={true}> */}
      <div className="landing-content">
        <h1>
          Welcome to <span>Rawberri</span>
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
      {/* </CSSTransition> */}
    </StyledLanding>
  )
}
