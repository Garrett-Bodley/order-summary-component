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
        className="attribution-reveal"
        onClick={toggleVisibility}
      >
        <CursorClick role="button" width="100%" />
      </div>
      <animated.div
        className="attribution"
        style={springStyle}
      >
        <div className="attribution-text">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
          </p>
          <p>
            Coded by{" "}
            <a
              href="https://github.com/Garrett-Bodley"
            >
              Garrett Bodley
            </a>
          </p>
        </div>
        <div className="attribution-hide">
          <ArrowBarRight role="button" width="100%" onClick={toggleVisibility} />
        </div>
      </animated.div>
    </>
  );
};

export default Attribution;
