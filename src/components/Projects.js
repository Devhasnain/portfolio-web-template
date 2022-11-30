import { Heading } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "../Parts/ProjectCards";

const Projects = () => {
  return (
    <div className="container-fluid my-4" id="projects">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>What i Did?</p>
            <Heading
              as="h2"
              fontFamily="'Mochiy Pop One', sans-serif"
              size="lg"
            >
              Projects
            </Heading>
          </div>
        </div>
        <div className="row projects-cards-row">
            <ProjectCards/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
