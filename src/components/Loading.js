import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;

    border-radius: 50%;
    border: 3px solid var(--lightGray2);
    border-top-color: white;
    animation: spinner 0.6s linear infinite;
  }
  @media (max-width: 697px) {
    min-height: 25vh;
  }
`;
