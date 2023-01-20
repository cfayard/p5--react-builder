import React, { useEffect, useState } from "react";
import Sketch from "react-p5";

export default function TestSketch() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 1000).parent(canvasParentRef);
    // p5.noSroke();
  };

  const draw = (p5, ellipseOne) => {
    if (value < 10) {
      p5.background(200, 666, 1000);
    }
    if ((value > 10) & (value < 12)) {
      p5.background(200, 55, 200);
    }
    if (value > 12) {
      // p5.background(0, 0, 0);
      p5.background("orangered");
    }
    p5.rect(150, 100, 100, 100);

    p5.ellipse(300, 100, 100);
    p5.square(300, 100, 250);
  };

  const changeValue = () => {
    console.log("value: ", value);
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    setValue(value + rand);
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
      <div className="flex flex-col bg-blue-700">
        <div>This is the value: {value}</div>
        <button color="blue" onClick={() => changeValue()}>
          {" "}
          +
        </button>
      </div>
    </>
  );
}
