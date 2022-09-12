import React, { useEffect, useState } from "react";
import Sketch from "react-p5";

export default function TestSketch() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("page load: ", value);
  }, [value]);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);
  };

  const draw = (p5, ellipseOne) => {
    p5.background(255, 130, 20);

    p5.ellipse(200, 50, 50);
    p5.ellipse(300, 100, 100);
  };

  const changeValue = () => {
    console.log("value: ", value);
    setValue(1988);
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
      <div>
        <div>This is the value: {value}</div>
        <button color="blue" onClick={changeValue}>
          {" "}
          +
        </button>
      </div>
    </>
  );
}
