import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PlatformCarousel.css'; // Import your CSS file

const PlatformCarousel = () => {
  const platforms = [
    {
      name: 'Codechef',
      image: "https://i.imgur.com/T43L1z3.png",
      author: 'Author 1',
    },
    {
      name: 'Geeks for Geeks',
      image: "https://i.imgur.com/CdDkUrB.jpg",
      author: 'Author 2',
    },
    {
        name: 'LeetCode',
        image: "https://i.imgur.com/KK8jmA9.png",
        author: 'Author 3',
      },
      {
        name: 'GitHub',
        image: "https://i.imgur.com/FVP7GqQ.jpg",
        author: 'Author 4',
      },
    // Add more platform objects here
  ];

  // Slick settings for the carousel
  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    variableWidth: true,
    swipe: true,
    arrow: true,
    lazyLoad: "progressive",
    centerPadding: "10px",
    slidesToShow: 1, 
    speed: 500,
  };

  return (
    <div className="platform-carousel">
      <div>
        <h2>CodeSpace</h2>
        </div>
        
      <div className="platform-slider">
      <Slider {...settings}>
        
        {platforms.map((platform, index) => (
          <div key={index} className="platform-box">
            <img className = "platform-image" src={platform.image} alt={platform.name} />
            <div className="platform-info">
              <span className="platform-name">{platform.name}</span>
              <span className="platform-author">{platform.author}</span>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
};

export default PlatformCarousel;
