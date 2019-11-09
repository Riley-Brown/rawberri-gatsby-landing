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
  @media (max-width: 1100px) {
    height: calc(100vh - 80px);
  }
  @media (max-width: 500px) {
    height: calc(100vh - 50px);
  }
  @media (max-height: 450px) {
    height: 100%;
    padding: 50px 0;
  }
  .landing-content {
    color: #fff;
    transform: translateY(-40px);
    opacity: 0;
    animation: ${props => props.loaded && "1s transformIn ease-out forwards"};
    @media (max-width: 600px) {
      width: 90%;
    }
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
      @media (max-width: 600px) {
        text-align: center;
        font-size: 4.5rem;
      }
      @media (max-width: 350px) {
        font-size: 4rem;
      }
      span {
        font-size: inherit;
        font-weight: inherit;
      }
      strong {
        font-size: inherit;
        font-weight: bold;
      }
    }
    h6 {
      font-size: 3rem;
      text-align: center;
      font-weight: 200;
      @media (max-width: 350px) {
        font-size: 2.5rem;
      }
    }
    .buttons {
      text-align: center;
      margin: 20px 0;
      button {
        background: #fff;
        color: var(--secondary);
        font-size: 2.3rem;
        margin: 10px 15px;
        @media (max-width: 550px) {
          display: block;
          width: 90%;
          max-width: 300px;
          margin: 10px auto 20px;
        }
        a {
          padding: 10px 25px;
          text-decoration: none;
          color: inherit;
          background: inherit;
          border-radius: inherit;
          @media (max-width: 550px) {
            display: block;
          }
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
      transition: 2s;
      transform-origin: top left;
      animation-name: ${props => props.loaded && "moveImg"};
      animation-duration: 20s;
      animation-timing-function: linear;
      position: absolute;
      @media (max-width: 1100px) {
        height: calc(100vh - 80px);
      }
      @media (max-height: 600px) {
        height: 100%;
      }
      @media (max-width: 500px) {
        height: calc(100vh - 50px);
      }
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
