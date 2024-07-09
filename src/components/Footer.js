import styled from "styled-components";
import Logo from "../images/logo-evpstudio.svg";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container-footer">
        <Link className="container-logo" to="#">
          <img src={Logo} alt="EVP Studio" />
        </Link>
        <div className="inner-footer">
          <a href="#">
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
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  padding: 5em 0;
  background: var(--lightGray);
  z-index: 1;

  .container-footer {
    max-width: 1000px;
    padding: 0 2em;
    margin: 0 auto;
  }

  .container-footer a:hover {
    opacity: 0.5;
  }

  .container-logo {
    display: block;
    padding-bottom: 1em;
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

  @media (max-width: 600px) {
    padding: 2em 0;

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
