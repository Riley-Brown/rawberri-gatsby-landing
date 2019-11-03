import styled from "styled-components"

export const StyledContact = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: 90px auto;
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  .contact-container {
    width: 100%;
    div {
      display: flex;
      margin: 10px 0;
      a {
        text-decoration: none;
        color: #222;
      }
      img {
        width: 20px;
        margin-right: 10px;
      }
      span {
        vertical-align: bottom;
      }
    }
  }
  h1 {
    font-size: 4rem;
    text-align: center;
  }
  img {
    width: 50%;
  }
`
