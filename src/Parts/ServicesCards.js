import React from "react";
import Img1 from "../media/pencil.svg";
import Img2 from "../media/responsive.svg";
import Img3 from "../media/toolbox.svg";
import Img4 from "../media/analytics.svg";
import {Heading } from "@chakra-ui/react";

const cards = [
  {
    img: Img1,
    title: "Card Title",
    des: "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
  },
  {
    img: Img2,
    title: "Card Title",
    des: "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
  },
  {
    img: Img3,
    title: "Card Title",
    des: "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
  },
  {
    img: Img4,
    title: "Card Title",
    des: "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
  },
];

const ServicesCards = () => {
  return (
    <>
      {cards.map((item, index) => {
        return (
          <div className="col-lg-3 col-md-3 col-sm-5 mx-auto col-10 my-3" key={index}>
            <div className="services-card-hover border p-3">
              <div className="text-center services-card-img-div">
                <img src={item.img} alt="" className="s-card-img mb-3" />
                <Heading as="h4" size="md" color="#695aa6">
                  {item.title}
                </Heading>
              </div>
              <div className="text-center paragraph">
                <p>{item.des}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServicesCards;
