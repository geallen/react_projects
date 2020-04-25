import React from 'react'

export class FirstComponent extends React.Component{
    render(){
        const veriler=this.props.ilk_list.map((element, index) =>{
            return (
                <li>
                    {index+1}.element = {element}
                </li>
            )
        });
        return(
            <div>Ilk Component<br/>
                {this.props.ilkprop}
                <br/>
                {veriler}
            </div>
        );
    }
}