import React from 'react';
const school = (props) => {
    return (
        <div>
            <p>{props.school}</p>
            <p>{props.program}</p>
            <p>{props.gpa}</p>
        </div>

    );
}


export default school;