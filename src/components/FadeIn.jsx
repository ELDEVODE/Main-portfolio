import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from './useOnScreen';

const FadeIn = ({ children }) => {
  const ref = useRef();
  const inView = useOnScreen(ref, { triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;