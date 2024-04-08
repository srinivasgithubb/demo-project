import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

const employeeContext = React.createContext();


function AppComponent()
{
    const [employee, setEmployee] = useState({Id: 1, Name: 'Srinias', Location: 'Hyderabad', Salary: 15000});

    return(
        <div>
            <h2>Welcome to AppComponent..</h2>
            <employeeContext.Provider value={employee}>
                <EmployeeComponent></EmployeeComponent>
            </employeeContext.Provider>
            
        </div>
    );
}

function EmployeeComponent()
{
    let context = useContext(employeeContext);

    return(
        <div>
            <h2>Welcome to EmployeeComponent..</h2>
            <p>
                <label>Employee Id: {context.Id}</label>
            </p>
            <p>
                <label>Employee Name: {context.Name}</label>
            </p>
            <SalaryComponent></SalaryComponent>
        </div>
    );
}
function SalaryComponent()
{
    let context = useContext(employeeContext);
    return(
        <div>
            <h2>Welcome to SalaryComponent..</h2>
            <p>
                <label>Employee Id: {context.Id}</label>
            </p>
            <p>
                <label>Employee Salary: {context.Salary}</label>
            </p>
        </div>
    );
}



export default AppComponent;