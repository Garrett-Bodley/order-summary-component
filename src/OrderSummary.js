import React, {useState} from "react";
import "./ordersummary.css";
import {
  BackgroundPatternDesktop,
  HeroIllustration,
} from "./Images/cardImages";
import SelectedPlan from "./SelectedPlan";
import Attribution from "./Attribution";
import { isMobile } from "react-device-detect";

const OrderSummary = (props) => {
  const [attrVisible, setAttrVisible] = useState(false);

  const [attrVisible, setAttrVisible] = useState(false)

  const toggleAttrVis = () => {
    setAttrVisible(!attrVisible);
  };

  const style = {
    transform: "translateY(-5em)",
  };

  return (
    <div className="container">
      <div className="background">
        {isMobile ? (
          <BackgroundPatternMobile className="background-pattern" />
        ) : (
          <BackgroundPatternDesktop className="background-pattern" />
        )}
      </div>
      <article className="card" style={attrVisible && isMobile ? style : null}>
        <div className="card-hero">
          <HeroIllustration />
        </div>
        <section className="card-content">
          <p className="card-title">Order Summary</p>
          <p className="card-description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <SelectedPlan />
          <button className="btn btn-primary">Proceed to Payment</button>
          <button className="btn btn-secondary">Cancel Order</button>
        </section>
      </article>
      <Attribution isVisible={attrVisible} toggleVisibility={toggleAttrVis} />
    </div>
  );
};

export default OrderSummary;
