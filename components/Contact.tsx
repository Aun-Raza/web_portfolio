'use client';

import React from 'react';
import { Arrow as ArrowIcon } from '@public/assets/index';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Input, Textarea } from '@nextui-org/react';

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });
  return (
    <section id='contact' className=' bg-white '>
      <div className='container px-0 md:px-3 mx-auto py-2 md:py-24'>
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
            <h3 className='heading-3 center'>Contact Me</h3>
            <form
              action='https://formspree.io/f/xwkjdqbd'
              method='POST'
              className='rounded-md pt-1 p-3 flex flex-col gap-2'
            >
              <div className='flex flex-col sm:flex-row gap-3'>
                <Input
                  id='name'
                  name='name'
                  label='Name'
                  type='text'
                  placeholder='Enter your name'
                  className='sm:w-1/2'
                  required
                />
                <Input
                  id='email'
                  name='email'
                  label='Email'
                  type='email'
                  placeholder='Enter your email'
                  className='sm:w-1/2'
                  required
                />
              </div>
              <Textarea
                id='message'
                name='message'
                label='Message'
                placeholder='Enter your message'
                required
              />
              <button
                type='submit'
                className='btn bg-blue-500 text-white flex justify-center'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
