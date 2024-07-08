import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import IconLogo from "../images/logo-icon.svg";

const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <div className={`menu-hamburguer ${isOpen ? "open-container" : ""}`}>
        <img className="icon-logo" src={IconLogo} alt="EVP Studio" />
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`menu-container ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar top-bar"></div>
        <div className="bar middle-bar"></div>
        <div className="bar bottom-bar"></div>
      </div>
    </Wrapper>
  );
};

export default MenuHamburguer;

const Wrapper = styled.div`
  .menu-hamburguer {
    display: none;
  }

  @media (max-width: 697px) {
    .menu-container {
      position: absolute;
      top: 1.51em;
      right: 2em;
      cursor: pointer;
      width: 2em;
      height: 2em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .bar {
      width: 100%;
      height: 0.1em;
      background-color: var(--veryLightGray);
      transition: all 0.3s ease;
      z-index: 1;
    }

    .open .top-bar {
      transform: rotate(45deg) translate(0.5em, 0.425em);
    }

    .open .middle-bar {
      opacity: 0;
    }

    .open .bottom-bar {
      transform: rotate(-45deg) translate(0.5em, -0.425em);
    }

    .menu-hamburguer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: var(--lightGray);
      transform: translate(100%, 0);
      transition: all 0.2s ease;
      z-index: 1;
    }
    .open-container {
      transform: translate(0, 0);
    }

    .menu-hamburguer ul {
      display: flex;
      padding: 0;
      flex-direction: column;
    }

    .icon-logo {
      margin-bottom: 2em;
      max-width: 100px;
      width: 100%;
      opacity: 0.5;
    }
  }
`;
