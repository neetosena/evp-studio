import styled from "styled-components";

const ProjectCard = ({ image, title, date, description }) => {
  return (
    <Wrapper>
      <img src={image} alt={title} />
      <div className="inner-container">
        <span className="title-project">{title}</span>
        <p>
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : `${description}`}
        </p>
        <span className="date">{date}</span>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;

const Wrapper = styled.div`
  border: 1px solid var(--lightGray2);
  -webkit-box-shadow: 10px 10px 51px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 10px 10px 51px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 10px 10px 51px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus {
    -webkit-box-shadow: 10px 10px 32px -14px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 10px 10px 32px -14px rgba(0, 0, 0, 0.57);
    box-shadow: 10px 10px 32px -14px rgba(0, 0, 0, 0.57);
    transform: translateX(1%);
  }

  .inner-container {
    margin: 2em;
  }

  img {
    max-width: 100%;
  }

  .title-project {
    display: block;
    margin-top: 1em;
    font-size: 1.1704rem;
    font-family: var(--headingFont);
    font-weight: 700;
    color: var(--darkGray);
  }

  .date {
    font-size: 0.875rem;
    display: block;
    margin-left: auto;
    text-align: right;
    color: var(--lightGray);
  }

  @media (min-width: 697px) {
    img {
      width: 100%;
      max-height: 180px;

      object-fit: cover;
    }
  }
`;
