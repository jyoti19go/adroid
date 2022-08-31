import React from 'react'
import "./MakeUsDifferent.css"
import Arrow from "../../images/arrow.png"
import Boy from "../../images/boy.png"
import VectorRed from "../../images/vectorRed.png"

const Different = () => {
  return (
    <div className="main-diff">
        <div className="intr">
            <h1>What makes us <span>different?</span></h1>
            <h3>Learning has never been easier! Well to make it interesting and exciting we have brought with some <span>GOALS</span></h3>
            <div className="para">
                <img src={Arrow} alt="" />
                <h4>INTEREST & MOTIVATION</h4>
            </div>
            <p>It provides opportunity to students to know their interest and motivate them to accomplish their dreams</p>
            <div className="para">
                <img src={Arrow} alt="" />
                <h4>BENEFITS</h4>
            </div>
            <p>It provides students with the addons like peer connection,student mentor relationships, internships, Hackathons, Higher studies,  training jobs , tutorial, course materials.</p>
            <div className="para">
                <img src={Arrow} alt="" />
                <h4>FOCUS ON EVERYONE</h4>
            </div>
            <p>It mainly focuses on students, help them to solve their problems and make them thinker and motivator to work in the direction of Research and startup.</p>
        </div>
        <div>
            <img className="boy" src={Boy} alt="" />
            <img className='vector' src={VectorRed} alt="" />
        </div>
    </div>
  )
}

export default Different