import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "../images/logo-contact.svg";
import ContactImage from "../images/130-Sandyford-Road_DSC1692-1.jpg";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Wrapper>
      <Navbar colorScheme={"gray"} />
      <div className="title-container">
        <Title name="Contact" />
      </div>
      <div className="contact-container">
        <div className="inner-container">
          <img src={ContactImage} alt="Dundrum" />
          <Link className="contact-logo" to="/">
            <img src={Logo} alt="EVP Studio" />
          </Link>
          <a href="#">
            16 Beechdale Road, Ballycullen, <br />
            Dublin, D24HD76
          </a>
          <div className="inner-details">
            <a href="tel:+353879063287">
              <BsFillTelephoneFill className="details-icon" />
              +353 87 906 3287
            </a>
            <a href="mailto:emmet@evpstudio.ie">
              <FaEnvelope className="details-icon" />
              emmet@evpstudio.ie
            </a>
          </div>
        </div>
        <div className="inner-container">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  .title-container {
    display: flex;
    justify-content: center;
    margin-top: 9em;
    margin-bottom: 3em;
  }
  .inner-container {
    padding: 0 2em;
    margin-bottom: 2em;
  }

  .inner-container img {
    max-width: 100%;
    padding-bottom: 2em;
  }

  .inner-container a {
    display: inline-block;
    color: var(--lightGray);
    line-height: 1.7;
  }

  .contact-logo {
    display: none !important;
  }

  .inner-details {
    padding-top: 1em;
  }

  .inner-details a {
    display: flex;
    width: max-content;
    align-items: center;
  }

  .details-icon {
    margin-right: 0.7em;
  }

  @media (min-width: 697px) {
    .contact-container {
      display: flex;
      padding-bottom: 2em;
    }

    .inner-container {
      flex-basis: 50%;
    }

    .inner-container img {
      padding-bottom: 1em;
    }

    .contact-logo {
      display: block !important;
    }
  }
  @media (min-width: 1000px) {
    .title-container {
      margin-top: 12em;
    }
    .contact-container {
      max-width: 1000px;
      margin: auto;
    }
  }
`;
