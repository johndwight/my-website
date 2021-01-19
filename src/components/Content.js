import React from 'react';
import classes from './Content.css';
import { Spring } from 'react-spring/renderprops';


const content = () => {
    return (
        <Spring
            from={{opacity: 0, marginLeft: -500}}
            to={{opacity: 1, marginLeft: 0}}
            config={{delay:1000, duration: 1000}}
        >
            {props => (
                    <div style={props} className={classes.Background}>
                        <h1>A look into John's life</h1>
                    </div>
            )}

        </Spring>

    );
}
export default content;