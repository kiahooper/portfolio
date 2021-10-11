import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    pageX: 0,
    pageY: 0,
  });

  const updatePosition = event => {
    const { pageX, pageY } = event;

    setPosition({
      pageX,
      pageY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;