import React from 'react';

const Contact = () => {
  return (
    <section>
      <h2 className='heading-2 text-center'>Get In Touch</h2>
      <div className='flex gap-3'>
        <div className='w-2/5'>MAP</div>
        <div className='w-3/5'>
          <h3>Contact Me</h3>
          <form>
            <div className='flex gap-1'>
              <input
                type='text'
                placeholder='#Your Name'
                className='text-field'
              />
              <input
                type='text'
                placeholder='#Your Email'
                className='text-field'
              />
            </div>
            <textarea
              name=''
              id=''
              placeholder='#Your Message'
              className='text-field w-full h-28 mt-2'
            ></textarea>
            <button type='button' className='btn bg-blue-700 text-white'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
