import React from 'react';
import classes from './About.css';
import johnPic from '../assets/img/LinkedIn.png';

const about = () => {
    return (
        <div className={classes.PictureLeftTextRight}>
            <img src={johnPic} alt="john"/>
            <h3>Heyo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur convallis quam turpis, commodo porttitor est dignissim ac. 
                In justo purus, consequat non enim at, interdum mattis lorem. 
                Sed rutrum venenatis tellus, ac tristique augue elementum vitae. 
                Etiam eget libero eros. Aenean et arcu augue. Curabitur ut sollicitudin tortor. 
                Aliquam ornare orci eget eros egestas, sit amet gravida purus dictum.</p>
        </div>

    );
}


export default about;