import { useState, useEffect } from "react";
import styled from "styled-components";
import { BsArrowUpSquare } from "react-icons/bs";

const ArrowBackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 2000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Wrapper $visible={isVisible ? "true" : undefined}>
      <BsArrowUpSquare onClick={handleClick} />
    </Wrapper>
  );
};

export default ArrowBackTop;

const Wrapper = styled.button`
  display: ${({ $visible }) => ($visible ? "inline-block" : "none")};
  position: fixed;
  bottom: 2em;
  right: 2em;
  font-size: 2rem;
  color: var(--lightGray2);
  background: none;
  outline: none;
  border: none;
  transition: color ease-in-out 0.3s;
  z-index: 999;

  &:hover,
  &:focus {
    cursor: pointer;
    color: black;
  }

  @media (max-width: 1130px) {
    bottom: 0.5em;
    right: 0.5em;
  }

  @media (max-width: 697px) {
    bottom: 0.2em;
    right: 0.2em;
  }
`;
