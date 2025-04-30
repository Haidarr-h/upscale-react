// AnimatedCounter.jsx
import { useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ from = 0, to = 100, duration = 2, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const count = useMotionValue(from);
  const [displayCount, setDisplayCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        onUpdate(value) {
          setDisplayCount(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {displayCount.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
