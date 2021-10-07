import React from "react";
import { CursorClick } from "@styled-icons/fluentui-system-filled/CursorClick";
import { ArrowBarRight } from "@styled-icons/bootstrap/ArrowBarRight";
import "./attribution.css";

const Attribution = (props) => {
  
  const { isVisible, toggleVisibility } = props

  const style = {
    right: isVisible ? 0 : "-25em",
    transition: `right 500ms cubic-bezier(0.645, 0.045, 0.355, 1)`,
  };

  return (
    <>
      <div className="attribution-reveal" onClick={toggleVisibility}>
        <CursorClick width="100%" />
      </div>
      <div {...props} className="attribution" style={style}>
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
            .
          </p>
          <p>
            Coded by{" "}
            <a href="https://github.com/Garrett-Bodley">Garrett Bodley</a>.
          </p>
        </div>
        <div className="attribution-hide">
          <ArrowBarRight width="100%" onClick={toggleVisibility} />
        </div>
      </div>
    </>
  );
};

export default Attribution;
