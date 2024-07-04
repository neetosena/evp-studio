import styled from "styled-components";

const Title = ({ name }) => {
  return (
    <Wrapper>
      <h1 className="title">{name}</h1>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  .title {
    margin-top: 1em;
    padding: 0;
    position: relative;
    font-family: var(--headingFont);
    font-size: 1.417rem;
    font-weight: 300;
  }

  .title::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 0.2em;
    top: 1.4em;
    right: 0;
    background: var(--darkGray);
  }

  .title::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 0.05em;
    top: 1.7em;
    left: 0;
    background: var(--darkGray);
  }
`;
