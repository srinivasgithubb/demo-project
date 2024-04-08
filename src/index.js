import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Myroot from './Myroot1';
import ParentChild from './ParentChild';
import DataUploader from './DataUploader';
import Rough from './Rough';
import ComponentCommunication from './ComponentCommunication';
import EmployeeList from './EmployeeList';
import Employee from './Employee';
import ProductInfo from './ProductInfo';
import reportWebVitals from './reportWebVitals';
import RefExample from './RefExample';
import HigherOrderComponent from './HigherOrderComponent';
import PortalsInReact from './PortalsInReact';
import PureComponentExample from './PureComponentExample';
import HooksInReact from './hooksInReact';
import UseEffectInReact from './useEffectInReact';
import UseContextinReact from './UseContextinReact';
import SpeechToText from './SpeechToText';
import RouteComponent from './RouteComponent';
import SampleRoute from './SampleRoute';

const employees = [
  {Id: 101, Name: 'Srinivas', Location: 'Hyderabad', Salary: 123},
  {Id: 102, Name: 'Vasu', Location: 'Chennai', Salary: 321},
  {Id: 103, Name: 'Sara', Location: 'USA', Salary: 159}
];

const element = <Employee employeeList={employees} />;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Myroot /> */}
    {/* <ParentChild Id="101" Name="Srinivas" Location="Hyderabd" Salary="600" BasicSalary="100" HRA="200" SpecialAllowance="300" /> */}
    {/* <DataUploader/> */}
    {/* <Rough Id="101" Name="Srinivas" Location="Hyderabd" Salary="12300" BasicSalary="100" HRA="200" SpecialAllowance="300"/> */}
    {/* <ComponentCommunication/> */}
    {/* <EmployeeList/> */}
    {/* <Employee /> */}
    {/* {element} */}
    {/* <ProductInfo/> */}
    {/* <RefExample/> */}
    {/* <HigherOrderComponent/> */}
    {/* <PortalsInReact/> */}
    {/* <PureComponentExample/> */}
    {/* <HooksInReact/> */}
    {/* <UseEffectInReact/> */}
    {/* <UseContextinReact/> */}
    {/* <SpeechToText/> */}
    <RouteComponent/>
    {/* <SampleRoute></SampleRoute> */}
  </React.StrictMode>
);

// const myroot1 = ReactDOM.createRoot(document.getElementById('myroot1'));
// myroot1.render(
//     <Myroot1 />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
