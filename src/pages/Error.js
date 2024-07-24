import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BackgroundLogo from "../images/logo_background.svg";
import ErrorImage from "../images/error.svg";

const Error = () => {
  return (
    <Wrapper>
      <Navbar colorScheme="gray" />
      <div className="container-out">
        <img
          className="background-logo"
          src={BackgroundLogo}
          alt="EVP Studio"
        />

        <div className="container-image">
          <img className="error-image" src={ErrorImage} alt="Error" />
        </div>

        <div className="container-error">
          <span>Oops!</span>
          <span className="code">404</span>
          <span>Page Not Found!</span>
          <p>The page you were looking for doesn't exist.</p>
          <Link className="home-link" to="/">
            Home
          </Link>
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  .background-logo {
    display: none;
  }

  .container-image {
    position: absolute;
    top: -5em;
    left: 0;
    max-width: 100vw;
    width: 100%;
    z-index: -1;
  }

  .container-image img {
    max-width: 100%;
    width: 100%;
    object-fit: cover;
  }

  .container-error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 140px;
    height: calc(100vh - 140px);
    padding: 0 2em;
  }

  span {
    display: block;
    font-family: var(--headingFont);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: var(--lightGray);
  }

  .code {
    font-weight: 300;
    font-size: 9rem;
  }

  p {
    padding: 0.5em 0;
  }

  .home-link {
    display: block;
    padding: 1em 6em;
    text-align: center;

    background: var(--lightGray);

    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }

  .home-link:focus,
  .home-link:hover {
    background: var(--darkGray);
  }

  @media (min-width: 607px) {
    .container-image {
      top: -12em;
    }

    .container-error {
      margin-top: 109px;
      height: calc(100vh - 109px);
    }
  }

  @media (min-width: 697px) {
    .container-out {
      display: flex;
      justify-content: center;
    }

    .background-logo {
      display: block;
      position: absolute;
      top: 109px;
      left: 0;
    }

    .container-image {
      top: 109px;
      right: 0;
      left: unset;
      width: 70%;
      overflow: hidden;
    }

    .container-image img {
      margin-left: 30em;
    }

    .container-error {
      padding: 4em 0;
      max-width: 400px;
      height: auto;
    }
  }

  @media (min-width: 1000px) {
    .background-logo {
      width: 600px;
      left: -20%;
      top: calc(50% + 109px);
      transform: translateY(calc(-50%));
    }

    .container-image {
      top: calc(109px + 50%);
      transform: translateY(-50%);
    }
    .container-error {
      padding: 4em 0;
      max-width: 800px;
      min-height: calc(100vh - 109px);
    }

    span {
      font-size: 3rem;
    }

    .code {
      font-size: 18rem;
    }

    p {
      max-width: 600px;
    }

    .home-link {
      align-self: center;
      max-width: 300px;
    }
  }

  @media (min-width: 1197px) {
    .background-logo {
      left: -10%;
      top: calc(50% + 109px);
      transform: translateY(calc(-50%));
    }
    .container-image img {
      margin-left: 40em;
      width: auto;
      height: 100vh;
    }
  }

  @media (min-width: 1678px) {
    .container-image {
      bottom: unset;
      height: auto;
      margin-left: 50em;
    }
  }

  @media (min-width: 1729px) {
    .container-error {
      min-height: calc(100vh - 150px);
    }
    .background-logo {
      left: 5%;
    }

    .container-image img {
      margin-left: 60em;
    }
  }
`;
