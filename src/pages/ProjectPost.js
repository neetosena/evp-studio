import styled from "styled-components";
import Carousel from "../components/Carousel";
import SlideShow from "../components/SlideShow";

import { testCarousel, testCarousel2 } from "../utils/gallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BackgroundLogo from "../images/logo_background.svg";
import { useGlobalContext } from "../components/context";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectPost = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlide, setShowSlide] = useState({
    carousel: false,
    carousel2: false,
  });

  const { scrollToSection } = useGlobalContext();
  const location = useLocation();

  const handleClick = (i, slideShowKey) => {
    setCurrentIndex(i);
    setShowSlide((prevState) => ({ ...prevState, [slideShowKey]: true }));
  };

  console.log(currentIndex);
  useEffect(() => {
    scrollToSection(location);
  }, [location, scrollToSection]);

  return (
    <Wrapper>
      <Navbar colorScheme="gray" />
      <div className="inner-container">
        <div className="sidebar">
          <Sidebar
            name="Dundrum House"
            date="April 2023"
            url="#dundrum-house"
          />
          <Sidebar
            name="Killakee House"
            date="May 2022"
            url="#killakee-house"
          />
        </div>
        <img
          className="background-logo"
          src={BackgroundLogo}
          alt="EVP Studio"
        />

        <div className="wrapper-project">
          <div id="dundrum-house" className="project-container">
            <Carousel
              images={testCarousel}
              handleClick={(i) => handleClick(i, "carousel")}
            />

            <span className="project-title">Dundrum House</span>
            <p>
              This home is located in close proximity to a quiet local park and
              enjoys views of the woodland and mature trees from the front. The
              existing house required significant modifications and expansion to
              deliver on the client brief for a contemporary family home. In
              addition to the functional requirements, light, connectivity to
              the outdoors and adaptability were key design considerations.
            </p>
            <p>
              The hall creates a direct axis through the house, widening to
              bring as much light as possible to the centre of the plan and
              provide visual links to the front and rear gardens. Ceiling
              heights have been raised to allow tall windows bringing
              surrounding tree foliage into view.
            </p>
            <p>
              Internally the plan is designed to be as open and free flowing as
              possible with full height glazed doors and screens to the hallway;
              the primary spaces formed in a soft white finish and a single
              floor material throughout. A wall and stairs of oak slats
              organises movement; anchors the composition and with the fitted
              oak furniture brings a natural warmth to the space.
            </p>
            <p>
              The other rooms in the home are finished with oak flooring or
              tiles and painted to suit the function and orientation while
              storage spaces are discreetly located within walls.
            </p>
            <p>
              Externally the massing of the building respects the streetscape
              and is modelled to optimise natural light in home and garden. A
              soft white render and red brick bedded in a light mortar form the
              basic pallet. A natural tone is introduced at ground level to the
              front enhancing the entrance way.
            </p>
          </div>
          <div id="killakee-house" className="project-container project-2">
            <Carousel
              images={testCarousel2}
              handleClick={(i) => handleClick(i, "carousel2")}
            />

            <span className="project-title">Killakee House</span>
            <p>
              This home is located at the foothills of the Dublin mountains. The
              original house provides a calm interior with a simple pallet of
              finishes and collection of furniture and artwork. The client brief
              was to create a brighter, larger kitchen & dining area, better
              connected to the surrounding garden and scenery.
            </p>
            <p>
              Initial modelling explored the contrasting concepts of openness
              and shelter. The resulting built form wraps the internal space
              while providing connectivity to the outdoor seating and planting
              areas. The composition of openings frame key views and deliver a
              panoramic aspect, while maintaining a comfortable environment.
            </p>
            <p>
              Internally the plan is designed to be as open as possible while
              providing a little separation between the functional area of the
              kitchen. Finishes are simple and run through seamlessly from the
              existing house. The external form is simple and designed to allow
              views over the extension to the landscape beyond and keep the
              integrity of the original gable end.
            </p>
            <p>
              Externally a simple timber pergola and a planting deck address the
              main openings, and provide structures for planting at the
              interface with the surrounding landscape.
            </p>
          </div>
        </div>
      </div>
      {showSlide.carousel2 && (
        <div className="slideshow">
          <SlideShow
            image={testCarousel2[currentIndex].img}
            title="Killakee House"
            date="May 2022"
            setShowSlide={setShowSlide}
            showSlide={showSlide.carousel2}
            index={currentIndex}
            setIndex={setCurrentIndex}
            totalImages={testCarousel2.length}
            slideShowKey="carousel2"
          />
        </div>
      )}
      {showSlide.carousel && (
        <div className="slideshow">
          <SlideShow
            image={testCarousel[currentIndex].img}
            title="Dundrum House"
            date="April 2023"
            setShowSlide={setShowSlide}
            showSlide={showSlide.carousel}
            index={currentIndex}
            setIndex={setCurrentIndex}
            totalImages={testCarousel.length}
            slideShowKey="carousel"
          />
        </div>
      )}

      <Footer />
    </Wrapper>
  );
};

export default ProjectPost;

const Wrapper = styled.div`
  .project-container {
    margin-top: 9em;
    padding: 0 2em;
    scroll-margin-top: 10em;
  }

  .sidebar {
    display: none;
  }

  //I have to figure out this one when I use the contentful API
  .project-2 {
    position: relative;
    padding-bottom: 2em;
  }

  .project-2::after {
    content: "";
    position: absolute;
    top: -6em;
    left: 0;
    width: 100%;
    height: calc(7em + 100%);
    z-index: -1;
    background: var(--veryLightGray);
  }

  .project-title {
    font-family: var(--headingFont);
    color: var(--lightGray);
    font-size: 1.1704rem;
    font-weight: 700;
  }

  .background-logo {
    display: none;
  }

  //style the div that contains the SlideShow Component
  .slideshow {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  @media (min-width: 697px) {
    .inner-container {
      display: flex;
      gap: 4em;
      margin: 0 auto;
      max-width: 900px;
    }

    .background-logo {
      display: inline-block;
      position: fixed;
      top: 50%;
      left: 0;
      width: 30%;
      max-width: 600px;
      height: auto;
      z-index: -1;
    }

    .project-container {
      padding: 0 2em;
    }

    .project-2::after {
      top: -2em;
    }

    .project-container:nth-of-type(even) {
      margin-top: 5em;
      margin-bottom: 6em;
    }

    .wrapper-project {
      flex-basis: 70%;
      margin-left: auto;
      padding-bottom: 4em;
    }
    .sidebar {
      padding: 0 2em;
      position: fixed;
      width: 15em;
      display: block;
      margin-top: 9em;
      z-index: 0;
    }

    //style the div that contains the SlideShow Component
    .slideshow {
      background: rgba(0, 0, 0, 0.9);
    }
  }

  @media (min-width: 1000px) {
    .background-logo {
      top: 37%;
      left: 9em;
    }

    .sidebar {
      padding: 0;
    }
  }
  @media (min-width: 1690px) {
    .background-logo {
      top: 30%;
      left: 30em;
    }
  }
`;
