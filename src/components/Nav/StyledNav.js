import styled from "styled-components"

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    position: static;
  }
  .nav-container {
    max-width: 1400px;
    padding: 1.45rem 1.0875rem;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      li {
        font-size: 2rem;
        color: var(--secondary);
        a {
          text-decoration: none;
          transition: 200ms;
          color: inherit;
          margin: 0 5px;
          padding: 10px;
          border-radius: 4px;
          &:hover {
            opacity: 0.7;
            background: var(--secondary);
            color: #fff;
          }
        }
      }
      li[data-active="true"] {
        a {
          opacity: 0.7;
          background: var(--secondary);
          color: #fff;
        }
      }
    }
    img {
      height: 70px;
      @media (max-width: 960px) {
        height: 50px;
      }
    }
  }
`
