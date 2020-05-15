import React from 'react';

const List = props => {
    const userList = props.data && props.data.userList && props.data.userList.data.length ? props.data.userList.data : [];
    const handleClick = id => {
        props.fetchDetails(id);
        props.showDetails();
        props.showList();
    }
    return(
        <table className="list-container">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map((item,index) => {
                        return(
                            <tr key={index} onClick={() => handleClick(item.id)}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_age}</td>
                                <td>{item.employee_salary}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
        </table>
    )
}

export default List;