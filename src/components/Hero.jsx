import { useState, useEffect } from 'react';
import Button from './Button';

const Hero = () => {
  const heroImages = [
    '/assets/IMG_0426.JPG',
    '/assets/IMG_1369.JPEG.jpg',
    '/assets/IMG_6755.JPEG.jpg',
    '/assets/IMG_6759.JPEG.jpg',
    '/assets/IMG_6760.JPEG.jpg',
    '/assets/IMG_6762.JPEG.jpg',
    '/assets/IMG_6763.JPEG.jpg',
    '/assets/IMG_6767.JPEG.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Hero Image Slideshow */}
        <div className="hero-img">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`CreateitAfrica Portfolio ${index + 1}`}
              className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          {/* Contact Button */}
          <div className="contact-btn">
            <Button label="Contact" icon="arrow-forward-sharp" />
          </div>

          {/* Menu Button */}
          {/* <div className="menu-btn">
            <Button label="Menu" icon="menu-sharp" />
          </div> */}

          {/* Header */}
          <div className="header">
            <h1>CreateitAfrica</h1>
          </div>

          {/* Hero Footer */}
          <div className="hero-footer">
            <h3>
              Capturing the soul of Africa through visual storytelling.
            </h3>
            <p>
              From vibrant cultures to breathtaking landscapes, we bring African stories to life with authentic creativity and professional excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;