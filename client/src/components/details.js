import React from 'react';

const Details = props => {
    if (!props.data.userDetails) { return null }
    else {
        const handleClick = () => {
            props.showDetails();
            props.showList();
        }
        return (
            <div className="details-container">
                <span>{`ID : ${props.data.userDetails.id}`}</span>
                <span>{`Name : ${props.data.userDetails.employee_name}`}</span>
                <span>{`Age : ${props.data.userDetails.employee_age}`}</span>
                <span>{`Salary : ${props.data.userDetails.employee_salary}`}</span>
                <button onClick={() => handleClick()}>Back to User List</button>
            </div>
        )
    }

}
export default Details;