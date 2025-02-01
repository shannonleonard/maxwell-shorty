import React, { useState, useEffect } from 'react';
import VerticalSlideshow from './VerticalSlideshow';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const handlePrevious = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key.toLowerCase()) {
        case 'arrowright':
          handleNext();
          break;
        case 'arrowleft':
          handlePrevious();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="App min-h-screen bg-gray-900">
      <VerticalSlideshow currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </div>
  );
}

export default App;
