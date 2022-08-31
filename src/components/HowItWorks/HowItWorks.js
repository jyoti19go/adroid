import React from 'react'
import "./HowItWorks.css"
import Articles from "../../images/articles.png"
import Connection from "../../images/connection.png"
import Line from "../../images/line.png"
import Login from "../../images/login.png"
import Posts from "../../images/posts.png"
import Profilepic from "../../images/profilepic.png"

const HowItWorks = () => {
    return (
        <div className="main-work">
            <div className="heading">
                <h1>How It <span>Works</span></h1>
                <p>Going through a roadmap of its working to better understand how its going to be </p> <p>different from everyone</p>
            </div>
            <form action="">
                <select id="dropdown" name="dropdown">

                    <option value="Student">Student</option>
                </select>
            </form>
            <img className='line' src={Line} alt="" />
            <div className="below">
                <div className="parts">
                    
                    <div className="profile">
                        <img src={Profilepic} alt="" />
                        <div className="registration boxes">
                            <h3>Registration</h3>
                            <p>Register on the AdroidConnectz App</p>
                        </div>
                    </div>
                    <div className="login">
                        <img src={Login} alt="" />
                        <div className="createProfile boxes">
                            <h3>Create Profile</h3>
                            <p>Create your profile after first registering</p>
                        </div>
                    </div>
                    <div className="connection">
                        <img src={Connection} alt="" />
                        <div className="makeConnection boxes">
                            <h3>Make Connections</h3>
                            <p>Connect with peers and mentors, consult them</p>
                        </div>
                    </div>
                    <div className="posts">
                        <img src={Posts} alt="" />
                        <div className="notifications boxes">
                            <h3>Notifications</h3>
                            <p>Notifications based on Rsearch, Startup and Counselling</p>
                        </div>
                    </div>
                    <div className="articles">
                        <img src={Articles} alt="" />
                        <div className="addOns boxes">
                            <h3>Add Ons</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks