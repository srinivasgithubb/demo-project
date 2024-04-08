import React, {useState, useEffect} from 'react';

function UseEffectInReact()
{
        //console.log(document.readyState);
    const [employees, SetEmployees] = useState([]);
    const [searchText, setSearchText] = useState('');


useEffect(() => {
    fetch('http://localhost:52985/api/Employee/'+searchText)
    .then(res => res.json())
    .then(
        (result) => {
            SetEmployees(result);
        }
    );
},[searchText]);

function onSearchTextChange(event)
{
    setSearchText(event.target.value);
}

    return(
        <div>
            <h2>Employee Data</h2>
            <p>
                <label>Search By Name : <input type='text' value={searchText} onChange={onSearchTextChange}></input></label>
            </p>
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
                    {employees.map( emp => (
                        <tr key = {emp.Id}>
                        <td> {emp.Id} </td>
                        <td> {emp.Name} </td>
                        <td> {emp.Location} </td>
                        <td> {emp.Salary} </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}



export default UseEffectInReact;