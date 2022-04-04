import * as React from "react";
import { motion } from "framer-motion";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 }
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360 }
};

export const Refresh = ({ onClick }) => {
  return (
    <motion.div
      className="refresh"
      onClick={onClick}
      variants={button}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >

    </motion.div>
  );
};