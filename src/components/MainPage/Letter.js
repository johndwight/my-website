import React, { useState } from 'react';
import classes from './Letter.css';


const Letter = (props) => {

    const [animated, setAnimated] = useState(false);

    return (
        <h1
            onMouseOver={() => setAnimated(() => true)}
            className={`${classes.Letter} ${animated ? classes.Animated : ''}`}
            onAnimationEnd={() => setAnimated(() => false)}
        >
            {props.children}
        </h1>

    );
}

export default Letter;