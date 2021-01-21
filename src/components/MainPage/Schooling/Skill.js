import React from 'react';
import Aux from '../../../hoc/Auxiliary';
const skill = (props) => {
    return (
        <tr>
            <td>
                <strong>{props.name}</strong>
            </td>
            <td>
                {props.rating}
            </td>
        </tr >


    );
}


export default skill;