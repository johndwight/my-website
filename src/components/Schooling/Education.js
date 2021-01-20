/*
    Represents a school I visited, the GPA I had when I attended,
    the relevant courses, skills, and why I chose it.

    Has a school component and a skills component

    Changes from horizontal box to vertical box on mobile
*/

import React from 'react';
import classes from './Education.css';
import School from './School';
import Skill from './Skill';
import Aux from '../../hoc/Auxiliary';
const education = () => {
    return (
        <Aux>


            <h2 className={classes.Title}>Education</h2>
            <h3 className={classes.Centered}>2019-2023</h3>
            <div className={classes.SchoolWrapper}>

                
                <School
                    className={classes.School}
                    school="Concordia University"
                    program="Computer Science"
                    gpa="3.53">
                </School>
                <div className={classes.Skills}>
                    Skills
                    <Skill
                        name="Organization"
                        rating="5/5">
                    </Skill>
                    <Skill
                        name="Problem Assessment"
                        rating="4/5">
                    </Skill>
                    <Skill
                        name="Problem Assessment"
                        rating="4/5">
                    </Skill>
                    <Skill
                        name="Problem Assessment"
                        rating="4/5">
                    </Skill>
                </div>
            </div>

            <h3 className={classes.Centered}>2017-2019</h3>
            <div className={classes.SchoolWrapper}>

                <School
                    className={classes.School}
                    school="Concordia University"
                    program="Exercise Science"
                    gpa="3.59">
                </School>
                <div className={classes.Skills}>
                    Skills
                    <Skill
                        name="Organization"
                        rating="5/5">
                    </Skill>
                    <Skill
                        name="Problem Assessment"
                        rating="4/5">
                    </Skill>
                    <Skill
                        name="Problem Assessment"
                        rating="4/5">
                    </Skill>
                    <Skill
                        name="Problem Assessment"
                        rating="4/5">
                    </Skill>
                </div>
            </div>

        </Aux>

    );
}


export default education;