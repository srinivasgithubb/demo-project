import React, {useState} from 'react';

function HooksInReact()
{
    const [employee, setEmployee] = useState({Id: '', Name: '', Location: '', Salary: ''});

    function changeEmployeeInfo(event)
    {
        setEmployee({...employee,[event.target.name]: event.target.value});
    }

    return(
        <div>
            <h2>Welcome to Employee Function Component</h2>
            <p>
                <label>Employee Id : <input type='text' name='Id' value={employee.Id} onChange={changeEmployeeInfo}></input></label>
            </p>
            <p>
                <label>Employee Name : <input type='text' name='Name' value={employee.Name} onChange={changeEmployeeInfo}></input></label>
            </p>
            <p>
                <label>Employee Location : <input type='text' name='Location' value = {employee.Location} onChange={changeEmployeeInfo}></input></label>
            </p>
            <p>
                <label>Employee Salary : <input type='text' name='Salary' value={employee.Salary} onChange={changeEmployeeInfo}></input></label>
            </p>
            <p>
                ------------------------------------------------------------------------
            </p>
            <p>
                Entered Id is : {employee.Id}
            </p>
            <p>
                Entered Name is : {employee.Name}
            </p>
            <p>
                Entered Location is : {employee.Location}
            </p>
            <p>
                Entered Salary is : {employee.Salary}
            </p>
            <SalaryComponent salary={employee.Salary} onSlaryChange={changeEmployeeInfo}></SalaryComponent>
        </div>
    );

}

const SalaryComponent = ({salary, onSlaryChange}) =>
{
    return(
        <div>
        <h2>Welcome to salary componet..</h2>
        <p>
            <label>Employee Salary : <input type='text' name='Salary' 
                value={salary} onChange={onSlaryChange}></input></label>
        </p>
    </div>
    );
}


export default HooksInReact;