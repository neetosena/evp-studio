import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
