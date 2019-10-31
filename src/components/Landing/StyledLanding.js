import styled from "styled-components"

import { transitionClasses } from "helpers/transitionClasses"

export const StyledLanding = styled.div`
  ${transitionClasses("fade", 1000)};
  height: calc(100vh - 101px);
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .landing-content {
    color: #fff;
    transform: translateY(-40px);
    opacity: 0;
    animation: ${props => props.loaded && "1s transformIn ease-out forwards"};
    @keyframes transformIn {
      from {
        opacity: 0;
        transform: translateY(-40px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    h1 {
      font-size: 5rem;
      text-transform: uppercase;
      font-weight: 200;
      span {
        font-size: inherit;
        font-weight: bold;
      }
    }
    h6 {
      font-size: 3rem;
      text-align: center;
      font-weight: 200;
    }
    .buttons {
      text-align: center;
      margin: 20px 0;
      button {
        background: #fff;
        color: var(--secondary);
        font-size: 2.3rem;
        margin: 10px 15px;
        a {
          padding: 10px 25px;
          text-decoration: none;
          color: inherit;
          background: inherit;
          border-radius: inherit;
        }
        &:last-of-type {
          background: var(--secondary);
          color: #fff;
        }
      }
    }
  }
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
      animation-name: ${props => props.loaded && "moveImg"};
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
