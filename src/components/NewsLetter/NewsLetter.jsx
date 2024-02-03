import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive Offers in your Email</h1>
    <p>Subscribe to our NewLetter and stay updated.</p>
    <div>
        <input type='email' placeholder='Enter your Email Id'/>
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter