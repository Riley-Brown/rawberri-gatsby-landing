import styled from "styled-components"

export const StyledContact = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: 90px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 1100px) {
    width: 95%;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    margin: 60px auto;
  }
  @media (max-width: 450px) {
    margin: 30px auto;
  }
  .contact-container {
    flex: 0 0 50%;
    background: #fff;
    padding: 20px;
    @media (max-width: 1100px) {
      flex: 1 1 50%;
    }
    h1 {
      font-size: 4rem;
      text-align: center;
    }
    div {
      display: flex;
      margin: 15px 0;
      a {
        text-decoration: none;
        color: #222;
      }
      img {
        width: 23px;
        margin-right: 10px;
      }
      span {
        vertical-align: bottom;
        font-size: 1.8rem;
      }
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    margin: 30px auto !important;
    h3 {
      text-align: center;
      font-size: 2rem;
    }
    form {
      div {
        flex-direction: column;
      }
      input,
      textarea,
      span {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px;
        margin: 5px 0;
        resize: none;
        background: #f9f9f9;
        font-family: inherit;
        font-size: 1.6rem;
      }
      button[type="submit"],
      span {
        background: var(--secondary);
        color: #fff;
        padding: 10px;
        cursor: pointer;
        text-align: center;
        font-size: 1.6rem;
        font-family: inherit;
        position: relative;
        img {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .img-container {
    flex: 0 0 50%;
    background: #fff;
    padding: 20px;
    display: flex;
    .gatsby-image-wrapper {
      width: 100%;
      img {
        object-fit: contain !important;
      }
    }
    @media (max-width: 1100px) {
      flex: 0 0 40%;
    }
    @media (max-width: 960px) {
      flex: 1 1 auto;
      height: 500px;
    }
    img {
      width: 100%;
      align-self: center;
    }
  }
`
