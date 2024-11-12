import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WebCard from './WebCard'; // Adjust the path if necessary

import img1 from '../assets/cf.jpg';
import img2 from '../assets/chester.jpg';
import img3 from '../assets/doctor.jpg';
import img4 from '../assets/notion1.jpg';
import img5 from '../assets/nike.jpg';
import img6 from '../assets/bank.jpg';

const WebPortfolio = () => {
  const responsive = {
    superLargeDesktop: {
      // screens larger than 1600px
      breakpoint: { max: 4000, min: 1600 },
      items: 3,
    },
    desktop: {
      // screens between 1024px and 1600px
      breakpoint: { max: 1600, min: 1024 },
      items: 3,
    },
    tablet: {
      // screens between 464px and 1024px
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      // screens less than 464px
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='bg-custom-gradient min-h-screen flex flex-col justify-start items-center pt-20 relative'>
      <h1
        className='text-transparent text-center text-[120px] sm:text-[80px] md:text-[100px] font-bold absolute'
        style={{ WebkitTextStroke: '1px #ffffff', filter: 'blur(3px)' }}
      >
        MY PORTFOLIO
      </h1>

      <h2 className='text-[#9EC8B9] text-center text-[90px] font-extrabold md:text-[30px] pt-[50px] michroma-font'>
        Web and mobile Projects
      </h2>

      <div className='w-full pt-[80px] pl-[40px]'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          <WebCard
            image={img1}
            title="Project CareFirst"
            description="A Parmacy management system UXUI design "
            pdfLink="https://github.com/HiranyaDilukshi/CAREFIRST-ITPM-PROJECT.git"
          />
          <WebCard
            image={img2}
            title="Chester Tribute Page"
            description="Tribute design for the singer Chester Bennington."
            pdfLink="/path/to/project-chester.pdf"
          />
          <WebCard
            image={img3}
            title="Doctor Mobile App"
            description="This is a UI design for a doctor channelling app"
            pdfLink="/path/to/project-doctor.pdf"
          />
          <WebCard
            image={img4}
            title="Project Boardima"
            description="A home renting mobile app concept UI design"
            pdfLink="/path/to/project-cf.pdf"
          />
          <WebCard
            image={img5}
            title="The Nike Store"
            description="Nike online Store concept design and prototype."
            pdfLink="/path/to/project-chester.pdf"
          />
          <WebCard
            image={img6}
            title="Banking Mobile App"
            description="This is a UI design for a banking mobile app"
            pdfLink="/path/to/project-doctor.pdf"
          />
        </Carousel>
      </div>

      <div className='mt-8'>
        <a
          href="https://github.com/LAKEY82" // Update this link to your actual portfolio page
          className='bg-transparent border border-[#9EC8B9] text-[#9EC8B9] py-2 px-4 rounded-3xl hover:bg-[#9EC8B9] hover:text-black transition-colors duration-300'
        >
          My GitHub
        </a>
      </div>
    </div>
  );
};

export default WebPortfolio;
