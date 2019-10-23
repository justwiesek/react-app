import React from "react";

import "./About.css";
import about from '../../img/info-img.jpg';

const About = (props) => (
    <div className="main-about">
        <div className="about-container">
            
            <div className="about-img">
                <img src={about} alt=""/>
            </div>

            <div className="about-info">
                <h2>{props.title}</h2>
                <h3>who we are ?</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ullam vero inventore, ut voluptatem nemo at explicabo maxime error quae deserunt possimus, ab, pariatur perferendis numquam ad a accusamus voluptatibus.</p>
            </div>
        </div>
    </div>

);
 
export default About;


