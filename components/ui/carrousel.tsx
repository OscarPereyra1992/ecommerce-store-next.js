import { motion, AnimatePresence} from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel: React.FC = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container relative flex items-center">
      <motion.button
        className="carousel-button previous text-white"
        onClick={handlePreviousImage}
        whileHover={{ scale: 1.2 }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </motion.button>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex} 
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="carousel-image w-106 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <motion.button
        className="carousel-button next text-white"
        onClick={handleNextImage}
        whileHover={{ scale: 1.2 }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </motion.button>
    </div>
  );
};

export default Carousel;