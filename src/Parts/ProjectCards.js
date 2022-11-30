import { Heading } from "@chakra-ui/react";
import React from "react";
import Img1 from "../media/card1.jpg";
import Img2 from "../media/card2.jpg";
import Img3 from "../media/card3.jpg";
const Projects = [
  {
    title: "Web Template",
    img: Img1,
  },
  {
    title: "Web Template",
    img: Img2,
  },
  {
    title: "Web Template",
    img: Img3,
  },
];
const ProjectCards = () => {
  return (
    <>
      {Projects.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-4 col-sm-6 col-10 my-3 mx-auto" key={index}>
            <div className="projects-hover-parent">
              <div className="">
                <img src={item.img} alt="" />
              </div>
              <div className="web-tem-urls">
                <Heading as="h4" size="lg" color="#695aa6">
                  {item.title}
                </Heading>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCards;
