import { useEffect, useState } from "react";
import styled from "styled-components";

const Carousel = ({ images, onIndexChange, handleClick }) => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    setIndex(index <= 0 ? images.length - 1 : index - 1);
  };

  const handleRightClick = () => {
    setIndex(index >= images.length - 1 ? 0 : index + 1);
  };

  //callback function to check if has on the ProjectPost an Index update to change the pictures on the SlideShow
  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(index);
    }
  }, [index, onIndexChange]);

  return (
    <Wrapper>
      <div className="container-img">
        {images.map((image, i) => {
          return (
            <img
              className={index === i ? "active-image" : "previous-image"}
              key={i}
              src={image}
              alt={i}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
      <span className="arrow arrow-left" onClick={handleLeftClick}></span>
      <span className="arrow arrow-right" onClick={handleRightClick}></span>
      <div className="bullets-container">
        {images.map((__, i) => {
          return (
            <span
              key={i}
              className={index === i ? "bullets bullet" : "bullets"}
            ></span>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 35em;

  .container-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30em;
    overflow: hidden;
  }

  .container-img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
  }

  .previous-image {
    opacity: 0;
  }

  .active-image {
    opacity: 1;
  }

  .arrow {
    position: absolute;
    top: 35%;
    padding: 0.5em;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1;
  }

  .arrow-left {
    left: 0;
  }

  .arrow-left::before {
    content: "<";
  }

  .arrow-right {
    right: 0;
  }

  .arrow-right::before {
    content: ">";
  }

  .bullets-container {
    position: absolute;
    top: 31em;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1em;

    z-index: 1;
  }

  .bullets {
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: var(--lightGray2);
  }

  .bullet {
    background: var(--darkGray);
  }
`;
