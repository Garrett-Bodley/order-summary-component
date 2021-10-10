import React, { useState } from "react";
import "./ordersummary.css";
import {
  BackgroundPatternDesktop,
  BackgroundPatternMobile,
  HeroIllustration,
} from "./Images/cardImages";
import SelectedPlan from "./SelectedPlan";
import Attribution from "./Attribution";
import { isBrowser } from "react-device-detect";
import {animated, config, useSpring} from 'react-spring'

const OrderSummary = (props) => {
  const [attrVisible, setAttrVisible] = useState(false);

  const toggleAttrVis = () => {
    setAttrVisible(!attrVisible);
  };

  const springStyle = useSpring({
    y: attrVisible ? '-10em' : '0em',
    config: config.stiff
  })

  return (
    <div className="container">
      <div className="background">
        {!isBrowser ? (
          <BackgroundPatternMobile className="background-pattern" />
        ) : (
          <BackgroundPatternDesktop className="background-pattern" />
        )}
      </div>
      <animated.section
        role="main"
        className="card"
        style={!isBrowser ? springStyle : null}
      >
        <div className="card-hero">
          <HeroIllustration />
        </div>
        <article className="card-content">
          <h2 role="banner" className="card-title">Order Summary</h2>
          <p className="card-description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <SelectedPlan />
          <button role="form" aria-label="primary" className="btn btn-primary">Proceed to Payment</button>
          <button role="form" aria-label="secondary" className="btn btn-secondary">Cancel Order</button>
        </article>
      </animated.section>
      <Attribution isVisible={attrVisible} toggleVisibility={toggleAttrVis} />
    </div>
  );
};

export default OrderSummary;
