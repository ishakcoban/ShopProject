import React from 'react'

export const Home = () => {
  document.body.style = 'background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(123,222,21,1) 100%);height:100vh';
  return (
    <div className='info-home'>
      <div className='d-flex justify-content-center mt-5'>Welcome Back Our Shopping Website</div>
      <div className='d-flex justify-content-center mt-4'>You can look for Shop or Chart on navbar</div>
    </div>
  )
}
