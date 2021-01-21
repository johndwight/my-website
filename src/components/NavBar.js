import React, { useState } from 'react';
import classes from './NavBar.css';
import './NavBar.css'
import {
    NavLink
} from "react-router-dom";
import square from '../assets/img/square.png';

function NavBar()  {
    const [showLinks, setShowLinks] = useState(false);
    

    return (
        
      
                <div className={classes.NavBar}>
                    <p><strong>John Paragas</strong> | Computer Science</p>
                    <button 
                        className={classes.Icon}
                        onClick={() => setShowLinks(!showLinks)} >
                            <img 
                                alt="hamburger" 
                                src={square}></img></button>
                
                    <div className={classes.Links} id={showLinks ? "" : "none"}>
                        <NavLink exact to="/my-website" activeStyle={{ fontWeight: "bold", color: "#cae4db" }}>Home</NavLink>
                        {/* <NavLink exact to="/my-website/about" activeStyle={{ fontWeight: "bold", color: "#cae4db" }}>About</NavLink> */}
                        <NavLink exact to="/my-website/my-gallery" activeStyle={{ fontWeight: "bold", color: "#cae4db" }}>My Gallery</NavLink>
                        {/* <NavLink exact to="/my-website/interests" activeStyle={{ fontWeight: "bold", color: "#cae4db" }}>My Interests</NavLink> */}
                    </div>
                </div>
            

    );
}


export default NavBar;