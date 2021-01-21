import React from 'react';
import classes from './LandingPage.css';
import { Spring } from 'react-spring/renderprops';
import './LandingPage.css';

const landingPage = (propsfromapp) => {
    return (
           
                    
                    <div style={propsfromapp.styles} className={classes.Background}>
                        <div className={classes.Centered}>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ duration: 750, delay: 1500 }}
                            >
                                {props => (
                                    <h1 style={props}>{propsfromapp.firstLine}</h1>
                                )}

                            </Spring>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ duration: 750, delay: 3000 }}
                            >
                                {props => (
                                    <h2 style={props}>{propsfromapp.secondLine}</h2>
                                )}

                            </Spring>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ duration: 750, delay: 4500 }}
                            >
                                {props => (
                                    <h1 style={props}>{propsfromapp.thirdLine}</h1>
                                )}

                            </Spring>
                        </div>
                    </div>


    );
}
export default landingPage;