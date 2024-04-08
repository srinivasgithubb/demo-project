import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Id: 101,
            Name: 'Srinivas',
            Location: 'hyderabad',
            Salary: 15000
        };
    };
    render(){
        return(
            <div>
                <h2>App Component</h2>
                <Employee></Employee>
            </div>
        );
    }
}

class Employee extends React.Component{
    render(){
        return(
            <div>
                <h2>Employee Component</h2>
                <Salary></Salary>
            </div>
        );
    }

}

class Salary extends React.Component{
    render(){
        return(
            <div>
                <h2>Salary Component</h2>
            </div>
        );
    }

}

export default App;