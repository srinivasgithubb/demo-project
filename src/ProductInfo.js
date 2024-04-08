import React from 'react';
import ReactDOM from 'react-dom';

class CustomErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {hasError: false};
    }

    static getDerivedStateFromError(error)
    {
        return {hasError:true};
    }

    componentDidCatch(error, errorInfo)
    {
        console.log(error);
        console.log(errorInfo);
    }

    render()
    {
        if(this.state.hasError)
        {
            return(
                <div>
                    <h2>We are having problems to load your preferred address list.</h2>
                </div>
            );
        }
        else
        {
            return this.props.children;
        }
    }
}


class OrderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address: '',
            quantity: ''
        };
    }

    orderInfoChanged= val=>{
        this.setState({quantity: val});
    }

    addressChanged= val=>{
        this.setState({address: val});
    }

    render(){
        return(
            // Fragment
            <> 
                <h1>Product Order Screen..</h1>
                <ProductInformationComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged}></ProductInformationComponent>
                <AddressComponent address={this.state.address} onAddressChange={this.addressChanged}></AddressComponent>
                <SummaryComponent quantity = {this.state.quantity} address= {this.state.address} 
                onQuantityChange={this.orderInfoChanged}></SummaryComponent>
            </>
        );
    }
}

class ProductInformationComponent extends React.Component{
    constructor(props){
        super(props);
    }

    handleChange = e=>{
        this.props.onQuantityChange(e.target.value);
    }

    render(){
        return(
            <div style={{border:'3px solid red'}}>
                <h2>Product Informtion..</h2>
                <p>
                    <label>Product Name:
                        <select>
                            <option value="Product-1">Product-1</option>
                            <option value="Product-2">Product-2</option>
                            <option value="Product-3">Product-3</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
                </p>
            </div> 
        );    
    }
}

class AddressComponent extends React.Component{
    constructor(props){
        super(props);
    }

    handleChange = e=>{
        this.props.onAddressChange(e.target.value);
    }

    render(){
        return(
            <div style={{border: '3px solid red'}}>
                <h2>Address Information..</h2>
                <p>
                    <label>Address: <textarea value={this.props.address} onChange={this.handleChange}></textarea></label>
                </p>
                <CustomErrorBoundary>
                    <UserPreferredAddressList></UserPreferredAddressList>
                </CustomErrorBoundary>
                
            </div>
        );
    }
}

class UserPreferredAddressList extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        //throw new Error("Not able to load Address List");
            return(
                <div>
                    <h2>
                        Your Existing Address..
                    </h2>
                    <p>
                        Office <br></br>
                        Hyderabad, Telangana
                    </p>
                </div>
            );
    }
}

class SummaryComponent extends React.Component{
    constructor(props){
        super(props);
    }
    handleChange = e=>{
        this.props.onQuantityChange(e.target.value);
    }

    render(){
        return(
            <div style={{border: '3px solid red'}}>
                <h2>Summary Information..</h2>
                <p>
                    <label>Product Name: <b>Product-1</b></label>
                </p>
                <p>
                    <label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
                </p>
                <p>
                    <label>Addrees : <b>{this.props.address}</b></label>
                </p>
                <button>Place Order</button>
             </div>
        );
    }
}



export default OrderComponent;