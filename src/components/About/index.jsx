import React, { useRef } from "react"
import { StyledAbout } from "./StyledAbout"

import rawberriOne from "assets/img/rawberri-inside-1.jpg"
import rawberriYogurt from "assets/img/rawberri-yogurt.jpg"

import { useIsVisible } from "hooks/useIsVisible"

export default function About() {
  const leftRef = useRef()
  const rightRef = useRef()

  const leftVisible = useIsVisible({
    ref: leftRef,
    rootMargin: "-200px",
    unobserveOnTrue: true,
  })
  const rightVisible = useIsVisible({
    ref: rightRef,
    rootMargin: "-200px",
    unobserveOnTrue: true,
  })

  return (
    <StyledAbout>
      <div className="about-content">
        <h1>About Us</h1>
        <div className="text-wrapper">
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium atque ipsam cum repellat magni, repudiandae accusamus
            sint! Minima, cum. Asperiores neque cum delectus explicabo
            perspiciatis.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img data-right src={rawberriOne} ref={rightRef} alt="" />
        <span
          style={{ animation: rightVisible && "right 1s forwards" }}
          data-right
          className="overlay"
        />
      </div>
      <div className="image-container">
        <img data-left src={rawberriYogurt} ref={leftRef} alt="" />
        <span
          data-left
          className="overlay"
          style={{ animation: leftVisible && "left 1s forwards" }}
        />
      </div>
      <div className="about-content">
        <div className="text-wrapper">
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium atque ipsam cum repellat magni, repudiandae accusamus
            sint! Minima, cum. Asperiores neque cum delectus explicabo
            perspiciatis.
          </p>
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium atque ipsam cum repellat magni, repudiandae accusamus
            sint! Minima, cum. Asperiores neque cum delectus explicabo
            perspiciatis.
          </p>
        </div>
      </div>
    </StyledAbout>
  )
}
