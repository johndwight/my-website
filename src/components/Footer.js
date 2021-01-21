import React from 'react';
import classes from './Footer.css'
import linkedin from '../assets/img/linkedin.png';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <div>
                <p>John Paragas</p>
            </div>

            <div className={classes.FooterLinks}>
                <a href="https://www.youtube.com/watch?v=tAb9iR6TXAM" target="_blank" rel="noopener noreferrer" className={classes.FooterLinks}>111 seconds of happiness</a>
                <a href="https://www.youtube.com/watch?v=8OTglgfKdMo" target="_blank" rel="noopener noreferrer" className={classes.FooterLinks}>120 seconds of sadness</a>

            </div>

            <div className={classes.SocialLinks}>
                <a href="https://www.instagram.com/johndwight" target="_blank" rel="noopener noreferrer"><img src="https://www.flaticon.com/svg/static/icons/svg/87/87390.svg" alt="instagram" /></a>
                <a href="https://www.facebook.com/johndwightparagas" target="_blank" rel="noopener noreferrer"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111392.svg" alt="facebook" /></a>
                <a href="https://www.linkedin.com/in/john-dwight-paragas" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
            </div>
            <div style={{fontSize:"0.2rem"}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div style={{fontSize:"0.2rem"}}>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
};


export default footer;