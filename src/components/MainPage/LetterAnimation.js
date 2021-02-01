import React from 'react';
import classes from './LetterAnimation.css';
import Letter from './Letter';


const letterAnimation = (props) => {
    let letterArray = props.text.split("");
 

    return (
        <div
            className={classes.LetterHolder}>
            {letterArray.map((letter) =>
                <Letter>
                    {letter}
                </Letter>
            )}
        </div>

    );
}

export default letterAnimation;