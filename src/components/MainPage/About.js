import React from 'react';
import classes from './About.css';
import johnPic from '../../assets/img/LinkedIn.jpg';

const about = () => {
    return (
        <div className={classes.PictureTextWrapper}>
            <img src={johnPic} alt="john" />
            <div className={classes.Text}>
                <h2>About Me</h2>
                <p className={classes.AboutMeContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur convallis quam turpis, commodo porttitor est dignissim ac.
                In justo purus, consequat non enim at, interdum mattis lorem.
                Sed rutrum venenatis tellus, ac tristique augue elementum vitae.
                Etiam eget libero eros. Aenean et arcu augue. Curabitur ut sollicitudin tortor.
                Aliquam ornare orci eget eros egestas, sit amet gravida purus dictum.</p>
            </div>

        </div>

    );
}


export default about;