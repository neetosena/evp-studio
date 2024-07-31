import styled from "styled-components";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectsCard";
import Image1 from "../images/130-Sandyford-Road_DSC1692-1.jpg";
import Image2 from "../images/Aragon-Killakee_DSC9413_Panorama 2-about.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { slugConversion } from "../utils/slugConversion";
import { useGlobalContext } from "../components/context";
import { useEffect } from "react";

const Projects = () => {
  const { article, setArticle, isLoading, setIsLoading, error, setError } =
    useGlobalContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log(article);
  return (
    <Wrapper>
      <Navbar colorScheme="gray" />
      <div className="title-container">
        <Title name="Projects" />
      </div>
      <div className="project-container">
        {error && <p>Something went wrong...</p>}
        {isLoading && !article.length > 0 ? (
          <p>Loading...</p>
        ) : (
          article.map((item) => {
            const { fields, sys } = item;
            return (
              <Link
                className="link-card"
                key={sys.id}
                to={`/projects/project-post#${slugConversion(fields.title)}`}
              >
                <ProjectCard
                  image={fields.images[0].fields.file.url + "?q=20"}
                  title={fields.title}
                  date={fields.date}
                  description={fields.paragraph.content[0].content[0].value}
                />
              </Link>
            );
          })
        )}
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

  .project-container a {
    color: var(--lightGray);
  }

  .link-card {
    display: block;
    margin-bottom: 2em;
    text-decoration: none;
    color: var(--lightGray);
  }

  @media (min-width: 697px) {
    .link-card {
      margin-bottom: 0;
    }

    .title-container {
      margin-top: 12em;
    }

    .project-container {
      margin: 0 auto;
      padding: 0 2em;
      padding-bottom: 8em;
      max-width: 800px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2em;
    }
  }
`;
