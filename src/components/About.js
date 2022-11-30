import {Heading } from "@chakra-ui/react";
import React from "react";
import Img from '../media/man.png';

const About = () => {
  return (
    <div className="container-fluid" id="about">
      <div className="container-lg">
        <div className="row align-items-center about-sec-row">
          <div className="col-lg-4 col-md-5 p-0 col-sm-8 col-10 mx-auto">
            <div >
              <img src={Img} alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-sm-11 mx-auto col-12 my-2">
            <div className="pt-3">
            <p className="mb-2">Who am i?</p>
            <Heading
              as="h2"
              fontFamily="'Mochiy Pop One', sans-serif"
              size="lg"
            >
              About Me
            </Heading>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae aliquid ad provident aut fuga animi soluta quae eos
              non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
              impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae
              delectus velit officiis explicabo voluptatibus! Nemo esse
              similique, voluptates labore distinctio, placeat explicabo facilis
              molestias, blanditiis culpa iusto voluptatem ratione eligendi a,
              quia temporibus velit vero ipsa sint ex voluptatum expedita
              aliquid! Debitis, nam!
            </p><br/><br/>
           <button className="cv-download-btn">Download Cv</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
