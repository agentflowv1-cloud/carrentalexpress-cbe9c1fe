import React from 'react';
import HeroBanner from '../components/HeroBanner';

function Home() {
  return (
    <div>
      <HeroBanner
        image="https://example.com/background.jpg"
        video="https://example.com/background.mp4"
        title="Welcome to our website"
        description="This is our website, where you can find information about our business."
      />
    </div>
  );
}

export default Home;