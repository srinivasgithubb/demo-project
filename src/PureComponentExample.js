import React from 'react';
import ReactDOM from 'react-dom';

class PureComponentExample extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <ChangeDetection></ChangeDetection>
                <EmployeeData></EmployeeData>
            </div>
        );
    }
}

class ChangeDetection extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {
            employeeCount : 0
        };

        setInterval(this.getEmplyeeCount, 5000);
    }

    componentDidMount()
    {
        this.getEmplyeeCount();
    }

    getEmplyeeCount = () =>{
        fetch('http://localhost:52985/api/Employee/GetAll')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    employeeCount: result.length
                });
            }
        );
    }

    render()
    {
        alert('Notification');
        return(
            <div>
                <h1>Welcome to Pure Component Example</h1>
                <p>
                    <label>Number of Employees are : <b>{this.state.employeeCount}</b> </label>
                </p>
            </div>
        );
    }
}

class EmployeeData extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            employees : []
        };
    }

    componentDidMount()
    {
        this.GetEmployees();
    }

    GetEmployees = () =>
    {
        fetch('http://localhost:52985/api/Employee/GetAll')
        .then(res => res.json())
        .then( (result) => { this.setState({employees: result}); } );
    }

    LoadEmployees = () =>
    {
        this.GetEmployees();
    }

    render()
    {
        return(
            <div>
                <h2>Employees Data..</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(emp => (
                        <tr key = {emp.Id}>
                            <td>{emp.Id}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Location}</td>
                            <td>{emp.Salary}</td>
                        </tr>
                        ))}

                    </tbody>
                </table>
                <button onClick={this.LoadEmployees}>Reload</button>
            </div>
        );
    }
}


export default PureComponentExample;