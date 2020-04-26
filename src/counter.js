import React from 'react';
import { render } from '@testing-library/react';

export class Counter extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.arttir}>Arttir</button>
                <h3 style={{color:"red", fontSize:"20px"}}>Yeni deger : {this.props.sayi}</h3>
            </div>
        );
    }
}