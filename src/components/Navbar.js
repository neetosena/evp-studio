import styled from "styled-components";
import Logo from "../images/logo-evpstudio.svg";
import { Link, NavLink } from "react-router-dom";
import MenuHamburguer from "./MenuHamburguer";

const Navbar = ({ colorScheme }) => {
  return (
    <Wrapper className={`${colorScheme}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={Logo} alt="EVP Studio" />
        </Link>

        <MenuHamburguer />

        <div className="container-nav-items">
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
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  .nav-container {
    position: fixed;
    top: 0;
    left: 50%;
    padding: 1em 2em;
    transform: translateX(-50%);
    z-index: 2;
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--headingFont);
    font-weight: 400;
  }
  .nav-container ul {
    list-style: none;
    display: flex;
    gap: 7em;
  }
  .nav-container ul a {
    color: white;
  }

  .nav-container ul a:hover,
  .nav-container ul a:focus {
    color: var(--darkGray);
  }

  @media (max-width: 754px) {
    .nav-container ul {
      gap: 4em;
    }
  }

  @media (max-width: 697px) {
    .nav-container {
      padding-top: 0;
      padding-bottom: 0;
      height: 5em;
    }

    .container-nav-items {
      display: none;
    }

    .nav-container .logo {
      display: flex;
      justify-content: center;
    }

    .nav-container img {
      max-width: 200px;
    }
  }
`;
