import React from 'react'
import PropTypes from 'prop-types';

export default class celebrity extends React.Component {
    
    static defaultProps = {
        name : "NA",
        movie : "NA",
        age : "NA"
    }

    constructor(props){
        super(props);

        this.state = {
            isVisible : false
        }

    }
 
    onClickName = (e) => {
        this.setState({ isVisible : true})
    }

    render(){
    const {name, movie, age} = this.props;

    const { isVisible } = this.state;
    return (
        <div className="col-md-8 mb-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick= {this.onClickName}>{name}</h4>
                    <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                </div>

                { isVisible ? 
                
                <div className="card-body">
                    <p className="card-text">Movie : {movie}</p>
                    <p className="card-text">Age : {age}</p>
                </div>
                : null}
                
            </div>             
        </div>
    )
}
}
celebrity.prototypes = {
    name : PropTypes.string.isRequired,
    movie : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired
}

