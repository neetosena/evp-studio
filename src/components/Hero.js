import { useState, useEffect } from "react";
import styled from "styled-components";
import { imagesHero } from "../utils/gallery";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((prevState) => {
        if (prevState === imagesHero.length - 1) {
          console.log(prevState);
          return (prevState = 0);
        } else {
          console.log(prevState);
          return prevState + 1;
        }
      });
    }, 6000);

    return () => {
      clearInterval(intervalID);
    };
  }, [index]);

  return (
    <Wrapper>
      <div className="container-hero">
        {imagesHero.map((item, i) => {
          const { image, name, id } = item;

          let position = "nextSlide";
          if (i === index) {
            position = "activeSlide";
          }
          if (i === index - 1 || (index === 0 && i === imagesHero.length - 1)) {
            position = "lastSlide";
          }

          return <img key={id} className={position} src={image} alt={name} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  .container-hero::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container-hero {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .container-hero img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    opacity: 0;
    height: 100vh;
    object-fit: cover;
    transition: all 0.8s ease-in-out;
  }
  .container-hero .activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  .container-hero .lastSlide {
    transform: translateX(0);
    /* transform: translateX(-100%); */
  }

  .container-hero .nextSlide {
    transform: translateX(0);
    /* transform: translateX(100%); */
  }
`;
