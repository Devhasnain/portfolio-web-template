import { Heading } from "@chakra-ui/react";
import React from "react";
import ServicesCards from "../Parts/ServicesCards";

const Services = () => {
  return (
    <div className="container-fluid my-2" id="services">
      <div className="container-lg">
        <div className="row my-2 pt-5">
          <div className="col text-center">
            <p>What i Do?</p>
            <Heading
              as="h2"
              fontFamily="'Mochiy Pop One', sans-serif"
              size="lg"
            >
              Services
            </Heading>
          </div>
        </div>
        <div className="row services-sec-row" >
          <ServicesCards/>
        </div><br/>
      </div>
    </div>
  );
};

export default Services;
