import React from 'react';
import classes from './LandingPage.css';
import { Spring } from 'react-spring/renderprops';
import './LandingPage.css';
import LetterAnimation from './LetterAnimation';


const landingPage = (propsfromapp) => {
    return (
        <div className={classes.LandingPageWrapper}>




            <div style={propsfromapp.styles} className={classes.Background} id="FirstPage">

                <Spring
                    from={{ opacity: 0.75 }}
                    to={{ opacity: 0 }}
                    config={{ duration: 750 }}>
                    {props => (
                        <div className={classes.FlashingPage} style={props}>

                        </div>
                    )}
                </Spring>
                <div className={classes.Centered}>
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ duration: 750, delay: 1500 }}
                    >
                        {props => (
                            <LetterAnimation style={props} text={propsfromapp.firstLine}></LetterAnimation>
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
        </div>

    );
}
export default landingPage;