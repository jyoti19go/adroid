import React from 'react'
import './Who.css'
import Effect from "../../images/effect.png"
import Group from "../../images/group.png"
import Vector1 from "../../images/vector1.png"
import Vector2 from "../../images/vector2.png"
import Vector3 from "../../images/vector3.png"

const Who = () => {
  return (
    <>
      <div className="effect">
        <img className='effect-img' src={Effect} alt="" />
        <h1>Who we <span>are?</span></h1>
      </div>
        <div className="main">
            <img className='main-img' src={Group} alt="" />        
            <div className="main-box">
                <div className="box">
                    <div className="b1">Adroidconnectz is the nation's biggest community of students and mentors , providing the one stop solution to all the queries related to startups , research , internships , higher studies ,innovations etc.</div>
                    <div className="b2">Team of Adroid connectz comprises of renowned ressearches and enterpreneurs . This team motivates the students to undertake a career exploration journey and make appropriate career choices at right time.</div>
                    <div className="b3">Adroidconnectz consistly updates the students to pace up with everchangng dynamism of technology and environment.</div>
                </div>
            </div>
        </div>
        <div className="side-img">
          <img src={Vector1} alt="" className="im1" />
          <img src= {Vector2}alt="" className="im2" />
          <img src={Vector3} alt="" className="im3" />
        </div>
           
    </>
  )
}

export default Who