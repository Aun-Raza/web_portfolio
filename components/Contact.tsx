'use client';

import React from 'react';
import { Arrow as ArrowIcon } from '@public/assets/index';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });
  return (
    <section className='container mx-auto'>
      <h2 className='heading-2 text-center'>
        {' '}
        <ArrowIcon className='inline fill-blue-900' />
        Get In Touch
      </h2>
      <div className='flex gap-3'>
        <div className='w-2/5'>
          {!isLoaded ? (
            <p>Loading</p>
          ) : (
            <GoogleMap
              zoom={11}
              center={{ lat: 43.64, lng: -79.39 }}
              mapContainerClassName='map_container'
            ></GoogleMap>
          )}
        </div>
        <div className='w-3/5'>
          <h3 className='heading-3'>Contact Me</h3>
          <form className='border rounded-md p-3'>
            <div className='flex gap-1'>
              <input
                type='text'
                placeholder='#Your Name'
                className='text_field w-1/2'
              />
              <input
                type='text'
                placeholder='#Your Email'
                className='text_field w-1/2'
              />
            </div>
            <textarea
              name=''
              id=''
              placeholder='#Your Message'
              className='text_field w-full h-28 mt-2'
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
