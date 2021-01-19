import React from 'react';
import classes from './LandingPage.css';
import { Spring } from 'react-spring/renderprops';
import Aux from '../hoc/Auxiliary'
import './LandingPage.css'
const landingPage = () => {
    return (
        <Aux>
            <Spring
                from={{ opacity: 0, marginLeft: -750 }}
                to={{ opacity: 1, marginLeft: 0 }}
                config={{ duration: 750, delay: 750 }}
            >
                {props => (
                    <div style={props} className={classes.Background}>
                        <div className={classes.Centered}>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ duration: 750, delay: 1500 }}
                            >
                                {props => (
                                    <h1 style={props}>Hello,</h1>
                                )}

                            </Spring>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ duration: 750, delay: 3000 }}
                            >
                                {props => (
                                    <h1 style={props}>my name is John.</h1>
                                )}

                            </Spring>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ duration: 750, delay: 4500 }}
                            >
                                {props => (
                                    <h1 style={props}>Welcome!</h1>
                                )}

                            </Spring>
                        </div>
                    </div>
                )}

            </Spring>

        </Aux>

    );
}
export default landingPage;