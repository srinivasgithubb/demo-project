import './App.css';
import React from 'react';

// function Myroot() {
//     return(
//         <div className='App-link'>
//             <h1>Hey, Hello My Root132 world!</h1>
//             <h2> Let's dot it</h2>
//         </div>
//     );
// }

class Employee extends React.Component{
    state = {counter: 0};
    addEmployee =()=>{
       this.setState({counter: this.state.counter+1})
        // alert('Adding a new employee');
        // alert('Add Employee Button is clicked' + this.counter + '    times');
    }

    render(){
        return<div className='App-link'> 
            <h2>Welcome to Employee Component..</h2>
            <p>
                <button onClick={this.addEmployee}>Add Employee</button>
            </p>
            <h1>Hey, Hello My Root132 world!</h1>
            <h2> Let's dot it</h2>
            <p>
                <label>Add Employee Button is Clicked: <b>{this.state.counter}</b> </label>
            </p>
        </div>
    }
}

export default Employee;