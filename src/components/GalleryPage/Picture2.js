import React from 'react';
import classes from './Picture2.css';
const picture = (props) => {
    return (
       
        <div className={classes.Container}>
            <img src={props.image} alt=""/>
            <div className={classes.BottomText}>{props.message}</div>


        </div>
    );
};

export default picture;