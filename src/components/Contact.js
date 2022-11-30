import { Button, Heading, Input, Textarea, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  const [isSmallerScreen]=useMediaQuery("(max-width:576px)");
  return (
    <div className="container-fluid" id="contact">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>How you can Communicate?</p>
            <Heading
              as="h2"
              fontFamily="'Mochiy Pop One', sans-serif"
              size="lg"
            >
              Contack Me
            </Heading>
          </div>
        </div>
        <div className="row contact-row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mx-auto text-center">
            <div className={`row ${isSmallerScreen?"":"my-3"}`}>
              <div className={`col-lg col-md col-sm p-0 ${isSmallerScreen&&"my-3"}`}>
                <Input width={isSmallerScreen?"100%":"98%"} placeholder="Name" />
              </div>
              <div className={`col-lg col-md col-sm p-0 ${isSmallerScreen && "text-end my-2"}`}>
                <Input width={isSmallerScreen?"100%":"98%"} placeholder="Email" />
              </div>
            </div>
            <div className="row my-3">
              <Input placeholder="Subject" />
            </div>
            <div className="row my-3">
              <Textarea placeholder="Message" rows="5" />
            </div>
            <Button className="my-3" colorScheme="purple" size="lg">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
