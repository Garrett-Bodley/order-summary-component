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
    <main className="container">
      <div className="background">
        {!isBrowser ? (
          <BackgroundPatternMobile className="background-pattern" />
        ) : (
          <BackgroundPatternDesktop className="background-pattern" />
        )}
      </div>
      <animated.div
        className="card"
        style={!isBrowser ? springStyle : null}
      >
        <div className="card-hero">
          <HeroIllustration />
        </div>
        <article className="card-content">
          <h1 className="card-title">Order Summary</h1>
          <p className="card-description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <SelectedPlan />
          <button className="btn btn-primary">Proceed to Payment</button>
          <button className="btn btn-secondary">Cancel Order</button>
        </article>
      </animated.div>
      <Attribution isVisible={attrVisible} toggleVisibility={toggleAttrVis} />
    </main>
  );
};

export default OrderSummary;
