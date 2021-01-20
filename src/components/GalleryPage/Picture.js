import React from 'react';
import classes from './Picture.css';
const picture = (props) => {
    return (
       
        <div
            style={props.styles}
            className={classes.Picture}>
            <div className={classes.Message}>{props.message}</div>

        </div>
    );
};

export default picture;