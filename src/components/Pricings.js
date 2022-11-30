import { Heading } from "@chakra-ui/react";
import React from "react";
import PricingCards from "../Parts/PricingCards";

const Pricings = () => {
  return (
    <div className="container-fluid" id="pricings">
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <div className="col text-center">
              <p>How much i Charge?</p>
              <Heading
                as="h2"
                fontFamily="'Mochiy Pop One', sans-serif"
                size="lg"
              >
                Pricings
              </Heading>
            </div>
          </div>
        </div>
        <div className="row pricing-cards-row">
          <PricingCards />
        </div>
      </div>
    </div>
  );
};

export default Pricings;
