import styled from "styled-components"

import { transitionClasses } from "helpers/transitionClasses"

export const StyledLanding = styled.div`
  ${transitionClasses("fade", 1000)};
  height: calc(100vh - 101px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    img {
      height: calc(100vh - 101px);
      object-fit: cover;
      width: 100%;
      /* object-position: 50% ${props => props.random}%; */
      transition: 2s;
      transform-origin: top left;
      animation-name: moveImg;
      animation-duration: 20s;
      animation-timing-function: linear;
      position: absolute;
    }
    img[data-index="0"] {
      transform-origin: top left;
    }
    img[data-index="1"] {
      transform-origin: right center;
    }
    img[data-index="2"] {
      transform-origin: left bottom;
    }
    img[data-index="3"] {
      transform-origin: right center;
    }
    @keyframes moveImg {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.25);
      }
    }
  }
`
