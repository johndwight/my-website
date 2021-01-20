import React from 'react';
import classes from './School.css';

const school = (props) => {
    return (
        <table className={classes.Table}>
            <tbody>
                <tr>
                    <td><strong>School:</strong></td>
                    <td>{props.school}</td>
                </tr>
                <tr>
                    <td><strong>Program: </strong></td>
                    <td>{props.program}</td>
                </tr>
                <tr>
                    <td><strong>GPA: </strong></td>
                    <td>{props.gpa}/4.30</td>
                </tr>
            </tbody>


        </table>

    );
}


export default school;