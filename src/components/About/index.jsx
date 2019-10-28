import React from "react"
import { StyledAbout } from "./StyledAbout"

import rawberriOne from "assets/img/rawberri-inside-1.jpg"
import rawberriYogurt from "assets/img/rawberri-yogurt.jpg"

export default function About() {
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
        <img data-right src={rawberriOne} alt="" />
        <span data-right className="overlay" />
      </div>
      <div className="image-container">
        <img data-left src={rawberriYogurt} alt="" />
        <span data-left className="overlay" />
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
