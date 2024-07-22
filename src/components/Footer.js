import styled from "styled-components";
import Logo from "../images/logo-evpstudio.svg";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <div className="container-footer">
          <Link className="container-logo" to="/">
            <img src={Logo} alt="EVP Studio" />
          </Link>
          <div className="inner-footer">
            <a
              href="https://www.google.com/maps/place/Oldcourt,+Dublin,+D24+HD76/@53.2703603,-6.3408206,16z/data=!3m1!4b1!4m6!3m5!1s0x48670b21e341cbf7:0x138ceac2614d4b4d!8m2!3d53.2703609!4d-6.3356708!16s%2Fg%2F11c1p893k4?entry=ttu"
              rel="noreferrer"
            >
              16 Beechdale Road, Ballycullen, <br />
              Dublin, D24HD76
            </a>
            <div className="inner-details">
              <a href="tel:+353879063287">
                <BsFillTelephoneFill />
                +353 87 906 3287
              </a>
              <a href="mailto:emmet@evpstudio.ie">
                <FaEnvelope />
                emmet@evpstudio.ie
              </a>
            </div>
            <div className="inner-footer-items">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-designer-by">
        <p>
          © 2024 EVP Studio | Design by:{" "}
          <a href="https://netosena.ie" rel="noreferrer">
            Neto Sena
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  .inner-wrapper {
    position: relative;
    padding: 5em 0;
    background: var(--lightGray);
    z-index: 1;
  }

  .container-footer {
    max-width: 1000px;
    padding: 0 2em;
    margin: 0 auto;
  }

  .inner-footer a:hover,
  inner-details a:hover,
  inner-footer-items a:hover {
    opacity: 0.5;
  }

  .container-logo {
    display: inline-block;
    padding-bottom: 1em;
  }

  .container-logo:hover,
  .container-logo:focus {
    opacity: 0.5;
  }

  .inner-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .inner-footer a {
    color: white;
    line-height: 1.5;
  }

  .inner-details {
    display: flex;
    flex-direction: column;
  }

  .inner-details a {
    padding-bottom: 0.3em;
    width: 100%;
  }
  .inner-details svg {
    margin-right: 1em;
    font-size: 0.8rem;
  }

  .inner-footer-items li {
    margin-bottom: 1em;
    list-style-type: ">  ";
    color: white;
  }

  //////////////////////////////////////////////////
  //design by Neto Sena

  .container-designer-by {
    padding: 1em 0;
    text-align: center;
    background: #4a4747;
    color: var(--lightGray2);
  }

  .container-designer-by p {
    max-width: 100%;
    margin: 0;
  }

  .container-designer-by a {
    color: white;
    font-weight: 700;
    transition: opacity 0.5s ease-in-out;
  }

  .container-designer-by a:focus,
  .container-designer-by a:hover {
    opacity: 0.5;
  }
  //////////////////////////////////////////////////
  @media (max-width: 600px) {
    .inner-wrapper {
      padding: 2em 0;
    }

    .container-logo {
      padding-bottom: 2em;
    }

    .inner-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .inner-footer > a {
      padding-bottom: 1em;
    }

    .inner-footer-items ul {
      padding-left: 1em;
    }
  }
`;
