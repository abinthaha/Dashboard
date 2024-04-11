import React, { useEffect, useState } from "react";
import "./index.css";

const ParticlesComponent = () => {
  const [mouse, setMouse] = useState({ left: 0, top: 0 });
  const [particleDisplay, setDisplay] = useState("inline-block");

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMouse({ left: e.pageX, top: e.pageY });
      setDisplay("visible");

      setTimeout(() => {
        setDisplay("hidden");
      }, 1000);
    });

    document.addEventListener("mouseout", (event) => {
      event.stopPropagation();
      setDisplay("hidden");
    });

    return () => {
      document.removeEventListener("mousemove");
      setDisplay("hidden");
    };
  }, []);

  return (
    <span
      className="cursor"
      style={{ left: mouse.left, top: mouse.top, visibility: particleDisplay }}
    ></span>
  );
};
export default ParticlesComponent;
