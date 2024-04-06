import React, { useState } from "react";
import { Container } from "react-bootstrap";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1); 

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="aboutus">
      <Container>
        <h2 className="heading">Web & Mobile App Development</h2>
        <div className="accordion-item">
          <div
            className={activeIndex === 0 ? 'accordion-tittle-open' : 'accordion-title'}
            onClick={() => toggleAccordion(0)}
            
          >
            <div>
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </div>
            <div className="icon">{activeIndex === 0 ? "-" : "+"}</div>
          </div>
          {activeIndex === 0 && (
            <div className="accordion-content-open">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
              ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className={activeIndex === 1 ? 'accordion-tittle-open' : 'accordion-title'}
            onClick={() => toggleAccordion(1)}
          >
            <div>
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </div>
            <div>{activeIndex === 1 ? "-" : "+"}</div>
          </div>
          {activeIndex === 1 && (
            <div className="accordion-content-open">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
              ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className={activeIndex === 2 ? 'accordion-tittle-open' : 'accordion-title'}
            onClick={() => toggleAccordion(2)}
           
          >
            <div>
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </div>
            <div>{activeIndex === 2 ? "-" : "+"}</div>
          </div>
          {activeIndex === 2 && (
            <div className="accordion-content-open">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
              ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
