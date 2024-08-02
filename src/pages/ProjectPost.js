import styled from "styled-components";
import Carousel from "../components/Carousel";
import SlideShow from "../components/SlideShow";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ArrowBackTop from "../components/ArrowBackTop";
import BackgroundLogo from "../images/logo_background.svg";
import { useGlobalContext } from "../components/context";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { slugConversion } from "../utils/slugConversion";
import { dateConversion } from "../utils/dateConversion";

const ProjectPost = () => {
  const { article, scrollToSection } = useGlobalContext();
  const location = useLocation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexArticle, setCurrentIndexArticle] = useState(0);
  const [showSlide, setShowSlide] = useState({});

  const handleClick = (i, slideShowKey, index) => {
    setCurrentIndex(i);
    setShowSlide({ [slideShowKey]: true });
    setCurrentIndexArticle(index);
  };

  useEffect(() => {
    scrollToSection(location);
  }, [location, scrollToSection]);

  return (
    <Wrapper>
      <Navbar colorScheme="gray" />
      <div className="inner-container">
        <div className="sidebar">
          {article.length > 0 &&
            article.map((item) => {
              const { fields, sys } = item;
              return (
                <Sidebar
                  key={sys.id}
                  name={fields.title}
                  date={dateConversion(fields.date)}
                  url={`#${slugConversion(fields.title)}`}
                />
              );
            })}
        </div>
        <img
          className="background-logo"
          src={BackgroundLogo}
          alt="EVP Studio"
        />

        <div className="wrapper-project">
          {article.length > 0 &&
            article.map((item, index) => {
              const { fields, sys } = item;
              return (
                <div
                  key={sys.id}
                  id={`${slugConversion(fields.title)}`}
                  className="project-container"
                >
                  <Carousel
                    images={fields.images.map(
                      (img) => img.fields.file.url + "?q=20"
                    )}
                    handleClick={(i) => handleClick(i, sys.id, index)}
                  />
                  <span className="project-title">{fields.title}</span>
                  {fields.paragraph.content.map((paragraph, i) => {
                    const { content } = paragraph;
                    return <p key={i}>{content[0].value}</p>;
                  })}
                </div>
              );
            })}
          {Object.keys(showSlide).length > 0 &&
          showSlide[Object.keys(showSlide)] === true ? (
            <div className="slideshow">
              <SlideShow
                image={
                  article[currentIndexArticle].fields.images[currentIndex]
                    .fields.file.url
                }
                title={article[currentIndexArticle].fields.title}
                date={dateConversion(article[currentIndexArticle].fields.date)}
                setShowSlide={setShowSlide}
                index={currentIndex}
                setIndex={setCurrentIndex}
                totalImages={article[currentIndexArticle].fields.images.length}
                slideShowKey={Object.keys(showSlide)}
              />
            </div>
          ) : null}
        </div>
      </div>
      <ArrowBackTop />

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

  .project-container p {
    color: var(--lightGray);
  }

  .sidebar {
    display: none;
  }

  //I have to figure out this one when I use the contentful API
  .project-container:nth-child(even) {
    position: relative;
    padding-bottom: 2em;
  }

  .project-container:nth-child(even)::after {
    content: "";
    position: absolute;
    top: -2em;
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
    background: rgba(0, 0, 0, 0.9);
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
      background: rgba(0, 0, 0, 0.8);
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
