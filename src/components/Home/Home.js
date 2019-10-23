import React from 'react';

import { Link } from "react-router-dom";
import "./Home.css";


const Home = (props) => (
    <div className="main-content">
        <div className="container-home">
            <h3>away from monotonous life</h3>
            <h2>{props.title}</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore tempora, laboriosam consequuntur quia quisquam enim rerum fuga suscipit, officia ducimus dignissimos quidem ut sed facere. Modi repellat vitae aut esse.</p>

            <div>
                <Link className="main-button" to="/destination" >get started</Link>
            </div>
        </div>
    </div>

);

export default Home;