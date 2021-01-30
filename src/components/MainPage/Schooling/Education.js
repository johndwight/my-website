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
import Aux from '../../../hoc/Auxiliary';
import Book from '../../../assets/img/open-book.png';
const education = () => {
    return (
        <Aux>
            <div className={classes.Title}>
                <img src={Book} className={classes.CategoryIcon} alt="" />
                <h1 className={classes.TitleText}>Education</h1></div>
            <div className={classes.SchoolWrapper}>

                <School
                    className={classes.School}
                    school="Concordia University"
                    program="Computer Science"
                    gpa="3.53">
                </School>
                <div className={classes.Date}>2019-2023</div>
            </div>


            <div className={classes.SchoolWrapper}>

                <School
                    className={classes.School}
                    school="Concordia University"
                    program="Exercise Science"
                    gpa="3.59">
                </School>
                <div className={classes.Date}>2017-2019</div>

            </div>

        </Aux>

    );
}


export default education;