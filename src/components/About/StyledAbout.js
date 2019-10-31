import styled from "styled-components"

export const StyledAbout = styled.div`
  display: flex;
  width: 80%;
  max-width: 1400px;
  margin: 90px auto;
  justify-content: space-between;
  flex-wrap: wrap;
  .about-content {
    flex: 0 0 50%;
    background: #fff;
    padding: 25px;
    h1 {
      font-size: 5rem;
      text-align: center;
      color: #444;
      margin-bottom: 1.5rem;
    }
    .text-wrapper {
      width: 80%;
      margin: auto;
      p {
        margin-bottom: 10px;
        line-height: 1.6;
      }
    }
  }
  .image-container {
    background: #fff;
    flex: 0 0 50%;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
  }
  .overlay[data-left] {
    animation: ${props => props.loaded && "left 1s forwards"};
  }
  .overlay[data-right] {
    animation: ${props => props.loaded && "right 1s forwards"};
  }
  img {
    width: 100%;
    object-fit: cover;
    align-self: center;
    max-height: 350px;
    animation-timing-function: ease-out;
  }
  @keyframes right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`
