import React from "react";
import "./attribution.css";
import { CursorClick } from "@styled-icons/fluentui-system-filled/CursorClick";
import { ArrowBarRight } from "@styled-icons/bootstrap/ArrowBarRight";
import { animated, config, useSpring } from "react-spring";

const Attribution = (props) => {
  const { isVisible, toggleVisibility } = props;

  const springStyle = useSpring({
    right: isVisible ? "0em" : "-25em",
    config: config.stiff,
  });

  return (
    <>
      <div
        role="form"
        aria-labelledby="show-attribution"
        className="attribution-reveal"
        onClick={toggleVisibility}
      >
        <CursorClick width="100%" />
      </div>
      <animated.div
        role="complementary"
        className="attribution"
        style={springStyle}
      >
        <div className="attribution-text">
          <p role="contentinfo">
            Challenge by{" "}
            <a
              aria-label="Challenge source"
              role="navigation"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
          </p>
          <p role="contentinfo">
            Coded by{" "}
            <a
              role="navigation"
              aria-label="Developer site"
              href="https://github.com/Garrett-Bodley"
            >
              Garrett Bodley
            </a>
          </p>
        </div>
        <div role="form" className="attribution-hide">
          <ArrowBarRight width="100%" onClick={toggleVisibility} />
        </div>
      </animated.div>
    </>
  );
};

export default Attribution;
