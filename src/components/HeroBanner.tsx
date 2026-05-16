import React from 'react';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  image: string;
  video: string;
  title: string;
  description: string;
}

function HeroBanner({ image, video, title, description }: HeroBannerProps) {
  return (
    <div className="hero-banner">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-banner-content"
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </motion.div>
      <div className="hero-banner-media">
        <video
          autoPlay
          loop
          muted
          src={video}
          className="hero-banner-video"
        />
        <img src={image} alt="Background image" className="hero-banner-image" />
      </div>
    </div>
  );
}

export default HeroBanner;