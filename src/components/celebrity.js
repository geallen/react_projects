import React from 'react'
import PropTypes from 'prop-types';

export default class celebrity extends React.Component {
    
    static defaultProps = {
        name : "NA",
        movie : "NA",
        age : "NA"
    }
 
    render(){
    const {name, movie, age} = this.props;
    return (
        <div className="col-md-8 mb-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline">{name}</h4>
                    <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                </div>
                <div className="card-body">
                    <p className="card-text">Movie : {movie}</p>
                    <p className="card-text">Age : {age}</p>
                </div>
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

