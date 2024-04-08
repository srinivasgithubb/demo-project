import React, { useState, useEffect } from 'react';

const EmployeeList = () => {
  // State to store the list of employees
  const [employees, setEmployees] = useState([]);

  // State to indicate loading status
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch employees from the API
  const fetchEmployees = async () => {
    try {
      // Updated URL
      const response = await fetch('http://localhost:8080/get-tasks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setEmployees(data);
    }
    catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } 
    finally {
      setIsLoading(false);
    }
  };

  // Use useEffect to call fetchEmployees when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            ID: {employee[0]}, Name: {employee[1]}, Description: {employee[2]}, 
            Status: {employee[3]}, Created At: {employee[4]}, Updated At: {employee[5]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;