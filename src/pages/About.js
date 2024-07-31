import styled from "styled-components";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { testimonials } from "../utils/testimonials";
import BackgroundLogo from "../images/logo_background.svg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Wrapper>
      <Navbar colorScheme={"gray"} />
      <div className="title-container">
        <Title name="About" />
      </div>
      <div className="about-container">
        <p>
          EVP studio is an architecture practice specialising in residential
          design. Based in Dublin and working across Ireland, works include
          small scale housing developments, one-off houses and the remodelling
          and extension of existing homes.
        </p>
        <p>
          The practice was established by Emmet Power who has worked with
          several award-winning practices in the residential, hospitality and
          pharmaceutical sectors.
        </p>
        <p>
          At EVP studio we adopt a collaborative approach throughout the
          process. From brief development, concept studies and design
          development through planning approval, construction and completion, a
          personal service is provided to our clients at every stage.
        </p>
      </div>
      <img className="background-logo" src={BackgroundLogo} alt="EVP Studio" />
      <div className="background-testimonials">
        <div className="title-container testimonials">
          <Title name="Testimonials" />
        </div>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => {
            const { id, name, image, text } = testimonial;

            return (
              <div
                key={id}
                className={`testimonials-inner-container inner-container-${id}`}
              >
                <img src={image} alt={name} />
                <div>
                  {text.map((t, index) => {
                    return <p key={index}>{t}</p>;
                  })}
                  <p className="name">{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  .title-container {
    display: flex;
    justify-content: center;
    margin-top: 12em;
    margin-bottom: 3em;
  }
  .testimonials {
    margin-top: 4em;
  }

  .background-logo {
    position: absolute;
    top: 5em;
    right: 30em;
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  .background-testimonials {
    padding: 1em 0;
    padding-bottom: 4em;
    background: var(--veryLightGray);
  }

  .about-container {
    padding-bottom: 7em;
  }

  .about-container p {
    color: var(--lightGray);
  }

  .about-container,
  .testimonials-container {
    margin: 0 auto;
    max-width: 800px;
  }

  .testimonials-inner-container img {
    display: block;
    width: 100%;
  }

  .testimonials-inner-container .name {
    font-weight: 900;
    color: var(--lightGray);
  }

  .testimonials-inner-container div {
    color: var(--lightGray);
  }

  .inner-container-1 {
    margin-bottom: 10em;
    display: flex;
  }

  .inner-container-1 img {
    margin-right: 3em;
    width: 47%;
    object-fit: cover;
  }
  .inner-container-2 img {
    margin-bottom: 3em;
  }

  @media (max-width: 1800px) {
    .background-logo {
      right: 4em;
      max-width: 600px;
    }
  }

  @media (max-width: 876px) {
    .about-container,
    .testimonials-container {
      padding: 0 2em;
    }

    .background-logo {
      width: 50%;
      top: 8em;
      right: 1em;
    }

    @media (max-width: 697px) {
      .title-container {
        margin-top: 9em;
      }

      .about-container {
        padding-bottom: 5em;
      }

      .background-logo {
        width: 90%;
        top: 7em;
        right: 50%;
        transform: translateX(50%);
        overflow: hidden;
      }

      .testimonials {
        margin-top: 2em;
      }

      .inner-container-1 {
        flex-direction: column;
        margin-bottom: 5em;
      }

      .inner-container-1 img {
        width: 100%;
        height: 400px;
      }

      .inner-container-2 img {
        margin-bottom: 1em;
      }
    }
  }
`;
