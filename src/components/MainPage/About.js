import React from 'react';
import classes from './About.css';
import johnPic from '../../assets/img/LinkedIn.jpg';

const about = () => {
    return (
        <div className={classes.PictureTextWrapper}>
            <img src={johnPic} alt="john" />
            <div className={classes.Text}>
                <h2>About Me</h2>
                <p className={classes.AboutMeContent}>I am a 2nd-year student in Computer Science pursuing a career in web developing.
                I love anything related to front-end and am super interested in learning more about how the back-end works. <br /><br />
                I've always had a love for technology - from a young age I would spend my days on a computer. Fun fact: 
                I once deleted one of my sister's projects to make enough space for Maplestory.

                </p>
            </div>

        </div>

    );
}


export default about;