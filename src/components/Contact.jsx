import React from 'react';

const Contact = () => {
  return (
    <div className='bg-custom-gradient min-h-screen flex flex-col justify-start items-center pt-20 relative'>
      <h1
        className='text-transparent text-center text-[120px] sm:text-[80px] md:text-[100px] font-bold absolute'
        style={{ WebkitTextStroke: '1px #ffffff', filter: 'blur(3px)' }}
      >
        CONTACT ME
      </h1>

      <h2 className='text-[#9EC8B9] text-center text-[90px] font-extrabold md:text-[30px] pt-[50px] michroma-font'>
        Send me a message
      </h2>

      <form className='w-full max-w-lg pt-[100px]'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <input
              className='appearance-none block w-full bg-transparent text-gray-300 border-b-2 border-gray-400 py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-white'
              type='text'
              placeholder='First Name'
              aria-label='First Name'
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <input
              className='appearance-none block w-full bg-transparent text-gray-300 border-b-2 border-gray-400 py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-white'
              type='text'
              placeholder='Last Name'
              aria-label='Last Name'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <input
              className='appearance-none block w-full bg-transparent text-gray-300 border-b-2 border-gray-400 py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-white'
              type='email'
              placeholder='Email'
              aria-label='Email'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <textarea
              className='appearance-none block w-full bg-transparent text-gray-300 border-b-2 border-gray-400 py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-white'
              placeholder='Message'
              aria-label='Message'
              rows='4'
            ></textarea>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='bg-transparent border border-[#9EC8B9] text-[#9EC8B9] py-2 px-4 rounded-3xl hover:bg-[#9EC8B9] hover:text-black transition-colors duration-300'
            type='submit'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
