import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-secondary p-10'>
      <div>
        <h3 className='text-primary text-2xl font-semibold'>Contact info</h3>
        <div className='my-5 text-white leading-loose'>
          <p className='text-white'>Call : 9999999999</p>
          <p className='text-white'>email : coffe@gmail.com</p>
          <p className='text-white'>Find Us : Banglore</p>
        </div>
      </div>
      <div>
        <h3 className='text-primary text-2xl font-semibold'>Helpful links</h3>
         <ul className='text-white leading-loose my-5'>
          <li>Home</li>
          <li>About</li>
          <li>Rooms</li>
         </ul>
      </div>
      <div>
        <h3 className='text-primary text-2xl font-semibold'>Subscribe</h3>
        <p className='my-5 text-md leading-loose text-white'>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
      </div>
    </div>
  )
}
