import React from 'react';

class DataUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBoxValue: '',
      selectedFile: null,
      dropdownValue: '',
      txtStudentResume: '',
    };
  }

  handleTextBoxChange = (event) => {
    this.setState({ textBoxValue: event.target.value });
  };

  handleFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleDropdownChange = (event) => {
    this.setState({ dropdownValue: event.target.value });
  };

  handletxtStudentResume = (event) => {
    this.setState({ txtStudentResume: event.target.value });
  };

  handleSubmit = async () => {
    const formData = new FormData();
    formData.append('textBoxValue', this.state.textBoxValue);
    formData.append('file', this.state.selectedFile);
    formData.append('dropdownValue', this.state.dropdownValue);
    formData.append('txtStudentResume', this.state.txtStudentResume);

    // Replace with your API endpoint
    const apiEndpoint = 'https://your-api-endpoint.com/upload';
    
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Upload successful');
        const data = await response.json();
        // Handle success response
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <div>
        <p>
          <label>Student Resume: <input type="text" value={this.state.txtStudentResume} onChange={this.handletxtStudentResume} ></input></label>
        </p>
        <input 
          type="text" 
          value={this.state.textBoxValue} 
          onChange={this.handleTextBoxChange}
        />
        <input
          type="file"
          onChange={this.handleFileChange}
        />
        <br/>
        <br/>
        <select value={this.state.dropdownValue} onChange={this.handleDropdownChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button onClick={this.handleSubmit}>Upload</button>
      </div>
    );
  }
}

export default DataUploader;
