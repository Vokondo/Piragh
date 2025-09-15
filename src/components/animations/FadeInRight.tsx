import React from 'react';
import { motion } from 'framer-motion';

interface FadeInRightProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInRight: React.FC<FadeInRightProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRight;
