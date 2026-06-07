import React from 'react';
import { motion } from 'framer-motion';

const StyledPic: React.FC = () => {
  return (
    <div className="relative max-w-[300px] md:max-w-full md:w-full aspect-square">
      <motion.div className="wrapper relative w-full h-full rounded-lg bg-primary shadow-md overflow-hidden">
        <div className="flex items-center justify-center w-full h-full text-primary-foreground">
          <span>Photo</span>
        </div>
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -right-4 w-full h-full border-2 border-primary rounded-lg"
      />
    </div>
  );
};

export default StyledPic;
