/*
    Represents a school I visited, the GPA I had when I attended,
    the relevant courses, skills, and why I chose it.

    Has a school component and a skills component

    Changes from horizontal box to vertical box on mobile
*/

import React from 'react';
import classes from './Schooling.css';
import School from './School';
import Skill from './Skill';

const schooling = () => {
    return (
        <div className={classes.SchoolWrapper}>
            <School
                className={classes.School}
                school="Concordia"
                program="Exercise Science"
                gpa="3.59">
            </School>
            <div className={classes.Skills}>
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
                <Skill
                    name="Problem Assessment"
                    rating="4/5">
                </Skill>
            </div>



        </div>

    );
}


export default schooling;