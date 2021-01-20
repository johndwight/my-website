import React, { useState } from 'react';
import classes from './NavBar.css';
import './NavBar.css'
import {
    NavLink
} from "react-router-dom";

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
                                src="https://www.flaticon.com/svg/vstatic/svg/3388/3388797.svg?token=exp=1610487681~hmac=45e195a8c8f34f3a6b424929810ee478"></img></button>
                
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