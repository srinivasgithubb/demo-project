import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom';

class RefExample extends React.Component
{
    static getDerivedStateFromProps(props, state)
    {
        alert('2.getDerivedStateFromProps');
    }

    componentDidMount()
    {
        alert('4.componentDidMount');
    }

    constructor(props)
    {
        alert('1.contructor');
        super(props);
        this.quantityRef= React.createRef(); 
    }


    IncrementValue = ()=> {
        this.quantityRef.current.value++;
    };

    render()
    {
        alert('3.Render');
        return(
            <div>
                <p>
                    <label>Increment: <input type ="text" ref={this.quantityRef}></input></label> 
                    <button onClick={this.IncrementValue}>+</button>
                </p>
            </div>
        );
    }
}

export default RefExample;