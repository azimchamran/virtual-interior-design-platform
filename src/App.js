import React, { useRef, useEffect } from "react";
import threeSetup from "./threeSetup";

function MyComponent() {
  const container = useRef(null);

  useEffect(() => {
    threeSetup(container.current);
  }, []);

  return (
    <div className="container" ref={container}>
      <h1>My Virtual Interior Design Platform</h1>
      <p>Design your dream home interiors in 3D!</p>
    </div>
  );
}

export default MyComponent;