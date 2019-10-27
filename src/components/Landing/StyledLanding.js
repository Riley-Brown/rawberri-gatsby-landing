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
    img {
      height: calc(100vh - 101px);
      object-fit: cover;
      width: 100%;
      object-position: 50% ${props => props.random}%;
      transition: object-position 1s;
    }
  }
`
