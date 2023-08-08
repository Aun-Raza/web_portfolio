'use client';

import React from 'react';
import { Arrow as ArrowIcon } from '@public/assets/index';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });
  return (
    <section
      id='contact'
      className='container px-0 md:px-3 mx-auto py-2 md:py-24'
    >
      <h2 className='heading-2 center md:w-full '>
        <ArrowIcon className='inline fill-blue-900' />
        Get In Touch
        <ArrowIcon className='inline fill-blue-900 rotate-180 md:hidden' />
      </h2>
      <div className='flex flex-col md:flex-row gap-3'>
        <div className='md:w-2/5 h-60 px-0 sm:px-8 md:px-0 md:h-auto'>
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
        <div className='md:w-3/5'>
          <h3 className='heading-3 center'>
            {' '}
            <ArrowIcon className='inline fill-blue-600' />
            Message Me
            <ArrowIcon className='inline fill-blue-600 rotate-180 md:hidden' />
          </h3>
          <form
            action='https://formspree.io/f/xwkjdqbd'
            method='POST'
            className='rounded-md pt-1 p-3'
          >
            <div className='flex flex-col sm:flex-row gap-3 '>
              <input
                type='text'
                placeholder='#Your Name'
                className='text_field sm:w-1/2'
                required
              />
              <input
                type='text'
                placeholder='#Your Email'
                className='text_field sm:w-1/2'
                required
              />
            </div>
            <textarea
              name=''
              id=''
              placeholder='#Your Message'
              className='text_field w-full h-28 mt-2'
              required
            ></textarea>
            <button
              type='submit'
              className='btn bg-blue-700 text-white mx-auto md:mx-1'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
