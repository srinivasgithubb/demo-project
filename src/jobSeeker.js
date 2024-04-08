import React, {useState} from 'react';
import './jobSeeker.css';

function JobSeekerDetails()
{
    const [jobSeeker, setJobSeeker] = useState({status: '', description: '', title: ''});

    function changeJobSeekerInfo(event)
    {
        setJobSeeker({...jobSeeker,[event.target.name]: event.target.value});
    }

    const SaveJobSeekerDetails = async () => {
        const jobSeekerArray = Object.values(jobSeeker);
        alert('SaveJobSeekerDetails');
        alert(JSON.stringify(jobSeekerArray));
        alert(JSON.stringify(jobSeeker));
        try {
            
          // Make a POST request to the REST API endpoint
          const response = await fetch('http://localhost:8080/add-task', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobSeekerArray)
          });
          // Assuming the API returns some data, you can handle it here
          const data = await response.json();
          console.log('Response from server:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      };



    return(
        <div className="container">
            <h2 className='header'>Srinivas Portfolio</h2>
            <p>
                <label> Title : <input type='text' className='input-group' name='title' value={jobSeeker.title} onChange={changeJobSeekerInfo}></input></label>
            </p>
            <p>
                <label> Description : <input type='text' className='input-group' name='description' value = {jobSeeker.description} onChange={changeJobSeekerInfo}></input></label>
            </p>
            <p>
                <label> Status : <input type='text' className='input-group' name='status' value={jobSeeker.status} onChange={changeJobSeekerInfo}></input></label>
            </p>
            <p>
                <button onClick={SaveJobSeekerDetails}>Save</button>
            </p>
            <p>
                ------------------------------------------------------------------------
            </p>
            <p>
                Title is : {jobSeeker.title}
            </p>
            <p>
                Description is : {jobSeeker.description}
            </p>
            <p>
                Status is : {jobSeeker.status}
            </p>
        </div>
    );

}


export default JobSeekerDetails;