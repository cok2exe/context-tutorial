// import React from "react";
// import { ColorConsumer } from "../contexts/color";

import React, { useContext } from "react";
import ColorContext from "../contexts/color";

/*
const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: state.color
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};
*/

const ColorBox = () => {
  const { state: {color, subcolor} } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: color
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          backgroundColor: subcolor
        }}
      />
    </>
  );
};

export default ColorBox;
