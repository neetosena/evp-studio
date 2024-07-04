import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Wrapper>
      <Navbar colorScheme="transparent" />
      <Hero />

      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
