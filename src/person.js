import React from 'react';

export class Person extends React.Component{
    render(){
        return(
            <div>
                Merhaba {this.props.name}
            </div>
        );
    }
}