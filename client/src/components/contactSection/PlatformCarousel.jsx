import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PlatformCarousel.css'; // Import your CSS file

const PlatformCarousel = () => {
  const platforms = [
    {
      name: 'Codechef',
      link: "https://www.codechef.com/users/rishabh2710",
      image: "https://i.imgur.com/T43L1z3.png",
      author: 'rishabh2710',
    },
    {
      name: 'Geeks for Geeks',
      link: "https://auth.geeksforgeeks.org/user/2710rismi/practice",
      image: "https://i.imgur.com/CdDkUrB.jpg",
      author: '2710rismi',
    },
    {
      name: 'LeetCode',
      link: "https://leetcode.com/RishabhMishra2710/",
      image: "https://i.imgur.com/KK8jmA9.png",
      author: 'RishabhMishra2710',
    },
    {
      name: 'GitHub',
      link: "https://github.com/RIsHaBHMiShrA2710",
      image: "https://i.imgur.com/FVP7GqQ.jpg",
      author: 'RIsHaBHMiShrA2710',
    },
    // Add more platform objects here
  ];


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
        <h2 className='skill-title'>CodeSpace</h2>
      </div>

      <div className="platform-slider">
        <Slider {...settings}>
          {platforms.map((platform, index) => (
            <div key={index} className="platform-box">
              <a href={platform.link} target="_blank" rel="noopener noreferrer">
                <img className="platform-image" src={platform.image} alt={platform.name} />
                <div className="platform-info">
                  <span className="platform-author">-{platform.author}</span>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlatformCarousel;
