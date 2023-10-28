import { MouseEvent } from 'react';
import { useMotionValue } from 'framer-motion';

const useMouseMove = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return { handleMouseMove, mouseX, mouseY };
};

export default useMouseMove;
