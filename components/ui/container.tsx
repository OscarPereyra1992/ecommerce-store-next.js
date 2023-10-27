'use client';
import {motion} from 'framer-motion'
import Transition from './Transition';

interface ContainerProps{
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
  return(
  <motion.div className="mx-auto max-w-7xl">
    <Transition />
    {children}
    
  </motion.div>
  );
};

export default Container;
