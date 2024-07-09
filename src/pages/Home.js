import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useEffect } from "react";

import { useGlobalContext } from "../components/context";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { scrollToSection } = useGlobalContext();

  useEffect(() => {
    scrollToSection(location);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location, scrollToSection]);
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
