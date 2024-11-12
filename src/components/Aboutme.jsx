import React from 'react';
import '../index.css'; // Make sure to import your CSS file

const Aboutme = () => {
  return (
    <div className='bg-custom-gradient min-h-screen flex flex-col justify-start items-center pt-20 relative'>
      {/* Outlined 'ABOUT ME' in the background with blur effect */}
      <h1 className='text-transparent text-center text-[120px] sm:text-[80px] md:text-[100px] font-bold absolute' 
          style={{ WebkitTextStroke: "1px #ffffff", filter: "blur(3px)" }}>
        ABOUT ME
      </h1>
      
      {/* Filled 'Who am I?' text in front */}
      <h2 className='text-[#9EC8B9] text-center text-[90px] font-extrabold md:text-[30px] pt-[50px] michroma-font'>
  Who am I?
</h2>
      
      {/* Paragraph section */}
      <div className='pt-[100px]'>
      <p className='text-white text-center text-3xl font-extralight'>
  Hi, I'm Lakindu Perera, a UX/UI designer and web developer. <br />
  I am passionate about creating user-centered designs that not only look great but also offer seamless user experiences. <br />
  With a keen eye for aesthetics and a dedication to functionality. <br />
  My expertise lies in understanding user needs and translating them into intuitive interfaces.
</p>

      </div>
      
      {/* Image content */}
      <div className='pt-[90px] w-full'>
        <div className='flex justify-center items-center text-white font-light'>
          <div className='px-[60px] text-center'>
            <p className='text-5xl text-[#9EC8B9]'>20+</p>
            <p className='text-2xl'>UX/UI<br />Designs</p>
          </div>
          <div className='px-[60px] text-center border-l-2 border-[#9EC8B9]'>
            <p className='text-5xl text-[#9EC8B9]'>10+</p>
            <p className='text-2xl'>Web<br />Projects</p>
          </div>
          <div className='px-[60px] text-center border-l-2 border-[#9EC8B9]'>
            <p className='text-5xl text-[#9EC8B9]'>50+</p>
            <p className='text-2xl'>Client<br />Projects</p>
          </div>
          <div className='px-[60px] text-center border-l-2 border-[#9EC8B9]'>
            <p className='text-5xl text-[#9EC8B9]'>24/7</p>
            <p className='text-2xl'>Available<br />Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
