import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ name, date, url }) => {
  return (
    <Wrapper>
      <NavLink to={url}>
        <span className="sidebar-name">{name}</span>
        <span className="sidebar-date">{date}</span>
      </NavLink>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  margin-bottom: 1em;
  padding: 1em;
  background: var(--veryLightGray);
  transition: background 0.3s ease-in-out, transform 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background: var(--lightGray);
    transform: translateX(1%);

    span {
      color: white;
    }
  }

  span {
    display: block;
    color: var(--lightGray);
  }

  .sidebar-date {
    margin-top: 0.5em;
    font-size: 0.8331rem;
  }
`;
