import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class PortalExample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            employees: [],
            showModel : false
        };
    }

    componentDidMount()
    {
        fetch("http://localhost:52985/api/Employee/GetAll")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        employees: result
                    });
                }
            );
    }

    editEmployee = ()=>
    {
        this.setState({showModel : !this.state.showModel});
    }

    render()
    {
        return(
            <div>
                <h2>Employee Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(emp => (
                            <tr key ={emp.Id}>
                            <td>{emp.Id}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Location}</td>
                            <td>{emp.Salary}</td>
                            <td>
                                <button onClick={this.editEmployee}>Edit</button>
                                <Modal open = {this.state.showModel} close= {this.editEmployee}>
                                    <EmployeeModal employee = {emp}></EmployeeModal>
                                </Modal>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Modal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.open?ReactDOM.createPortal(
                <div className='modal'>
                    <button className='modal_button' onClick={this.props.close}>X</button>
                    {this.props.children}
                </div>, document.body) : null
            );
    }
}

class EmployeeModal extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Employee Details</h2>
                <p>
                    <label>Employee Id : <input type='text' value={this.props.employee.Id}></input></label>
                </p>
                <p>
                    <label>Employee Name : <input type="text" value={this.props.employee.Name}></input></label>
                </p>
                <p>
                    <label>Employee Location : <input type="text" value={this.props.employee.Location}></input></label>
                </p>
                <p>
                    <label>Employee Salary : <input type="text" value={this.props.employee.Salary}></input></label>
                </p>
                <input type="submit" value = "Save"></input>
            </div>
        );
    }
}

export default PortalExample;