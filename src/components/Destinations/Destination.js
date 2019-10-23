import React from "react";

import "./Destination.css";
import img1 from '../../img/waikiki.jpeg';
import img2 from '../../img/railay-beach.jpg';
import img3 from '../../img/tijuana.jpg';
 
const Destination = (props) => (
    <div className="destination-main">
        <div className="destination-title">{props.title}</div>
        <div className="container-destination">
            
            <div className="col1">
                <img src={img1} alt=""/>
                <h2>Waikiki Beach - Oahu</h2>
                <div className="details col1-container">
                    <h3>Duration</h3>
                    <h4>7 days</h4>
                </div>
                <div className="details col2-container">
                    <h3>Date</h3>
                    <h4>18.07.2020</h4>
                </div>
                <div className="details col3-container">
                    <h3>Price</h3>
                    <h5>$3000</h5>
                </div>
            </div>

            <div className="col2">
            <img src={img2} alt=""/>
                <h2>Railey Beach - Thailand</h2>
                <div className="details col1-container">
                    <h3>Duration</h3>
                    <h4>10 days</h4>
                </div>
                <div className="details col2-container">
                    <h3>Date</h3>
                    <h4>18.01.2020</h4>
                </div>
                <div className="details col3-container">
                    <h3>Price</h3>
                    <h5>$1600</h5>
                </div>
            </div>

            <div className="col3">
            <img src={img3} alt=""/>
                <h2>Harbour Island - Bahamas</h2>
                <div className="details col1-container">
                    <h3>Duration</h3>
                    <h4>12 days</h4>
                </div>
                <div className="details col2-container">
                    <h3>Date</h3>
                    <h4>06.03.2020</h4>
                </div>
                <div className="details col3-container">
                    <h3>Price</h3>
                    <h5>$2200</h5>
                </div>
            </div>
        </div> 
    </div>

);

export default Destination;