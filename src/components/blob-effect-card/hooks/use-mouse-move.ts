import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

const useMouseMove = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMouseMove;
