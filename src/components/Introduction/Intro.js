import React from 'react'
import './Intro.css'
import Books from "../../images/books.png"
import Rectangle from "../../images/rectangle.png"

const Intro = () => {
  return (
    <div className='overlay'>
        <img className='below' src={Books} alt="shape" />
        <img className='above' src={Rectangle} alt="shape" />
        <div className="text">
            <div className="left">
            <h1>Learn more and</h1><h1>make success the</h1><h1>result</h1>
            </div>
            <div className="right">
                <p>Adroidconnectz is an online platform to</p>
                     <p>connect Students with Mentors and provide </p>
                     <p>them with the opportunity to grow and build</p>
                     <p> their career.</p>
            </div>
        </div>
    </div>    
  )
}

export default Intro