// import React from 'react';
// import ReactDOM from 'react-dom';


// function reportsHOC(InputComponet, inputData)
// {
//     return class extends React.Component
//     {
//         constructor(props)
//         {
//             super(props);
//             this.state = {
//                 data: [],
//                 columns: inputData.columns,
//                 header : inputData.header
//             };
//         }

//         componentDidMount()
//         {
//             fetch(inputData.url)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     this.setState({
//                         data: result
//                     });
//                 }
//             );
//         }

//         render(){
//             return(
//                 <Data data={this.data}></Data>
//             );
//         }

//     }
// }


// class AdminComponent extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//     }
    
//     render()
//     {
//         return(
//             <div>Loading..</div>
//         );
//     }
// }


// export default AdminComponent;