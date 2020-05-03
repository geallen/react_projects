import React from 'react'
import PropTypes from 'prop-types';
import CelebrityConsumer from '../context';

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
 
    onClickName = (e) =>{
        this.setState({ isVisible : !this.state.isVisible})
    }

    deleteUserOnClick = (dispatch, e) =>{
        const {id} = this.props;
        dispatch({type : "DELETE_USER", payload :id})
    }

    render(){
    const {name, movie, age} = this.props;

    const { isVisible } = this.state;

    return (
        <CelebrityConsumer>
            {
            value => {
                const {dispatch} = value;
                
                return (
                    <div className="col-md-8 mb-4">
                        <div className="card" style={isVisible ? {backgroundColor: '#B0BEC5', color: 'white'} : null}>
                            <div className="card-header d-flex justify-content-between">
                                <h4 className="d-inline" onClick= {this.onClickName}>{name}</h4>
                                <i className="far fa-trash-alt" onClick= {this.deleteUserOnClick.bind(this, dispatch)}  style={{cursor:"pointer"}}></i>
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
        </CelebrityConsumer>
    )
    
}
}
celebrity.prototypes = {
    name : PropTypes.string.isRequired,
    movie : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired
}

