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
            isVisible : false,
            updateClicked : false,
            name : "",
            movie : "",
            age : ""
        }

    }
 
    onClickName = (e) =>{
        this.setState({ 
            isVisible : !this.state.isVisible,
            updateClicked : false})
    }

    deleteUserOnClick = (dispatch, e) =>{
        const {id} = this.props;
        dispatch({type : "DELETE_USER", payload :id})
    }

    updateClicked = (e) => {
        this.setState({ 
            updateClicked : !this.state.updateClicked,
            isVisible : false})
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
         })        
    }

    updateCelebrity = (dispatch, e) => {
        e.preventDefault();
        const {movie, age} = this.state;
        const {name, id} = this.props;
        const celebrity = {
            id,
            name,
            movie,
            age
        }

        dispatch({type: "UPDATE_USER", payload: celebrity})
    }

    render(){
    const {name, movie, age} = this.props;

    const { isVisible, updateClicked } = this.state;

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
                               <div style={{float:"right"}}>
                               <i className="far fa-edit" style={{paddingRight : "10px"}} onClick = {this.updateClicked}></i>
                                <i className="far fa-trash-alt" onClick= {this.deleteUserOnClick.bind(this, dispatch)}  style={{cursor:"pointer"}}></i>
                               </div>
                            </div>
            
                            {((props) => {
                            if(isVisible) { 
                            return ( 
                            <div className="card-body">
                                <p className="card-text">Movie : {movie}</p>
                                <p className="card-text">Age : {age}</p>
                            </div>)
                        } else if(updateClicked){
                           return ( 
                               <form onSubmit={this.updateCelebrity.bind(this, dispatch)}>
                            <div className="card-body">
                            <p className="card-text"> <label htmlFor="movie">Movie :</label> <input type="text" name="movie" id="movie" placeholder={movie} onChange={this.changeInput}/> </p>
                            <p className="card-text"><label htmlFor="age">Age:</label> <input type="text" name="age" id="age" placeholder={age} onChange={this.changeInput}/></p>
                            <button type="submit" className="btn btn-info">Update</button>
                        </div></form> )
                        } else{
                          return (null)
                            }
                        })()}
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

