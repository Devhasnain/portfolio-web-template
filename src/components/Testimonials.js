import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import Img2 from "../media/avatar2.jpg";
import Img3 from "../media/avatar3.jpg";

const Testimonials = () => {
  return (
    <div className="container-fluid my-5" id="testimonials">
      <div className="container-lg">
        <div className="row">
        <div className="col text-center">
            <p>What my Clients say about me?</p>
            <Heading
              as="h2"
              fontFamily="'Mochiy Pop One', sans-serif"
              size="lg"
            >
              Testimonials
            </Heading>
            </div>
        </div>
        <div className="row m-0 testimonials-row">
          <div className="col-lg col-md col-sm-9 col-12 mx-auto p-4">
            <div className="d-flex align-items-center justify-content-start border p-2">
              <div className="">
                <img src={Img2} alt="" />
              </div>
              <div className="p-0">
                <Text fontSize="17px">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque doloribus autem aperiam earum nostrum omnis blanditiis
                  corporis perspiciatis adipisci nihil.
                </Text>
                <Heading as="h2" size="md" className="my-2" color="purple.900">Hasnain</Heading>
              </div>
            </div>
          </div>
          <div className="col-lg col-md col-sm-9 col-12 mx-auto p-4">
          <div className="d-flex align-items-center justify-content-start border p-2">
              <div className="">
                <img src={Img3} alt="" />
              </div>
              <div className="p-0">
                <Text fontSize="17px">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque doloribus autem aperiam earum nostrum omnis blanditiis
                  corporis perspiciatis adipisci nihil.
                </Text>
                <Heading as="h2" size="md" className="my-2" color="purple.900">Hasnain</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
