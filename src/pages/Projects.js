import styled from "styled-components";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectsCard";
import Image1 from "../images/130-Sandyford-Road_DSC1692-1.jpg";
import Image2 from "../images/Aragon-Killakee_DSC9413_Panorama 2-about.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <Wrapper>
      <Navbar colorScheme="gray" />
      <div className="title-container">
        <Title name="Projects" />
      </div>
      <div className="project-container">
        <Link className="link-card" to="/projects/project-post#dundrum-house">
          <ProjectCard
            image={Image1}
            title="Dundrum House"
            date="April 2023"
            description="This home is located in close proximity to a quiet local park and enjoys views of the woodland and mature trees from the front. The existing house required significant modifications and expansion to deliver on the client brief for a contemporary family home. In addition to the functional requirements, light, connectivity to the outdoors and adaptability were key design considerations."
          />
        </Link>
        <Link className="link-card" to="/projects/project-post#killakee-house">
          <ProjectCard
            image={Image2}
            title="Killakee House"
            date="May 2022"
            description="This home is located at the foothills of the Dublin mountains. The original house provides a calm interior with a simple pallet of finishes and collection of furniture and artwork. The client brief was to create a brighter, larger kitchen & dining area, better connected to the surrounding garden and scenery."
          />
        </Link>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  .title-container {
    display: flex;
    justify-content: center;
    margin-top: 9em;
    margin-bottom: 3em;
  }

  .project-container {
    margin: 0 2em;
  }

  .link-card {
    display: block;
    margin-bottom: 2em;
    text-decoration: none;
    color: var(--lightGray);
  }

  @media (min-width: 697px) {
    .title-container {
      margin-top: 12em;
    }

    .project-container {
      margin: 0 auto;
      padding: 0 2em;
      padding-bottom: 4em;
      max-width: 800px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2em;
    }
  }
`;
