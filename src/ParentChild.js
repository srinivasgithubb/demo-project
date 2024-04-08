import React from 'react';

class ParentChild extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            updatedSalary:null
        };
    }

    getUpdatedSalary =(salary)=>{
        this.setState({updatedSalary: salary});
    }

    render(){
        return <div> 
            <h1>Employee Component</h1>
            <p>
                <label>Id : <b>{this.props.Id}</b></label>
            </p>
            <p>
                <label>Name : <b>{this.props.Name}</b></label>
            </p>
            <p>
                <label>Location : <b>{this.props.Location}</b></label>
            </p>
            <p>
                <label>Total Salary : <b>{this.props.Salary}</b></label>
            </p>
            <p>
                <label>Updated Total Salary : <b>{this.state.updatedSalary}</b></label>
            </p>
            <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>
        </div>
    }
}
class Salary extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        basic: this.props.BasicSalary,
        hra: this.props.HRA,
        sa: this.props.SpecialAllowance
      };
    }

    getBasicSalary = (event) => {
        this.setState({ basic: event.target.value });
    }

    getHRAValue = (event) => {
        this.setState({hra: event.target.value});
    }

    getSpecialAllowanceValue = (event) => {
        this.setState({sa: event.target.value});
    }
  
    UpdateSalary=()=>{
        let salary = parseInt(this.state.basic) + parseInt(this.state.hra) + parseInt(this.state.sa);
        this.props.onSalaryChanged(salary);
    }
    render() {
      return (
        <div>
            <h1>Salary Details...</h1>
            <p>
                <label>Basic Salary: <input type="text" value={this.state.basic} onChange={this.getBasicSalary}  defaultValue={this.state.basic}></input></label>
            </p>
            <p>
                <label>HRA: <input type="text" value={this.state.hra} onChange={this.getHRAValue} defaultValue={this.state.hra}></input></label>
            </p>
            <p>
                <label>Special Allowance: <input type="text" value={this.state.sa} onChange={this.getSpecialAllowanceValue}  defaultValue={this.state.sa}></input></label>
            </p>
            <button onClick={this.UpdateSalary}>Update</button>
        </div>
      );
    }
  }
  

export default ParentChild;