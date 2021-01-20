import React from 'react';
import classes from './Footer.css'

const footer = () => {
    return (
        <div className={classes.Footer}>
            <div>
                <p>John Paragas</p>
            </div>

            <div className={classes.FooterLinks}>
                <a href="https://www.youtube.com/watch?v=tAb9iR6TXAM" target="_blank" rel="noopener noreferrer" className={classes.FooterLinks}>111 seconds of happiness</a>
                <a href="aboutUs.html" className={classes.FooterLinks}>About Us</a>
            </div>

            <div className={classes.SocialLinks}>
                <a href="https://www.instagram.com/johndwight" target="_blank" rel="noopener noreferrer"><img src="https://www.flaticon.com/svg/static/icons/svg/87/87390.svg" alt="instagram"/></a>
                    <a href="https://www.facebook.com/johndwightparagas" target="_blank" rel="noopener noreferrer"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111392.svg" alt="facebook"/></a>
            </div>
            </div>
    );
};


export default footer;